"use client";

import React from "react";
import { Grid, Plus, Trash2 } from "lucide-react";
import { FullCMSData } from "@/lib/cms-store";
import { SectionHeader } from "../../common/SectionHeader";
import { FormField } from "../../common/FormField";

interface Props {
  formData: FullCMSData;
  setFormData: React.Dispatch<React.SetStateAction<FullCMSData>>;
}

export const ArchitectureSectionEditor: React.FC<Props> = ({ formData, setFormData }) => {
  const arch = formData.homepage.architecture;

  const updateArch = (fields: Partial<typeof arch>) => {
    setFormData((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        architecture: { ...prev.homepage.architecture, ...fields },
      },
    }));
  };

  return (
    <div id="sec-03-architecture" className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
      <SectionHeader
        title="Global Architecture Bento Grid"
        description="Edit titles, description, tech stack badges, and 4 interactive architecture pillar cards."
        icon={Grid}
        previewHref="/#architecture"
        previewLabel="Preview /#architecture"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Badge Text"
          value={arch.badgeText}
          onChange={(val) => updateArch({ badgeText: val })}
        />
        <FormField
          label="Headline Title"
          value={arch.title}
          onChange={(val) => updateArch({ title: val })}
        />
      </div>

      {/* Bento Grid Cards Editor */}
      <div className="pt-4 border-t border-[#ddc1b0] space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#964900] uppercase">
            Architecture Pillar Cards ({arch.cards?.length || 0})
          </h3>
          <button
            type="button"
            onClick={() => {
              const newCard = {
                id: `arch-${Date.now()}`,
                title: "New Architecture Pillar",
                desc: "Full description of architectural layer.",
              };
              updateArch({ cards: [...(arch.cards || []), newCard] });
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#964900] text-white text-xs font-bold rounded-lg hover:bg-[#783a00]"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Architecture Card
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {(arch.cards || []).map((card, idx) => (
            <div key={card.id} className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-3 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#964900] uppercase">
                  Pillar #{idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const updated = arch.cards.filter((_, i) => i !== idx);
                    updateArch({ cards: updated });
                  }}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <FormField
                label="Title"
                value={card.title}
                onChange={(val) => {
                  const updated = [...arch.cards];
                  updated[idx] = { ...updated[idx], title: val };
                  updateArch({ cards: updated });
                }}
              />

              <FormField
                label="Description"
                type="textarea"
                rows={2}
                value={card.desc}
                onChange={(val) => {
                  const updated = [...arch.cards];
                  updated[idx] = { ...updated[idx], desc: val };
                  updateArch({ cards: updated });
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
