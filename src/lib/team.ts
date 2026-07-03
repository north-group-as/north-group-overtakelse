export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  imagePosition?: string;
  initials?: string;
  email?: string;
  phone?: string;
  phoneHref?: string;
  bio?: string;
  order: number;
}

export const team: TeamMember[] = [
  {
    name: "Kristoffer Holand",
    role: "Gründer og leder",
    image: "/images/team/kristoffer-holand.webp",
    email: "kristoffer@northpersonnel.no",
    phone: "+47 928 16 581",
    phoneHref: "tel:+4792816581",
    bio: "Kristoffer er en erfaren og løsningsorientert HR- og arbeidslivsrådgiver med over 15 års erfaring fra rekruttering, arbeidsrett, organisasjonsutvikling og operativ HR-ledelse. Han har bygget opp og ledet selskaper innen rekruttering og HR-tjenester, med særlig spesialisering mot tekniske fag og elektrobransjen.",
    order: 1,
  },
  {
    name: "Ivo Myhre",
    role: "Salgssjef",
    image: "/images/team/ivo-myhre.webp",
    email: "ivo@northgroup.no",
    phone: "+47 940 85 473",
    phoneHref: "tel:+4794085473",
    bio: "Ivo er salgssjef i North Group. Han har bakgrunn i samfunnsøkonomi og bred erfaring fra rekrutteringsbransjen. Opptatt av god struktur, helhet og den beste løsningen for hver kunde.",
    order: 2,
  },
  {
    name: "Eirik Sælør",
    role: "Avdelingsleder",
    image: "/images/team/eirik-saelor.webp",
    email: "eirik@northinstallasjon.no",
    phone: "+47 960 07 127",
    phoneHref: "tel:+4796007127",
    bio: "Eirik bringer enestående utholdenhet, effektivitet og teamånd til teamet. Løser komplekse problemer med letthet og inspirerer alle til suksess.",
    order: 3,
  },
  {
    name: "Katarzyna Kubacka",
    role: "Økonomikonsulent",
    image: "/images/team/katarzyna-kubacka.webp",
    email: "katarzyna@northgroup.no",
    phone: "+47 467 06 767",
    phoneHref: "tel:+4746706767",
    bio: "Katarzyna har mastergrad i juss og er i sluttfasen av autorisasjonsløpet som statsautorisert regnskapsfører. Ansvarlig for regnskap, lønn, fakturering og økonomisk rapportering.",
    order: 4,
  },
  {
    name: "Samy Adolfsen",
    role: "Driftskoordinator",
    image: "/images/team/samy-adolfsen.webp",
    email: "logistikk@northgroup.no",
    phone: "+47 929 22 050",
    phoneHref: "tel:+4792922050",
    bio: "Samy har ansvar for å sikre at logistikken flyter effektivt. Operativ og løsningsorientert, jobber tett med alle ledd i organisasjonen.",
    order: 5,
  },
];
