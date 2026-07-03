"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { courses, type Course } from "@/lib/courses";

export default function CourseListClient() {
  const [activeFilter, setActiveFilter] = useState<"alle" | "digital" | "fysisk">("alle");

  const filtered =
    activeFilter === "alle" ? courses : courses.filter((c) => c.type === activeFilter);

  return (
    <>
      <PageHero
        eyebrow="Alle kurs"
        title="Kurs for elektrikere og bedrifter."
        subtitle="Både digitale nettkurs og fysiske kurs tilpasset bedriften. Velg format, finn kurset du trenger, og bestill direkte."
        breadcrumbs={[{ label: "Forsiden", href: "/" }, { label: "Kurs" }]}
      />

      <section aria-label="Kursoversikt med filter" className="bg-white py-20 lg:py-28">
        <Container>
          {/* Filter bar */}
          <FadeIn>
            <div className="mb-12 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-2 text-sm font-semibold text-navy-dark/70">
                <Filter className="h-4 w-4" aria-hidden />
                Filter:
              </span>
              {(["alle", "digital", "fysisk"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`inline-flex min-h-11 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeFilter === f
                      ? "bg-green text-white shadow-sm"
                      : "bg-gray-100 text-navy-dark/60 hover:bg-gray-200"
                  }`}
                >
                  {f === "alle" ? "Alle kurs" : f === "digital" ? "Digitale" : "Fysiske"}
                  {f !== "alle" && (
                    <span className="text-xs opacity-70">
                      ({courses.filter((c) => c.type === f).length})
                    </span>
                  )}
                </button>
              ))}
              <span className="ml-auto text-sm text-navy-dark/70">
                Viser {filtered.length} av {courses.length} kurs
              </span>
            </div>
          </FadeIn>

          {/* Course grid */}
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((course, i) => (
              <CourseCard key={course.slug} course={course} index={i} />
            ))}
          </ul>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-navy-dark/70">Ingen kurs funnet med dette filteret.</p>
              <button
                onClick={() => setActiveFilter("alle")}
                className="mt-3 text-sm font-semibold text-green-dark hover:text-green"
              >
                Vis alle kurs
              </button>
            </div>
          )}
        </Container>
      </section>

      <CtaBand
        eyebrow="Skreddersydd opplæring?"
        title="Vi setter sammen kurspakker for bedrifter."
        description="Trenger du flere kursplasser eller et skreddersydd opplegg for hele teamet? Vi skreddersyr innhold og tidspunkt."
        primaryHref="/kontakt/"
        primaryLabel="Be om tilbud"
      />
    </>
  );
}

function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <FadeIn
      as="li"
      delay={index * 0.04}
      className="group flex h-full flex-col rounded-2xl border border-navy-dark/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green/40 hover:shadow-lg hover:shadow-navy-dark/5"
    >
      {/* Tags row */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex rounded-full bg-green-light px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-green-dark">
          {course.categoryLabel}
        </span>
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${
            course.type === "digital"
              ? "bg-blue-50 text-blue-600"
              : "bg-amber-50 text-amber-700"
          }`}
        >
          {course.type === "digital" ? "Digitalt" : "Fysisk"}
        </span>
      </div>

      {/* Title + description */}
      <h2 className="mt-4 font-display text-lg font-extrabold leading-tight text-navy-dark">
        {course.title}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-dark/60 font-light">
        {course.description}
      </p>

      {/* Price + CTA */}
      <div className="mt-5 flex items-end justify-between border-t border-navy-dark/5 pt-4">
        <div>
          <span className="font-display text-xl font-extrabold text-navy-dark leading-tight">
            {course.price}
          </span>
          <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-navy-dark/70">
            {course.duration}
          </p>
        </div>
        <Link
          href={`/kurs/${course.slug}/`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-green-dark transition-colors hover:text-green"
        >
          {course.type === "digital" ? "Bestill digitalt" : "Les mer"}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </FadeIn>
  );
}
