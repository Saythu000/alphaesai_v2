import Link from "next/link";
import Image from "next/image";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link href="/" className={`flex items-center gap-2 group ${className}`}>
    <Image 
      src="/logo.png" 
      alt="AlpheasAI Logo" 
      width={36} 
      height={36} 
      className="h-9 w-9 object-contain"
    />
    <span className="font-bold text-lg tracking-tight text-foreground">
      Alpheas<span className="text-primary">AI</span>
    </span>
  </Link>
);
