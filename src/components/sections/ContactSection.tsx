import { Check, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionSurface from "@/components/ui/SectionSurface";
import ContactForm from "@/components/sections/ContactForm";
import { BUSINESS } from "@/lib/business-data";

const CONTACT_ROWS = [
  {
    icon: Phone,
    label: "Ring oss",
    value: BUSINESS.phoneDisplay,
    href: BUSINESS.phoneHref,
  },
  {
    icon: Mail,
    label: "E-post",
    value: BUSINESS.email,
    href: BUSINESS.emailHref,
  },
  {
    icon: MapPin,
    label: "Besøk",
    value: `${BUSINESS.address.street}, ${BUSINESS.address.postalCode} ${BUSINESS.address.city}`,
    href: undefined,
  },
] as const;

const TRUST_ITEMS = [
  "Svar innen 24 timer",
  "Tilpasset hver bedrift",
  "Over 500 elektrikere kursert",
];


export default function ContactSection() {
  return (
    <SectionSurface
      id="kontakt"
      aria-labelledby="contact-heading"
      tone="muted"
      atmosphere="muted"
      pattern="orbs-lines"
      intensity="quiet"
      className="py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="flex flex-col lg:col-span-5">
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Snakk med oss
            </p>
            <h2
              id="contact-heading"
              className="font-display font-extrabold tracking-tight text-navy-dark leading-[1.05]"
              style={{ fontSize: "clamp(1.875rem, 3.5vw + 1rem, 2.75rem)" }}
            >
              Fortell oss hva du
              <br />
              <span className="text-navy-dark/55">trenger. Vi svarer raskt.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-dark/60 font-light max-w-md">
              Rekruttering, HR eller kurs. Vi hører hva du trenger og foreslår en
              konkret plan. Ingen forpliktelser.
            </p>

            <div className="mt-10 flex flex-col gap-3">
              {CONTACT_ROWS.map((row) => {
                const Icon = row.icon;
                const inner = (
                  <div className="flex items-center gap-4 rounded-xl bg-navy-dark px-5 py-4 text-white transition-colors hover:bg-navy">
                    <Icon className="h-5 w-5 shrink-0 text-green" aria-hidden />
                    <span className="flex flex-col min-w-0">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                        {row.label}
                      </span>{" "}
                      <span className="font-display text-lg font-bold text-white truncate">
                        {row.value}
                      </span>
                    </span>
                  </div>
                );
                return row.href ? (
                  <a
                    key={row.label}
                    href={row.href}
                    aria-label={`${row.label} ${row.value}`}
                    className="block"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={row.label}>{inner}</div>
                );
              })}
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-navy-dark/60">
              {TRUST_ITEMS.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-green-dark" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-7">
            <ContactForm
              title="Kontakt oss for pris"
              description="Vi tilpasser de fysiske kursene for hver bedrift. Fyll ut, så tar vi kontakt."
              className="bg-gray-50 shadow-sm shadow-navy-dark/5"
            />
          </FadeIn>
        </div>
      </Container>
    </SectionSurface>
  );
}
