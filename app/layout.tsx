import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationProgress } from "@/components/NavigationProgress";
import { PageWrapper } from "@/components/PageWrapper";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Scoravo — Practice IELTS & PTE",
  description: "Affordable, self-serve IELTS and PTE practice platform. AI-powered feedback, progress tracking, anytime access.",
  metadataBase: new URL("https://www.scoravo.com"),
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Scoravo — Practice IELTS & PTE",
    description: "Affordable, self-serve IELTS and PTE practice platform. AI-powered feedback, progress tracking, anytime access.",
    url: "https://www.scoravo.com",
    siteName: "Scoravo",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Scoravo — AI-Powered IELTS & PTE Exam Prep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scoravo — Practice IELTS & PTE",
    description: "Affordable, self-serve IELTS and PTE practice platform. AI-powered feedback, progress tracking, anytime access.",
    images: ["/og-image.png"],
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <NavigationProgress />
        <PageWrapper>{children}</PageWrapper>
        <Analytics />
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </body>
    </html>
  );
}
