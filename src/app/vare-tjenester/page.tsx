import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  GraduationCap,
  HardHat,
  HeartHandshake,
  Lightbulb,
  Search,
} from "lucide-react";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import AuroraBackground from "@/components/ui/AuroraBackground";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import JsonLd from "@/components/seo/JsonLd";
import { ACCENT_CLASSES, services } from "@/lib/services";
import { BUSINESS } from "@/lib/business-data";

export const metadata: Metadata = {
  title: "Våre tjenester – rekruttering, HR og kurs",
  description:
    "Tre tjenester, ett mål: riktig kompetanse til rett tid. Rekruttering av spesialister, HR-tjenester for SMB og godkjente sikkerhetskurs.",
  alternates: { canonical: "/vare-tjenester/" },
  openGraph: {
    title: "Våre tjenester – rekruttering, HR og kurs",
    description:
      "Tre tjenester, ett mål: riktig kompetanse til rett tid. Rekruttering av spesialister, HR-tjenester for SMB og godkjente sikkerhetskurs.",
    url: "/vare-tjenester/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
    title: "Våre tjenester – rekruttering, HR og kurs",
    description:
      "Tre tjenester, ett mål: riktig kompetanse til rett tid. Rekruttering av spesialister, HR-tjenester for SMB og godkjente sikkerhetskurs.",
  },
};

const SERVICE_ICONS = {
  rekruttering: HardHat,
  hr: ClipboardCheck,
  kurs: GraduationCap,
} as const;

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Kartlegging",
    body: "Vi starter med en uforpliktende prat hvor vi går gjennom dagens situasjon, mål og hva som er kritisk å løse først.",
    icon: Search,
  },
  {
    number: "02",
    title: "Forslag",
    body: "Du får en konkret plan med tidslinje, ansvar og forventet resultat. Ingen overraskelser underveis.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Leveranse",
    body: "Vi setter i gang med tett oppfølging. Du har én kontaktperson som kjenner saken fra A til Å.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Oppfølging",
    body: "Etter avslutning følger vi opp for å sikre at løsningen sitter, og justerer ved behov.",
    icon: HeartHandshake,
  },
];

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Forsiden",
      item: `${BUSINESS.siteUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Tjenester",
    },
  ],
};

export default function VareTjenesterPage() {
  return (
    <>
      <JsonLd data={BREADCRUMB_JSONLD} />
      <section
        aria-labelledby="tjenester-hero-heading"
        className="relative bg-navy-dark overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-28"
      >
        <Image
          src="/images/hero/hero-mountains.webp"
          alt="Norske fjell i solnedgang"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45 select-none"
          style={{ objectPosition: "center 35%" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/85 to-navy-dark/55"
        />
        <AuroraBackground intensity="subtle" overlay />

        <Container className="relative z-10">
          <nav
            aria-label="Brødsmuler"
            className="mb-6 flex flex-wrap items-center gap-x-1 gap-y-2 text-xs font-medium text-white/60"
          >
            <Link
              href="/"
              className="-mx-2 inline-flex min-h-11 min-w-11 items-center rounded px-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
            >
              Forsiden
            </Link>
            <span aria-hidden className="px-1 opacity-40">/</span>
            <span className="text-white/70">Tjenester</span>
          </nav>
          <p className="text-green text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Tjenester
          </p>
          <h1
            id="tjenester-hero-heading"
            className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight mb-4 max-w-3xl"
          >
            Tre tjenester. Ett mål: rett kompetanse, rett tid.
          </h1>
          <p className="text-white/70 max-w-xl text-lg leading-relaxed">
            Vi hjelper bedrifter som vil ha det enkelt: tett oppfølging, faglig
            kompetanse og praktiske løsninger som faktisk virker i hverdagen.
          </p>
        </Container>
      </section>

      <section
        aria-label="Oversikt over tjenester"
        className="relative isolate bg-white py-24 lg:py-32"
      >
        <SectionAtmosphere variant="light" />
        <Container className="relative">
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Tjenester
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl">
              Tre fagområder
              <br />
              <span className="text-navy-dark/55">som henger naturlig sammen.</span>
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = SERVICE_ICONS[service.slug as keyof typeof SERVICE_ICONS];
              const accent = ACCENT_CLASSES[service.accent];
              return (
                <FadeIn key={service.slug} delay={i * 0.08}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-gray-50 ring-1 ring-navy-dark/5 transition hover:bg-white hover:shadow-lg">
                    <div className="relative aspect-[2/1] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div
                        aria-hidden
                        className={`absolute inset-x-0 bottom-0 h-1 ${accent.bg}`}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7 lg:p-8">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accent.bgSoft}`}>
                        {Icon ? <Icon className={`h-6 w-6 ${accent.text}`} aria-hidden /> : null}
                      </div>
                      <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-navy-dark leading-[1.1]">
                        {service.titleLine1}
                        <br />
                        <span className="text-navy-dark/55">{service.titleLine2}</span>
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-navy-dark/65 font-light">
                        {service.description}
                      </p>
                      <ul className="mt-6 space-y-2.5">
                        {service.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2.5 text-sm text-navy-dark/75"
                          >
                            <span
                              aria-hidden
                              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.bg}`}
                            />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={service.href}
                        className="mt-auto pt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy-dark transition group-hover:text-green-dark"
                      >
                        Les mer om {service.title.toLowerCase()}
                        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                      </Link>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        aria-label="Slik jobber vi sammen"
        className="relative isolate bg-gray-50 py-24 lg:py-32"
      >
        <SectionAtmosphere variant="muted" />
        <Container className="relative">
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Slik jobber vi
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl">
              Fire steg
              <br />
              <span className="text-navy-dark/55">fra første prat til ferdig løsning.</span>
            </h2>
          </FadeIn>

          <div className="relative mt-16">
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-12 hidden lg:block"
            >
              <div className="mx-auto h-px w-[calc(100%-6rem)] bg-gradient-to-r from-transparent via-green/40 to-transparent" />
            </div>

            <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <FadeIn
                    as="li"
                    className="relative h-full rounded-2xl border border-navy-dark/10 bg-white p-7 transition hover:border-green/40 hover:shadow-md"
                    key={step.number}
                    delay={i * 0.06}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-light">
                        <StepIcon className="h-5 w-5 text-green-dark" aria-hidden />
                      </div>
                      <span
                        aria-hidden
                        className="font-display text-4xl font-extrabold text-green/40 leading-none"
                      >
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-lg font-extrabold text-navy-dark">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
                      {step.body}
                    </p>
                  </FadeIn>
                );
              })}
            </ol>
          </div>
        </Container>
      </section>

      <section
        aria-label="Hvorfor velge North Group"
        className="relative isolate bg-white py-24 lg:py-32"
      >
        <SectionAtmosphere variant="light" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <FadeIn className="lg:col-span-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
                Hvorfor North Group
              </p>
              <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]">
                Tett oppfølging.
                <br />
                <span className="text-navy-dark/55">Faglig tyngde. Praktiske svar.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-dark/65 font-light">
                Vi har jobbet med rekruttering, HR og kompetanse siden 2015. Du møter
                erfarne folk som har stått i situasjonene før, og som tar ansvar fra
                første prat til siste oppfølging.
              </p>
              <Link
                href="/kontakt/"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy"
              >
                Ta kontakt
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </FadeIn>

            <FadeIn className="lg:col-span-7" delay={0.1}>
              <dl className="grid gap-px overflow-hidden rounded-2xl bg-navy-dark/10 sm:grid-cols-2">
                <div className="bg-gray-50 p-7">
                  <dt className="font-display text-3xl font-extrabold text-navy-dark">
                    Siden 2015
                  </dt>
                  <dd className="mt-2 text-sm text-navy-dark/65 font-light">
                    Bygget over tid med faste kunder som kommer tilbake.
                  </dd>
                </div>
                <div className="bg-gray-50 p-7">
                  <dt className="font-display text-3xl font-extrabold text-navy-dark">
                    500+
                  </dt>
                  <dd className="mt-2 text-sm text-navy-dark/65 font-light">
                    Elektrikere har fullført våre godkjente sikkerhetskurs.
                  </dd>
                </div>
                <div className="bg-gray-50 p-7">
                  <dt className="font-display text-3xl font-extrabold text-navy-dark">
                    Én kontakt
                  </dt>
                  <dd className="mt-2 text-sm text-navy-dark/65 font-light">
                    Du har samme rådgiver fra første samtale til ferdig resultat.
                  </dd>
                </div>
                <div className="bg-gray-50 p-7">
                  <dt className="font-display text-3xl font-extrabold text-navy-dark">
                    Hele landet
                  </dt>
                  <dd className="mt-2 text-sm text-navy-dark/65 font-light">
                    Hovedkontor på Sortland, oppdrag i hele Norge.
                  </dd>
                </div>
              </dl>
            </FadeIn>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Klar for å komme i gang?"
        title="Vi finner ut sammen hva du trenger."
        description="Send oss en kort melding eller ring direkte. Vi svarer raskt og uten salgsspill."
      />
    </>
  );
}
