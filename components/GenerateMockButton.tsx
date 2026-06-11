"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shuffle, Lock } from "lucide-react";

export function GenerateMockButton({ className }: { className?: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [limitReached, setLimitReached] = useState(false);

  async function handleGenerate() {
    setLoading(true);
    try {
      const res = await fetch("/api/mock/generate", { method: "POST" });
      if (res.status === 403) {
        setLimitReached(true);
        setLoading(false);
        return;
      }
      if (!res.ok) throw new Error("Failed to generate");
      const { sessionId } = await res.json();
      router.push(`/mock/${sessionId}`);
    } catch {
      setLoading(false);
    }
  }

  if (limitReached) {
    return (
      <div className="flex flex-col items-center gap-3 py-2">
        <div className="flex items-center gap-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
          <Lock className="w-4 h-4 shrink-0" />
          <span>You&apos;ve used your 1 free mock exam this month. Upgrade to Pro for unlimited exams.</span>
        </div>
        <Link href="/pricing">
          <Button size="sm">Upgrade to Pro →</Button>
        </Link>
      </div>
    );
  }

  return (
    <Button onClick={handleGenerate} disabled={loading} className={className}>
      <Shuffle className="w-4 h-4 mr-2" />
      {loading ? "Generating…" : "Generate Mock Exam"}
    </Button>
  );
}
