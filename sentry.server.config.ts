import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://ecbb1c63f8854b27a378c2127bc33546@o4511416472567808.ingest.us.sentry.io/4511416491442176",

  tracesSampleRate: 1.0,

  // Only enable in production
  enabled: process.env.NODE_ENV === "production",
});
