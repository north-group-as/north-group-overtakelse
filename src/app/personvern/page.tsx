import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { BUSINESS } from "@/lib/business-data";

export const metadata: Metadata = {
  title: "Personvernerklæring",
  description:
    "Slik behandler North Group AS personopplysninger. Personvernerklæring i tråd med personopplysningsloven og GDPR.",
  alternates: { canonical: "/personvern/" },
  openGraph: {
    title: "Personvernerklæring",
    description:
      "Slik behandler North Group AS personopplysninger. Personvernerklæring i tråd med personopplysningsloven og GDPR.",
    url: "/personvern/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
    title: "Personvernerklæring",
    description:
      "Slik behandler North Group AS personopplysninger. Personvernerklæring i tråd med personopplysningsloven og GDPR.",
  },
};

const SECTIONS = [
  {
    heading: "1. Behandlingsansvarlig",
    body: (
      <>
        <p>
          {BUSINESS.name} er behandlingsansvarlig for personopplysningene som behandles på{" "}
          <a className="text-green-dark underline-offset-2 hover:underline" href={BUSINESS.siteUrl}>
            northgroup.no
          </a>{" "}
          og i forbindelse med våre tjenester innen rekruttering, HR og kurs.
        </p>
        <p>
          Henvendelser om personvern kan rettes til{" "}
          <a className="text-green-dark underline-offset-2 hover:underline" href={BUSINESS.emailHref}>
            {BUSINESS.email}
          </a>{" "}
          eller på telefon{" "}
          <a className="text-green-dark underline-offset-2 hover:underline" href={BUSINESS.phoneHref}>
            {BUSINESS.phoneDisplay}
          </a>
          . Postadresse: {BUSINESS.address.street}, {BUSINESS.address.postalCode}{" "}
          {BUSINESS.address.city}.
        </p>
      </>
    ),
  },
  {
    heading: "2. Hvilke opplysninger vi behandler",
    body: (
      <>
        <p>Vi behandler følgende kategorier av personopplysninger:</p>
        <ul>
          <li>
            <strong>Kontaktinformasjon</strong> du oppgir i kontaktskjema, e-post eller telefon (navn,
            e-post, telefon, bedrift).
          </li>
          <li>
            <strong>Kandidatopplysninger</strong> du oppgir ved jobbsøknad gjennom våre
            rekrutteringskanaler (CV, søknad, referanser).
          </li>
          <li>
            <strong>Kursdeltakerinformasjon</strong> ved bestilling av kurs (navn, e-post,
            arbeidsgiver, fakturainformasjon).
          </li>
          <li>
            <strong>Bruksdata</strong> fra nettsiden, slik som teknisk informasjon om enhet,
            besøkte sider og hvor du kom fra.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "3. Formål og rettslig grunnlag",
    body: (
      <>
        <p>Vi behandler personopplysninger for følgende formål:</p>
        <ul>
          <li>
            Besvare henvendelser og gi tilbud (rettslig grunnlag: berettiget interesse,
            personvernforordningen artikkel 6 nr. 1 bokstav f, eller avtale, artikkel 6 nr. 1 bokstav b).
          </li>
          <li>
            Behandle jobbsøknader og rekruttere kandidater (rettslig grunnlag: tiltak før avtale,
            artikkel 6 nr. 1 bokstav b).
          </li>
          <li>
            Levere kurs og utstede kursbevis (rettslig grunnlag: avtale, artikkel 6 nr. 1
            bokstav b).
          </li>
          <li>
            Forbedre nettsiden og brukeropplevelsen (rettslig grunnlag: berettiget interesse,
            artikkel 6 nr. 1 bokstav f).
          </li>
          <li>
            Oppfylle lovpålagte krav, for eksempel bokføring og skattelovgivning (rettslig grunnlag:
            rettslig forpliktelse, artikkel 6 nr. 1 bokstav c).
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "4. Verktøy og databehandlere",
    body: (
      <>
        <p>
          Vi bruker eksterne leverandører som behandler personopplysninger på vegne av oss. Med disse
          har vi databehandleravtaler som regulerer behandlingen.
        </p>
        <ul>
          <li>
            <strong>Vercel Inc.</strong> hosting og leveranse av nettsiden, samt analyseverktøyene
            Vercel Analytics og Speed Insights.
          </li>
          <li>
            <strong>Resend</strong> utsending av e-postvarsler og kvitteringer.
          </li>
          <li>
            <strong>Monday.com</strong> håndtering av leads, kursbestillinger og oppfølging.
          </li>
          <li>
            <strong>Recman</strong> rekrutteringssystem for ledige stillinger og søknader (drives av
            Recman AS, lenkes fra northtalents.recman.no).
          </li>
        </ul>
        <p>
          Enkelte av tjenestene over kan medføre overføring av personopplysninger til land utenfor
          EØS. Slike overføringer skjer i tråd med personvernforordningen kapittel V, blant annet
          gjennom EUs standard personvernbestemmelser (Standard Contractual Clauses).
        </p>
      </>
    ),
  },
  {
    heading: "5. Lagringstid",
    body: (
      <>
        <p>
          Personopplysninger lagres ikke lenger enn det som er nødvendig for formålet de ble samlet
          inn for. Konkrete oppbevaringstider:
        </p>
        <ul>
          <li>
            <strong>Henvendelser via skjema og e-post:</strong> inntil 3 år etter siste kontakt.
          </li>
          <li>
            <strong>Kandidatopplysninger:</strong> inntil ansettelsesprosessen er avsluttet, og deretter
            inntil 12 måneder dersom kandidaten samtykker til videre lagring i vår base.
          </li>
          <li>
            <strong>Kursdeltakerinformasjon:</strong> så lenge det er nødvendig for å dokumentere
            gjennomført kurs og oppfylle bokføringsplikt (inntil 5 år).
          </li>
          <li>
            <strong>Analytics-data:</strong> aggregerte og pseudonymiserte data lagres inntil 26
            måneder.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "6. Informasjonskapsler (cookies)",
    body: (
      <>
        <p>
          Nettsiden bruker informasjonskapsler for å sikre god brukeropplevelse, måle bruk og levere
          relevant innhold. Du kan administrere informasjonskapsler i nettleseren din.
        </p>
        <p>
          Vi bruker kun nødvendige informasjonskapsler (for at nettsiden skal fungere).
          Analyseverktøyet vi benytter (Vercel Analytics) setter ikke egne sporingskapsler og
          samler kun aggregert, anonymisert statistikk.
        </p>
      </>
    ),
  },
  {
    heading: "7. Dine rettigheter",
    body: (
      <>
        <p>Du har følgende rettigheter etter personvernforordningen:</p>
        <ul>
          <li>Rett til innsyn i opplysninger vi behandler om deg.</li>
          <li>Rett til å få korrigert uriktige opplysninger.</li>
          <li>Rett til å få slettet opplysninger (rett til å bli glemt).</li>
          <li>Rett til å begrense behandlingen.</li>
          <li>Rett til dataportabilitet.</li>
          <li>Rett til å protestere mot behandling basert på berettiget interesse.</li>
          <li>Rett til å klage til Datatilsynet.</li>
        </ul>
        <p>
          For å utøve rettighetene dine, kontakt oss på{" "}
          <a className="text-green-dark underline-offset-2 hover:underline" href={BUSINESS.emailHref}>
            {BUSINESS.email}
          </a>
          . Vi besvarer henvendelser uten ugrunnet opphold, og senest innen 30 dager.
        </p>
      </>
    ),
  },
  {
    heading: "8. Sikkerhet",
    body: (
      <>
        <p>
          Vi har iverksatt tekniske og organisatoriske tiltak for å beskytte personopplysninger mot
          uautorisert tilgang, endring eller sletting. Dette inkluderer kryptert dataoverføring (TLS),
          tilgangsstyring og rutiner for håndtering av eventuelle avvik.
        </p>
        <p>
          Ved mistanke om brudd på personvernet vil vi varsle berørte personer og Datatilsynet i tråd
          med personvernforordningens krav.
        </p>
      </>
    ),
  },
  {
    heading: "9. Endringer",
    body: (
      <p>
        Vi kan oppdatere personvernerklæringen ved behov. Vesentlige endringer varsles på nettsiden,
        og oppdatert versjon vil alltid være tilgjengelig her.
      </p>
    ),
  },
  {
    heading: "10. Kontakt",
    body: (
      <p>
        Spørsmål om personvern, eller om hvordan vi behandler dine personopplysninger, kan sendes
        til{" "}
        <a className="text-green-dark underline-offset-2 hover:underline" href={BUSINESS.emailHref}>
          {BUSINESS.email}
        </a>{" "}
        eller per post til {BUSINESS.address.street}, {BUSINESS.address.postalCode}{" "}
        {BUSINESS.address.city}. Du har også rett til å kontakte{" "}
        <a
          className="text-green-dark underline-offset-2 hover:underline"
          href="https://www.datatilsynet.no/"
          target="_blank"
          rel="noopener"
        >
          Datatilsynet
        </a>{" "}
        med klage.
      </p>
    ),
  },
];

export default function PersonvernPage() {
  return (
    <>
      <PageHero
        eyebrow="Personvern"
        title="Personvernerklæring"
        subtitle="Slik håndterer North Group personopplysninger. Erklæringen følger personopplysningsloven og personvernforordningen (GDPR)."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Personvern" },
        ]}
      />

      <section aria-label="Personvernerklæring" className="bg-white py-20 lg:py-28">
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
                  <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-dark/75 font-light [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-6 [&>ul>li]:text-base [&>ul>li]:leading-relaxed [&>p>strong]:font-semibold [&>p>strong]:text-navy-dark [&>ul>li>strong]:font-semibold [&>ul>li>strong]:text-navy-dark">
                    {section.body}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-20 rounded-2xl bg-gray-50 p-8 lg:p-10">
              <h2 className="font-display text-xl font-extrabold text-navy-dark">
                Spørsmål om personvern?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
                Vi besvarer henvendelser om personvern raskt. Send en e-post eller ta kontakt
                gjennom kontaktsiden.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={BUSINESS.emailHref}
                  className="inline-flex items-center gap-2 rounded-full bg-navy-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy"
                >
                  Send e-post
                </a>
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
