import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — IELTS & PTE Practice | Scoravo",
  description: "Start free or upgrade to Pro for AI writing feedback and unlimited mock exams. Simple, affordable IELTS and PTE practice.",
  alternates: { canonical: "https://www.scoravo.com/pricing" },
  openGraph: {
    title: "Pricing — IELTS & PTE Practice | Scoravo",
    description: "Start free or upgrade to Pro for AI writing feedback and unlimited mock exams.",
    url: "https://www.scoravo.com/pricing",
    siteName: "Scoravo",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
