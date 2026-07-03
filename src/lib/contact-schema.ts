/**
 * Validering for kontaktskjema-data.
 *
 * Brukes av API-route (/api/contact) slik at vi har én sannhet for hva som
 * er gyldig input i det aktive kontaktskjemaet.
 *
 * Bevisst manuelt skrevet (uten Zod) for å unngå ny tung dependency. Hvis
 * skjemaet vokser, vurder å bytte til Zod.
 */

export type LeadType = "bedrift" | "jobbsoker" | "annet";

export type FormVariant = "default" | "course";

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  company: string;
  preferredDate: string;
  employees: string;
  message: string;
  subject: string;
  formVariant: FormVariant;
  leadType: LeadType;
  // Kurs-slug videresendes bare når formVariant === "course".
  // Brukes til å koble Monday-leadet til riktig kurs.
  courseSlug: string;
  // Honeypot. Skal alltid være tom streng for legitime brukere. Botene
  // fyller den ofte ut fordi name-attributten ser ut som et vanlig felt.
  botField: string;
}

export type FieldKey =
  | "name"
  | "email"
  | "phone"
  | "company"
  | "preferredDate"
  | "employees"
  | "message"
  | "leadType";

export type FieldErrors = Partial<Record<FieldKey, string>>;

export type ValidationResult =
  | { ok: true; data: ContactFormInput }
  | { ok: false; fieldErrors: FieldErrors; honeypotTripped?: boolean };

// Bevisst enkel regex. Vi gjør IKKE full RFC 5322-validering;
// målet er å fange åpenbare typo, ikke å sertifisere e-poster.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_LENGTHS = {
  name: 200,
  email: 254,
  phone: 40,
  company: 200,
  preferredDate: 40,
  employees: 20,
  message: 5000,
  subject: 200,
  courseSlug: 100,
} as const;

function trim(value: FormDataEntryValue | null | undefined, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function resolveLeadType(input: string): LeadType {
  if (input === "jobbsoker" || input === "annet" || input === "bedrift") return input;
  return "bedrift";
}

function resolveVariant(input: string): FormVariant {
  return input === "course" ? "course" : "default";
}

/**
 * Validerer FormData fra kontaktskjemaet. Bygger trimmet/lengde-kuttet
 * input-objekt og returnerer evt. feilmeldinger per felt.
 *
 * Honeypot: hvis `bot_field` har innhold, returneres ok=false med
 * honeypotTripped=true. Kalleren skal da svare med generisk "success" til
 * klienten (for ikke å lekke deteksjonen) men IKKE forwarde til Monday.
 */
export function validateContactForm(formData: FormData): ValidationResult {
  const name = trim(formData.get("name"), MAX_LENGTHS.name);
  const email = trim(formData.get("email"), MAX_LENGTHS.email).toLowerCase();
  const phone = trim(formData.get("phone"), MAX_LENGTHS.phone);
  const company = trim(formData.get("company"), MAX_LENGTHS.company);
  const preferredDate = trim(formData.get("preferredDate"), MAX_LENGTHS.preferredDate);
  const employees = trim(formData.get("employees"), MAX_LENGTHS.employees);
  const message = trim(formData.get("message"), MAX_LENGTHS.message);
  const subject = trim(formData.get("subject"), MAX_LENGTHS.subject) || "Henvendelse fra nettsiden";
  const formVariant = resolveVariant(trim(formData.get("formVariant"), 20));
  const isCourse = formVariant === "course";
  // Slug saniteres til alphanumerisk + bindestrek/understrek for å unngå at
  // input fra et manipulert skjema lekker uvanlige tegn videre til Monday.
  const courseSlugRaw = trim(formData.get("courseSlug"), MAX_LENGTHS.courseSlug);
  const courseSlug = isCourse ? courseSlugRaw.replace(/[^a-z0-9_-]/gi, "") : "";
  const leadType: LeadType = isCourse
    ? "bedrift"
    : resolveLeadType(trim(formData.get("leadType"), 20));
  const botField = trim(formData.get("bot_field"), 200);

  // Honeypot tripper FØR vi sjekker andre felter, vi vil ikke
  // lekke noe om hvorfor vi ignorerer henvendelsen.
  if (botField.length > 0) {
    return {
      ok: false,
      fieldErrors: {},
      honeypotTripped: true,
    };
  }

  const fieldErrors: FieldErrors = {};
  if (!name) fieldErrors.name = "Navn er påkrevd.";
  if (!email) fieldErrors.email = "E-post er påkrevd.";
  else if (!EMAIL_RE.test(email)) fieldErrors.email = "Ugyldig e-postadresse.";
  if (isCourse) {
    if (!phone) fieldErrors.phone = "Telefon er påkrevd.";
    if (!company) fieldErrors.company = "Bedriftsnavn er påkrevd.";
    if (!employees) fieldErrors.employees = "Antall deltakere er påkrevd.";
  }
  if (!message) fieldErrors.message = "Melding er påkrevd.";
  else if (message.length > MAX_LENGTHS.message) {
    fieldErrors.message = `Meldingen kan ikke være lengre enn ${MAX_LENGTHS.message} tegn.`;
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      phone,
      company,
      preferredDate,
      employees,
      message,
      subject,
      formVariant,
      leadType,
      courseSlug,
      botField,
    },
  };
}

export const CONTACT_FORM_LIMITS = MAX_LENGTHS;
