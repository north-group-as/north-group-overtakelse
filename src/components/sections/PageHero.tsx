import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import LogoNorthGroup from "@/components/ui/LogoNorthGroup";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { BUSINESS } from "@/lib/business-data";

interface Crumb {
  label: string;
  href?: string;
}

interface BaseProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  children?: React.ReactNode;
  serviceBrand?: "hr" | "rekruttering";
  /**
   * HTML-element for hero-tittelen. Default "h1" bevarer eksisterende atferd.
   * Bruk "span" på sider der selve artikkel-body har en lengre H1
   * (f.eks. bloggposter), slik at siden bare har én semantisk H1.
   */
  titleAs?: "h1" | "h2" | "span";
}

interface FlatProps extends BaseProps {
  variant?: "flat";
  align?: "left" | "center";
}

interface ImageProps extends BaseProps {
  variant: "image";
  image: string;
  imageAlt?: string;
  imagePosition?: string;
}

interface SplitProps extends BaseProps {
  variant: "split";
  image: string;
  imageAlt?: string;
  imagePosition?: string;
}

type PageHeroProps = FlatProps | ImageProps | SplitProps;

/**
 * Tre hero-varianter, portert fra North Installasjon:
 *
 * flat   – solid bg-navy-dark, pt-32 for navbar-klaring. Til listing-sider.
 * image  – 60vh full-bleed foto med gradient-overlay, innhold i bunnen.
 * split  – navy-dark bakgrunn, tekst venstre + avrundet bilde høyre.
 */
export default function PageHero(props: PageHeroProps) {
  const { eyebrow, title, subtitle, breadcrumbs, children, titleAs = "h1" } = props;
  const variant = props.variant ?? "flat";
  const serviceLogo = props.serviceBrand ? (
    <LogoNorthGroup
      brand={props.serviceBrand}
      tone="onDark"
      width={props.serviceBrand === "rekruttering" ? 190 : 150}
      ariaLabel={props.serviceBrand === "hr" ? "North HR" : "North Rekruttering"}
      className="mb-8"
    />
  ) : null;
  const TitleTag = titleAs;
  const titleClassName = "text-3xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight mb-4 block";

  /* ── Flat ─────────────────────────────────────────────── */
  if (variant === "flat") {
    const align = (props as FlatProps).align ?? "left";
    return (
      <section aria-label="Sideintro" className="relative isolate overflow-hidden bg-navy-dark pt-32 pb-16 lg:pb-20">
        <SectionAtmosphere variant="dark" pattern="orbs-lines" intensity="normal" />
        <div
          className={`relative max-w-7xl mx-auto px-6 lg:px-10 ${
            align === "center" ? "text-center" : ""
          }`}
        >
          <Breadcrumbs crumbs={breadcrumbs} />
          {serviceLogo}
          {eyebrow ? (
            <p className="text-green text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              {eyebrow}
            </p>
          ) : null}
          <TitleTag className={titleClassName}>{title}</TitleTag>
          {subtitle ? (
            <p
              className={`text-white/60 max-w-lg text-lg leading-relaxed ${
                align === "center" ? "mx-auto" : ""
              }`}
            >
              {subtitle}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </section>
    );
  }

  /* ── Image (60vh) ─────────────────────────────────────── */
  if (variant === "image") {
    const { image, imageAlt = "", imagePosition = "center 40%" } = props as ImageProps;
    return (
      <section
        aria-label="Sideintro"
        className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden"
      >
        <Image
          src={image}
          alt={imageAlt}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: imagePosition }}
          priority
          sizes="100vw"
          quality={85}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-navy-dark/20"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 w-full">
          <Breadcrumbs crumbs={breadcrumbs} />
          {serviceLogo}
          {eyebrow ? (
            <p className="text-green text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              {eyebrow}
            </p>
          ) : null}
          <TitleTag className={titleClassName}>{title}</TitleTag>
          {subtitle ? (
            <p className="text-white/60 max-w-lg text-lg leading-relaxed">
              {subtitle}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </section>
    );
  }

  /* ── Split (tekst + avrundet bilde) ───────────────────── */
  const { image, imageAlt = "", imagePosition = "center" } = props as SplitProps;
  return (
    <section aria-label="Sideintro" className="relative isolate overflow-hidden bg-navy-dark">
      <SectionAtmosphere variant="dark" pattern="orbs" intensity="normal" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-36 lg:pb-28">
        <Breadcrumbs crumbs={breadcrumbs} />
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            {serviceLogo}
            {eyebrow ? (
              <p className="text-green text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                {eyebrow}
              </p>
            ) : null}
            <TitleTag className={titleClassName}>{title}</TitleTag>
            {subtitle ? (
              <p className="text-white/60 max-w-lg text-lg leading-relaxed">
                {subtitle}
              </p>
            ) : null}
            {children ? <div className="mt-8">{children}</div> : null}
          </div>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-green/10 blur-2xl"
            />
            <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full overflow-hidden rounded-xl">
              <Image
                src={image}
                alt={imageAlt}
                width={800}
                height={640}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: imagePosition }}
                priority
                sizes="(max-width: 1024px) 100vw, 640px"
                quality={85}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Breadcrumbs({ crumbs }: { crumbs?: Crumb[] }) {
  if (!crumbs || crumbs.length === 0) return null;

  const breadcrumbJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${BUSINESS.siteUrl}${c.href}` } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <nav
        aria-label="Brødsmuler"
        className="mb-6 flex flex-wrap items-center gap-x-1 gap-y-2 text-xs font-medium text-white/60"
      >
        {crumbs.map((c, i) => (
          <span key={i} className="inline-flex items-center gap-1">
            {c.href ? (
              <Link
                href={c.href}
                className="-mx-2 inline-flex min-h-11 min-w-11 items-center rounded px-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
              >
                {c.label}
              </Link>
            ) : (
              <span className="text-white/70">{c.label}</span>
            )}
            {i < crumbs.length - 1 ? (
              <ChevronRight className="h-3 w-3 opacity-40" aria-hidden />
            ) : null}
          </span>
        ))}
      </nav>
    </>
  );
}
