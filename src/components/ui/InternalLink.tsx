import Link from "next/link";
import type { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof Link>;

/**
 * Wrapper rundt next/link som normaliserer interne href-er til kanonisk form
 * med trailing slash. Bygger på next.config.ts sin `trailingSlash: true`.
 * Uten denne normaliseringen genererer interne lenker 308-redirect-chains
 * som spiser crawl-budsjett og svekker SEO.
 *
 * Eksterne URL-er, anchor-lenker (#section), mailto/tel-protokoller og
 * href-er som allerede slutter på `/` blir uendret.
 *
 * @example
 *   <InternalLink href="/hr">HR</InternalLink>   // → /hr/
 *   <InternalLink href="/blogg/post-1">…</InternalLink> // → /blogg/post-1/
 *   <InternalLink href="#section">…</InternalLink>      // → #section
 *   <InternalLink href="https://x.com">…</InternalLink> // → https://x.com
 */
export default function InternalLink({ href, ...rest }: LinkProps) {
  const normalized = normalizeHref(href);
  return <Link href={normalized} {...rest} />;
}

function normalizeHref(href: LinkProps["href"]): LinkProps["href"] {
  if (typeof href !== "string") return href;

  // Eksterne URL-er, protokoll-lenker og anchors lar vi være urørt.
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href;
  }

  // Ikke gjor noe hvis trailing slash allerede finnes, ogsa nar path-en har
  // query-string (skiller pa `?`) eller fragment (skiller pa `#`).
  const [pathname, ...rest] = href.split(/([?#])/);
  if (pathname.endsWith("/")) return href;

  // Filer med extension lar vi være (f.eks. /robots.txt, /favicon.ico).
  if (/\.[a-z0-9]+$/i.test(pathname)) return href;

  return pathname + "/" + rest.join("");
}
