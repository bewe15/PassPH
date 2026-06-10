"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";

export function GenerateMockButton({ className }: { className?: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    setLoading(true);
    try {
      const res = await fetch("/api/mock/generate", { method: "POST" });
      if (!res.ok) throw new Error("Failed to generate");
      const { sessionId } = await res.json();
      router.push(`/mock/${sessionId}`);
    } catch {
      setLoading(false);
    }
  }

  return (
    <Button onClick={handleGenerate} disabled={loading} className={className}>
      <Shuffle className="w-4 h-4 mr-2" />
      {loading ? "Generating…" : "Generate Mock Exam"}
    </Button>
  );
}
