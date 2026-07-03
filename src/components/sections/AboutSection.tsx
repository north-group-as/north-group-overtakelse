import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import NumberTicker from "@/components/ui/NumberTicker";
import SectionSurface from "@/components/ui/SectionSurface";

export default function AboutSection() {
  return (
    <SectionSurface
      id="om-oss"
      aria-labelledby="about-heading"
      tone="muted"
      atmosphere="muted"
      pattern="orbs-lines"
      intensity="quiet"
      className="py-24 lg:py-32"
    >
      <Container>
        <div className="grid min-w-0 gap-14 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="flex flex-col lg:col-span-5">
            <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Hvem vi er
            </p>
            <h2
              id="about-heading"
              className="font-display font-extrabold tracking-tight text-navy-dark"
              style={{ fontSize: "clamp(1.875rem, 3.5vw + 1rem, 2.75rem)", lineHeight: 1.05 }}
            >
              Vi finner folkene
              <br />
              <span className="text-navy-dark/55">som finner løsningene.</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-navy-dark/70 font-light max-w-xl">
              North ble grunnlagt i 2015 med mål om å bistå bedrifter med å finne rett person til rett tid.
              Gjennom kvalitetssikret kompetanse og bredt kontaktnettverk skreddersyr vi personalløsninger,
              kurstjenester og annen HR-støtte.
            </p>

            <p className="mt-4 text-base leading-relaxed text-navy-dark/55 font-light max-w-xl">
              Våre kunder velger oss fordi vi er flinke med folk, og fordi vi legger stor vekt på tett
              og personlig oppfølging av både kunder og medarbeidere.
            </p>

            <div className="mt-10 flex gap-8">
              {[
                { value: 2015, label: "Grunnlagt", grouped: false },
                { value: 8, label: "Spesialister", grouped: true },
                { value: 500, label: "Deltakere kursert", suffix: "+", grouped: true },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-display text-3xl font-extrabold text-navy-dark leading-none sm:text-4xl">
                    <NumberTicker value={s.value} useGrouping={s.grouped} />
                    {s.suffix ? <span className="text-green-dark">{s.suffix}</span> : null}
                  </span>
                  <span className="mt-2 text-xs font-medium text-navy-dark/70">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/om-oss/"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-green-dark hover:text-green transition-colors"
            >
              Les mer om oss
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </FadeIn>

          <FadeIn delay={0.15} className="flex min-w-0 flex-col gap-5 lg:col-span-7">
            <div className="relative aspect-[4/3] w-full max-w-full overflow-hidden rounded-2xl sm:aspect-[16/10] lg:aspect-[4/3]">
              <Image
                src="/images/team/kristoffer-holand.webp"
                alt="Portrett av Kristoffer Holand, gründer av North Group"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-[75%_15%] lg:object-[40%_15%]"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-dark/70 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-lg font-extrabold text-white leading-tight">
                  Kristoffer Holand
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-green">
                  Gründer og leder
                </p>
              </div>
            </div>

            <div className="w-full max-w-full overflow-hidden rounded-2xl bg-navy-dark p-6 text-white sm:p-8 lg:p-10">
              <p className="font-display text-lg font-semibold leading-snug sm:text-xl lg:text-2xl">
                «Direkte, løsningsorientert og trygg i krevende situasjoner. Vi står i
                vanskelige prosesser samtidig som vi ivaretar mennesker på en profesjonell
                måte.»
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-green">
                Kristoffer Holand
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </SectionSurface>
  );
}
