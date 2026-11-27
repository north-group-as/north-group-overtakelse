/**
 * Steg for å ta digitalt kurs. Brukes både til visning på forsiden og til
 * HowTo JSON-LD, slik at strukturert data alltid matcher synlig innhold.
 */
export interface HowToStep {
  name: string;
  text: string;
}

export const KURS_HOWTO = {
  name: "Slik tar du FSE-kurs på nett hos North",
  description:
    "Tre steg fra bestilling til kursbevis for digitalt FSE-kurs og førstehjelpskurs hos North Group.",
  totalTime: "PT6H",
  steps: [
    {
      name: "Velg kurs og bestill",
      text: "Velg FSE-kurs for lavspenning med førstehjelp (kr 699 eks. mva) eller førstehjelpskurs (kr 490 eks. mva) under digitale kurs, og bestill direkte på nett.",
    },
    {
      name: "Gjennomfør i eget tempo",
      text: "Logg inn på kursplattformen og ta teoridelen når det passer. Den tar normalt 4-6 timer, og du kan ta pauser underveis.",
    },
    {
      name: "Få kursbeviset",
      text: "Når du består den teoretiske prøven, får du kursbevis digitalt. For FSE gjennomføres i tillegg en praktisk del med en sakkyndig person hos arbeidsgiver.",
    },
  ] satisfies HowToStep[],
};
