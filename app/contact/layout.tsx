import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Scoravo",
  description: "Get in touch with the Scoravo team for support, feedback, or any questions about IELTS and PTE practice.",
  alternates: { canonical: "https://www.scoravo.com/contact" },
  openGraph: {
    title: "Contact | Scoravo",
    description: "Get in touch with the Scoravo team.",
    url: "https://www.scoravo.com/contact",
    siteName: "Scoravo",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
