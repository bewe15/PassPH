"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      setIsLoggedIn(!!user);
      setAuthReady(true);
    });
  }, []);

  useEffect(() => {
    // ── Body styles (landing-page specific) ──────────────────────────────────
    document.body.style.background = "#04060d";
    document.body.style.color = "#eef2f8";
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.background = "";
      document.body.style.color = "";
      document.body.style.overflowX = "";
    };
  }, []);

  useEffect(() => {
    // ── Nav scroll state ──────────────────────────────────────────────────────
    const nav = document.getElementById("nav");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // ── Dashboard sparkline ───────────────────────────────────────────────────
    const spark = document.getElementById("dashSpark");
    if (spark) {
      [42, 55, 48, 63, 58, 72, 80, 76, 88].forEach((h) => {
        const b = document.createElement("i");
        b.style.height = h + "%";
        spark.appendChild(b);
      });
    }

    // ── Waveform bars ─────────────────────────────────────────────────────────
    const wave = document.querySelector(".wave");
    if (wave) {
      [10, 18, 8, 24, 14, 20, 10, 22, 12, 16, 8, 20].forEach((h, i) => {
        const s = document.createElement("span");
        s.style.height = h + "px";
        s.style.animationDelay = i * 0.09 + "s";
        wave.appendChild(s);
      });
    }

    // ── Scroll-reveal for cards & steps ──────────────────────────────────────
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const i = parseInt(el.dataset.i || "0", 10);
          setTimeout(() => {
            el.classList.add("in");
            el.querySelectorAll<HTMLElement>(".bar-fill").forEach((b, k) =>
              setTimeout(() => { b.style.width = b.dataset.w || "0"; }, 220 + k * 140)
            );
            const arc = el.querySelector<SVGPathElement>(".arc-fg");
            if (arc) setTimeout(() => { arc.style.strokeDashoffset = String(126 - 126 * 0.835); }, 260);
          }, i * 90);
          reveal.unobserve(el);
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll(".card, .step").forEach((c) => reveal.observe(c));

    // ── Dashboard gauge + sparkline animate when visible ──────────────────────
    const dashEl = document.querySelector<HTMLElement>(".dash");
    if (dashEl) {
      const dashIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const arc = document.querySelector<SVGPathElement>(".dash-gauge .arc-fg");
            if (arc) arc.style.strokeDashoffset = String(195 - 195 * 0.835);
            document.querySelectorAll<HTMLElement>(".dash-spark i").forEach((b, k) =>
              setTimeout(() => { b.style.transform = "scaleY(1)"; }, k * 70)
            );
            dashIo.disconnect();
          });
        },
        { threshold: 0.3 }
      );
      dashIo.observe(dashEl);
    }

    // ── Pointer-follow glow on cards ──────────────────────────────────────────
    document.querySelectorAll<HTMLElement>(".card").forEach((card) => {
      card.addEventListener("pointermove", (ev) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", ev.clientX - r.left + "px");
        card.style.setProperty("--my", ev.clientY - r.top + "px");
      });
    });

    // ── FAQ accordion ─────────────────────────────────────────────────────────
    document.querySelectorAll<HTMLElement>("#faqList .qa").forEach((qa) => {
      qa.querySelector("button")?.addEventListener("click", () => {
        const open = qa.classList.contains("open");
        document.querySelectorAll<HTMLElement>("#faqList .qa").forEach((o) => {
          o.classList.remove("open");
          const b = o.querySelector<HTMLElement>(".body");
          if (b) b.style.maxHeight = "";
        });
        if (!open) {
          qa.classList.add("open");
          const b = qa.querySelector<HTMLElement>(".body");
          if (b) b.style.maxHeight = b.scrollHeight + "px";
        }
      });
    });

    // ── Pricing billing toggle ────────────────────────────────────────────────
    const proPrice = document.getElementById("proPrice");
    const proNote = document.getElementById("proNote");
    document.querySelectorAll<HTMLElement>(".bill-toggle button").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll<HTMLElement>(".bill-toggle button").forEach((b) => b.classList.remove("on"));
        btn.classList.add("on");
        if (proPrice && proNote) {
          if (btn.dataset.bill === "onetime") {
            proPrice.innerHTML = '$29.99<span class="per"> / 3 months</span>';
            proNote.textContent = "One-time payment · save ~23%";
          } else {
            proPrice.innerHTML = '$12.99<span class="per">/month</span>';
            proNote.textContent = "Cancel anytime";
          }
        }
      });
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      reveal.disconnect();
    };
  }, []);

  return (
    <>
      {/* ── Global styles for landing page ───────────────────────────────────── */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        :root {
          --accent-1: #22d3ee;
          --accent-2: #3b82f6;
          --accent-3: #8b5cf6;
          --bg-0: #04060d;
          --bg-1: #070b16;
          --text: #eef2f8;
          --muted: #8a97ad;
          --muted-2: #5d6b82;
          --card-bg: rgba(255,255,255,0.022);
          --card-border: rgba(255,255,255,0.08);
          --glow: 1;
          --font-display: "Space Grotesk", system-ui, sans-serif;
          --font-body: "Manrope", system-ui, sans-serif;
          --font-mono: "JetBrains Mono", ui-monospace, monospace;
        }
        html { scroll-behavior: smooth; }
        #lp { font-family: var(--font-body); color: var(--text); -webkit-font-smoothing: antialiased; }
        #lp a { color: inherit; text-decoration: none; }
        #lp * { box-sizing: border-box; }
        .wrap { max-width: 1180px; margin: 0 auto; padding: 0 24px; }

        .eyebrow { display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--font-mono); font-size: 11.5px; font-weight: 500;
          letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent-1);
          padding: 7px 14px 7px 11px; border: 1px solid rgba(34,211,238,0.25);
          border-radius: 100px; background: rgba(34,211,238,0.06); backdrop-filter: blur(8px); }
        .eyebrow .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent-1);
          box-shadow: 0 0 0 0 rgba(34,211,238,0.55); animation: pulse 2.4s ease-out infinite; }
        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(34,211,238,0.5); } 70%,100% { box-shadow: 0 0 0 9px rgba(34,211,238,0); } }

        .grad { background: linear-gradient(110deg, var(--accent-1), var(--accent-2) 55%, var(--accent-3));
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; }

        .section-head { text-align: center; max-width: 680px; margin: 0 auto 56px; }
        .section-head h2 { font-family: var(--font-display); font-weight: 700; font-size: clamp(30px,4.5vw,48px);
          letter-spacing: -0.02em; line-height: 1.05; margin-bottom: 14px; }
        .section-head p { color: var(--muted); font-size: clamp(15px,1.6vw,18px); line-height: 1.6; }

        section { position: relative; padding: clamp(72px,9vw,120px) 0; }

        .btn { display: inline-flex; align-items: center; gap: 9px; font-family: var(--font-display);
          font-weight: 600; font-size: 15px; padding: 13px 24px; border-radius: 11px; cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s, background 0.3s, border-color 0.3s; border: 1px solid transparent; }
        .btn svg { width: 17px; height: 17px; transition: transform 0.3s; }
        .btn-primary { color: #04060d; background: linear-gradient(110deg, var(--accent-1), var(--accent-2));
          box-shadow: 0 14px 38px -14px rgba(34,211,238,0.65); }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 20px 48px -14px rgba(34,211,238,0.75); }
        .btn-primary:hover svg { transform: translateX(4px); }
        .btn-ghost { color: var(--text); background: rgba(255,255,255,0.04); border-color: var(--card-border); }
        .btn-ghost:hover { background: rgba(255,255,255,0.08); border-color: rgba(34,211,238,0.3); }

        /* BACKGROUND */
        .bg-fx { position: fixed; inset: 0; z-index: -3; pointer-events: none;
          background: radial-gradient(120% 70% at 50% -5%, rgba(34,211,238,0.10), transparent 55%),
            radial-gradient(80% 60% at 88% 8%, rgba(139,92,246,0.08), transparent 50%),
            linear-gradient(180deg, var(--bg-1) 0%, var(--bg-0) 60%); }
        .bg-grid { position: fixed; inset: 0; z-index: -2; pointer-events: none;
          background-image: linear-gradient(rgba(255,255,255,0.026) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.026) 1px, transparent 1px);
          background-size: 54px 54px;
          -webkit-mask-image: radial-gradient(120% 100% at 50% 0%, #000 30%, transparent 72%);
          mask-image: radial-gradient(120% 100% at 50% 0%, #000 30%, transparent 72%); }
        .aurora { position: fixed; z-index: -2; border-radius: 50%; filter: blur(80px);
          opacity: calc(0.42 * var(--glow)); pointer-events: none; will-change: transform; }
        .aurora.a1 { width: 540px; height: 540px; top: -180px; left: 4%;
          background: radial-gradient(circle, var(--accent-1), transparent 65%); animation: float1 20s ease-in-out infinite; }
        .aurora.a2 { width: 480px; height: 480px; top: -120px; right: 2%;
          background: radial-gradient(circle, var(--accent-3), transparent 65%); animation: float2 24s ease-in-out infinite; }
        @keyframes float1 { 50% { transform: translate(50px,60px) scale(1.1); } }
        @keyframes float2 { 50% { transform: translate(-40px,50px) scale(1.08); } }

        /* NAV */
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          transition: background 0.35s, border-color 0.35s, backdrop-filter 0.35s; border-bottom: 1px solid transparent; }
        .nav.scrolled { background: rgba(7,11,22,0.72); backdrop-filter: blur(14px); border-bottom-color: var(--card-border); }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; height: 70px; }
        .logo { display: inline-flex; align-items: center; gap: 9px; font-family: var(--font-display); font-weight: 700; font-size: 20px; letter-spacing: -0.01em; }
        .logo .mark { width: 32px; height: 32px; display: block; filter: drop-shadow(0 4px 10px rgba(34,211,238,0.5)); }
        .nav-links { display: flex; align-items: center; gap: 30px; }
        .nav-links a.link { font-size: 14.5px; color: var(--muted); transition: color 0.25s; }
        .nav-links a.link:hover { color: var(--text); }
        .nav-cta { display: flex; align-items: center; gap: 14px; }
        .nav .btn { padding: 10px 18px; font-size: 14px; }
        @media (max-width: 760px) { .nav-links .link { display: none; } }

        /* HERO */
        .hero { padding-top: 150px; padding-bottom: 60px; }
        .hero-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 56px; align-items: center; }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr; gap: 44px; } }
        .hero h1 { font-family: var(--font-display); font-weight: 700; font-size: clamp(42px,6.2vw,72px);
          line-height: 1.0; letter-spacing: -0.025em; margin: 24px 0 20px; }
        .hero p.lead { font-size: clamp(16px,1.8vw,19px); line-height: 1.62; color: var(--muted); max-width: 500px; margin-bottom: 30px; }
        .hero-cta { display: flex; gap: 14px; flex-wrap: wrap; }

        /* DASHBOARD */
        .dash { position: relative; border-radius: 22px; padding: 22px; background: rgba(255,255,255,0.03);
          border: 1px solid var(--card-border); backdrop-filter: blur(16px);
          box-shadow: 0 40px 90px -30px rgba(0,0,0,0.7); animation: floaty 7s ease-in-out infinite; }
        @keyframes floaty { 50% { transform: translateY(-12px); } }
        .dash::before { content: ""; position: absolute; inset: -1px; border-radius: inherit; padding: 1px;
          background: linear-gradient(140deg, rgba(34,211,238,0.5), rgba(59,130,246,0.2), transparent 60%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
        .dash-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
        .dash-top .t { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted-2); }
        .dash-dots { display: flex; gap: 6px; }
        .dash-dots i { width: 9px; height: 9px; border-radius: 50%; background: rgba(255,255,255,0.12); display: block; }
        .dash-main { display: flex; align-items: center; gap: 20px; padding: 18px; border-radius: 14px;
          background: rgba(255,255,255,0.03); border: 1px solid var(--card-border); margin-bottom: 14px; }
        .dash-gauge svg { width: 130px; height: 78px; }
        .dash-gauge .arc-fg { stroke-dasharray: 195; stroke-dashoffset: 195; transition: stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1); }
        .dash-score .big { font-family: var(--font-display); font-weight: 700; font-size: 40px; line-height: 1; }
        .dash-score .lbl { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted-2); margin-top: 4px; }
        .dash-badge { display: inline-flex; align-items: center; gap: 6px; margin-top: 10px; font-family: var(--font-mono); font-size: 11px;
          color: #34d399; padding: 4px 9px; border-radius: 100px; background: rgba(52,211,153,0.1); border: 1px solid rgba(52,211,153,0.25); }
        .dash-spark { display: flex; align-items: flex-end; gap: 6px; height: 70px; padding: 14px; border-radius: 14px;
          background: rgba(255,255,255,0.03); border: 1px solid var(--card-border); }
        .dash-spark i { flex: 1; border-radius: 4px 4px 2px 2px; background: linear-gradient(180deg, var(--accent-1), var(--accent-2));
          opacity: 0.85; transform-origin: bottom; transform: scaleY(0); transition: transform 0.9s cubic-bezier(0.22,1,0.36,1); display: block; }
        .dash-cap { display: flex; justify-content: space-between; margin-top: 10px; font-family: var(--font-mono);
          font-size: 9.5px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted-2); }

        /* STATS */
        .stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin-top: 64px; }
        @media (max-width: 700px) { .stats { grid-template-columns: repeat(2,1fr); } }
        .stat { text-align: center; padding: 22px 14px; border-radius: 16px; background: var(--card-bg); border: 1px solid var(--card-border); backdrop-filter: blur(10px); }
        .stat .n { font-family: var(--font-display); font-weight: 700; font-size: clamp(26px,3vw,34px); letter-spacing: -0.01em;
          background: linear-gradient(180deg, #fff, #aebbcf); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .stat .l { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted-2); margin-top: 6px; }

        /* FEATURE GRID */
        .grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
        @media (max-width: 920px) { .grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
        .card { position: relative; border-radius: 18px; padding: 26px 24px 24px; background: var(--card-bg);
          border: 1px solid var(--card-border); backdrop-filter: blur(14px); overflow: hidden; display: flex; flex-direction: column;
          min-height: 312px; transition: transform 0.45s cubic-bezier(0.22,1,0.36,1), border-color 0.4s, background 0.4s;
          opacity: 0; transform: translateY(26px); }
        .card.in { opacity: 1; transform: translateY(0); }
        .card::before { content: ""; position: absolute; inset: -1px; border-radius: inherit; padding: 1px;
          background: linear-gradient(140deg, var(--accent-1), var(--accent-2), transparent 60%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude; opacity: 0; transition: opacity 0.4s; pointer-events: none; }
        .card::after { content: ""; position: absolute; width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(34,211,238,0.12), transparent 65%);
          left: var(--mx, 50%); top: var(--my, 0%); transform: translate(-50%,-50%);
          opacity: 0; transition: opacity 0.4s; pointer-events: none; z-index: 0; }
        .card:hover { transform: translateY(-6px); border-color: rgba(34,211,238,0.28); background: rgba(255,255,255,0.04); }
        .card:hover::before, .card:hover::after { opacity: 1; }
        .card > * { position: relative; z-index: 1; }
        .card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 20px; }
        .ico { width: 48px; height: 48px; flex: none; display: grid; place-items: center; border-radius: 13px;
          background: linear-gradient(155deg, rgba(34,211,238,0.16), rgba(59,130,246,0.10));
          border: 1px solid rgba(34,211,238,0.22); color: var(--accent-1); box-shadow: 0 6px 20px -8px rgba(34,211,238,0.5); }
        .ico svg { width: 24px; height: 24px; }
        .card:hover .ico { color: #fff; }
        .tag { font-family: var(--font-mono); font-size: 10px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--accent-1); padding: 6px 10px; border: 1px solid rgba(34,211,238,0.22); border-radius: 100px; white-space: nowrap; background: rgba(34,211,238,0.05); }
        .tag.soon { color: var(--accent-3); border-color: rgba(139,92,246,0.3); background: rgba(139,92,246,0.07); }
        .card h3 { font-family: var(--font-display); font-weight: 600; font-size: 19.5px; letter-spacing: -0.01em; margin-bottom: 9px; }
        .card .desc { font-size: 14px; line-height: 1.58; color: var(--muted); }
        .viz { margin-top: auto; padding-top: 20px; }
        .bars { display: flex; flex-direction: column; gap: 9px; }
        .bar-row { display: flex; align-items: center; gap: 10px; }
        .bar-lbl { font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.04em; color: var(--muted-2); width: 58px; flex: none; text-transform: uppercase; }
        .bar-track { flex: 1; height: 6px; border-radius: 100px; background: rgba(255,255,255,0.06); overflow: hidden; }
        .bar-fill { height: 100%; border-radius: 100px; width: 0; background: linear-gradient(90deg, var(--accent-1), var(--accent-2)); transition: width 1.1s cubic-bezier(0.22,1,0.36,1); }
        .gauge { display: flex; align-items: center; gap: 14px; }
        .gauge svg { width: 84px; height: 50px; flex: none; }
        .gauge .arc-fg { stroke-dasharray: 126; stroke-dashoffset: 126; transition: stroke-dashoffset 1.3s cubic-bezier(0.22,1,0.36,1); }
        .gauge .read .v { font-family: var(--font-display); font-weight: 700; font-size: 26px; line-height: 1;
          background: linear-gradient(120deg, var(--accent-1), var(--accent-2)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .gauge .read .k { font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted-2); margin-top: 3px; }
        .avail { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
        .live { display: inline-flex; align-items: center; gap: 7px; font-family: var(--font-mono); font-size: 11px;
          letter-spacing: 0.08em; color: #c9d3e2; padding: 7px 12px; border-radius: 100px;
          background: rgba(255,255,255,0.04); border: 1px solid var(--card-border); }
        .live .ld { width: 7px; height: 7px; border-radius: 50%; background: var(--accent-1); box-shadow: 0 0 8px var(--accent-1); animation: pulse 2.2s infinite; display: block; }
        .chip { font-family: var(--font-mono); font-size: 11px; color: var(--muted); padding: 7px 11px; border-radius: 100px; border: 1px dashed var(--card-border); }
        .qchips { display: flex; flex-wrap: wrap; gap: 7px; }
        .qchip { font-size: 11.5px; color: #c4cedd; padding: 6px 11px; border-radius: 8px; background: rgba(255,255,255,0.04); border: 1px solid var(--card-border); transition: border-color 0.3s; }
        .card:hover .qchip { border-color: rgba(34,211,238,0.2); }
        .lines { display: flex; flex-direction: column; gap: 7px; }
        .ln { height: 6px; border-radius: 100px; background: linear-gradient(90deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04)); }
        .ln.typing { background: linear-gradient(90deg, var(--accent-1), var(--accent-2), rgba(255,255,255,0.05));
          background-size: 220% 100%; animation: type 2.6s ease-in-out infinite; }
        @keyframes type { 0%,100% { background-position: 130% 0; } 50% { background-position: 0 0; } }
        .descriptor { display: inline-flex; align-items: center; gap: 6px; margin-top: 11px; font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.06em; color: var(--accent-1); }
        .player { display: flex; align-items: center; gap: 12px; }
        .play-btn { width: 34px; height: 34px; flex: none; border-radius: 50%; display: grid; place-items: center;
          background: rgba(139,92,246,0.14); border: 1px solid rgba(139,92,246,0.3); color: var(--accent-3); }
        .play-btn svg { width: 13px; height: 13px; }
        .wave { display: flex; align-items: center; gap: 3px; height: 30px; }
        .wave span { width: 3px; border-radius: 100px; background: linear-gradient(180deg, var(--accent-3), var(--accent-2)); animation: wave 1.3s ease-in-out infinite; }
        @keyframes wave { 0%,100% { height: 6px; opacity: 0.5; } 50% { height: 26px; opacity: 1; } }
        .lock-note { font-family: var(--font-mono); font-size: 10px; color: var(--muted-2); margin-left: auto; display: inline-flex; align-items: center; gap: 5px; }

        /* HOW IT WORKS */
        .steps { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; position: relative; }
        @media (max-width: 760px) { .steps { grid-template-columns: 1fr; gap: 16px; } }
        .steps::before { content: ""; position: absolute; top: 38px; left: 16%; right: 16%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(34,211,238,0.4), rgba(139,92,246,0.4), transparent); }
        @media (max-width: 760px) { .steps::before { display: none; } }
        .step { position: relative; text-align: center; padding: 0 14px; opacity: 0; transform: translateY(22px); transition: opacity 0.6s, transform 0.6s; }
        .step.in { opacity: 1; transform: none; }
        .step .num { width: 60px; height: 60px; margin: 0 auto 20px; border-radius: 16px; display: grid; place-items: center;
          font-family: var(--font-display); font-weight: 700; font-size: 22px; color: var(--accent-1);
          background: rgba(7,11,22,0.9); border: 1px solid rgba(34,211,238,0.3);
          box-shadow: 0 0 0 6px rgba(34,211,238,0.05), 0 10px 30px -10px rgba(34,211,238,0.5); position: relative; z-index: 1; }
        .step h3 { font-family: var(--font-display); font-weight: 600; font-size: 20px; margin-bottom: 9px; letter-spacing: -0.01em; }
        .step p { color: var(--muted); font-size: 14.5px; line-height: 1.6; max-width: 280px; margin: 0 auto; }

        /* COMPARISON */
        .compare-wrap { max-width: 920px; margin: 0 auto; border-radius: 20px; overflow-x: auto; -webkit-overflow-scrolling: touch; border: 1px solid var(--card-border); background: var(--card-bg); backdrop-filter: blur(14px); }
        .compare { width: 100%; }
        .compare table { width: 100%; border-collapse: collapse; min-width: 520px; }
        .compare th, .compare td { padding: 16px 18px; text-align: center; font-size: 14.5px; border-bottom: 1px solid var(--card-border); }
        .compare th:first-child, .compare td:first-child { text-align: left; color: var(--muted); font-family: var(--font-mono); font-size: 11.5px; letter-spacing: 0.06em; text-transform: uppercase; min-width: 110px; }
        .compare thead th { font-family: var(--font-display); font-weight: 600; font-size: 15px; padding-top: 22px; padding-bottom: 22px; }
        @media(max-width:640px) { .compare th, .compare td { padding: 12px 12px; font-size: 13px; } .compare thead th { font-size: 13px; } }
        .compare .ours { position: relative; color: var(--text); background: linear-gradient(180deg, rgba(34,211,238,0.10), rgba(59,130,246,0.04));
          border-left: 1px solid rgba(34,211,238,0.3); border-right: 1px solid rgba(34,211,238,0.3); }
        .compare thead .ours { font-family: var(--font-display); }
        .compare thead .ours .b { background: linear-gradient(110deg, var(--accent-1), var(--accent-2)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .compare tbody tr:last-child td { border-bottom: none; }
        .yes { color: var(--accent-1); display: flex; justify-content: center; align-items: center; }
        .yes svg { width: 18px; height: 18px; }
        .no { color: var(--muted-2); }
        .small { color: var(--muted); font-size: 13px; }
        .compare td.value { color: #d6deea; }

        /* PRICING */
        .bill-toggle { display: inline-flex; gap: 4px; padding: 5px; border-radius: 100px; border: 1px solid var(--card-border); background: var(--card-bg); margin: 0 auto 44px; }
        .bill-toggle button { font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.04em; color: var(--muted);
          padding: 9px 18px; border-radius: 100px; border: none; background: none; cursor: pointer; transition: color 0.3s, background 0.3s; }
        .bill-toggle button.on { color: #04060d; background: linear-gradient(110deg, var(--accent-1), var(--accent-2)); }
        .price-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 22px; max-width: 820px; margin: 0 auto; align-items: stretch; }
        @media (max-width: 720px) { .price-grid { grid-template-columns: 1fr; } }
        .plan { position: relative; border-radius: 20px; padding: 32px 30px; background: var(--card-bg); border: 1px solid var(--card-border); backdrop-filter: blur(14px); display: flex; flex-direction: column; }
        .plan.pro { border-color: rgba(34,211,238,0.35); background: linear-gradient(180deg, rgba(34,211,238,0.06), rgba(255,255,255,0.02)); box-shadow: 0 30px 70px -30px rgba(34,211,238,0.35); }
        .plan .pop { position: absolute; top: -12px; right: 26px; font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: #04060d; padding: 5px 12px; border-radius: 100px; background: linear-gradient(110deg, var(--accent-1), var(--accent-2)); }
        .plan .pname { font-family: var(--font-display); font-weight: 600; font-size: 19px; margin-bottom: 6px; }
        .plan .psub { color: var(--muted); font-size: 13.5px; margin-bottom: 22px; }
        .plan .pprice { font-family: var(--font-display); font-weight: 700; font-size: 46px; line-height: 1; letter-spacing: -0.02em; margin-bottom: 4px; }
        .plan .pprice .per { font-size: 15px; font-weight: 500; color: var(--muted); letter-spacing: 0; }
        .plan .pnote { font-family: var(--font-mono); font-size: 10.5px; color: var(--muted-2); letter-spacing: 0.04em; min-height: 16px; margin-bottom: 24px; }
        .plan ul { list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 28px; flex: 1; padding: 0; }
        .plan li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: #cdd6e3; line-height: 1.45; }
        .plan li svg { width: 17px; height: 17px; flex: none; color: var(--accent-1); margin-top: 1px; }
        .plan .btn { width: 100%; justify-content: center; }

        /* TESTIMONIALS */
        .quotes { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
        @media (max-width: 860px) { .quotes { grid-template-columns: 1fr; max-width: 520px; margin: 0 auto; } }
        .quote { border-radius: 18px; padding: 28px 26px; background: var(--card-bg); border: 1px solid var(--card-border); backdrop-filter: blur(12px); display: flex; flex-direction: column; }
        .quote .stars { color: #fbbf24; font-size: 14px; letter-spacing: 2px; margin-bottom: 16px; }
        .quote p { font-size: 15.5px; line-height: 1.6; color: #dde4ee; margin-bottom: 22px; flex: 1; }
        .quote .who { display: flex; align-items: center; gap: 12px; }
        .quote .av { width: 40px; height: 40px; border-radius: 50%; flex: none; display: grid; place-items: center;
          font-family: var(--font-display); font-weight: 700; font-size: 15px; color: #04060d;
          background: linear-gradient(150deg, var(--accent-1), var(--accent-2)); }
        .quote .nm { font-weight: 700; font-size: 14.5px; }
        .quote .rl { font-size: 12.5px; color: var(--muted-2); margin-top: 1px; }

        /* FAQ */
        .faq { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px; }
        .qa { border-radius: 14px; border: 1px solid var(--card-border); background: var(--card-bg); overflow: hidden; transition: border-color 0.3s; }
        .qa.open { border-color: rgba(34,211,238,0.3); }
        .qa button { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px;
          padding: 20px 22px; background: none; border: none; cursor: pointer; text-align: left; color: var(--text);
          font-family: var(--font-display); font-weight: 600; font-size: 16px; }
        .qa .ico-pm { width: 24px; height: 24px; flex: none; position: relative; transition: transform 0.35s; color: var(--accent-1); }
        .qa.open .ico-pm { transform: rotate(45deg); }
        .qa .body { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
        .qa .body p { padding: 0 22px 20px; color: var(--muted); font-size: 14.5px; line-height: 1.65; }

        /* FINAL CTA */
        .cta-band { position: relative; border-radius: 26px; padding: clamp(48px,7vw,84px) 32px; text-align: center; overflow: hidden;
          background: linear-gradient(160deg, rgba(34,211,238,0.10), rgba(139,92,246,0.08)); border: 1px solid rgba(34,211,238,0.25); }
        .cta-band::before { content: ""; position: absolute; inset: 0; z-index: 0; opacity: calc(0.6 * var(--glow));
          background: radial-gradient(60% 120% at 50% 0%, rgba(34,211,238,0.25), transparent 60%); }
        .cta-band > * { position: relative; z-index: 1; }
        .cta-band h2 { font-family: var(--font-display); font-weight: 700; font-size: clamp(30px,4.5vw,50px); letter-spacing: -0.02em; margin-bottom: 14px; }
        .cta-band p { color: var(--muted); font-size: 17px; margin-bottom: 30px; }

        /* FOOTER */
        footer { border-top: 1px solid var(--card-border); padding: 48px 0 40px; }
        .foot-top { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; margin-bottom: 26px; }
        .foot-links { display: flex; gap: 26px; font-size: 14px; color: var(--muted); }
        .foot-links a:hover { color: var(--text); }
        .foot-copy { font-size: 13px; color: var(--muted-2); }
        .disclaimer { font-size: 11.5px; color: var(--muted-2); line-height: 1.6; margin-top: 18px; max-width: 760px; }

        @media (prefers-reduced-motion: reduce) {
          .aurora, .dash, .eyebrow .dot, .live .ld, .ln.typing, .wave span { animation: none !important; }
          .card, .step { opacity: 1 !important; transform: none !important; }
        }
      `}} />

      {/* Fixed background */}
      <div className="bg-fx" />
      <div className="bg-grid" />
      <div className="aurora a1" />
      <div className="aurora a2" />

      <div id="lp">
        {/* ── NAV ─────────────────────────────────────────────────────────────── */}
        <nav className="nav" id="nav">
          <div className="wrap nav-inner">
            <Link className="logo" href="/">
              <img src="/icon.svg" alt="Scoravo" className="mark" />Scoravo
            </Link>
            <div className="nav-links">
              <a className="link" href="#features">Features</a>
              <a className="link" href="#how">How it works</a>
              <a className="link" href="#pricing">Pricing</a>
              <Link className="link" href="/exam-guides">Exam Guides</Link>
              <a className="link" href="#faq">FAQ</a>
              <div className="nav-cta">
                {!authReady ? (
                  <div style={{ width: 120, height: 36 }} />
                ) : isLoggedIn ? (
                  <Link className="btn btn-primary" href="/dashboard">
                    Go to Dashboard
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
                  </Link>
                ) : (
                  <>
                    <Link className="btn btn-ghost" href="/login">Log in</Link>
                    <Link className="btn btn-primary" href="/signup">Start free</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* ── HERO ─────────────────────────────────────────────────────────────── */}
        <header className="hero">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <span className="eyebrow"><span className="dot" />Practice IELTS &amp; PTE</span>
                <h1>Pass with confidence.<br /><span className="grad">Affordable exam prep.</span></h1>
                <p className="lead">Self-serve practice tests with AI feedback — built for IELTS and PTE candidates who want a higher band score on their own schedule.</p>
                <div className="hero-cta">
                  <Link className="btn btn-primary" href="/signup">
                    Start free
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
                  </Link>
                  <a className="btn btn-ghost" href="#pricing">View pricing</a>
                </div>
              </div>

              {/* Dashboard mockup */}
              <div className="dash">
                <div className="dash-top">
                  <span className="t">Your progress</span>
                  <span className="dash-dots"><i /><i /><i /></span>
                </div>
                <div className="dash-main">
                  <div className="dash-gauge">
                    <svg viewBox="0 0 130 78">
                      <path d="M12 70 A53 53 0 0 1 118 70" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="9" strokeLinecap="round"/>
                      <path className="arc-fg" d="M12 70 A53 53 0 0 1 118 70" fill="none" stroke="url(#hg)" strokeWidth="9" strokeLinecap="round"/>
                      <defs><linearGradient id="hg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#22d3ee"/><stop offset="1" stopColor="#3b82f6"/></linearGradient></defs>
                    </svg>
                  </div>
                  <div className="dash-score">
                    <div className="big"><span className="grad">7.5</span></div>
                    <div className="lbl">Predicted band</div>
                    <span className="dash-badge">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m6 15 6-6 6 6"/></svg>
                      +1.5 in 3 weeks
                    </span>
                  </div>
                </div>
                <div className="dash-spark" id="dashSpark" />
                <div className="dash-cap"><span>Recent tests</span><span>Reading · Writing</span></div>
              </div>
            </div>

            {/* Stats strip */}
            <div className="stats">
              <div className="stat"><div className="n">500+</div><div className="l">Active learners</div></div>
              <div className="stat"><div className="n">$12.99</div><div className="l">Pro / month</div></div>
              <div className="stat"><div className="n">20+</div><div className="l">Practice tests</div></div>
              <div className="stat"><div className="n">4.9★</div><div className="l">User rating</div></div>
            </div>
          </div>
        </header>

        {/* ── FEATURES ─────────────────────────────────────────────────────────── */}
        <section id="features">
          <div className="wrap">
            <div className="section-head">
              <h2>Everything you need to <span className="grad">pass</span></h2>
              <p>From exam-style tests to instant AI feedback — every tool to push your band score higher.</p>
            </div>
            <div className="grid">
              <article className="card" data-i="0">
                <div className="card-top">
                  <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></svg></span>
                  <span className="tag">20+ tests</span>
                </div>
                <h3>Exam-style practice tests</h3>
                <p className="desc">Full-length and mini tests that mirror the real IELTS and PTE format — same timing, same question logic.</p>
                <div className="viz"><div className="bars">
                  <div className="bar-row"><span className="bar-lbl">IELTS AC</span><span className="bar-track"><span className="bar-fill" data-w="92%" /></span></div>
                  <div className="bar-row"><span className="bar-lbl">IELTS GT</span><span className="bar-track"><span className="bar-fill" data-w="78%" /></span></div>
                  <div className="bar-row"><span className="bar-lbl">PTE</span><span className="bar-track"><span className="bar-fill" data-w="64%" /></span></div>
                </div></div>
              </article>

              <article className="card" data-i="1">
                <div className="card-top">
                  <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7z" fill="currentColor" fillOpacity="0.15"/></svg></span>
                  <span className="tag">AI-graded</span>
                </div>
                <h3>Instant scores &amp; feedback</h3>
                <p className="desc">Get an estimated band score the second you finish, with explanations for every answer you missed.</p>
                <div className="viz"><div className="gauge">
                  <svg viewBox="0 0 84 50"><path d="M8 46 A34 34 0 0 1 76 46" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" strokeLinecap="round"/><path className="arc-fg" d="M8 46 A34 34 0 0 1 76 46" fill="none" stroke="url(#gg)" strokeWidth="7" strokeLinecap="round"/><defs><linearGradient id="gg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#22d3ee"/><stop offset="1" stopColor="#3b82f6"/></linearGradient></defs></svg>
                  <div className="read"><div className="v">7.5</div><div className="k">Est. band</div></div>
                </div></div>
              </article>

              <article className="card" data-i="2">
                <div className="card-top">
                  <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v5l3.2 1.9"/></svg></span>
                  <span className="tag">24 / 7</span>
                </div>
                <h3>Practice anytime</h3>
                <p className="desc">No fixed schedule, no waiting room. Study at 2am or on your lunch break — the platform is always on.</p>
                <div className="viz"><div className="avail"><span className="live"><span className="ld" />Always open</span><span className="chip">02:00 AM</span><span className="chip">Any device</span></div></div>
              </article>

              <article className="card" data-i="3">
                <div className="card-top">
                  <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.5C10.5 5 8 4.5 4 4.8v13C8 17.5 10.5 18 12 19.5"/><path d="M12 6.5C13.5 5 16 4.5 20 4.8v13c-4-.3-6.5.2-8 1.7"/><path d="M12 6.5v13"/></svg></span>
                  <span className="tag">4 question types</span>
                </div>
                <h3>Reading section</h3>
                <p className="desc">Multiple choice, true / false / not given, fill the blank and matching — every IELTS question type covered.</p>
                <div className="viz"><div className="qchips">
                  <span className="qchip">Multiple choice</span><span className="qchip">True / False / NG</span>
                  <span className="qchip">Fill the blank</span><span className="qchip">Matching</span>
                </div></div>
              </article>

              <article className="card" data-i="4">
                <div className="card-top">
                  <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h4l10-10a2.5 2.5 0 0 0-3.5-3.5L4.5 16.5z"/><path d="M13.5 6.5 17.5 10.5"/></svg></span>
                  <span className="tag">AI feedback</span>
                </div>
                <h3>Writing section</h3>
                <p className="desc">Timed Task 1 &amp; 2 prompts with model answers, band-descriptor self-assessment, and AI examiner feedback (Pro).</p>
                <div className="viz">
                  <div className="lines"><span className="ln" style={{width:"100%"}} /><span className="ln" style={{width:"86%"}} /><span className="ln typing" style={{width:"62%"}} /></div>
                  <span className="descriptor"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Task achievement · Coherence</span>
                </div>
              </article>

              <article className="card" data-i="5">
                <div className="card-top">
                  <span className="ico" style={{color:"var(--accent-3)",background:"linear-gradient(155deg,rgba(139,92,246,0.18),rgba(59,130,246,0.1))",borderColor:"rgba(139,92,246,0.28)",boxShadow:"0 6px 20px -8px rgba(139,92,246,0.5)"}}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13v-1a8 8 0 0 1 16 0v1"/><path d="M20 14v2a2.5 2.5 0 0 1-2.5 2.5H16V13h1.5A2.5 2.5 0 0 1 20 14z"/><path d="M4 14v2a2.5 2.5 0 0 0 2.5 2.5H8V13H6.5A2.5 2.5 0 0 0 4 14z"/></svg>
                  </span>
                  <span className="tag soon">Beta</span>
                </div>
                <h3>Listening section</h3>
                <p className="desc">Audio-based questions with a true exam-style player — accents, playback controls and timed sets.</p>
                <div className="viz"><div className="player">
                  <span className="play-btn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
                  <span className="wave" aria-hidden="true" />
                  <span className="lock-note"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>Audio coming soon</span>
                </div></div>
              </article>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────────────── */}
        <section id="how">
          <div className="wrap">
            <div className="section-head"><h2>How it works</h2><p>Three simple steps to start improving your score.</p></div>
            <div className="steps">
              <div className="step" data-i="0"><div className="num">01</div><h3>Sign up for free</h3><p>Create your account in 30 seconds. No credit card required.</p></div>
              <div className="step" data-i="1"><div className="num">02</div><h3>Take a practice test</h3><p>Choose IELTS or PTE. Pick a mini or full test. Start immediately.</p></div>
              <div className="step" data-i="2"><div className="num">03</div><h3>See your score</h3><p>Get instant results, a band score estimate, and answer explanations.</p></div>
            </div>
          </div>
        </section>

        {/* ── COMPARISON ───────────────────────────────────────────────────────── */}
        <section>
          <div className="wrap">
            <div className="section-head"><h2>Why learners choose <span className="grad">Scoravo</span></h2><p>Compare us to the alternatives.</p></div>
            <div className="compare-wrap">
              <div className="compare"><table>
                <thead><tr><th></th><th className="ours"><span className="b">Scoravo</span></th><th>Review centers</th><th>Global platforms</th></tr></thead>
                <tbody>
                  <tr><td>Price</td><td className="ours value">Free–$12.99/mo</td><td className="value">$65–$185/course</td><td className="value">$30–$50/mo</td></tr>
                  <tr><td>Schedule</td><td className="ours value">Anytime</td><td className="value">Fixed classes</td><td className="value">Anytime</td></tr>
                  <tr><td>Exam-focused</td>
                    <td className="ours"><span className="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td>
                    <td><span className="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td>
                    <td className="small">Some</td>
                  </tr>
                  <tr><td>AI feedback</td>
                    <td className="ours"><span className="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td>
                    <td className="no">✕</td><td className="small">Some</td>
                  </tr>
                  <tr><td>Progress tracking</td>
                    <td className="ours"><span className="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td>
                    <td className="no">✕</td><td className="small">Some</td>
                  </tr>
                </tbody>
              </table></div>
            </div>
          </div>
        </section>

        {/* ── PRICING ──────────────────────────────────────────────────────────── */}
        <section id="pricing">
          <div className="wrap">
            <div className="section-head"><h2>Simple, <span className="grad">affordable</span> pricing</h2><p>Start free. Upgrade when you are ready.</p></div>
            <div style={{textAlign:"center"}}>
              <div className="bill-toggle">
                <button className="on" data-bill="monthly">Monthly</button>
                <button data-bill="onetime">3-month one-time</button>
              </div>
            </div>
            <div className="price-grid">
              <div className="plan">
                <div className="pname">Free</div>
                <div className="psub">Practice as much as you want.</div>
                <div className="pprice">$0<span className="per"> forever</span></div>
                <div className="pnote">No credit card required</div>
                <ul>
                  {["Unlimited Reading practice","Unlimited Writing practice","Unlimited Listening practice","Auto-scoring + band estimate","Progress tracking"].map((f) => (
                    <li key={f}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>{f}</li>
                  ))}
                </ul>
                <Link className="btn btn-ghost" href="/signup">Get started free</Link>
              </div>
              <div className="plan pro">
                <span className="pop">Most popular</span>
                <div className="pname">Pro</div>
                <div className="psub">Everything you need to pass.</div>
                <div className="pprice" id="proPrice">$12.99<span className="per">/month</span></div>
                <div className="pnote" id="proNote">Cancel anytime</div>
                <ul>
                  {["Everything in Free","AI Writing feedback (20/month)","AI Speaking scoring — coming soon","Unlimited full mock exams","Priority support"].map((f) => (
                    <li key={f}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>{f}</li>
                  ))}
                </ul>
                <Link className="btn btn-primary" href="/signup">
                  Start Pro
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
        <section>
          <div className="wrap">
            <div className="section-head"><h2>What learners are saying</h2><p>Real results from candidates around the world.</p></div>
            <div className="quotes">
              <div className="quote"><div className="stars">★★★★★</div><p>&ldquo;I got Band 7.5 on my first try. Scoravo&rsquo;s practice tests were so similar to the real exam.&rdquo;</p><div className="who"><span className="av">M</span><div><div className="nm">Maria Santos</div><div className="rl">Nurse, Manila</div></div></div></div>
              <div className="quote"><div className="stars">★★★★★</div><p>&ldquo;Way cheaper than review centers and I can practice during my night-shift breaks. Highly recommend.&rdquo;</p><div className="who"><span className="av">J</span><div><div className="nm">John dela Cruz</div><div className="rl">OFW, Dubai</div></div></div></div>
              <div className="quote"><div className="stars">★★★★★</div><p>&ldquo;The AI feedback on my writing was super helpful — specific suggestions I could act on right away.&rdquo;</p><div className="who"><span className="av">A</span><div><div className="nm">Ana Reyes</div><div className="rl">Student, Cebu</div></div></div></div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
        <section id="faq">
          <div className="wrap">
            <div className="section-head"><h2>Frequently asked questions</h2></div>
            <div className="faq" id="faqList">
              {[
                ["Is Scoravo really free to start?","Yes. Free users get unlimited Reading, Writing, and Listening practice with auto-scoring and band estimates — no credit card required. Upgrade to Pro for AI writing feedback and mock exams."],
                ["How is Scoravo different from free websites?","Free sites give you questions but no feedback or tracking. Scoravo gives you band score estimates, detailed explanations, and tracks your improvement over time."],
                ["What payment methods are accepted?","We accept Visa, Mastercard, Amex, Google Pay, and Apple Pay — all processed securely through Stripe."],
                ["Are the practice tests similar to the real exam?","Our tests follow the exact same format, question types, and difficulty levels — all original questions created to match official standards."],
                ["Can I cancel anytime?","Yes, cancel anytime from your account settings. No lock-in contracts."],
              ].map(([q, a]) => (
                <div className="qa" key={q}>
                  <button>
                    <span>{q}</span>
                    <span className="ico-pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span>
                  </button>
                  <div className="body"><p>{a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
        <section>
          <div className="wrap">
            <div className="cta-band">
              <h2>Ready to pass your exam?</h2>
              <p>Unlimited free practice. No credit card needed.</p>
              <Link className="btn btn-primary" href="/signup" style={{padding:"15px 30px",fontSize:"16px"}}>
                Start free now
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
        <footer>
          <div className="wrap">
            <div className="foot-top">
              <Link className="logo" href="/"><img src="/icon.svg" alt="Scoravo" className="mark" />Scoravo</Link>
              <div className="foot-links">
                <Link href="/privacy">Privacy</Link>
                <Link href="/terms">Terms</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
            <div className="foot-copy">© 2026 Scoravo. Practice IELTS &amp; PTE with confidence.</div>
            <p className="disclaimer">Scoravo is an independent practice platform not affiliated with, endorsed by, or connected to British Council, IDP Education, Cambridge Assessment English, or Pearson PLC. IELTS® and PTE Academic® are registered trademarks of their respective owners.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
