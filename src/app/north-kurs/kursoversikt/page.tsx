import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import { courses, type Course } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Kursoversikt – alle godkjente sikkerhetskurs",
  description:
    "Komplett oversikt over alle våre kurs. Digitale nettkurs i FSE, lift, førstehjelp og HMS, samt fysiske kurs i varme arbeider og FSE for instruert personell.",
  alternates: { canonical: "/north-kurs/kursoversikt/" },
  openGraph: {
    title: "Kursoversikt – alle godkjente sikkerhetskurs",
    description:
      "Komplett oversikt over alle våre kurs. Digitale nettkurs i FSE, lift, førstehjelp og HMS, samt fysiske kurs i varme arbeider og FSE for instruert personell.",
    url: "/north-kurs/kursoversikt/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
    title: "Kursoversikt – alle godkjente sikkerhetskurs",
    description:
      "Komplett oversikt over alle våre kurs. Digitale nettkurs i FSE, lift, førstehjelp og HMS, samt fysiske kurs i varme arbeider og FSE for instruert personell.",
  },
};

export default function KursoversiktPage() {
  const digital = courses.filter((c) => c.type === "digital");
  const physical = courses.filter((c) => c.type === "fysisk");

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { label: "Forsiden", href: "/" },
          { label: "North Kurs", href: "/north-kurs/" },
          { label: "Kursoversikt" },
        ]}
      />
      <PageHero
        eyebrow="Kursoversikt"
        title="Alle kurs samlet på ett sted."
        subtitle="Bla gjennom de digitale nettkursene du kan starte med en gang, og de fysiske kursene vi tilpasser bedriften."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Kurs", href: "/north-kurs/" },
          { label: "Oversikt" },
        ]}
      />

      <section
        id="digitale-kurs"
        aria-labelledby="digitale-heading"
        className="bg-white py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Digitale kurs
            </p>
            <h2
              id="digitale-heading"
              className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl"
            >
              Start når du vil.
              <br />
              <span className="text-navy-dark/55">Sertifikat med en gang.</span>
            </h2>
          </FadeIn>

          <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {digital.map((course, i) => (
              <CourseCard key={course.slug} course={course} index={i} />
            ))}
          </ul>
        </Container>
      </section>

      <section
        id="fysiske-kurs"
        aria-labelledby="fysiske-heading"
        className="bg-gray-50 py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Fysiske kurs
            </p>
            <h2
              id="fysiske-heading"
              className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl"
            >
              Tilpasses bedriften.
              <br />
              <span className="text-navy-dark/55">Praktisk og hands-on.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-dark/65 font-light">
              Vi gjennomfører kursene hos dere eller i egnede lokaler. Innholdet og varigheten
              tilpasses bedriftens behov, antall deltakere og bransje.
            </p>
          </FadeIn>

          <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {physical.map((course, i) => (
              <CourseCard key={course.slug} course={course} index={i} />
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        eyebrow="Trenger du flere kurs til teamet?"
        title="Be om samlepakke tilpasset bedriften."
        description="Vi setter sammen kurspakker for hele team og avdelinger, både fysisk og digitalt."
        primaryHref="/kontakt/"
        primaryLabel="Be om tilbud"
      />
    </>
  );
}

function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <FadeIn as="li" className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-dark/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-green/40 hover:shadow-lg hover:shadow-navy-dark/5" delay={index * 0.05}>
        <Link
          href={`/kurs/${course.slug}/`}
          className="absolute inset-0 z-10"
          aria-label={`Les mer om ${course.title}`}
        />
        {course.image ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-50">
            <Image
              src={course.image}
              alt={course.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        ) : null}
        <div className="flex h-full flex-col p-7">
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
        <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
          {course.description}
        </p>
        <ul className="mt-5 space-y-2">
          {course.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-navy-dark/70">
              <Check className="mt-[2px] h-3.5 w-3.5 shrink-0 text-green-dark" aria-hidden />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-end justify-between border-t border-navy-dark/5 pt-5">
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-dark/70">
              {course.duration}
            </span>
            <span className="font-display text-2xl font-extrabold text-navy-dark leading-tight">
              {course.price}
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-dark transition-colors group-hover:text-green">
            Les mer
            <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
        </div>
        </div>
    </FadeIn>
  );
}
