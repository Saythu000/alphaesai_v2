"use client";

import React from "react";
import { usePathname } from "next/navigation";

export const SiteFrame = () => {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      {/* Top Border Bar connecting seamlessly to Navbar Cutouts */}
      <div className="fixed top-0 left-0 right-0 h-2.5 bg-[#fff8f5] z-[9990] pointer-events-none" />
    </>
  );
};
