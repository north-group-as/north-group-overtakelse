import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Check,
  ClipboardCheck,
  Hammer,
  HardHat,
  Search,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Rekruttering til bygg og elektro",
  description:
    "Vi rekrutterer kraftingeniører, prosjektledere, installatører og elektrikere med tung kompetanse. Tett oppfølging fra kartlegging til signert kontrakt.",
  alternates: { canonical: "/rekruttering/" },
  openGraph: {
    title: "Rekruttering til bygg og elektro",
    description:
      "Vi rekrutterer kraftingeniører, prosjektledere, installatører og elektrikere med tung kompetanse. Tett oppfølging fra kartlegging til signert kontrakt.",
    url: "/rekruttering/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
    title: "Rekruttering til bygg og elektro",
    description:
      "Vi rekrutterer kraftingeniører, prosjektledere, installatører og elektrikere med tung kompetanse. Tett oppfølging fra kartlegging til signert kontrakt.",
  },
};

const TARGET_ROLES = [
  {
    icon: Zap,
    title: "Kraftingeniører og rådgivere",
    body: "Kandidater med erfaring fra kraft, energi, infrastruktur og tekniske rådgivningsmiljøer. Vi vurderer både faglig dybde, prosjektforståelse og evne til å ta ansvar.",
    bullets: ["Kraft og energi", "Prosjekt- og prosjekteringserfaring", "Senior fagkompetanse"],
  },
  {
    icon: Briefcase,
    title: "Prosjektledere",
    body: "Erfarne prosjektledere som kan styre fremdrift, folk, økonomi og kvalitet i krevende bygg-, elektro- og industriprosjekter.",
    bullets: ["Prosjektstyring", "Kunde- og leverandøroppfølging", "Ansvar for leveranse og kvalitet"],
  },
  {
    icon: HardHat,
    title: "Installatører og fagansvarlige",
    body: "Kandidater med autorisasjon, ledererfaring og trygg faglig vurderingsevne. Vi ser etter personer som kan bygge struktur, kvalitet og tillit rundt faget.",
    bullets: ["Installatørkompetanse", "Faglig ledelse", "Kvalitet og HMS"],
  },
];

const ALSO_RECRUIT_ROLES = [
  {
    icon: Zap,
    title: "Elektro og montører",
    body: "Faglærte elektrikere, energimontører og elektroreparatører til bygg, anlegg, industri og offshore. Alle er sertifiserte og kvalitetssikret.",
    bullets: ["Gruppe L og H", "DSB-godkjenning", "Erfaring fra prosjekter"],
  },
  {
    icon: Wrench,
    title: "Rørleggere og fagarbeidere",
    body: "Erfarne rørleggere innen sanitær, varme og sprinkleranlegg, og andre fagarbeidere med dokumentert HMS-kompetanse.",
    bullets: ["Sanitær og varme", "Sprinkleranlegg", "Fagbrev og HMS"],
  },
  {
    icon: Hammer,
    title: "Praktisk støttepersonell",
    body: "Hjelpearbeidere, lagerpersonell og støttefunksjoner. Vi kvalitetssikrer både språk, arbeidserfaring og pålitelighet.",
    bullets: ["Hjelpearbeidere", "Lager og logistikk", "Pålitelighet i fokus"],
  },
];

const PROCESS = [
  {
    icon: Search,
    step: "01",
    title: "Kartlegging",
    body: "Vi setter oss inn i prosjektet, kompetansebehovet og bedriftskulturen før vi starter søket.",
  },
  {
    icon: Briefcase,
    step: "02",
    title: "Kandidatsøk",
    body: "Vi bruker eget nettverk og aktive databaser for å finne kandidater som faktisk passer profilen.",
  },
  {
    icon: ClipboardCheck,
    step: "03",
    title: "Intervju og vurdering",
    body: "Strukturerte intervjuer, referansesjekk og personlighetsvurdering der det er relevant.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Oppfølging",
    body: "Vi følger opp etter ansettelse for å sikre at både kandidat og bedrift er fornøyd.",
  },
];

export default function RekrutteringPage() {
  return (
    <>
      <PageHero
        variant="split"
        serviceBrand="rekruttering"
        eyebrow="Rekruttering"
        title="Vi satser på de tyngre stillingene."
        subtitle="Vi rekrutterer kraftingeniører, prosjektledere, installatører og andre spesialister, men finner også elektrikere, rørleggere og praktisk støttepersonell. Én navngitt kontaktperson gjennom hele prosessen."
        image="/images/rekruttering/toppbilde.jpg"
        imageAlt="North Group rekrutteringsteam i arbeid"
        imagePosition="82% center"
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Tjenester", href: "/vare-tjenester/" },
          { label: "Rekruttering" },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/kontakt/"
            data-event="cta_kontakt_rekruttering_klikk"
            className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-navy-dark shadow-lg shadow-green/25 transition hover:bg-green-dark"
          >
            Kontakt rekrutteringsteam
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </PageHero>

      <section
        aria-label="Kompetanse vi rekrutterer"
        className="bg-white py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Hva vi rekrutterer
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl">
              Faglig dybde,
              <br />
              <span className="text-navy-dark/55">tyngst kompetanse først.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-dark/65 font-light">
              For erfarne kandidater handler rekruttering om mer enn CV-treff. Vi ser etter
              dokumentert faglig tyngde, riktig ansvarsnivå og mennesker som passer inn i
              prosjektene de skal lykkes i.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TARGET_ROLES.map((role, i) => {
              const Icon = role.icon;
              return (
                <FadeIn key={role.title} delay={i * 0.08}>
                  <article className="h-full rounded-2xl border border-navy-dark/10 bg-gray-50 p-8 transition hover:border-teal/30 hover:shadow-lg hover:shadow-navy-dark/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-navy-dark/10 bg-white">
                      <Icon className="h-6 w-6 text-teal" aria-hidden />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-extrabold text-navy-dark">
                      {role.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed font-light text-navy-dark/65">
                      {role.body}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {role.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-navy-dark/75"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                            aria-hidden
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn>
            <div className="mt-20 border-t border-navy-dark/10 pt-14">
              <h3 className="font-display text-3xl font-extrabold tracking-tight text-navy-dark">
                Vi rekrutterer også
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-dark/65 font-light">
                I tillegg til de tyngre rollene hjelper vi bedrifter med fagfolk og støttefunksjoner
                som må være pålitelige, kvalitetssikrede og klare for prosjekt.
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ALSO_RECRUIT_ROLES.map((role, i) => {
              const Icon = role.icon;
              return (
                <FadeIn key={role.title} delay={i * 0.08}>
                  <article className="h-full rounded-2xl border border-navy-dark/10 bg-gray-50 p-8 transition hover:border-teal/30 hover:shadow-lg hover:shadow-navy-dark/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-navy-dark/10 bg-white">
                      <Icon className="h-6 w-6 text-teal" aria-hidden />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-extrabold text-navy-dark">
                      {role.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed font-light text-navy-dark/65">
                      {role.body}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {role.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-navy-dark/75"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        aria-label="Slik rekrutterer vi"
        className="bg-gray-50 py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Vår prosess
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl">
              Strukturert prosess.
              <br />
              <span className="text-navy-dark/55">Personlig oppfølging.</span>
            </h2>
          </FadeIn>

          <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeIn as="li" className="relative h-full rounded-2xl bg-white p-7" key={p.step} delay={i * 0.06}>
                    <span
                      aria-hidden
                      className="font-display text-5xl font-extrabold text-green/40 leading-none"
                    >
                      {p.step}
                    </span>
                    <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-lg bg-green-light">
                      <Icon className="h-5 w-5 text-green-dark" aria-hidden />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-extrabold text-navy-dark">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
                      {p.body}
                    </p>
                  
                </FadeIn>
              );
            })}
          </ol>
        </Container>
      </section>

      <CtaBand
        eyebrow="Trenger du flere folk på laget?"
        title="La oss finne riktig person for prosjektet ditt."
        description="Fortell oss hva du trenger, så hører du fra rekrutteringsteamet vårt innen 24 timer."
      />
    </>
  );
}
