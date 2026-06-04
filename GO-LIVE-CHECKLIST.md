# 🚀 PassPH Go-Live Checklist

Use this checklist when switching from the Vercel preview domain to your real domain (e.g. `passph.com`) and going live with real payments.

---

## 1. Domain & Vercel

- [ ] Purchase domain (e.g. `passph.com`) from Namecheap / GoDaddy / Cloudflare
- [ ] Add domain in **Vercel → Settings → Domains**
- [ ] Update DNS records (Vercel will show you the exact A/CNAME records)
- [ ] Wait for SSL certificate to auto-provision (usually under 10 minutes)
- [ ] Update environment variable in Vercel:
  - `NEXT_PUBLIC_SITE_URL` → `https://passph.com`

---

## 2. Stripe — Switch to Live Mode

> ✅ **Stripe account already created and tested in sandbox.** Just switch to live mode and update keys.

### Activate your live account
- [ ] Go to [dashboard.stripe.com](https://dashboard.stripe.com)
- [ ] Click **"Switch to live account"** (top right banner)
- [ ] Complete business verification if prompted:
  - Australian address, DOB, bank account
  - Photo ID (passport or driver's license)
  - ABN if required — register free at [abr.business.gov.au](https://abr.business.gov.au)

### Get your live keys
- [ ] Go to **Developers → API Keys** (make sure you're in Live mode, not Sandbox)
- [ ] Copy your **Live Secret Key** (`sk_live_...`)
- [ ] Update in **Vercel → Settings → Environment Variables**:
  - `STRIPE_SECRET_KEY` → `sk_live_...`

### Set up live webhook
- [ ] Go to **Developers → Webhooks** → Add destination
- [ ] URL: `https://passph.com/api/webhooks/stripe`
- [ ] Event: `checkout.session.completed`
- [ ] Copy the **Signing Secret** (`whsec_...`)
- [ ] Update in Vercel:
  - `STRIPE_WEBHOOK_SECRET` → live `whsec_...`
- [ ] Redeploy Vercel after all env var changes

### Payment methods (already enabled in sandbox)
- [ ] Go to **Settings → Payment methods** → confirm these are enabled in Live mode:
  - ✅ Cards (Visa, Mastercard, Amex)
  - ✅ Google Pay
  - ✅ Apple Pay

## 3. Stripe — Test on Live Domain
- [ ] Complete a real payment with a real card (Basic plan ₱299)
- [ ] Confirm plan updates in Supabase `profiles` table
- [ ] Check payment appears in Stripe live dashboard
- [ ] Reset your test account back to `free` after testing

---

## 4. Supabase

- [ ] Go to **Supabase → Authentication → URL Configuration**
- [ ] Update **Site URL**: `https://passph.com`
- [ ] Add to **Redirect URLs**: `https://passph.com/auth/callback`
- [ ] Remove old Vercel preview URL from redirect URLs (optional but clean)

---

## 5. Google OAuth (if using Google login)

- [ ] Go to [console.cloud.google.com](https://console.cloud.google.com)
- [ ] Open your project → **APIs & Services → Credentials**
- [ ] Find your OAuth 2.0 Client ID → click Edit
- [ ] Add to **Authorized JavaScript origins**: `https://passph.com`
- [ ] Add to **Authorized redirect URIs**: `https://passph.com/auth/callback`
- [ ] Save and wait a few minutes for changes to propagate

---

## 6. Resend (Contact Form Emails)

- [ ] Go to [resend.com](https://resend.com) → **Domains** → Add `passph.com`
- [ ] Add the DNS records Resend provides (SPF, DKIM)
- [ ] Wait for domain to verify (can take up to 24 hours)
- [ ] Update `app/api/contact/route.ts`:
  - Change `from: "onboarding@resend.dev"` → `from: "hello@passph.com"`
- [ ] Commit and push the change

---

## 7. Final Checks Before Announcing

- [ ] Redeploy Vercel after **all** environment variable changes
- [ ] Test the full signup → login → checkout flow on the live domain
- [ ] Test Stripe checkout with a **real card** (small amount, e.g. Basic plan)
- [ ] Confirm Stripe webhook fires and `plan` updates in Supabase `profiles` table
- [ ] Reset your test account back to `free` after testing
- [ ] Test Google OAuth login works on live domain
- [ ] Test contact form — confirm email arrives in inbox
- [ ] Test PDF report download (Pro feature)
- [ ] Check all footer links: Privacy Policy, Terms & Conditions, Contact
- [ ] Check mobile layout on a real phone
- [ ] Confirm `plan_expires_at` is being set correctly in Supabase

---

## 8. Environment Variables — Full Reference

| Variable | Test Value | Live Value |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://pass-ph.vercel.app` | `https://passph.com` |
| `STRIPE_SECRET_KEY` | `sk_test_...` (sandbox) | `sk_live_...` |
| `STRIPE_WEBHOOK_SECRET` | sandbox `whsec_...` | live `whsec_...` |
| `NEXT_PUBLIC_SUPABASE_URL` | unchanged | unchanged |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | unchanged | unchanged |
| `SUPABASE_SERVICE_ROLE_KEY` | unchanged | unchanged |
| `RESEND_API_KEY` | unchanged | unchanged |
| `NEXT_PUBLIC_GA_ID` | not set | `G-XXXXXXXXXX` |

---

## 9. Nice to Have (Post-Launch)

### Analytics
- [ ] Go to [analytics.google.com](https://analytics.google.com) → create a **GA4 property** for PassPH
- [ ] Get your **Measurement ID** (starts with `G-`)
- [ ] Add to **Vercel → Settings → Environment Variables**:
  - `NEXT_PUBLIC_GA_ID` → `G-XXXXXXXXXX`
- [ ] Redeploy — GA4 will activate automatically (already wired up in `app/layout.tsx`)
- [ ] Vercel Analytics is already active — enable it in **Vercel → Analytics tab** (free)
- [ ] Later: add [Hotjar](https://hotjar.com) for heatmaps & session recordings (free tier)

### Marketing & Growth
- [ ] Set up custom email sender on Resend (`hello@passph.com`)
- [ ] Build email notification campaigns (weekly progress report, exam tips)
- [ ] Set up Facebook / Instagram pixel for ad retargeting

### Features
- [ ] Admin/super user exemption (specific email gets unlimited access)
- [ ] Add Listening tests
- [ ] Add AI Writing feedback for Pro users
- [ ] Add Speaking practice section

### Operations
- [ ] Set up uptime monitoring — [UptimeRobot](https://uptimerobot.com) (free)
- [ ] Set up error monitoring — [Sentry](https://sentry.io) (free tier)

---

_Last updated: May 2026 — Stripe integrated (cards + Google Pay + Apple Pay), sandbox tested ✅_
