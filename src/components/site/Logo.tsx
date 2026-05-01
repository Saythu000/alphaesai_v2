import Link from "next/link";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link href="/" className={`flex items-center gap-2 group ${className}`}>
    <div className="relative h-8 w-8 rounded-xl bg-primary shadow-md flex items-center justify-center border border-primary/20">
      <span className="relative text-white font-bold text-sm">A</span>
    </div>
    <span className="font-bold text-lg tracking-tight text-foreground">
      Alpheas<span className="text-primary">AI</span>
    </span>
  </Link>
);
