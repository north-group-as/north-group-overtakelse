export type ServiceAccent = "green" | "teal" | "navy-light" | "teal-accent";

export interface Service {
  slug: string;
  title: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  icon: string;
  href: string;
  image: string;
  features: string[];
  accent: ServiceAccent;
}

export const services: Service[] = [
  {
    slug: "rekruttering",
    title: "Rekruttering",
    titleLine1: "Rekruttering",
    titleLine2: "av spesialister",
    description:
      "Vi finner kraftingeniører, prosjektledere, installatører og andre spesialister med høy kompetanse, og matcher dem mot bedriftens reelle behov. Tett oppfølging fra kartlegging til signert kontrakt.",
    icon: "HardHat",
    href: "/rekruttering/",
    image: "/images/north-refresh/services-rekruttering.webp",
    features: ["Kartlegging og behovsanalyse", "Kandidatsøk i bredt nettverk", "Intervju og referansesjekk"],
    accent: "green",
  },
  {
    slug: "hr",
    title: "HR-tjenester",
    titleLine1: "HR-tjenester",
    titleLine2: "med tett oppfølging",
    description:
      "Operativ og strategisk HR-støtte for små og mellomstore bedrifter. Ansettelser, oppfølging og juridisk sikre prosesser.",
    icon: "ClipboardCheck",
    href: "/hr/",
    image: "/images/north-refresh/services-hr-radgiving.webp",
    features: ["HR-rådgivning og sparring", "Personalhåndbok og rutiner", "Arbeidsrett og dokumentasjon"],
    accent: "teal",
  },
  {
    slug: "kurs",
    title: "Sikkerhetskurs",
    titleLine1: "Godkjente kurs",
    titleLine2: "på nett og fysisk",
    description:
      "Ta FSE-kurs og førstehjelp på nett i eget tempo. Fullfør kurset og få sertifikatet umiddelbart. Fysiske kurs tilpasses bedriften.",
    icon: "GraduationCap",
    href: "/north-kurs/",
    image: "/images/north-refresh/services-kursbevis.webp",
    features: ["FSE og varme arbeider", "Digitalt kursbevis", "500+ elektrikere har fullført"],
    accent: "teal-accent",
  },
];

export const ACCENT_CLASSES: Record<ServiceAccent, {
  bg: string;
  bgSoft: string;
  text: string;
  border: string;
  ring: string;
}> = {
  green: {
    bg: "bg-green",
    bgSoft: "bg-green-light",
    text: "text-green-dark",
    border: "border-green",
    ring: "ring-green/30",
  },
  teal: {
    bg: "bg-teal",
    bgSoft: "bg-teal/15",
    text: "text-teal",
    border: "border-teal",
    ring: "ring-teal/30",
  },
  "navy-light": {
    bg: "bg-navy-light",
    bgSoft: "bg-navy-light/15",
    text: "text-navy-light",
    border: "border-navy-light",
    ring: "ring-navy-light/30",
  },
  "teal-accent": {
    bg: "bg-teal-accent",
    bgSoft: "bg-teal-accent/15",
    text: "text-teal-accent",
    border: "border-teal-accent",
    ring: "ring-teal-accent/30",
  },
};
