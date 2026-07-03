import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Calendar,
  Check,
  Clock,
  HeartPulse,
  MapPin,
  Plane,
  Users,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { BUSINESS } from "@/lib/business-data";

export const metadata: Metadata = {
  title: "Vikariat – raske, kvalitetssjekkede kandidater",
  description:
    "Trenger du folk raskt? Vikariater ved sykefravær, ferie og permisjon. Kvalitetssikrede kandidater på dagen eller uka.",
  alternates: { canonical: "/vikariat/" },
  openGraph: {
    title: "Vikariat – raske, kvalitetssjekkede kandidater",
    description:
      "Trenger du folk raskt? Vikariater ved sykefravær, ferie og permisjon. Kvalitetssikrede kandidater på dagen eller uka.",
    url: "/vikariat/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
    title: "Vikariat – raske, kvalitetssjekkede kandidater",
    description:
      "Trenger du folk raskt? Vikariater ved sykefravær, ferie og permisjon. Kvalitetssikrede kandidater på dagen eller uka.",
  },
};

const USE_CASES = [
  {
    icon: HeartPulse,
    title: "Sykefravær",
    body: "Akutt sykmelding eller langtidsfravær. Vi har vikarer som kan starte i morgen, ikke om to uker.",
    typical: "Typisk varighet: 1 dag til 6 måneder",
  },
  {
    icon: Plane,
    title: "Ferie",
    body: "Sommer, jul eller påske. Hold driften i gang når faste ansatte er ute av huset.",
    typical: "Typisk varighet: 2 til 6 uker",
  },
  {
    icon: Calendar,
    title: "Permisjon",
    body: "Foreldrepermisjon, studiepermisjon eller annen lengre permisjon. Vi finner kvalifisert dekning.",
    typical: "Typisk varighet: 3 måneder til 1 år",
  },
];

const REASONS = [
  {
    icon: Clock,
    title: "Rask respons",
    body: "Vi vet at behovet kan oppstå over natta. Vi har kapasitet til å hjelpe når det haster.",
  },
  {
    icon: Users,
    title: "Kvalitetssjekkede kandidater",
    body: "Alle kandidater er intervjuet, referansesjekket og kvalitetssikret før de tilbys.",
  },
  {
    icon: Briefcase,
    title: "Korte og lange perioder",
    body: "Fra en ukes akutt sykefravær til lange permisjonsdekninger, vi tilpasser varigheten.",
  },
  {
    icon: MapPin,
    title: "Hele Norge",
    body: "Vi formidler kandidater til oppdrag i hele landet, med base i Oslo.",
  },
];

const ROLES = [
  {
    name: "Administrasjon og kontor",
    body: "Resepsjonister, kontormedarbeidere og administrative støttefunksjoner.",
  },
  {
    name: "Økonomi og regnskap",
    body: "Regnskapsmedarbeidere, lønningsansvarlige og bokholdere på prosjekt eller i sykefravær.",
  },
  {
    name: "Prosjektkoordinering",
    body: "Koordinatorer og assistenter til prosjekter med kort eller lang varighet.",
  },
  {
    name: "Drift og logistikk",
    body: "Lager-, logistikk- og driftspersonell til hektiske perioder.",
  },
];

const FAQS = [
  {
    q: "Hvor raskt kan dere levere en vikar?",
    a: "Som regel innen 24-48 timer for vanlige roller, og samme dag ved akutt behov. Vi har en kjernebase av kvalifiserte kandidater klare på kort varsel.",
  },
  {
    q: "Hva koster det?",
    a: "Vi har timepris som inkluderer all administrasjon, lønn, feriepenger og arbeidsgiveravgift. Du betaler kun for timer faktisk jobbet. Be om tilbud så får du fast pris for ditt behov.",
  },
  {
    q: "Hvor lenge kan vi ha en vikar?",
    a: "Fra én dag til over et år. Vi følger arbeidsmiljølovens regler om midlertidig ansettelse. Ved lange vikariater diskuterer vi gjerne overgang til fast ansettelse direkte hos dere.",
  },
  {
    q: "Hva hvis vikaren ikke passer?",
    a: "Vi bytter ut uten kostnad for deg. Vi har tett oppfølging de første dagene og fanger opp eventuelle problemer raskt.",
  },
  {
    q: "Tar dere ansvar for sykefravær og fravær hos vikaren?",
    a: "Ja. Vikaren er vår ansatt, ikke din. Vi tar all HR-administrasjon, betaler sykepenger og finner erstatter ved behov.",
  },
];

export default function VikariatPage() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow="Vikariat"
        title="Trenger du folk raskt? Vi har vikariatløsningen."
        subtitle="Sykefravær, ferie eller permisjon, vi finner kvalifisert dekning på dagen eller uka. Tett oppfølging fra første samtale."
        image="/images/intro/handhilsing-north-vegg.webp"
        imageAlt="Håndhilsing ved oppstart av vikariat"
        imagePosition="center 35%"
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Tjenester", href: "/vare-tjenester/" },
          { label: "Vikariat" },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/kontakt/"
            data-event="cta_kontakt_vikariat_klikk"
            className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-navy-dark shadow-lg shadow-green/25 transition hover:bg-green-dark"
          >
            Kontakt vikariat-team
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href={BUSINESS.phoneHref}
            data-event="phone_click_vikariat"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-navy-dark"
          >
            Ring {BUSINESS.phoneDisplay}
          </a>
        </div>
      </PageHero>

      <section
        aria-labelledby="use-cases-heading"
        className="bg-white py-24 lg:py-32"
      >
        <Container>
          <FadeIn className="max-w-3xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Tre vanlige behov
            </p>
            <h2
              id="use-cases-heading"
              className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]"
            >
              Når faste ansatte er borte,
              <br />
              <span className="text-navy-dark/55">trenger driften en plan B.</span>
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {USE_CASES.map((u, i) => {
              const Icon = u.icon;
              return (
                <FadeIn key={u.title} delay={i * 0.08}>
                  <article className="h-full rounded-2xl border border-navy-dark/10 bg-gray-50 p-8 transition hover:border-green/40 hover:shadow-lg hover:shadow-navy-dark/5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-light">
                      <Icon className="h-7 w-7 text-green-dark" aria-hidden />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-extrabold text-navy-dark leading-tight">
                      {u.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-navy-dark/70 font-light">
                      {u.body}
                    </p>
                    <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-green-dark">
                      {u.typical}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        aria-label="Hvorfor velge oss til vikariat"
        className="bg-gray-50 py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Hvorfor velge oss
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl">
              Når det haster,
              <br />
              <span className="text-navy-dark/55">leverer vi kvalitet uten dramatikk.</span>
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map((r, i) => {
              const Icon = r.icon;
              return (
                <FadeIn key={r.title} delay={i * 0.06}>
                  <article className="h-full rounded-2xl border border-navy-dark/10 bg-white p-7 transition hover:border-green/40 hover:shadow-lg hover:shadow-navy-dark/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-light">
                      <Icon className="h-6 w-6 text-green-dark" aria-hidden />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-extrabold text-navy-dark">
                      {r.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
                      {r.body}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        aria-label="Hvem vi formidler vikariat til"
        className="bg-white py-24 lg:py-32"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
                Kandidater
              </p>
              <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]">
                Hvem vi
                <br />
                <span className="text-navy-dark/55">formidler.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-dark/65 font-light max-w-md">
                Vi formidler vikarer ved sykefravær, permisjon og ferie. Vår base består av
                kandidater innen administrasjon, økonomi, prosjektkoordinering og drift, mange
                tilgjengelige på kort varsel.
              </p>
              <Link
                href="/rekruttering/"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy"
              >
                Les mer om rekruttering
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <ul className="space-y-4">
                {ROLES.map((c) => (
                  <li
                    key={c.name}
                    className="flex items-start gap-4 rounded-2xl border border-navy-dark/10 bg-gray-50 p-6"
                  >
                    <Check className="mt-1 h-5 w-5 shrink-0 text-green-dark" aria-hidden />
                    <div>
                      <h3 className="font-display text-lg font-extrabold text-navy-dark">
                        {c.name}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-navy-dark/65 font-light">
                        {c.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="faq-heading"
        className="bg-gray-50 py-24 lg:py-32"
      >
        <Container>
          <FadeIn className="max-w-3xl mb-14">
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Ofte stilte spørsmål
            </p>
            <h2
              id="faq-heading"
              className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]"
            >
              Det vi får spørsmål om
              <br />
              <span className="text-navy-dark/55">når noen vurderer vikariat.</span>
            </h2>
          </FadeIn>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
            {FAQS.map((f, i) => (
              <FadeIn key={f.q} delay={i * 0.04}>
                <details className="group h-full rounded-2xl border border-navy-dark/10 bg-white p-6 transition hover:border-green/40 hover:shadow-lg hover:shadow-navy-dark/5">
                  <summary className="cursor-pointer list-none">
                    <h3 className="font-display text-lg font-extrabold text-navy-dark flex items-center justify-between gap-4">
                      <span>{f.q}</span>
                      <span
                        aria-hidden
                        className="text-2xl font-light text-green-dark transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </h3>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-navy-dark/70 font-light">
                    {f.a}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section aria-label="Be om tilbud" className="bg-white py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
                Be om tilbud
              </p>
              <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]">
                Fortell oss
                <br />
                <span className="text-navy-dark/55">hva du trenger.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-dark/65 font-light max-w-md">
                Vi hører hva du trenger og foreslår en praktisk løsning. Du får svar innen 24 timer
                på hverdager.
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-7">
              <ContactForm
                title="Send oss en henvendelse"
                description="Vi kontakter deg raskt med tilbud tilpasset din bedrift."
                defaultSubject="Vikariat"
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Trenger du en vikar i dag?"
        title={`Ring oss direkte på ${BUSINESS.phoneDisplay}.`}
        description="Vi tar henvendelser på telefon mandag–fredag mellom 08 og 17."
      />
    </>
  );
}
