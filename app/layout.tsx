import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationProgress } from "@/components/NavigationProgress";
import { PageWrapper } from "@/components/PageWrapper";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Scoravo — Practice IELTS & PTE",
  description: "Affordable, self-serve IELTS and PTE practice platform. AI-powered feedback, progress tracking, anytime access.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics — activates automatically when NEXT_PUBLIC_GA_ID env var is set */}
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={`${inter.className} antialiased`}>
        <NavigationProgress />
        <PageWrapper>{children}</PageWrapper>
        {/* Vercel Analytics — tracks performance & visitors automatically */}
        <Analytics />
      </body>
    </html>
  );
}
