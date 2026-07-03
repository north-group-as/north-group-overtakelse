import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import KristofferHero from "@/components/sections/KristofferHero";
import ContactForm from "@/components/sections/ContactForm";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { BUSINESS } from "@/lib/business-data";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "Kontakt oss – ring 928 16 581 eller send melding",
  description:
    "Ring 928 16 581, send e-post til post@northgroup.no eller kom innom Frydenbergveien 46b i Oslo. Vi svarer innen 24 timer.",
  alternates: { canonical: "/kontakt/" },
  openGraph: {
    title: "Kontakt oss – ring 928 16 581 eller send melding",
    description:
      "Ring 928 16 581, send e-post til post@northgroup.no eller kom innom Frydenbergveien 46b i Oslo. Vi svarer innen 24 timer.",
    url: "/kontakt/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
    title: "Kontakt oss – ring 928 16 581 eller send melding",
    description:
      "Ring 928 16 581, send e-post til post@northgroup.no eller kom innom Frydenbergveien 46b i Oslo. Vi svarer innen 24 timer.",
  },
};

const QUICK_FACTS = [
  {
    icon: Phone,
    label: "Ring oss",
    value: BUSINESS.phoneDisplay,
    href: BUSINESS.phoneHref,
  },
  {
    icon: Mail,
    label: "Send e-post",
    value: BUSINESS.email,
    href: BUSINESS.emailHref,
  },
  {
    icon: MapPin,
    label: "Besøksadresse",
    value: `${BUSINESS.address.street}, ${BUSINESS.address.postalCode} ${BUSINESS.address.city}`,
    href: undefined,
  },
  {
    icon: Clock,
    label: "Åpningstider",
    value: "Mandag–fredag, 08–17",
    href: undefined,
  },
] as const;

export default function KontaktPage() {
  const sortedTeam = [...team].sort((a, b) => a.order - b.order);

  return (
    <>
      <KristofferHero
        eyebrow="Kontakt"
        title="Trenger du HR-hjelp eller skal du finne folk? Snakk med Kristoffer."
        subtitle="Rekruttering, HR eller kurs. Ring eller send en e-post, så hører du fra oss innen 24 timer."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Kontakt" },
        ]}
      />

      <section
        aria-label="Kontaktinformasjon og skjema"
        className="bg-white py-24 lg:py-32"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5 flex min-w-0 flex-col gap-4">
              {QUICK_FACTS.map((row) => {
                const Icon = row.icon;
                const inner = (
                  <div className="flex items-start gap-4 rounded-2xl bg-navy-dark px-6 py-5 text-white transition-colors hover:bg-navy">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green/20">
                      <Icon className="h-5 w-5 text-green" aria-hidden />
                    </span>
                    <span className="flex flex-1 flex-col min-w-0">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                        {row.label}
                      </span>
                      <span className="font-display text-lg sm:text-xl font-extrabold text-white break-words">
                        {row.value}
                      </span>
                    </span>
                  </div>
                );
                return row.href ? (
                  <a key={row.label} href={row.href} className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={row.label}>{inner}</div>
                );
              })}

              <p className="mt-2 text-sm leading-relaxed text-navy-dark/65 font-light">
                Vi sitter i Frydenbergveien 46b på Hasle, like ved Ring 3. Stikk gjerne innom en
                kaffe etter avtale.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <ContactForm
                title="Eller send oss en melding"
                description="Vi tilpasser tilbudet til din bedrift. Fyll ut, så hører du fra oss raskt."
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      <section
        aria-label="Direkte kontakt med teamet"
        className="bg-gray-50 py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Direkte til teamet
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl">
              Vet du allerede hvem du
              <br />
              <span className="text-navy-dark/55">trenger å snakke med?</span>
            </h2>
          </FadeIn>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sortedTeam.map((m, i) => (
              <FadeIn as="li" className="h-full rounded-2xl border border-navy-dark/10 bg-white p-6 transition hover:border-green/40 hover:shadow-lg hover:shadow-navy-dark/5" key={m.name} delay={i * 0.04}>
                  <p className="font-display text-lg font-extrabold text-navy-dark leading-tight">
                    {m.name}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-dark">
                    {m.role}
                  </p>
                  <div className="mt-5 flex flex-col gap-2 text-sm text-navy-dark/70">
                    {m.phoneHref && m.phone ? (
                      <a
                        href={m.phoneHref}
                        className="inline-flex items-center gap-2 hover:text-green-dark"
                      >
                        <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden />
                        <span>{m.phone}</span>
                      </a>
                    ) : null}
                    {m.email ? (
                      <a
                        href={`mailto:${m.email}`}
                        className="inline-flex items-center gap-2 truncate hover:text-green-dark"
                      >
                        <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden />
                        <span className="truncate">{m.email}</span>
                      </a>
                    ) : null}
                  </div>
                
              </FadeIn>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
