import Link from "next/link";
import type { Metadata } from "next";
import { Home, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Siden finnes ikke",
  description: "Siden du leter etter finnes ikke lenger eller har flyttet.",
};

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-navy-dark">
          404
        </p>
        <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-navy-dark md:text-5xl">
          Siden finnes ikke
        </h1>
        <p className="mt-6 text-lg font-light leading-relaxed text-navy-dark/70">
          Vi finner dessverre ikke siden du leter etter. Den kan ha blitt flyttet
          eller slettet. Prøv forsiden, kursoversikten eller ta kontakt med oss.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3 font-semibold text-navy-dark shadow-lg shadow-green/25 hover:bg-green-dark transition"
          >
            <Home className="h-5 w-5" aria-hidden="true" />
            Til forsiden
          </Link>
          <Link
            href="/north-kurs/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-dark/15 px-6 py-3 font-semibold text-navy-dark hover:border-green hover:text-green-dark transition"
          >
            Se kursoversikten
          </Link>
          <Link
            href="/kontakt/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-dark/15 px-6 py-3 font-semibold text-navy-dark hover:border-green hover:text-green-dark transition"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Kontakt oss
          </Link>
        </div>
      </div>
    </section>
  );
}
