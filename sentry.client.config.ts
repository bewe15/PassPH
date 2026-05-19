import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://ecbb1c63f8854b27a378c2127bc33546@o4511416472567808.ingest.us.sentry.io/4511416491442176",

  // Capture 100% of transactions in development, lower in production
  tracesSampleRate: 1.0,

  // Record a session replay for 10% of sessions, 100% if there's an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  integrations: [
    Sentry.replayIntegration(),
  ],

  // Only enable in production
  enabled: process.env.NODE_ENV === "production",
});
