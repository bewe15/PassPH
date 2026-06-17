import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { pickRandomPTETests } from "@/lib/tests/pte-mock-registry";

export async function POST() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: profile } = await supabase
    .from("profiles")
    .select("plan, plan_expires_at, is_admin")
    .eq("id", user.id)
    .single();

  const isAdmin = Boolean(profile?.is_admin);
  const isPaid  = profile?.plan === "pro" || profile?.plan === "basic";
  let isPro = isAdmin || isPaid;
  if (isPaid && !isAdmin && profile?.plan_expires_at) {
    if (new Date(profile.plan_expires_at) < new Date()) isPro = false;
  }

  if (!isPro) {
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);
    const { count } = await supabase
      .from("pte_mock_exam_sessions")
      .select("id", { count: "exact", head: true })
      .eq("user_id", user.id)
      .gte("created_at", startOfMonth.toISOString());
    if ((count ?? 0) >= 1) {
      return NextResponse.json(
        { error: "Free plan is limited to 1 PTE mock exam per month. Upgrade to Pro for unlimited." },
        { status: 403 }
      );
    }
  }

  const tests = pickRandomPTETests();
  const { data, error } = await supabase
    .from("pte_mock_exam_sessions")
    .insert({
      user_id:           user.id,
      assigned_speaking: tests.speaking,
      assigned_writing:  tests.writing,
      assigned_reading:  tests.reading,
      assigned_listening: tests.listening,
    })
    .select("id")
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ sessionId: data.id });
}
