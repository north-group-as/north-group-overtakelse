import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BadgeCheck, Check, Clock, Users } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import JsonLd from "@/components/seo/JsonLd";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import { courses, getCourseBySlug } from "@/lib/courses";
import { BUSINESS } from "@/lib/business-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) {
    return { title: "Kurs ikke funnet" };
  }
  return {
    title: course.title,
    description: course.description,
    alternates: { canonical: `/kurs/${course.slug}/` },
    openGraph: {
      title: course.title,
      description: course.description,
      url: `/kurs/${course.slug}/`,
      siteName: BUSINESS.siteName,
      locale: "nb_NO",
      type: "website",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function KursDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) {
    notFound();
  }

  const related = courses
    .filter((c) => c.slug !== course.slug)
    .filter((c) => c.type === course.type)
    .slice(0, 3);

  const isDigital = course.type === "digital";
  const ctaLabel = isDigital ? "Bestill kurset" : "Be om tilbud";

  const courseJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.longDescription ?? course.description,
    provider: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.siteUrl,
    },
    url: `${BUSINESS.siteUrl}/kurs/${course.slug}/`,
    ...(course.languages && course.languages.length > 0
      ? { inLanguage: course.languages }
      : {}),
    ...(course.priceValue !== null
      ? {
          offers: {
            "@type": "Offer",
            price: course.priceValue,
            priceCurrency: "NOK",
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: course.type === "digital" ? "online" : "onsite",
      ...(course.duration ? { duration: course.duration } : {}),
    },
  };

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { label: "Forsiden", href: "/" },
          { label: "Kurs", href: "/kurs/" },
          { label: course.title },
        ]}
      />
      <JsonLd data={courseJsonLd} />
      <PageHero
        eyebrow={course.categoryLabel}
        title={course.title}
        subtitle={course.longDescription ?? course.description}
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Kurs", href: "/north-kurs/" },
          { label: "Oversikt", href: "/north-kurs/kursoversikt/" },
          { label: course.title },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/85">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
            <Clock className="h-4 w-4 text-green" aria-hidden />
            {course.duration}
          </span>
          {course.certification ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <BadgeCheck className="h-4 w-4 text-green" aria-hidden />
              {course.certification}
            </span>
          ) : null}
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
            <Users className="h-4 w-4 text-green" aria-hidden />
            {course.targetAudience}
          </span>
        </div>
      </PageHero>

      {course.image ? (
        <section aria-label={`Bilde av ${course.title}`} className="bg-white pt-16 lg:pt-24">
          <Container>
            <FadeIn>
              <div className="relative mx-auto aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-2xl bg-gray-50">
                <Image
                  src={course.image}
                  alt={`Illustrasjon for kurset ${course.title}`}
                  fill
                  sizes="(min-width: 1024px) 896px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>
          </Container>
        </section>
      ) : null}

      <section aria-label="Detaljer om kurset" className="bg-white py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <FadeIn>
                <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
                  Kursinnhold
                </p>
                <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-dark md:text-4xl leading-[1.05]">
                  Det du lærer.
                </h2>
              </FadeIn>

              {course.curriculum ? (
                <ol className="mt-10 space-y-4">
                  {course.curriculum.map((item, i) => (
                    <FadeIn as="li" className="flex items-start gap-4 rounded-2xl border border-navy-dark/10 bg-gray-50 p-6" key={item} delay={i * 0.04}>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-light">
                          <span className="font-display text-sm font-extrabold text-green-dark">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </span>
                        <p className="text-base leading-relaxed text-navy-dark">{item}</p>
                      
                    </FadeIn>
                  ))}
                </ol>
              ) : null}

              <FadeIn delay={0.1} className="mt-12">
                <h3 className="font-display text-2xl font-extrabold text-navy-dark">
                  Hva du sitter igjen med
                </h3>
                <ul className="mt-5 space-y-3">
                  {course.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-base text-navy-dark/80"
                    >
                      <Check className="mt-1 h-5 w-5 shrink-0 text-green-dark" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            <FadeIn delay={0.05} className="lg:col-span-5">
              <aside className="sticky top-24 rounded-2xl border border-navy-dark/10 bg-gray-50 p-8 lg:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-dark/55">
                  {isDigital ? "Pris per deltaker" : "Pris for fysisk kurs"}
                </p>
                <p className="mt-2 font-display text-4xl font-extrabold text-navy-dark leading-none">
                  {course.price}
                </p>

                <div className="mt-7 grid gap-3 text-sm text-navy-dark/75">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-green-dark" aria-hidden />
                    <span>
                      <span className="font-semibold">Varighet:</span> {course.duration}
                    </span>
                  </div>
                  {course.certification ? (
                    <div className="flex items-start gap-3">
                      <BadgeCheck
                        className="mt-0.5 h-4 w-4 shrink-0 text-green-dark"
                        aria-hidden
                      />
                      <span>
                        <span className="font-semibold">Kursbevis:</span> {course.certification}
                      </span>
                    </div>
                  ) : null}
                  <div className="flex items-start gap-3">
                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-green-dark" aria-hidden />
                    <span>
                      <span className="font-semibold">For:</span> {course.targetAudience}
                    </span>
                  </div>
                </div>

                {isDigital && course.externalUrl ? (
                  <a
                    href={course.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green px-6 py-3.5 text-sm font-semibold text-navy-dark shadow-lg shadow-green/25 transition hover:bg-green-dark"
                  >
                    Bestill kurs
                  </a>
                ) : (
                  <Link
                    href="#bestill"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green px-6 py-3.5 text-sm font-semibold text-navy-dark shadow-lg shadow-green/25 transition hover:bg-green-dark"
                  >
                    {ctaLabel}
                  </Link>
                )}
                {isDigital ? (
                  <p className="mt-4 text-xs leading-relaxed text-navy-dark/55">
                    Kurset gjennomføres på vår e-læringsplattform Thinkific. Du blir sendt dit for å
                    fullføre bestillingen.
                  </p>
                ) : (
                  <p className="mt-4 text-xs leading-relaxed text-navy-dark/55">
                    Vi kontakter deg innen 24 timer med tilbud tilpasset bedriften.
                  </p>
                )}
              </aside>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section
        id="bestill"
        aria-label={isDigital ? "Bestill kurs" : "Bestillingsskjema"}
        className="bg-gray-50 py-24 lg:py-32"
      >
        <Container>
          {isDigital && course.externalUrl ? (
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
                Bestill
              </p>
              <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]">
                {course.title}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-dark/65 font-light">
                Kurset kjøpes og gjennomføres på vår e-læringsplattform Thinkific.
              </p>
              <a
                href={course.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-green px-8 py-3.5 text-sm font-semibold text-navy-dark shadow-lg shadow-green/25 transition hover:bg-green-dark"
              >
                Bestill kurs
              </a>
            </div>
          ) : (
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
                Be om tilbud
              </p>
              <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]">
                {course.title}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-dark/65 font-light max-w-md">
                Vi setter sammen et tilbud tilpasset antall deltakere, lokasjon og innhold.
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-7">
              <ContactForm
                title="Be om tilbud"
                description={`Forespørsel om "${course.title}". Vi foreslår dato, lokasjon og pris.`}
                defaultSubject={course.title}
                variant="course"
                courseSlug={course.slug}
              />
            </FadeIn>
          </div>
          )}
        </Container>
      </section>

      {related.length > 0 ? (
        <section
          aria-label="Andre relevante kurs"
          className="bg-white py-24 lg:py-32"
        >
          <Container>
            <FadeIn>
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-4">
                    Andre kurs
                  </p>
                  <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-dark md:text-4xl leading-[1.05] max-w-2xl">
                    Du kan også være interessert i
                  </h2>
                </div>
                <Link
                  href="/north-kurs/kursoversikt/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-dark hover:text-green"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden />
                  Tilbake til alle kurs
                </Link>
              </div>
            </FadeIn>

            <ul className="mt-14 grid gap-5 md:grid-cols-3">
              {related.map((c, i) => (
                <FadeIn as="li" className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-dark/10 bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:border-green/40 hover:shadow-lg hover:shadow-navy-dark/5" key={c.slug} delay={i * 0.05}>
                    {c.image ? (
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-white">
                        <Image
                          src={c.image}
                          alt={c.title}
                          fill
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    ) : null}
                    <div className="flex h-full flex-col p-6">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-dark mb-2">
                      {c.categoryLabel}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-extrabold leading-tight text-navy-dark">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-dark/65 font-light">
                      {c.description}
                    </p>
                    <div className="mt-auto flex items-end justify-between border-t border-navy-dark/5 pt-5">
                      <span className="font-display text-xl font-extrabold text-navy-dark leading-none">
                        {c.price}
                      </span>
                      <Link
                        href={`/kurs/${c.slug}/`}
                        className="text-sm font-semibold text-green-dark hover:text-green"
                      >
                        Les mer
                      </Link>
                    </div>
                    </div>
                </FadeIn>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <CtaBand
        eyebrow="Trenger du flere kurs?"
        title="Vi setter sammen kurspakker til hele teamet."
        description="Kombinér flere kurs eller flere deltakere, så foreslår vi en pakke som passer."
        primaryHref="/kontakt/"
        primaryLabel="Be om tilbud"
      />
    </>
  );
}
