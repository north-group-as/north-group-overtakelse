import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionSurface from "@/components/ui/SectionSurface";
import JsonLd from "@/components/seo/JsonLd";
import { KURS_HOWTO } from "@/lib/kurs-howto";
import { BUSINESS } from "@/lib/business-data";

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: KURS_HOWTO.name,
  description: KURS_HOWTO.description,
  totalTime: KURS_HOWTO.totalTime,
  step: KURS_HOWTO.steps.map((step, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: step.name,
    text: step.text,
    url: `${BUSINESS.siteUrl}/#kurs-steg-${i + 1}`,
  })),
};

/**
 * Tre steg fra bestilling til kursbevis. Synlig innhold og HowTo JSON-LD
 * kommer fra samme kilde (src/lib/kurs-howto.ts).
 */
export default function KursHowToSection() {
  return (
    <SectionSurface
      aria-labelledby="kurs-howto-heading"
      tone="white"
      className="py-24 lg:py-32"
    >
      <JsonLd data={howToJsonLd} />
      <Container>
        <FadeIn className="max-w-3xl mb-14">
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
            Kurs på nett
          </p>
          <h2
            id="kurs-howto-heading"
            className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]"
          >
            Hvordan tar du FSE-kurs
            <br />
            <span className="text-navy-dark/55">på nett hos North?</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy-dark/70 font-light">
            {KURS_HOWTO.description}
          </p>
        </FadeIn>

        <ol className="grid gap-4 md:grid-cols-3 lg:gap-6">
          {KURS_HOWTO.steps.map((step, i) => (
            <FadeIn
              key={step.name}
              as="li"
              delay={i * 0.05}
              className="h-full list-none"
            >
              <div
                id={`kurs-steg-${i + 1}`}
                className="h-full scroll-mt-24 rounded-2xl border border-navy-dark/10 bg-white p-6"
              >
                <span className="font-display text-sm font-extrabold text-green-dark">
                  Steg {i + 1}
                </span>
                <h3 className="mt-2 font-display text-lg font-extrabold text-navy-dark">
                  {step.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-dark/70 font-light">
                  {step.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </ol>

        <FadeIn delay={0.2} className="mt-10">
          <Link
            href="/north-kurs/digitale-kurs/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-dark hover:text-green transition-colors"
          >
            Se digitale kurs
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </FadeIn>
      </Container>
    </SectionSurface>
  );
}
