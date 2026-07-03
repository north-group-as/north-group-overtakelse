"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { FocusEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { BUSINESS } from "@/lib/business-data";
import LogoNorthGroup from "@/components/ui/LogoNorthGroup";
import { useNavbarVariant } from "./NavbarVariantProvider";

const navLinks: { label: string; href: string; external?: boolean }[] = [
  { label: "Kurs", href: "/north-kurs/" },
  { label: "Ledige stillinger", href: "/karriere/kurskonsulent/" },
  { label: "Om oss", href: "/om-oss/" },
  { label: "Kontakt", href: "/kontakt/" },
];

const primaryNavLinks = navLinks.slice(0, 1);
const secondaryNavLinks = navLinks.slice(1);

const tjenesteLinks = [
  { label: "Oversikt", href: "/vare-tjenester/" },
  { label: "Rekruttering", href: "/rekruttering/" },
  { label: "HR-tjenester", href: "/hr/" },
  { label: "Vikariat", href: "/vikariat/" },
];

const normalizePath = (path: string) =>
  path !== "/" ? path.replace(/\/+$/, "") : path;

export default function Navbar() {
  const variant = useNavbarVariant();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const dropdownCloseTimer = useRef<number | null>(null);

  const currentPath = normalizePath(pathname);
  const isActive = (href: string) => currentPath === normalizePath(href);
  const isTjenesterActive = tjenesteLinks.some(
    (l) => currentPath === normalizePath(l.href) || currentPath.startsWith(`${normalizePath(l.href)}/`)
  );

  const isTransparent = variant === "transparent" && !scrolled && !mobileOpen;

  const clearDropdownCloseTimer = useCallback(() => {
    if (dropdownCloseTimer.current) {
      window.clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
  }, []);

  const openDropdown = useCallback(() => {
    clearDropdownCloseTimer();
    setDropdownOpen(true);
  }, [clearDropdownCloseTimer]);

  const closeDropdown = useCallback(() => {
    clearDropdownCloseTimer();
    setDropdownOpen(false);
  }, [clearDropdownCloseTimer]);

  const scheduleDropdownClose = useCallback(() => {
    clearDropdownCloseTimer();
    dropdownCloseTimer.current = window.setTimeout(() => {
      setDropdownOpen(false);
      dropdownCloseTimer.current = null;
    }, 700);
  }, [clearDropdownCloseTimer]);

  const handleDropdownBlur = useCallback((event: FocusEvent<HTMLLIElement>) => {
    const nextTarget = event.relatedTarget;
    if (nextTarget instanceof Node && dropdownRef.current?.contains(nextTarget)) return;
    scheduleDropdownClose();
  }, [scheduleDropdownClose]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setMobileOpen(false);
      setMobileServicesOpen(false);
      closeDropdown();
    }, 0);
    return () => window.clearTimeout(id);
  }, [pathname, closeDropdown]);

  useEffect(() => {
    if (variant !== "transparent") return;
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => clearDropdownCloseTimer, [clearDropdownCloseTimer]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMobileServicesOpen(false);
        closeDropdown();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeDropdown]);

  useEffect(() => {
    if (!dropdownOpen) return;
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [dropdownOpen, closeDropdown]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full h-16 border-b backdrop-blur-md transition-[background-color,box-shadow,border-color] duration-500 ease-out",
        isTransparent
          ? "border-transparent bg-navy-dark/10 shadow-none"
          : "border-white/10 bg-navy-dark/95 shadow-lg shadow-navy-dark/25"
      )}
    >
      {/* Gradient for text readability over hero images / aurora / mountains */}
      {variant === "transparent" ? (
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/30 to-transparent pointer-events-none transition-opacity duration-500",
            isTransparent ? "opacity-100" : "opacity-0"
          )}
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 to-transparent pointer-events-none"
        />
      )}

      <nav
        className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10"
        aria-label="Hovedmeny"
      >
        {/* Logo: hvit-tekst-variant (blå sirkel + hvit NORTH GROUP) generert
            fra offisiell PDF, for navy header. Skjules på mobil når menyen
            er åpen så vi unngår dobbel logo. */}
        <Link
          href="/"
          aria-label="North Group forside"
          className={cn(
            "group inline-flex min-h-11 items-center rounded-md drop-shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2",
            mobileOpen && "invisible md:visible"
          )}
        >
          <LogoNorthGroup
            variant="full"
            tone="onDark"
            width={150}
            ariaLabel="North Group"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-7 md:flex">
          {primaryNavLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 rounded",
                  isActive(l.href) ? "text-green" : "text-gray-50 hover:text-white"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}

          <li
            ref={dropdownRef}
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleDropdownClose}
            onBlur={handleDropdownBlur}
          >
            <div
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors duration-500",
                isTjenesterActive ? "text-green" : "text-gray-50 hover:text-white"
              )}
            >
              <Link
                href="/vare-tjenester/"
                onClick={closeDropdown}
                className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
              >
                Tjenester
              </Link>
              <button
                type="button"
                aria-expanded={dropdownOpen}
                aria-controls="tjenester-menu"
                aria-haspopup="menu"
                aria-label={dropdownOpen ? "Lukk tjenestemeny" : "Åpne tjenestemeny"}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  clearDropdownCloseTimer();
                  setDropdownOpen((open) => !open);
                }}
                className="inline-flex h-7 w-7 items-center justify-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
              >
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", dropdownOpen && "rotate-180")}
                  aria-hidden="true"
                />
              </button>
            </div>
            <div
              hidden={!dropdownOpen}
              className="absolute left-0 top-full w-56 pt-3"
            >
              <ul
                id="tjenester-menu"
                role="menu"
                className="rounded-xl bg-white py-2 shadow-lg ring-1 ring-navy-dark/5"
              >
                {tjenesteLinks.map((l) => (
                  <li key={l.href} role="none">
                    <Link
                      href={l.href}
                      role="menuitem"
                      onClick={closeDropdown}
                      tabIndex={dropdownOpen ? 0 : -1}
                      className={cn(
                        "block px-4 py-2 text-sm text-navy-dark/80 hover:bg-gray-50 hover:text-green-dark",
                        isActive(l.href) && "text-green-dark font-semibold"
                      )}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {secondaryNavLinks.map((l) => (
            <li key={l.href}>
              {l.external ? (
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-50 transition-colors duration-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 rounded"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  href={l.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 rounded",
                    isActive(l.href) ? "text-green" : "text-gray-50 hover:text-white"
                  )}
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a
          href={BUSINESS.headerPhoneHref}
          aria-label={`Ring ${BUSINESS.headerPhoneDisplay} ${BUSINESS.headerPhoneInstruction}`}
          className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-500 md:inline-flex bg-green text-navy-dark hover:bg-green-dark"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span className="flex flex-col items-start leading-tight">
            <span className="text-[10px] font-medium uppercase tracking-[0.12em] opacity-75">
              {BUSINESS.headerPhoneInstruction}
            </span>
            {" "}
            <span>{BUSINESS.headerPhoneDisplay}</span>
          </span>
        </a>

        {/* Mobile actions: telefon-ikon ved siden av hamburger,
            slik at "ring nå" alltid er ett tap unna på mobil. */}
        <div className="flex items-center gap-1 md:hidden">
          <a
            href={BUSINESS.headerPhoneHref}
            aria-label={`Ring ${BUSINESS.headerPhoneDisplay} ${BUSINESS.headerPhoneInstruction}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-500 bg-green text-navy-dark hover:bg-green-dark"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md transition-colors duration-500 text-white hover:bg-white/10"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Lukk meny" : "Åpne meny"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div id="mobile-menu">
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-4rem)] bg-navy-dark/20 backdrop-blur-sm md:hidden"
              onClick={() => {
                setMobileOpen(false);
                setMobileServicesOpen(false);
              }}
              aria-hidden="true"
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="absolute inset-x-0 top-full z-50 h-[calc(100dvh-4rem)] bg-white md:hidden"
            >
              <motion.nav
                initial={false}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                className="flex h-full flex-col gap-1 overflow-y-auto px-6 py-8"
                aria-label="Mobilmeny"
              >
                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05, duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  className="mb-2"
                >
                  <Link href="/" className="inline-flex items-center gap-3">
                    <LogoNorthGroup
                      variant="full"
                      tone="onLight"
                      width={150}
                      ariaLabel="North Group"
                    />
                  </Link>
                </motion.div>

                {/* Main nav links */}
                {primaryNavLinks.map((l) =>
                  <motion.div
                    key={l.href}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } },
                    }}
                  >
                    <Link
                      href={l.href}
                      className={cn(
                        "block py-3 text-base font-medium text-navy-dark hover:text-green-dark",
                        isActive(l.href) && "text-green-dark"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </motion.div>,
                )}

                {/* Divider */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } },
                  }}
                  className="my-3 h-px bg-gray-200"
                />

                {/* Tjenester accordion */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } },
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={mobileServicesOpen}
                    aria-controls="mobile-services-menu"
                    className={cn(
                      "mt-4 flex w-full items-center justify-between py-3 text-base font-medium text-navy-dark hover:text-green-dark",
                      isTjenesterActive && "text-green-dark"
                    )}
                    onClick={() => setMobileServicesOpen((open) => !open)}
                  >
                    <span>Tjenester</span>
                    <ChevronDown
                      className={cn("h-5 w-5 transition-transform", mobileServicesOpen && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                </motion.div>

                {/* Tjenester links */}
                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      id="mobile-services-menu"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-l border-gray-200 pl-4"
                    >
                      {tjenesteLinks.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className={cn(
                            "block py-3 text-base text-navy-dark/80 hover:text-green-dark",
                            isActive(l.href) && "text-green-dark font-semibold"
                          )}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileServicesOpen(false);
                          }}
                        >
                          {l.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {secondaryNavLinks.map((l) =>
                  <motion.div
                    key={l.href}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } },
                    }}
                  >
                    {l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-3 text-base font-medium text-navy-dark hover:text-green-dark"
                        onClick={() => setMobileOpen(false)}
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className={cn(
                          "block py-3 text-base font-medium text-navy-dark hover:text-green-dark",
                          isActive(l.href) && "text-green-dark"
                        )}
                        onClick={() => setMobileOpen(false)}
                      >
                        {l.label}
                      </Link>
                    )}
                  </motion.div>,
                )}

                {/* CTA, bruker hovednummeret med tastevalg-eyebrow */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } },
                  }}
                >
                  <a
                    href={BUSINESS.headerPhoneHref}
                    className="mt-6 inline-flex items-center gap-3 rounded-full bg-green px-5 py-3 text-base font-semibold text-navy-dark shadow-lg shadow-green/25 hover:bg-green-dark"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    <span className="flex flex-col items-start leading-tight">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] opacity-75">
                        {BUSINESS.headerPhoneInstruction}
                      </span>
                      {" "}
                      <span>{BUSINESS.headerPhoneDisplay}</span>
                    </span>
                  </a>
                </motion.div>
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </div>
    </header>
  );
}
