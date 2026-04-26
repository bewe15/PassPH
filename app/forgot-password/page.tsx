import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-extrabold text-cyan-500">PassPH</Link>
          <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mt-6 mb-4">
            <Mail className="w-6 h-6 text-cyan-500" />
          </div>
          <h1 className="text-xl font-bold text-slate-900 mb-1">Reset your password</h1>
          <p className="text-sm text-slate-500">
            Enter your email and we&apos;ll send you a link to reset your password.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email address</label>
              <Input type="email" placeholder="you@email.com" className="border-slate-300 focus:ring-cyan-500" />
            </div>
            <Button className="w-full" size="md">Send reset link</Button>
          </form>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition"
          >
            <ChevronLeft className="w-4 h-4" /> Back to log in
          </Link>
        </div>
      </div>
    </div>
  );
}
