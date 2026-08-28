"use client";

import React from "react";
import { Box, Plus, Trash2 } from "lucide-react";
import { FullCMSData } from "@/lib/cms-store";
import { SectionHeader } from "../../common/SectionHeader";
import { FormField } from "../../common/FormField";

interface Props {
  formData: FullCMSData;
  setFormData: React.Dispatch<React.SetStateAction<FullCMSData>>;
}

export const ShowcaseSectionEditor: React.FC<Props> = ({ formData, setFormData }) => {
  const showcase = formData.homepage.showcase3d;

  const updateShowcase = (fields: Partial<typeof showcase>) => {
    setFormData((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        showcase3d: { ...prev.homepage.showcase3d, ...fields },
      },
    }));
  };

  return (
    <div id="sec-02-showcase" className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
      <SectionHeader
        title="3D Interactive Robot & Showcase Editor"
        description="Edit headline, model badge, system architecture overview, and verified outcome metrics."
        icon={Box}
        previewHref="/#showcase"
        previewLabel="Preview /#showcase"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Badge Text"
          value={showcase.badgeText}
          onChange={(val) => updateShowcase({ badgeText: val })}
        />
        <FormField
          label="Chest Brand Text"
          value={showcase.chestBrandText}
          onChange={(val) => updateShowcase({ chestBrandText: val })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Headline Title"
          value={showcase.title}
          onChange={(val) => updateShowcase({ title: val })}
        />
        <FormField
          label="Subtitle"
          value={showcase.subtitle}
          onChange={(val) => updateShowcase({ subtitle: val })}
        />
      </div>

      <FormField
        label="Card Headline"
        value={showcase.cardHeadline}
        onChange={(val) => updateShowcase({ cardHeadline: val })}
      />

      <FormField
        label="Card Description"
        type="textarea"
        rows={2}
        value={showcase.cardDescription}
        onChange={(val) => updateShowcase({ cardDescription: val })}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Card Primary Button Text"
          value={showcase.cardBtn1Text}
          onChange={(val) => updateShowcase({ cardBtn1Text: val })}
        />
        <FormField
          label="Card Primary Button Href"
          type="mono"
          value={showcase.cardBtn1Href}
          onChange={(val) => updateShowcase({ cardBtn1Href: val })}
        />
      </div>

      {/* Verified Metrics Counter Grid Editor */}
      <div className="pt-4 border-t border-[#ddc1b0] space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#964900] uppercase">
            Verified Impact Metrics Counter ({formData.homepage.metrics?.length || 0})
          </h3>
          <button
            type="button"
            onClick={() => {
              const newMetric = {
                id: `metric-${Date.now()}`,
                value: "10x",
                description: "Verified enterprise benchmark metric",
              };
              setFormData((prev) => ({
                ...prev,
                homepage: {
                  ...prev.homepage,
                  metrics: [...(prev.homepage.metrics || []), newMetric],
                },
              }));
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#964900] text-white text-xs font-bold rounded-lg hover:bg-[#783a00]"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Impact Metric
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(formData.homepage.metrics || []).map((m, idx) => (
            <div key={m.id} className="p-3 border border-[#ddc1b0] bg-white rounded-xl space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#964900] uppercase">
                  Metric #{idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const updated = formData.homepage.metrics.filter((_, i) => i !== idx);
                    setFormData((prev) => ({
                      ...prev,
                      homepage: { ...prev.homepage, metrics: updated },
                    }));
                  }}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <FormField
                  label="Value"
                  value={m.value}
                  onChange={(val) => {
                    const updated = [...formData.homepage.metrics];
                    updated[idx] = { ...updated[idx], value: val };
                    setFormData((prev) => ({
                      ...prev,
                      homepage: { ...prev.homepage, metrics: updated },
                    }));
                  }}
                />
                <FormField
                  label="Description"
                  value={m.description}
                  onChange={(val) => {
                    const updated = [...formData.homepage.metrics];
                    updated[idx] = { ...updated[idx], description: val };
                    setFormData((prev) => ({
                      ...prev,
                      homepage: { ...prev.homepage, metrics: updated },
                    }));
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
