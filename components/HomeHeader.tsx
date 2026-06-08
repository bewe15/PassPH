"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { LayoutDashboard } from "lucide-react";

export function HomeHeader() {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [checked, setChecked] = useState(false);

  async function checkAuth() {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const fullName = user.user_metadata?.full_name as string | undefined;
      const firstName = fullName?.split(" ")[0] ?? user.email?.split("@")[0] ?? "User";
      setUser({ name: firstName });
    } else {
      setUser(null);
    }
    setChecked(true);
  }

  useEffect(() => {
    checkAuth();
    function onPageShow(e: PageTransitionEvent) {
      if (e.persisted) checkAuth();
    }
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  if (!checked) return <div style={{ width: 160, height: 36 }} />;

  if (user) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
          Hi, <span style={{ color: "#67e8f9", fontWeight: 600 }}>{user.name}</span>
        </span>
        <Link href="/dashboard">
          <Button
            size="sm"
            style={{
              background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
              color: "#fff",
              fontWeight: 600,
              gap: 6,
              display: "flex",
              alignItems: "center",
            }}
          >
            <LayoutDashboard className="w-4 h-4" />
            My Dashboard
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
      <Link href="/login" style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>
        Log in
      </Link>
      <Link href="/signup">
        <Button size="sm">Start Free</Button>
      </Link>
    </div>
  );
}
