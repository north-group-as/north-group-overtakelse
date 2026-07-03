export interface CompanyValue {
  name: string;
  description: string;
  order: number;
}

export const values: CompanyValue[] = [
  {
    name: "Integritet",
    description:
      "Vi er ærlige og åpne i alle aspekter av virksomheten, og bygger tillit gjennom transparente handlinger.",
    order: 1,
  },
  {
    name: "Innovasjon",
    description:
      "Vi søker stadig etter nye og kreative løsninger for å møte og overgå både kundenes og medarbeidernes forventninger.",
    order: 2,
  },
  {
    name: "Respekt",
    description:
      "Vi verdsetter og anerkjenner hver enkelt persons bidrag og unikhet, og skaper en inkluderende arbeidskultur.",
    order: 3,
  },
  {
    name: "Samarbeid",
    description:
      "Vi fremmer et miljø hvor teamwork og partnerskap står sentralt, både internt og eksternt med kunder og partnere.",
    order: 4,
  },
  {
    name: "Faglig utvikling",
    description:
      "Vi legger til rette for kontinuerlig læring og profesjonell vekst, slik at både ansatte og kunder kan oppnå sine karrieremål.",
    order: 5,
  },
  {
    name: "Bærekraft",
    description:
      "Vi forplikter oss til bærekraftige forretningspraksiser som støtter langvarig suksess og bidrar positivt til samfunn og miljø.",
    order: 6,
  },
];
