import { Award, Building, Flag, Lightbulb, Sprout, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";

interface Milestone {
  year: string;
  icon: LucideIcon;
  title: string;
  body: string;
}

const MILESTONES: Milestone[] = [
  {
    year: "2015",
    icon: Sprout,
    title: "North Group grunnlagt",
    body: "Kristoffer Holand starter selskapet med en idé: gi små og mellomstore bedrifter en rekrutterings- og HR-partner som faktisk forstår fagene de jobber med.",
  },
  {
    year: "2017",
    icon: Users,
    title: "Første HR-kunder på plass",
    body: "HR-tjenestene tar form som eget tilbud. Lokale håndverks- og elektrobedrifter får sin første eksterne HR-avdeling.",
  },
  {
    year: "2019",
    icon: Award,
    title: "Sikkerhetskurs lanseres",
    body: "FSE, varme arbeider og førstehjelp med hjertestarter (DHLR) blir en del av tilbudet. Fysiske kurs på huset, digitale kurs på nett.",
  },
  {
    year: "2022",
    icon: Lightbulb,
    title: "500+ elektrikere kursert",
    body: "Vi runder en milepæl: over 500 fagarbeidere har gått igjennom våre godkjente sikkerhetskurs.",
  },
  {
    year: "2024",
    icon: Building,
    title: "Eget kontor på Hasle",
    body: "Vi flytter inn i Frydenbergveien 46b. Egen kursavdeling, eget møterom og plass til å vokse videre.",
  },
  {
    year: "I dag",
    icon: Flag,
    title: "En komplett personalplattform",
    body: "Rekruttering, HR-tjenester og godkjente kurs i én pakke. Vi er fortsatt små nok til å være tilgjengelige, og store nok til å levere kvalitet.",
  },
];

export default function TimelineSection() {
  return (
    <section
      aria-labelledby="timeline-heading"
      className="relative isolate overflow-hidden bg-gray-50 py-24 lg:py-32"
    >
      <SectionAtmosphere variant="muted" />
      <Container className="relative">
        <FadeIn className="max-w-3xl mb-16">
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
            Veien så langt
          </p>
          <h2
            id="timeline-heading"
            className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]"
          >
            Fra 2015 til i dag.
            <br />
            <span className="text-navy-dark/55">Et bygg, en milepæl om gangen.</span>
          </h2>
        </FadeIn>

        {/*
          Bevisst unntak fra frontend-design-regelen "max 1px border-left på kort/liste":
          her er border-left selve timeline-spinen som node-markorene henger paa, et
          strukturelt hovedelement og ikke dekorasjon. 1px svekker timeline-effekten. (NG-103)
        */}
        <ol className="relative space-y-10 border-l-2 border-navy-dark/10 pl-8 lg:pl-12">
          {MILESTONES.map((m, i) => {
            const Icon = m.icon;
            return (
              <FadeIn as="li" key={m.year} delay={i * 0.05}>
                <div className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[3.25rem] flex h-12 w-12 items-center justify-center rounded-full border-2 border-navy-dark/10 bg-white shadow-sm lg:-left-[4rem]"
                  >
                    <Icon className="h-5 w-5 text-green-dark" aria-hidden />
                  </span>
                  <div className="rounded-2xl bg-white p-7 transition hover:shadow-lg hover:shadow-navy-dark/5">
                    <p className="font-display text-2xl font-extrabold text-green-dark">
                      {m.year}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-extrabold text-navy-dark leading-tight">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-navy-dark/70 font-light">
                      {m.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
