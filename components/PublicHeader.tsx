"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { createClient } from "@/lib/supabase/client";
import { ChevronLeft, LayoutDashboard } from "lucide-react";

interface PublicHeaderProps {
  backHref?: string;
}

export function PublicHeader({ backHref = "/" }: PublicHeaderProps) {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [checked, setChecked] = useState(false);

  async function checkAuth() {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const fullName = user.user_metadata?.full_name as string | undefined;
      const firstName = fullName?.split(" ")[0] ?? user.email?.split("@")[0] ?? "User";
      setUser({ name: firstName, email: user.email ?? "" });
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
        <div className="flex items-center gap-3 text-sm">
          {!checked ? (
            <div className="w-32 h-8" />
          ) : user ? (
            <>
              <span className="text-slate-500 hidden sm:block">
                Hi, <span className="font-medium text-slate-700">{user.name}</span>
              </span>
              <Link href="/dashboard">
                <Button size="sm" className="gap-1.5">
                  <LayoutDashboard className="w-4 h-4" />
                  My Dashboard
                </Button>
              </Link>
            </>
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
