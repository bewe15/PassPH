"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { LayoutDashboard } from "lucide-react";

/**
 * Auth-aware header for the public landing page (dark glassmorphism style).
 * - Shows "Go to Dashboard" when the user is already logged in.
 * - Shows "Log in" + "Start Free" when not logged in.
 * - Re-checks auth on bfcache restore (browser back button) to prevent stale sessions.
 */
export function HomeHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checked, setChecked] = useState(false);

  async function checkAuth() {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    setIsLoggedIn(!!user);
    setChecked(true);
  }

  useEffect(() => {
    checkAuth();

    // Re-check when page is restored from bfcache (browser back/forward)
    function onPageShow(e: PageTransitionEvent) {
      if (e.persisted) checkAuth();
    }
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  // Render nothing until we know auth state (avoids flicker)
  if (!checked) {
    return <div style={{ width: 140, height: 36 }} />;
  }

  if (isLoggedIn) {
    return (
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
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
      <Link
        href="/login"
        style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.85)", textDecoration: "none" }}
      >
        Log in
      </Link>
      <Link href="/signup">
        <Button size="sm">Start Free</Button>
      </Link>
    </div>
  );
}
