import type { LucideIcon } from "lucide-react";
import {
  FileCheck,
  FolderOpen,
  Gavel,
  Heart,
  ShieldAlert,
  Stethoscope,
  Users,
} from "lucide-react";

export interface HrServiceGroupItem {
  icon: LucideIcon;
  name: string;
  body: string;
}

export interface HrServiceGroup {
  icon: LucideIcon;
  slug: string;
  title: string;
  intro: string;
  summary: string;
  contactSubject: string;
  items: HrServiceGroupItem[];
}

export const hrServiceGroups: HrServiceGroup[] = [
  {
    icon: Users,
    slug: "personaladministrasjon",
    title: "Personaladministrasjon",
    intro:
      "Vi tar hånd om hele den praktiske og juridiske delen av personalarbeidet, slik at du kan bruke tiden på driften.",
    summary:
      "For bedrifter som trenger ryddige kontrakter, personalmapper og praktisk HR-støtte i hverdagen.",
    contactSubject: "HR-henvendelse: Personaladministrasjon",
    items: [
      {
        icon: FileCheck,
        name: "Arbeidskontrakter",
        body: "Oppdaterte kontrakter i tråd med gjeldende lover, og oppfølging ved endringer.",
      },
      {
        icon: FolderOpen,
        name: "Personalmapper og dokumentasjon",
        body: "Digitalt eller fysisk administrerte mapper med ryddig arkivering og full sporbarhet.",
      },
      {
        icon: Gavel,
        name: "Rådgivning innen arbeidsrett",
        body: "Veiledning om ansettelser, oppsigelser, ferie, sykefravær og permisjoner.",
      },
    ],
  },
  {
    icon: Stethoscope,
    slug: "sykefravaersoppfolging",
    title: "Sykefraværsoppfølging",
    intro:
      "Vi sikrer at sykefravær håndteres i tråd med lovverket, samtidig som ansatte blir ivaretatt.",
    summary:
      "For ledere som vil ha kontroll på frister, dokumentasjon, dialogmøter og tilrettelegging.",
    contactSubject: "HR-henvendelse: Sykefraværsoppfølging",
    items: [
      {
        icon: FileCheck,
        name: "Registrering og dokumentasjon",
        body: "Nøyaktig registrering av sykefravær, slik at du har orden på alt mot myndighetene.",
      },
      {
        icon: Heart,
        name: "Oppfølging og tilrettelegging",
        body: "Vi støtter både leder og ansatt i tilretteleggingsarbeidet, fra start til retur.",
      },
      {
        icon: Users,
        name: "Koordinering med NAV",
        body: "Vi tar dialogen med NAV for dokumentasjon, refusjoner og dialogmøter.",
      },
    ],
  },
  {
    icon: ShieldAlert,
    slug: "hms-radgivning",
    title: "HMS-rådgivning",
    intro:
      "Vi utvikler og implementerer HMS-rutiner som faktisk brukes, ikke bare arkiveres.",
    summary:
      "For virksomheter som trenger HMS-rutiner, risikovurderinger og praktiske tiltak som fungerer i drift.",
    contactSubject: "HR-henvendelse: HMS-rådgivning",
    items: [
      {
        icon: FileCheck,
        name: "Utvikling av HMS-rutiner",
        body: "Praktiske rutiner tilpasset bransjen og størrelsen på bedriften din.",
      },
      {
        icon: Heart,
        name: "Helse- og sikkerhetstiltak",
        body: "Oppfølging og evaluering av tiltak, med konkrete forbedringspunkter.",
      },
      {
        icon: ShieldAlert,
        name: "Risikovurdering",
        body: "Rådgivning om arbeidsmiljø og risikoreduserende tiltak, dokumentert og oppdatert.",
      },
    ],
  },
  {
    icon: Gavel,
    slug: "juridisk-bistand",
    title: "Juridisk bistand innen HR",
    intro:
      "Når personalsaker blir krevende, har vi rådgivere som kjenner arbeidsretten godt. Vi bistår både ved nedbemanning, oppsigelser og krevende arbeidskonflikter.",
    summary:
      "For krevende personalsaker der prosess, dokumentasjon og menneskelig håndtering må sitte.",
    contactSubject: "HR-henvendelse: Juridisk bistand innen HR",
    items: [
      {
        icon: Gavel,
        name: "Nedbemanning og oppsigelser",
        body: "Trygg veiledning gjennom omstillings- og oppsigelsesprosesser som er belastende for både arbeidsgiver og ansatt.",
      },
      {
        icon: FileCheck,
        name: "Personalsaker",
        body: "Vi hjelper med dokumentasjon og juridiske vurderinger underveis.",
      },
      {
        icon: Users,
        name: "Forhandling og konflikthåndtering",
        body: "Vi støtter ledere i vanskelige samtaler og sluttforhandlinger.",
      },
    ],
  },
];

export function getHrServiceGroupBySlug(slug: string) {
  return hrServiceGroups.find((group) => group.slug === slug);
}
