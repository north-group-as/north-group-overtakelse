import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, Clock, FileCheck, Laptop } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Digitale sikkerhetskurs på nett",
  description:
    "Nettkurs i FSE og førstehjelp. Bestill, ta kurset i eget tempo og få digitalt kursbevis ved bestått.",
  alternates: { canonical: "/north-kurs/digitale-kurs/" },
  openGraph: {
    title: "Digitale sikkerhetskurs på nett",
    description:
      "Nettkurs i FSE og førstehjelp. Bestill, ta kurset i eget tempo og få digitalt kursbevis ved bestått.",
    url: "/north-kurs/digitale-kurs/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
    title: "Digitale sikkerhetskurs på nett",
    description:
      "Nettkurs i FSE og førstehjelp. Bestill, ta kurset i eget tempo og få digitalt kursbevis ved bestått.",
  },
};

const HOW_IT_WORKS = [
  {
    icon: Laptop,
    step: "01",
    title: "Bestill kurs",
    body: "Velg kurset du trenger og kjøp det på vår e-læringsplattform Thinkific.",
  },
  {
    icon: Clock,
    step: "02",
    title: "Ta kurset i eget tempo",
    body: "Logg inn på Thinkific når det passer deg. Pause og fortsett der du slapp, så ofte du trenger.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Bestå avsluttende test",
    body: "Når du har bestått testen, får du tilgang til kursbeviset umiddelbart.",
  },
  {
    icon: BadgeCheck,
    step: "04",
    title: "Last ned kursbevis",
    body: "Last ned beviset som PDF og send til arbeidsgiver, kunde eller behold for egen del.",
  },
];

export default function DigitaleKursPage() {
  const digital = courses.filter((c) => c.type === "digital");

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { label: "Forsiden", href: "/" },
          { label: "North Kurs", href: "/north-kurs/" },
          { label: "Digitale sikkerhetskurs på nett" },
        ]}
      />
      <PageHero
        eyebrow="Digitale sikkerhetskurs på nett"
        title="Nettkurs du kan ta når det passer deg."
        subtitle="Fullfør i eget tempo og få digitalt kursbevis umiddelbart. Lavere terskel, samme krav til kvalitet og godkjenning."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Kurs", href: "/north-kurs/" },
          { label: "Digitale sikkerhetskurs på nett" },
        ]}
      />

      <section
        aria-label="Digitale kurs til salgs"
        className="bg-white py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Tilgjengelige nettkurs
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl">
              Velg kurset
              <br />
              <span className="text-navy-dark/55">som passer behovet ditt.</span>
            </h2>
          </FadeIn>

          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {digital.map((course, i) => (
              <FadeIn as="li" className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-dark/10 bg-gray-50 transition-all duration-300 hover:border-green/40 hover:bg-white hover:shadow-lg hover:shadow-navy-dark/5" key={course.slug} delay={i * 0.06}>
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
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-dark mb-2">
                      {course.categoryLabel}
                    </span>
                    <span className="font-display text-2xl font-extrabold text-navy-dark leading-none">
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
                      {course.curriculum.map((c) => (
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
                    <a
                      href={course.externalUrl ?? `/kurs/${course.slug}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-navy-dark shadow-lg shadow-green/25 transition hover:bg-green-dark"
                    >
                      Bestill kurs
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </a>
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
              <span className="text-navy-dark/55">til kursbevis i hånden.</span>
            </h2>
          </FadeIn>

          <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeIn as="li" className="relative h-full rounded-2xl bg-white p-7" key={s.step} delay={i * 0.06}>
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
        eyebrow="Bedriftskunde?"
        title="Vi tilbyr samlepakker til hele teamet."
        description="Be om tilbud på flere kursplasser til ansatte, så får du både bedre pris og enklere håndtering."
        primaryHref="/kontakt/"
        primaryLabel="Be om tilbud"
      />
    </>
  );
}
