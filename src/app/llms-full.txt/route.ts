import { BUSINESS } from "@/lib/business-data";
import { services } from "@/lib/services";
import { hrServices } from "@/lib/hr-services";
import { courses } from "@/lib/courses";
import { FAQ_CATEGORIES } from "@/lib/faq";
import { getBlogPosts } from "@/lib/blog";

/**
 * llms-full.txt: fulltekstversjon av llms.txt for LLM-baserte crawlere.
 * Bygges fra de samme datafilene som nettsiden (tjenester, kurs, FAQ, blogg),
 * så innholdet aldri divergerer fra det som vises på sidene.
 */
export const dynamic = "force-static";

export function GET(): Response {
  const url = BUSINESS.siteUrl;

  const serviceText = services
    .map(
      (s) =>
        `### ${s.title}\n\n${s.description}\n\n${s.features.map((f) => `- ${f}`).join("\n")}\n\nLes mer: ${url}${s.href}`,
    )
    .join("\n\n");

  const hrText = hrServices
    .map((h) => `- **${h.title}**: ${h.body} (${url}${h.href})`)
    .join("\n");

  const courseText = courses
    .map((c) => {
      const lines = [
        `### ${c.title}`,
        "",
        c.description,
        "",
        `- Type: ${c.type === "digital" ? "Digitalt kurs" : "Fysisk kurs"}`,
        `- Varighet: ${c.duration}`,
        `- Pris: ${c.price}`,
        `- Målgruppe: ${c.targetAudience}`,
      ];
      if (c.certification) lines.push(`- Kursbevis: ${c.certification}`);
      if (c.certificationValidity) lines.push(`- Gyldighet: ${c.certificationValidity}`);
      if (c.languages?.length) lines.push(`- Språk: ${c.languages.join(", ")}`);
      lines.push(`- Side: ${url}/kurs/${c.slug}/`);
      return lines.join("\n");
    })
    .join("\n\n");

  const faqText = FAQ_CATEGORIES.map(
    (cat) =>
      `### ${cat.heading}\n\n${cat.items
        .map((item) => `**${item.question}**\n${item.answer}`)
        .join("\n\n")}`,
  ).join("\n\n");

  const blogText = getBlogPosts()
    .map((p) => `- [${p.title}](${url}/blogg/${p.slug}/): ${p.description}`)
    .join("\n");

  const body = `# North Group AS

> North Group AS er et norsk selskap i Oslo, grunnlagt i 2015, som tilbyr
> rekruttering, HR-tjenester og godkjente sikkerhetskurs (FSE, førstehjelp,
> varme arbeider) for bygg-, anleggs- og elektrobransjen. 8 spesialister,
> over 500 elektrikere kursert. Tjenester i hele Norge.

Kortversjon: ${url}/llms.txt

## Fakta

- Juridisk navn: North Group AS
- Org.nr: ${BUSINESS.orgNr}
- Grunnlagt: 2015
- Adresse: ${BUSINESS.address.street}, ${BUSINESS.address.postalCode} ${BUSINESS.address.city}
- Telefon: ${BUSINESS.phoneDisplay} (${BUSINESS.salesPhoneInstruction})
- E-post: ${BUSINESS.email}
- Svartid: normalt innen 24 timer
- Område: hele Norge, særlig Oslo-regionen og Østlandet
- LinkedIn: ${BUSINESS.social.linkedin}

## Tjenester

${serviceText}

## HR-tjenester i detalj

${hrText}

## Kurs

${courseText}

## Ofte stilte spørsmål

${faqText}

## Artikler

${blogText}

## Kilder vi bygger kursene på

- FSE-forskriften (Lovdata): https://lovdata.no/dokument/SF/forskrift/2006-04-28-458
- Direktoratet for samfunnssikkerhet og beredskap (DSB): https://www.dsb.no/
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
