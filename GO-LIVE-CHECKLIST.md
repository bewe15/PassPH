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

## 2. PayMongo — Switch to Live Mode

- [ ] Go to [dashboard.paymongo.com](https://dashboard.paymongo.com) → toggle to **Live Mode**
- [ ] Copy your **Live Secret Key** (`sk_live_...`)
- [ ] Update in **Vercel → Settings → Environment Variables**:
  - `PAYMONGO_SECRET_KEY` → replace test key with live key
- [ ] Go to **Developers → Webhooks** (still in Live Mode)
- [ ] Delete the old test webhook
- [ ] Create a new **Live webhook**:
  - URL: `https://passph.com/api/webhooks/paymongo`
  - Event: `checkout_session.payment.paid`
- [ ] Copy the new **Live Webhook Secret**
- [ ] Update in Vercel:
  - `PAYMONGO_WEBHOOK_SECRET` → replace with live webhook secret
- [ ] Redeploy Vercel after updating env vars

---

## 3. Supabase

- [ ] Go to **Supabase → Authentication → URL Configuration**
- [ ] Update **Site URL**: `https://passph.com`
- [ ] Add to **Redirect URLs**: `https://passph.com/auth/callback`
- [ ] Remove old Vercel preview URL from redirect URLs (optional but clean)

---

## 4. Google OAuth (if using Google login)

- [ ] Go to [console.cloud.google.com](https://console.cloud.google.com)
- [ ] Open your project → **APIs & Services → Credentials**
- [ ] Find your OAuth 2.0 Client ID → click Edit
- [ ] Add to **Authorized JavaScript origins**: `https://passph.com`
- [ ] Add to **Authorized redirect URIs**: `https://passph.com/auth/callback`
- [ ] Save and wait a few minutes for changes to propagate

---

## 5. Resend (Contact Form Emails)

- [ ] Go to [resend.com](https://resend.com) → **Domains** → Add `passph.com`
- [ ] Add the DNS records Resend provides (SPF, DKIM)
- [ ] Wait for domain to verify (can take up to 24 hours)
- [ ] Update `app/api/contact/route.ts`:
  - Change `from: "onboarding@resend.dev"` → `from: "hello@passph.com"`
- [ ] Commit and push the change

---

## 6. Final Checks Before Announcing

- [ ] Redeploy Vercel after **all** environment variable changes
- [ ] Test the full signup → login → checkout flow on the live domain
- [ ] Test PayMongo checkout with a **real card** (small amount, e.g. Basic plan)
- [ ] Confirm webhook fires and `plan` updates in Supabase `profiles` table
- [ ] Reset your test account back to `free` after testing
- [ ] Test Google OAuth login works on live domain
- [ ] Test contact form — confirm email arrives in inbox
- [ ] Test PDF report download (Pro feature)
- [ ] Check all footer links: Privacy Policy, Terms & Conditions, Contact
- [ ] Check mobile layout on a real phone
- [ ] Confirm `plan_expires_at` is being set correctly in Supabase

---

## 7. Environment Variables — Full Reference

| Variable | Test Value | Live Value |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://pass-ph.vercel.app` | `https://passph.com` |
| `PAYMONGO_SECRET_KEY` | `sk_test_...` | `sk_live_...` |
| `PAYMONGO_WEBHOOK_SECRET` | test webhook secret | live webhook secret |
| `NEXT_PUBLIC_SUPABASE_URL` | unchanged | unchanged |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | unchanged | unchanged |
| `SUPABASE_SERVICE_ROLE_KEY` | unchanged | unchanged |
| `RESEND_API_KEY` | unchanged | unchanged |
| `NEXT_PUBLIC_GA_ID` | not set | `G-XXXXXXXXXX` |

---

## 8. Nice to Have (Post-Launch)

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
