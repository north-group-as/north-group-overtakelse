import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Briefcase, Check, FileText, HeartHandshake, ShieldCheck, Zap } from "lucide-react";
import KristofferHero from "@/components/sections/KristofferHero";
import CtaBand from "@/components/sections/CtaBand";
import HrServiceList from "@/components/sections/HrServiceList";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { hrServices } from "@/lib/hr-services";
import { hrServiceGroups } from "@/lib/hr-service-groups";

export const metadata: Metadata = {
  title: "HR-tjenester for små og mellomstore bedrifter",
  description:
    "Vi er din eksterne HR-avdeling. Personaladministrasjon, sykefraværsoppfølging, HMS-rådgivning og juridisk bistand. Snakk med Kristoffer.",
  alternates: { canonical: "/hr/" },
  openGraph: {
    title: "HR-tjenester for små og mellomstore bedrifter",
    description:
      "Vi er din eksterne HR-avdeling. Personaladministrasjon, sykefraværsoppfølging, HMS-rådgivning og juridisk bistand. Snakk med Kristoffer.",
    url: "/hr/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
    title: "HR-tjenester for små og mellomstore bedrifter",
    description:
      "Vi er din eksterne HR-avdeling. Personaladministrasjon, sykefraværsoppfølging, HMS-rådgivning og juridisk bistand. Snakk med Kristoffer.",
  },
};

const VALUE_PROPS = [
  {
    icon: ShieldCheck,
    label: "Helt uforpliktende",
    body: "Be om tilbud uten forpliktelser. Vi gir ærlig rådgivning også når svaret er at du ikke trenger oss.",
  },
  {
    icon: Award,
    label: "Fagkunnskap",
    body: "Rådgivere som kjenner bransjen din, fra elektro til håndverk og produksjon.",
  },
  {
    icon: Zap,
    label: "Tilgjengelighet",
    body: "Løsninger både digitalt og fysisk, med kort responstid når det haster.",
  },
  {
    icon: HeartHandshake,
    label: "Skreddersydd",
    body: "Tjenester og kurs tilpasset bedriftens behov, ikke en standardmal.",
  },
];

export default function HrPage() {
  return (
    <>
      <KristofferHero
        serviceBrand="hr"
        eyebrow="HR-tjenester"
        title="Vi er din eksterne HR-avdeling."
        subtitle="Ansettelser, oppsigelser, lønn og arbeidsmiljø, vi tar det. Snakk med Kristoffer for en uforpliktende prat om hva bedriften din trenger."
        primaryCta={{ label: "Se HR-tjenestene", href: "#hr-tjenester" }}
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Tjenester", href: "/vare-tjenester/" },
          { label: "HR-tjenester" },
        ]}
      />

      <section
        aria-labelledby="kristoffer-profile-heading"
        className="relative isolate bg-white py-24 lg:py-32"
      >
        <SectionAtmosphere variant="light" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-4">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
                Hvem du snakker med
              </p>
              <h2
                id="kristoffer-profile-heading"
                className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]"
              >
                Kristoffer Holand,
                <br />
                <span className="text-navy-dark/55">gründer og HR-rådgiver.</span>
              </h2>
              <ul className="mt-8 space-y-2 text-sm text-navy-dark/75">
                {[
                  "Arbeidsrett og HR-prosesser",
                  "Nedbemanninger og omorganiseringer",
                  "Oppfølging av sykefravær og NAV-prosesser",
                  "Oppsigelser og personalsaker",
                  "Rekruttering",
                  "Ledelsesstøtte og rådgivning",
                  "Konflikthåndtering og medarbeideroppfølging",
                  "Organisasjonsbygging og kulturarbeid",
                  "Forhandlinger med ansatte, tillitsvalgte og kunder",
                ].map((k) => (
                  <li key={k} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-dark" aria-hidden />
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-8">
              <div className="space-y-6 text-base leading-relaxed text-navy-dark/75 font-light">
                <p>
                  Kristoffer Holand er en erfaren og løsningsorientert HR- og
                  arbeidslivsrådgiver med over 15 års erfaring fra rekruttering, arbeidsrett,
                  organisasjonsutvikling og operativ HR-ledelse. Han har bygget opp og ledet
                  selskaper innen rekruttering og HR-tjenester, med særlig spesialisering mot
                  tekniske fag og elektrobransjen.
                </p>
                <p>
                  Gjennom karrieren har Kristoffer håndtert et bredt spekter av komplekse
                  personalsaker, alt fra større nedbemanninger, virksomhetsendringer og
                  avslutning av arbeidsforhold til sykefraværsoppfølging, konflikthåndtering,
                  tilrettelegging, varsling og krevende arbeidsrettslige prosesser. Han
                  kombinerer solid erfaring med høy gjennomføringsevne og er kjent for å finne
                  praktiske løsninger i situasjoner hvor både juridiske, menneskelige og
                  kommersielle hensyn må balanseres.
                </p>
                <p>
                  Han er spesielt sterk operativt og trives i skjæringspunktet mellom HR,
                  ledelse og drift. Med erfaring fra selskaper med mange ansatte og høyt tempo
                  har han utviklet en pragmatisk og tydelig lederstil, hvor målet alltid er å
                  skape stabile arbeidsforhold, redusere risiko og bidra til gode resultater
                  for både virksomhet og ansatte.
                </p>
                <div className="mt-8 rounded-2xl bg-navy-dark p-8 text-white">
                  <p className="font-display text-lg font-semibold leading-snug lg:text-xl">
                    «Direkte, løsningsorientert og trygg i krevende situasjoner. Vi står i
                    vanskelige prosesser samtidig som vi ivaretar mennesker på en profesjonell
                    måte.»
                  </p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-green">
                    Kristoffer Holand
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section
        aria-label="Hvorfor velge oss som HR-partner"
        className="relative isolate bg-gray-50 py-24 lg:py-32"
      >
        <SectionAtmosphere variant="muted" />
        <Container className="relative">
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Derfor velger bedrifter oss
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl">
              Fire grunner til at
              <br />
              <span className="text-navy-dark/55">vi blir værende.</span>
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUE_PROPS.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeIn key={v.label} delay={i * 0.06}>
                  <article className="h-full rounded-2xl bg-gray-50 p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-light">
                      <Icon className="h-6 w-6 text-green-dark" aria-hidden />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-extrabold text-navy-dark">
                      {v.label}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
                      {v.body}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        id="hr-tjenester"
        aria-label="HR-tjenester vi tilbyr"
        className="relative isolate bg-white py-24 lg:py-32 scroll-mt-24"
      >
        <SectionAtmosphere variant="light" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
                Tjenester
              </p>
              <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]">
                Det vi
                <br />
                <span className="text-navy-dark/55">hjelper deg med.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-dark/65 font-light max-w-md">
                Med over 10 års erfaring i HR-bransjen har vi bistått små og mellomstore bedrifter
                i mange ulike bransjer.
              </p>
              <a
                href="#detaljerte-tjenester"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy"
              >
                Se detaljert oversikt
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <HrServiceList items={hrServices} initialVisible={3} />
            </FadeIn>
          </div>
        </Container>
      </section>

      <section
        id="detaljerte-tjenester"
        aria-label="HR-tjenester i detalj"
        className="relative isolate bg-gray-50 py-24 lg:py-32 scroll-mt-24"
      >
        <SectionAtmosphere variant="muted" />
        <Container className="relative">
          <FadeIn className="max-w-3xl mb-14">
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Detaljert oversikt
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]">
              Fire kjerneområder.
              <br />
              <span className="text-navy-dark/55">Skreddersydd til din bedrift.</span>
            </h2>
          </FadeIn>

          <div className="space-y-12">
            {hrServiceGroups.map((group, i) => {
              const GroupIcon = group.icon;
              return (
                <FadeIn key={group.title} delay={i * 0.04}>
                  <article className="rounded-2xl border border-navy-dark/10 bg-gray-50/50 p-8 lg:p-12">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                      <div className="lg:w-1/3 lg:max-w-sm">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-light">
                          <GroupIcon className="h-7 w-7 text-green-dark" aria-hidden />
                        </div>
                        <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight text-navy-dark md:text-3xl leading-[1.1]">
                          {group.title}
                        </h3>
                        <p className="mt-5 text-base leading-relaxed text-navy-dark/65 font-light">
                          {group.intro}
                        </p>
                        <Link
                          href={`/hr/${group.slug}/`}
                          className="mt-7 inline-flex items-center gap-2 rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-navy-dark transition hover:bg-green-dark"
                        >
                          Les mer og ta kontakt
                          <ArrowRight className="h-4 w-4" aria-hidden />
                        </Link>
                      </div>
                      <div className="grid flex-1 gap-4">
                        {group.items.map((item) => {
                          const ItemIcon = item.icon;
                          return (
                            <div
                              key={item.name}
                              className="flex items-start gap-4 rounded-xl border border-navy-dark/10 bg-white p-6"
                            >
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-light">
                                <ItemIcon className="h-5 w-5 text-green-dark" aria-hidden />
                              </span>
                              <div>
                                <h4 className="font-display text-lg font-extrabold text-navy-dark">
                                  {item.name}
                                </h4>
                                <p className="mt-2 text-sm leading-relaxed text-navy-dark/65 font-light">
                                  {item.body}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section aria-label="Vi har fokus på" className="bg-navy-dark py-20 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <FadeIn className="lg:col-span-7">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green mb-5">
                Vi har fokus på
              </p>
              <h2 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                Mennesker, kvalitet og forutsigbarhet.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-5">
              <ul className="space-y-3">
                {[
                  "Tilgjengelig rådgiver, ikke kundesenter",
                  "Tydelig pris og leveranse",
                  "Norske lover og forskrifter alltid på plass",
                  "Diskresjon og taushetsplikt i alle saker",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" aria-hidden />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section
        aria-label="Sammenheng med rekruttering"
        className="relative isolate bg-white py-20"
      >
        <SectionAtmosphere variant="light" />
        <Container className="relative">
          <FadeIn>
            <div className="grid gap-8 rounded-2xl bg-navy-dark p-10 text-white lg:grid-cols-2 lg:gap-14 lg:p-14">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/20">
                  <Briefcase className="h-6 w-6 text-green" aria-hidden />
                </div>
                <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Trenger du også å rekruttere?
                </h2>
                <p className="mt-5 text-base font-light leading-relaxed text-white/75 max-w-md">
                  Vi kombinerer HR-arbeid med rekruttering når det gir mening. Færre kontaktpunkter,
                  bedre helhet.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-3 sm:flex-row lg:items-center lg:justify-end">
                <Link
                  href="/rekruttering/"
                  className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-navy-dark shadow-lg shadow-green/25 transition hover:bg-green-dark"
                >
                  Les om rekruttering
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/vikariat/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <FileText className="h-4 w-4" aria-hidden />
                  Vikariat
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <CtaBand
        eyebrow="Klar for et HR-løft?"
        title="Vi tar gjerne en uforpliktende prat."
        description="Fortell oss kort hva du trenger hjelp med, så foreslår vi en konkret plan tilpasset bedriften."
      />
    </>
  );
}
