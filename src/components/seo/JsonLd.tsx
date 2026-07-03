/**
 * Rendrer JSON-LD strukturert data som en <script>-tag.
 * Server Component - ingen 'use client' nødvendig.
 * Beskytter mot </script>-injeksjon ved å rømme < som unicode-escape.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
