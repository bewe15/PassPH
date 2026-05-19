import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  throw new Error("Sentry test error — PassPH monitoring is working!");
  return NextResponse.json({ data: "ok" });
}
