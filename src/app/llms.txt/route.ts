import { BUSINESS } from "@/lib/business-data";

/**
 * llms.txt: kuratert oversikt for LLM-baserte crawlere (ChatGPT, Claude,
 * Perplexity). Følger forslaget på https://llmstxt.org/. Holdes i sync med
 * business-data slik at kontaktinfo aldri divergerer fra resten av siden.
 */
export const dynamic = "force-static";

export function GET(): Response {
  const url = BUSINESS.siteUrl;

  const body = `# North Group AS

> Personalplattform for bygg- og anleggsbransjen: rekruttering, HR-tjenester og
> godkjente sikkerhetskurs (HMS, sikkerhet, elektro). Grunnlagt 2015, 500+
> elektrikere kursert. Basert i Oslo, opererer i hele Norge.

## Tjenester

- [Våre tjenester](${url}/vare-tjenester/): Samlet oversikt over rekruttering, HR og kurs
- [Rekruttering](${url}/rekruttering/): Rekrutteringsbistand for bygg, anlegg og elektro
- [HR-tjenester](${url}/hr/): Outsourcet HR, personaloppfølging og rådgivning
- [Vikariat](${url}/vikariat/): Midlertidig personell og innleie
- [Arbeidsformidling](${url}/arbeidsformidling/): Formidling av kandidater til faste stillinger

## Kurs

- [Kursoversikt](${url}/north-kurs/): Alle sikkerhets- og kompetansekurs
- [Full kurskatalog](${url}/north-kurs/kursoversikt/): Komplett liste med detaljer
- [Digitale kurs](${url}/north-kurs/digitale-kurs/): Nettbaserte kurs på egen plattform
- [Fysiske kurs](${url}/north-kurs/fysiske-kurs/): Klasseromskurs med sertifikat
- [Lønnsguide elektro 2026](${url}/lonnsguide-elektro-2026/): Lønnsnivå for elektrikere etter erfaring

## Selskap

- [Om oss](${url}/om-oss/): Historie, verdier og tilnærming siden 2015
- [Team](${url}/team/): Spesialistene i North Group
- [Case-studier](${url}/case-studies/): Eksempler på samarbeid
- [Kontakt](${url}/kontakt/): Kontaktskjema og direktekontakt
- [FAQ](${url}/faq/): Ofte stilte spørsmål

## Kontakt

- Telefon: ${BUSINESS.phoneDisplay} (${BUSINESS.salesPhoneInstruction})
- E-post: ${BUSINESS.email}
- Adresse: ${BUSINESS.address.street}, ${BUSINESS.address.postalCode} ${BUSINESS.address.city}
- Org.nr: ${BUSINESS.orgNr}
- LinkedIn: ${BUSINESS.social.linkedin}

## Annet

- [Full sitemap](${url}/sitemap.xml)
- [Personvern](${url}/personvern/)
- [Vilkår](${url}/vilkar/)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
