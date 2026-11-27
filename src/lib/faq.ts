/**
 * FAQ-data: én kilde for /faq, /faq/[kategori], forsiden, llms-full.txt og JSON-LD (FAQPage).
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  heading: string;
  id: string;
  description: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    heading: "Kurs og sertifisering",
    id: "kurs",
    description:
      "Svar på vanlige spørsmål om FSE-kurs, varme arbeider, førstehjelp og andre sertifiseringer.",
    items: [
      {
        question: "Hva er FSE-kurs og hvem trenger det?",
        answer:
          "FSE står for Forskrift om Sikkerhet ved Elektrisk arbeid. Kurset er påkrevd for alle som utfører, leder eller kontrollerer arbeid på eller nær elektriske anlegg. Det gjelder elektrikere, energimontører, driftspersonell og andre med ansvar for elektrisk sikkerhet på arbeidsplassen.",
      },
      {
        question: "Er FSE-kurset tilgjengelig på andre språk enn norsk?",
        answer:
          "Ja, vi tilbyr FSE-kurset på flere språk, inkludert engelsk, polsk og litauisk. Dette gjør det enklere for utenlandske arbeidstakere å gjennomføre kurset og forstå innholdet fullt ut. Ta kontakt for å høre hvilke språk som er tilgjengelige.",
      },
      {
        question: "Hvor lang tid tar FSE-kurset?",
        answer:
          "Den teoretiske delen av FSE-kurset tar normalt 4-6 timer å gjennomføre digitalt, og du kan jobbe i eget tempo. I tillegg kommer en praktisk del som gjennomføres med en sakkyndig person hos arbeidsgiver. Total tidsbruk avhenger av om du velger digitalt eller fysisk kurs.",
      },
      {
        question: "Hva koster kursene?",
        answer:
          "Prisene varierer etter kurstype. FSE-kurs koster kr 699 og Førstehjelp kr 490. For fysiske kurs som Varme arbeider og FSE for instruert personell, ta kontakt med oss for pris. Alle priser er oppgitt eksklusiv mva.",
      },
      {
        question: "Får jeg kursbevis etter fullført kurs?",
        answer:
          "Ja, alle deltakere som består den teoretiske eksamenen mottar et kursbevis. For kurs med praktisk del, som FSE, utstedes kursbeviset etter at også den praktiske delen er gjennomført og godkjent av en sakkyndig person.",
      },
      {
        question: "Hva er forskjellen på digitale og fysiske kurs?",
        answer:
          "Digitale kurs gjennomføres helt nettbasert, i eget tempo og på egen maskin. Fysiske kurs holdes på kurssted med instruktør til stede. Begge gir samme kursbevis. Digitale kurs passer godt for teori, mens fysiske kurs kan være bedre for praktiske øvelser som varme arbeider og førstehjelp.",
      },
      {
        question: "Er varme arbeider-sertifikatet gyldig utenfor Norge?",
        answer:
          "Sertifikatet for varme arbeider er basert på norske forskrifter og er primært gyldig i Norge. I andre nordiske land kan det bli anerkjent, men det varierer. Vi anbefaler å undersøke lokale krav dersom sertifikatet skal brukes utenfor Norge.",
      },
      {
        question: "Hvor lenge er sertifikatene gyldige?",
        answer:
          "Gyldighetsperioden varierer etter kurstype. FSE-kurs har normalt en anbefalt fornyelse hvert år. Vi sender påminnelse når det nærmer seg fornyelse.",
      },
    ],
  },
  {
    heading: "Rekruttering",
    id: "rekruttering",
    description:
      "Svar på vanlige spørsmål om rekrutteringsprosessen, kostnader, faggrupper og internasjonal rekruttering.",
    items: [
      {
        question: "Hvilke faggrupper rekrutterer dere?",
        answer:
          "Vi rekrutterer primært fagarbeidere innen elektro, rør, ventilasjon, bygg og anlegg. Det inkluderer elektrikere, rørleggere, VVS-montører, støttepersonell og prosjektledere. Vi fokuserer på bransjer der det er mangel på kvalifisert arbeidskraft.",
      },
      {
        question: "Hvordan fungerer rekrutteringsprosessen?",
        answer:
          "Vi starter med en behovsanalyse sammen med deg som arbeidsgiver. Deretter søker vi aktivt etter kandidater gjennom vårt nettverk, annonsering og direkte kontakt. Alle kandidater gjennomgår intervju og referansesjekk før de presenteres. Hele prosessen er transparent, og du har kontroll hele veien.",
      },
      {
        question: "Hva koster rekruttering?",
        answer:
          "Kostnaden avhenger av stillingens kompleksitet og omfang. Vi tilbyr både fastpris og suksessbaserte modeller. Ta kontakt for et uforpliktende tilbud tilpasset dine behov.",
      },
      {
        question: "Rekrutterer dere også utenlandsk arbeidskraft?",
        answer:
          "Ja, vi har lang erfaring med å rekruttere kvalifiserte fagarbeidere fra hele Europa og andre deler av verden. Vi bistår med alt fra kvalifikasjonssjekk og språktesting til praktisk tilrettelegging som bolig og onboarding. Vi sørger for at alle papirer og godkjenninger er i orden.",
      },
      {
        question: "Hvor lang tid tar en rekrutteringsprosess?",
        answer:
          "Tidsrammen varierer med stillingens krav og tilgjengeligheten av kandidater. For fagarbeiderstillinger i Norge kan prosessen ta fra 2 til 6 uker. For internasjonal rekruttering bør du regne med noe lengre tid på grunn av dokumentasjon og eventuell relokalisering.",
      },
    ],
  },
  {
    heading: "HR-tjenester",
    id: "hr-tjenester",
    description:
      "Svar på vanlige spørsmål om HR-bistand, medarbeidersamtaler, oppsigelser og ekstern HR-partner.",
    items: [
      {
        question: "Hvilke HR-tjenester tilbyr dere?",
        answer:
          "Vi tilbyr et bredt spekter av HR-tjenester tilpasset små og mellomstore bedrifter. Det inkluderer medarbeidersamtaler, sykefraværsoppfølging, bistand ved NAV-møter, juridisk rådgivning innen arbeidsrett, oppsigelsesprosesser og generell personaladministrasjon. Vi fungerer som en ekstern HR-avdeling.",
      },
      {
        question:
          "Trenger vi egen HR-avdeling for å bruke tjenestene?",
        answer:
          "Nei, tvert imot. Tjenestene våre er spesielt utviklet for bedrifter som ikke har egen HR-avdeling. Vi fungerer som din eksterne HR-partner og tar oss av alt fra daglige spørsmål til krevende personalsaker. Du får tilgang til HR-kompetanse uten å ansette egne folk.",
      },
      {
        question:
          "Kan dere hjelpe med oppsigelser og vanskelige personalsaker?",
        answer:
          "Ja, vi bistår med hele prosessen rundt oppsigelser, fra drøftelsesmøte til gjennomføring. Vi sørger for at alt gjøres i henhold til arbeidsmiljøloven, og gir deg trygghet i krevende situasjoner. Vi har erfaring med alt fra omstillingsprosesser til individuelle oppsigelser.",
      },
      {
        question: "Hva koster HR-tjenestene?",
        answer:
          "Vi tilbyr fleksible prismodeller tilpasset bedriftens størrelse og behov. Du kan velge mellom løpende avtale med fast månedspris eller betale per oppdrag. Ta kontakt for en uforpliktende samtale, så finner vi en løsning som passer.",
      },
    ],
  },
  {
    heading: "Generelt om North Group",
    id: "generelt",
    description:
      "Svar på generelle spørsmål om selskapet, lokasjon, kontakttider og geografisk dekning.",
    items: [
      {
        question: "Hvem er North Group?",
        answer:
          "North Group AS er et norsk selskap som tilbyr rekruttering, HR-tjenester og sikkerhetskurs for bygg-, anlegg- og industribransjen. Vi hjelper bedrifter med å finne riktig arbeidskraft, håndtere personalspørsmål og sørge for at ansatte har nødvendig kompetanse og sertifisering.",
      },
      {
        question: "Hvor holder dere til?",
        answer:
          "Vi holder til i Frydenbergveien 46b, 0575 Oslo. Kontoret ligger sentralt og er lett tilgjengelig med kollektivtransport. Kurs avholdes både på vårt kurssted og digitalt, avhengig av kurstype.",
      },
      {
        question: "Hvordan tar jeg kontakt?",
        answer:
          "Du kan nå oss på e-post post@northgroup.no eller telefon 928 16 581. Du kan også fylle ut kontaktskjemaet på nettsiden vår. Vi svarer normalt innen én virkedag.",
      },
      {
        question: "Tilbyr dere tjenester utenfor Oslo?",
        answer:
          "Ja, vi leverer tjenester i hele Norge. Digitale kurs er tilgjengelige uansett lokasjon, og fysiske kurs kan arrangeres på ulike steder etter avtale. Rekruttering og HR-tjenester tilbys landsdekkende, med spesielt god dekning i Oslo-regionen og på Østlandet.",
      },
    ],
  },
];

/**
 * Utvalg for forsiden. Svarene er bevisst konkrete (tall, priser, steder)
 * slik at svarmotorer (ChatGPT, Perplexity, Google AI) kan sitere dem direkte.
 * Hold tallene i sync med stats.ts, courses.ts og business-data.ts.
 */
export const HOME_FAQ: FaqItem[] = [
  {
    question: "Hva gjør North Group?",
    answer:
      "North Group AS er et norsk selskap i Oslo, grunnlagt i 2015, som tilbyr rekruttering, HR-tjenester og godkjente sikkerhetskurs for bygg-, anleggs- og elektrobransjen. Teamet består av 8 spesialister, og over 500 elektrikere har tatt kurs hos oss.",
  },
  {
    question: "Hva koster FSE-kurs hos North?",
    answer:
      "Digitalt FSE-kurs for lavspenning med førstehjelp koster kr 699 eks. mva, og digitalt førstehjelpskurs koster kr 490 eks. mva. Teoridelen tar normalt 4-6 timer og gjennomføres i eget tempo. Fysiske kurs, som varme arbeider og førstehjelp med hjertestarter, prises etter avtale.",
  },
  {
    question: "Hvem må ta FSE-kurs hvert år?",
    answer:
      "Forskrift om sikkerhet ved arbeid i og drift av elektriske anlegg (FSE) krever årlig opplæring for alle som arbeider på eller nær elektriske anlegg. Det gjelder elektrikere, energimontører, driftspersonell og ledere med ansvar for elektrisk sikkerhet. Kurset finnes også på engelsk, polsk og litauisk.",
  },
  {
    question: "Hvordan fungerer rekruttering hos North?",
    answer:
      "Vi starter med en behovsanalyse sammen med arbeidsgiver, søker aktivt etter kandidater i nettverket vårt og gjennomfører intervju og referansesjekk før kandidatene presenteres. For fagarbeiderstillinger i Norge tar prosessen normalt 2 til 6 uker. Vi rekrutterer elektrikere, prosjektledere, kraftingeniører og andre spesialister.",
  },
  {
    question: "Hva får en bedrift uten egen HR-avdeling?",
    answer:
      "Vi fungerer som en ekstern HR-avdeling for små og mellomstore bedrifter: medarbeidersamtaler, sykefraværsoppfølging, bistand i NAV-møter, oppsigelsesprosesser og rådgivning etter arbeidsmiljøloven. Du velger mellom fast månedspris og betaling per oppdrag.",
  },
  {
    question: "Hvor holder North Group til, og jobber dere i hele Norge?",
    answer:
      "Kontoret ligger i Frydenbergveien 46b, 0575 Oslo. Rekruttering og HR-tjenester tilbys i hele Norge, med særlig god dekning i Oslo-regionen og på Østlandet. Digitale kurs kan tas fra hvor som helst, og fysiske kurs arrangeres etter avtale.",
  },
  {
    question: "Hvor raskt svarer dere?",
    answer:
      "Vi svarer normalt innen 24 timer, og du får en navngitt kontaktperson fra første samtale. Ring 928 16 581 eller send e-post til post@northgroup.no.",
  },
];
