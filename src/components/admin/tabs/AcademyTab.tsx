"use client";

import React, { useState } from "react";
import { GraduationCap } from "lucide-react";
import { FullCMSData, AcademySubpagesCMSData } from "@/lib/cms-store";
import { SectionHeader } from "../common/SectionHeader";
import { FormField } from "../common/FormField";

interface Props {
  formData: FullCMSData;
  setFormData: React.Dispatch<React.SetStateAction<FullCMSData>>;
}

export const AcademyTab: React.FC<Props> = ({ formData, setFormData }) => {
  const [selectedTrackKey, setSelectedTrackKey] = useState<
    keyof AcademySubpagesCMSData
  >("databricks");

  const tracksNav: { key: keyof AcademySubpagesCMSData; label: string; slug: string }[] = [
    { key: "databricks", label: "Databricks Intelligence Platform", slug: "/academy/databricks" },
    { key: "agenticAi", label: "Agentic AI & LLM Systems", slug: "/academy/agentic-ai" },
    { key: "fullstackAi", label: "Fullstack AI Development", slug: "/academy/fullstack-developer-with-ai" },
  ];

  const currentTrack = formData.pages.academySubpages[selectedTrackKey];

  const updateCurrentTrack = (fields: Partial<typeof currentTrack>) => {
    setFormData((prev) => ({
      ...prev,
      pages: {
        ...prev.pages,
        academySubpages: {
          ...prev.pages.academySubpages,
          [selectedTrackKey]: {
            ...prev.pages.academySubpages[selectedTrackKey],
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
          title="Academy Training Tracks Manager"
          description="Customize curriculum, hero headlines, badges, modules, and target roles for 3 specialized training tracks."
          icon={GraduationCap}
          previewHref={tracksNav.find((t) => t.key === selectedTrackKey)?.slug}
        />

        <div className="flex flex-wrap gap-2 border-b border-[#ddc1b0] pb-4">
          {tracksNav.map((track) => (
            <button
              key={track.key}
              type="button"
              onClick={() => setSelectedTrackKey(track.key)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                selectedTrackKey === track.key
                  ? "bg-[#964900] text-white shadow-sm"
                  : "bg-[#fff8f5] text-[#564336] hover:bg-[#ddc1b0]/30 border border-[#ddc1b0]"
              }`}
            >
              {track.label}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <FormField
            label="Badge Pill Text"
            value={currentTrack.heroBadge}
            onChange={(val) => updateCurrentTrack({ heroBadge: val })}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Track Hero Title"
              value={currentTrack.title}
              onChange={(val) => updateCurrentTrack({ title: val })}
            />
            <FormField
              label="Subtitle"
              value={currentTrack.subtitle}
              onChange={(val) => updateCurrentTrack({ subtitle: val })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
