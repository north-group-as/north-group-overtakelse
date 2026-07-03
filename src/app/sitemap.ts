import type { MetadataRoute } from "next";
import { courses } from "@/lib/courses";
import { getBlogPosts } from "@/lib/blog";
import { BUSINESS } from "@/lib/business-data";
import { hrServiceGroups } from "@/lib/hr-service-groups";

// IDene må holdes i synk med FAQ_CATEGORIES i src/app/faq/page.tsx og
// src/app/faq/[kategori]/page.tsx. Når FAQ-data flyttes til src/lib/faq.ts
// (planlagt refactor) bør denne importeres derfra i stedet.
const FAQ_CATEGORY_IDS = ["kurs", "rekruttering", "hr-tjenester", "generelt"] as const;

type StaticEntry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const STATIC_ROUTES: StaticEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/vare-tjenester/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/rekruttering/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/rekruttering/bygg-og-anlegg/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/rekruttering/elektro/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/hr/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/north-kurs/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/north-kurs/kursoversikt/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/north-kurs/digitale-kurs/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/north-kurs/fysiske-kurs/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/kurs/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/om-oss/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/team/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/samarbeidspartnere/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/case-studies/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/pris/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/kontakt/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/vikariat/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/lonnsguide-elektro-2026/", changeFrequency: "yearly", priority: 0.7 },
  { path: "/faq/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/karriere/kurskonsulent/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blogg/", changeFrequency: "weekly", priority: 0.7 },
  { path: "/personvern/", changeFrequency: "yearly", priority: 0.3 },
  { path: "/vilkar/", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.siteUrl;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = STATIC_ROUTES.map((entry) => ({
    url: `${base}${entry.path}`,
    lastModified: now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  const faqCategoryPages: MetadataRoute.Sitemap = FAQ_CATEGORY_IDS.map((id) => ({
    url: `${base}/faq/${id}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const coursePages: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${base}/kurs/${course.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const hrServicePages: MetadataRoute.Sitemap = hrServiceGroups.map((group) => ({
    url: `${base}/hr/${group.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${base}/blogg/${post.slug}/`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...faqCategoryPages, ...hrServicePages, ...coursePages, ...blogPages];
}
