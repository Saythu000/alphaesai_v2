"use client";

import Link from "next/link";
import { Network } from "lucide-react";
import { useCMS } from "@/context/CMSContext";

export const Footer = () => {
  const { data } = useCMS();
  const { footer } = data;

  return (
    <footer className="bg-[#241913] text-[#fff8f5] w-full py-16 border-t border-[#ddc1b0]/20">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        <div className="col-span-2 lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-[#964900] flex items-center justify-center text-white">
              <Network className="w-4 h-4" />
            </div>
            <span className="font-['Hanken_Grotesk'] text-2xl font-extrabold text-[#ffb786]">
              {footer.brandName}
            </span>
          </div>
          <p className="font-['Inter'] text-sm text-[#f3ded3]/70">
            {footer.tagline}
          </p>
          <p className="font-['Inter'] text-xs text-[#f3ded3]/50">
            {footer.description}
          </p>
        </div>

        {footer.columns.map((col) => (
          <div key={col.id} className="flex flex-col gap-3 font-['Inter'] text-sm">
            <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#ffb786] uppercase tracking-wider mb-1">
              {col.title}
            </span>
            {col.links.map((link) => (
              <Link
                key={link.id}
                className="text-[#f3ded3]/80 hover:text-[#00abf1] transition-colors"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};
