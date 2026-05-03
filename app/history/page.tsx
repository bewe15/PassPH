import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, PenLine, ChevronRight, ChevronLeft, Trophy } from "lucide-react";

function getBandColor(band: number) {
  if (band >= 7.5) return "text-green-500";
  if (band >= 6.5) return "text-cyan-500";
  if (band >= 5.5) return "text-yellow-500";
  return "text-red-400";
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-PH", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatTestId(testId: string) {
  return testId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AttemptRow({ attempt }: { attempt: any }) {
  const isWriting = attempt.result_json?.tasks != null;

  return (
    <Link
      href={`/history/${attempt.id}`}
      className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${isWriting ? "bg-purple-50" : "bg-cyan-50"}`}>
          {isWriting
            ? <PenLine className="w-5 h-5 text-purple-500" />
            : <BookOpen className="w-5 h-5 text-cyan-500" />}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">
            {attempt.exam} — {formatTestId(attempt.test_id)}
          </p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${isWriting ? "bg-purple-50 text-purple-600" : "bg-cyan-50 text-cyan-600"}`}>
              {isWriting ? "Writing" : "Reading"}
            </span>
            <span className="text-xs text-slate-400">{formatDate(attempt.created_at)}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        {!isWriting && (
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900">{attempt.score}/{attempt.total}</p>
            <p className="text-xs text-slate-400">Score</p>
          </div>
        )}
        <div className="text-right">
          <p className={`text-sm font-bold ${getBandColor(attempt.band)}`}>Band {attempt.band}</p>
          <p className="text-xs text-slate-400">Estimate</p>
        </div>
        <ChevronRight className="w-4 h-4 text-slate-300" />
      </div>
    </Link>
  );
}

export default async function HistoryPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string; page?: string }>;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const params = await searchParams;
  const filter = params.filter ?? "all";
  const page = Math.max(0, parseInt(params.page ?? "0", 10));
  const PAGE_SIZE = 20;

  let query = supabase
    .from("test_attempts")
    .select("*", { count: "exact" })
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .range(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE - 1);

  // Filter by exam
  if (filter === "ielts") query = query.ilike("exam", "IELTS%");
  if (filter === "pte")   query = query.ilike("exam", "PTE%");

  const { data: attempts, count } = await query;
  const total = count ?? 0;
  const totalPages = Math.ceil(total / PAGE_SIZE);

  // Stats
  const allRes = await supabase
    .from("test_attempts")
    .select("band, result_json")
    .eq("user_id", user.id);

  const all = allRes.data ?? [];
  const readingAttempts = all.filter((a) => !a.result_json?.tasks);
  const writingAttempts = all.filter((a) =>  a.result_json?.tasks);
  const avgBand = all.length
    ? Math.round((all.reduce((s, a) => s + (a.band ?? 0), 0) / all.length) * 10) / 10
    : null;

  const FILTERS = [
    { key: "all",   label: "All Tests" },
    { key: "ielts", label: "IELTS" },
    { key: "pte",   label: "PTE" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-slate-400 hover:text-slate-600 transition">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <p className="text-sm font-bold text-slate-900">Test History</p>
              <p className="text-xs text-slate-500">{total} attempt{total !== 1 ? "s" : ""} total</p>
            </div>
          </div>
          <Link href="/dashboard" className="text-sm text-cyan-500 hover:text-cyan-600 transition font-medium">
            Back to dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Tests", value: String(all.length), color: "text-slate-900" },
            { label: "Reading", value: String(readingAttempts.length), color: "text-cyan-500" },
            { label: "Writing", value: String(writingAttempts.length), color: "text-purple-500" },
            { label: "Avg Band", value: avgBand != null ? String(avgBand) : "—", color: getBandColor(avgBand ?? 0) },
          ].map((s) => (
            <Card key={s.label}>
              <CardContent className="py-4 text-center">
                <p className={`text-2xl font-extrabold ${s.color}`}>{s.value}</p>
                <p className="text-xs text-slate-500 mt-1">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 mb-4">
          {FILTERS.map((f) => (
            <Link
              key={f.key}
              href={`/history?filter=${f.key}`}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                filter === f.key
                  ? "bg-cyan-500 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-cyan-300"
              }`}
            >
              {f.label}
            </Link>
          ))}
        </div>

        {/* Attempts list */}
        {!attempts || attempts.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center">
              <Trophy className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 text-sm">No tests found for this filter.</p>
              <Link href="/dashboard" className="text-cyan-500 text-sm hover:underline mt-2 inline-block">
                Start a practice test
              </Link>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <div className="divide-y divide-slate-100">
              {attempts.map((attempt) => (
                <AttemptRow key={attempt.id} attempt={attempt} />
              ))}
            </div>
          </Card>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-6">
            <Link
              href={`/history?filter=${filter}&page=${page - 1}`}
              className={`w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 bg-white hover:border-cyan-300 transition ${page === 0 ? "opacity-30 pointer-events-none" : ""}`}
            >
              <ChevronLeft className="w-4 h-4" />
            </Link>
            <span className="text-sm text-slate-500">
              Page {page + 1} of {totalPages}
            </span>
            <Link
              href={`/history?filter=${filter}&page=${page + 1}`}
              className={`w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 bg-white hover:border-cyan-300 transition ${page >= totalPages - 1 ? "opacity-30 pointer-events-none" : ""}`}
            >
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </main>
    </div>
  );
}
