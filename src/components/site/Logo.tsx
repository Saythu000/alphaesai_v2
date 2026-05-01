import { Link } from "react-router-dom";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-center gap-2 group ${className}`}>
    {/* Geometric mark inspired by alphaesai.com */}
    <span className="relative inline-flex h-8 w-8 items-center justify-center" aria-hidden>
      <span className="absolute left-0 top-0 h-4 w-4 rounded-full bg-emerald-500" />
      <span className="absolute right-0 bottom-0 h-0 w-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[20px] border-b-red-500 rotate-180" />
      <span className="absolute right-1 top-1 h-3 w-3 rounded-full bg-blue-600" />
    </span>
    <span className="font-normal text-lg tracking-tight">
      alphaes<span className="font-bold text-primary">AI</span>
    </span>
  </Link>
);
