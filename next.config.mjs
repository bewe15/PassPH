import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(nextConfig, {
  org: "passph",
  project: "javascript-nextjs",

  // Suppress logs during build unless in CI
  silent: !process.env.CI,

  // Upload larger source maps for better stack traces
  widenClientFileUpload: true,

  // Hide source maps from client bundles
  hideSourceMaps: true,

  // Disable Sentry logger to reduce bundle size
  disableLogger: true,
});
