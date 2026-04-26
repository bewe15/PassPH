import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationProgress } from "@/components/NavigationProgress";
import { PageWrapper } from "@/components/PageWrapper";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "PassPH — Practice IELTS & PTE",
  description: "Affordable, self-serve IELTS and PTE practice for Filipinos. AI-powered feedback, progress tracking, anytime access.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NavigationProgress />
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
