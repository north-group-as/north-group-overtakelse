import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import LogoNorthGroup from "@/components/ui/LogoNorthGroup";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { team } from "@/lib/team";

interface KristofferHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  primaryCta?: { label: string; href: string };
  serviceBrand?: "hr" | "rekruttering";
}

function findKristoffer() {
  return team.find((m) => m.name === "Kristoffer Holand");
}

export default function KristofferHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  primaryCta,
  serviceBrand,
}: KristofferHeroProps) {
  const k = findKristoffer();
  const portrait = k?.image ?? "/images/team/kristoffer-holand.webp";
  const email = k?.email ?? "kristoffer@northpersonnel.no";
  const phone = k?.phone ?? "+47 928 16 581";
  const phoneHref = k?.phoneHref ?? "tel:+4792816581";

  return (
    <section
      aria-labelledby="kristoffer-hero-heading"
      className="relative isolate overflow-hidden bg-navy-dark text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-dark to-navy"
      />
      <SectionAtmosphere variant="dark" />

      <Container className="relative z-10 py-20 lg:py-28">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Brodsmuler" className="mb-8 text-[12px] text-white/60">
            <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
              {breadcrumbs.map((b, i) => (
                <li key={`${b.label}-${i}`} className="flex items-center gap-1.5">
                  {b.href ? (
                    <Link
                      href={b.href}
                      className="-mx-2 inline-flex min-h-11 min-w-11 items-center rounded px-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
                    >
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{b.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 ? (
                    <span aria-hidden className="text-white/30">/</span>
                  ) : null}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-7">
            {serviceBrand ? (
              <LogoNorthGroup
                brand={serviceBrand}
                tone="onDark"
                width={serviceBrand === "rekruttering" ? 190 : 150}
                ariaLabel={serviceBrand === "hr" ? "North HR" : "North Rekruttering"}
                className="mb-8"
              />
            ) : null}
            {eyebrow && (
              <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-green">
                {eyebrow}
              </p>
            )}
            <h1
              id="kristoffer-hero-heading"
              className="mt-5 font-display font-extrabold tracking-tight text-white"
              style={{
                fontSize: "clamp(2rem, 4.5vw + 1rem, 3.5rem)",
                lineHeight: 1.08,
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/80">
                {subtitle}
              </p>
            )}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-navy-dark shadow-lg shadow-green/25 transition hover:bg-green-dark"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Ring Kristoffer på {phone}
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4" aria-hidden />
                {email}
              </a>
            </div>

            {primaryCta ? (
              <div className="mt-6">
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {primaryCta.label}
                </Link>
              </div>
            ) : null}
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-5">
            <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-2xl bg-white/5 shadow-2xl shadow-navy-dark/40">
              <Image
                src={portrait}
                alt={`Portrett av ${k?.name ?? "Kristoffer Holand"}`}
                fill
                sizes="(min-width: 1024px) 400px, 80vw"
                priority
                className="object-cover"
                style={{ objectPosition: k?.imagePosition ?? "40% 15%" }}
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-dark/80 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-lg font-extrabold text-white leading-tight">
                  {k?.name ?? "Kristoffer Holand"}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-green">
                  {k?.role ?? "Gründer og leder"}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
