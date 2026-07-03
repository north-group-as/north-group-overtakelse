import type { Metadata } from "next";
import { Award, Compass, Heart, Target } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import StorySection from "@/components/sections/StorySection";
import ValuesSection from "@/components/sections/ValuesSection";
import TeamSection from "@/components/sections/TeamSection";
import TimelineSection from "@/components/sections/TimelineSection";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import NumberTicker from "@/components/ui/NumberTicker";
import VideoSchemaJsonLd from "@/components/seo/VideoSchemaJsonLd";

const STORY_VIDEO = {
  name: "Slik jobber vi i North Group",
  description:
    "En kort presentasjon av North Group: spesialister innen rekruttering, HR-tjenester og godkjente sikkerhetskurs for bygg- og anleggsbransjen. Grunnlagt 2015, 500+ elektrikere kursert.",
  thumbnailUrl: "/images/intro/samling-ansatte-jakker.webp",
  contentUrl: "/videos/north-group-story-web.mp4",
  uploadDate: "2026-05-15",
  duration: "PT46S",
};

export const metadata: Metadata = {
  title: "Om oss – rekruttering og HR for bygg og anlegg",
  description:
    "North Group ble grunnlagt i 2015 med fokus på å hjelpe organisasjoner med å rekruttere kvalifisert personell. Tett, personlig oppfølging av kunder og medarbeidere.",
  alternates: { canonical: "/om-oss/" },
  openGraph: {
    title: "Om oss – rekruttering og HR for bygg og anlegg",
    description:
      "North Group ble grunnlagt i 2015 med fokus på å hjelpe organisasjoner med å rekruttere kvalifisert personell. Tett, personlig oppfølging av kunder og medarbeidere.",
    url: "/om-oss/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
    title: "Om oss – rekruttering og HR for bygg og anlegg",
    description:
      "North Group ble grunnlagt i 2015 med fokus på å hjelpe organisasjoner med å rekruttere kvalifisert personell. Tett, personlig oppfølging av kunder og medarbeidere.",
  },
};

const STORY_PILLARS = [
  {
    icon: Target,
    title: "Tett oppfølging",
    body: "Vi setter av tid til hver enkelt kunde og medarbeider. Du blir sett, hørt og fulgt opp gjennom hele prosessen.",
  },
  {
    icon: Award,
    title: "Faglig dybde",
    body: "Spesialiserte rådgivere innen rekruttering, HR og kurs. Vi kjenner bransjen og snakker språket til både kunder og kandidater.",
  },
  {
    icon: Compass,
    title: "Tilpasset hvert oppdrag",
    body: "Vi tilpasser oss bedriften, ikke omvendt. Hvert oppdrag bygges rundt det som faktisk skal løses.",
  },
  {
    icon: Heart,
    title: "Mennesker først",
    body: "Bak hvert oppdrag er det mennesker. Vi behandler kandidater og kunder med samme respekt og åpenhet.",
  },
];

export default function OmOssPage() {
  return (
    <>
      <PageHero
        variant="image"
        image="/images/about/om-oss-banner.jpg"
        imageAlt="To fjellklatrere på en høy fjellformasjon ved norsk kyst"
        imagePosition="center 38%"
        eyebrow="Om North Group"
        title="Vi finner folkene som finner løsningene."
        subtitle="Etablert i 2015 med ett mål: hjelpe norske bedrifter å sikre rett kompetanse til rett tid. I dag bistår vi små og mellomstore bedrifter med rekruttering, HR-tjenester og godkjente sikkerhetskurs."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Om oss" },
        ]}
      />

      <section
        id="historie"
        aria-labelledby="story-heading"
        className="bg-white py-24 lg:py-32"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <FadeIn className="lg:col-span-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
                Vår historie
              </p>
              <h2
                id="story-heading"
                className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]"
              >
                Bygget for bedrifter
                <br />
                <span className="text-navy-dark/55">som vil ha det enkelt.</span>
              </h2>

              <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl bg-navy-dark/[0.04] p-6">
                {[
                  { value: 2015, label: "Grunnlagt", grouped: false },
                  { value: 8, label: "Spesialister", grouped: true },
                  { value: 500, label: "Deltakere", suffix: "+", grouped: true },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span className="font-display text-2xl sm:text-3xl font-extrabold text-navy-dark leading-none">
                      <NumberTicker value={s.value} useGrouping={s.grouped} />
                      {s.suffix ? <span className="text-green-dark">{s.suffix}</span> : null}
                    </span>
                    <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-dark/70">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <div className="space-y-6 text-base leading-relaxed text-navy-dark/75 font-light">
                <p>
                  Kristoffer Holand startet ikke karrieren som HR-direktør. Han startet som
                  elektriker. Det er fortsatt der grunntonen kommer fra: en jordnær forståelse av
                  hva en ledig stilling, et sykefravær eller en oppsigelse faktisk betyr for et
                  arbeidslag som skal levere neste uke.
                </p>
                <p>
                  I 2015 grunnla han North Group fordi små og mellomstore bedrifter ikke ble
                  prioritert hos de store rekrutteringshusene. I dag har selskapet vokst til en
                  komplett personalplattform for bygg- og anleggsbransjen, med rekruttering, HR-
                  tjenester og godkjente sikkerhetskurs under samme tak.
                </p>
                <p>
                  Sammen med salgssjef Ivo Myhre og avdelingsleder Eirik Sælør bistår teamet i dag
                  bedrifter over hele landet. Vi er fortsatt små nok til å være tilgjengelige, og
                  fagspesifikke nok til å snakke samme språk som kundene.
                </p>
                <div className="mt-8 rounded-2xl bg-navy-dark p-8 text-white">
                  <p className="font-display text-xl font-semibold leading-snug lg:text-2xl">
                    «Hos oss blir du sett og ivaretatt. Du kan stole på at vi gjør vårt ytterste
                    for at du skal bli fornøyd.»
                  </p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-green">
                    Kristoffer Holand, gründer
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section
        aria-label="Slik jobber vi"
        className="bg-gray-50 py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-navy-dark mb-5">
              Slik jobber vi
            </p>
            <h2 className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl">
              Fire prinsipper
              <br />
              <span className="text-navy-dark/55">som styrer hverdagen vår.</span>
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {STORY_PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeIn key={p.title} delay={i * 0.06}>
                  <article className="h-full rounded-2xl border border-navy-dark/10 bg-white p-8 transition hover:border-green/40 hover:shadow-lg hover:shadow-navy-dark/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-light">
                      <Icon className="h-6 w-6 text-green-dark" aria-hidden />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-extrabold text-navy-dark">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
                      {p.body}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <TimelineSection />

      <VideoSchemaJsonLd video={STORY_VIDEO} />
      <StorySection
        videoSrc={STORY_VIDEO.contentUrl}
        posterSrc={STORY_VIDEO.thumbnailUrl}
        bgClass="bg-white"
      />

      <ValuesSection />
      <TeamSection />

      <CtaBand
        eyebrow="La oss snakke sammen"
        title="Vi tar gjerne en uforpliktende prat."
        description="Fortell oss kort hva du trenger, så foreslår vi en konkret plan. Ingen forpliktelser, bare en ærlig vurdering."
      />
    </>
  );
}
