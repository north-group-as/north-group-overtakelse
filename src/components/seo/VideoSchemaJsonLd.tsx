import JsonLd from "./JsonLd";
import { BUSINESS } from "@/lib/business-data";

interface VideoSchema {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
  duration?: string;
}

/**
 * Rendrer VideoObject JSON-LD for selvhostede videoer.
 * Bygger absolutte URL-er via BUSINESS.siteUrl så Google ikke
 * tolker thumbnailUrl/contentUrl som relative.
 *
 * duration følger ISO 8601 duration-format (PT1M30S = 1 min 30 sek).
 */
export default function VideoSchemaJsonLd({ video }: { video: VideoSchema }) {
  const base = BUSINESS.siteUrl;
  const absoluteUrl = (path: string) =>
    path.startsWith("http") ? path : `${base}${path}`;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name,
    description: video.description,
    thumbnailUrl: absoluteUrl(video.thumbnailUrl),
    uploadDate: video.uploadDate,
    contentUrl: absoluteUrl(video.contentUrl),
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(BUSINESS.logoPath),
      },
    },
  };

  if (video.duration) {
    schema.duration = video.duration;
  }

  return <JsonLd data={schema} />;
}
