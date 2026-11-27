import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import JsonLd from "@/components/seo/JsonLd";
import { BUSINESS } from "@/lib/business-data";
import { FAQ_CATEGORIES } from "@/lib/faq";

/* Flat liste med alle Q&A for JSON-LD */
const ALL_FAQ_ITEMS = FAQ_CATEGORIES.flatMap((cat) => cat.items);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

/* ────────────────────────────────────────────────────────
   Metadata
   ──────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Ofte stilte spørsmål (FAQ)",
  description:
    "Svar på vanlige spørsmål om kurs, rekruttering, HR-tjenester og North Group. Finn informasjon om priser, sertifiseringer, prosesser og mer.",
  alternates: { canonical: "/faq/" },
  openGraph: {
    title: "Ofte stilte spørsmål",
    description:
      "Svar på vanlige spørsmål om kurs, rekruttering, HR-tjenester og North Group.",
    url: `${BUSINESS.siteUrl}/faq/`,
    siteName: BUSINESS.siteName,
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ofte stilte spørsmål",
    description:
      "Svar på vanlige spørsmål om kurs, rekruttering, HR-tjenester og North Group.",
    images: ["/opengraph-image"],
  },
};

/* ────────────────────────────────────────────────────────
   Side-komponent
   ──────────────────────────────────────────────────────── */

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      <PageHero
        eyebrow="Ofte stilte spørsmål"
        title="Svar på det du lurer på."
        subtitle="Her finner du svar på de vanligste spørsmålene om kurs, rekruttering, HR-tjenester og North Group."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "FAQ" },
        ]}
      />

      <section aria-label="Ofte stilte spørsmål" className="bg-white py-20 lg:py-28">
        <Container size="narrow">
          {/* Hurtiglenker til kategorier */}
          <FadeIn>
            <nav
              aria-label="Hopp til kategori"
              className="mb-16 flex flex-wrap gap-3"
            >
              {FAQ_CATEGORIES.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-navy-dark/15 px-5 py-2.5 text-sm font-semibold text-navy-dark transition hover:border-green hover:text-green-dark"
                >
                  {cat.heading}
                </a>
              ))}
            </nav>
          </FadeIn>

          {/* Kategorier med spørsmål */}
          <div className="space-y-16">
            {FAQ_CATEGORIES.map((category, catIndex) => (
              <FadeIn key={category.id} delay={catIndex * 0.05}>
                <div id={category.id} className="scroll-mt-24">
                  <h2 className="font-display text-2xl font-extrabold text-navy-dark md:text-3xl">
                    {category.heading}
                  </h2>

                  <div className="mt-8 divide-y divide-navy-dark/10">
                    {category.items.map((item, itemIndex) => (
                      <details
                        key={itemIndex}
                        className="group"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-base font-extrabold text-navy-dark transition-colors hover:text-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green md:text-lg [&::-webkit-details-marker]:hidden">
                          <span>{item.question}</span>
                          <span
                            aria-hidden
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-dark/30 text-navy-dark/75 transition-transform group-open:rotate-45"
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
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Fant du ikke svar? */}
          <FadeIn delay={0.2}>
            <div className="mt-20 rounded-2xl bg-gray-50 p-8 lg:p-10">
              <h2 className="font-display text-xl font-extrabold text-navy-dark">
                Fant du ikke svaret du lette etter?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
                Ta kontakt med oss, så hjelper vi deg. Vi svarer normalt innen
                én virkedag.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/kontakt/"
                  className="inline-flex items-center gap-2 rounded-full bg-navy-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy"
                >
                  Kontakt oss
                </Link>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-navy-dark/15 px-6 py-3 text-sm font-semibold text-navy-dark transition hover:border-green hover:text-green-dark"
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
