import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import JsonLd from "@/components/seo/JsonLd";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import { BUSINESS } from "@/lib/business-data";
import { FAQ_CATEGORIES } from "@/lib/faq";

/* Map for rask oppslag */
const CATEGORY_MAP = Object.fromEntries(
  FAQ_CATEGORIES.map((c) => [c.id, c])
);

/* ────────────────────────────────────────────────────────
   Static params
   ──────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return FAQ_CATEGORIES.map((cat) => ({ kategori: cat.id }));
}

/* ────────────────────────────────────────────────────────
   Metadata
   ──────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ kategori: string }>;
}): Promise<Metadata> {
  const { kategori } = await params;
  const cat = CATEGORY_MAP[kategori];

  if (!cat) {
    return { title: "Kategori ikke funnet" };
  }

  return {
    title: `${cat.heading} FAQ`,
    description: cat.description,
    alternates: { canonical: `/faq/${kategori}/` },
    openGraph: {
      title: `${cat.heading} FAQ`,
      description: cat.description,
      url: `${BUSINESS.siteUrl}/faq/${kategori}/`,
      siteName: BUSINESS.siteName,
      locale: "nb_NO",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${cat.heading} FAQ`,
      description: cat.description,
    },
  };
}

/* ────────────────────────────────────────────────────────
   JSON-LD
   ──────────────────────────────────────────────────────── */
function buildJsonLd(kategori: string) {
  const cat = CATEGORY_MAP[kategori];
  if (!cat) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cat.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/* ────────────────────────────────────────────────────────
   Side
   ──────────────────────────────────────────────────────── */
export default async function FaqKategoriPage({
  params,
}: {
  params: Promise<{ kategori: string }>;
}) {
  const { kategori } = await params;
  const cat = CATEGORY_MAP[kategori];

  if (!cat) notFound();

  const jsonLd = buildJsonLd(kategori);

  const otherCategories = FAQ_CATEGORIES.filter((c) => c.id !== kategori);

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { label: "Forsiden", href: "/" },
          { label: "FAQ", href: "/faq/" },
          { label: cat.heading },
        ]}
      />
      {jsonLd && <JsonLd data={jsonLd} />}

      <PageHero
        eyebrow="Ofte stilte spørsmål"
        title={cat.heading}
        subtitle={cat.description}
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "FAQ", href: "/faq/" },
          { label: cat.heading },
        ]}
      />

      {/* Tilbake-lenke */}
      <div className="bg-white py-6">
        <Container size="narrow">
          <Link
            href="/faq/"
            className="inline-flex min-h-11 items-center gap-2 rounded text-sm font-semibold text-navy-dark/60 transition hover:text-navy-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
          >
            <ArrowLeft className="h-4 w-4" />
            Alle kategorier
          </Link>
        </Container>
      </div>

      <section aria-label={cat.heading} className="bg-white pb-24 pt-8 lg:pb-32">
        <Container size="narrow">
          {/* Spørsmål */}
          <div className="divide-y divide-navy-dark/10">
            {cat.items.map((item, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <details className="group" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-base font-extrabold text-navy-dark transition-colors hover:text-green-dark md:text-lg [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <span
                      aria-hidden
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-dark/15 text-navy-dark/70 transition-transform group-open:rotate-45"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 1v12M1 7h12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="pb-5 pr-12 text-base font-light leading-relaxed text-navy-dark/70">
                    {item.answer}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>

          {/* Andre kategorier */}
          <FadeIn delay={0.1}>
            <div className="mt-20 rounded-2xl bg-gray-50 p-8 lg:p-10">
              <h2 className="font-display text-xl font-extrabold text-navy-dark">
                Flere spørsmål?
              </h2>
              <p className="mt-2 text-sm text-navy-dark/65 font-light">
                Du finner også spørsmål i andre kategorier:
              </p>
              <nav
                aria-label="Andre FAQ-kategorier"
                className="mt-5 flex flex-wrap gap-3"
              >
                {otherCategories.map((c) => (
                  <Link
                    key={c.id}
                    href={`/faq/${c.id}/`}
                    className="inline-flex items-center rounded-full border border-navy-dark/15 px-5 py-2.5 text-sm font-semibold text-navy-dark transition hover:border-green hover:text-green-dark"
                  >
                    {c.heading}
                  </Link>
                ))}
              </nav>
            </div>
          </FadeIn>

          {/* Kontakt CTA */}
          <FadeIn delay={0.15}>
            <div className="mt-12 rounded-2xl bg-navy-dark p-8 lg:p-10">
              <h2 className="font-display text-xl font-extrabold text-white">
                Fant du ikke svaret du lette etter?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70 font-light">
                Ta kontakt med oss, så hjelper vi deg. Vi svarer normalt
                innen én virkedag.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/kontakt/"
                  className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-dark"
                >
                  Kontakt oss
                </Link>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                >
                  Ring {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <CtaBand
        eyebrow="Klar for neste steg?"
        title="Vi hjelper deg med kurs, rekruttering og HR."
        description="Enten du trenger sertifiserte medarbeidere, HMS-kurs eller hjelp med personalspørsmål, er vi klare til å hjelpe."
      />
    </>
  );
}
