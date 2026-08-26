"use client";

import Link from "next/link";
import { Network, MapPin, Phone, Mail, Calendar } from "lucide-react";
import { useCMS } from "@/context/CMSContext";

export const Footer = () => {
  const { data } = useCMS();
  const { footer } = data;

  return (
    <footer className="bg-[#241913] text-[#fff8f5] w-full py-16 border-t border-[#ddc1b0]/20">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div className="md:col-span-1 lg:col-span-2 space-y-4">
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
          <p className="font-['Inter'] text-xs text-[#f3ded3]/50 max-w-sm">
            {footer.description}
          </p>
        </div>

        {footer.columns.map((col) => {
          const isContactCol = col.id === "col-contact" || col.title.toLowerCase().includes("contact");
          return (
            <div key={col.id} className={`flex flex-col gap-3 font-['Inter'] text-sm ${isContactCol ? 'lg:col-span-1' : ''}`}>
              <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#ffb786] uppercase tracking-wider mb-1">
                {col.title}
              </span>
              {col.links.map((link) => {
                const isAddress = link.label.toLowerCase().includes("balaji arcade") || link.label.toLowerCase().includes("bengaluru") || link.id === "l-13";
                const isPhone = link.label.includes("+91") || link.href.startsWith("tel:");
                const isMail = link.href.startsWith("mailto:");
                const isBriefing = link.href === "/contact" && !isAddress;
                const isCareers = link.href === "/careers" || link.label.toLowerCase() === "careers";

                return (
                  <Link
                    key={link.id}
                    className="text-[#f3ded3]/80 hover:text-[#ffb786] transition-colors flex items-center gap-2 group leading-relaxed"
                    href={link.href}
                  >
                    {isAddress && <MapPin className="w-4 h-4 text-[#ffb786] shrink-0 mt-0.5" />}
                    {isPhone && <Phone className="w-4 h-4 text-[#ffb786] shrink-0 mt-0.5" />}
                    {isMail && <Mail className="w-4 h-4 text-[#ffb786] shrink-0 mt-0.5" />}
                    {isBriefing && <Calendar className="w-4 h-4 text-[#ffb786] shrink-0 mt-0.5" />}
                    <span className="group-hover:text-[#ffb786] transition-colors">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </footer>
  );
};
