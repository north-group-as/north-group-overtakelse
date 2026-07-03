import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { BUSINESS } from "@/lib/business-data";

interface CtaBandProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  showPhone?: boolean;
}

export default function CtaBand({
  eyebrow = "Ta neste steg",
  title,
  description,
  primaryHref = "/kontakt/",
  primaryLabel = "Kontakt oss",
  showPhone = true,
}: CtaBandProps) {
  return (
    <section
      aria-label="Kall til handling"
      className="bg-gray-50 py-20 lg:py-24"
    >
      <Container>
        <FadeIn>
          <div className="relative isolate flex flex-col items-start gap-10 overflow-hidden rounded-2xl bg-navy-dark p-10 text-white lg:flex-row lg:items-center lg:justify-between lg:p-14">
            <SectionAtmosphere variant="dark" />
            <div className="relative max-w-2xl">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green">
                {eyebrow}
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
                {title}
              </h2>
              {description ? (
                <p className="mt-5 text-base font-light leading-relaxed text-white/75">
                  {description}
                </p>
              ) : null}
            </div>
            <div className="relative flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-navy-dark shadow-lg shadow-green/30 transition hover:bg-green-dark"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              {showPhone ? (
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Ring {BUSINESS.phoneDisplay}
                </a>
              ) : null}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
