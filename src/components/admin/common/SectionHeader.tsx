"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  description: string;
  icon: React.ElementType;
  iconColor?: string;
  previewHref?: string;
  previewLabel?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  icon: Icon,
  iconColor = "text-[#964900]",
  previewHref,
  previewLabel,
}) => {
  return (
    <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4 mb-6">
      <div>
        <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
          <Icon className={`w-5 h-5 ${iconColor}`} />
          {title}
        </h2>
        <p className="text-xs text-[#564336] mt-0.5">{description}</p>
      </div>
      {previewHref && (
        <Link
          href={previewHref}
          target="_blank"
          className="text-xs font-mono font-bold text-[#964900] hover:underline flex items-center gap-1"
        >
          <span>{previewLabel || `Preview ${previewHref}`}</span>
          <ExternalLink className="w-3 h-3" />
        </Link>
      )}
    </div>
  );
};
