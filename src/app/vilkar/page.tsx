import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { BUSINESS } from "@/lib/business-data";

export const metadata: Metadata = {
  title: "Vilkår og betingelser for kurs og tjenester",
  description:
    "Vilkår for kjøp av digitale kurs hos North Group AS. Tilgang, betaling, angrerett, gjennomføring og bruk av kursmateriell.",
  alternates: { canonical: "/vilkar/" },
  openGraph: {
    title: "Vilkår og betingelser for kurs og tjenester",
    description:
      "Vilkår for kjøp av digitale kurs hos North Group AS. Tilgang, betaling, angrerett, gjennomføring og bruk av kursmateriell.",
    url: "/vilkar/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
    title: "Vilkår og betingelser for kurs og tjenester",
    description:
      "Vilkår for kjøp av digitale kurs hos North Group AS. Tilgang, betaling, angrerett, gjennomføring og bruk av kursmateriell.",
  },
};

const SECTIONS = [
  {
    heading: "1. Innledning",
    body: (
      <p>
        Disse vilkårene gjelder for kjøp av digitale kurs fra {BUSINESS.name} gjennom våre
        nettsider. Ved å gjennomføre et kjøp bekrefter du at du har lest, forstått og akseptert
        disse vilkårene.
      </p>
    ),
  },
  {
    heading: "2. Kursinnhold og tilgang",
    body: (
      <>
        <p>
          {BUSINESS.name} tilbyr nettbaserte kurs innen sikkerhet, FSE, lift, førstehjelp og HMS.
          Enkelte kurs inneholder en praktisk del som må gjennomføres med en sakkyndig person hos
          arbeidsgiver.
        </p>
        <ul>
          <li>Ved kjøp av et kurs får du tilgang til kursmateriellet i en angitt periode etter bestilling.</li>
          <li>Tilgangen er personlig og kan ikke deles med andre.</li>
          <li>
            {BUSINESS.name} forbeholder seg retten til å oppdatere og endre kursinnholdet uten
            forvarsel.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "3. Priser og betaling",
    body: (
      <>
        <ul>
          <li>Alle priser er oppgitt i NOK og er eksklusive merverdiavgift, hvis ikke annet er opplyst.</li>
          <li>Betaling skjer via faktura som sendes til selskapet etter bestilling.</li>
          <li>Kjøpsavtalen er bindende når bestillingen er gjennomført.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "4. Angrerett og refusjon",
    body: (
      <>
        <ul>
          <li>
            Angrerett gjelder ikke, ettersom kursene selges til bedrifter og ikke omfattes av
            forbrukerkjøpsloven.
          </li>
          <li>
            Dersom du ønsker å benytte angrerett før kurset er påbegynt, må du kontakte oss innen 14
            dager etter kjøp.
          </li>
          <li>
            Refusjon gis kun ved tekniske feil som hindrer tilgang til kurset, og som ikke kan løses
            innen rimelig tid.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "5. Gjennomføring av kurs",
    body: (
      <>
        <ul>
          <li>For å motta kursbevis må deltakeren bestå den teoretiske eksamenen.</li>
          <li>
            For kurs med praktisk del er deltakeren ansvarlig for å organisere denne delen med en
            sakkyndig person.
          </li>
          <li>
            {BUSINESS.name} er ikke ansvarlig for manglende gjennomføring av den praktiske delen.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "6. Bruk av kursmateriell",
    body: (
      <>
        <ul>
          <li>Alt kursinnhold er beskyttet av opphavsrett og er kun for personlig bruk.</li>
          <li>
            Det er ikke tillatt å kopiere, dele eller distribuere kursinnhold uten skriftlig
            tillatelse fra {BUSINESS.name}.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "7. Ansvarsbegrensning",
    body: (
      <>
        <ul>
          <li>
            {BUSINESS.name} er ikke ansvarlig for skader, tap eller ulykker som oppstår i
            forbindelse med bruk av kursinnholdet.
          </li>
          <li>
            Vi gir ingen garantier for at kurset vil resultere i sertifisering eller godkjenning
            hos arbeidsgiver eller myndigheter utover det som er beskrevet i kursinformasjonen.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "8. Endringer i vilkårene",
    body: (
      <p>
        {BUSINESS.name} forbeholder seg retten til å endre disse vilkårene ved behov. Oppdaterte
        vilkår vil bli publisert på nettsiden, og gjeldende versjon er den som er publisert her.
      </p>
    ),
  },
  {
    heading: "9. Kontaktinformasjon",
    body: (
      <p>
        For spørsmål eller henvendelser knyttet til kurs og vilkår, kontakt oss på{" "}
        <a className="text-green-dark underline-offset-2 hover:underline" href={BUSINESS.emailHref}>
          {BUSINESS.email}
        </a>{" "}
        eller på telefon{" "}
        <a className="text-green-dark underline-offset-2 hover:underline" href={BUSINESS.phoneHref}>
          {BUSINESS.phoneDisplay}
        </a>
        .
      </p>
    ),
  },
];

export default function VilkarPage() {
  return (
    <>
      <PageHero
        eyebrow="Vilkår"
        title="Kjøpsvilkår for digitale kurs."
        subtitle="Vilkårene under regulerer kjøp av digitale kurs fra North Group AS. Ved å bestille bekrefter du å ha akseptert vilkårene."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Vilkår" },
        ]}
      />

      <section aria-label="Vilkår" className="bg-white py-20 lg:py-28">
        <Container size="narrow">
          <FadeIn>
            <p className="text-sm text-navy-dark/55">
              Sist oppdatert: 15. april 2026
            </p>
          </FadeIn>

          <div className="mt-12 space-y-14">
            {SECTIONS.map((section, i) => (
              <FadeIn key={section.heading} delay={i * 0.03}>
                <article>
                  <h2 className="font-display text-2xl font-extrabold text-navy-dark md:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-dark/75 font-light [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-6 [&>ul>li]:text-base [&>ul>li]:leading-relaxed">
                    {section.body}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-20 rounded-2xl bg-gray-50 p-8 lg:p-10">
              <h2 className="font-display text-xl font-extrabold text-navy-dark">
                Spørsmål om vilkår eller bestilling?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
                Ta kontakt før du bestiller hvis det er noe du lurer på. Vi svarer raskt.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/north-kurs/kursoversikt/"
                  className="inline-flex items-center gap-2 rounded-full bg-navy-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy"
                >
                  Se kursoversikten
                </Link>
                <Link
                  href="/kontakt/"
                  className="inline-flex items-center gap-2 rounded-full border border-navy-dark/15 px-6 py-3 text-sm font-semibold text-navy-dark transition hover:border-green hover:text-green-dark"
                >
                  Til kontaktsiden
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
