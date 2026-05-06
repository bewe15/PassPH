import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="PassPH"
        width={180}
        height={60}
        className={className}
        priority
      />
    </Link>
  );
}

export function LogoIcon({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <Link href="/">
      <Image
        src="/icon.svg"
        alt="PassPH"
        width={46}
        height={48}
        className={className}
        priority
      />
    </Link>
  );
}
