import Link from "next/link";
import UiLogo from "@/components/ui/Logo";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link href="/" className={`inline-block hover:opacity-90 transition-opacity ${className}`}>
    <UiLogo size="md" />
  </Link>
);
