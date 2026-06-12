"use client";

import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PTEListenResultsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const score = parseInt(searchParams.get("score") ?? "0");
  const total = parseInt(searchParams.get("total") ?? "1");
  const pct = Math.round((score / total) * 100);

  function band() {
    if (pct >= 85) return { label: "Expert", color: "text-green-600", bg: "bg-green-50", border: "border-green-200" };
    if (pct >= 70) return { label: "Proficient", color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-200" };
    if (pct >= 55) return { label: "Intermediate", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" };
    return { label: "Developing", color: "text-slate-600", bg: "bg-slate-50", border: "border-slate-200" };
  }

  const b = band();

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Score card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-6 text-center">
          <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-cyan-600" />
          </div>
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">PTE Listening Result</p>
          <div className="text-7xl font-extrabold text-cyan-500 mb-1">{pct}%</div>
          <div className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${b.color} ${b.bg} border ${b.border} mb-4`}>
            {b.label}
          </div>
          <div className="flex items-center justify-center gap-8 text-sm mt-4">
            <div>
              <p className="font-bold text-slate-900 text-lg">{score}/{total}</p>
              <p className="text-slate-400">Tasks correct</p>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <p className="font-bold text-slate-900 text-lg">{total - score}</p>
              <p className="text-slate-400">To review</p>
            </div>
          </div>
        </div>

        {/* Score breakdown */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart2 className="w-4 h-4 text-slate-400" />
            <h2 className="font-bold text-slate-900">Score Breakdown</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: "Summarise Spoken Text", max: 1 },
              { label: "Multiple Choice (Multiple)", max: 2 },
              { label: "Fill in the Blanks", max: 2 },
              { label: "Highlight Correct Summary", max: 2 },
              { label: "Multiple Choice (Single)", max: 2 },
              { label: "Select Missing Word", max: 2 },
              { label: "Highlight Incorrect Words", max: 2 },
              { label: "Write from Dictation", max: 3 },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between text-sm">
                <span className="text-slate-600">{row.label}</span>
                <span className="text-xs text-slate-400">/ {row.max} tasks</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <Link href="/dashboard" className="flex-1">
            <Button className="w-full" variant="outline">Back to Dashboard</Button>
          </Link>
          <Link href={`/pte-listen/${id}`} className="flex-1">
            <Button className="w-full">Try Again →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
