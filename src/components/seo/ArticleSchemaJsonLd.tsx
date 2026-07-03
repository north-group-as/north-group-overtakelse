import JsonLd from "./JsonLd";
import { BUSINESS } from "@/lib/business-data";
import type { BlogPost } from "@/lib/blog";

interface Props {
  post: BlogPost;
}

/**
 * Rendrer BlogPosting JSON-LD med ALLE Article-schema-paakrevde felt
 * inline (ikke som @id-referanse). Validatorer som Google Rich Results
 * og squirrelscan folger ikke @id-referanser for publisher, saa logo
 * og name maa staa direkte i schemaet.
 *
 * image emittes som streng-URL (audit krever streng, ikke ImageObject).
 * publisher.logo emittes som ImageObject med eksplisitt url + width +
 * height. Default-fallback for image til /opengraph-image hvis post
 * mangler image i frontmatter.
 *
 * author defaulter til Organization (BUSINESS.name) hvis post.author er
 * tom eller matcher BUSINESS.name; ellers Person.
 */
export default function ArticleSchemaJsonLd({ post }: Props) {
  const base = BUSINESS.siteUrl;
  const articleUrl = `${base}/blogg/${post.slug}/`;

  // Audit (squirrelscan) krever Article.image som streng eller array av
  // strenger, ikke ImageObject. Schema.org tillater begge, men vi velger
  // streng for kompatibilitet med strenge validatorer.
  const image = post.image ? `${base}${post.image}` : `${base}/opengraph-image`;

  const authorName = post.author?.trim() || BUSINESS.name;
  const author =
    authorName === BUSINESS.name
      ? { "@type": "Organization", name: BUSINESS.name, url: base }
      : { "@type": "Person", name: authorName };

  const publisher = {
    "@type": "Organization",
    name: BUSINESS.name,
    url: base,
    logo: {
      "@type": "ImageObject",
      url: `${base}/images/logo-north-group.webp`,
      width: 600,
      height: 192,
    },
  };

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    mainEntityOfPage: { "@id": articleUrl },
    headline: post.title,
    description: post.description,
    image,
    datePublished: post.date,
    dateModified: post.date,
    author,
    publisher,
    inLanguage: "nb-NO",
  };

  if (post.keywords && post.keywords.length > 0) {
    schema.keywords = post.keywords;
  }
  if (post.category) {
    schema.articleSection = post.category;
  }

  return <JsonLd data={schema} />;
}
