/**
 * Monday.com GraphQL API v2 - Lead-integrasjon for North Group
 *
 * Bruker samme board som North Installasjon: "CRM - Service" (18372254990).
 * Source-feltet i Monday identifiserer kilden så vi kan filtrere group vs installasjon.
 *
 * Env-variabler:
 * - MONDAY_API_TOKEN eller MONDAY_API_KEY: API-nøkkel fra monday.com > Profil > Developer > API
 * - MONDAY_BOARD_ID: 18372254990
 */

const MONDAY_API_URL = "https://api.monday.com/v2";

const GROUP_ID = "topics";

const COLUMN_IDS = {
  phone: "phone_mkzv136c",
  email: "email_mm1pvm2y",
  source: "text_mm1phj09",
  message: "long_text_mm1pz6x6",
  service: "text_mm1p4khq",
  estimate: "numeric_mm1p576a",
  haster: "boolean_mm1ppcw",
  file: "file_mm1phtwh",
} as const;

export type LeadSource = "kontakt" | "kurs" | "jobb";

export interface LeadData {
  source: LeadSource;
  name: string;
  phone?: string;
  email: string;
  message?: string;
  service?: string;
  company?: string;
  preferredDate?: string;
  employees?: string;
  courseSlug?: string;
}

interface MondayApiResponse {
  data?: {
    create_item?: { id: string };
  };
  errors?: Array<{ message: string }>;
}

const SOURCE_LABELS: Record<LeadSource, string> = {
  kontakt: "Kontakt North Group",
  kurs: "Kurspåmelding North Group",
  jobb: "Jobbsøker North Group",
};

function buildColumnValues(data: LeadData): string {
  const columns: Record<string, unknown> = {
    [COLUMN_IDS.phone]: data.phone
      ? {
          phone: data.phone.startsWith("+") ? data.phone : `+47${data.phone}`,
          countryShortName: "NO",
        }
      : undefined,
    [COLUMN_IDS.email]: { email: data.email, text: data.email },
    [COLUMN_IDS.source]: SOURCE_LABELS[data.source] ?? data.source,
  };

  const extraLines = [
    data.company ? `Bedrift: ${data.company}` : null,
    data.courseSlug ? `Kurs: ${data.courseSlug}` : null,
    data.preferredDate ? `Ønsket startdato: ${data.preferredDate}` : null,
    data.employees ? `Antall: ${data.employees}` : null,
    data.message ? `\nMelding:\n${data.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  if (extraLines) {
    columns[COLUMN_IDS.message] = { text: extraLines };
  }

  if (data.service) {
    columns[COLUMN_IDS.service] = data.service;
  }

  return JSON.stringify(
    Object.fromEntries(
      Object.entries(columns).filter(([, v]) => v !== undefined && v !== null),
    ),
  );
}

export async function createMondayItem(data: LeadData): Promise<string> {
  // Jobbsøknader sendes ikke til Monday (kun e-post); speiler installasjon-flyten.
  if (data.source === "jobb") {
    console.log("[monday] Hopper over jobbsøknad - sendes kun via e-post");
    return "";
  }

  const apiKey = process.env.MONDAY_API_TOKEN ?? process.env.MONDAY_API_KEY;
  const boardIdRaw = process.env.MONDAY_BOARD_ID;

  if (!apiKey || !boardIdRaw) {
    console.warn(
      "[monday] Mangler MONDAY_API_TOKEN/MONDAY_API_KEY eller MONDAY_BOARD_ID - hopper over Monday-integrasjon",
    );
    return "";
  }

  // Valider at boardId er ren numerisk så vi ikke åpner injection via en
  // feilkonfigurert env-variabel når vi senere interpolerer i GraphQL-strengen.
  if (!/^\d+$/.test(boardIdRaw)) {
    console.warn("[monday] MONDAY_BOARD_ID må være numerisk - hopper over");
    return "";
  }
  const boardId = Number(boardIdRaw);

  const itemName = `${data.name} – ${SOURCE_LABELS[data.source]}`;
  const columnValues = buildColumnValues(data);

  const query = `
    mutation {
      create_item(
        board_id: ${boardId},
        group_id: ${JSON.stringify(GROUP_ID)},
        item_name: ${JSON.stringify(itemName)},
        column_values: ${JSON.stringify(columnValues)}
      ) {
        id
      }
    }
  `;

  const response = await fetch(MONDAY_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
      "API-Version": "2024-10",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`Monday API HTTP-feil: ${response.status}`);
  }

  const json: MondayApiResponse = await response.json();

  if (json.errors?.length) {
    throw new Error(`Monday API-feil: ${json.errors.map((e) => e.message).join(", ")}`);
  }

  const itemId = json.data?.create_item?.id ?? "";
  console.log(`[monday] Opprettet kort med ID: ${itemId}`);
  return itemId;
}
