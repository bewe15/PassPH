import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Free | Scoravo",
  description: "Create a free Scoravo account and start practicing IELTS and PTE tests today. No credit card required.",
  alternates: { canonical: "https://www.scoravo.com/signup" },
  openGraph: {
    title: "Sign Up Free | Scoravo",
    description: "Create a free Scoravo account and start practicing IELTS and PTE tests today.",
    url: "https://www.scoravo.com/signup",
    siteName: "Scoravo",
  },
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
