import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ChevronLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — PassPH",
};

const LAST_UPDATED = "May 19, 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <Link href="/" className="text-slate-400 hover:text-slate-600 transition">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <Logo className="h-8 w-auto" />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-400 mb-10">Last updated: {LAST_UPDATED}</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">1. Overview</h2>
            <p>
              PassPH respects your privacy. This policy explains what personal information we collect,
              how we use it, and your rights regarding your data. By using PassPH, you agree to the
              practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">2. Information We Collect</h2>

            <h3 className="font-semibold text-slate-800 mt-4 mb-2">Account Information</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Email address (required to create an account)</li>
              <li>Full name (optional, used for personalised greetings)</li>
              <li>Password (stored as an encrypted hash — we never see your plain-text password)</li>
              <li>Google account details if you sign in with Google</li>
            </ul>

            <h3 className="font-semibold text-slate-800 mt-4 mb-2">Usage Data</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Tests taken, scores, band estimates, and time spent on each test</li>
              <li>Your written responses submitted during writing practice</li>
              <li>Number of tests used per month (for plan limit enforcement)</li>
            </ul>

            <h3 className="font-semibold text-slate-800 mt-4 mb-2">Payment Information</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Payment processing is handled entirely by Stripe</li>
              <li>We do not store credit card numbers, bank account details, or any sensitive financial data</li>
              <li>We receive only a confirmation of successful payment and your plan tier</li>
            </ul>

            <h3 className="font-semibold text-slate-800 mt-4 mb-2">Technical Information</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Browser type and device type (collected automatically by hosting infrastructure)</li>
              <li>IP address (used for security purposes, not stored long-term)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide and personalise the PassPH service (dashboard, scores, history)</li>
              <li>To enforce plan limits and process subscription payments</li>
              <li>To send transactional emails (password reset, payment confirmation)</li>
              <li>To improve our practice content and scoring system</li>
              <li>We do not sell your personal data to third parties</li>
              <li>We do not use your data for advertising purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">4. Data Storage and Security</h2>
            <p className="mb-3">
              Your data is stored securely using{" "}
              <span className="font-medium text-slate-900">Supabase</span>, a trusted cloud database
              provider. Data is stored on servers in Singapore (Southeast Asia region). Supabase
              applies industry-standard encryption in transit (TLS) and at rest.
            </p>
            <p>
              Your written test responses are stored in our database to power your history and
              progress tracking. You can request deletion of your data at any time (see Section 6).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">5. Third-Party Services</h2>
            <div className="space-y-3">
              {[
                { name: "Supabase", purpose: "Database, authentication, and file storage", link: "https://supabase.com/privacy" },
                { name: "Vercel", purpose: "Web hosting and deployment", link: "https://vercel.com/legal/privacy-policy" },
                { name: "Stripe", purpose: "Payment processing (cards, Google Pay, Apple Pay)", link: "https://stripe.com/privacy" },
                { name: "Google", purpose: "Optional Google sign-in (OAuth)", link: "https://policies.google.com/privacy" },
                { name: "Resend", purpose: "Transactional email delivery", link: "https://resend.com/privacy" },
              ].map((s) => (
                <div key={s.name} className="flex items-start gap-3 bg-slate-100 rounded-lg px-4 py-3">
                  <div className="flex-1">
                    <span className="font-semibold text-slate-800">{s.name}</span>
                    <span className="text-slate-500 ml-2">— {s.purpose}</span>
                  </div>
                  <a href={s.link} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-xs shrink-0 mt-0.5">
                    Privacy policy ↗
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">6. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="font-medium">Access</span> — request a copy of the personal data we hold about you</li>
              <li><span className="font-medium">Correction</span> — update your name or email in account settings</li>
              <li><span className="font-medium">Deletion</span> — request that we delete your account and all associated data</li>
              <li><span className="font-medium">Portability</span> — request your test history in a readable format</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email{" "}
              <a href="mailto:support@passph.com" className="text-cyan-600 hover:underline">
                support@passph.com
              </a>{" "}
              with the subject &quot;Data Request&quot;. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">7. Data Retention</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Your account data is kept as long as your account is active</li>
              <li>Test results and writing responses are retained to power your history dashboard</li>
              <li>If you delete your account, all personal data is removed within 30 days</li>
              <li>Payment records may be retained as required by Philippine tax regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">8. Cookies</h2>
            <p>
              PassPH uses only essential cookies required for authentication (keeping you logged in).
              We do not use advertising cookies or third-party tracking cookies. No cookie consent
              banner is shown because we only use strictly necessary cookies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">9. Children&apos;s Privacy</h2>
            <p>
              PassPH is not intended for children under 13. We do not knowingly collect personal
              information from children under 13. If you believe a child has created an account,
              please contact us and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant
              changes via email or a notice on the dashboard. The &quot;Last updated&quot; date at the
              top of this page reflects the most recent revision.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">11. Contact Us</h2>
            <p>
              For any privacy-related questions or requests, contact us at{" "}
              <a href="mailto:support@passph.com" className="text-cyan-600 hover:underline">
                support@passph.com
              </a>
              .
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex gap-6 text-sm">
          <Link href="/terms" className="text-cyan-600 hover:underline">Terms &amp; Conditions</Link>
          <Link href="/" className="text-slate-500 hover:text-slate-900">Back to home</Link>
        </div>
      </main>
    </div>
  );
}
