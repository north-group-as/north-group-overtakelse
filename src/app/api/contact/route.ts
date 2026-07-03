/**
 * POST /api/contact
 *
 * Tar imot kontaktskjema-innsendinger fra northgroup.no og videreformidler
 * til Monday.com (CRM-board) samt sender intern e-post via Resend.
 *
 * Sikkerhet:
 * - Token (MONDAY_API_TOKEN / RESEND_API_KEY) kun server-side, aldri
 *   eksponert til klient eller frontend-bundle.
 * - Rate-limit 5 innsendinger / IP / 60s. Returnerer 429 + Retry-After.
 * - Honeypot-felt (bot_field): boter får 200-svar uten å treffe Monday.
 * - PII (e-post, telefon, IP, melding) hashes/redaktes i logger; aldri
 *   logget i klartekst.
 * - Generisk feilmelding til klient. Ingen stacktrace eller API-respons
 *   fra Monday/Resend lekkes utover.
 *
 * Returnerer JSON:
 *   200: { status: "success", message }
 *   400: { status: "error", message, fieldErrors? }
 *   429: { status: "error", message } + Retry-After-header
 *   500: { status: "error", message }
 */

import { createHash } from "node:crypto";
import type { NextRequest } from "next/server";
import { Resend } from "resend";
import { BUSINESS } from "@/lib/business-data";
import { validateContactForm, type ContactFormInput } from "@/lib/contact-schema";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { submitContactToMonday } from "@/lib/monday";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MESSAGES = {
  success: "Takk! Vi har mottatt meldingen din og tar kontakt innen 24 timer.",
  validationError: "Skjemaet inneholder feil. Sjekk feltene og prøv igjen.",
  rateLimited:
    "Du har sendt mange meldinger på kort tid. Vent et minutt og prøv igjen.",
  generic: "Noe gikk galt, prøv igjen senere.",
} as const;

const RATE_LIMIT = { limit: 5, windowMs: 60_000 };

const LEAD_TYPE_LABEL: Record<ContactFormInput["leadType"], string> = {
  bedrift: "Bedriftshenvendelse",
  jobbsoker: "Jobbsøker",
  annet: "Annet",
};

function isSameOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  return origin === req.nextUrl.origin;
}

function hasLogSalt(): boolean {
  return Boolean(process.env.LOG_HASH_SALT?.trim());
}

/**
 * Truncated SHA-256 hash av PII for korrelering i logger uten å eksponere
 * innholdet. Saltes med LOG_HASH_SALT (env) for å hindre rainbow-table-
 * lookup av e-postadresser ved tilgang til logger.
 */
function piiHash(value: string): string {
  if (!value) return "";
  const salt = process.env.LOG_HASH_SALT;
  if (!salt) {
    throw new Error("LOG_HASH_SALT is required before hashing PII");
  }
  return createHash("sha256").update(salt + value).digest("hex").slice(0, 10);
}

interface RedactedLog {
  email: string;
  phone: string;
  ip: string;
  leadType: string;
  variant: string;
  messageLen: number;
}

function buildRedactedLog(data: ContactFormInput, ip: string): RedactedLog {
  return {
    email: `sha10:${piiHash(data.email)}`,
    phone: data.phone ? `sha10:${piiHash(data.phone)}` : "",
    ip: `sha10:${piiHash(ip)}`,
    leadType: data.leadType,
    variant: data.formVariant,
    messageLen: data.message.length,
  };
}

async function readFormData(req: NextRequest): Promise<FormData | null> {
  const contentType = req.headers.get("content-type") ?? "";
  try {
    if (contentType.includes("application/json")) {
      // JSON-klienter aksepteres; konverterer til FormData så validator
      // kan brukes uendret.
      const json = (await req.json()) as Record<string, unknown>;
      const fd = new FormData();
      for (const [k, v] of Object.entries(json)) {
        if (v == null) continue;
        fd.append(k, typeof v === "string" ? v : String(v));
      }
      return fd;
    }
    // multipart/form-data og application/x-www-form-urlencoded håndteres
    // av Web Fetch-APIet direkte.
    return await req.formData();
  } catch {
    return null;
  }
}

function jsonResponse(
  body: Record<string, unknown>,
  init?: ResponseInit,
): Response {
  return Response.json(body, {
    ...init,
    headers: {
      "Cache-Control": "no-store",
      ...(init?.headers ?? {}),
    },
  });
}

async function sendInternalEmail(data: ContactFormInput): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // E-post er valgfritt fall-back. Hvis Resend ikke er konfigurert,
    // har vi fortsatt Monday-loggføring så vi mister ikke leadet.
    return false;
  }

  const resend = new Resend(apiKey);
  const fromAddress = process.env.RESEND_FROM_ADDRESS ?? "Skjema <noreply@northgroup.no>";

  const isCourse = data.formVariant === "course";
  const lines = [
    `Type henvendelse: ${LEAD_TYPE_LABEL[data.leadType]}`,
    `Navn: ${data.name}`,
    `E-post: ${data.email}`,
    data.phone ? `Telefon: ${data.phone}` : null,
    data.company ? `Bedrift: ${data.company}` : null,
    isCourse && data.courseSlug ? `Kurs: ${data.courseSlug}` : null,
    data.preferredDate ? `Ønsket startdato: ${data.preferredDate}` : null,
    data.employees
      ? isCourse
        ? `Antall deltakere: ${data.employees}`
        : `Antall ansatte: ${data.employees}`
      : null,
    "",
    "Melding:",
    data.message,
  ].filter(Boolean);

  try {
    const result = await resend.emails.send({
      from: fromAddress,
      to: BUSINESS.email,
      replyTo: data.email,
      subject: `[${data.subject}] ${data.name}`,
      text: lines.join("\n"),
    });
    return !result.error;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  if (!isSameOrigin(req)) {
    return jsonResponse(
      { status: "error", message: MESSAGES.generic },
      { status: 403 },
    );
  }

  if (!hasLogSalt()) {
    console.error("[contact] missing LOG_HASH_SALT");
    return jsonResponse(
      { status: "error", message: MESSAGES.generic },
      { status: 500 },
    );
  }

  const ip = getClientIp(req.headers);
  const rate = checkRateLimit(`contact:${ip}`, RATE_LIMIT);

  if (!rate.ok) {
    const retryAfterSec = Math.ceil(rate.retryAfterMs / 1000);
    return jsonResponse(
      { status: "error", message: MESSAGES.rateLimited },
      {
        status: 429,
        headers: { "Retry-After": String(retryAfterSec) },
      },
    );
  }

  const formData = await readFormData(req);
  if (!formData) {
    return jsonResponse(
      { status: "error", message: MESSAGES.generic },
      { status: 400 },
    );
  }

  const validation = validateContactForm(formData);

  // Honeypot: returnér 200 success uten å logge eller forwarde. Bot
  // skal ikke kunne lære av feilmeldinger eller statuskoder.
  if (!validation.ok && validation.honeypotTripped) {
    console.log("[contact] honeypot tripped", { ip: `sha10:${piiHash(ip)}` });
    return jsonResponse(
      { status: "success", message: MESSAGES.success },
      { status: 200 },
    );
  }

  if (!validation.ok) {
    return jsonResponse(
      {
        status: "error",
        message: MESSAGES.validationError,
        fieldErrors: validation.fieldErrors,
      },
      { status: 400 },
    );
  }

  const redacted = buildRedactedLog(validation.data, ip);
  // Server-side tidsstempel; vi godtar ikke klient-tidsstempel.
  const submittedAt = new Date().toISOString();

  const mondayResult = await submitContactToMonday(validation.data);

  if (!mondayResult.ok) {
    console.error("[contact] monday failed", {
      ...redacted,
      submittedAt,
      code: mondayResult.errorCode,
    });
    return jsonResponse(
      { status: "error", message: MESSAGES.generic },
      { status: 500 },
    );
  }

  // E-post er beste-innsats: feiler den, har vi fortsatt registrert
  // leadet i Monday. Klienten får success uansett.
  const emailSent = await sendInternalEmail(validation.data);

  console.log("[contact] accepted", {
    ...redacted,
    submittedAt,
    itemId: mondayResult.itemId ?? "",
    emailSent,
    source: "northgroup.no",
  });

  return jsonResponse(
    { status: "success", message: MESSAGES.success },
    { status: 200 },
  );
}

// Andre HTTP-metoder feiler lukket.
export async function GET(): Promise<Response> {
  return new Response("Method Not Allowed", {
    status: 405,
    headers: { Allow: "POST" },
  });
}
