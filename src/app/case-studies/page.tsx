import type { Metadata } from "next";
import {
  Building2,
  CheckCircle2,
  Clock,
  Users,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Case-studier",
  description:
    "Vi har hjulpet norske bedrifter med rekruttering, HR og kompetanse. Les om hvordan vi har bidratt til gode resultater for partnere i elektro, bygg og industri.",
  alternates: { canonical: "/case-studies/" },
  openGraph: {
    title: "Case-studier",
    description:
      "Vi har hjulpet norske bedrifter med rekruttering, HR og kompetanse. Les om hvordan vi har bidratt til gode resultater for partnere i elektro, bygg og industri.",
    url: "/case-studies/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case-studier",
    description:
      "Vi har hjulpet norske bedrifter med rekruttering, HR og kompetanse.",
    images: ["/opengraph-image"],
  },
};

const CASE_STUDIES = [
  {
    id: "elektro-prosjekt",
    companyType: "Elektroinstallatør",
    companySize: "15–20 ansatte",
    challenge:
      "En mellomstor elektrobedrift i Oslo-området trengte tre nye montører med Gruppe L-sertifisering på kort tid. En av deres faste montører hadde sagt opp, og et stort rehab-prosjekt krevde ekstra kapasitet.",
    solution:
      "North Group identifiserte kandidater gjennom eget nettverk og aktive databaser. Alle tre ble intervjuet, referansesjekket og presentert innen én uke. Én kandidat hadde nylig fullført relevant videreutdanning og passet perfekt til behovet.",
    results: [
      "Tre kvalifiserte montører på plass før oppstart",
      "Ingen produktivitetstap på prosjektet",
      "Én kandidat ble fast ansatt etter prøveperioden",
    ],
    duration: "8 dager fra behov til signering",
    contact: "Ivo Myhre, Salgssjef",
    quote:
      "Vi fikk akkurat de folkene vi trengte, til rett tid. North Group forstår hva elektrobransjen faktisk trenger.",
    authorRole: "Daglig leder, Elektrobedrift (Oslo)",
  },
  {
    id: "bygg-anlegg",
    companyType: "Bygg- og anleggsbedrift",
    companySize: "40+ ansatte",
    challenge:
      "En landsdekkende byggentreprenør hadde behov for å bygge opp et team av HK-hjelpere og lagermedarbeidere til et nytt regionsenter. Høy turnover i denne typie stillinger hadde skapt ustabilitet.",
    solution:
      "North Group strukturerte ansettelsesprosessen med fokus på langsiktig match. Vi la vekt på reell HMS-kompetanse og dokumentert arbeidserfaring, ikke bare CV. Tett oppfølging de første månedene sikret at nye medarbeidere kom på rett spor.",
    results: [
      "Sju av åtte ansatte ble værende etter første halvår",
      "Ingen turnover i lagerteamet etter oppstart",
      " Samarbeidet utvidet til flere regioner",
    ],
    duration: "3 uker fra brief til oppstart",
    contact: "Samy Adolfsen, Driftskoordinator",
    quote:
      "Samy og teamet ordnet alt fra behovsanalyse til oppstart. Vi trengte ikke bruke tid på opplæring og utskiftninger i etterkant.",
    authorRole: "HR-ansvarlig, Byggentreprenør (Østlandet)",
  },
  {
    id: "okonomi-prosess",
    companyType: "Produksjonsbedrift",
    companySize: "10–15 ansatte",
    challenge:
      "En liten produksjonsbedrift hadde vokst raskt og trengte hjelp til å rydde opp i økonomiske prosesser. Manglende rutiner for lønn og fakturering hadde ført til feil og misnøye blant ansatte.",
    solution:
      "North Group gjennomgikk eksisterende rutiner og innførte systematiske prosesser for lønn, fakturering og rapportering. Katarzyna Kubacka fra North Group bistod med implementering og opplæring av eksisterende administrasjon.",
    results: [
      "Null feil i lønnskjøring etter 60 dager",
      "Fornøyde ansatte med riktig lønn til rett tid",
      "Ren økonomirapportering klargjort for revisjon",
    ],
    duration: "6 uker fra oppstart til ferdig rutine",
    contact: "Katarzyna Kubacka, Økonomikonsulent",
    quote:
      "Vi fikk orden på økonomien fra første dag. Nå har vi overskudd til å drive virksomheten, ikke bare holde orden på tallene.",
    authorRole: "Daglig leder, Produksjonsbedrift (Innlandet)",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case-studier"
        title="Resultater vi er stolte av."
        subtitle="Hver samarbeidspartner har en historie. Her er noen av dem – fra første samtale til leveranse."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Case-studier" },
        ]}
      />

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="grid gap-16">
            {CASE_STUDIES.map((cs, i) => (
              <FadeIn key={cs.id} delay={i * 0.1}>
                <article
                  id={cs.id}
                  className="grid gap-10 rounded-3xl border border-navy-dark/10 bg-gray-50 p-8 lg:grid-cols-12 lg:p-12"
                >
                  {/* Left: case info */}
                  <div className="lg:col-span-7">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green/10 px-3 py-1 text-xs font-semibold text-green-dark">
                        <Building2 className="h-3 w-3" aria-hidden />
                        {cs.companyType}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-dark/10 px-3 py-1 text-xs font-semibold text-navy-dark">
                        <Users className="h-3 w-3" aria-hidden />
                        {cs.companySize}
                      </span>
                    </div>

                    <h2 className="mt-5 font-display text-2xl font-extrabold text-navy-dark">
                      {cs.companyType.toLowerCase().replace("bedrift", "")} –
                      behov {cs.id.includes("okonomi") ? "økonomi" : "rekruttering"}
                    </h2>

                    <div className="mt-8 space-y-8">
                      <div>
                        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-green-dark mb-2">
                          Utfordring
                        </p>
                        <p className="text-sm leading-relaxed text-navy-dark/70">
                          {cs.challenge}
                        </p>
                      </div>

                      <div>
                        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-green-dark mb-2">
                          Løsning
                        </p>
                        <p className="text-sm leading-relaxed text-navy-dark/70">
                          {cs.solution}
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="mt-8 rounded-2xl border-l border-green bg-white p-6">
                      <p className="text-base italic leading-relaxed text-navy-dark/80">
                        &ldquo;{cs.quote}&rdquo;
                      </p>
                      <footer className="mt-3 text-sm font-semibold text-navy-dark/55">
                        {cs.authorRole}
                      </footer>
                    </blockquote>
                  </div>

                  {/* Right: metrics */}
                  <div className="lg:col-span-5">
                    <div className="flex flex-col gap-6">
                      <div className="rounded-2xl bg-navy-dark p-7 text-white">
                        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-green mb-4">
                          Resultater
                        </p>
                        <ul className="space-y-4">
                          {cs.results.map((r) => (
                            <li key={r} className="flex items-start gap-3">
                              <CheckCircle2
                                className="mt-0.5 h-5 w-5 shrink-0 text-green"
                                aria-hidden
                              />
                              <span className="text-sm leading-relaxed text-white/80">
                                {r}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-navy-dark/10 bg-white p-7">
                        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-green-dark mb-4">
                          Tidsbruk
                        </p>
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-navy-dark/70" aria-hidden />
                          <span className="text-sm font-medium text-navy-dark/70">
                            {cs.duration}
                          </span>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-navy-dark/10 bg-white p-7">
                        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-green-dark mb-1">
                          Kontakt
                        </p>
                        <p className="text-sm text-navy-dark/70">{cs.contact}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Skal vi hjelpe deg?"
        title="Fortell om din utfordring."
        description="Ta kontakt for en uforpliktende samtale. Vi finner ut om vi kan bidra."
        primaryHref="/kontakt/"
        primaryLabel="Bestill samtale"
      />
    </>
  );
}
