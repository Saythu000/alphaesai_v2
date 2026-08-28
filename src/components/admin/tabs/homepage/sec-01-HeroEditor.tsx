"use client";

import React from "react";
import { Layout } from "lucide-react";
import { FullCMSData } from "@/lib/cms-store";
import { SectionHeader } from "../../common/SectionHeader";
import { FormField } from "../../common/FormField";

interface Props {
  formData: FullCMSData;
  setFormData: React.Dispatch<React.SetStateAction<FullCMSData>>;
}

export const HeroSectionEditor: React.FC<Props> = ({ formData, setFormData }) => {
  const hero = formData.homepage.hero;

  const updateHero = (fields: Partial<typeof hero>) => {
    setFormData((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        hero: { ...prev.homepage.hero, ...fields },
      },
    }));
  };

  return (
    <div id="sec-01-hero" className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
      <SectionHeader
        title="Hero Section & Value Proposition"
        description="Edit main headline, gradient title, description copy, and call-to-action buttons."
        icon={Layout}
        previewHref="/"
        previewLabel="Preview /"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField
          label="Announcement Text"
          value={hero.announcementText}
          onChange={(val) => updateHero({ announcementText: val })}
        />
        <FormField
          label="Announcement Link Text"
          value={hero.announcementLinkText}
          onChange={(val) => updateHero({ announcementLinkText: val })}
        />
        <FormField
          label="Announcement Link Href"
          type="mono"
          value={hero.announcementLinkHref}
          onChange={(val) => updateHero({ announcementLinkHref: val })}
        />
      </div>

      <FormField
        label="Headline"
        value={hero.headline}
        onChange={(val) => updateHero({ headline: val })}
      />

      <FormField
        label="Subtitle Paragraph"
        type="textarea"
        rows={3}
        value={hero.subtitle}
        onChange={(val) => updateHero({ subtitle: val })}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Primary CTA Button Text"
          value={hero.primaryCtaText}
          onChange={(val) => updateHero({ primaryCtaText: val })}
        />
        <FormField
          label="Primary CTA Link Href"
          type="mono"
          value={hero.primaryCtaHref}
          onChange={(val) => updateHero({ primaryCtaHref: val })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Secondary CTA Button Text"
          value={hero.secondaryCtaText || ""}
          onChange={(val) => updateHero({ secondaryCtaText: val })}
        />
        <FormField
          label="Secondary CTA Link Href"
          type="mono"
          value={hero.secondaryCtaHref || ""}
          onChange={(val) => updateHero({ secondaryCtaHref: val })}
        />
      </div>
    </div>
  );
};
