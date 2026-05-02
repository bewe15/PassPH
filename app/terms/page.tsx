import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions — PassPH",
};

const LAST_UPDATED = "May 2, 2026";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <Link href="/" className="text-slate-400 hover:text-slate-600 transition">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <span className="text-xl font-extrabold text-cyan-500">PassPH</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Terms &amp; Conditions</h1>
        <p className="text-sm text-slate-400 mb-10">Last updated: {LAST_UPDATED}</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">1. About PassPH</h2>
            <p>
              PassPH (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is an independent online practice platform that provides
              IELTS and PTE Academic preparation materials. PassPH is not affiliated with, endorsed by,
              or connected to British Council, IDP Education, Cambridge Assessment English, or Pearson PLC.
              IELTS and PTE Academic are registered trademarks of their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">2. Acceptance of Terms</h2>
            <p>
              By creating an account or using PassPH, you agree to these Terms &amp; Conditions. If you do
              not agree, please do not use the platform. We may update these terms from time to time —
              continued use of the platform after changes means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">3. User Accounts</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You must be at least 13 years old to create an account.</li>
              <li>You are responsible for keeping your password secure and for all activity under your account.</li>
              <li>You must provide accurate information when signing up.</li>
              <li>We reserve the right to suspend or terminate accounts that violate these terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">4. Plans and Payments</h2>
            <p className="mb-3">PassPH offers a Free plan and paid plans (Basic and Pro).</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Free plan: limited to 3 practice tests per month, resets on the 1st of each month.</li>
              <li>Paid plans are billed monthly. All prices are listed in Philippine Peso (₱) unless otherwise stated.</li>
              <li>Payments are processed securely through PayMongo (Philippine users) or Stripe (international users). We do not store your card details.</li>
              <li>Subscriptions renew automatically unless cancelled before the next billing date.</li>
              <li>Refunds are handled on a case-by-case basis. Contact us within 7 days of a charge if you believe there is an error.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">5. Acceptable Use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Share your account with others or resell access to the platform.</li>
              <li>Copy, reproduce, or distribute our practice content without written permission.</li>
              <li>Attempt to reverse-engineer, scrape, or extract content from the platform.</li>
              <li>Use the platform for any unlawful purpose.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">6. Intellectual Property</h2>
            <p>
              All practice passages, questions, model answers, and scoring content on PassPH are original
              materials created for educational purposes. Any resemblance to published third-party articles
              is coincidental. You may not reproduce or redistribute our content without permission.
              Your submitted writing responses remain your own.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">7. Disclaimer of Warranties</h2>
            <p>
              PassPH is provided &quot;as is&quot; without any guarantees. Our band score estimates are
              generated by a rule-based scoring system and are indicative only — they are not
              official IELTS or PTE scores and should not be used as such. Actual exam results may
              differ. We do not guarantee that using PassPH will result in any specific band score.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">8. Limitation of Liability</h2>
            <p>
              To the extent permitted by law, PassPH shall not be liable for any indirect, incidental,
              or consequential damages arising from your use of the platform. Our total liability for
              any claim shall not exceed the amount you paid to us in the 30 days prior to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">9. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Republic of the Philippines. Any disputes
              shall be resolved in the courts of the Philippines.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">10. Contact</h2>
            <p>
              For questions about these terms, email us at{" "}
              <a href="mailto:support@passph.com" className="text-cyan-600 hover:underline">
                support@passph.com
              </a>
              .
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex gap-6 text-sm">
          <Link href="/privacy" className="text-cyan-600 hover:underline">Privacy Policy</Link>
          <Link href="/" className="text-slate-500 hover:text-slate-900">Back to home</Link>
        </div>
      </main>
    </div>
  );
}
