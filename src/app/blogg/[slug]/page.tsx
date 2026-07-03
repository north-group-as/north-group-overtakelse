import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import { marked } from "marked";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import ArticleSchemaJsonLd from "@/components/seo/ArticleSchemaJsonLd";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import { BUSINESS } from "@/lib/business-data";
import { getBlogPosts, getBlogPost } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return { title: "Artikkel ikke funnet" };
  }
  return {
    title: post.title,
    description: post.description,
    authors: post.author ? [{ name: post.author }] : undefined,
    alternates: { canonical: `/blogg/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blogg/${slug}/`,
      siteName: BUSINESS.siteName,
      locale: "nb_NO",
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/opengraph-image"],
    },
  };
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function renderArticleBody(body: string) {
  // Fjern første H1 i body. Heroen (PageHero) er sidens H1, og vi vil
  // unngå duplikater selv når body-H1 ikke matcher frontmatter-tittelen
  // (noen poster har en lengre body-H1 enn tittelen for SEO).
  const tokens = marked.lexer(body);
  const firstContentTokenIndex = tokens.findIndex((token) => token.type !== "space");
  const firstContentToken = tokens[firstContentTokenIndex];

  if (
    firstContentToken?.type === "heading" &&
    firstContentToken.depth === 1
  ) {
    tokens.splice(firstContentTokenIndex, 1);
  }

  return marked.parser(tokens);
}

export default async function BloggPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    notFound();
  }

  const html = post.body ? renderArticleBody(post.body) : "";

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { label: "Forsiden", href: "/" },
          { label: "Blogg", href: "/blogg/" },
          { label: post.title },
        ]}
      />
      <ArticleSchemaJsonLd post={post} />
      <PageHero
        variant="flat"
        eyebrow={post.category}
        title={post.title}
        subtitle={post.description}
        breadcrumbs={[
          { label: "Forsiden", href: "/" },
          { label: "Blogg", href: "/blogg/" },
          { label: post.title },
        ]}
      />

      <article className="bg-white py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="flex flex-wrap items-center gap-4 text-sm text-navy-dark/70 mb-8">
                {post.date && (
                  <>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" aria-hidden />
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </span>
                    <span className="text-navy-dark/30" aria-hidden>·</span>
                  </>
                )}
                {post.category && (
                  <>
                    <span className="inline-flex items-center gap-1.5">
                      <Tag className="h-4 w-4" aria-hidden />
                      {post.category}
                    </span>
                    <span className="text-navy-dark/30" aria-hidden>·</span>
                  </>
                )}
                {post.author && (
                  <span className="inline-flex items-center gap-1.5">
                    <User className="h-4 w-4" aria-hidden />
                    {post.author}
                  </span>
                )}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div
                className="prose prose-lg prose-navy max-w-none"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-16 pt-8 border-t border-navy-dark/10">
                <Link
                  href="/blogg/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy-dark hover:text-green-dark transition"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden />
                  Tilbake til bloggen
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </article>

      <CtaBand
        eyebrow="Vil du vite mer?"
        title="Snakk med oss om rekruttering eller kurs."
        description="Kontakt teamet vårt for en uforpliktende samtale."
      />
    </>
  );
}
