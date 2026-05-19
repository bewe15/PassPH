import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { enforcePlanExpiry } from "@/lib/enforce-plan-expiry";

export default async function TestLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("plan, plan_expires_at, tests_used_this_month")
    .eq("id", user.id)
    .single();

  const plan = await enforcePlanExpiry(supabase, user.id, {
    plan: profile?.plan ?? "free",
    plan_expires_at: profile?.plan_expires_at,
  });
  const testsUsed = profile?.tests_used_this_month ?? 0;
  const testsLimit = 3;

  if (plan === "free" && testsUsed >= testsLimit) {
    redirect("/pricing?reason=limit");
  }

  return <>{children}</>;
}
