import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Check,
  Clock,
  Handshake,
  Laptop,
  MapPin,
  Users,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import ContactForm from "@/components/sections/ContactForm";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "North Kurs – godkjente sikkerhetskurs",
  description:
    "Godkjente kurs for elektrikere, ledere og bedrifter. Ta nettkurs i eget tempo og få sertifikat med en gang. Fysiske kurs tilpasses bedriften.",
  alternates: { canonical: "/north-kurs/" },
  openGraph: {
    title: "North Kurs – godkjente sikkerhetskurs",
    description:
      "Godkjente kurs for elektrikere, ledere og bedrifter. Ta nettkurs i eget tempo og få sertifikat med en gang. Fysiske kurs tilpasses bedriften.",
    url: "/north-kurs/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
    title: "North Kurs – godkjente sikkerhetskurs",
    description:
      "Godkjente kurs for elektrikere, ledere og bedrifter. Ta nettkurs i eget tempo og få sertifikat med en gang. Fysiske kurs tilpasses bedriften.",
  },
};

const REASONS = [
  {
    icon: Laptop,
    title: "100 % nettbasert",
    body: "De digitale kursene tas i eget tempo. Du logger inn når det passer deg, fra hvor som helst.",
  },
  {
    icon: BadgeCheck,
    title: "Godkjent kursbevis",
    body: "Bestått kurs gir digitalt kursbevis umiddelbart. Last ned, send til arbeidsgiver eller kunde.",
  },
  {
    icon: Clock,
    title: "Rask gjennomføring",
    body: "Kortere kurs tar 1–2 timer. Du kommer raskt i gang og slipper å sette av en hel dag.",
  },
  {
    icon: Award,
    title: "Konkurransedyktige priser",
    body: "Vi holder prisene lave så du får god opplæring uten å sprenge budsjettet.",
  },
  {
    icon: Handshake,
    title: "Personlig støtte",
    body: "Du får hjelp av folk som kjenner kursene, kravene og hverdagen til bedriftene vi leverer til.",
  },
  {
    icon: Users,
    title: "Tilpasset bedriften",
    body: "Fysiske kurs kan settes opp for team, lokasjon og arbeidshverdag, ikke bare som standardpakke.",
  },
];

const CLIENT_LOGOS = [
  "/images/client-logos/live-logo-1.png",
  "/images/client-logos/live-logo-2.png",
  "/images/client-logos/live-logo-3.png",
  "/images/client-logos/live-logo-4.png",
  "/images/client-logos/live-logo-5.png",
  "/images/client-logos/live-logo-6.png",
];

export default function NorthKursPage() {
  const featured = courses.filter((c) => c.featured).slice(0, 4);
  const physical = courses.filter((c) => c.type === "fysisk");
  const digital = courses.filter((c) => c.type === "digital");
  const stats = [
    { value: "500+", label: "elektrikere kursert" },
    { value: String(courses.length), label: "kurs i katalogen" },
    { value: String(physical.length), label: "fysiske kursløp" },
  ];

  return (
    <>
      <PageHero
        variant="split"
        eyebrow="North Kurs"
        title="Godkjente kurs for elektrikere. Ta når det passer, få sertifikat med en gang."
        subtitle="Over 500 elektrikere har fullført våre nettkurs. Bestill, fullfør i eget tempo og få digitalt sertifikat umiddelbart. Fysiske kurs tilpasses bedriften."
        image="/images/intro/handhilsing-korridor.webp"
        imageAlt="Kursdeltakere møtes til sikkerhetskurs"
        imagePosition="center 40%"
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Kurs" },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/north-kurs/kursoversikt/"
            className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-navy-dark shadow-lg shadow-green/25 transition hover:bg-green-dark"
          >
            Se hele kursoversikten
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="/north-kurs/digitale-kurs/"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-navy-dark"
          >
            Digitale kurs
          </Link>
        </div>
      </PageHero>

      <section
        aria-label="Utvalgte kurs"
        className="bg-white py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Utvalgte kurs
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl">
              Sikkerhet er ikke en utgift,
              <br />
              <span className="text-navy-dark/55">det er en investering.</span>
            </h2>
          </FadeIn>

          <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((course, i) => (
              <FadeIn as="li" className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-dark/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-green/40 hover:shadow-lg hover:shadow-navy-dark/5" key={course.slug} delay={i * 0.06}>
                  {course.type === "digital" && course.externalUrl ? (
                    <a
                      href={course.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10"
                      aria-label={`Bestill ${course.title}`}
                    />
                  ) : (
                    <Link
                      href={`/kurs/${course.slug}/#bestill`}
                      className="absolute inset-0 z-10"
                      aria-label={`Be om tilbud på ${course.title}`}
                    />
                  )}
                  {course.image ? (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-50">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : null}
                  <div className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-dark mb-2">
                      {course.categoryLabel}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-dark/70">
                      {course.type === "digital" ? "Digitalt" : "Fysisk"}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-extrabold leading-tight text-navy-dark">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-dark/60 font-light">
                    {course.description}
                  </p>
                  <div className="mt-auto flex items-end justify-between border-t border-navy-dark/5 pt-5">
                    <span
                      className={
                        course.priceValue === null
                          ? "font-display text-base font-extrabold text-navy-dark leading-tight"
                          : "font-display text-2xl font-extrabold text-navy-dark leading-none"
                      }
                    >
                      {course.price}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-dark transition-colors group-hover:text-green">
                      {course.type === "digital" ? "Bestill kurs" : "Be om tilbud"}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </div>
                  </div>
              </FadeIn>
            ))}
          </ul>
        </Container>
      </section>

      <section
        aria-label="Hvorfor velge våre kurs"
        className="bg-gray-50 py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Hvorfor velge oss
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl">
              Trygghet gjennom kunnskap.
              <br />
              <span className="text-navy-dark/55">Kvalitetssikrede kurs for elektrikere.</span>
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r, i) => {
              const Icon = r.icon;
              return (
                <FadeIn key={r.title} delay={i * 0.06}>
                  <article className="h-full rounded-2xl bg-white p-7">
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

      <section aria-label="Bedrifter som har valgt North Kurs" className="bg-white py-20 lg:py-24">
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Valgt av bedrifter
            </p>
            <h2 className="font-display text-[clamp(1.875rem,3vw+1rem,2.5rem)] font-extrabold leading-[1.05] tracking-tight text-navy-dark">
              Kursopplegg for bedrifter som trenger dokumentert opplæring.
            </h2>
          </FadeIn>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {CLIENT_LOGOS.map((src, i) => (
              <FadeIn key={src} delay={i * 0.04}>
                <div className="flex h-24 items-center justify-center rounded-xl border border-navy-dark/10 bg-white px-5 shadow-sm shadow-navy-dark/5">
                  <Image
                    src={src}
                    alt={`Kundelogo ${i + 1}`}
                    width={178}
                    height={100}
                    sizes="178px"
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section aria-label="Kurs i tall" className="bg-navy-dark py-20 text-white lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.25fr] lg:items-end">
            <FadeIn>
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green mb-5">
                Dokumentert erfaring
              </p>
              <h2 className="font-display text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] font-extrabold leading-[1.05] tracking-tight">
                Kursopplegg bygget for arbeidshverdagen.
              </h2>
              <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/70">
                Vi kombinerer digitale nettkurs med fysiske kursløp for bedrifter som trenger
                godkjent opplæring uten unødvendig friksjon.
              </p>
            </FadeIn>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat, i) => (
                <FadeIn key={stat.label} delay={i * 0.06}>
                  <div className="border border-white/10 bg-white/[0.04] p-6">
                    <p className="font-display text-4xl font-extrabold leading-none text-green">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
                      {stat.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="To formater" className="bg-white py-24 lg:py-32">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <FadeIn>
              <article className="flex h-full flex-col rounded-2xl border border-navy-dark/10 bg-gray-50 p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-light">
                  <Laptop className="h-6 w-6 text-green-dark" aria-hidden />
                </div>
                <h3 className="mt-6 font-display text-2xl font-extrabold text-navy-dark">
                  Digitale kurs
                </h3>
                <p className="mt-3 text-base leading-relaxed text-navy-dark/65 font-light">
                  {digital.length} nettkurs du kan ta i eget tempo. FSE, lift, førstehjelp og HMS
                  for ledere, alle med digitalt kursbevis.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-navy-dark/75">
                  {[
                    "Bestill og start umiddelbart",
                    "Faktura sendes til selskapet",
                    "Kursbevis ved bestått test",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-dark" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/north-kurs/digitale-kurs/"
                  className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-navy-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy"
                >
                  Se digitale kurs
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            </FadeIn>
            <FadeIn delay={0.1}>
              <article className="flex h-full flex-col rounded-2xl border border-navy-dark/10 bg-navy-dark p-10 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/20">
                  <MapPin className="h-6 w-6 text-green" aria-hidden />
                </div>
                <h3 className="mt-6 font-display text-2xl font-extrabold text-white">
                  Fysiske kurs
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/75 font-light">
                  {physical.length} fysiske kurs vi tilpasser til bedriften. Varme arbeider og
                  FSE for instruert personell.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-white/85">
                  {[
                    "Tilpasses bedriftens lokaler",
                    "Praktiske øvelser inkludert",
                    "Sertifikat etter bestått",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/north-kurs/fysiske-kurs/"
                  className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-green px-6 py-3 text-sm font-semibold text-navy-dark shadow-lg shadow-green/25 transition hover:bg-green-dark"
                >
                  Se fysiske kurs
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section aria-label="Be om kurstilbud" className="bg-gray-50 py-24 lg:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <FadeIn>
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
                Kurs for bedrift
              </p>
              <h2 className="font-display text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] font-extrabold leading-[1.05] tracking-tight text-navy-dark">
                Få et konkret forslag til kursopplegg.
              </h2>
              <p className="mt-5 text-base font-light leading-relaxed text-navy-dark/65">
                Send antall deltakere, ønsket tidspunkt og hva dere trenger. Vi svarer med
                forslag til digital bestilling, fysisk kurs eller en samlet pakke.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-navy-dark/75">
                {[
                  "Tilbud for hele team eller enkeltpersoner",
                  "Digitale og fysiske kurs kan kombineres",
                  "Svar innen 24 timer på virkedager",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-dark" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <ContactForm
                variant="course"
                title="Be om kurstilbud"
                description="Fortell kort hvilke kurs dere trenger og hvor mange som skal delta."
                defaultSubject="Kurstilbud fra /north-kurs/"
                className="bg-white"
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Bedrift med flere ansatte?"
        title="Vi tilpasser kursene for hele teamet."
        description="Be om tilbud på samlepakke for fysiske eller digitale kurs, så foreslår vi en plan."
        primaryHref="/kontakt/"
        primaryLabel="Be om tilbud"
      />
    </>
  );
}
