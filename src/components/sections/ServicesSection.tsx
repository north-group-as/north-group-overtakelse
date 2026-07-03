import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ClipboardCheck, GraduationCap, HardHat } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import SectionSurface from "@/components/ui/SectionSurface";
import { ACCENT_CLASSES, services } from "@/lib/services";

const ICONS = {
  HardHat,
  ClipboardCheck,
  GraduationCap,
};

export default function ServicesSection() {
  return (
    <SectionSurface
      id="tjenester"
      aria-labelledby="services-heading"
      tone="white"
      atmosphere="light"
      pattern="orbs-grid"
      intensity="normal"
      className="py-24 lg:py-32"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            id="services-heading"
            eyebrow="Våre tjenester"
            titleLine1="Tre tjenester."
            titleLine2="Ett mål: riktig kompetanse, til rett tid."
            subtitle="Spesialister innen rekruttering, HR-tjenester og godkjente sikkerhetskurs for bygg- og anleggsbransjen."
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS];
            const accent = ACCENT_CLASSES[service.accent];
            return (
              <FadeIn key={service.slug} delay={i * 0.08} className="h-full">
                <Link
                  href={service.href}
                  className="group flex h-full min-h-[34rem] flex-col overflow-hidden rounded-2xl bg-navy-dark shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-4"
                >
                  <div className="relative h-56 shrink-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      style={{ objectPosition: "center 55%" }}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-navy-dark/45 via-transparent to-transparent"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 text-white sm:p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                      {Icon ? <Icon className="h-6 w-6 text-white" aria-hidden /> : null}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight leading-[1.1] max-w-xs">
                      {service.titleLine1}
                      <br />
                      <span className="text-white/80">{service.titleLine2}</span>
                    </h3>
                    <p className="mt-4 text-sm text-white/75 font-light max-w-xs leading-relaxed">
                      {service.description}
                    </p>
                    <span className={`mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold ${accent.text} group-hover:gap-3 transition-all`}>
                      Les mer
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </SectionSurface>
  );
}
