import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Logo = ({ size = "md", className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-12 h-12"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <style>
        {`
          @keyframes node-pulse {
            0% { transform: scale(1); opacity: 0.8; filter: drop-shadow(0 0 0px #F05A28); }
            50% { transform: scale(1.2); opacity: 1; filter: drop-shadow(0 0 4px #F05A28); }
            100% { transform: scale(1); opacity: 0.8; filter: drop-shadow(0 0 0px #F05A28); }
          }
          .animate-node {
            animation: node-pulse 3s infinite ease-in-out;
            transform-origin: center;
          }
        `}
      </style>

      <svg
        viewBox="0 0 40 40"
        className={`${sizeClasses[size]} flex-shrink-0 text-maroon dark:text-white`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Pillar */}
        <path d="M12 32 L20 8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="square" />
        
        {/* Right Pillar */}
        <path d="M28 32 L20 8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="square" />
        
        {/* Crossbar */}
        <path d="M16 24 H24" stroke="currentColor" strokeWidth="4" strokeLinecap="square" />

        {/* The Orange Data Node / Spark */}
        <circle
          cx="20"
          cy="24"
          r="2.5"
          fill="#F05A28"
          className="animate-node"
        />
      </svg>
      
      {/* Typography */}
      <div className="flex items-baseline font-bold tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
        <span className="text-maroon dark:text-white" style={{ fontSize: size === 'lg' ? '1.5rem' : '1.25rem' }}>
          Alphaes
        </span>
        <span style={{ color: '#D4AF37', fontSize: size === 'lg' ? '1.5rem' : '1.25rem', marginLeft: '2px' }}>
          AI
        </span>
      </div>
    </div>
  );
};

export default Logo;
