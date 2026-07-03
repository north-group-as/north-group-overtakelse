import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import AuroraBackground from "@/components/ui/AuroraBackground";
import { BUSINESS } from "@/lib/business-data";

/**
 * Forside-hero: fjellfotografi med nordlys-aurora overlay.
 * Aurora-effekten er subtil og konsentrert i øvre høyre hjørne,
 * nok til å gi liv uten å overskygge fotografiet.
 */
export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen min-h-svh flex items-center bg-navy-dark overflow-hidden"
    >
      <Image
        src="/images/hero/hero-mountains.webp"
        alt="Norske fjell i solnedgang"
        fill
        priority
        sizes="100vw"
        className="object-cover select-none"
        style={{ objectPosition: "center 40%" }}
      />

      {/* Lesbarhet-gradient: bare bunn, så fjellet får leve i øvre halvdel */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/40 to-transparent"
      />

      {/* Nordlys-shimmer, subtil, konsentrert øverst til høyre */}
      <AuroraBackground intensity="subtle" overlay />

      <Container className="relative z-10 py-24 md:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-green">
            Rekruttering · HR · Kompetanse
          </p>

          <h1
            id="hero-heading"
            className="mt-5 font-display font-extrabold tracking-tight text-white"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              lineHeight: 1.05,
            }}
          >
            Rekruttering, HR og sikkerhetskurs
            <br />
            for bygg og elektro
          </h1>

          {/* Merkevarelinje: North HR-tjenester + Rekrutteringsbistand */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
              North{" "}
              <span className="text-teal-accent">
                HR-tjenester
              </span>
            </span>
            <span className="text-white/30 text-xs" aria-hidden>·</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-green">
              Rekrutteringsbistand
            </span>
          </div>

          <p className="mx-auto mt-5 max-w-xl text-base font-medium text-green/90 md:text-lg">
            Vi bygger mennesker som bygger bransjen.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-white/75 md:text-lg">
            Spesialister innen rekruttering, HR-tjenester og godkjente sikkerhetskurs. Tett
            oppfølging siden 2015.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/vare-tjenester/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-navy-dark shadow-lg shadow-green/25 transition hover:bg-green-dark hover:shadow-green/40"
            >
              Se våre tjenester
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href={BUSINESS.salesPhoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Ring {BUSINESS.salesPhoneDisplay}
            </a>
          </div>

          <p className="mt-6 text-sm text-white/70">
            Er du jobbsøker?{" "}
            <Link
              href="/rekruttering/"
              className="font-semibold text-white underline decoration-green decoration-2 underline-offset-4 hover:text-green"
            >
              Se rekrutteringssiden
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
