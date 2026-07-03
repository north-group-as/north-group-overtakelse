"use client";

import { useId, useRef, useState, type FormEvent } from "react";

type LeadTypeUi = "bedrift" | "jobbsoker" | "annet";

type FieldErrorKey =
  | "name"
  | "email"
  | "phone"
  | "company"
  | "preferredDate"
  | "employees"
  | "message"
  | "leadType";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormState {
  status: FormStatus;
  message?: string;
  fieldErrors?: Partial<Record<FieldErrorKey, string>>;
}

interface ContactFormProps {
  title?: string;
  description?: string;
  defaultSubject?: string;
  className?: string;
  variant?: "default" | "course";
  /**
   * Kurs-slug videresendes med innsendingen når variant="course" så
   * Monday-leadet kan kobles tilbake til riktig kurs.
   */
  courseSlug?: string;
  /**
   * Brukes hovedsakelig av tester for å overstyre endepunktet uten å
   * måtte sette opp en mock-server. I prod brukes alltid /api/contact.
   */
  endpoint?: string;
}

const INITIAL_STATE: FormState = { status: "idle" };
const ENDPOINT_DEFAULT = "/api/contact";
const GENERIC_ERROR = "Noe gikk galt, prøv igjen senere.";

export default function ContactForm({
  title = "Kontakt oss for pris",
  description = "Vi tilpasser tilbudet for hver bedrift. Fyll ut, så tar vi kontakt.",
  defaultSubject,
  className,
  variant = "default",
  courseSlug,
  endpoint = ENDPOINT_DEFAULT,
}: ContactFormProps) {
  const [state, setState] = useState<FormState>(INITIAL_STATE);
  const [leadType, setLeadType] = useState<LeadTypeUi>("bedrift");
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const pending = state.status === "submitting";
  const showEmployees = variant === "course" || leadType === "bedrift";
  const showCompany = variant === "course" || leadType === "bedrift";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    setState({ status: "submitting" });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        credentials: "same-origin",
      });

      let payload: {
        status?: string;
        message?: string;
        fieldErrors?: Partial<Record<FieldErrorKey, string>>;
      } = {};
      try {
        payload = (await response.json()) as typeof payload;
      } catch {
        // Server kan returnere ikke-JSON (proxy-feil, html error-side).
      }

      if (response.ok && payload.status === "success") {
        setState({
          status: "success",
          message: payload.message ?? "Takk! Vi har mottatt meldingen din.",
        });
        form.reset();
        setLeadType("bedrift");
        statusRef.current?.focus();
        return;
      }

      if (response.status === 429) {
        setState({
          status: "error",
          message:
            payload.message ??
            "Du har sendt mange meldinger på kort tid. Vent et minutt og prøv igjen.",
        });
        return;
      }

      if (response.status === 400 && payload.fieldErrors) {
        setState({
          status: "error",
          message:
            payload.message ?? "Skjemaet inneholder feil. Sjekk feltene og prøv igjen.",
          fieldErrors: payload.fieldErrors,
        });
        const firstError = Object.keys(payload.fieldErrors)[0];
        if (firstError) {
          const el = formRef.current?.querySelector<HTMLElement>(`#${firstError}`);
          el?.focus();
        }
        return;
      }

      setState({ status: "error", message: GENERIC_ERROR });
    } catch {
      setState({ status: "error", message: GENERIC_ERROR });
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      method="post"
      action={endpoint}
      noValidate
      aria-describedby={state.status !== "idle" ? "contact-status" : undefined}
      className={
        "rounded-2xl border border-navy-dark/10 bg-gray-50 p-8 lg:p-10 " + (className ?? "")
      }
    >
      <h2 className="font-display text-2xl font-extrabold text-navy-dark">{title}</h2>
      <p className="mt-3 text-sm text-navy-dark/75 font-light">{description}</p>

      <div className="mt-6 grid gap-4">
        <input type="hidden" name="formVariant" value={variant} />
        {courseSlug ? (
          <input type="hidden" name="courseSlug" value={courseSlug} />
        ) : null}
        {defaultSubject ? (
          <input type="hidden" name="subject" defaultValue={defaultSubject} />
        ) : null}
        <HoneypotField />
        {variant !== "course" ? (
          <LeadTypeField value={leadType} onChange={setLeadType} />
        ) : null}
        <Field
          id="name"
          label="Navn"
          type="text"
          autoComplete="name"
          required
          error={state.fieldErrors?.name}
        />
        <Field
          id="email"
          label="E-post"
          type="email"
          autoComplete="email"
          required
          error={state.fieldErrors?.email}
        />
        <Field
          id="phone"
          label="Telefon"
          type="tel"
          autoComplete="tel"
          required={variant === "course"}
          error={state.fieldErrors?.phone}
        />
        {showCompany ? (
          <Field
            id="company"
            label="Bedriftsnavn"
            type="text"
            autoComplete="organization"
            required={variant === "course"}
            error={state.fieldErrors?.company}
          />
        ) : null}
        {variant === "course" ? (
          <Field
            id="preferredDate"
            label="Ønsket startdato"
            type="date"
            error={state.fieldErrors?.preferredDate}
          />
        ) : null}
        {showEmployees ? (
          <Field
            id="employees"
            label={variant === "course" ? "Antall deltakere" : "Antall ansatte"}
            type="number"
            min={1}
            required={variant === "course"}
            error={state.fieldErrors?.employees}
          />
        ) : null}
        <MessageField error={state.fieldErrors?.message} />

        <button
          type="submit"
          disabled={pending}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-green px-6 py-3.5 text-sm font-semibold text-navy-dark shadow-lg shadow-green/25 transition-all hover:bg-green-dark hover:shadow-green/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {pending ? "Sender..." : "Send melding"}
        </button>

        <div
          id="contact-status"
          ref={statusRef}
          tabIndex={-1}
          role={state.status === "error" ? "alert" : "status"}
          aria-live={state.status === "error" ? "assertive" : "polite"}
          className={
            state.status === "success"
              ? "mt-2 rounded-xl border border-green/40 bg-green-light p-4 text-sm font-medium text-navy-dark outline-none"
              : state.status === "error"
                ? "mt-2 rounded-xl border border-red-300 bg-red-50 p-4 text-sm font-medium text-red-900 outline-none"
                : "sr-only"
          }
        >
          {state.message}
        </div>
      </div>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
  min?: number;
  error?: string;
}

function Field({ id, label, type, autoComplete, required, min, error }: FieldProps) {
  const errorId = useId();
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-dark/70"
      >
        {label}
        {required ? (
          <>
            <span aria-hidden="true" className="text-navy-dark"> *</span>
            <span className="sr-only"> (påkrevd)</span>
          </>
        ) : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        aria-required={required ? true : undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        min={min}
        className="w-full rounded-xl border border-navy-dark/15 bg-white px-4 py-3 text-sm text-navy-dark placeholder:text-navy-dark/65 focus:border-green focus:outline-none focus:ring-2 focus:ring-green/20"
      />
      {error ? (
        <p id={errorId} className="mt-1.5 text-xs font-medium text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function LeadTypeField({
  value,
  onChange,
}: {
  value: LeadTypeUi;
  onChange: (v: LeadTypeUi) => void;
}) {
  const options: { value: LeadTypeUi; label: string; description: string }[] = [
    { value: "bedrift", label: "Bedrift", description: "Rekruttering, HR eller kurs" },
    { value: "jobbsoker", label: "Jobbsøker", description: "Send CV eller spør om muligheter" },
    { value: "annet", label: "Annet", description: "Generell henvendelse" },
  ];

  return (
    <fieldset className="flex flex-col">
      <legend className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-dark/70">
        Type henvendelse
      </legend>
      <input type="hidden" name="leadType" value={value} />
      <div className="grid gap-2 sm:grid-cols-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            aria-pressed={value === opt.value}
            className={
              "rounded-xl border px-4 py-3 text-left text-sm transition " +
              (value === opt.value
                ? "border-green bg-green/10 text-navy-dark"
                : "border-navy-dark/15 bg-white text-navy-dark/75 hover:border-green/50 hover:text-navy-dark")
            }
          >
            <span className="block font-semibold">{opt.label}</span>
            <span className="block text-[11px] font-light text-navy-dark/60">
              {opt.description}
            </span>
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function MessageField({ error }: { error?: string }) {
  const errorId = useId();
  return (
    <div className="flex flex-col">
      <label
        htmlFor="message"
        className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-dark/70"
      >
        Melding
        <span aria-hidden="true" className="text-navy-dark"> *</span>
        <span className="sr-only"> (påkrevd)</span>
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        required
        maxLength={5000}
        aria-required="true"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="w-full rounded-xl border border-navy-dark/15 bg-white px-4 py-3 text-sm text-navy-dark placeholder:text-navy-dark/65 focus:border-green focus:outline-none focus:ring-2 focus:ring-green/20"
      />
      {error ? (
        <p id={errorId} className="mt-1.5 text-xs font-medium text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Skjult honeypot-felt. Bruker `inert` for å gjøre hele subtreet utilgjengelig
 * for både fokus og hjelpemidler (skjermlesere). `inert` impliserer aria-hidden
 * og blokkerer all fokuserbarhet (også programmatisk via .focus()), så vi
 * unngår WCAG SC 4.1.2-bruddet "focusable element inside aria-hidden".
 * Off-screen positioning sørger for visuell skjuling.
 * Vanlige brukere vil aldri fokusere eller fylle ut dette feltet; mange
 * spam-boter fyller alle felt med "name"-attributt automatisk.
 */
function HoneypotField() {
  return (
    <div
      inert
      style={{
        position: "absolute",
        left: "-10000px",
        top: "auto",
        width: "1px",
        height: "1px",
        overflow: "hidden",
      }}
    >
      <label htmlFor="bot_field">La denne stå tom</label>
      <input
        id="bot_field"
        name="bot_field"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </div>
  );
}
