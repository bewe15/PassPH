import { SupabaseClient } from "@supabase/supabase-js";

interface ProfileExpiry {
  plan: string;
  plan_expires_at?: string | null;
  is_admin?: boolean | null;
}

/**
 * Checks whether the user's paid plan has expired.
 * Admin users always get Pro access regardless of plan or expiry.
 * If expired, downgrades the profile to "free" in the database and returns "free".
 * If not expired (or already free), returns the current plan unchanged.
 */
export async function enforcePlanExpiry(
  supabase: SupabaseClient,
  userId: string,
  profile: ProfileExpiry
): Promise<string> {
  const { plan, plan_expires_at, is_admin } = profile;

  // Admin users always get Pro — never expires, never downgrades
  if (is_admin) return "pro";

  // Free plan never expires — nothing to check
  if (plan === "free" || !plan_expires_at) return plan;

  const expiresAt = new Date(plan_expires_at);
  const now = new Date();

  if (expiresAt < now) {
    // Plan has expired — downgrade to free
    await supabase
      .from("profiles")
      .update({ plan: "free", plan_expires_at: null })
      .eq("id", userId);

    console.log(`Plan expired for user ${userId} — downgraded to free`);
    return "free";
  }

  return plan;
}
