import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Download,
  MapPin,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import JsonLd from "@/components/seo/JsonLd";
import { BUSINESS } from "@/lib/business-data";

export const metadata: Metadata = {
  title: "Lønnsguide for elektrikere 2026",
  description:
    "Oppdatert lønnsoversikt for elektrikere i Norge 2026. Sjeelønn, timepriser, regionale forskjeller og karrieremuligheter. Last ned gratis guide.",
  alternates: { canonical: "/lonnsguide-elektro-2026/" },
  openGraph: {
    title: "Lønnsguide for elektrikere 2026",
    description:
      "Oppdatert lønnsoversikt for elektrikere i Norge 2026. Sjeelønn, timepriser, regionale forskjeller og karrieremuligheter.",
    url: "/lonnsguide-elektro-2026/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lønnsguide for elektrikere 2026",
    description:
      "Oppdatert lønnsoversikt for elektrikere i Norge 2026. Sjeelønn, timepriser, regionale forskjeller.",
    images: ["/opengraph-image"],
  },
};

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${BUSINESS.siteUrl}/lonnsguide-elektro-2026/#article`,
  mainEntityOfPage: { "@id": `${BUSINESS.siteUrl}/lonnsguide-elektro-2026/` },
  headline: "Lønnsguide for elektrikere 2026",
  description:
    "Oppdatert lønnsoversikt for elektrikere i Norge. Inkluderer sjeelønn, timepriser og regionale forskjeller.",
  image: `${BUSINESS.siteUrl}/opengraph-image`,
  author: {
    "@type": "Organization",
    name: BUSINESS.name,
    url: BUSINESS.siteUrl,
  },
  publisher: {
    "@type": "Organization",
    name: BUSINESS.name,
    url: BUSINESS.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${BUSINESS.siteUrl}/images/logo-north-group.webp`,
      width: 600,
      height: 192,
    },
  },
  datePublished: "2026-01-01",
  dateModified: "2026-04-19",
  inLanguage: "nb-NO",
};

const SALARY_BANDS = [
  {
    role: "Lærling (VK1/VK2)",
    experience: "0–2 år",
    monthlyLow: 27_000,
    monthlyHigh: 34_000,
    hourlyLow: 173,
    hourlyHigh: 218,
    note: "Lønnen følger tariffavtale. Øker ved relevant bransjeerfaring.",
  },
  {
    role: "Fagarbeider",
    experience: "2–5 år",
    monthlyLow: 43_000,
    monthlyHigh: 52_000,
    hourlyLow: 275,
    hourlyHigh: 333,
    note: "Gjennomsnittet for fagarbeidere i bygg og anlegg.",
  },
  {
    role: "Erfaren fagarbeider",
    experience: "5–10 år",
    monthlyLow: 50_000,
    monthlyHigh: 60_000,
    hourlyLow: 320,
    hourlyHigh: 385,
    note: "Sertifiseringer og spesialkompetanse gir høyere lønn.",
  },
  {
    role: "Bas / formann",
    experience: "8+ år",
    monthlyLow: 58_000,
    monthlyHigh: 70_000,
    hourlyLow: 371,
    hourlyHigh: 449,
    note: "Lederansvar og ansvar for HMS dokumenteres i grunnlaget.",
  },
  {
    role: "Elektroinstallatør / prosjektleder",
    experience: "10+ år",
    monthlyLow: 65_000,
    monthlyHigh: 85_000,
    hourlyLow: 416,
    hourlyHigh: 544,
    note: "Ofte kombinasjonsroller med budsjett- og personalansvar.",
  },
];

const REGIONAL_BONUS = [
  { region: "Oslo", bonus: "+8–12 %", reason: "Høyere levekostnader og etterspørsel" },
  { region: "Bergen / Stavanger", bonus: "+5–8 %", reason: "Olje- og energisektoren trekker opp" },
  { region: "Trondheim", bonus: "+4–6 %", reason: "Stabil offentlig og privat byggeaktivitet" },
  { region: "Nord-Norge", bonus: "+10–15 %", reason: "Rekrutteringsutfordringer og kvalitetstillegg" },
  { region: "Østlandet ellers", bonus: "0–3 %", reason: "Nærhet til markedet, lavere levekostnader" },
];

const WHY_US = [
  {
    icon: BadgeCheck,
    title: "Aktive i elektrobransjen",
    body: "Vi rekrutterer elektrikere til bygg-, anleggs- og industriprosjekter over hele landet. Vi kjenner markedet.",
  },
  {
    icon: Users,
    title: "Skreddersydd matching",
    body: "Vi matcher kandidatens kompetanse og karrieremål med din bedrifts behov. Ingen standardløsninger.",
  },
  {
    icon: TrendingUp,
    title: "Rådgivning inkludert",
    body: "Som kunde får du tilgang til vår HR-rådgivning uten ekstra kostnad. Vi hjelper med lønnsvurdering og kontrakter.",
  },
];

const faqItems = [
  {
    q: "Hva tjener en elektriker i gjennomsnitt i Norge?",
    a: "En fagarbeider Elektriker tjener i gjennomsnitt mellom 43 000 og 52 000 kroner per måned, avhengig av erfaring, region og bransje. Erfarne installatører kan tjene betydelig mer.",
  },
  {
    q: "Er det forskjell på lønn i privat versus offentlig sektor?",
    a: "Ja. Private bedrifter har ofte høyere grunnlønn, men offentlig sektor kan gi bedre pensjonsordninger og andre fordeler. Vi rådgir deg i valget.",
  },
  {
    q: "Hvordan påvirker region lønnen til en elektriker?",
    a: "Oslo og Nord-Norge har høyest elektrikerlønn grunnet levekostnader og rekrutteringsutfordringer. Les regionaloversikten over.",
  },
  {
    q: "Kan North Group hjelpe med rekruttering av elektrikere?",
    a: "Ja. Vi rekrutterer faglærte elektrikere og montører til bygg- og anleggsbransjen. Kontakt oss for en uforpliktende prat.",
  },
];

export default function LonnsguideElektro2026Page() {
  return (
    <>
      <JsonLd data={JSONLD} />

      <div className="overflow-x-hidden">
      <PageHero
        variant="flat"
        eyebrow="Gratis lønningsguide 2026"
        title="Hva tjener en elektriker i Norge i 2026?"
        subtitle="Oppdatert oversikt over lønnsnivåer for elektrikere, montører og installatører. Inkludert regionale forskjeller og karrieremuligheter."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Ressurser", href: "/lonnsguide-elektro-2026/" },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#last-ned"
            className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green/25 transition hover:bg-green-dark"
          >
            <Download className="h-4 w-4" aria-hidden />
            Last ned gratis guide
          </a>
          <Link
            href="/kontakt/"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-navy-dark"
          >
            Snakk med en rådgiver
          </Link>
        </div>
      </PageHero>

      {/* Salary bands */}
      <section
        aria-label="Lønnstabell for elektrikere"
        className="bg-white py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green-dark mb-5">
              Lønnsoversikt 2026
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl">
              Typisk lønnsspenn
              <br />
              <span className="text-navy-dark/55">etter erfaring og ansvar.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-navy-dark/65 font-light max-w-2xl">
              Tallene under er basert på tariffavtaler, markedsobservasjoner og reelle
              ansettelser North Group har bistått med. Alle summer er brutto månedslønn.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {/* Desktop: 2-col grid for header row */}
            <div className="hidden xl:grid xl:grid-cols-2 xl:gap-4 xl:pb-3 border-b border-navy-dark/10">
              <p className="text-[13px] font-semibold uppercase tracking-wide text-navy-dark/55">Rolle</p>
              <div className="grid grid-cols-3 gap-4">
                <p className="text-[13px] font-semibold uppercase tracking-wide text-navy-dark/55 text-right">Erfaring</p>
                <p className="text-[13px] font-semibold uppercase tracking-wide text-navy-dark/55 text-right">Månedslønn</p>
                <p className="text-[13px] font-semibold uppercase tracking-wide text-navy-dark/55 text-right">Timepris</p>
              </div>
            </div>
            {SALARY_BANDS.map((band) => (
              <div key={band.role} className="rounded-2xl border border-navy-dark/10 bg-gray-50 p-5 sm:flex sm:items-center sm:justify-between sm:gap-4">
                <div className="flex items-center gap-2.5 mb-2 sm:mb-0">
                  <Zap className="h-4 w-4 text-green-dark shrink-0" aria-hidden />
                  <div>
                    <p className="font-display font-bold text-navy-dark">{band.role}</p>
                    <p className="text-xs text-navy-dark/55 xl:hidden">{band.experience}</p>
                    <p className="mt-1 text-xs text-navy-dark/55 italic xl:hidden">{band.note}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 xl:flex xl:gap-6">
                  <div className="hidden xl:block">
                    <p className="text-xs text-navy-dark/55">{band.experience}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display font-bold text-navy-dark">
                      {band.monthlyLow.toLocaleString("nb-NO")}–{band.monthlyHigh.toLocaleString("nb-NO")} kr
                    </p>
                    <p className="text-xs text-navy-dark/55 text-right xl:hidden">
                      {band.hourlyLow}–{band.hourlyHigh} kr/t
                    </p>
                  </div>
                  <div className="hidden xl:block text-right">
                    <p className="text-sm text-navy-dark/65">{band.hourlyLow}–{band.hourlyHigh} kr</p>
                  </div>
                </div>
                <p className="hidden xl:block mt-2 text-xs text-navy-dark/55 italic col-span-2">{band.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-navy-dark/70">
            * Timepris er beregnet ut fra 157,5 arbeidstimer/måned. Alle tall er bruttolønn.
          </p>
        </Container>
      </section>

      {/* Regional differences */}
      <section
        aria-label="Regionale lønnsforskjeller"
        className="bg-gray-50 py-24 lg:py-32"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green-dark mb-5">
                Regionale forskjeller
              </p>
              <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]">
                Hvor i Norge
                <br />
                <span className="text-navy-dark/55">tjener du mest?</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-dark/65 font-light max-w-md">
                Elektrikerlønn varierer betydelig med geografi. Oslo og Nord-Norge har høyest
                nivå, men levekostnader spiller også inn i den reelle kjøpekraften.
              </p>
              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-green/10 p-5">
                <MapPin className="h-6 w-6 text-green-dark shrink-0" aria-hidden />
                <p className="text-sm text-navy-dark/75">
                  Alle regioner i tabellen er inkludert i North Groups rekrutteringsdatabase.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <div className="space-y-4">
                {REGIONAL_BONUS.map((r, i) => (
                  <div
                    key={r.region}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-navy-dark/10 bg-white p-6"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-dark text-white font-display font-extrabold text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-display font-bold text-navy-dark">{r.region}</p>
                        <p className="mt-0.5 text-sm text-navy-dark/55">{r.reason}</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-green/15 px-4 py-1.5 font-display font-bold text-green-dark text-sm">
                      {r.bonus}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Career progression */}
      <section
        aria-label="Karrieremuligheter for elektrikere"
        className="bg-white py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green-dark mb-5">
              Karrierevei
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl">
              Slik øker du lønnen
              <br />
              <span className="text-navy-dark/55">som elektriker.</span>
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Fagbrev + sertifiseringer",
                body: "Gruppe L, H og ELSERV-sertifiseringer åpner for høyere betalte oppdrag, spesielt i offshore og industri.",
              },
              {
                step: "02",
                title: "Bransjeerfaring",
                body: "Hver 3–5 år med relevant erfaring gir normalt et lønnsløft på 5–10 % avhengig av markedet.",
              },
              {
                step: "03",
                title: "Lederansvar",
                body: "Bas- og formannsroller gir 15–25 % høyere lønn. Prosjektleder-/installatøransvar kan gi 30–40 % mer.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.08}>
                <article className="h-full rounded-2xl border border-navy-dark/10 bg-gray-50 p-8">
                  <span
                    aria-hidden
                    className="font-display text-5xl font-extrabold text-green/30 leading-none"
                  >
                    {item.step}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-extrabold text-navy-dark">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
                    {item.body}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Why North Group */}
      <section
        aria-label="Hvorfor North Group"
        className="bg-navy-dark py-24 lg:py-32 text-white"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green mb-5">
              North Group
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-white text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl">
              Vi rekrutterer elektrikere
              <br />
              <span className="text-white/60">til bygg- og anleggsbransjen.</span>
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {WHY_US.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={i * 0.08}>
                  <article className="rounded-2xl bg-white/5 p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/20">
                      <Icon className="h-6 w-6 text-green" aria-hidden />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-extrabold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/65 font-light">
                      {item.body}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section
        aria-label="Ofte stilte spørsmål"
        className="bg-white py-24 lg:py-32"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green-dark mb-5">
                Ofte stilte spørsmål
              </p>
              <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]">
                Spørsmål om
                <br />
                <span className="text-navy-dark/55">elektrikerlønn.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-dark/65 font-light max-w-md">
                Finner du ikke svar på det du lurer på? Kontakt oss direkte så svarer vi
                innen kort tid.
              </p>
              <Link
                href="/kontakt/"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy"
              >
                Kontakt oss
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <dl className="space-y-6">
                {faqItems.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-2xl border border-navy-dark/10 bg-gray-50 p-7"
                  >
                    <dt className="font-display text-lg font-extrabold text-navy-dark">
                      {faq.q}
                    </dt>
                    <dd className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
                      {faq.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Lead magnet: contact form */}
      <section
        id="last-ned"
        aria-label="Få tilsendt lønningsguiden"
        className="bg-gray-50 py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <div className="grid gap-12 rounded-2xl bg-navy-dark p-10 text-white lg:grid-cols-12 lg:gap-16 lg:p-14">
              <div className="lg:col-span-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/20">
                  <Download className="h-6 w-6 text-green" aria-hidden />
                </div>
                <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
                  Få tilsendt den fullstendige lønningsguiden for elektrikere 2026.
                </h2>
                <p className="mt-5 text-base font-light leading-relaxed text-white/75 max-w-lg">
                  Last ned PDF med komplett lønnstabell, fordypning i regionale forskjeller,
                  tariffavtaler og råd til deg som vurderer karrierebytte eller ansettelse.
                </p>
                <ul className="mt-6 space-y-2">
                  {[
                    "Komplett lønnstabell etter erfaring",
                    "Regionale påslag og begrunnelse",
                    "Tips til karriereutvikling",
                    "Kontaktinfo til North Group",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/75">
                      <BadgeCheck className="h-4 w-4 text-green mt-0.5 shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-white/60">
                  Vi respekterer personvernet ditt. Ingen spam, bare nyttig innhold.
                </p>
              </div>

              <div className="lg:col-span-5">
                <ContactForm
                  defaultSubject="Ønske om lønningsguide elektro 2026"
                  title="Bestill lønningsguiden"
                  description="Fyll ut skjemaet så sender vi deg PDF-en på e-post."
                  className="bg-white/10 border-white/20"
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <CtaBand
        eyebrow="Trenger du flere folk på laget?"
        title="Få hjelp til rekruttering av elektrikere."
        description="North Group rekrutterer faglærte elektrikere til bygg- og anleggsprosjekter. Kontakt oss for en uforpliktende prat."
        primaryHref="/kontakt/"
        primaryLabel="Kontakt rekrutteringsteam"
      />
      </div>
    </>
  );
}
