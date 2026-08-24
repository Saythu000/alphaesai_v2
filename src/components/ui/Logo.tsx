import React from "react";
import { Hexagon } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Logo = ({ size = "md", className = "" }: LogoProps) => {
  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-6 h-6", 
    lg: "w-7 h-7"
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Hexagon className={`${iconSizes[size]} fill-[#FF3621] text-[#FF3621] shrink-0`} />
      <span className={`font-bold tracking-tight text-[#071e26] ${textSizes[size]}`}>
        AlphaesAI
      </span>
    </div>
  );
};

export default Logo;
