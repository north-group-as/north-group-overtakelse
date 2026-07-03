import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Clock, ShieldCheck, Users } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Priser på kurs, rekruttering og HR-tjenester",
  description:
    "Transparente priser på rekruttering, HR-tjenester og kurs. Fra kr 490 for digitale kurs til skreddersydde avtaler for rekruttering og HR.",
  alternates: { canonical: "/pris/" },
  openGraph: {
    title: "Priser på kurs, rekruttering og HR-tjenester",
    description:
      "Transparente priser på rekruttering, HR-tjenester og kurs. Fra kr 490 for digitale kurs til skreddersydde avtaler for rekruttering og HR.",
    url: "/pris/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priser på kurs, rekruttering og HR-tjenester",
    description:
      "Transparente priser på rekruttering, HR-tjenester og kurs. Fra kr 490 for digitale kurs til skreddersydde avtaler.",
    images: ["/opengraph-image"],
  },
};

const RECRUITMENT_TIERS = [
  {
    name: "Search",
    price: "Fra kr 15 000",
    priceNote: "Per oppdrag",
    description: "Målrettet rekruttering til én spesifikk stilling. Vi finner, intervjuer og kvalitetssikrer kandidaten før presentasjon.",
    features: [
      "Kartlegging av behov og kravprofil",
      "Aktivt kandidatsøk i egne databaser og nettverk",
      "Strukturerte intervjuer",
      "Referansjekk",
      "Presentasjon av 2–3 kvalifiserte kandidater",
      "Inkluderer én nyansettelsesrunde ved behov",
    ],
    cta: "Be om tilbud",
    ctaHref: "/kontakt/",
    highlighted: false,
  },
  {
    name: "Retainer",
    price: "Fra kr 8 000",
    priceNote: "Per måned",
    description: "Fast månedlig avtale for bedrifter med jevnlig rekrutteringsbehov. Sikrer dedikert oppfølging og rask levering.",
    features: [
      "Alt i Search, pluss:",
      "Prioritert behandling av nye oppdrag",
      "Fast kontaktperson med bransjekunnskap",
      "Rabatt på flere samtidige oppdrag",
      "Månedlig statusrapport",
      "Ubegrenset antall stillinger i avtaleperioden",
    ],
    cta: "Be om avtale",
    ctaHref: "/kontakt/",
    highlighted: true,
  },
];

const HR_TIERS = [
  {
    name: "Administrasjon",
    price: "Fra kr 4 500",
    priceNote: "Per måned",
    description: "Løpende bistand med personaladministrasjon og dokumentasjon. Struktur og trygghet i hverdagen.",
    features: [
      "Vedlikehold av personalmapper",
      "Kontraktshåndtering og oppfølging",
      "Rådgivning på e-post og telefon",
      "Oppdatering på lovkrav",
    ],
    cta: "Be om tilbud",
    ctaHref: "/kontakt/",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "Fra kr 8 500",
    priceNote: "Per måned",
    description: "Full pakke med HMS-oppfølging, sykefraværsarbeid og juridisk rådgivning. En komplett HR-partner.",
    features: [
      "Alt i Administrasjon, pluss:",
      "HMS-rådgivning og internkontroll",
      "Oppfølging av sykefravær og dialog med NAV",
      "Juridisk bistand i personalsaker",
      "Årlig gjennomgang av HMS-rutiner",
      "Dedikert HR-rådgiver",
    ],
    cta: "Be om tilbud",
    ctaHref: "/kontakt/",
    highlighted: true,
  },
  {
    name: "Prosjekt",
    price: "Etter avtale",
    priceNote: "Fast pris eller timepris",
    description: "Avklarte oppdrag utenfor ordinær avtale – for eksempel omorganisering, kapasitetsjustering eller større HMS-gjennomgang.",
    features: [
      "Kort eller langvarig engasjement",
      "Fast pris avtales på forhånd",
      "Tilpasset din situasjon",
      "Juridisk trygg gjennomføring",
    ],
    cta: "Snakk med oss",
    ctaHref: "/kontakt/",
    highlighted: false,
  },
];

export default function PrisPage() {
  const digitalCourses = courses.filter((c) => c.type === "digital");
  const physicalCourses = courses.filter((c) => c.type === "fysisk");

  return (
    <>
      <PageHero
        eyebrow="Priser"
        title="Priser som er enkle å forstå."
        subtitle="Vi tror på å være åpne om hva ting koster. Her finner du oversikt over priser for rekruttering, HR-tjenester og kurs – uten skjulte gebyrer."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Priser" },
        ]}
      />

      {/* Rekruttering */}
      <section
        id="rekruttering"
        aria-labelledby="rekruttering-heading"
        className="bg-white py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-5 w-5 text-green-dark" aria-hidden />
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green-dark">
                Rekruttering
              </p>
            </div>
            <h2
              id="rekruttering-heading"
              className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-2xl"
            >
              Fra kr 15 000 for én stilling.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-dark/65 font-light">
              Ingen skjulte kostnader. Du betaler for resultat – ikke for venting. Alle priser er eksklusive mva.
            </p>
          </FadeIn>

          <ul className="mt-14 grid gap-6 lg:grid-cols-2">
            {RECRUITMENT_TIERS.map((tier, i) => (
              <PricingCard key={tier.name} tier={tier} index={i} />
            ))}
          </ul>
        </Container>
      </section>

      {/* HR-tjenester */}
      <section
        id="hr"
        aria-labelledby="hr-heading"
        className="bg-gray-50 py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="h-5 w-5 text-green-dark" aria-hidden />
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green-dark">
                HR-tjenester
              </p>
            </div>
            <h2
              id="hr-heading"
              className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-2xl"
            >
              Fast månedlig pris. Ingen overraskelser.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-dark/65 font-light">
              Fra personlig administrativ bistand til full HMS- og juridisk oppfølging. Velg pakken som passer bedriften.
            </p>
          </FadeIn>

          <ul className="mt-14 grid gap-6 lg:grid-cols-3">
            {HR_TIERS.map((tier, i) => (
              <PricingCard key={tier.name} tier={tier} index={i} />
            ))}
          </ul>

          <FadeIn>
            <p className="mt-10 text-sm text-navy-dark/70">
              Alle HR-priser er eksklusive mva. Minimumsvarighet på faste avtaler er 3 måneder.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Kurs */}
      <section
        id="kurs"
        aria-labelledby="kurs-heading"
        className="bg-white py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-5 w-5 text-green-dark" aria-hidden />
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green-dark">
                Kurs
              </p>
            </div>
            <h2
              id="kurs-heading"
              className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-2xl"
            >
              Digitale kurs fra kr 490. Fysiske etter avtale.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-dark/65 font-light">
              Digitale kurs kan startes med en gang og gjennomføres i eget tempo. Fysiske kurs tilpasses bedrift og gjennomføres på loc.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Digitale kurs */}
            <FadeIn>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-green-dark mb-6">
                  Digitale kurs – start i dag
                </p>
                <ul className="space-y-4">
                  {digitalCourses.map((course) => (
                    <li
                      key={course.slug}
                      className="flex items-center justify-between rounded-xl border border-navy-dark/10 bg-white px-5 py-4 transition-all hover:shadow-md hover:shadow-navy-dark/5"
                    >
                      <div>
                        <p className="font-semibold text-navy-dark">{course.title}</p>
                        <p className="text-xs text-navy-dark/70 mt-0.5">{course.duration}</p>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <p className="font-display text-lg font-extrabold text-navy-dark">
                          {course.price}
                        </p>
                        <Link
                          href={`/kurs/${course.slug}/`}
                          className="text-xs text-green-dark font-semibold hover:text-green transition-colors"
                        >
                          Les mer
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Fysiske kurs */}
            <FadeIn>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-green-dark mb-6">
                  Fysiske kurs – vi kommer til dere
                </p>
                <ul className="space-y-4">
                  {physicalCourses.map((course) => (
                    <li
                      key={course.slug}
                      className="flex items-center justify-between rounded-xl border border-navy-dark/10 bg-white px-5 py-4 transition-all hover:shadow-md hover:shadow-navy-dark/5"
                    >
                      <div>
                        <p className="font-semibold text-navy-dark">{course.title}</p>
                        <p className="text-xs text-navy-dark/70 mt-0.5">{course.duration}</p>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <p className="font-display text-lg font-extrabold text-navy-dark">
                          {course.price}
                        </p>
                        <Link
                          href={`/kurs/${course.slug}/`}
                          className="text-xs text-green-dark font-semibold hover:text-green transition-colors"
                        >
                          Les mer
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-navy-dark/70">
                  Alle fysiske kurs kan skreddersys etter bedriftens behov. Kontakt oss for tilbud.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="mt-12 rounded-2xl border border-navy-dark/10 bg-green-light/40 p-6 lg:p-8">
              <p className="font-semibold text-navy-dark mb-2">Bedriftspakker</p>
              <p className="text-sm text-navy-dark/65 leading-relaxed">
                Trenger du kurs til flere ansatte eller flere kurs samtidig? Vi setter sammen pakker for bedrifter og team – ofte med rabatt.{" "}
                <Link
                  href="/kontakt/"
                  className="text-green-dark font-semibold hover:text-green transition-colors"
                >
                  Be om tilbud
                </Link>{" "}
                på samlepakke.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <CtaBand
        eyebrow="Usikker på hva du trenger?"
        title="La oss snakke om din situasjon."
        description="Beskriv utfordringen din, så setter vi sammen et uforpliktende tilbud – uten salgspitch."
        primaryHref="/kontakt/"
        primaryLabel="Be om uforpliktende samtale"
      />
    </>
  );
}

type PricingTier = {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted: boolean;
};

function PricingCard({ tier, index }: { tier: PricingTier; index: number }) {
  return (
    <FadeIn as="li" delay={index * 0.05} className="h-full">
      <div
        className={`flex h-full flex-col rounded-2xl p-8 transition-all ${
          tier.highlighted
            ? "bg-navy-dark text-white shadow-xl shadow-navy-dark/20"
            : "bg-white border border-navy-dark/10"
        }`}
      >
        <div className="flex-1">
          <p
            className={`text-[11px] font-semibold uppercase tracking-[0.18em] mb-4 ${
              tier.highlighted ? "text-green" : "text-green-dark"
            }`}
          >
            {tier.name}
          </p>
          <p
            className={`font-display text-3xl font-extrabold leading-tight ${
              tier.highlighted ? "text-white" : "text-navy-dark"
            }`}
          >
            {tier.price}
          </p>
          <p
            className={`text-sm mt-1 ${
              tier.highlighted ? "text-white/60" : "text-navy-dark/70"
            }`}
          >
            {tier.priceNote}
          </p>
          <p
            className={`mt-4 text-sm leading-relaxed ${
              tier.highlighted ? "text-white/70" : "text-navy-dark/65"
            }`}
          >
            {tier.description}
          </p>
          <ul className="mt-6 space-y-3">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm">
                <Check
                  className={`mt-[2px] h-4 w-4 shrink-0 ${
                    tier.highlighted ? "text-green" : "text-green-dark"
                  }`}
                  aria-hidden
                />
                <span className={tier.highlighted ? "text-white/80" : "text-navy-dark/70"}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <Link
            href={tier.ctaHref}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all ${
              tier.highlighted
                ? "bg-green text-white hover:bg-green-dark hover:shadow-lg hover:shadow-green/25"
                : "bg-navy-dark text-white hover:bg-navy-dark/90"
            }`}
          >
            {tier.cta}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}
