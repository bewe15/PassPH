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

## 2. Stripe — Account Setup (Do This Early!)

> ✅ **Much simpler than PayMongo** — since you live in Australia, set up a Stripe AU account. No Philippine business registration needed.

### Create your Stripe account
- [ ] Go to [dashboard.stripe.com](https://dashboard.stripe.com) → Sign up
- [ ] Enter your details: full name, Australian address, DOB, phone
- [ ] Add your **Australian bank account** for payouts
- [ ] Upload **photo ID** (passport or driver's license) for identity verification
- [ ] ABN: register free at [abr.business.gov.au](https://abr.business.gov.au) if Stripe asks (takes 15 minutes, no documents needed)

### Get your Stripe live keys
- [ ] Go to **Developers → API Keys** in Stripe dashboard
- [ ] Copy your **Live Secret Key** (`sk_live_...`)
- [ ] Copy your **Live Publishable Key** (`pk_live_...`)
- [ ] Add to **Vercel → Settings → Environment Variables**:
  - `STRIPE_SECRET_KEY` → `sk_live_...`
  - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` → `pk_live_...`

### Set up Stripe webhook
- [ ] Go to **Developers → Webhooks** → Add endpoint
- [ ] URL: `https://passph.com/api/webhooks/stripe`
- [ ] Events to listen to: `checkout.session.completed`
- [ ] Copy the **Webhook Signing Secret** (`whsec_...`)
- [ ] Add to Vercel:
  - `STRIPE_WEBHOOK_SECRET` → `whsec_...`
- [ ] Redeploy Vercel after all env var changes

## 3. Stripe — Test Before Going Live

- [ ] In Stripe dashboard → toggle to **Test Mode**
- [ ] Use test card: `4242 4242 4242 4242`, any future expiry, any CVC
- [ ] Complete a test checkout for Basic plan
- [ ] Confirm plan updates in Supabase `profiles` table
- [ ] Reset test account back to `free` after testing
- [ ] Toggle Stripe back to **Live Mode** when ready

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
| `STRIPE_SECRET_KEY` | `sk_test_...` | `sk_live_...` |
| `STRIPE_WEBHOOK_SECRET` | test webhook secret | live webhook secret |
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

_Last updated: May 2026_
