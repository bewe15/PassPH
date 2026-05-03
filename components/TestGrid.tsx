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
      free: false, // Writing requires Basic or Pro
      route: "write",
    })),
    pte: Array.from({ length: 20 }, (_, i) => ({
      label: `Writing Test ${i + 1}`,
      sub: "SWT + Essay • 30 min",
      id: `pte-writing-${i + 1}`,
      free: false, // Writing requires Basic or Pro
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
  writingUsed,
  writingLimit,
}: {
  exam: string;
  type: "reading" | "writing";
  tests: typeof ALL_TESTS.reading.ielts;
  accent: string;
  color: string;
  plan: string;
  testsUsed: number;
  testsLimit: number;
  writingUsed: number;
  writingLimit: number;
}) {
  const isFree  = plan === "free";
  const isBasic = plan === "basic";
  const isPro   = plan === "pro";

  // Visible tests per plan & type
  const visibleTests = isFree ? tests.slice(0, 3) : tests;
  const totalPages   = Math.ceil(visibleTests.length / PAGE_SIZE);
  const [page, setPage] = useState(0);
  const paged = visibleTests.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  // Over-limit checks
  const overReadingLimit  = type === "reading" && isFree  && testsUsed   >= testsLimit;
  const overWritingLimit  = type === "writing" && isBasic && writingUsed >= writingLimit;

  // Label for writing limit badge (Basic users)
  const writingLimitLabel = isBasic
    ? `${writingUsed}/${writingLimit} used this month`
    : null;

  return (
    <Card className={`border-2 transition ${color}`}>
      <CardContent className="py-5">
        {/* Card header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-xs font-bold px-2 py-0.5 rounded ${accent}`}>{exam}</span>
            <span className="text-slate-900 font-bold capitalize">
              {type === "reading" ? "Reading" : "Writing"}
            </span>
            {/* Show Basic writing limit */}
            {type === "writing" && isBasic && (
              <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                overWritingLimit
                  ? "bg-red-100 text-red-600"
                  : "bg-amber-50 text-amber-600"
              }`}>
                {writingLimitLabel}
              </span>
            )}
          </div>

          {/* Pagination (basic/pro only) */}
          {!isFree && totalPages > 1 && (
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

        {/* Test rows */}
        <div className="space-y-2 min-h-[108px]">
          {paged.map((test) => {
            // Locked: writing for free users, or reading tests 4-20 for free users
            const locked = !test.free && isFree;

            return (
              <div key={test.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">{test.label}</p>
                  <p className="text-xs text-slate-500">{test.sub}</p>
                </div>

                {locked ? (
                  // Locked for free users → needs Basic or Pro
                  <Link href="/pricing">
                    <Button size="sm" className="opacity-60 bg-slate-200 text-slate-500 hover:bg-slate-300">
                      <Lock className="w-3 h-3 mr-1" />
                      {type === "writing" ? "Basic" : "Basic"}
                    </Button>
                  </Link>
                ) : overReadingLimit ? (
                  // Free user hit 3 reading tests/month
                  <Link href="/pricing">
                    <Button size="sm" className="bg-red-100 text-red-600 hover:bg-red-200 border-0">
                      <Lock className="w-3 h-3 mr-1" /> Limit reached
                    </Button>
                  </Link>
                ) : overWritingLimit ? (
                  // Basic user hit 3 writing tests/month
                  <Link href="/pricing">
                    <Button size="sm" className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-0">
                      <Lock className="w-3 h-3 mr-1" /> Upgrade Pro
                    </Button>
                  </Link>
                ) : isPro && type === "writing" ? (
                  // Pro user — writing unlocked fully
                  <Link href={`/${test.route}/${test.id}`}>
                    <Button size="sm">Start</Button>
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
  writingUsed,
  writingLimit,
}: {
  plan: string;
  testsUsed: number;
  testsLimit: number;
  writingUsed: number;
  writingLimit: number;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-slate-900 mb-1">Start a Practice Test</h2>
      <p className="text-sm text-slate-500 mb-4">Reading &amp; Writing tests available for both IELTS and PTE Academic.</p>

      {/* Reading */}
      <div className="flex items-center gap-2 mb-3">
        <BookOpen className="w-4 h-4 text-slate-400" />
        <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Reading</span>
        {plan === "free" && (
          <span className="text-xs text-slate-400">(3 tests/month on Free)</span>
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <TestCard exam="IELTS" type="reading" tests={ALL_TESTS.reading.ielts} accent="bg-blue-50 text-blue-700"   color="border-blue-200 hover:border-blue-400"   plan={plan} testsUsed={testsUsed} testsLimit={testsLimit} writingUsed={writingUsed} writingLimit={writingLimit} />
        <TestCard exam="PTE"   type="reading" tests={ALL_TESTS.reading.pte}   accent="bg-purple-50 text-purple-700" color="border-purple-200 hover:border-purple-400" plan={plan} testsUsed={testsUsed} testsLimit={testsLimit} writingUsed={writingUsed} writingLimit={writingLimit} />
      </div>

      {/* Writing */}
      <div className="flex items-center gap-2 mb-3">
        <PenLine className="w-4 h-4 text-slate-400" />
        <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Writing</span>
        {plan === "free"  && <span className="text-xs text-slate-400">(Basic or Pro required)</span>}
        {plan === "basic" && <span className="text-xs text-slate-400">(3 tests/month — upgrade Pro for unlimited)</span>}
        {plan === "pro"   && <span className="text-xs text-green-500 font-medium">Unlimited ✓</span>}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <TestCard exam="IELTS" type="writing" tests={ALL_TESTS.writing.ielts} accent="bg-blue-50 text-blue-700"   color="border-blue-200 hover:border-blue-400"   plan={plan} testsUsed={testsUsed} testsLimit={testsLimit} writingUsed={writingUsed} writingLimit={writingLimit} />
        <TestCard exam="PTE"   type="writing" tests={ALL_TESTS.writing.pte}   accent="bg-purple-50 text-purple-700" color="border-purple-200 hover:border-purple-400" plan={plan} testsUsed={testsUsed} testsLimit={testsLimit} writingUsed={writingUsed} writingLimit={writingLimit} />
      </div>
    </div>
  );
}
