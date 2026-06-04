"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ChevronLeft, Send, CheckCircle, AlertCircle, Mail, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SUBJECTS = [
  "General Inquiry",
  "Technical Issue",
  "Billing / Subscription",
  "Content Feedback",
  "Partnership",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to send.");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-slate-400 hover:text-slate-600 transition">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <Logo className="h-8 w-auto" />
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/login" className="text-slate-500 hover:text-slate-900 transition">Log in</Link>
            <Link href="/signup">
              <Button size="sm">Sign up free</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3">Get in Touch</h1>
          <p className="text-slate-500 text-lg">Have a question, issue, or feedback? We&apos;d love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Info cards */}
          <div className="space-y-4">
            {[
              {
                icon: Mail,
                title: "Email Us",
                desc: "Send us a message and we'll reply as soon as possible.",
                detail: "mygraphicsworks@gmail.com",
              },
              {
                icon: Clock,
                title: "Response Time",
                desc: "We typically respond within 1–2 business days.",
                detail: "Mon – Fri, 9am – 6pm PHT",
              },
              {
                icon: MessageSquare,
                title: "Feedback Welcome",
                desc: "Found a bug or have a suggestion? Tell us — we read everything.",
                detail: "Content, scoring, features",
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="py-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-cyan-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                      <p className="text-xs text-cyan-600 font-medium mt-1">{item.detail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact form */}
          <div className="md:col-span-2">
            <Card>
              <CardContent className="py-8 px-8">
                {status === "success" ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h2>
                    <p className="text-slate-500 text-sm mb-6">
                      Thanks for reaching out. We&apos;ll get back to you within 1–2 business days.
                    </p>
                    <Button variant="outline" onClick={() => setStatus("idle")}>Send another message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Juan dela Cruz"
                          className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="juan@email.com"
                          className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Subject</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition bg-white"
                      >
                        <option value="">Select a subject...</option>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Write your message here..."
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-600">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {errorMsg}
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full gap-2"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 px-6 mt-16 text-center text-sm text-slate-400">
        <p>© 2026 Scoravo. Practice IELTS &amp; PTE with confidence.</p>
        <div className="flex items-center justify-center gap-6 mt-2">
          <Link href="/privacy" className="hover:text-slate-600 transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-slate-600 transition">Terms &amp; Conditions</Link>
        </div>
        <p className="text-xs text-slate-300 mt-3 max-w-2xl mx-auto">
          Scoravo is an independent practice platform not affiliated with, endorsed by, or connected to British Council, IDP Education, Cambridge Assessment English, or Pearson PLC. IELTS® and PTE Academic® are registered trademarks of their respective owners.
        </p>
      </footer>
    </div>
  );
}
