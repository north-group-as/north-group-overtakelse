import type { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import TrustBar from "@/components/sections/TrustBar";
import StorySection from "@/components/sections/StorySection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ValuesSection from "@/components/sections/ValuesSection";
import CoursesSection from "@/components/sections/CoursesSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";
import VideoSchemaJsonLd from "@/components/seo/VideoSchemaJsonLd";

const STORY_VIDEO = {
  name: "Slik jobber vi i North Group",
  description:
    "En kort presentasjon av North Group: spesialister innen rekruttering, HR-tjenester og godkjente sikkerhetskurs for bygg- og anleggsbransjen. Grunnlagt 2015, 500+ elektrikere kursert.",
  thumbnailUrl: "/images/youtube/varm-velkomst-korridor.webp",
  contentUrl: "/videos/north-group-story-web.mp4",
  uploadDate: "2026-05-15",
  duration: "PT46S",
};

export const metadata: Metadata = {
  title: { absolute: "North Group | Rekruttering, HR og sikkerhetskurs" },
  description:
    "Personalplattform for bygg og anlegg: rekruttering, HR-tjenester og godkjente sikkerhetskurs. Grunnlagt 2015, 500+ elektrikere kursert.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "North Group | Rekruttering, HR og sikkerhetskurs",
    description:
      "Personalplattform for bygg og anlegg: rekruttering, HR-tjenester og godkjente sikkerhetskurs. Grunnlagt 2015, 500+ elektrikere kursert.",
    url: "/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
    title: "North Group | Rekruttering, HR og sikkerhetskurs",
    description:
      "Personalplattform for bygg og anlegg: rekruttering, HR-tjenester og godkjente sikkerhetskurs. Grunnlagt 2015, 500+ elektrikere kursert.",
  },
};

export default function Home() {
  return (
    <>
      <VideoSchemaJsonLd video={STORY_VIDEO} />
      <Hero />
      <TrustBar />
      <StorySection
        videoSrc={STORY_VIDEO.contentUrl}
        posterSrc={STORY_VIDEO.thumbnailUrl}
        eyebrow="Bli kjent med oss"
        title="Slik jobber vi i North"
        bgClass="bg-gray-50"
      />
      <ServicesSection />
      <AboutSection />
      <ValuesSection />
      <CoursesSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
