import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Tag } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { getBlogPosts } from "@/lib/blog";

const CATEGORIES = [
  { label: "Rekruttering", slug: "rekruttering" },
  { label: "HR", slug: "hr" },
  { label: "Kurs", slug: "kurs" },
  { label: "HMS", slug: "hms" },
  { label: "Bransje", slug: "bransje" },
];

export const metadata: Metadata = {
  title: "Blogg om HMS, sikkerhetskurs og rekruttering",
  description:
    "Artikler om rekruttering, HR, kurs og bransje. Faglig fordypning fra North Group.",
  alternates: { canonical: "/blogg/" },
  openGraph: {
    title: "Blogg om HMS, sikkerhetskurs og rekruttering",
    description:
      "Artikler om rekruttering, HR, kurs og bransje. Faglig fordypning fra North Group.",
    url: "/blogg/",
    siteName: "North Group",
    locale: "nb_NO",
    type: "website",
    images: ["/opengraph-image"],
  },
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BloggPage() {
  const POSTS = getBlogPosts();
  return (
    <>
      <PageHero
        variant="flat"
        align="center"
        eyebrow="Blogg"
        title="Faglig fordypning fra North Group."
        subtitle="Artikler om rekruttering, HR, kurs og bransje. Vi deler erfaringer, analyser og praktiske tips."
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Blogg" },
        ]}
      />

      <section aria-label="Bloggkategorier" className="bg-white py-12 border-b border-navy-dark/10">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((cat) => (
              <span
                key={cat.slug}
                className="inline-flex items-center gap-1.5 rounded-full border border-navy-dark/20 px-4 py-1.5 text-sm text-navy-dark/75 hover:border-green/50 hover:text-green-dark transition cursor-default"
              >
                <Tag className="h-3.5 w-3.5" aria-hidden />
                {cat.label}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section aria-label="Bloggposter" className="bg-gray-50 py-24 lg:py-32">
        <Container>
          {POSTS.length === 0 ? (
            <FadeIn>
              <div className="text-center py-20">
                <BookOpen className="h-12 w-12 text-navy-dark/20 mx-auto mb-4" aria-hidden />
                <h2 className="font-display text-2xl font-extrabold text-navy-dark">
                  Bloggen er under oppbygging
                </h2>
                <p className="mt-3 text-navy-dark/60 max-w-md mx-auto">
                  Vi jobber med å publisere faglige artikler om rekruttering, HR og kurs.
                  Sjekk tilbake snart, eller abonner på nyhetsbrevet vårt.
                </p>
                <div className="mt-8 flex gap-4 justify-center">
                  <Link
                    href="/kontakt/"
                    className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-navy-dark hover:bg-green-dark transition"
                  >
                    Kontakt oss
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <a
                    href="mailto:post@northgroup.no"
                    className="inline-flex items-center gap-2 rounded-full border border-navy-dark/30 px-6 py-3 text-sm font-semibold text-navy-dark hover:border-green/50 hover:text-green-dark transition"
                  >
                    Meld på nyhetsbrev
                  </a>
                </div>
              </div>
            </FadeIn>
          ) : (
            <div className="grid gap-8 lg:grid-cols-2">
              {POSTS.map((post, i) => (
                <FadeIn key={post.slug} delay={i * 0.06}>
                  <article className="group h-full rounded-2xl border border-navy-dark/10 bg-white p-8 transition hover:border-green/40 hover:shadow-lg hover:shadow-navy-dark/5">
                    <div className="flex items-center gap-3 text-xs text-navy-dark/70 mb-4">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" aria-hidden />
                        {formatDate(post.date)}
                      </span>
                      <span className="text-navy-dark/20">·</span>
                      <span className="inline-flex items-center gap-1">
                        <Tag className="h-3.5 w-3.5" aria-hidden />
                        {post.category}
                      </span>
                    </div>
                    <h2 className="font-display text-xl font-extrabold text-navy-dark group-hover:text-green-dark transition">
                      <Link href={`/blogg/${post.slug}/`} className="before:absolute before:inset-0 before:rounded-2xl">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-navy-dark/65 font-light">
                      {post.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-green">
                      <span>Les artikkelen</span>
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          )}
        </Container>
      </section>

      <CtaBand
        eyebrow="Har du et tema du lurer på?"
        title="Vi skriver gjerne om ditt fagområde."
        description="Send oss et tips eller en forespørsel, så tar vi det opp i en fremtidig artikkel."
      />
    </>
  );
}
