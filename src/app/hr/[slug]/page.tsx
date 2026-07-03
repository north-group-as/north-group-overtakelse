import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Mail, Phone } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { BUSINESS } from "@/lib/business-data";
import { getHrServiceGroupBySlug, hrServiceGroups } from "@/lib/hr-service-groups";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return hrServiceGroups.map((group) => ({ slug: group.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const group = getHrServiceGroupBySlug(slug);

  if (!group) {
    return { title: "HR-tjeneste ikke funnet | North Group" };
  }

  const title = `${group.title} | HR-tjenester | North Group`;
  const description = `${group.summary} Snakk med Kristoffer om en konkret HR-plan for bedriften.`;

  return {
    title,
    description,
    alternates: { canonical: `/hr/${group.slug}/` },
    openGraph: {
      title,
      description,
      url: `/hr/${group.slug}/`,
      siteName: BUSINESS.siteName,
      locale: "nb_NO",
      type: "website",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function HrServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const group = getHrServiceGroupBySlug(slug);

  if (!group) {
    notFound();
  }

  const GroupIcon = group.icon;

  return (
    <>
      <PageHero
        eyebrow="HR-tjeneste"
        title={group.title}
        subtitle={group.summary}
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "HR", href: "/hr/" },
          { label: group.title },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-navy-dark shadow-lg shadow-green/25 transition hover:bg-green-dark"
          >
            Snakk med Kristoffer
          </Link>
          <Link
            href="/hr/#hr-tjenester"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Tilbake til HR-tjenester
          </Link>
        </div>
      </PageHero>

      <section aria-labelledby="hr-service-detail-heading" className="relative isolate bg-white py-24 lg:py-32">
        <SectionAtmosphere variant="light" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-light">
                <GroupIcon className="h-7 w-7 text-green-dark" aria-hidden />
              </div>
              <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
                Hva vi tar ansvar for
              </p>
              <h2
                id="hr-service-detail-heading"
                className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]"
              >
                Konkret HR-støtte.
                <br />
                <span className="text-navy-dark/55">Tilpasset saken.</span>
              </h2>
              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-navy-dark/65">
                {group.intro} Du får en tydelig rådgiver, konkret dokumentasjon og en prosess
                som passer bedriftens størrelse og risiko.
              </p>
            </FadeIn>

            <div className="lg:col-span-7">
              <div className="grid gap-4">
                {group.items.map((item, i) => {
                  const ItemIcon = item.icon;
                  return (
                    <FadeIn key={item.name} delay={i * 0.04}>
                      <article className="flex items-start gap-4 rounded-2xl border border-navy-dark/10 bg-gray-50 p-6">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-light">
                          <ItemIcon className="h-5 w-5 text-green-dark" aria-hidden />
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-extrabold text-navy-dark">
                            {item.name}
                          </h3>
                          <p className="mt-2 text-sm font-light leading-relaxed text-navy-dark/65">
                            {item.body}
                          </p>
                        </div>
                      </article>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="kontakt" aria-label="Kontakt om HR-tjeneste" className="relative isolate bg-gray-50 py-24 lg:py-32">
        <SectionAtmosphere variant="muted" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
                Kontaktinfo
              </p>
              <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]">
                Snakk direkte
                <br />
                <span className="text-navy-dark/55">med Kristoffer.</span>
              </h2>
              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-navy-dark/65">
                Send en kort beskrivelse av saken, så tar vi kontakt med forslag til neste steg.
              </p>

              <div className="mt-10 grid gap-3">
                <a
                  href={BUSINESS.kristofferPhoneHref}
                  className="flex items-center gap-4 rounded-xl bg-navy-dark px-5 py-4 text-white transition hover:bg-navy"
                >
                  <Phone className="h-5 w-5 shrink-0 text-green" aria-hidden />
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                      Telefon
                    </span>
                    <span className="font-display text-lg font-bold">
                      {BUSINESS.kristofferPhoneDisplay}
                    </span>
                  </span>
                </a>
                <a
                  href={BUSINESS.kristofferEmailHref}
                  className="flex items-center gap-4 rounded-xl bg-navy-dark px-5 py-4 text-white transition hover:bg-navy"
                >
                  <Mail className="h-5 w-5 shrink-0 text-green" aria-hidden />
                  <span className="min-w-0">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                      E-post
                    </span>
                    <span className="block truncate font-display text-lg font-bold">
                      {BUSINESS.kristofferEmail}
                    </span>
                  </span>
                </a>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-navy-dark/70">
                {["Svar innen 24 timer", "Uforpliktende første vurdering", "Diskret håndtering av personalsaker"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-dark" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <ContactForm
                title={`Kontakt oss om ${group.title.toLowerCase()}`}
                description="Fyll ut skjemaet, så tar vi kontakt og avklarer hva dere trenger hjelp med."
                defaultSubject={group.contactSubject}
                className="bg-white shadow-sm shadow-navy-dark/5"
              />
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
