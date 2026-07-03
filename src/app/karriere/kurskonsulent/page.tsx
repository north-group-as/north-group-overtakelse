import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Calendar,
  Check,
  Clock,
  Handshake,
  MapPin,
  Target,
  TrendingUp,
  Wallet,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { BUSINESS } from "@/lib/business-data";

export const metadata: Metadata = {
  title: "Kurskonsulent FSE",
  description:
    "Vi søker freelance kurskonsulent til å holde FSE-kurs for elektrikere og fagfolk. Fleksible oppdrag, god betaling og reell påvirkning. Oslo/omegn.",
  alternates: { canonical: "/karriere/kurskonsulent/" },
  openGraph: {
    title: "Kurskonsulent FSE",
    description:
      "Vi søker freelance kurskonsulent til å holde FSE-kurs for elektrikere og fagfolk. Fleksible oppdrag, god betaling og reell påvirkning.",
    url: "/karriere/kurskonsulent/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
    title: "Kurskonsulent FSE",
    description:
      "Vi søker freelance kurskonsulent til å holde FSE-kurs for elektrikere og fagfolk. Fleksible oppdrag, god betaling og reell påvirkning.",
  },
};

const JOB_FACTS = [
  { label: "Stillingstittel", value: "Kurskonsulent" },
  { label: "Type ansettelse", value: "Fast, deltid 20%" },
  { label: "Arbeidstid", value: "Dagtid, ukedager" },
  { label: "Oppstart", value: "Etter avtale" },
  { label: "Sted", value: "Oslo / omegn" },
];

const QUALIFICATIONS = [
  "Har elektro-bakgrunn (fagbrev eller relevant erfaring)",
  "Kan FSE, og klarer å forklare det på en måte folk faktisk forstår",
  "Er komfortabel foran folk, uten å måtte gjemme deg bak én PowerPoint-mal",
  "Tør å gjøre kurset praktisk, konkret og engasjerende",
  "Liker at folk faktisk sitter igjen med noe når de går ut døren",
];

const ROLE_BULLETS = [
  "Du holder FSE-kurs for elektrikere og fagfolk, fysisk og/eller digitalt.",
  "Oppdraget er freelancebasert, noe som gjør det perfekt ved siden av jobb eller egen virksomhet.",
  "Du setter din egen agenda innenfor rammene, og vi forventer at du bruker den friheten til å gjøre kursene bedre enn det som er standard i dag.",
];

const BENEFITS = [
  {
    icon: Clock,
    title: "Fleksible oppdrag",
    body: "Du styrer når og hvor mye. Holder du ett kurs i måneden eller tre i uka, det bestemmer du.",
  },
  {
    icon: Wallet,
    title: "God betaling per kurs",
    body: "Vi betaler per gjennomført kurs, ikke per time. Det lønner seg å gjøre det bra.",
  },
  {
    icon: Target,
    title: "Reell påvirkning",
    body: "Du påvirker hvordan kursene gjennomføres, ikke bare innholdet i en fast mal.",
  },
  {
    icon: Handshake,
    title: "En samarbeidspartner",
    body: "Vi følger opp, leverer og tar ansvar. Du møter en partner, ikke bare en oppdragsgiver.",
  },
  {
    icon: TrendingUp,
    title: "God ordrereserve",
    body: "Nok å ta av fra dag én. Etterspørselen er solid, og kundebasen vokser.",
  },
  {
    icon: MapPin,
    title: "Oslo og omegn",
    body: "Noe reise kan forekomme, men basen er Oslo. Du trenger ikke være på farta hver uke.",
  },
];

export default function KurskonsulentPage() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow="Vi ansetter"
        title="Freelance FSE-kursholder - Elektro-bakgrunn - Oslo/omegn"
        subtitle="La oss være ærlige: FSE-kurs har blitt noe mange «må gjennom», ikke noe de ser frem til. Vi ønsker å endre det. Vi ser etter en freelance kursholder som ikke bare kan regelverket, men som klarer å gjøre det relevant, engasjerende og litt mer levende for folk ute i felt."
        image="/images/intro/byggeplass-hjelm.webp"
        imageAlt="Elektriker med hjelm på byggeplass"
        imagePosition="center 40%"
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Karriere" },
          { label: "Kurskonsulent FSE" },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="#soknad"
            data-event="cta_soknad_kurskonsulent_klikk"
            className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-navy-dark shadow-lg shadow-green/25 transition hover:bg-green-dark"
          >
            Ta kontakt
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href={`mailto:${BUSINESS.email}`}
            data-event="email_click_kurskonsulent"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-navy-dark"
          >
            Send e-post
          </a>
        </div>
      </PageHero>

      {/* Fakta om stillingen + Hva rollen går ut på */}
      <section
        aria-labelledby="rollen-heading"
        className="bg-white py-24 lg:py-32"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-7">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
                Hva rollen går ut på
              </p>
              <h2
                id="rollen-heading"
                className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]"
              >
                En kursholder som
                <br />
                <span className="text-navy-dark/55">gjør FSE levende.</span>
              </h2>
              <ul className="mt-10 space-y-5">
                {ROLE_BULLETS.map((b) => (
                  <li key={b} className="flex items-start gap-4 text-base leading-relaxed text-navy-dark/80 font-light">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-green-dark" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-5">
              <div className="rounded-2xl border border-navy-dark/10 bg-gray-50 p-8">
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-green-dark" aria-hidden />
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark">
                    Fakta om stillingen
                  </h3>
                </div>
                <dl className="mt-6 divide-y divide-navy-dark/10">
                  {JOB_FACTS.map((f) => (
                    <div
                      key={f.label}
                      className="flex items-baseline justify-between gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <dt className="text-sm font-light text-navy-dark/65">{f.label}</dt>
                      <dd className="text-right text-sm font-semibold text-navy-dark">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 text-xs font-light leading-relaxed text-navy-dark/55">
                  Freelance / selvstendig næringsdrivende. Noe reise kan forekomme.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Du passer om du... */}
      <section
        aria-labelledby="passer-heading"
        className="bg-gray-50 py-24 lg:py-32"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
                Du passer om du
              </p>
              <h2
                id="passer-heading"
                className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]"
              >
                Kjenner faget
                <br />
                <span className="text-navy-dark/55">og tør å vise det.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-dark/65 font-light max-w-md">
                Vi trenger ikke en perfekt CV. Vi trenger en person som kan FSE og som
                klarer å formidle det på en måte som faktisk lander hos folk i felt.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <ul className="space-y-4">
                {QUALIFICATIONS.map((q) => (
                  <li
                    key={q}
                    className="flex items-start gap-4 rounded-2xl border border-navy-dark/10 bg-white p-6"
                  >
                    <span
                      aria-hidden
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-light text-green-dark"
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-base leading-relaxed text-navy-dark/80 font-light">
                      {q}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Pull quote / mellomtittel */}
      <section
        aria-label="Hvorfor det krever riktig person"
        className="bg-navy-dark py-20 lg:py-28"
      >
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <p
                className="font-display text-[clamp(1.5rem,2.5vw+1rem,2.25rem)] font-extrabold leading-[1.25] tracking-tight text-white"
              >
                Vi holder FSE-kurs som faktisk setter spor.
                <span className="text-green"> Og det krever riktig person bak det.</span>
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Hva vi tilbyr */}
      <section
        aria-labelledby="tilbyr-heading"
        className="bg-white py-24 lg:py-32"
      >
        <Container>
          <FadeIn className="max-w-3xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Hva vi tilbyr
            </p>
            <h2
              id="tilbyr-heading"
              className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]"
            >
              En avtale som
              <br />
              <span className="text-navy-dark/55">fungerer for begge parter.</span>
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <FadeIn key={b.title} delay={i * 0.06}>
                  <article className="h-full rounded-2xl border border-navy-dark/10 bg-gray-50 p-7 transition hover:border-green/40 hover:shadow-lg hover:shadow-navy-dark/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-light">
                      <Icon className="h-6 w-6 text-green-dark" aria-hidden />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-extrabold text-navy-dark">
                      {b.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
                      {b.body}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Litt om oss + Hvorfor nå */}
      <section
        aria-labelledby="omoss-heading"
        className="bg-gray-50 py-24 lg:py-32"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-6">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
                Litt om oss
              </p>
              <h2
                id="omoss-heading"
                className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]"
              >
                North Group er tett på
                <br />
                <span className="text-navy-dark/55">bransjen. Og det er ikke tilfeldig.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-dark/70 font-light">
                Vi forstår menneskene vi jobber med, og vi vet hva som skiller et kurs som
                glemmes fra ett som faktisk gjør en forskjell. Hos oss blir du ikke én av
                mange. Du får en samarbeidspartner som er ærlig, tilgjengelig og genuint
                opptatt av at ting gjøres skikkelig.
              </p>
              <Link
                href="/om-oss/"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy"
              >
                Les mer om North Group
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-6">
              <div className="rounded-2xl border border-navy-dark/10 bg-white p-8 lg:p-10">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-green-dark" aria-hidden />
                  <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark">
                    Hvorfor nå
                  </p>
                </div>
                <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight text-navy-dark lg:text-3xl">
                  Etterspørselen er solid.
                  <br />
                  <span className="text-navy-dark/55">Vi vil levere enda flere kurs.</span>
                </h3>
                <p className="mt-6 text-base leading-relaxed text-navy-dark/70 font-light">
                  Vi kjenner hele elektrobransjen. Kundebasen er solid, og etterspørselen
                  er der. Vi ønsker å avlaste nåværende kursholder slik at vi kan tilby
                  enda flere kurs, og vi ser etter deg som kan løfte dette med oss.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Søknad / kontaktskjema */}
      <section
        id="soknad"
        aria-labelledby="soknad-heading"
        className="bg-white py-24 lg:py-32 scroll-mt-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
                Ta kontakt
              </p>
              <h2
                id="soknad-heading"
                className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]"
              >
                Send oss en
                <br />
                <span className="text-navy-dark/55">kort henvendelse.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-dark/65 font-light max-w-md">
                Fortell kort hvem du er og hvorfor du er nysgjerrig på rollen. Vi er raske
                på avtrekkeren, og det bør du være også.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-navy-dark/75">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green-dark" aria-hidden />
                  <span>Oslo / omegn (noe reise kan forekomme)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-dark" aria-hidden />
                  <span>northgroup.no</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-dark" aria-hidden />
                  <span>Svar innen 24 timer på virkedager</span>
                </li>
              </ul>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-7">
              <ContactForm
                title="Send en henvendelse"
                description="Vi tar kontakt innen kort tid for en uforpliktende prat om rollen."
                defaultSubject="Kurskonsulent FSE – stillingsannonse"
                className="bg-gray-50"
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Klar for å ta kontakt?"
        title={`Ring oss direkte på ${BUSINESS.phoneDisplay}.`}
        description="Vi tar henvendelser på telefon mandag til fredag mellom 08 og 17. Spør etter Kristoffer."
        primaryHref="#soknad"
        primaryLabel="Send henvendelse"
      />
    </>
  );
}