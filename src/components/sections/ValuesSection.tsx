import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionSurface from "@/components/ui/SectionSurface";
import { values } from "@/lib/values";

export default function ValuesSection() {
  return (
    <SectionSurface
      id="verdier"
      aria-labelledby="values-heading"
      tone="dark"
      atmosphere="dark"
      pattern="orbs"
      intensity="normal"
      className="py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <FadeIn className="lg:col-span-4">
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green mb-5">
              Våre verdier
            </p>
            <h2
              id="values-heading"
              className="font-display font-extrabold tracking-tight text-white leading-[1.05]"
              style={{ fontSize: "clamp(1.875rem, 3.5vw + 1rem, 2.75rem)" }}
            >
              Seks verdier vi
              <br />
              <span className="text-white/60">står for i praksis.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/60 font-light max-w-sm">
              Mer enn plakater i gangen. Verdiene former hvordan vi jobber med kunder, kandidater og hverandre.
            </p>
          </FadeIn>

          <div className="lg:col-span-8">
            <dl className="grid sm:grid-cols-2">
              {values.map((v, i) => (
                <FadeIn
                  key={v.name}
                  delay={i * 0.02}
                  className="flex flex-col p-8 lg:p-10 h-full border-white/10 border-b last:border-b-0 sm:border-r [&:nth-child(2n)]:sm:border-r-0 [&:nth-last-child(-n+2)]:sm:border-b-0"
                >
                  <dt className="flex items-baseline gap-3">
                    <span className="font-display text-3xl font-extrabold text-green/50 leading-none">
                      {String(v.order).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg font-extrabold text-white">
                      {v.name}
                    </span>
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed text-white/70 font-light">
                    {v.description}
                  </dd>
                </FadeIn>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </SectionSurface>
  );
}
