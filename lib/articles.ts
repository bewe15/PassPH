import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "exam-guides");

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug: data.slug as string,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        category: data.category as string,
        readTime: data.readTime as string,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | null {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    if (data.slug === slug) {
      return {
        slug: data.slug as string,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        category: data.category as string,
        readTime: data.readTime as string,
        content,
      };
    }
  }

  return null;
}
