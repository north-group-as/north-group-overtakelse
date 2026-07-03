import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionSurface from "@/components/ui/SectionSurface";
import { courses } from "@/lib/courses";

export default function CoursesSection() {
  const featured = courses.filter((c) => c.featured).slice(0, 4);

  return (
    <SectionSurface
      id="kurs"
      aria-labelledby="courses-heading"
      tone="muted"
      atmosphere="muted"
      pattern="quiet"
      intensity="quiet"
      className="py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-4">
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Populære kurs
            </p>
            <h2
              id="courses-heading"
              className="font-display font-extrabold tracking-tight text-navy-dark leading-[1.05]"
              style={{ fontSize: "clamp(1.875rem, 3.5vw + 1rem, 2.75rem)" }}
            >
              Godkjente kurs,
              <br />
              <span className="text-navy-dark/55">ta når det passer.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-dark/60 font-light max-w-sm">
              Over 500 elektrikere har fullført våre nettkurs. Bestill, fullfør i eget tempo, og
              få digitalt sertifikat umiddelbart.
            </p>
            <Link
              href="/north-kurs/kursoversikt/"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-navy-dark/15 bg-white px-6 py-3 text-sm font-semibold text-navy-dark transition hover:border-green hover:text-green-dark"
            >
              Se hele kursoversikten
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </FadeIn>

          <ul className="flex flex-col gap-4 lg:col-span-8">
            {featured.map((course, i) => (
              <FadeIn
                as="li"
                key={course.slug}
                delay={i * 0.06}
                className="group flex flex-col rounded-2xl border border-navy-dark/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green/40 hover:shadow-lg hover:shadow-navy-dark/5 md:flex-row md:items-stretch md:gap-6 md:p-7"
              >
                <div className="flex flex-1 flex-col md:pr-2">
                  <div className="flex items-center justify-between">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-dark">
                      {course.categoryLabel}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-dark/35">
                      {course.type === "digital" ? "Digitalt" : "Fysisk"}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-extrabold leading-tight text-navy-dark md:text-xl">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-dark/55 font-light">
                    {course.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {course.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-navy-dark/65">
                        <Check className="mt-[2px] h-3.5 w-3.5 shrink-0 text-green-dark" aria-hidden />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 flex items-end justify-between gap-4 border-t border-navy-dark/5 pt-4 md:mt-0 md:min-w-[180px] md:flex-col md:items-end md:justify-between md:gap-6 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                  <span className="font-display text-2xl font-extrabold leading-none text-navy-dark md:text-3xl">
                    {course.price}
                  </span>
                  <Link
                    href={`/kurs/${course.slug}/`}
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-green-dark transition-colors hover:text-green"
                  >
                    {course.type === "digital" ? "Bestill digitalt" : "Be om tilbud"}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </ul>
        </div>
      </Container>
    </SectionSurface>
  );
}
