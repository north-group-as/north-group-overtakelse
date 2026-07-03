import type { Metadata } from "next";
import CourseListClient from "./CourseListClient";

export const metadata: Metadata = {
  title: "Alle kurs – digitale og fysiske sikkerhetskurs",
  description:
    "Komplett oversikt over alle våre kurs. Filtrér mellom digitale nettkurs og fysiske kurs i FSE, varme arbeider, førstehjelp og HMS.",
  alternates: { canonical: "/kurs/" },
  openGraph: {
    title: "Alle kurs – digitale og fysiske sikkerhetskurs",
    description:
      "Komplett oversikt over alle våre kurs. Filtrér mellom digitale nettkurs og fysiske kurs i FSE, varme arbeider, førstehjelp og HMS.",
    url: "/kurs/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
    title: "Alle kurs – digitale og fysiske sikkerhetskurs",
    description:
      "Komplett oversikt over alle våre kurs. Filtrér mellom digitale nettkurs og fysiske kurs.",
  },
};

export default function KursPage() {
  return <CourseListClient />;
}
