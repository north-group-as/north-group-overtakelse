import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  ...(isVercel
    ? {}
    : {
        turbopack: {
          root: process.cwd(),
        },
      }),
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/hr/hr-tjenester/",
        destination: "/hr/",
        permanent: true,
      },
      {
        source: "/hr/hr-tjenester",
        destination: "/hr/",
        permanent: true,
      },
      {
        source: "/arbeidsformidling/",
        destination: "/vikariat/",
        permanent: true,
      },
      {
        source: "/arbeidsformidling",
        destination: "/vikariat/",
        permanent: true,
      },
      {
        source: "/referanser/",
        destination: "/om-oss/",
        permanent: false,
      },
      {
        source: "/referanser",
        destination: "/om-oss/",
        permanent: false,
      },
      {
        source: "/north-kurs/vilkar/",
        destination: "/vilkar/",
        permanent: true,
      },
      {
        source: "/kurs/fse-kurs/",
        destination: "/kurs/fse-med-forstehjelp/",
        permanent: true,
      },
      {
        source: "/kurs/fse-lavspenning-med-forstehjelp/",
        destination: "/kurs/fse-med-forstehjelp/",
        permanent: true,
      },
      {
        source: "/kurs/fallsikringskurs-sertifisering-for-trygghet-og-sikkerhet-i-hoyden/",
        destination: "/north-kurs/",
        permanent: true,
      },
      {
        source: "/kurs/fallsikringskurs/",
        destination: "/north-kurs/",
        permanent: true,
      },
      {
        source: "/kurs/grunnleggende-brannvern/",
        destination: "/north-kurs/",
        permanent: true,
      },
      {
        source: "/kurs/liftkurs/",
        destination: "/north-kurs/",
        permanent: true,
      },
      {
        source: "/kurs/hms-kurs-for-ledere/",
        destination: "/kurs/",
        permanent: true,
      },
      // ──────────────────────────────────────────────────────
      // WordPress-til-Next.js cutover (mai 2026)
      // Disse fanger gjenværende WP-URL-er fra gamle northgroup.no
      // slik at SEO-equity og eksterne lenker ikke 404-er.
      // ──────────────────────────────────────────────────────
      {
        source: "/author/:author/",
        destination: "/blogg/",
        permanent: true,
      },
      {
        source: "/author/:author",
        destination: "/blogg/",
        permanent: true,
      },
      {
        source: "/feed/",
        destination: "/blogg/",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/blogg/",
        permanent: true,
      },
      {
        source: "/feed/:type/",
        destination: "/blogg/",
        permanent: true,
      },
      {
        source: "/comments/feed/",
        destination: "/blogg/",
        permanent: true,
      },
      {
        source: "/wp-json/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-admin/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-login.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/xmlrpc.php",
        destination: "/",
        permanent: true,
      },
      // WooCommerce-paths fra gammel WP-shop
      {
        source: "/cart/",
        destination: "/north-kurs/",
        permanent: true,
      },
      {
        source: "/checkout/",
        destination: "/north-kurs/",
        permanent: true,
      },
      {
        source: "/my-account/",
        destination: "/kontakt/",
        permanent: true,
      },
      {
        source: "/shop/",
        destination: "/north-kurs/kursoversikt/",
        permanent: true,
      },
      {
        source: "/north-kurs/shop/",
        destination: "/north-kurs/kursoversikt/",
        permanent: true,
      },
      {
        source: "/north-kurs/checkout/",
        destination: "/north-kurs/",
        permanent: true,
      },
      {
        source: "/north-kurs/my-account/",
        destination: "/kontakt/",
        permanent: true,
      },
      // WooCommerce produktkategorier
      {
        source: "/product-category/digital/",
        destination: "/north-kurs/digitale-kurs/",
        permanent: true,
      },
      {
        source: "/product-category/fse/",
        destination: "/north-kurs/kursoversikt/",
        permanent: true,
      },
      {
        source: "/product-category/fysisk-kurs/",
        destination: "/north-kurs/kursoversikt/",
        permanent: true,
      },
      {
        source: "/product-category/hms/",
        destination: "/north-kurs/kursoversikt/",
        permanent: true,
      },
      {
        source: "/product-category/lift/",
        destination: "/north-kurs/kursoversikt/",
        permanent: true,
      },
      {
        source: "/product-category/:slug*",
        destination: "/north-kurs/kursoversikt/",
        permanent: true,
      },
      {
        source: "/product/:slug*",
        destination: "/north-kurs/kursoversikt/",
        permanent: true,
      },
      // Elementor test-page i WP
      {
        source: "/elementor-:id/",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async headers() {
    // CSP startes i Report-Only-modus så vi kan validere mot prod-trafikk uten
    // å blokkere noe. Brudd logges til DevTools-console og rapporteres til
    // report-uri hvis konfigurert. Etter en-to ukers observasjon — switch til
    // Content-Security-Policy (enforced) ved å bytte header-key.
    const csp = [
      "default-src 'self'",
      // Next.js trenger 'unsafe-inline' for hydration-scripts.
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
      // Tailwind + Next.js bruker inline-styles.
      "style-src 'self' 'unsafe-inline'",
      // next/image + ekstern medie + base64-encodede SVG-er.
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      // Vercel Analytics + Speed Insights.
      "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
      // Self-hosted video og audio.
      "media-src 'self'",
      "frame-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      // Frame-ancestors duplisert mot X-Frame-Options for moderne browsere.
      "frame-ancestors 'self'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "Content-Security-Policy-Report-Only", value: csp },
        ],
      },
    ];
  },
};

export default nextConfig;
