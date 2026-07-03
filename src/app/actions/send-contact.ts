"use server";

import { Resend } from "resend";
import { BUSINESS } from "@/lib/business-data";
import { createMondayItem, type LeadSource } from "@/lib/integrations/monday";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<
    Record<
      "name" | "email" | "phone" | "company" | "preferredDate" | "employees" | "message" | "leadType",
      string
    >
  >;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadType = "bedrift" | "jobbsoker" | "annet";

const LEAD_TYPE_LABEL: Record<LeadType, string> = {
  bedrift: "Bedriftshenvendelse",
  jobbsoker: "Jobbsøker",
  annet: "Annet",
};

function resolveLeadType(input: string): LeadType {
  if (input === "jobbsoker" || input === "annet" || input === "bedrift") return input;
  return "bedrift";
}

export async function sendContactMessage(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const preferredDate = String(formData.get("preferredDate") ?? "").trim();
  const employees = String(formData.get("employees") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const subject = String(formData.get("subject") ?? "Henvendelse fra nettsiden").trim();
  const formVariant = String(formData.get("formVariant") ?? "default").trim();
  const isCourse = formVariant === "course";
  const leadType: LeadType = isCourse ? "bedrift" : resolveLeadType(String(formData.get("leadType") ?? "bedrift"));

  const fieldErrors: ContactFormState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "Navn er påkrevd.";
  if (!email) fieldErrors.email = "E-post er påkrevd.";
  else if (!EMAIL_RE.test(email)) fieldErrors.email = "Ugyldig e-postadresse.";
  if (isCourse) {
    if (!phone) fieldErrors.phone = "Telefon er påkrevd.";
    if (!company) fieldErrors.company = "Bedriftsnavn er påkrevd.";
    if (!employees) fieldErrors.employees = "Antall deltakere er påkrevd.";
  }
  if (!message) fieldErrors.message = "Melding er påkrevd.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Skjemaet inneholder feil. Sjekk feltene og prøv igjen.",
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY mangler i miljøet.");
    return {
      status: "error",
      message: "Vi kunne ikke sende meldingen akkurat nå. Prøv igjen senere eller ring oss.",
    };
  }

  const resend = new Resend(apiKey);
  const fromAddress = process.env.RESEND_FROM_ADDRESS ?? "Skjema <noreply@northgroup.no>";

  const lines = [
    `Type henvendelse: ${LEAD_TYPE_LABEL[leadType]}`,
    `Navn: ${name}`,
    `E-post: ${email}`,
    phone ? `Telefon: ${phone}` : null,
    company ? `Bedrift: ${company}` : null,
    preferredDate ? `Ønsket startdato: ${preferredDate}` : null,
    employees ? (isCourse ? `Antall deltakere: ${employees}` : `Antall ansatte: ${employees}`) : null,
    "",
    "Melding:",
    message,
  ].filter(Boolean);

  try {
    const result = await resend.emails.send({
      from: fromAddress,
      to: BUSINESS.email,
      replyTo: email,
      subject: `[${subject}] ${name}`,
      text: lines.join("\n"),
    });
    if (result.error) {
      console.error("Resend error:", result.error);
      return {
        status: "error",
        message:
          "Vi fikk ikke sendt meldingen. Prøv igjen om litt eller ring oss på " +
          BUSINESS.phoneDisplay +
          ".",
      };
    }
  } catch (err) {
    console.error("Send-contact failed:", err);
    return {
      status: "error",
      message:
        "Vi fikk ikke sendt meldingen. Prøv igjen om litt eller ring oss på " +
        BUSINESS.phoneDisplay +
        ".",
    };
  }

  // Monday-lead opprettes etter at e-post er sendt. Feil her skal ikke
  // hindre at brukeren får success: vi har allerede mottatt henvendelsen.
  try {
    const mondaySource: LeadSource = leadType === "jobbsoker" ? "jobb" : isCourse ? "kurs" : "kontakt";
    await createMondayItem({
      source: mondaySource,
      name,
      phone,
      email,
      message,
      company: company || undefined,
      preferredDate: preferredDate || undefined,
      employees: employees || undefined,
    });
  } catch (err) {
    console.error("[monday] Lead-opprettelse feilet (ikke kritisk):", err);
  }

  return {
    status: "success",
    message: "Takk! Vi har mottatt meldingen din og tar kontakt innen 24 timer.",
  };
}
