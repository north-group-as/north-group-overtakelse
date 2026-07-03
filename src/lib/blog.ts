import fs from "node:fs";
import path from "node:path";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category?: string;
  image?: string;
  author?: string;
  keywords?: string[];
  body?: string;
}

const BLOG_DIR = path.join(process.cwd(), "src/content/blogg");

function parseFrontmatter(raw: string): Record<string, string | string[]> {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const data: Record<string, string | string[]> = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^([a-zA-Z]+):\s*(.*)$/);
    if (!m) continue;
    const [, key, valueRaw] = m;
    const value = valueRaw.trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      data[key] = value.replace(/^["']|["']$/g, "");
    }
  }
  return data;
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const fm = parseFrontmatter(raw);
      const body = raw.replace(/^---\n[\s\S]*?\n---\n?/, "");
      return {
        slug,
        title: (fm.title as string) ?? slug,
        description: (fm.description as string) ?? "",
        date: (fm.date as string) ?? "",
        category: fm.category as string | undefined,
        image: fm.image as string | undefined,
        author: fm.author as string | undefined,
        keywords: fm.keywords as string[] | undefined,
        body,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPost(slug: string): BlogPost | null {
  return getBlogPosts().find((p) => p.slug === slug) ?? null;
}
