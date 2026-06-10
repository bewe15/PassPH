"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, PenLine, Headphones, ChevronLeft, ChevronRight } from "lucide-react";

const PAGE_SIZE = 3;

const ALL_LISTENING_TESTS = {
  ielts: Array.from({ length: 20 }, (_, i) => ({
    label: `Listening Test ${i + 1}`,
    sub: "40 questions • 30 min",
    id: `ielts-listening-${i + 1}`,
    available: i < 1, // Only Test 1 available for now
    route: "listen",
  })),
};

const ALL_TESTS = {
  reading: {
    ielts: Array.from({ length: 20 }, (_, i) => ({
      label: `Reading Test ${i + 1}`,
      sub: "40 questions • 60 min",
      id: `ielts-reading-${i + 1}`,
      free: true, // Unlimited for all users
      route: "test",
    })),
    pte: Array.from({ length: 20 }, (_, i) => ({
      label: `Reading Test ${i + 1}`,
      sub: "5 tasks • 30 min",
      id: `pte-reading-${i + 1}`,
      free: true, // Unlimited for all users
      route: "test",
    })),
  },
  writing: {
    ielts: Array.from({ length: 20 }, (_, i) => ({
      label: `Writing Test ${i + 1}`,
      sub: "Task 1 + Task 2 • 60 min",
      id: `ielts-writing-${i + 1}`,
      free: true, // Unlimited practice for all users (AI feedback requires Pro)
      route: "write",
    })),
    pte: Array.from({ length: 20 }, (_, i) => ({
      label: `Writing Test ${i + 1}`,
      sub: "SWT + Essay • 30 min",
      id: `pte-writing-${i + 1}`,
      free: true, // Unlimited practice for all users (AI feedback requires Pro)
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
}: {
  exam: string;
  type: "reading" | "writing";
  tests: typeof ALL_TESTS.reading.ielts;
  accent: string;
  color: string;
}) {
  // All users see all tests
  const visibleTests = tests;
  const totalPages   = Math.ceil(visibleTests.length / PAGE_SIZE);
  const [page, setPage] = useState(0);
  const paged = visibleTests.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

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
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
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
          {paged.map((test) => (
            <div key={test.id} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">{test.label}</p>
                <p className="text-xs text-slate-500">{test.sub}</p>
              </div>
              <Link href={`/${test.route}/${test.id}`}>
                <Button size="sm">Start</Button>
              </Link>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ListeningCard({
  tests, accent, color,
}: {
  tests: typeof ALL_LISTENING_TESTS.ielts;
  accent: string;
  color: string;
}) {
  const totalPages = Math.ceil(tests.length / PAGE_SIZE);
  const [page, setPage] = useState(0);
  const paged = tests.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <Card className={`border-2 transition ${color}`}>
      <CardContent className="py-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold px-2 py-0.5 rounded ${accent}`}>IELTS</span>
            <span className="text-slate-900 font-bold">Listening</span>
          </div>
          {totalPages > 1 && (
            <div className="flex items-center gap-1">
              <button onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0} className="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-100 disabled:opacity-30">
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs text-slate-400">{page + 1}/{totalPages}</span>
              <button onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))} disabled={page === totalPages - 1} className="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-100 disabled:opacity-30">
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
        <div className="space-y-2 min-h-[108px]">
          {paged.map((test) => (
            <div key={test.id} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">{test.label}</p>
                <p className="text-xs text-slate-500">{test.sub}</p>
              </div>
              {test.available ? (
                <Link href={`/${test.route}/${test.id}`}>
                  <Button size="sm">Start</Button>
                </Link>
              ) : (
                <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">Coming soon</span>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function TestGrid({ plan }: { plan: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-slate-900 mb-1">Start a Practice Test</h2>
      <p className="text-sm text-slate-500 mb-4">Reading, Listening &amp; Writing tests — unlimited and free.</p>

      {/* Listening */}
      <div className="flex items-center gap-2 mb-3">
        <Headphones className="w-4 h-4 text-slate-400" />
        <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Listening</span>
        <span className="text-xs text-green-500 font-medium">Unlimited ✓</span>
        <span className="text-xs text-amber-500 font-medium ml-1">1 test available — more coming soon</span>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <ListeningCard tests={ALL_LISTENING_TESTS.ielts} accent="bg-blue-50 text-blue-700" color="border-blue-200 hover:border-blue-400" />
        <div className="rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center p-6">
          <p className="text-sm text-slate-400 text-center">PTE Listening<br /><span className="text-xs">Coming soon</span></p>
        </div>
      </div>

      {/* Reading */}
      <div className="flex items-center gap-2 mb-3">
        <BookOpen className="w-4 h-4 text-slate-400" />
        <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Reading</span>
        <span className="text-xs text-green-500 font-medium">Unlimited ✓</span>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <TestCard exam="IELTS" type="reading" tests={ALL_TESTS.reading.ielts} accent="bg-blue-50 text-blue-700"   color="border-blue-200 hover:border-blue-400" />
        <TestCard exam="PTE"   type="reading" tests={ALL_TESTS.reading.pte}   accent="bg-purple-50 text-purple-700" color="border-purple-200 hover:border-purple-400" />
      </div>

      {/* Writing */}
      <div className="flex items-center gap-2 mb-3">
        <PenLine className="w-4 h-4 text-slate-400" />
        <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Writing</span>
        <span className="text-xs text-green-500 font-medium">Unlimited ✓</span>
        {plan !== "pro" && (
          <span className="text-xs text-slate-400 ml-1">(AI feedback available on Pro)</span>
        )}
        {plan === "pro" && (
          <span className="text-xs text-cyan-500 font-medium ml-1">AI Feedback enabled ✓</span>
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <TestCard exam="IELTS" type="writing" tests={ALL_TESTS.writing.ielts} accent="bg-blue-50 text-blue-700"   color="border-blue-200 hover:border-blue-400" />
        <TestCard exam="PTE"   type="writing" tests={ALL_TESTS.writing.pte}   accent="bg-purple-50 text-purple-700" color="border-purple-200 hover:border-purple-400" />
      </div>
    </div>
  );
}
