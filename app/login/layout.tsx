import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In | Scoravo",
  description: "Log in to your Scoravo account to access IELTS and PTE practice tests.",
  alternates: { canonical: "https://www.scoravo.com/login" },
  openGraph: {
    title: "Log In | Scoravo",
    description: "Log in to your Scoravo account.",
    url: "https://www.scoravo.com/login",
    siteName: "Scoravo",
  },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
