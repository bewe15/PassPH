"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { createClient } from "@/lib/supabase/client";
import { ChevronLeft, LayoutDashboard } from "lucide-react";

interface PublicHeaderProps {
  /** Show a back arrow — pass the href it should navigate to */
  backHref?: string;
}

/**
 * Auth-aware header for public pages (pricing, contact, privacy, terms).
 * - Shows "Go to Dashboard" when the user is logged in.
 * - Shows "Log in" + "Sign up free" when not logged in.
 * - Re-checks auth on bfcache restore to prevent stale session bugs.
 */
export function PublicHeader({ backHref = "/" }: PublicHeaderProps) {
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

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Left: back arrow + logo */}
        <div className="flex items-center gap-3">
          <Link href={backHref} className="text-slate-400 hover:text-slate-600 transition">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <Logo className="h-8 w-auto" />
        </div>

        {/* Right: auth buttons */}
        <div className="flex items-center gap-4 text-sm">
          {!checked ? (
            // Invisible placeholder to prevent layout shift
            <div className="w-28 h-8" />
          ) : isLoggedIn ? (
            <Link href="/dashboard">
              <Button size="sm" className="gap-1.5">
                <LayoutDashboard className="w-4 h-4" />
                My Dashboard
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/login" className="text-slate-500 hover:text-slate-900 transition">
                Log in
              </Link>
              <Link href="/signup">
                <Button size="sm">Sign up free</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
