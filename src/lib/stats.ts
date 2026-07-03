export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon: "Calendar" | "GraduationCap" | "Users";
}

export const heroStats: Stat[] = [
  {
    value: 2015,
    label: "Grunnlagt",
    icon: "Calendar",
  },
  {
    value: 500,
    suffix: "+",
    label: "Elektrikere kursert",
    icon: "GraduationCap",
  },
  {
    value: 8,
    label: "Spesialister i teamet",
    icon: "Users",
  },
];
