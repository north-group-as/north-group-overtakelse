"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { HrService } from "@/lib/hr-services";

interface Props {
  items: HrService[];
  initialVisible?: number;
}

export default function HrServiceList({ items, initialVisible = 3 }: Props) {
  const [open, setOpen] = useState(false);
  const visibleItems = open ? items : items.slice(0, initialVisible);
  const hasMore = items.length > initialVisible;

  return (
    <div>
      <ul className="space-y-4">
        {visibleItems.map((s, i) => (
          <li key={s.title}>
            <Link
              href={s.href}
              className="group flex items-start gap-4 rounded-2xl border border-navy-dark/10 bg-white p-6 transition hover:border-green/50 hover:shadow-lg hover:shadow-navy-dark/5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-light">
                <span className="font-display text-sm font-extrabold text-green-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
              <span className="min-w-0">
                <span className="block font-display text-base font-extrabold text-navy-dark leading-snug">
                  {s.title}
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-navy-dark/70 font-light">
                  {s.body}
                </span>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-green-dark">
                  Les mer
                  <ChevronDown className="h-4 w-4 -rotate-90 transition group-hover:translate-x-1" aria-hidden />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {hasMore ? (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-navy-dark/20 bg-white px-5 py-2.5 text-sm font-semibold text-navy-dark transition hover:border-navy-dark/40 hover:bg-gray-50"
        >
          {open ? "Vis færre HR-tjenester" : `Se alle HR-tjenester (${items.length})`}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
      ) : null}
    </div>
  );
}
