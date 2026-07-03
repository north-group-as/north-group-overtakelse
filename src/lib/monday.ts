/**
 * Monday.com-klient (fasade) for kontaktskjemaet.
 *
 * Denne filen er bevisst tynn: den oversetter ContactFormInput-shapen
 * fra contact-schema.ts til det formatet vår eksisterende
 * GraphQL-integrasjon i src/lib/integrations/monday.ts forventer.
 *
 * NG-301 spec sier `MONDAY_API_TOKEN`. Eksisterende kode bruker
 * `MONDAY_API_KEY`. For å unngå at deploy av denne endringen ødelegger
 * den eksisterende produksjons-flyten leser integrasjonen begge;
 * `MONDAY_API_TOKEN` har forrang når den er satt.
 *
 * Token er KUN server-side. Aldri prefiks med NEXT_PUBLIC_.
 */

import type { ContactFormInput } from "./contact-schema";
import { createMondayItem, type LeadSource } from "./integrations/monday";

export interface SubmitToMondayResult {
  ok: boolean;
  itemId?: string;
  // Sikker, generisk feilkode for logging. Aldri mottatt av klient.
  errorCode?: "missing_config" | "api_error" | "skipped";
}

function mapLeadSource(input: ContactFormInput): LeadSource {
  if (input.leadType === "jobbsoker") return "jobb";
  if (input.formVariant === "course") return "kurs";
  return "kontakt";
}

/**
 * Sender en validert kontaktinnsending til Monday.com.
 *
 * Henter API-token fra `MONDAY_API_TOKEN` (foretrukket) eller
 * `MONDAY_API_KEY` (bakoverkompatibel). Hvis ingen av delene er satt,
 * returneres missing_config slik at route kan feile lukket.
 */
export async function submitContactToMonday(
  input: ContactFormInput,
): Promise<SubmitToMondayResult> {
  if (!process.env.MONDAY_API_KEY && !process.env.MONDAY_API_TOKEN) {
    return { ok: false, errorCode: "missing_config" };
  }
  if (!process.env.MONDAY_BOARD_ID) {
    return { ok: false, errorCode: "missing_config" };
  }
  if (!/^\d+$/.test(process.env.MONDAY_BOARD_ID)) {
    return { ok: false, errorCode: "missing_config" };
  }

  try {
    const itemId = await createMondayItem({
      source: mapLeadSource(input),
      name: input.name,
      email: input.email,
      phone: input.phone || undefined,
      message: input.message,
      company: input.company || undefined,
      preferredDate: input.preferredDate || undefined,
      employees: input.employees || undefined,
      courseSlug: input.courseSlug || undefined,
    });

    if (!itemId) {
      // Jobbsøker-flyten i integrasjonen hopper bevisst over Monday.
      return { ok: true, errorCode: "skipped" };
    }

    return { ok: true, itemId };
  } catch {
    // Bevisst ingen detaljer fra Monday-feilen lekkes oppover; route
    // konverterer dette uansett til generisk 500 til klienten.
    return { ok: false, errorCode: "api_error" };
  }
}
