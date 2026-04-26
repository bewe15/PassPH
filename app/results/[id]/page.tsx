"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle, ChevronLeft, Trophy, TrendingUp, RotateCcw } from "lucide-react";

const fallbackResult = {
  exam: "IELTS",
  type: "Reading Mini",
  score: 10,
  total: 13,
  band: 6.5,
  date: "April 26, 2026",
  timeTaken: "12 min 34 sec",
  questions: [
    { id: 1, text: "Urban farming exclusively takes place on rooftops and vertical structures.", correct: "False", given: "False", isCorrect: true, explanation: "The passage states urban farming uses 'rooftops, vacant lots, vertical structures, and even indoor facilities.'" },
    { id: 2, text: "According to the passage, what is a key environmental benefit of urban farming?", correct: "B", given: "B", isCorrect: true, explanation: "The passage explicitly states that reducing 'food miles' can significantly lower carbon emissions." },
    { id: 3, text: "Critics believe that cities could achieve complete food self-sufficiency through urban farming.", correct: "False", given: "True", isCorrect: false, explanation: "Critics state it is 'unlikely that cities could achieve full food self-sufficiency through urban farming alone.'" },
    { id: 4, text: "What challenge do critics highlight regarding urban farming?", correct: "C", given: "C", isCorrect: true, explanation: "The passage notes that 'land and real estate costs in urban areas can also make such ventures economically unviable.'" },
    { id: 5, text: "In Singapore, vertical farms produce millions of kilograms of ________ annually.", correct: "vegetables", given: "vegetables", isCorrect: true, explanation: "The passage states 'In Singapore, vertical farms produce millions of kilograms of vegetables annually.'" },
    { id: 6, text: "Detroit's urban farming projects have contributed to social cohesion in the community.", correct: "True", given: "Not Given", isCorrect: false, explanation: "The passage mentions Detroit's community gardens 'serve both food production and social cohesion purposes.'" },
    { id: 7, text: "The author's overall view of urban farming is best described as:", correct: "C", given: "C", isCorrect: true, explanation: "The author presents both benefits and limitations, concluding urban farming plays a 'meaningful complementary role.'" },
  ],
};

function getBandColor(band: number) {
  if (band >= 7.5) return "text-green-500";
  if (band >= 6.5) return "text-cyan-500";
  if (band >= 5.5) return "text-yellow-500";
  return "text-red-400";
}

function getBandLabel(band: number) {
  if (band >= 8.0) return "Excellent";
  if (band >= 7.0) return "Good";
  if (band >= 6.0) return "Competent";
  if (band >= 5.0) return "Modest";
  return "Limited";
}

export default function ResultsPage() {
  const [results, setResults] = useState(fallbackResult);

  useEffect(() => {
    const stored = sessionStorage.getItem("passph_result");
    if (stored) {
      try {
        setResults(JSON.parse(stored));
      } catch {
        // keep fallback
      }
    }
  }, []);

  const pct = Math.round((results.score / results.total) * 100);
  const correct = results.questions.filter((q) => q.isCorrect).length;
  const incorrect = results.questions.length - correct;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-slate-400 hover:text-slate-600 transition">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <span className="text-xl font-extrabold text-cyan-500">PassPH</span>
          </div>
          <p className="text-sm text-slate-500">{results.date}</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Score summary */}
        <Card className="mb-6 overflow-hidden">
          <div className="bg-gradient-to-br from-[#0a0e27] to-[#0f1535] p-8 text-white text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-cyan-400" />
              <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">Test Complete</p>
            </div>
            <h1 className="text-lg font-bold mb-6">{results.exam} — {results.type}</h1>

            <div className="flex items-center justify-center gap-16 flex-wrap">
              <div>
                <p className="text-5xl font-extrabold">{results.score}<span className="text-2xl text-slate-400">/{results.total}</span></p>
                <p className="text-sm text-slate-400 mt-1">Questions Correct</p>
              </div>
              <div>
                <p className={`text-5xl font-extrabold ${getBandColor(results.band)}`}>
                  {results.band}
                </p>
                <p className="text-sm text-slate-400 mt-1">Band Estimate</p>
              </div>
              <div>
                <p className="text-5xl font-extrabold">{pct}<span className="text-2xl text-slate-400">%</span></p>
                <p className="text-sm text-slate-400 mt-1">Accuracy</p>
              </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span>Band {results.band} — <span className="text-cyan-400 font-semibold">{getBandLabel(results.band)}</span></span>
            </div>
          </div>

          <CardContent className="py-4">
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div>
                <p className="text-green-500 font-bold text-lg">{correct}</p>
                <p className="text-slate-500 text-xs">Correct</p>
              </div>
              <div>
                <p className="text-red-400 font-bold text-lg">{incorrect}</p>
                <p className="text-slate-500 text-xs">Incorrect</p>
              </div>
              <div>
                <p className="text-slate-700 font-bold text-lg">{results.timeTaken}</p>
                <p className="text-slate-500 text-xs">Time Taken</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs text-slate-500 mb-1">
                <span>Score progress</span>
                <span>{pct}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-3 mb-8 flex-wrap">
          <Link href="/dashboard">
            <Button variant="outline" size="md">
              <RotateCcw className="w-4 h-4 mr-2" /> Try Another Test
            </Button>
          </Link>
          <Link href="/pricing">
            <Button size="md">Upgrade for Unlimited Tests</Button>
          </Link>
        </div>

        {/* Question review */}
        <h2 className="text-lg font-bold text-slate-900 mb-4">Answer Review</h2>
        <div className="space-y-3">
          {results.questions.map((q) => (
            <Card key={q.id}>
              <CardContent className="py-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    {q.isCorrect
                      ? <CheckCircle className="w-5 h-5 text-green-500" />
                      : <XCircle className="w-5 h-5 text-red-400" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-slate-400">Q{q.id}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${q.isCorrect ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"}`}>
                        {q.isCorrect ? "Correct" : "Incorrect"}
                      </span>
                    </div>
                    <p className="text-sm text-slate-800 font-medium mb-2">{q.text}</p>
                    {!q.isCorrect && (
                      <div className="flex flex-col gap-1 text-xs mb-2">
                        <span className="text-red-400">Your answer: <strong>{q.given}</strong></span>
                        <span className="text-green-600">Correct answer: <strong>{q.correct}</strong></span>
                      </div>
                    )}
                    <div className="bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 text-xs text-slate-600">
                      <span className="font-semibold text-slate-700">Explanation: </span>{q.explanation}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm mb-3">Want to improve your score faster?</p>
          <Link href="/pricing">
            <Button size="lg" className="px-8">Upgrade to Pro — Unlimited Tests + AI Feedback</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
