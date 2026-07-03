import JsonLd from "./JsonLd";
import { BUSINESS } from "@/lib/business-data";

export interface Breadcrumb {
  label: string;
  href?: string;
}

export default function BreadcrumbsJsonLd({ items }: { items: Breadcrumb[] }) {
  if (items.length === 0) return null;
  const itemListElement = items.map((item, index) => {
    const entry: Record<string, unknown> = {
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
    };
    // Last item should not have an item URL per Google's preference
    if (item.href && index < items.length - 1) {
      entry.item = item.href.startsWith("http")
        ? item.href
        : `${BUSINESS.siteUrl}${item.href}`;
    }
    return entry;
  });
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement,
      }}
    />
  );
}
