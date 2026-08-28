"use client";

import React from "react";
import { Zap } from "lucide-react";
import { FullCMSData } from "@/lib/cms-store";
import { SectionHeader } from "../../common/SectionHeader";
import { FormField } from "../../common/FormField";

interface Props {
  formData: FullCMSData;
  setFormData: React.Dispatch<React.SetStateAction<FullCMSData>>;
}

export const CtaBannerSectionEditor: React.FC<Props> = ({ formData, setFormData }) => {
  const cta = formData.homepage.ctaBanner;

  const updateCta = (fields: Partial<typeof cta>) => {
    setFormData((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        ctaBanner: { ...prev.homepage.ctaBanner, ...fields },
      },
    }));
  };

  return (
    <div id="sec-07-cta" className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
      <SectionHeader
        title="Bottom Call-To-Action Banner"
        description="Customize final conversion headline, copy, and scoping buttons."
        icon={Zap}
        previewHref="/#cta"
        previewLabel="Preview /#cta"
      />

      <FormField
        label="CTA Headline"
        value={cta.title}
        onChange={(val) => updateCta({ title: val })}
      />

      <FormField
        label="CTA Description Paragraph"
        type="textarea"
        rows={2}
        value={cta.description}
        onChange={(val) => updateCta({ description: val })}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Primary CTA Text"
          value={cta.primaryCtaText}
          onChange={(val) => updateCta({ primaryCtaText: val })}
        />
        <FormField
          label="Primary CTA Href"
          type="mono"
          value={cta.primaryCtaHref}
          onChange={(val) => updateCta({ primaryCtaHref: val })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Secondary CTA Text"
          value={cta.secondaryCtaText || "Explore Services & Products"}
          onChange={(val) => updateCta({ secondaryCtaText: val })}
        />
        <FormField
          label="Secondary CTA Href"
          type="mono"
          value={cta.secondaryCtaHref || "/services"}
          onChange={(val) => updateCta({ secondaryCtaHref: val })}
        />
      </div>
    </div>
  );
};
