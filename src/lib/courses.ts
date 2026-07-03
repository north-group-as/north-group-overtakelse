export interface Course {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  category: "hms" | "sikkerhet" | "elektro" | "digital" | "lift" | "fse" | "forstehjelp" | "brann" | "fallsikring" | "varme";
  categoryLabel: string;
  type: "fysisk" | "digital";
  duration: string;
  durationISO?: string;
  durationDetail?: string;
  price: string;
  priceValue: number | null;
  certification?: string;
  certificationValidity?: string;
  targetAudience: string;
  targetAudienceList?: string[];
  languages?: string[];
  features: string[];
  curriculum?: string[];
  externalUrl?: string;
  image?: string;
  featured?: boolean;
}

export const courses: Course[] = [
  {
    slug: "fse-med-forstehjelp",
    title: "FSE-kurs for lavspenning med førstehjelp",
    description:
      "Lovpålagt årlig opplæring for alle som arbeider på eller nær elektriske anlegg. Teoretisk gjennomgang av spenningssatte anlegg og praktisk livreddende førstehjelp ved strømulykker.",
    longDescription:
      "Kurset bygger på læringsmålene i FSE-forskriften og tilfredsstiller kravene om årlig opplæring. Det gjennomføres i henhold til bedriftens interne HMS-instruks for arbeid med elektriske anlegg. Deltakeren får teoretisk opplæring om spenningssatte anlegg, ansvarsfordeling, sikkerhetsbestemmelser og bruk av verneutstyr, kombinert med praktisk HLR-øving med fokus på strømgjennomgang og lysbueskader. Kurset avsluttes med en interaktiv Kahoot-quiz og digitalt kursbevis.",
    category: "fse",
    categoryLabel: "FSE",
    type: "digital",
    duration: "Eget tempo, ca. 2-3 timer",
    durationISO: "PT3H",
    durationDetail: "Nettbasert med mulighet for 2 timers fysisk instruksjon",
    price: "kr 699,-",
    priceValue: 699,
    certification: "Digitalt kursbevis ved bestått, gyldig 12 måneder",
    certificationValidity: "Årlig oppfriskning kreves",
    languages: ["Norsk", "Engelsk", "Polsk"],
    targetAudience: "Elektrikere og annet elektrofagarbeidende personell",
    targetAudienceList: [
      "Elektrikere",
      "Energimontører",
      "Lærlinger og elektrostudenter",
      "Driftspersonell innen elektro",
      "Personell som arbeider nær elektriske anlegg",
    ],
    features: [
      "Bygger på FSE-forskriftens læringsmål",
      "Dekker årlig opplæringsplikt",
      "Praktisk HLR-øving rettet mot strømulykker",
      "Digitalt kursbevis ved bestått",
    ],
    curriculum: [
      "Ansvar for det elektriske anlegget",
      "Faremomenter ved arbeid på eller nær elektriske anlegg",
      "Organisering av sikkerhetsarbeidet og gjennomgang av rollene",
      "Sikkerhetsbestemmelser, godkjenninger, tillatelser, rutiner og instrukser",
      "Praktisk bruk av utstyr og personlig verneutstyr, inkludert kontroll og vedlikehold",
      "Førstehjelp og praktisk HLR-øving ved strømgjennomgang og lysbueskader",
      "Interaktiv Kahoot-quiz og digitalt kursbevis",
    ],
    featured: true,
    image: "/images/kurs/fse-med-forstehjelp.webp",
  },
  {
    slug: "forstehjelp",
    title: "Førstehjelp",
    description:
      "Grunnleggende førstehjelp med ABC-regelen, HLR og behandling av sirkulasjonssvikt.",
    longDescription:
      "Et kompakt førstehjelpskurs for ansatte og privatpersoner. Du lærer å kjenne igjen akutte tilstander og gi livreddende førstehjelp i påvente av profesjonell hjelp. Hjertestans kan ramme alle, uansett alder. Kurset gir deg tryggheten til å handle riktig.",
    category: "forstehjelp",
    categoryLabel: "Førstehjelp",
    type: "digital",
    duration: "Eget tempo, ca. 1-2 timer",
    durationISO: "PT2H",
    price: "kr 490,-",
    priceValue: 490,
    certification: "Digitalt kursbevis",
    targetAudience: "Alle ansatte og privatpersoner",
    features: ["ABC-regelen", "Hjerte-lungeredning", "Bruk av hjertestarter"],
    curriculum: [
      "ABC-regelen og kartlegging av skadested",
      "Hjerte-lungeredning (HLR) på voksen og barn",
      "Behandling av sirkulasjonssvikt",
      "Bruk av hjertestarter (defibrillator)",
      "Akuttsituasjoner i hverdagen",
    ],
    featured: true,
    image: "/images/kurs/forstehjelp.webp",
  },
  {
    slug: "forstehjelp-dhlr",
    title: "Førstehjelp med hjertestarter (DHLR)",
    description:
      "Praktisk førstehjelpskurs med hjerte- og lungeredning og bruk av defibrillator. For arbeidsplasser som vil være trygge på at de kan handle riktig når det gjelder.",
    longDescription:
      "DHLR står for defibrillering, hjerte- og lungeredning. Et hjerteinfarkt kan ramme hvem som helst, og de første minuttene er avgjørende. På dette praktiske kurset lærer du å gjenkjenne hjertestans, starte HLR og bruke en hjertestarter (AED). Vi tar med ekte øvelsesutstyr og kjører realistiske scenarier. Sertifikat på stedet ved bestått.",
    category: "forstehjelp",
    categoryLabel: "Førstehjelp",
    type: "fysisk",
    duration: "Halv dag (3-4 timer)",
    durationISO: "PT4H",
    durationDetail: "Holdes hos dere eller i våre lokaler i Oslo",
    price: "Kontakt for pris",
    priceValue: null,
    certification: "Kursbevis i DHLR, gyldig 12 måneder",
    certificationValidity: "Anbefalt årlig oppfriskning",
    languages: ["Norsk"],
    targetAudience: "Alle ansatte. Anbefales særlig for bygg, anlegg, elektro og produksjon der ulykker kan oppstå.",
    targetAudienceList: [
      "Bygg- og anleggsarbeidere",
      "Elektrikere og andre fagarbeidere",
      "Produksjonsansatte",
      "Verneombud og HMS-ansvarlige",
      "Alle med ansvar for sikkerhet på arbeidsplassen",
    ],
    features: [
      "Hjerte- og lungeredning (HLR)",
      "Bruk av hjertestarter (AED)",
      "Praktiske øvelser med ekte utstyr",
      "Kursbevis på stedet",
    ],
    curriculum: [
      "Gjenkjenne hjertestans og varslingsrutiner",
      "ABC-regelen og førstehjelp ved bevisstløshet",
      "Hjerte- og lungeredning på voksne og barn",
      "Praktisk bruk av hjertestarter (AED)",
      "Realistiske scenario-øvelser",
      "Avsluttende test og sertifikat",
    ],
    featured: true,
    image: "/images/kurs/forstehjelp-dhlr.webp",
  },
  {
    slug: "varme-arbeider",
    title: "Varme arbeider",
    description:
      "Sertifikat gyldig i hele Norden. Oppfyller forsikringsbransjens krav til sikker utførelse.",
    longDescription:
      "Sertifikatet for varme arbeider kreves av forsikringsselskapene ved arbeid med åpen flamme, sveising, vinkelsliper og lignende på midlertidig arbeidssted. Kurset gir 5 års sertifikat gyldig i hele Norden. Gjennomføres av akkreditert instruktør via samarbeidspartner.",
    category: "varme",
    categoryLabel: "Varme arbeider",
    type: "fysisk",
    duration: "1 dag",
    durationISO: "P1D",
    price: "Kontakt for pris",
    priceValue: null,
    certification: "Sertifikat gyldig 5 år (hele Norden)",
    certificationValidity: "5 år, gyldig i hele Norden",
    languages: ["Norsk", "Engelsk"],
    targetAudience: "Alle som utfører varme arbeider på midlertidig arbeidssted",
    features: ["Forsikringskrav", "5 års sertifikat", "Norden-godkjent"],
    curriculum: [
      "Varme arbeider som brannårsak",
      "Brannteori og brannslokking",
      "SJA (sikker jobbanalyse)",
      "Førstehjelp ved brannskader",
      "Relevante lover, forskrifter og regler",
      "Sikkerhetstiltak før, under og etter arbeid",
      "Praktisk slokkeøvelse",
    ],
    image: "/images/kurs/varme-arbeider.webp",
  },
  {
    slug: "fse-instruert-personell",
    title: "FSE for instruert personell",
    description:
      "Opplæring for instruert personell som skal utføre enkle elektriske oppgaver.",
    longDescription:
      "Kurset retter seg mot personer som skal utføre enkle elektriske arbeidsoppgaver under instruksjon. Dekker kompetansekrav i henhold til forskrift om elektroforetak og kvalifikasjonskrav (FEK). Inkluderer risikovurdering og førstehjelp ved el-ulykker.",
    category: "fse",
    categoryLabel: "FSE",
    type: "fysisk",
    duration: "Halv dag",
    durationISO: "PT4H",
    price: "Kontakt for pris",
    priceValue: null,
    certification: "Kursbevis i FSE for instruert personell",
    targetAudience: "Instruert personell uten elektrofaglig utdanning",
    targetAudienceList: [
      "Personell som utfører enkel vedlikehold på elektriske anlegg",
      "Ansatte i spesifikke soner på byggeplasser uten elektrofaglig kompetanse",
      "Ikke-elektrikere som trenger sikkerhetsbevissthet rundt el-anlegg",
    ],
    features: ["Risikovurdering", "Førstehjelp ved el-ulykker", "FEK-kompetansekrav"],
    curriculum: [
      "Roller og definisjoner i elektroarbeid",
      "Arbeidsplanlegging og valg av metode",
      "Risikovurdering og sikkerhetsprosedyrer",
      "Instruksjon, opplæring og sikkerhetsbarrierer",
      "Generell elektrisitetslære og inngrep i anlegg",
      "Kvalifikasjoner og virkeområde for instruert personell",
      "Praktisk førstehjelp, inkl. arbeid i høyden og under bakken",
    ],
    image: "/images/kurs/fse-instruert-personell.webp",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
