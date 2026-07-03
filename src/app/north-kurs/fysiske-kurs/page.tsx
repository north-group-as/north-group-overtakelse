import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, MapPin, Users, Wrench } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Fysiske kurs",
  description:
    "Fysiske kurs i FSE for instruert personell og varme arbeider. Hands-on opplæring med praktiske øvelser og sertifisering på stedet.",
  alternates: { canonical: "/north-kurs/fysiske-kurs/" },
  openGraph: {
    title: "Fysiske kurs",
    description:
      "Fysiske kurs i FSE for instruert personell og varme arbeider. Hands-on opplæring med praktiske øvelser og sertifisering på stedet.",
    url: "/north-kurs/fysiske-kurs/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
    title: "Fysiske kurs",
    description:
      "Fysiske kurs i FSE for instruert personell og varme arbeider. Hands-on opplæring med praktiske øvelser og sertifisering på stedet.",
  },
};

const WHAT_TO_EXPECT = [
  {
    icon: Users,
    step: "01",
    title: "Be om tilbud",
    body: "Fortell oss antall deltakere, ønsket dato og lokasjon. Vi sender et skreddersydd tilbud.",
  },
  {
    icon: MapPin,
    step: "02",
    title: "Vi kommer til dere",
    body: "Kurset kan holdes hos dere, eller hos oss i Oslo. Tilpasset til bedriftens hverdag.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Praktiske øvelser",
    body: "Erfarne instruktører tar deltakerne gjennom teori og praktiske scenarioer.",
  },
  {
    icon: BadgeCheck,
    step: "04",
    title: "Sertifikat på stedet",
    body: "Bestått eksamen gir sertifikat eller kursbevis utstedt direkte etter kursdagen.",
  },
];

export default function FysiskeKursPage() {
  const fysiske = courses
    .filter((c) => c.type === "fysisk")
    .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { label: "Forsiden", href: "/" },
          { label: "North Kurs", href: "/north-kurs/" },
          { label: "Fysiske kurs" },
        ]}
      />
      <PageHero
        eyebrow="Fysiske kurs"
        title="Hands-on opplæring der dere er."
        subtitle="Praktiske kurs med erfarne instruktører. Vi kommer til dere eller tar imot på Frydenbergveien. Sertifisering ved bestått."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Kurs", href: "/north-kurs/" },
          { label: "Fysiske kurs" },
        ]}
      />

      <section
        aria-label="Tilgjengelige fysiske kurs"
        className="bg-white py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Tilgjengelige kurs
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl">
              Velg kurset
              <br />
              <span className="text-navy-dark/55">som passer behovet ditt.</span>
            </h2>
          </FadeIn>

          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {fysiske.map((course, i) => (
              <FadeIn
                as="li"
                className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-gray-50 transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-navy-dark/5 ${
                  course.featured
                    ? "border-green/50 bg-green-light/30 ring-2 ring-green/30 ring-offset-2"
                    : "border-navy-dark/10 hover:border-green/40"
                }`}
                key={course.slug}
                delay={i * 0.06}
              >
                {course.image ? (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-white">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                ) : null}
                <div className="flex h-full flex-col p-8">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-dark mb-0">
                      {course.categoryLabel}
                    </span>
                    {course.featured ? (
                      <span className="inline-flex items-center rounded-full bg-green px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-navy-dark">
                        Populært
                      </span>
                    ) : null}
                  </span>
                  <span className="font-display text-lg font-extrabold text-navy-dark leading-none">
                    {course.price}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight text-navy-dark">
                  {course.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
                  {course.description}
                </p>

                {course.curriculum ? (
                  <ul className="mt-6 space-y-2">
                    {course.curriculum.slice(0, 5).map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2 text-sm text-navy-dark/75"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-green-dark"
                          aria-hidden
                        />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
                  <Link
                    href={`/kurs/${course.slug}/`}
                    className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-navy-dark shadow-lg shadow-green/25 transition hover:bg-green-dark"
                  >
                    Be om tilbud
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-dark/70">
                    {course.duration}
                  </span>
                </div>
                </div>
              </FadeIn>
            ))}
          </ul>
        </Container>
      </section>

      <section
        aria-label="Slik fungerer det"
        className="bg-gray-50 py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Slik fungerer det
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl">
              Fra bestilling
              <br />
              <span className="text-navy-dark/55">til sertifikat.</span>
            </h2>
          </FadeIn>

          <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WHAT_TO_EXPECT.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeIn
                  as="li"
                  className="relative h-full rounded-2xl bg-white p-7"
                  key={s.step}
                  delay={i * 0.06}
                >
                  <span
                    aria-hidden
                    className="font-display text-5xl font-extrabold text-green/40 leading-none"
                  >
                    {s.step}
                  </span>
                  <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-lg bg-green-light">
                    <Icon className="h-5 w-5 text-green-dark" aria-hidden />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-extrabold text-navy-dark">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
                    {s.body}
                  </p>
                </FadeIn>
              );
            })}
          </ol>
        </Container>
      </section>

      <CtaBand
        eyebrow="Skal hele teamet sertifiseres?"
        title="Vi skreddersyr fysiske kurs til bedriften."
        description="Send oss en kort beskrivelse av antall deltakere og ønsket tema, så foreslår vi en konkret plan."
        primaryHref="/kontakt/"
        primaryLabel="Be om tilbud"
      />
    </>
  );
}
