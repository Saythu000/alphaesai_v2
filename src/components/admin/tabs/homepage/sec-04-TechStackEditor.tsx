"use client";

import React from "react";
import { ShieldCheck, Plus, Trash2 } from "lucide-react";
import { FullCMSData } from "@/lib/cms-store";
import { SectionHeader } from "../../common/SectionHeader";
import { FormField } from "../../common/FormField";

interface Props {
  formData: FullCMSData;
  setFormData: React.Dispatch<React.SetStateAction<FullCMSData>>;
}

export const TechStackSectionEditor: React.FC<Props> = ({ formData, setFormData }) => {
  const tech = formData.homepage.techStackBar;

  const updateTech = (fields: Partial<typeof tech>) => {
    setFormData((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        techStackBar: { ...prev.homepage.techStackBar, ...fields },
      },
    }));
  };

  return (
    <div id="sec-04-techstack" className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
      <SectionHeader
        title="Tech Stack Bar & Security Compliance Badges"
        description="Edit headline, sub-headline, stack items, and trust & compliance logos."
        icon={ShieldCheck}
        iconColor="text-emerald-600"
        previewHref="/#tech-stack"
        previewLabel="Preview /#tech-stack"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField
          label="Badge Text"
          value={tech.badge}
          onChange={(val) => updateTech({ badge: val })}
        />
        <FormField
          label="Headline Title"
          value={tech.title}
          onChange={(val) => updateTech({ title: val })}
        />
        <FormField
          label="Subtitle / Category"
          value={tech.subtitle}
          onChange={(val) => updateTech({ subtitle: val })}
        />
      </div>

      {/* Tech Stack Items Editor */}
      <div className="pt-4 border-t border-[#ddc1b0] space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#964900] uppercase">
            Tech Stack Technologies ({tech.techStack?.length || 0})
          </h3>
          <button
            type="button"
            onClick={() => {
              const newTech = {
                id: `tech-${Date.now()}`,
                name: "New Technology",
                category: "Data & Compute",
                iconName: "Cpu",
              };
              updateTech({ techStack: [...(tech.techStack || []), newTech] });
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#964900] text-white text-xs font-bold rounded-lg hover:bg-[#783a00]"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Technology
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {(tech.techStack || []).map((t, idx) => (
            <div key={t.id} className="p-3 border border-[#ddc1b0] bg-white rounded-xl space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#964900] uppercase">
                  Tech #{idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const updated = tech.techStack.filter((_, i) => i !== idx);
                    updateTech({ techStack: updated });
                  }}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>

              <FormField
                label="Name"
                value={t.name}
                onChange={(val) => {
                  const updated = [...tech.techStack];
                  updated[idx] = { ...updated[idx], name: val };
                  updateTech({ techStack: updated });
                }}
              />
              <FormField
                label="Category / Tagline"
                value={t.category}
                onChange={(val) => {
                  const updated = [...tech.techStack];
                  updated[idx] = { ...updated[idx], category: val };
                  updateTech({ techStack: updated });
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
