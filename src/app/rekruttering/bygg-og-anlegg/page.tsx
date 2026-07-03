import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ClipboardList,
  Construction,
  HardHat,
  MapPin,
  Users,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import { BUSINESS } from "@/lib/business-data";

export const metadata: Metadata = {
  title: "Rekruttering bygg og anlegg",
  description:
    "Vi rekrutterer byggeledere, prosjektledere, håndverkere og anleggsfolk til prosjekter på Østlandet. Målrettede kampanjer, grundig screening og oppfølging i hele prosessen.",
  alternates: { canonical: "/rekruttering/bygg-og-anlegg/" },
  openGraph: {
    title: "Rekruttering bygg og anlegg",
    description:
      "Vi rekrutterer byggeledere, prosjektledere, håndverkere og anleggsfolk til prosjekter på Østlandet. Målrettede kampanjer, grundig screening og oppfølging.",
    url: "/rekruttering/bygg-og-anlegg/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
    title: "Rekruttering bygg og anlegg",
    description:
      "Vi rekrutterer byggeledere, prosjektledere, håndverkere og anleggsfolk til prosjekter på Østlandet.",
  },
};

const ROLES = [
  {
    icon: Construction,
    title: "Byggeledere og prosjektledere",
    body: "Vi finner ledere med erfaring fra totalentreprise, GFAB og mindre byggeprosjekter. Kandidater med dokumentert evne til fremdrift, budsjettkontroll og HMS-ansvar.",
    specs: ["Mobilisering og planarbeid", "HMS-ansvar på byggeplass", "Oppfølging av underentreprenører"],
  },
  {
    icon: HardHat,
    title: "Tømrere og murere",
    body: "Faglærte håndverkere med erfaring fra nybygg, rehabilitering og tilbygg. Alle med fagbrev og referanser fra sammenlignbare prosjekter.",
    specs: ["Nybygg og tilbygg", "Rehabilitering", "Innvendig og utvendig arbeid"],
  },
  {
    icon: Users,
    title: "Anleggsgartnere og gravere",
    body: "Personell til utomhusarbeid, graving, grunnarbeid og landskapsarbeid. Kandidater med maskinførerbevis og erfaring fra offentlige og private prosjekter.",
    specs: ["Graving og kablarbeid", "Grunnarbeid og drenering", "Landskapsarbeid"],
  },
  {
    icon: Building2,
    title: "Betongarbeidere og sveisere",
    body: "Sertifiserte spesialister innen betong, armering og sveising. Erfaring fra industri, infrastruktur og bygg, med fokus på kvalitet og sikkerhet.",
    specs: ["Støp og forskaling", "Armeringsarbeid", "Sveising og metallbearbeiding"],
  },
];

const WHY_US = [
  {
    icon: ClipboardList,
    title: "Bransjekunnskap først",
    body: "Våre rådgivere har bakgrunn fra byggebransjen. Vi forstår kompetansekravene og vet hva som skiller en god kandidat fra en som bare er tilgjengelig.",
  },
  {
    icon: BadgeCheck,
    title: "Grundig kvalitetssikring",
    body: "Alle kandidater gjennomgår intervju, referansesjekk og verifisering av kompetanse før vi presenterer dem for deg.",
  },
  {
    icon: MapPin,
    title: "Lokalkunnskap på Østlandet",
    body: "Vi kjenner arbeidsmarkedet i Oslo, Akershus og omkringliggende kommuner. Mange av våre kandidater er allerede bosatt i området.",
  },
];

export default function RekrutteringByggOgAnleggPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { label: "Forsiden", href: "/" },
          { label: "Rekruttering", href: "/rekruttering/" },
          { label: "Bygg og anlegg" },
        ]}
      />
      <PageHero
        variant="split"
        eyebrow="Rekruttering"
        title="Rekruttering til bygg og anlegg."
        subtitle="Byggeledere, prosjektledere, håndverkere og anleggsfolk. Vi finner riktig person til ditt prosjekt – med grundig screening og oppfølging i hele prosessen."
        image="/images/youtube/byggeplass-snoe-arbeider.webp"
        imageAlt="Anleggsarbeider på byggeplass i vinterforhold"
        imagePosition="center"
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Rekruttering", href: "/rekruttering/" },
          { label: "Bygg og anlegg" },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={BUSINESS.recmanUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-navy-dark shadow-lg shadow-green/25 transition hover:bg-green-dark"
          >
            Se ledige stillinger
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <Link
            href="/kontakt/"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-navy-dark"
          >
            Kontakt rekrutteringsteamet
          </Link>
        </div>
      </PageHero>

      {/* Roller vi rekrutterer */}
      <section aria-label="Roller vi rekrutterer" className="bg-white py-24 lg:py-32">
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Roller vi rekrutterer
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl">
              Fra byggeplass
              <br />
              <span className="text-navy-dark/55">til styreverelseiendom.</span>
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {ROLES.map((role, i) => {
              const Icon = role.icon;
              return (
                <FadeIn key={role.title} delay={i * 0.07}>
                  <article className="h-full rounded-2xl border border-navy-dark/10 bg-gray-50 p-8 transition hover:border-green/40 hover:shadow-lg hover:shadow-navy-dark/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-light">
                      <Icon className="h-6 w-6 text-green-dark" aria-hidden />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-extrabold text-navy-dark">
                      {role.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
                      {role.body}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {role.specs.map((s) => (
                        <li
                          key={s}
                          className="flex items-start gap-2 text-sm text-navy-dark/75"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-green-dark"
                            aria-hidden
                          />
                          <span>{s}</span>
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

      {/* Hvorfor velge North Group */}
      <section aria-label="Hvorfor velge North Group" className="bg-gray-50 py-24 lg:py-32">
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Derfor velge oss
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl">
              Bransjekunnskap som
              <br />
              <span className="text-navy-dark/55">gjør en forskjell.</span>
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {WHY_US.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={i * 0.06}>
                  <article className="h-full rounded-2xl bg-white p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-light">
                      <Icon className="h-6 w-6 text-green-dark" aria-hidden />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-extrabold text-navy-dark">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
                      {item.body}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Prosess */}
      <section aria-label="Slik rekrutterer vi" className="bg-white py-24 lg:py-32">
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Vår prosess
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl">
              Slik finner vi
              <br />
              <span className="text-navy-dark/55">rett person.</span>
            </h2>
          </FadeIn>

          <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Kartlegging", body: "Vi setter oss inn i prosjektet, kompetansebehovet og bedriftskulturen." },
              { step: "02", title: "Kandidatsøk", body: "Vi bruker eget nettverk og aktive databaser for å finne aktuelle kandidater." },
              { step: "03", title: "Intervju og screening", body: "Strukturerte intervjuer, referansesjekk og kompetanseverifisering." },
              { step: "04", title: "Oppfølging", body: "Vi følger opp etter ansettelse for å sikre at begge parter er fornøyd." },
            ].map((p, i) => (
              <FadeIn as="li" className="relative h-full rounded-2xl bg-gray-50 p-7" key={p.step} delay={i * 0.06}>
                  <span
                    aria-hidden
                    className="font-display text-5xl font-extrabold text-green/40 leading-none"
                  >
                    {p.step}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-extrabold text-navy-dark">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
                    {p.body}
                  </p>
                
              </FadeIn>
            ))}
          </ol>
        </Container>
      </section>

      {/* Relatert: Rekruttering og Kurs */}
      <section aria-label="Andre tjenester" className="bg-navy py-20 text-white">
        <Container>
          <FadeIn>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green mb-5">
                  Flere tjenester
                </p>
                <h2 className="font-display font-extrabold tracking-tight text-white text-[clamp(1.875rem,3vw+1rem,2.5rem)] leading-[1.05]">
                  Vi rekrutterer også innen elektro, rør og praktisk støtte.
                </h2>
                <Link
                  href="/rekruttering/"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Alle rekrutteringstjenester
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green mb-5">
                  Kurs og kompetanse
                </p>
                <h2 className="font-display font-extrabold tracking-tight text-white text-[clamp(1.875rem,3vw+1rem,2.5rem)] leading-[1.05]">
                  FSE, førstehjelp og varme arbeider.
                </h2>
                <Link
                  href="/kurs/"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Se kursutvalget
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <CtaBand
        eyebrow="Trenger du flere folk til bygg eller anlegg?"
        title="Fortell oss om prosjektet ditt."
        description="Gi oss en kort beskrivelse av behovet, så hører du fra rekrutteringsteamet innen 24 timer."
      />
    </>
  );
}
