import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  className?: string;
  showSubtitle?: boolean;
}

const Logo = ({ size = "md", variant = "light", className = "", showSubtitle = true }: LogoProps) => {
  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-10 h-10"
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg sm:text-xl",
    lg: "text-xl sm:text-2xl"
  };

  const textColor = variant === "dark" ? "text-[#fff8f5]" : "text-[#241913]";
  const subtitleColor = variant === "dark" ? "text-[#ffb786]" : "text-[#964900]";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo-mark.png"
        alt="Alpha ESAI Logo"
        className={`${iconSizes[size]} object-contain shrink-0`}
      />
      <div className="flex flex-col leading-none">
        <span className={`font-['Hanken_Grotesk'] font-extrabold tracking-tight ${textColor} ${textSizes[size]}`}>
          Alpha ES<span className="text-[#ff7700] font-black ml-[1px]">AI</span>
        </span>
        {showSubtitle && (
          <span className={`text-[8px] font-['JetBrains_Mono'] font-bold ${subtitleColor} uppercase tracking-[0.18em] pt-0.5`}>
            TECHNOLOGIES
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
