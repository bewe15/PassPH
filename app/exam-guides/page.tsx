import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exam Guides — IELTS & PTE Tips | Scoravo",
  description: "Free IELTS and PTE Academic guides, tips, and strategies to help you hit your target band score.",
};

const CATEGORY_COLORS: Record<string, string> = {
  IELTS: "bg-cyan-50 text-cyan-700 border-cyan-200",
  PTE: "bg-violet-50 text-violet-700 border-violet-200",
  General: "bg-slate-100 text-slate-600 border-slate-200",
};

export default function ExamGuidesPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 mb-8 transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Scoravo
          </Link>
          <h1 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">Exam Guides</h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Free IELTS and PTE tips, strategies, and guides to help you hit your target band score.
          </p>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/exam-guides/${article.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-cyan-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${CATEGORY_COLORS[article.category] ?? CATEGORY_COLORS.General}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-400">{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                </div>
                <svg className="w-5 h-5 text-slate-300 group-hover:text-cyan-500 transition-colors flex-none mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Ready to practice?</h2>
          <p className="text-slate-500 mb-6">Apply what you just read with free IELTS and PTE practice tests on Scoravo.</p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            Start free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
