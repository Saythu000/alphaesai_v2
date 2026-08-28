"use client";

import React from "react";
import { Cpu, Plus, Trash2 } from "lucide-react";
import { FullCMSData } from "@/lib/cms-store";
import { SectionHeader } from "../../common/SectionHeader";
import { FormField } from "../../common/FormField";

interface Props {
  formData: FullCMSData;
  setFormData: React.Dispatch<React.SetStateAction<FullCMSData>>;
}

export const FdeSectionEditor: React.FC<Props> = ({ formData, setFormData }) => {
  const fde = formData.homepage.fdeInteractiveHub;

  const updateFde = (fields: Partial<typeof fde>) => {
    setFormData((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        fdeInteractiveHub: { ...prev.homepage.fdeInteractiveHub, ...fields },
      },
    }));
  };

  return (
    <div id="sec-05-fde" className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
      <SectionHeader
        title="Forward Deployed Engineering (FDE) Hub & ROI Calculator"
        description="Edit Hub title, deployment timeline steps, live calculator benchmarks, and outcome metrics."
        icon={Cpu}
        previewHref="/#fde-hub"
        previewLabel="Preview /#fde-hub"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Badge Pill Text"
          value={fde.badgeText || ""}
          onChange={(val) => updateFde({ badgeText: val })}
        />
        <FormField
          label="Headline Title"
          value={fde.title || ""}
          onChange={(val) => updateFde({ title: val })}
        />
      </div>

      {/* Hub Timeline Steps Editor */}
      <div className="pt-4 border-t border-[#ddc1b0] space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#964900] uppercase">
            FDE Hub Deployment Steps ({fde.steps?.length || 0})
          </h3>
          <button
            type="button"
            onClick={() => {
              const newStep = {
                id: `step-${Date.now()}`,
                number: "01",
                title: "Step Title",
                description: "Detailed step execution plan.",
                targetNodeIds: [],
              };
              updateFde({ steps: [...(fde.steps || []), newStep] });
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#964900] text-white text-xs font-bold rounded-lg hover:bg-[#783a00]"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Hub Step
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {(fde.steps || []).map((step, idx) => (
            <div key={step.id} className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-3 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#964900] uppercase">
                  Step #{idx + 1} (Step {step.number})
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const updated = fde.steps.filter((_, i) => i !== idx);
                    updateFde({ steps: updated });
                  }}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <FormField
                  label="Step Number"
                  value={step.number}
                  onChange={(val) => {
                    const updated = [...fde.steps];
                    updated[idx] = { ...updated[idx], number: val };
                    updateFde({ steps: updated });
                  }}
                />
                <FormField
                  label="Step Title"
                  value={step.title}
                  onChange={(val) => {
                    const updated = [...fde.steps];
                    updated[idx] = { ...updated[idx], title: val };
                    updateFde({ steps: updated });
                  }}
                />
              </div>

              <FormField
                label="Step Description"
                type="textarea"
                rows={2}
                value={step.description}
                onChange={(val) => {
                  const updated = [...fde.steps];
                  updated[idx] = { ...updated[idx], description: val };
                  updateFde({ steps: updated });
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
