import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { mdxComponents } from "@/components/mdx-components";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

const BASE_URL = "https://www.scoravo.com";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const url = `${BASE_URL}/exam-guides/${slug}`;
  return {
    title: `${article.title} | Scoravo`,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      siteName: "Scoravo",
      type: "article",
      publishedTime: article.date,
      authors: ["Scoravo"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  IELTS: "bg-cyan-50 text-cyan-700 border-cyan-200",
  PTE: "bg-violet-50 text-violet-700 border-violet-200",
  General: "bg-slate-100 text-slate-600 border-slate-200",
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const formatted = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Organization", name: "Scoravo", url: BASE_URL },
    publisher: {
      "@type": "Organization",
      name: "Scoravo",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/icon.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/exam-guides/${article.slug}` },
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Top nav */}
      <div className="border-b border-slate-200 bg-white sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/exam-guides" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Exam Guides
          </Link>
          <Link href="/" className="text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition">
            Scoravo
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${CATEGORY_COLORS[article.category] ?? CATEGORY_COLORS.General}`}>
            {article.category}
          </span>
          <span className="text-xs text-slate-400">{article.readTime}</span>
          <span className="text-xs text-slate-400">·</span>
          <span className="text-xs text-slate-400">{formatted}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          {article.title}
        </h1>

        <p className="text-lg text-slate-500 leading-relaxed mb-10 border-b border-slate-100 pb-10">
          {article.description}
        </p>

        {/* MDX content */}
        <div className="prose prose-slate prose-lg max-w-none
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:leading-relaxed prose-p:text-slate-700
          prose-li:text-slate-700
          prose-strong:text-slate-900
          prose-a:text-cyan-600 prose-a:no-underline hover:prose-a:underline
          prose-table:text-sm
          prose-th:bg-slate-50 prose-th:font-semibold
          prose-td:py-3
          prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:text-slate-800
          prose-pre:bg-slate-900 prose-pre:text-slate-100
          prose-blockquote:border-l-4 prose-blockquote:border-cyan-400 prose-blockquote:bg-cyan-50 prose-blockquote:rounded-r-lg prose-blockquote:py-2
          prose-hr:border-slate-200">
          <MDXRemote source={article.content} components={mdxComponents} />
        </div>

        {/* Footer CTA */}
        <div className="mt-16 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Put it into practice</h2>
          <p className="text-slate-500 text-sm mb-5">Free IELTS and PTE practice tests with instant scoring — no credit card needed.</p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition text-sm"
          >
            Start free on Scoravo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
          </Link>
        </div>
      </article>
    </div>
  );
}
