import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckCircle, BookOpen, Headphones, PenLine,
  Star, ArrowRight, Zap, Target, Clock,
} from "lucide-react";


export default function LandingPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          FIXED HEADER — must live OUTSIDE any
          animated/transformed ancestor
      ═══════════════════════════════════════════ */}
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          background: "rgba(10,14,39,0.75)",
          borderBottom: "1px solid rgba(6,182,212,0.12)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          padding: "18px 0",
        }}
      >
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            gap: 48,
          }}
        >
          {/* Logo */}
          <span style={{ fontSize: 22, fontWeight: 800, color: "#06b6d4", letterSpacing: "-0.02em", flexShrink: 0 }}>
            PassPH
          </span>

          {/* Nav links */}
          <div style={{ display: "flex", gap: 36, flex: 1, justifyContent: "center" }} className="hidden md:flex">
            {[["#features","Features"],["#pricing","Pricing"],["#faq","FAQ"]].map(([href,label]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-white/85 hover:text-cyan-400 transition-colors duration-200 no-underline"
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
            <Link href="/login" style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>
              Log in
            </Link>
            <Link href="/signup">
              <Button size="sm">Start Free</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* ═══════════════════════════════════════════
          PAGE BODY — scrollable, starts at top-0
          Hero has pt-[190px] to clear fixed header
      ═══════════════════════════════════════════ */}
      <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>

        {/* ── HERO ── */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(180deg, #0a0e27 0%, #0d1f3a 30%, #0b2e4a 60%, #0a0e27 100%)",
            padding: "190px 20px 80px",
            color: "white",
          }}
        >
          {/* Purple glow — top right */}
          <div style={{
            position: "absolute", top: "-50%", right: "-10%",
            width: 800, height: 800, borderRadius: "50%", pointerEvents: "none",
            background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
          }} />
          {/* Cyan glow — bottom left */}
          <div style={{
            position: "absolute", bottom: "-20%", left: "-20%",
            width: 600, height: 600, borderRadius: "50%", pointerEvents: "none",
            background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          }} />

          {/* Diagonal gradient line */}
          <div className="gradient-line" />

          {/* Wave SVG — full size, 0.3 opacity */}
          <svg className="hero-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 500" preserveAspectRatio="none">
            <path className="wave wave1" d="M0,200 Q300,150 600,200 T1200,200" />
            <path className="wave wave2" d="M0,300 Q300,350 600,300 T1200,300" />
            <path className="wave wave3" d="M0,150 Q300,100 600,150 T1200,150" />
            <path className="wave wave4" d="M0,350 Q300,400 600,350 T1200,350" />
          </svg>

          {/* Hero content */}
          <div style={{ position: "relative", zIndex: 2, maxWidth: 860, margin: "0 auto", textAlign: "center" }}>

            {/* Label */}
            <p style={{ fontSize: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", color: "#a855f7", marginBottom: 24 }}>
              Practice IELTS &amp; PTE
            </p>

            {/* Headline */}
            <h1 style={{ fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>
              <span style={{
                display: "block",
                fontSize: "clamp(40px,5.5vw,68px)",
                background: "linear-gradient(135deg, #ec4899, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Pass with confidence.
              </span>
              <span style={{
                display: "block",
                fontSize: "clamp(38px,5.2vw,64px)",
                color: "#ffffff",
              }}>
                Affordable exam prep
              </span>
            </h1>

            {/* Subtext */}
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.60)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 44px" }}>
              Self-serve practice tests with AI feedback. Built for Filipino nurses, students,
              and OFWs preparing to work abroad.
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/signup" style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                color: "white", padding: "11px 24px", borderRadius: 8,
                fontWeight: 400, fontSize: 15, textDecoration: "none", display: "inline-block",
              }}>
                Start Free
              </Link>
              <a href="#pricing" style={{
                background: "rgba(6,182,212,0.12)", color: "#06b6d4",
                padding: "11px 24px", border: "1px solid rgba(6,182,212,0.3)", borderRadius: 8,
                fontWeight: 400, fontSize: 15, textDecoration: "none", display: "inline-block",
              }}>
                View Pricing
              </a>
            </div>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section className="border-y border-slate-100 bg-slate-50 py-8 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Active Learners" },
              { value: "₱399", label: "Pro / month" },
              { value: "20+", label: "Practice Tests" },
              { value: "4.9★", label: "User Rating" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-normal text-cyan-500">{s.value}</p>
                <p className="text-sm text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features ── */}
        <section id="features" className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-extrabold mb-3 text-slate-900">Everything you need to pass</h2>
              <p className="text-slate-500">Built specifically for Filipino IELTS and PTE takers</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Target,    title: "Exam-style Practice Tests", desc: "Full-length and mini tests that mirror the real IELTS and PTE format exactly." },
                { icon: Zap,       title: "Instant Scores & Feedback",  desc: "Get your band score estimate immediately after each test with detailed explanations." },
                { icon: Clock,     title: "Practice Anytime",           desc: "No fixed schedule. Study at 2am or during your lunch break — your choice." },
                { icon: BookOpen,  title: "Reading Section",            desc: "Multiple choice, true/false, fill in the blank — all question types covered." },
                { icon: PenLine,   title: "Writing Section",            desc: "Timed writing tasks with model answers and band descriptor self-assessment." },
                { icon: Headphones,title: "Listening Section",          desc: "Coming soon — audio-based questions with exam-style player." },
              ].map((f) => (
                <div key={f.title} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-cyan-400 hover:shadow-md transition">
                  <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-cyan-500" />
                  </div>
                  <h3 className="font-bold mb-2 text-slate-900">{f.title}</h3>
                  <p className="text-sm text-slate-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section id="how-it-works" className="py-20 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-extrabold mb-3 text-slate-900">How it works</h2>
            <p className="text-slate-500">3 simple steps to start improving your score</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Sign up for free",    desc: "Create your account in 30 seconds. No credit card required." },
              { step: "02", title: "Take a practice test", desc: "Choose IELTS or PTE. Pick a mini or full test. Start immediately." },
              { step: "03", title: "See your score",       desc: "Get instant results, band score estimate, and answer explanations." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="text-5xl font-extrabold text-cyan-400/40 mb-3">{s.step}</div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">{s.title}</h3>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Comparison ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-extrabold mb-3 text-slate-900">Why Filipinos choose PassPH</h2>
              <p className="text-slate-500">Compare us to the alternatives</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 text-slate-400 font-medium"></th>
                    <th className="py-3 px-4 text-cyan-500 font-normal">PassPH</th>
                    <th className="py-3 px-4 text-slate-400 font-medium">Review Centers</th>
                    <th className="py-3 px-4 text-slate-400 font-medium">Global Platforms</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Price",            "₱199–₱399/mo",  "₱3,500–₱10,000", "₱4,000–₱6,000/mo"],
                    ["Schedule",         "Anytime",        "Fixed classes",   "Anytime"],
                    ["Filipino-focused", "✓",              "✓",               "✗"],
                    ["AI feedback",      "✓ Coming soon",  "✗",               "Some"],
                    ["Progress tracking","✓",              "✗",               "Some"],
                  ].map(([feature, ...cols]) => (
                    <tr key={feature} className="border-b border-slate-100">
                      <td className="py-3 px-4 text-slate-700 font-medium">{feature}</td>
                      <td className="py-3 px-4 text-center text-cyan-500 font-normal">{cols[0]}</td>
                      <td className="py-3 px-4 text-center text-slate-400">{cols[1]}</td>
                      <td className="py-3 px-4 text-center text-slate-400">{cols[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" className="py-20 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-extrabold mb-3 text-slate-900">Simple, affordable pricing</h2>
              <p className="text-slate-500">Start free. Upgrade when you are ready.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name:"Free",  price:"₱0",   period:"forever",  desc:"Try before you commit",        features:["3 practice tests/month","Reading section only","Basic score report"],                                    cta:"Get started free", highlight:false },
                { name:"Basic", price:"₱199", period:"/month",   desc:"For regular practice",         features:["Unlimited Reading tests","Unlimited Listening tests","Detailed score report","Progress tracking"],       cta:"Start Basic",      highlight:false },
                { name:"Pro",   price:"₱399", period:"/month",   desc:"Everything you need to pass",  features:["Everything in Basic","AI Writing feedback","AI Speaking scoring","Band score estimates","Priority support"], cta:"Start Pro",        highlight:true  },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-xl p-6 border flex flex-col ${plan.highlight ? "border-cyan-400 bg-white shadow-lg shadow-cyan-100" : "border-slate-200 bg-white"}`}
                >
                  {plan.highlight && <span className="text-xs font-normal text-cyan-500 uppercase tracking-widest mb-3">Most Popular</span>}
                  <h3 className="text-xl font-extrabold mb-1 text-slate-900">{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-3xl font-normal text-cyan-500">{plan.price}</span>
                    <span className="text-slate-400 text-sm mb-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-6">{plan.desc}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/signup">
                    <Button className={`w-full ${!plan.highlight ? "bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-50" : ""}`}>
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-slate-400 mt-6">
              Also available: ₱999 one-time for 3 months Pro • Australian pricing in AUD at checkout
            </p>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-extrabold mb-3 text-slate-900">What Filipinos are saying</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name:"Maria Santos",  role:"Nurse, Manila",  quote:"I got Band 7.5 on my first try! PassPH practice tests were so similar to the real exam." },
                { name:"John dela Cruz",role:"OFW, Dubai",     quote:"Way cheaper than review centers and I can practice during my night shift breaks. Highly recommend!" },
                { name:"Ana Reyes",     role:"Student, Cebu",  quote:"The AI feedback on my writing was super helpful. Got specific suggestions I could act on right away." },
              ].map((t) => (
                <div key={t.name} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-sm text-slate-600 mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <p className="font-semibold text-sm text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-20 px-6 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center mb-14 text-slate-900">Frequently asked questions</h2>
            <div className="space-y-6">
              {[
                { q:"Is PassPH really free to start?",                     a:"Yes! You get 3 free practice tests every month with no credit card required. Upgrade anytime when you need more." },
                { q:"How is PassPH different from free websites?",          a:"Free sites give you questions but no feedback or tracking. PassPH gives you band score estimates, detailed explanations, and tracks your improvement over time." },
                { q:"Can I use PayMongo or GCash?",                         a:"Yes — Philippine users can pay via GCash, Maya, or credit/debit cards through PayMongo. Australian users pay in AUD via Stripe." },
                { q:"Are the practice tests similar to the real exam?",     a:"Our tests follow the exact same format, question types, and difficulty levels — all original questions created to match official standards." },
                { q:"Can I cancel anytime?",                                a:"Yes, cancel anytime from your account settings. No lock-in contracts." },
              ].map((item) => (
                <div key={item.q} className="border-b border-slate-200 pb-6">
                  <h4 className="font-semibold mb-2 text-slate-900">{item.q}</h4>
                  <p className="text-sm text-slate-500">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-20 px-6 text-center bg-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-4 text-slate-900">Ready to pass your exam?</h2>
            <p className="text-slate-500 mb-8">Start with 3 free tests. No credit card needed.</p>
            <Link href="/signup">
              <Button size="lg" className="px-10">
                Start Free Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-slate-200 bg-slate-50 py-8 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <span className="font-bold text-cyan-500 text-lg">PassPH</span>
            <p>© 2026 PassPH. Practice IELTS &amp; PTE with confidence.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-900 transition">Privacy</a>
              <a href="#" className="hover:text-slate-900 transition">Terms</a>
              <a href="#" className="hover:text-slate-900 transition">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
