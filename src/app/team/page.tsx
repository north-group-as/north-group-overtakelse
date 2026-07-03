import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { team, type TeamMember } from "@/lib/team";

export const metadata: Metadata = {
  title: "Møt teamet – HR-rådgivere og rekrutterere",
  description:
    "Bli kjent med menneskene bak North Group. Vi er et dedikert team av HR-rådgivere, rekrutterere og administrative spesialister som setter mennesker først.",
  alternates: { canonical: "/team/" },
  openGraph: {
    title: "Møt teamet – HR-rådgivere og rekrutterere",
    description:
      "Bli kjent med menneskene bak North Group. Vi er et dedikert team av HR-rådgivere, rekrutterere og administrative spesialister.",
    url: "/team/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Møt teamet – HR-rådgivere og rekrutterere",
    description:
      "Bli kjent med menneskene bak North Group.",
    images: ["/opengraph-image"],
  },
};

function MemberCard({ member, featured = false }: { member: TeamMember; featured?: boolean }) {
  return (
    <article
      className={`group flex ${featured ? "flex-col" : "items-start gap-5"}`}
    >
      <div
        className={`relative overflow-hidden rounded-2xl bg-gray-100 ${
          featured ? "aspect-[3/4] w-full" : "h-20 w-20 shrink-0"
        }`}
      >
        {member.image ? (
          <Image
            src={member.image}
            alt={`Portrett av ${member.name}`}
            fill
            sizes={featured ? "(min-width: 768px) 33vw, 100vw" : "80px"}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            style={{ objectPosition: member.imagePosition ?? "center 20%" }}
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green/25 to-navy-dark/50"
            aria-hidden
          >
            <span className="font-display text-2xl font-extrabold text-white/85">
              {member.initials ?? member.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </div>

      <div className={featured ? "mt-5" : "min-w-0 flex-1"}>
        <h3 className="font-display text-lg font-extrabold text-navy-dark leading-tight">
          {member.name}
        </h3>
        <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-green-dark">
          {member.role}
        </p>
        {member.bio && (
          <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
            {member.bio}
          </p>
        )}
        <div className="mt-4 flex flex-col gap-1.5 text-sm text-navy-dark/60">
          {member.phone && member.phoneHref && (
            <a
              href={member.phoneHref}
              className="inline-flex items-center gap-2 hover:text-green-dark transition-colors"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span>{member.phone}</span>
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="inline-flex items-center gap-2 truncate hover:text-green-dark transition-colors"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="truncate">{member.email}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function TeamPage() {
  const sorted = [...team].sort((a, b) => a.order - b.order);
  const leadership = sorted.filter((m) => m.order <= 3);
  const operations = sorted.filter((m) => m.order > 3);

  return (
    <>
      <PageHero
        eyebrow="Menneskene bak North"
        title="Dedikerte spesialister som setter mennesker først."
        subtitle="Vi er et lite, fokusert team med bred erfaring innen rekruttering, HR og administrative tjenester. Alle hos oss har én ting felles: vi brenner for å finne rett person til rett tid."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Om oss", href: "/om-oss/" },
          { label: "Team" },
        ]}
      />

      {/* Ledelse */}
      <section
        id="ledelse"
        aria-labelledby="ledelse-heading"
        className="bg-white py-20 lg:py-28"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green-dark mb-5">
              Ledelse
            </p>
            <h2
              id="ledelse-heading"
              className="font-display font-extrabold tracking-tight text-navy-dark leading-[1.05] max-w-3xl"
              style={{ fontSize: "clamp(1.875rem, 3.5vw + 1rem, 2.75rem)" }}
            >
              Gründere og ledere
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-dark/60 font-light max-w-2xl">
              Kristoffer, Ivo og Eirik utgjør kjernen i North Group. Med bakgrunn fra henholdsvis
              elektrikerfaget, samfunnsøkonomi og operativ ledelse, dekker de tilsammen
              kompetansebredden som kreves for å drive et selskap innen HR og rekruttering.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {leadership.map((m, i) => (
              <FadeIn key={m.name} delay={i * 0.07}>
                <MemberCard member={m} featured />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Operativt */}
      <section
        id="operativt"
        aria-labelledby="operativt-heading"
        className="bg-gray-50 py-20 lg:py-28"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green-dark mb-5">
              Operativt
            </p>
            <h2
              id="operativt-heading"
              className="font-display font-extrabold tracking-tight text-navy-dark leading-[1.05] max-w-3xl"
              style={{ fontSize: "clamp(1.875rem, 3.5vw + 1rem, 2.75rem)" }}
            >
              Drift og økonomi
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-dark/60 font-light max-w-2xl">
              Samy og Katarzyna sikrer at hjulene går rundt. Samy koordinerer driftsoppgaver
              og logistikk, mens Katarzyna holder økonomien i orden – fra fakturering
              og lønn til regnskap og rapportering.
            </p>
          </FadeIn>

          <div className="mt-12 space-y-6">
            {operations.map((m, i) => (
              <FadeIn key={m.name} delay={i * 0.07}>
                <div className="rounded-2xl border border-navy-dark/10 bg-white p-6 lg:p-8">
                  <MemberCard member={m} />
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Blir du nysgjerrig?"
        title="Vi tar gjerne en uforpliktende prat."
        description="Fortell oss kort hva du trenger, så foreslår vi en konkret plan. Ingen forpliktelser, bare en ærlig vurdering."
      />
    </>
  );
}
