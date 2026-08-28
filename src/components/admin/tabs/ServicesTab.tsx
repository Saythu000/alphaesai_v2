"use client";

import React, { useState } from "react";
import { Briefcase } from "lucide-react";
import { FullCMSData, ServiceSubpagesCMSData } from "@/lib/cms-store";
import { SectionHeader } from "../common/SectionHeader";
import { FormField } from "../common/FormField";

interface Props {
  formData: FullCMSData;
  setFormData: React.Dispatch<React.SetStateAction<FullCMSData>>;
}

export const ServicesTab: React.FC<Props> = ({ formData, setFormData }) => {
  const [selectedSubpageKey, setSelectedSubpageKey] = useState<
    keyof ServiceSubpagesCMSData
  >("fde");

  const subpagesNav: { key: keyof ServiceSubpagesCMSData; label: string; slug: string }[] = [
    { key: "fde", label: "Forward Deployed AI Engineers", slug: "/services/forward-deployed-ai-engineering" },
    { key: "databaseTuning", label: "DB Performance & Cloud Optimization", slug: "/services/database-performance-and-cloud-optimization" },
    { key: "cloudMigration", label: "Cloud Migration, Security & Databricks", slug: "/services/cloud-migration-cyber-security-databricks-snowflake" },
    { key: "dataAnnotation", label: "Data Annotation & RLHF", slug: "/services/data-annotation-and-rlhf" },
  ];

  const currentSubpage = formData.pages.serviceSubpages[selectedSubpageKey];

  const updateCurrentSubpage = (fields: Partial<typeof currentSubpage>) => {
    setFormData((prev) => ({
      ...prev,
      pages: {
        ...prev.pages,
        serviceSubpages: {
          ...prev.pages.serviceSubpages,
          [selectedSubpageKey]: {
            ...prev.pages.serviceSubpages[selectedSubpageKey],
            ...fields,
          },
        },
      },
    }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
        <SectionHeader
          title="Services & Solutions Subpages Manager"
          description="Customize headlines, pillars, process timelines, tech stacks, and metrics across 4 specialized service subpages."
          icon={Briefcase}
          previewHref={subpagesNav.find((s) => s.key === selectedSubpageKey)?.slug}
        />

        <div className="flex flex-wrap gap-2 border-b border-[#ddc1b0] pb-4">
          {subpagesNav.map((sub) => (
            <button
              key={sub.key}
              type="button"
              onClick={() => setSelectedSubpageKey(sub.key)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                selectedSubpageKey === sub.key
                  ? "bg-[#964900] text-white shadow-sm"
                  : "bg-[#fff8f5] text-[#564336] hover:bg-[#ddc1b0]/30 border border-[#ddc1b0]"
              }`}
            >
              {sub.label}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <FormField
            label="Badge Pill Text"
            value={currentSubpage.heroBadge}
            onChange={(val) => updateCurrentSubpage({ heroBadge: val })}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Hero Title"
              value={currentSubpage.title}
              onChange={(val) => updateCurrentSubpage({ title: val })}
            />
            <FormField
              label="Subtitle"
              value={currentSubpage.subtitle}
              onChange={(val) => updateCurrentSubpage({ subtitle: val })}
            />
          </div>

          <FormField
            label="Hero Description"
            type="textarea"
            rows={3}
            value={currentSubpage.description}
            onChange={(val) => updateCurrentSubpage({ description: val })}
          />
        </div>
      </div>
    </div>
  );
};
