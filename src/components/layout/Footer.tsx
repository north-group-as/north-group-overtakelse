import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/business-data";
import LogoNorthGroup from "@/components/ui/LogoNorthGroup";

// Merkevare-SVGer brukes fordi lucide-react v1.x fjernet brand icons.
// aria-hidden på selve ikonet, aria-label på <a> identifiserer plattformen.
function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.02H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.19 2.24.19v2.48h-1.26c-1.24 0-1.63.77-1.63 1.57v1.88h2.77l-.44 2.91h-2.33V22c4.78-.8 8.44-4.94 8.44-9.93Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.89 5.89 0 0 0-2.13 1.38A5.89 5.89 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.89 5.89 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.89 5.89 0 0 0 2.13-1.38 5.89 5.89 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.89 5.89 0 0 0-1.38-2.13A5.89 5.89 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {/* Col 1: Brand + contact */}
        <div>
          <Link href="/" aria-label="North Group forside" className="inline-block mb-6">
            <LogoNorthGroup
              variant="full"
              tone="onDark"
              width={150}
              ariaLabel="North Group"
            />
          </Link>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a
                href={BUSINESS.salesPhoneHref}
                aria-label={`Ring ${BUSINESS.salesPhoneDisplay} ${BUSINESS.salesPhoneInstruction}`}
                className="flex items-center gap-2 py-2 -my-1 hover:text-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="flex flex-col leading-tight">
                  <span>{BUSINESS.salesPhoneDisplay}</span>{" "}
                  <span className="text-[11px] text-white/60">{BUSINESS.salesPhoneInstruction}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={BUSINESS.emailHref}
                className="flex items-center gap-2 py-2 -my-1 hover:text-white"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4" aria-hidden="true" />
              <span>
                {BUSINESS.address.street}, {BUSINESS.address.postalCode} {BUSINESS.address.city}
              </span>
            </li>
          </ul>
        </div>

        {/* Col 2: Tjenester */}
        <nav aria-label="Tjenester">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider">Tjenester</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/vare-tjenester/" className="block py-2 -my-1 hover:text-white">
                Våre tjenester
              </Link>
            </li>
            <li>
              <Link href="/rekruttering/" className="block py-2 -my-1 hover:text-white">
                Rekruttering
              </Link>
            </li>
            <li>
              <Link href="/hr/" className="block py-2 -my-1 hover:text-white">
                HR-tjenester
              </Link>
            </li>
            <li>
              <Link href="/vikariat/" className="block py-2 -my-1 hover:text-white">
                Vikariat
              </Link>
            </li>
            <li>
              <Link href="/north-kurs/" className="block py-2 -my-1 hover:text-white">
                Kurs
              </Link>
            </li>
          </ul>
        </nav>

        {/* Col 3: Sider */}
        <nav aria-label="Sider">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider">Sider</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/om-oss/" className="block py-2 -my-1 hover:text-white">
                Om oss
              </Link>
            </li>
            <li>
              <Link href="/kontakt/" className="block py-2 -my-1 hover:text-white">
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/personvern/" className="block py-2 -my-1 hover:text-white">
                Personvern
              </Link>
            </li>
            <li>
              <Link href="/vilkar/" className="block py-2 -my-1 hover:text-white">
                Vilkår
              </Link>
            </li>
            <li>
              <a
                href={BUSINESS.recmanCustomerLoginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 -my-1 hover:text-white"
              >
                Kundeportal
              </a>
            </li>
            <li>
              <Link
                href="/karriere/kurskonsulent/"
                className="block py-2 -my-1 hover:text-white"
              >
                Ledige stillinger
              </Link>
            </li>
          </ul>
        </nav>

        {/* Col 4: Sosiale medier, kun synlig når URL er satt */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider">Følg oss</p>
          <ul className="flex gap-4">
            {BUSINESS.social.facebook && (
              <li>
                <a
                  href={BUSINESS.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white/70 hover:text-white"
                >
                  <FacebookIcon />
                </a>
              </li>
            )}
            {BUSINESS.social.linkedin && (
              <li>
                <a
                  href={BUSINESS.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white/70 hover:text-white"
                >
                  <LinkedinIcon />
                </a>
              </li>
            )}
            {BUSINESS.social.instagram && (
              <li>
                <a
                  href={BUSINESS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/70 hover:text-white"
                >
                  <InstagramIcon />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Bunnlinje med org.nr og copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-6 text-xs text-white/60 sm:flex-row lg:px-10">
          <p>&copy; {year} {BUSINESS.name}. Alle rettigheter reservert.</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Org.nr: {BUSINESS.orgNr}</span>
            <span>
              Laget av{" "}
              <a
                href="https://aikias.no/"
                target="_blank"
                rel="noopener"
                className="hover:text-white"
              >
                AIKI
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
