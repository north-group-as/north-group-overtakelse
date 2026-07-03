import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import JsonLd from "@/components/seo/JsonLd";
import { BUSINESS } from "@/lib/business-data";

/* ────────────────────────────────────────────────────────
   FAQ-data: én kilde for både visning og JSON-LD
   ──────────────────────────────────────────────────────── */

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  heading: string;
  id: string;
  items: FaqItem[];
}

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    heading: "Kurs og sertifisering",
    id: "kurs",
    items: [
      {
        question: "Hva er FSE-kurs og hvem trenger det?",
        answer:
          "FSE står for Forskrift om Sikkerhet ved Elektrisk arbeid. Kurset er påkrevd for alle som utfører, leder eller kontrollerer arbeid på eller nær elektriske anlegg. Det gjelder elektrikere, energimontører, driftspersonell og andre med ansvar for elektrisk sikkerhet på arbeidsplassen.",
      },
      {
        question: "Er FSE-kurset tilgjengelig på andre språk enn norsk?",
        answer:
          "Ja, vi tilbyr FSE-kurset på flere språk, inkludert engelsk, polsk og litauisk. Dette gjør det enklere for utenlandske arbeidstakere å gjennomføre kurset og forstå innholdet fullt ut. Ta kontakt for å høre hvilke språk som er tilgjengelige.",
      },
      {
        question: "Hvor lang tid tar FSE-kurset?",
        answer:
          "Den teoretiske delen av FSE-kurset tar normalt 4-6 timer å gjennomføre digitalt, og du kan jobbe i eget tempo. I tillegg kommer en praktisk del som gjennomføres med en sakkyndig person hos arbeidsgiver. Total tidsbruk avhenger av om du velger digitalt eller fysisk kurs.",
      },
      {
        question: "Hva koster kursene?",
        answer:
          "Prisene varierer etter kurstype. FSE-kurs koster kr 699 og Førstehjelp kr 490. For fysiske kurs som Varme arbeider og FSE for instruert personell, ta kontakt med oss for pris. Alle priser er oppgitt eksklusiv mva.",
      },
      {
        question: "Får jeg kursbevis etter fullført kurs?",
        answer:
          "Ja, alle deltakere som består den teoretiske eksamenen mottar et kursbevis. For kurs med praktisk del, som FSE, utstedes kursbeviset etter at også den praktiske delen er gjennomført og godkjent av en sakkyndig person.",
      },
      {
        question: "Hva er forskjellen på digitale og fysiske kurs?",
        answer:
          "Digitale kurs gjennomføres helt nettbasert, i eget tempo og på egen maskin. Fysiske kurs holdes på kurssted med instruktør til stede. Begge gir samme kursbevis. Digitale kurs passer godt for teori, mens fysiske kurs kan være bedre for praktiske øvelser som varme arbeider og førstehjelp.",
      },
      {
        question: "Er varme arbeider-sertifikatet gyldig utenfor Norge?",
        answer:
          "Sertifikatet for varme arbeider er basert på norske forskrifter og er primært gyldig i Norge. I andre nordiske land kan det bli anerkjent, men det varierer. Vi anbefaler å undersøke lokale krav dersom sertifikatet skal brukes utenfor Norge.",
      },
      {
        question: "Hvor lenge er sertifikatene gyldige?",
        answer:
          "Gyldighetsperioden varierer etter kurstype. FSE-kurs har normalt en anbefalt fornyelse hvert år. Vi sender påminnelse når det nærmer seg fornyelse.",
      },
    ],
  },
  {
    heading: "Rekruttering",
    id: "rekruttering",
    items: [
      {
        question: "Hvilke faggrupper rekrutterer dere?",
        answer:
          "Vi rekrutterer primært fagarbeidere innen elektro, rør, ventilasjon, bygg og anlegg. Det inkluderer elektrikere, rørleggere, VVS-montører, støttepersonell og prosjektledere. Vi fokuserer på bransjer der det er mangel på kvalifisert arbeidskraft.",
      },
      {
        question: "Hvordan fungerer rekrutteringsprosessen?",
        answer:
          "Vi starter med en behovsanalyse sammen med deg som arbeidsgiver. Deretter søker vi aktivt etter kandidater gjennom vårt nettverk, annonsering og direkte kontakt. Alle kandidater gjennomgår intervju og referansesjekk før de presenteres. Hele prosessen er transparent, og du har kontroll hele veien.",
      },
      {
        question: "Hva koster rekruttering?",
        answer:
          "Kostnaden avhenger av stillingens kompleksitet og omfang. Vi tilbyr både fastpris og suksessbaserte modeller. Ta kontakt for et uforpliktende tilbud tilpasset dine behov.",
      },
      {
        question: "Rekrutterer dere også utenlandsk arbeidskraft?",
        answer:
          "Ja, vi har lang erfaring med å rekruttere kvalifiserte fagarbeidere fra hele Europa og andre deler av verden. Vi bistår med alt fra kvalifikasjonssjekk og språktesting til praktisk tilrettelegging som bolig og onboarding. Vi sørger for at alle papirer og godkjenninger er i orden.",
      },
      {
        question: "Hvor lang tid tar en rekrutteringsprosess?",
        answer:
          "Tidsrammen varierer med stillingens krav og tilgjengeligheten av kandidater. For fagarbeiderstillinger i Norge kan prosessen ta fra 2 til 6 uker. For internasjonal rekruttering bør du regne med noe lengre tid på grunn av dokumentasjon og eventuell relokalisering.",
      },
    ],
  },
  {
    heading: "HR-tjenester",
    id: "hr-tjenester",
    items: [
      {
        question: "Hvilke HR-tjenester tilbyr dere?",
        answer:
          "Vi tilbyr et bredt spekter av HR-tjenester tilpasset små og mellomstore bedrifter. Det inkluderer medarbeidersamtaler, sykefraværsoppfølging, bistand ved NAV-møter, juridisk rådgivning innen arbeidsrett, oppsigelsesprosesser og generell personaladministrasjon. Vi fungerer som en ekstern HR-avdeling.",
      },
      {
        question:
          "Trenger vi egen HR-avdeling for å bruke tjenestene?",
        answer:
          "Nei, tvert imot. Tjenestene våre er spesielt utviklet for bedrifter som ikke har egen HR-avdeling. Vi fungerer som din eksterne HR-partner og tar oss av alt fra daglige spørsmål til krevende personalsaker. Du får tilgang til HR-kompetanse uten å ansette egne folk.",
      },
      {
        question:
          "Kan dere hjelpe med oppsigelser og vanskelige personalsaker?",
        answer:
          "Ja, vi bistår med hele prosessen rundt oppsigelser, fra drøftelsesmøte til gjennomføring. Vi sørger for at alt gjøres i henhold til arbeidsmiljøloven, og gir deg trygghet i krevende situasjoner. Vi har erfaring med alt fra omstillingsprosesser til individuelle oppsigelser.",
      },
      {
        question: "Hva koster HR-tjenestene?",
        answer:
          "Vi tilbyr fleksible prismodeller tilpasset bedriftens størrelse og behov. Du kan velge mellom løpende avtale med fast månedspris eller betale per oppdrag. Ta kontakt for en uforpliktende samtale, så finner vi en løsning som passer.",
      },
    ],
  },
  {
    heading: "Generelt om North Group",
    id: "generelt",
    items: [
      {
        question: "Hvem er North Group?",
        answer:
          "North Group AS er et norsk selskap som tilbyr rekruttering, HR-tjenester og sikkerhetskurs for bygg-, anlegg- og industribransjen. Vi hjelper bedrifter med å finne riktig arbeidskraft, håndtere personalspørsmål og sørge for at ansatte har nødvendig kompetanse og sertifisering.",
      },
      {
        question: "Hvor holder dere til?",
        answer:
          "Vi holder til i Frydenbergveien 46b, 0575 Oslo. Kontoret ligger sentralt og er lett tilgjengelig med kollektivtransport. Kurs avholdes både på vårt kurssted og digitalt, avhengig av kurstype.",
      },
      {
        question: "Hvordan tar jeg kontakt?",
        answer:
          "Du kan nå oss på e-post post@northgroup.no eller telefon 928 16 581. Du kan også fylle ut kontaktskjemaet på nettsiden vår. Vi svarer normalt innen én virkedag.",
      },
      {
        question: "Tilbyr dere tjenester utenfor Oslo?",
        answer:
          "Ja, vi leverer tjenester i hele Norge. Digitale kurs er tilgjengelige uansett lokasjon, og fysiske kurs kan arrangeres på ulike steder etter avtale. Rekruttering og HR-tjenester tilbys landsdekkende, med spesielt god dekning i Oslo-regionen og på Østlandet.",
      },
    ],
  },
];

/* Flat liste med alle Q&A for JSON-LD */
const ALL_FAQ_ITEMS = FAQ_CATEGORIES.flatMap((cat) => cat.items);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

/* ────────────────────────────────────────────────────────
   Metadata
   ──────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Ofte stilte spørsmål (FAQ)",
  description:
    "Svar på vanlige spørsmål om kurs, rekruttering, HR-tjenester og North Group. Finn informasjon om priser, sertifiseringer, prosesser og mer.",
  alternates: { canonical: "/faq/" },
  openGraph: {
    title: "Ofte stilte spørsmål",
    description:
      "Svar på vanlige spørsmål om kurs, rekruttering, HR-tjenester og North Group.",
    url: `${BUSINESS.siteUrl}/faq/`,
    siteName: BUSINESS.siteName,
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ofte stilte spørsmål",
    description:
      "Svar på vanlige spørsmål om kurs, rekruttering, HR-tjenester og North Group.",
    images: ["/opengraph-image"],
  },
};

/* ────────────────────────────────────────────────────────
   Side-komponent
   ──────────────────────────────────────────────────────── */

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      <PageHero
        eyebrow="Ofte stilte spørsmål"
        title="Svar på det du lurer på."
        subtitle="Her finner du svar på de vanligste spørsmålene om kurs, rekruttering, HR-tjenester og North Group."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "FAQ" },
        ]}
      />

      <section aria-label="Ofte stilte spørsmål" className="bg-white py-20 lg:py-28">
        <Container size="narrow">
          {/* Hurtiglenker til kategorier */}
          <FadeIn>
            <nav
              aria-label="Hopp til kategori"
              className="mb-16 flex flex-wrap gap-3"
            >
              {FAQ_CATEGORIES.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-navy-dark/15 px-5 py-2.5 text-sm font-semibold text-navy-dark transition hover:border-green hover:text-green-dark"
                >
                  {cat.heading}
                </a>
              ))}
            </nav>
          </FadeIn>

          {/* Kategorier med spørsmål */}
          <div className="space-y-16">
            {FAQ_CATEGORIES.map((category, catIndex) => (
              <FadeIn key={category.id} delay={catIndex * 0.05}>
                <div id={category.id} className="scroll-mt-24">
                  <h2 className="font-display text-2xl font-extrabold text-navy-dark md:text-3xl">
                    {category.heading}
                  </h2>

                  <div className="mt-8 divide-y divide-navy-dark/10">
                    {category.items.map((item, itemIndex) => (
                      <details
                        key={itemIndex}
                        className="group"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-base font-extrabold text-navy-dark transition-colors hover:text-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green md:text-lg [&::-webkit-details-marker]:hidden">
                          <span>{item.question}</span>
                          <span
                            aria-hidden
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-dark/30 text-navy-dark/75 transition-transform group-open:rotate-45"
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 1v12M1 7h12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                        </summary>
                        <p className="pb-5 pr-12 text-base font-light leading-relaxed text-navy-dark/70">
                          {item.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Fant du ikke svar? */}
          <FadeIn delay={0.2}>
            <div className="mt-20 rounded-2xl bg-gray-50 p-8 lg:p-10">
              <h2 className="font-display text-xl font-extrabold text-navy-dark">
                Fant du ikke svaret du lette etter?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
                Ta kontakt med oss, så hjelper vi deg. Vi svarer normalt innen
                én virkedag.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/kontakt/"
                  className="inline-flex items-center gap-2 rounded-full bg-navy-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy"
                >
                  Kontakt oss
                </Link>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-navy-dark/15 px-6 py-3 text-sm font-semibold text-navy-dark transition hover:border-green hover:text-green-dark"
                >
                  Ring {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <CtaBand
        eyebrow="Klar for neste steg?"
        title="Vi hjelper deg med kurs, rekruttering og HR."
        description="Enten du trenger sertifiserte medarbeidere, HMS-kurs eller hjelp med personalspørsmål, er vi klare til å hjelpe."
      />
    </>
  );
}
