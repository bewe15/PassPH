import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { GenerateMockButton } from "@/components/GenerateMockButton";
import { ChevronLeft, TrendingUp, Clock, CheckCircle2, Circle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function getBandColor(band: number) {
  if (band >= 7.5) return "text-green-500";
  if (band >= 6.5) return "text-cyan-500";
  if (band >= 5.5) return "text-yellow-500";
  return "text-red-400";
}

export default async function MockPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: sessions } = await supabase
    .from("mock_exam_sessions")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(20);

  // For each session, count how many sections have attempts
  const sessionIds = (sessions ?? []).map((s) => s.id);
  const { data: attempts } = sessionIds.length
    ? await supabase
        .from("test_attempts")
        .select("mock_exam_id, band")
        .eq("user_id", user.id)
        .in("mock_exam_id", sessionIds)
    : { data: [] };

  // Group attempt count + avg band per session
  const sessionStats: Record<string, { count: number; bands: number[] }> = {};
  for (const a of attempts ?? []) {
    if (!a.mock_exam_id) continue;
    if (!sessionStats[a.mock_exam_id]) sessionStats[a.mock_exam_id] = { count: 0, bands: [] };
    sessionStats[a.mock_exam_id].count++;
    if (a.band) sessionStats[a.mock_exam_id].bands.push(a.band);
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-PH", {
      month: "short", day: "numeric", year: "numeric",
    });
  }

  function combinedBand(bands: number[]) {
    if (bands.length < 3) return null;
    return Math.round((bands.reduce((a, b) => a + b, 0) / bands.length) * 2) / 2;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <Link href="/dashboard" className="text-slate-400 hover:text-slate-600">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <p className="text-sm font-bold text-slate-900">Mock Exams</p>
            <p className="text-xs text-slate-500">IELTS Academic · Full-length timed practice</p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-6">

        {/* Generate CTA */}
        <div className="bg-gradient-to-br from-[#0a0e27] to-[#0f1535] rounded-2xl p-8 text-white text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-cyan-400" />
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">IELTS Mock Exam</p>
          </div>
          <h1 className="text-2xl font-extrabold mb-2">Simulate the real exam</h1>
          <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
            Each mock exam randomly selects passages and tasks from our full library.
            Sections are locked in order — just like the real thing.
          </p>
          <div className="flex justify-center gap-4 text-xs text-slate-400 mb-8">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />~2.5 hrs total</span>
            <span>·</span>
            <span>Listening → Reading → Writing</span>
            <span>·</span>
            <span>Random questions each time</span>
          </div>
          <GenerateMockButton className="bg-cyan-500 hover:bg-cyan-400 border-0 text-white px-8 py-2.5 text-sm font-semibold" />
        </div>

        {/* Past sessions */}
        {(sessions ?? []).length > 0 && (
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wide">Past Sessions</h2>
            {(sessions ?? []).map((session) => {
              const stats = sessionStats[session.id] ?? { count: 0, bands: [] };
              const band = combinedBand(stats.bands);
              const isDone = stats.count >= 3;

              return (
                <Link key={session.id} href={`/mock/${session.id}`}>
                  <Card className="hover:border-cyan-300 transition cursor-pointer">
                    <CardContent className="py-4 px-5">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            isDone ? "bg-green-100" : "bg-cyan-50"
                          }`}>
                            {isDone
                              ? <CheckCircle2 className="w-5 h-5 text-green-500" />
                              : <Circle className="w-5 h-5 text-cyan-400" />
                            }
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-semibold text-slate-900">IELTS Mock Exam</p>
                              <Badge variant={isDone ? "pro" : "free"} className="text-xs">
                                {isDone ? "Complete" : `${stats.count}/3 sections`}
                              </Badge>
                            </div>
                            <p className="text-xs text-slate-400 mt-0.5">{formatDate(session.created_at)}</p>
                          </div>
                        </div>
                        {band !== null && (
                          <div className="text-right shrink-0">
                            <p className={`text-2xl font-extrabold ${getBandColor(band)}`}>{band}</p>
                            <p className="text-xs text-slate-400">Overall Band</p>
                          </div>
                        )}
                        {!isDone && (
                          <span className="text-xs text-cyan-500 font-semibold shrink-0">Continue →</span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}

        {(sessions ?? []).length === 0 && (
          <div className="text-center py-8 text-slate-400 text-sm">
            No mock exams yet. Generate your first one above.
          </div>
        )}
      </main>
    </div>
  );
}
