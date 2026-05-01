import { Link } from "react-router-dom";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-center gap-2 group ${className}`}>
    <div className="relative h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-accent shadow-glow flex items-center justify-center">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-50 blur-md group-hover:opacity-80 transition-opacity" />
      <span className="relative text-primary-foreground font-bold text-sm">A</span>
    </div>
    <span className="font-bold text-lg tracking-tight">
      Alpheas<span className="text-gradient">AI</span>
    </span>
  </Link>
);
