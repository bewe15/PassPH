import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { pickRandomTests } from "@/lib/tests/mock-registry";

export async function POST() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const tests = pickRandomTests();

  const { data, error } = await supabase
    .from("mock_exam_sessions")
    .insert({
      user_id: user.id,
      assigned_listening: tests.listening,
      assigned_reading: tests.reading,
      assigned_writing: tests.writing,
    })
    .select("id")
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ sessionId: data.id });
}
