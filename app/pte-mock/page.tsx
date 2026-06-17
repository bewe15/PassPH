import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { GeneratePTEMockButton } from "@/components/GeneratePTEMockButton";
import { ChevronLeft, TrendingUp, Clock, CheckCircle2, Circle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-PH", { month: "short", day: "numeric", year: "numeric" });
}

export default async function PTEMockPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: sessions } = await supabase
    .from("pte_mock_exam_sessions")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(20);

  const sessionIds = (sessions ?? []).map((s) => s.id);

  const { data: testAttempts } = sessionIds.length
    ? await supabase
        .from("test_attempts")
        .select("mock_exam_id, test_id")
        .eq("user_id", user.id)
        .in("mock_exam_id", sessionIds)
    : { data: [] };

  const sessionCounts: Record<string, number> = {};
  for (const a of testAttempts ?? []) {
    if (!a.mock_exam_id) continue;
    sessionCounts[a.mock_exam_id] = (sessionCounts[a.mock_exam_id] ?? 0) + 1;
  }

  // Speaking tracked separately (no mock_exam_id) — check by test_id
  const speakingTestIds = (sessions ?? []).map((s) => s.assigned_speaking);
  const { data: speakAttempts } = speakingTestIds.length
    ? await supabase
        .from("speaking_attempts")
        .select("test_id")
        .eq("user_id", user.id)
        .in("test_id", speakingTestIds)
    : { data: [] };

  const completedSpeaking = new Set((speakAttempts ?? []).map((a) => a.test_id));

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <Link href="/dashboard" className="text-slate-400 hover:text-slate-600">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <p className="text-sm font-bold text-slate-900">PTE Mock Exams</p>
            <p className="text-xs text-slate-500">PTE Academic · Full-length timed practice</p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        {/* Generate CTA */}
        <div className="bg-gradient-to-br from-[#0a0e27] to-[#0f1535] rounded-2xl p-8 text-white text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            <p className="text-sm font-semibold text-purple-400 uppercase tracking-widest">PTE Academic Mock Exam</p>
          </div>
          <h1 className="text-2xl font-extrabold mb-2">Simulate the real PTE exam</h1>
          <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
            Randomly selects tests from our full library in the real PTE Academic order.
            Complete all sections for a full score estimate.
          </p>
          <div className="flex justify-center gap-4 text-xs text-slate-400 mb-8 flex-wrap">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />~2.5 hrs total</span>
            <span>·</span>
            <span>Speaking → Writing → Reading → Listening</span>
            <span>·</span>
            <span>Random tests each time</span>
          </div>
          <GeneratePTEMockButton className="bg-purple-500 hover:bg-purple-400 border-0 text-white px-8 py-2.5 text-sm font-semibold" />
        </div>

        {/* Past sessions */}
        {(sessions ?? []).length > 0 && (
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wide">Past Sessions</h2>
            {(sessions ?? []).map((session) => {
              const testCount = sessionCounts[session.id] ?? 0;
              const hasSpeaking = completedSpeaking.has(session.assigned_speaking);
              const totalDone = testCount + (hasSpeaking ? 1 : 0);
              const isDone = totalDone >= 4;

              return (
                <Link key={session.id} href={`/pte-mock/${session.id}`}>
                  <Card className="hover:border-purple-300 transition cursor-pointer">
                    <CardContent className="py-4 px-5">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${isDone ? "bg-green-100" : "bg-purple-50"}`}>
                            {isDone
                              ? <CheckCircle2 className="w-5 h-5 text-green-500" />
                              : <Circle className="w-5 h-5 text-purple-400" />}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-semibold text-slate-900">PTE Academic Mock Exam</p>
                              <Badge variant={isDone ? "pro" : "free"} className="text-xs">
                                {isDone ? "Complete" : `${totalDone}/4 sections`}
                              </Badge>
                            </div>
                            <p className="text-xs text-slate-400 mt-0.5">{formatDate(session.created_at)}</p>
                          </div>
                        </div>
                        {!isDone && (
                          <span className="text-xs text-purple-500 font-semibold shrink-0">Continue →</span>
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
            No PTE mock exams yet. Generate your first one above.
          </div>
        )}
      </main>
    </div>
  );
}
