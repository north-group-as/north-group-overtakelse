import type { Metadata } from "next";
import { BUSINESS } from "./business-data";

/**
 * SEO-grenser per beste praksis (Google SERP og audit-verktøy som
 * squirrelscan, Lighthouse SEO-tab).
 *
 * Title: 30-60 tegn. Under 30 leses som tynt eller upresist;
 * over 60 trunkeres typisk i SERP (Google klipper rundt 580px).
 *
 * Description: 80-160 tegn. Under 80 mangler kontekst for ranking-snippet;
 * over 160 trunkeres i mobil-SERP.
 *
 * Verdiene er valgt i nedre del av "trygt"-spektret så vi får varsler
 * tidlig før reell trunkering inntreffer.
 */
export const SEO_LIMITS = {
  title: { min: 30, max: 60 },
  description: { min: 80, max: 160 },
} as const;

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  images?: string[];
}

/**
 * Varsler i development-modus hvis title/description ligger utenfor
 * anbefalt SEO-spenn. Stille i prod for å unngå log-stoy.
 *
 * Kjores ved metadata-construction (server-side build/render), så
 * meldinger vises i terminal-loggen under `next dev` og under build.
 */
function warnIfOutOfRange(field: "title" | "description", value: string, path: string) {
  if (process.env.NODE_ENV === "production") return;
  const limits = SEO_LIMITS[field];
  const len = value.length;
  if (len < limits.min) {
    console.warn(
      `[seo] ${path}: ${field} er ${len} tegn (anbefalt min ${limits.min}). ${field}=${JSON.stringify(value)}`,
    );
  } else if (len > limits.max) {
    console.warn(
      `[seo] ${path}: ${field} er ${len} tegn (anbefalt max ${limits.max}). ${field}=${JSON.stringify(value)}`,
    );
  }
}

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  images,
}: PageMetadataInput): Metadata {
  warnIfOutOfRange("title", title, path);
  warnIfOutOfRange("description", description, path);
  const ogImages = images ?? ["/opengraph-image"];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: BUSINESS.siteName,
      locale: "nb_NO",
      type,
      images: ogImages,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
      ...(type === "article" && authors ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages,
    },
  };
}
