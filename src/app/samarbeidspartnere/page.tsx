import type { Metadata } from "next";
import { Building2, Check, Handshake } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Samarbeidspartnere",
  description:
    "North Group samarbeider med hundrevis av norske bedrifter innen bygg, anlegg, elektro og industri. Les om våre samarbeidsformer og bransjer vi dekker.",
  alternates: { canonical: "/samarbeidspartnere/" },
  openGraph: {
    title: "Samarbeidspartnere",
    description:
      "North Group samarbeider med hundrevis av norske bedrifter innen bygg, anlegg, elektro og industri.",
    url: "/samarbeidspartnere/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samarbeidspartnere",
    description:
      "North Group samarbeider med hundrevis av norske bedrifter innen bygg, anlegg, elektro og industri.",
    images: ["/opengraph-image"],
  },
};

const INDUSTRIES = [
  {
    icon: Building2,
    name: "Elektroinstallasjon",
    description: "Fra små elektrobedrifter til store landsdekkende aktører. Vi leverer montører, prosjektledere og spesialister.",
  },
  {
    icon: Building2,
    name: "Rørlegger og VVS",
    description: "Samarbeid med rørleggerbedrifter om rekruttering av faglærte rørleggere og prosjektledere.",
  },
  {
    icon: Building2,
    name: "Bygg og anlegg",
    description: "Totalentreprenører og underleverandører innen bolig, næring og infrastrukturutbygging.",
  },
  {
    icon: Building2,
    name: "Industri og produksjon",
    description: "Produksjonsbedrifter som trenger faglært arbeidskraft og HMS-kompetanse.",
  },
  {
    icon: Building2,
    name: "Infrastruktur og energi",
    description: "Aktører innen kraft, samferdsel og infrastruktur som trenger sertifisert kompetanse.",
  },
  {
    icon: Building2,
    name: "Offshore og maritim",
    description: "HMS-personell og operatører til offshore-installasjoner og maritime miljøer.",
  },
];

const PARTNER_TYPES = [
  "Ingeniør- og rådgivningsselskaper",
  "Entreprenører og totalleverandører",
  "Kurs- og kompetansebedrifter",
  "HMS- og arbeidsmiljøkonsulenter",
  "Rekrutteringsbyråer og HR-leverandører",
  "Offentlige arbeidslivstjenester",
];

const TRUST_NUMBERS = [
  { value: "15+", label: "År i bransjen" },
  { value: "100+", label: "Aktive samarbeidspartnere" },
  { value: "500+", label: "Gjennomførte oppdrag" },
  { value: "6", label: "Bransjer vi dekker" },
];

export default function SamarbeidspartnerePage() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow="Samarbeidspartnere"
        title="Sterke relasjoner bygger gode resultater."
        subtitle="North Group har siden 2015 bygget opp et bredt nettverk av samarbeidspartnere i norsk næringsliv. Vi møter bedrifter der de er, med løsninger som faktisk passer."
        image="/images/youtube/kontrakt-signering.webp"
        imageAlt="Kontraktsignering mellom samarbeidspartnere"
        imagePosition="center 40%"
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Om oss", href: "/om-oss/" },
          { label: "Samarbeidspartnere" },
        ]}
      />

      {/* Bransjer vi jobber med */}
      <section
        aria-labelledby="industries-heading"
        className="bg-white py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green-dark mb-5">
              Bransjer
            </p>
            <h2
              id="industries-heading"
              className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl"
            >
              Bransjer vi samarbeider med.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-dark/65 font-light max-w-2xl">
              Vi har erfaring fra et bredt spekter av bransjer hvor HMS og
              kompetanse er kritiske suksessfaktorer. Her er noen av
              hovedsegmentene.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <FadeIn key={industry.name} delay={i * 0.06}>
                  <article className="h-full rounded-2xl border border-navy-dark/10 bg-gray-50 p-8 transition hover:border-green/40 hover:shadow-lg hover:shadow-navy-dark/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-light">
                      <Icon
                        className="h-6 w-6 text-green-dark"
                        aria-hidden
                      />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-extrabold text-navy-dark">
                      {industry.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
                      {industry.description}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Tall og troverdighet */}
      <section
        aria-labelledby="trust-heading"
        className="bg-navy py-24 lg:py-32 text-white"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green mb-5">
              I tall
            </p>
            <h2
              id="trust-heading"
              className="font-display font-extrabold tracking-tight text-white text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl"
            >
              tall som forteller noe.
            </h2>
          </FadeIn>

          <dl className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4 text-center">
            {TRUST_NUMBERS.map((item, i) => (
              <FadeIn
                key={item.label}
                delay={i * 0.08}
                className="flex flex-col items-center"
              >
                <dt className="font-display text-6xl font-extrabold text-green leading-none">
                  {item.value}
                </dt>
                <dd className="mt-3 text-sm font-medium text-white/70">
                  {item.label}
                </dd>
              </FadeIn>
            ))}
          </dl>
        </Container>
      </section>

      {/* Typer samarbeidspartnere */}
      <section
        aria-labelledby="types-heading"
        className="bg-gray-50 py-24 lg:py-32"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <FadeIn className="lg:col-span-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green-dark mb-5">
                Samarbeid
              </p>
              <h2
                id="types-heading"
                className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05]"
              >
                Hvem vi samarbeider med.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-dark/65 font-light">
                Våre samarbeidspartnere inkluderer både direkte kunder (bedrifter
                som trenger kompetanse) og strategiske partnere som kompletterer
                våre tjenester.
              </p>
            </FadeIn>

            <FadeIn className="lg:col-span-7 lg:self-center" delay={0.1}>
              <ul className="space-y-4">
                {PARTNER_TYPES.map((type) => (
                  <li
                    key={type}
                    className="flex items-center gap-3 rounded-xl border border-navy-dark/10 bg-white px-6 py-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-light">
                      <Handshake
                        className="h-4 w-4 text-green-dark"
                        aria-hidden
                      />
                    </div>
                    <span className="text-sm font-medium text-navy-dark">
                      {type}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Verdi-påstander */}
      <section
        aria-labelledby="values-heading"
        className="bg-white py-24 lg:py-32"
      >
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-green-dark mb-5">
              Hvorfor velge oss
            </p>
            <h2
              id="values-heading"
              className="font-display font-extrabold tracking-tight text-navy-dark text-[clamp(1.875rem,3.5vw+1rem,2.75rem)] leading-[1.05] max-w-3xl"
            >
              Hva partnerne våre sier.
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Kompetanse og tilgjengelighet",
                body: "Våre samarbeidspartnere setter pris på vår kompetanse, tilgjengelighet og skreddersydde løsninger. Vi er løsningsorienterte og setter oss raskt inn i den enkelte bedrifts behov.",
              },
              {
                title: "Strukturert prosess",
                body: "Fra kartlegging til oppfølging etter ansettelse: vår prosess er strukturert, grundig og tilpasset hvert oppdrag. Du får en fast kontaktperson som kjenner deg og ditt behov.",
              },
              {
                title: "Lang erfaring",
                body: "Med over 15 år i bransjen har vi oppbygget et kontaktnettverk som dekker hele Norge. Vi kjenner markedet, bransjene og vet hvor de beste kandidatene finnes.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-navy-dark/10 bg-gray-50 p-8">
                  <h3 className="font-display text-xl font-extrabold text-navy-dark">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-navy-dark/65 font-light">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Partnere i tall */}
      <section
        aria-labelledby="companies-heading"
        className="bg-gray-50 py-16 lg:py-20"
      >
        <Container>
          <FadeIn>
            <h2
              id="companies-heading"
              className="font-display text-center font-extrabold tracking-tight text-navy-dark text-2xl"
            >
              Bedrifter i alle størrelser
            </h2>
            <p className="mt-3 text-center text-sm text-navy-dark/65 font-light max-w-xl mx-auto">
              Vi samarbeider med små, mellomstore og store bedrifter over hele Norge.
              Uansett størrelse får du samme høye kvalitet og personlige oppfølging.
            </p>
          </FadeIn>

          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {[
              "Elektrobedrifter",
              "Rørleggerbedrifter",
              "Byggfirmaer",
              "Industriselskaper",
              "Energibedrifter",
              "Offshore-aktører",
            ].map((label, i) => (
              <FadeIn key={label} delay={i * 0.05}>
                <div className="flex items-center gap-2 rounded-full border border-navy-dark/15 bg-white px-5 py-2.5">
                  <Check
                    className="h-4 w-4 text-green-dark"
                    aria-hidden
                  />
                  <span className="text-sm font-medium text-navy-dark">
                    {label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Blir du en av våre samarbeidspartnere?"
        title="La oss snakke om ditt behov."
        description="Kontakt oss for en uforpliktende samtale om hvordan vi kan bidra til din bedrift."
      />
    </>
  );
}
