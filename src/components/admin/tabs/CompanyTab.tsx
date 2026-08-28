"use client";

import React, { useState } from "react";
import { Info } from "lucide-react";
import { FullCMSData } from "@/lib/cms-store";
import { SectionHeader } from "../common/SectionHeader";
import { FormField } from "../common/FormField";

interface Props {
  formData: FullCMSData;
  setFormData: React.Dispatch<React.SetStateAction<FullCMSData>>;
}

export const CompanyTab: React.FC<Props> = ({ formData, setFormData }) => {
  const [selectedCompanyKey, setSelectedCompanyKey] = useState<
    "about" | "careers" | "contact" | "drgodly" | "oneaiAssist" | "partners"
  >("about");

  const companyNav = [
    { key: "about", label: "About Us & Leadership", slug: "/about" },
    { key: "careers", label: "Careers & Open Positions", slug: "/careers" },
    { key: "contact", label: "Contact & Consultations", slug: "/contact" },
    { key: "drgodly", label: "Dr. Godly (Founder)", slug: "/drgodly" },
    { key: "oneaiAssist", label: "OneAI Assist Product", slug: "/oneai-assist" },
    { key: "partners", label: "Global Partner Network", slug: "/partners" },
  ] as const;

  const currentCompany = formData.pages[selectedCompanyKey];

  const updateCurrentCompany = (fields: Record<string, unknown>) => {
    setFormData((prev) => ({
      ...prev,
      pages: {
        ...prev.pages,
        [selectedCompanyKey]: {
          ...prev.pages[selectedCompanyKey],
          ...fields,
        },
      },
    }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
        <SectionHeader
          title="Company Subpages Manager"
          description="Edit About, Careers, Founder Dr. Godly, OneAI Assist, Contact, and Partners content."
          icon={Info}
          previewHref={companyNav.find((c) => c.key === selectedCompanyKey)?.slug}
        />

        <div className="flex flex-wrap gap-2 border-b border-[#ddc1b0] pb-4">
          {companyNav.map((comp) => (
            <button
              key={comp.key}
              type="button"
              onClick={() => setSelectedCompanyKey(comp.key)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                selectedCompanyKey === comp.key
                  ? "bg-[#964900] text-white shadow-sm"
                  : "bg-[#fff8f5] text-[#564336] hover:bg-[#ddc1b0]/30 border border-[#ddc1b0]"
              }`}
            >
              {comp.label}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {"heroBadge" in currentCompany && (
            <FormField
              label="Badge Pill Text"
              value={(currentCompany as unknown as Record<string, string>).heroBadge || ""}
              onChange={(val) => updateCurrentCompany({ heroBadge: val })}
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Hero Title"
              value={(currentCompany as unknown as Record<string, string>).title || ""}
              onChange={(val) => updateCurrentCompany({ title: val })}
            />
            <FormField
              label="Subtitle"
              value={(currentCompany as unknown as Record<string, string>).subtitle || ""}
              onChange={(val) => updateCurrentCompany({ subtitle: val })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
