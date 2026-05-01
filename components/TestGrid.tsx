"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, PenLine, Lock, ChevronLeft, ChevronRight } from "lucide-react";

const PAGE_SIZE = 3;

const ALL_TESTS = {
  reading: {
    ielts: Array.from({ length: 20 }, (_, i) => ({
      label: `Reading Test ${i + 1}`,
      sub: "40 questions • 60 min",
      id: `ielts-reading-${i + 1}`,
      free: i < 3,
      route: "test",
    })),
    pte: Array.from({ length: 20 }, (_, i) => ({
      label: `Reading Test ${i + 1}`,
      sub: "5 tasks • 30 min",
      id: `pte-reading-${i + 1}`,
      free: i < 3,
      route: "test",
    })),
  },
  writing: {
    ielts: Array.from({ length: 20 }, (_, i) => ({
      label: `Writing Test ${i + 1}`,
      sub: "Task 1 + Task 2 • 60 min",
      id: `ielts-writing-${i + 1}`,
      free: true,
      route: "write",
    })),
    pte: Array.from({ length: 20 }, (_, i) => ({
      label: `Writing Test ${i + 1}`,
      sub: "SWT + Essay • 30 min",
      id: `pte-writing-${i + 1}`,
      free: true,
      route: "write",
    })),
  },
};

function TestCard({
  exam,
  type,
  tests,
  accent,
  color,
  plan,
  testsUsed,
  testsLimit,
}: {
  exam: string;
  type: "reading" | "writing";
  tests: typeof ALL_TESTS.reading.ielts;
  accent: string;
  color: string;
  plan: string;
  testsUsed: number;
  testsLimit: number;
}) {
  const isPro = plan !== "free";
  const visibleTests = isPro ? tests : tests.slice(0, 3);
  const totalPages = Math.ceil(visibleTests.length / PAGE_SIZE);
  const [page, setPage] = useState(0);
  const paged = visibleTests.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  const overLimit = plan === "free" && testsUsed >= testsLimit;

  return (
    <Card className={`border-2 transition ${color}`}>
      <CardContent className="py-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold px-2 py-0.5 rounded ${accent}`}>{exam}</span>
            <span className="text-slate-900 font-bold capitalize">{type === "reading" ? "Reading" : "Writing"}</span>
          </div>
          {isPro && totalPages > 1 && (
            <div className="flex items-center gap-1">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-100 disabled:opacity-30"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs text-slate-400">{page + 1}/{totalPages}</span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page === totalPages - 1}
                className="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-100 disabled:opacity-30"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        <div className="space-y-2 min-h-[108px]">
          {paged.map((test) => {
            const locked = !test.free && plan === "free";
            return (
              <div key={test.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">{test.label}</p>
                  <p className="text-xs text-slate-500">{test.sub}</p>
                </div>
                {locked ? (
                  <Link href="/pricing">
                    <Button size="sm" className="opacity-60 bg-slate-200 text-slate-500 hover:bg-slate-300">
                      <Lock className="w-3 h-3 mr-1" /> Pro
                    </Button>
                  </Link>
                ) : overLimit ? (
                  <Link href="/pricing">
                    <Button size="sm" className="bg-red-100 text-red-600 hover:bg-red-200 border-0">
                      <Lock className="w-3 h-3 mr-1" /> Limit reached
                    </Button>
                  </Link>
                ) : (
                  <Link href={`/${test.route}/${test.id}`}>
                    <Button size="sm">Start</Button>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export default function TestGrid({
  plan,
  testsUsed,
  testsLimit,
}: {
  plan: string;
  testsUsed: number;
  testsLimit: number;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-slate-900 mb-1">Start a Practice Test</h2>
      <p className="text-sm text-slate-500 mb-4">Reading &amp; Writing tests available for both IELTS and PTE Academic.</p>

      {/* Reading */}
      <div className="flex items-center gap-2 mb-3">
        <BookOpen className="w-4 h-4 text-slate-400" />
        <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Reading</span>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <TestCard exam="IELTS" type="reading" tests={ALL_TESTS.reading.ielts} accent="bg-blue-50 text-blue-700" color="border-blue-200 hover:border-blue-400" plan={plan} testsUsed={testsUsed} testsLimit={testsLimit} />
        <TestCard exam="PTE"   type="reading" tests={ALL_TESTS.reading.pte}  accent="bg-purple-50 text-purple-700" color="border-purple-200 hover:border-purple-400" plan={plan} testsUsed={testsUsed} testsLimit={testsLimit} />
      </div>

      {/* Writing */}
      <div className="flex items-center gap-2 mb-3">
        <PenLine className="w-4 h-4 text-slate-400" />
        <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Writing</span>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <TestCard exam="IELTS" type="writing" tests={ALL_TESTS.writing.ielts} accent="bg-blue-50 text-blue-700" color="border-blue-200 hover:border-blue-400" plan={plan} testsUsed={testsUsed} testsLimit={testsLimit} />
        <TestCard exam="PTE"   type="writing" tests={ALL_TESTS.writing.pte}  accent="bg-purple-50 text-purple-700" color="border-purple-200 hover:border-purple-400" plan={plan} testsUsed={testsUsed} testsLimit={testsLimit} />
      </div>
    </div>
  );
}
