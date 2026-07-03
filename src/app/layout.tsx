import type { Metadata, Viewport } from "next";
import { Poppins, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SkipToContent from "@/components/layout/SkipToContent";
import { NavbarVariantProvider } from "@/components/layout/NavbarVariantProvider";
import JsonLd from "@/components/seo/JsonLd";
import { BUSINESS } from "@/lib/business-data";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: "North Group | Rekruttering, HR og sikkerhetskurs",
    template: "%s | North Group",
  },
  description:
    "Moderne HR-løsninger for din bedrift. Rekruttering, HR-tjenester og godkjente sikkerhetskurs. Grunnlagt 2015, 500+ elektrikere kursert.",
  openGraph: {
    siteName: BUSINESS.siteName,
    locale: "nb_NO",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0e2c3d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb-NO" className={`${poppins.variable} ${bricolage.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${BUSINESS.siteUrl}/#organization`,
                name: BUSINESS.name,
                legalName: BUSINESS.name,
                url: BUSINESS.siteUrl,
                logo: `${BUSINESS.siteUrl}/images/logo-north-group.webp`,
                image: `${BUSINESS.siteUrl}/images/logo-north-group.webp`,
                taxID: BUSINESS.orgNr,
                description:
                  "Norsk firma for rekruttering, HR-tjenester og godkjente sikkerhetskurs.",
                foundingDate: "2015",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: BUSINESS.phone,
                  email: BUSINESS.email,
                  contactType: "customer service",
                  availableLanguage: ["Norwegian", "English"],
                  areaServed: "NO",
                },
                address: {
                  "@type": "PostalAddress",
                  streetAddress: BUSINESS.address.street,
                  addressLocality: BUSINESS.address.city,
                  addressRegion: BUSINESS.address.region,
                  postalCode: BUSINESS.address.postalCode,
                  addressCountry: BUSINESS.address.country,
                },
                sameAs: [BUSINESS.social.facebook, BUSINESS.social.linkedin].filter(Boolean),
              },
              {
                "@type": ["LocalBusiness", "EmploymentAgency"],
                "@id": `${BUSINESS.siteUrl}/#localbusiness`,
                name: BUSINESS.name,
                url: BUSINESS.siteUrl,
                telephone: BUSINESS.phone,
                email: BUSINESS.email,
                image: `${BUSINESS.siteUrl}/images/logo-north-group.webp`,
                logo: `${BUSINESS.siteUrl}/images/logo-north-group.webp`,
                parentOrganization: { "@id": `${BUSINESS.siteUrl}/#organization` },
                address: {
                  "@type": "PostalAddress",
                  streetAddress: BUSINESS.address.street,
                  addressLocality: BUSINESS.address.city,
                  addressRegion: BUSINESS.address.region,
                  postalCode: BUSINESS.address.postalCode,
                  addressCountry: BUSINESS.address.country,
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 59.9272,
                  longitude: 10.7935,
                },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    opens: "08:00",
                    closes: "17:00",
                  },
                ],
                priceRange: "$$",
                areaServed: { "@type": "Country", name: "Norge" },
              },
              {
                "@type": "WebSite",
                "@id": `${BUSINESS.siteUrl}/#website`,
                url: BUSINESS.siteUrl,
                name: BUSINESS.siteName,
                publisher: { "@id": `${BUSINESS.siteUrl}/#organization` },
                inLanguage: "nb-NO",
              },
            ],
          }}
        />
        <SkipToContent />
        <NavbarVariantProvider variant="solid">
          <Navbar />
        </NavbarVariantProvider>
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
