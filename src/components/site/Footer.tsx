"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Network, MapPin, Phone, Mail, Calendar } from "lucide-react";
import { useCMS } from "@/context/CMSContext";
import Logo from "@/components/ui/Logo";

export const Footer = () => {
  const { data } = useCMS();
  const { footer } = data;
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="relative w-full py-16 border-t border-[#ff7338]/40 overflow-hidden text-[#fff8f5]">
      {/* Pure CSS Vibrant Orange Multi-stop Gradient matching top hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 0%, #ff4d15 0%, transparent 70%),
            linear-gradient(180deg, #ff5722 0%, #ff7338 40%, #964900 100%)
          `,
        }}
      />

      {/* Pure Code Halftone Micro-Dot Pattern Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 1px)`,
          backgroundSize: "6px 6px",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
        <div className="md:col-span-1 lg:col-span-2 space-y-4">
          <Link href="/" className="inline-block">
            <Logo variant="dark" size="md" />
          </Link>
          <p className="font-['Inter'] text-sm text-[#ffffff]/90 font-medium">
            {footer.tagline}
          </p>
          <p className="font-['Inter'] text-xs text-[#ffffff]/75 max-w-sm leading-relaxed">
            {footer.description}
          </p>
        </div>

        {footer.columns.map((col) => {
          const isContactCol = col.id === "col-contact" || col.title.toLowerCase().includes("contact");
          return (
            <div key={col.id} className={`flex flex-col gap-3 font-['Inter'] text-sm ${isContactCol ? 'lg:col-span-1' : ''}`}>
              <span className="font-['JetBrains_Mono'] text-xs font-extrabold text-[#ffe2d1] uppercase tracking-wider mb-1 drop-shadow-sm">
                {col.title}
              </span>
              {col.links.map((link) => {
                const isAddress = link.label.toLowerCase().includes("balaji arcade") || link.label.toLowerCase().includes("bengaluru") || link.id === "l-13";
                const isPhone = link.label.includes("+91") || link.href.startsWith("tel:");
                const isMail = link.href.startsWith("mailto:");
                const isBriefing = link.href === "/contact" && !isAddress;

                return (
                  <Link
                    key={link.id}
                    className="text-[#ffffff]/85 hover:text-[#ffffff] transition-colors flex items-center gap-2 group leading-relaxed font-medium"
                    href={link.href}
                  >
                    {isAddress && <MapPin className="w-4 h-4 text-[#ffe2d1] shrink-0 mt-0.5" />}
                    {isPhone && <Phone className="w-4 h-4 text-[#ffe2d1] shrink-0 mt-0.5" />}
                    {isMail && <Mail className="w-4 h-4 text-[#ffe2d1] shrink-0 mt-0.5" />}
                    {isBriefing && <Calendar className="w-4 h-4 text-[#ffe2d1] shrink-0 mt-0.5" />}
                    <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
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
