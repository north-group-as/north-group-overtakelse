export const BUSINESS = {
  name: "North Group AS",
  phone: "+4792816581",
  phoneDisplay: "928 16 581",
  phoneHref: "tel:+4792816581",
  salesPhone: "+4792816581",
  salesPhoneDisplay: "928 16 581",
  salesPhoneHref: "tel:+4792816581",
  salesPhoneInstruction: "Direkte til Kristoffer",
  // Header-CTA bruker bedriftens hovednummer med tastevalg, ikke
  // Kristoffers direkte-linje. Skilt fra salesPhone* slik at footer og
  // kontaktside (som bruker salesPhone) ikke påvirkes av denne endringen.
  headerPhone: "+4747993333",
  headerPhoneDisplay: "749 99 333",
  headerPhoneHref: "tel:+4747993333",
  headerPhoneInstruction: "Tastevalg 3-4",
  // Direkte til Kristoffer (gründer og HR-rådgiver)
  kristofferPhone: "+4792816581",
  kristofferPhoneDisplay: "928 16 581",
  kristofferPhoneHref: "tel:+4792816581",
  kristofferEmail: "kristoffer@northpersonnel.no",
  kristofferEmailHref: "mailto:kristoffer@northpersonnel.no",
  email: "post@northgroup.no",
  emailHref: "mailto:post@northgroup.no",
  address: {
    street: "Frydenbergveien 46b",
    postalCode: "0575",
    city: "Oslo",
    region: "Oslo",
    country: "NO",
  },
  orgNr: "926 743 473",
  // Offentlige SEO-URL-er skal alltid peke til produksjonsdomenet. Vercel-
  // preview og feilkonfigurerte env-vars må ikke lekke inn i canonical,
  // robots.txt, sitemap eller strukturerte data.
  siteUrl: "https://www.northgroup.no",
  siteName: "North Group",
  logoPath: "/images/logo-north-group.png",
  social: {
    facebook: "https://www.facebook.com/people/North-HR/61550494108825/",
    linkedin: "https://www.linkedin.com/company/north-group-as/",
    instagram: "",
  },
  recmanUrl: "https://northtalents.recman.no",
  recmanCustomerLoginUrl: "https://northtalents.recman.no/customer/login",
} as const;
