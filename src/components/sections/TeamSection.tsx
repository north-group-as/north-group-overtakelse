import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionSurface from "@/components/ui/SectionSurface";
import { team } from "@/lib/team";

export default function TeamSection() {
  const members = [...team].sort((a, b) => a.order - b.order);
  const leadership = members.slice(0, 3);
  const rest = members.slice(3);

  return (
    <SectionSurface
      id="team"
      aria-labelledby="team-heading"
      tone="white"
      atmosphere="warm"
      pattern="orbs-lines"
      intensity="quiet"
      className="py-24 lg:py-32"
    >
      <Container>
        <FadeIn>
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
            Menneskene bak North
          </p>
          <h2
            id="team-heading"
            className="font-display font-extrabold tracking-tight text-navy-dark leading-[1.05] max-w-3xl"
            style={{ fontSize: "clamp(1.875rem, 3.5vw + 1rem, 2.75rem)" }}
          >
            Profesjonelle mennesker
            <br />
            <span className="text-navy-dark/70">med lidenskap for mennesker.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy-dark/75 font-light max-w-2xl">
            Du får en navngitt kontaktperson fra første samtale, og vi svarer
            normalt innen 24 timer. Her er teamet som gjør jobben.
          </p>
        </FadeIn>

        {/* Ledelse: større kort */}
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {leadership.map((m, i) => (
            <FadeIn as="li" className="group" key={m.name} delay={i * 0.06}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100">
                  {m.image ? (
                    <Image
                      src={m.image}
                      alt={`Portrett av ${m.name}`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      style={{ objectPosition: m.imagePosition ?? "center 20%" }}
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green/20 to-navy-dark/60"
                      aria-hidden
                    >
                      <span className="font-display text-6xl font-extrabold text-white/80">
                        {m.initials ?? m.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-5">
                  <h3 className="font-display text-xl font-extrabold text-navy-dark leading-tight">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-navy-dark">
                    {m.role}
                  </p>
                  <div className="mt-4 flex flex-col gap-1.5 text-sm text-navy-dark/60">
                    {m.phoneHref && m.phone ? (
                      <a href={m.phoneHref} className="inline-flex items-center gap-2 hover:text-green-dark transition-colors">
                        <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden />
                        <span>{m.phone}</span>
                      </a>
                    ) : null}
                    {m.email ? (
                      <a href={`mailto:${m.email}`} className="inline-flex items-center gap-2 truncate hover:text-green-dark transition-colors">
                        <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden />
                        <span className="truncate">{m.email}</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              
            </FadeIn>
          ))}
        </ul>

        {/* Resten: kompakte rader */}
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {rest.map((m, i) => (
            <FadeIn as="li" className="flex items-center gap-4 rounded-xl bg-white p-4" key={m.name} delay={0.18 + i * 0.04}>
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-gray-200">
                  {m.image ? (
                    <Image
                      src={m.image}
                      alt={`Portrett av ${m.name}`}
                      fill
                      sizes="56px"
                      className="object-cover"
                      style={{ objectPosition: m.imagePosition ?? "center 20%" }}
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green/25 to-navy-dark/50"
                      aria-hidden
                    >
                      <span className="font-display text-sm font-extrabold text-white/85">
                        {m.initials ?? m.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="font-display text-sm font-extrabold text-navy-dark leading-tight truncate">
                    {m.name}
                  </p>
                  <p className="mt-0.5 text-[11px] font-medium text-navy-dark/70 truncate">
                    {m.role}
                  </p>
                </div>
              
            </FadeIn>
          ))}
        </ul>
      </Container>
    </SectionSurface>
  );
}
