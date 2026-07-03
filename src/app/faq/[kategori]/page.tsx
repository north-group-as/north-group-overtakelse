import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import JsonLd from "@/components/seo/JsonLd";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import { BUSINESS } from "@/lib/business-data";

/* ────────────────────────────────────────────────────────
   FAQ-data: same source as /faq
   ──────────────────────────────────────────────────────── */

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  heading: string;
  id: string;
  description: string;
  items: FaqItem[];
}

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    heading: "Kurs og sertifisering",
    id: "kurs",
    description:
      "Svar på vanlige spørsmål om FSE-kurs, varme arbeider, førstehjelp og andre sertifiseringer.",
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
          "Den teoretiske delen av FSE-kurset tar normalt 4–6 timer å gjennomføre digitalt, og du kan jobbe i eget tempo. I tillegg kommer en praktisk del som gjennomføres med en sakkyndig person hos arbeidsgiver. Total tidsbruk avhenger av om du velger digitalt eller fysisk kurs.",
      },
      {
        question: "Hva koster kursene?",
        answer:
          "Prisene varierer etter kurstype. FSE-kurs koster kr 699 og Førstehjelp kr 490. For fysiske kurs som varme arbeider og FSE for instruert personell, ta kontakt med oss for pris. Alle priser er oppgitt eksklusiv mva.",
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
    description:
      "Svar på vanlige spørsmål om rekrutteringsprosessen, kostnader, faggrupper og internasjonal rekruttering.",
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
    description:
      "Svar på vanlige spørsmål om HR-bistand, medarbeidersamtaler, oppsigelser og ekstern HR-partner.",
    items: [
      {
        question: "Hvilke HR-tjenester tilbyr dere?",
        answer:
          "Vi tilbyr et bredt spekter av HR-tjenester tilpasset små og mellomstore bedrifter. Det inkluderer medarbeidersamtaler, sykefraværsoppfølging, bistand ved NAV-møter, juridisk rådgivning innen arbeidsrett, oppsigelsesprosesser og generell personaladministrasjon. Vi fungerer som en ekstern HR-avdeling.",
      },
      {
        question: "Trenger vi egen HR-avdeling for å bruke tjenestene?",
        answer:
          "Nei, tvert imot. Tjenestene våre er spesielt utviklet for bedrifter som ikke har egen HR-avdeling. Vi fungerer som deres eksterne HR-partner og tar oss av alt fra daglige spørsmål til krevende personalsaker. Dere får tilgang til HR-kompetanse uten å ansette egne folk.",
      },
      {
        question: "Kan dere hjelpe med oppsigelser og vanskelige personalsaker?",
        answer:
          "Ja, vi bistår med hele prosessen rundt oppsigelser, fra drøftelsesmøte til gjennomføring. Vi sørger for at alt gjøres i henhold til arbeidsmiljøloven, og gir dere trygghet i krevende situasjoner. Vi har erfaring med alt fra omstillingsprosesser til individuelle oppsigelser.",
      },
      {
        question: "Hva koster HR-tjenestene?",
        answer:
          "Vi tilbyr fleksible prismodeller tilpasset bedriftens størrelse og behov. Dere kan velge mellom løpende avtale med fast månedspris eller betale per oppdrag. Ta kontakt for en uforpliktende samtale, så finner vi en løsning som passer.",
      },
    ],
  },
  {
    heading: "Generelt om North Group",
    id: "generelt",
    description:
      "Svar på generelle spørsmål om selskapet, lokasjon, kontakttider og geografisk dekning.",
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
          "Ja, vi leverer tjenester i hele Norge. Digitale kurs er tilgjengelige uansiert lokasjon, og fysiske kurs kan arrangeres på ulike steder etter avtale. Rekruttering og HR-tjenester tilbys landsdekkende, med spesielt god dekning i Oslo-regionen og på Østlandet.",
      },
    ],
  },
];

/* Map for rask oppslag */
const CATEGORY_MAP = Object.fromEntries(
  FAQ_CATEGORIES.map((c) => [c.id, c])
);

/* ────────────────────────────────────────────────────────
   Static params
   ──────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return FAQ_CATEGORIES.map((cat) => ({ kategori: cat.id }));
}

/* ────────────────────────────────────────────────────────
   Metadata
   ──────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ kategori: string }>;
}): Promise<Metadata> {
  const { kategori } = await params;
  const cat = CATEGORY_MAP[kategori];

  if (!cat) {
    return { title: "Kategori ikke funnet" };
  }

  return {
    title: `${cat.heading} FAQ`,
    description: cat.description,
    alternates: { canonical: `/faq/${kategori}/` },
    openGraph: {
      title: `${cat.heading} FAQ`,
      description: cat.description,
      url: `${BUSINESS.siteUrl}/faq/${kategori}/`,
      siteName: BUSINESS.siteName,
      locale: "nb_NO",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${cat.heading} FAQ`,
      description: cat.description,
    },
  };
}

/* ────────────────────────────────────────────────────────
   JSON-LD
   ──────────────────────────────────────────────────────── */
function buildJsonLd(kategori: string) {
  const cat = CATEGORY_MAP[kategori];
  if (!cat) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cat.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/* ────────────────────────────────────────────────────────
   Side
   ──────────────────────────────────────────────────────── */
export default async function FaqKategoriPage({
  params,
}: {
  params: Promise<{ kategori: string }>;
}) {
  const { kategori } = await params;
  const cat = CATEGORY_MAP[kategori];

  if (!cat) notFound();

  const jsonLd = buildJsonLd(kategori);

  const otherCategories = FAQ_CATEGORIES.filter((c) => c.id !== kategori);

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { label: "Forsiden", href: "/" },
          { label: "FAQ", href: "/faq/" },
          { label: cat.heading },
        ]}
      />
      {jsonLd && <JsonLd data={jsonLd} />}

      <PageHero
        eyebrow="Ofte stilte spørsmål"
        title={cat.heading}
        subtitle={cat.description}
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "FAQ", href: "/faq/" },
          { label: cat.heading },
        ]}
      />

      {/* Tilbake-lenke */}
      <div className="bg-white py-6">
        <Container size="narrow">
          <Link
            href="/faq/"
            className="inline-flex min-h-11 items-center gap-2 rounded text-sm font-semibold text-navy-dark/60 transition hover:text-navy-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
          >
            <ArrowLeft className="h-4 w-4" />
            Alle kategorier
          </Link>
        </Container>
      </div>

      <section aria-label={cat.heading} className="bg-white pb-24 pt-8 lg:pb-32">
        <Container size="narrow">
          {/* Spørsmål */}
          <div className="divide-y divide-navy-dark/10">
            {cat.items.map((item, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <details className="group" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-base font-extrabold text-navy-dark transition-colors hover:text-green-dark md:text-lg [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <span
                      aria-hidden
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-dark/15 text-navy-dark/70 transition-transform group-open:rotate-45"
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
              </FadeIn>
            ))}
          </div>

          {/* Andre kategorier */}
          <FadeIn delay={0.1}>
            <div className="mt-20 rounded-2xl bg-gray-50 p-8 lg:p-10">
              <h2 className="font-display text-xl font-extrabold text-navy-dark">
                Flere spørsmål?
              </h2>
              <p className="mt-2 text-sm text-navy-dark/65 font-light">
                Du finner også spørsmål i andre kategorier:
              </p>
              <nav
                aria-label="Andre FAQ-kategorier"
                className="mt-5 flex flex-wrap gap-3"
              >
                {otherCategories.map((c) => (
                  <Link
                    key={c.id}
                    href={`/faq/${c.id}/`}
                    className="inline-flex items-center rounded-full border border-navy-dark/15 px-5 py-2.5 text-sm font-semibold text-navy-dark transition hover:border-green hover:text-green-dark"
                  >
                    {c.heading}
                  </Link>
                ))}
              </nav>
            </div>
          </FadeIn>

          {/* Kontakt CTA */}
          <FadeIn delay={0.15}>
            <div className="mt-12 rounded-2xl bg-navy-dark p-8 lg:p-10">
              <h2 className="font-display text-xl font-extrabold text-white">
                Fant du ikke svaret du lette etter?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70 font-light">
                Ta kontakt med oss, så hjelper vi deg. Vi svarer normalt
                innen én virkedag.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/kontakt/"
                  className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-dark"
                >
                  Kontakt oss
                </Link>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
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
