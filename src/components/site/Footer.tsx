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
    <footer className="bg-[#0B132B] text-[#F4F7FC] w-full py-16 border-t border-[#1C2541]">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div className="md:col-span-1 lg:col-span-2 space-y-4">
          <Link href="/" className="inline-block">
            <Logo variant="dark" size="md" />
          </Link>
          <p className="font-['Inter'] text-sm text-[#8D99AE]">
            {footer.tagline}
          </p>
          <p className="font-['Inter'] text-xs text-[#64748B] max-w-sm leading-relaxed">
            {footer.description}
          </p>
        </div>

        {footer.columns.map((col) => {
          const isContactCol = col.id === "col-contact" || col.title.toLowerCase().includes("contact");
          return (
            <div key={col.id} className={`flex flex-col gap-3 font-['Inter'] text-sm ${isContactCol ? 'lg:col-span-1' : ''}`}>
              <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#FF4500] uppercase tracking-wider mb-1">
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
                    className="text-[#CBD5E1] hover:text-[#FF4500] transition-colors flex items-center gap-2 group leading-relaxed font-medium"
                    href={link.href}
                  >
                    {isAddress && <MapPin className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" />}
                    {isPhone && <Phone className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" />}
                    {isMail && <Mail className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" />}
                    {isBriefing && <Calendar className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" />}
                    <span className="group-hover:text-[#FF4500] transition-colors">{link.label}</span>
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
