import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionSurface from "@/components/ui/SectionSurface";
import JsonLd from "@/components/seo/JsonLd";
import { HOME_FAQ } from "@/lib/faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

/**
 * Forside-FAQ: spørsmål som H3 og svar alltid synlige, slik at både
 * lesere og svarmotorer får svaret uten å klikke. Samme innhold som
 * FAQPage JSON-LD (Google krever at strukturert data matcher synlig tekst).
 */
export default function HomeFaqSection() {
  return (
    <SectionSurface
      aria-labelledby="home-faq-heading"
      tone="muted"
      className="py-24 lg:py-32"
    >
      <JsonLd data={faqJsonLd} />
      <Container>
        <FadeIn className="max-w-3xl mb-14">
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
            Ofte stilte spørsmål
          </p>
          <h2
            id="home-faq-heading"
            className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]"
          >
            Hva lurer bedrifter på
            <br />
            <span className="text-navy-dark/55">før de tar kontakt?</span>
          </h2>
        </FadeIn>

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          {HOME_FAQ.map((item, i) => (
            <FadeIn key={item.question} delay={i * 0.04}>
              <article className="h-full rounded-2xl border border-navy-dark/10 bg-white p-6">
                <h3 className="font-display text-lg font-extrabold text-navy-dark">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-dark/70 font-light">
                  {item.answer}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-10 flex flex-col gap-4 text-sm text-navy-dark/70 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-light">
            Kilder:{" "}
            <a
              href="https://lovdata.no/dokument/SF/forskrift/2006-04-28-458"
              className="font-semibold text-green-dark underline underline-offset-4 hover:text-green"
              rel="noopener"
            >
              FSE-forskriften på Lovdata
            </a>{" "}
            og{" "}
            <a
              href="https://www.dsb.no/"
              className="font-semibold text-green-dark underline underline-offset-4 hover:text-green"
              rel="noopener"
            >
              Direktoratet for samfunnssikkerhet og beredskap (DSB)
            </a>
            .
          </p>
          <Link
            href="/faq/"
            className="inline-flex items-center gap-2 font-semibold text-green-dark hover:text-green transition-colors"
          >
            Se alle spørsmål og svar
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </FadeIn>
      </Container>
    </SectionSurface>
  );
}
