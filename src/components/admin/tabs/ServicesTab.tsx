"use client";

import React, { useState } from "react";
import { Briefcase, LayoutGrid, Layers, MousePointer, ShieldCheck, Database, Cloud, CheckSquare } from "lucide-react";
import { FullCMSData, ServiceSubpagesCMSData } from "@/lib/cms-store";
import { SectionHeader } from "../common/SectionHeader";
import { FormField } from "../common/FormField";

interface Props {
  formData: FullCMSData;
  setFormData: React.Dispatch<React.SetStateAction<FullCMSData>>;
}

type ServiceTabKey = "main" | keyof ServiceSubpagesCMSData;

export const ServicesTab: React.FC<Props> = ({ formData, setFormData }) => {
  const [selectedTabKey, setSelectedTabKey] = useState<ServiceTabKey>("main");

  const servicesNav: { key: ServiceTabKey; label: string; slug: string }[] = [
    { key: "main", label: "📌 Main Services Overview Page", slug: "/services" },
    { key: "fde", label: "🤖 Forward Deployed AI Engineers", slug: "/services/forward-deployed-ai-engineering" },
    { key: "databaseTuning", label: "⚡ DB Performance & Cloud Optimization", slug: "/services/database-performance-and-cloud-optimization" },
    { key: "cloudMigration", label: "☁️ Cloud Migration & Databricks", slug: "/services/cloud-migration-cyber-security-databricks-snowflake" },
    { key: "dataAnnotation", label: "🏷️ Data Annotation & RLHF", slug: "/services/data-annotation-and-rlhf" },
  ];

  // Handler for updating main /services page fields
  const updateMainServices = (fields: Partial<typeof formData.pages.services>) => {
    setFormData((prev) => ({
      ...prev,
      pages: {
        ...prev.pages,
        services: {
          ...prev.pages.services,
          ...fields,
        },
      },
    }));
  };

  // Handler for updating individual subpage fields
  const updateSubpage = (
    subKey: keyof ServiceSubpagesCMSData,
    fields: Partial<(typeof formData.pages.serviceSubpages)[keyof ServiceSubpagesCMSData]>
  ) => {
    setFormData((prev) => ({
      ...prev,
      pages: {
        ...prev.pages,
        serviceSubpages: {
          ...prev.pages.serviceSubpages,
          [subKey]: {
            ...prev.pages.serviceSubpages[subKey],
            ...fields,
          },
        },
      },
    }));
  };

  const currentSubpage =
    selectedTabKey !== "main"
      ? formData.pages.serviceSubpages[selectedTabKey as keyof ServiceSubpagesCMSData]
      : null;

  return (
    <div className="space-y-6">
      <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
        <SectionHeader
          title="Services & Solutions CMS Manager"
          description="Edit titles, hero headlines, badges, descriptions, and CTA links for the main Services landing page and all 4 specialized subpages."
          icon={Briefcase}
          previewHref={servicesNav.find((s) => s.key === selectedTabKey)?.slug}
        />

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2 border-b border-[#ddc1b0] pb-4">
          {servicesNav.map((sub) => (
            <button
              key={sub.key}
              type="button"
              onClick={() => setSelectedTabKey(sub.key)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                selectedTabKey === sub.key
                  ? "bg-[#964900] text-white shadow-sm"
                  : "bg-[#fff8f5] text-[#564336] hover:bg-[#ddc1b0]/30 border border-[#ddc1b0]"
              }`}
            >
              {sub.label}
            </button>
          ))}
        </div>

        {/* Form Fields: Main /services Page */}
        {selectedTabKey === "main" && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
              <LayoutGrid className="w-4 h-4" />
              <span>Main Services Hero Section</span>
            </div>

            <FormField
              label="Hero Badge Pill Text"
              value={formData.pages.services?.badge || ""}
              onChange={(val) => updateMainServices({ badge: val })}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Hero Title"
                value={formData.pages.services?.title || ""}
                onChange={(val) => updateMainServices({ title: val })}
              />
              <FormField
                label="Hero Subtitle"
                value={formData.pages.services?.subtitle || ""}
                onChange={(val) => updateMainServices({ subtitle: val })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Primary CTA Text"
                value={formData.pages.services?.primaryCtaText || ""}
                onChange={(val) => updateMainServices({ primaryCtaText: val })}
              />
              <FormField
                label="Primary CTA Href"
                type="mono"
                value={formData.pages.services?.primaryCtaHref || ""}
                onChange={(val) => updateMainServices({ primaryCtaHref: val })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Secondary CTA Text"
                value={formData.pages.services?.secondaryCtaText || ""}
                onChange={(val) => updateMainServices({ secondaryCtaText: val })}
              />
              <FormField
                label="Secondary CTA Href"
                type="mono"
                value={formData.pages.services?.secondaryCtaHref || ""}
                onChange={(val) => updateMainServices({ secondaryCtaHref: val })}
              />
            </div>

            {/* 1. FDE SECTION */}
            <div className="pt-6 border-t border-[#ddc1b0] space-y-4">
              <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>1. Forward-Deployed Engineering (FDE) Section</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="FDE Category Subtitle"
                  value={formData.pages.services?.fdeSubtitle || ""}
                  onChange={(val) => updateMainServices({ fdeSubtitle: val })}
                />
                <FormField
                  label="FDE Section Title"
                  value={formData.pages.services?.fdeTitle || ""}
                  onChange={(val) => updateMainServices({ fdeTitle: val })}
                />
              </div>

              <FormField
                label="FDE Description"
                type="textarea"
                rows={3}
                value={formData.pages.services?.fdeDescription || ""}
                onChange={(val) => updateMainServices({ fdeDescription: val })}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="FDE Process Hub Badge"
                  value={formData.pages.services?.fdeProcessBadge || ""}
                  onChange={(val) => updateMainServices({ fdeProcessBadge: val })}
                />
                <FormField
                  label="FDE Process Hub Title"
                  value={formData.pages.services?.fdeProcessTitle || ""}
                  onChange={(val) => updateMainServices({ fdeProcessTitle: val })}
                />
              </div>

              <div className="p-4 bg-[#fff8f5] border border-[#ddc1b0] rounded-xl space-y-4">
                <div className="text-xs font-mono font-bold text-[#964900] uppercase">FDE Accountability Guarantee Banner</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Guarantee Badge"
                    value={formData.pages.services?.fdeGuaranteeBadge || ""}
                    onChange={(val) => updateMainServices({ fdeGuaranteeBadge: val })}
                  />
                  <FormField
                    label="Guarantee Title"
                    value={formData.pages.services?.fdeGuaranteeTitle || ""}
                    onChange={(val) => updateMainServices({ fdeGuaranteeTitle: val })}
                  />
                </div>
                <FormField
                  label="Guarantee Subtitle"
                  value={formData.pages.services?.fdeGuaranteeSubtitle || ""}
                  onChange={(val) => updateMainServices({ fdeGuaranteeSubtitle: val })}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Guarantee CTA Text"
                    value={formData.pages.services?.fdeGuaranteeCtaText || ""}
                    onChange={(val) => updateMainServices({ fdeGuaranteeCtaText: val })}
                  />
                  <FormField
                    label="Guarantee CTA Href"
                    type="mono"
                    value={formData.pages.services?.fdeGuaranteeCtaHref || ""}
                    onChange={(val) => updateMainServices({ fdeGuaranteeCtaHref: val })}
                  />
                </div>
              </div>
            </div>

            {/* 2. DATABASE & CLOUD OPTIMIZATION */}
            <div className="pt-6 border-t border-[#ddc1b0] space-y-4">
              <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                <Database className="w-4 h-4" />
                <span>2. Database & Cloud Optimization Section</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="Category Subtitle"
                  value={formData.pages.services?.dbSubtitle || ""}
                  onChange={(val) => updateMainServices({ dbSubtitle: val })}
                />
                <FormField
                  label="Section Title"
                  value={formData.pages.services?.dbTitle || ""}
                  onChange={(val) => updateMainServices({ dbTitle: val })}
                />
              </div>

              <FormField
                label="Description"
                type="textarea"
                rows={3}
                value={formData.pages.services?.dbDescription || ""}
                onChange={(val) => updateMainServices({ dbDescription: val })}
              />

              <div className="p-4 bg-[#fff8f5] border border-[#ddc1b0] rounded-xl space-y-4">
                <div className="text-xs font-mono font-bold text-[#964900] uppercase">Dark Stat Callout Box</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    label="Stat Badge"
                    value={formData.pages.services?.dbStatBadge || ""}
                    onChange={(val) => updateMainServices({ dbStatBadge: val })}
                  />
                  <FormField
                    label="Metric 1 (e.g. 30-50%)"
                    value={formData.pages.services?.dbStatMetric1 || ""}
                    onChange={(val) => updateMainServices({ dbStatMetric1: val })}
                  />
                  <FormField
                    label="Label 1"
                    value={formData.pages.services?.dbStatLabel1 || ""}
                    onChange={(val) => updateMainServices({ dbStatLabel1: val })}
                  />
                </div>
                <FormField
                  label="Stat 1 Description"
                  value={formData.pages.services?.dbStatDesc1 || ""}
                  onChange={(val) => updateMainServices({ dbStatDesc1: val })}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Metric 2 (e.g. 10x Throughput)"
                    value={formData.pages.services?.dbStatMetric2 || ""}
                    onChange={(val) => updateMainServices({ dbStatMetric2: val })}
                  />
                  <FormField
                    label="Label 2"
                    value={formData.pages.services?.dbStatLabel2 || ""}
                    onChange={(val) => updateMainServices({ dbStatLabel2: val })}
                  />
                </div>
              </div>
            </div>

            {/* 3. CLOUD MIGRATION & CYBER SECURITY */}
            <div className="pt-6 border-t border-[#ddc1b0] space-y-4">
              <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                <Cloud className="w-4 h-4" />
                <span>3. Cloud Migration, Cyber Security, Databricks & Snowflake Section</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="Category Subtitle"
                  value={formData.pages.services?.cloudSecuritySubtitle || ""}
                  onChange={(val) => updateMainServices({ cloudSecuritySubtitle: val })}
                />
                <FormField
                  label="Section Title"
                  value={formData.pages.services?.cloudSecurityTitle || ""}
                  onChange={(val) => updateMainServices({ cloudSecurityTitle: val })}
                />
              </div>

              <FormField
                label="Description"
                type="textarea"
                rows={3}
                value={formData.pages.services?.cloudSecurityDescription || ""}
                onChange={(val) => updateMainServices({ cloudSecurityDescription: val })}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="Dedicated Page Button Text"
                  value={formData.pages.services?.cloudSecurityCtaText || ""}
                  onChange={(val) => updateMainServices({ cloudSecurityCtaText: val })}
                />
                <FormField
                  label="Button Href"
                  type="mono"
                  value={formData.pages.services?.cloudSecurityCtaHref || ""}
                  onChange={(val) => updateMainServices({ cloudSecurityCtaHref: val })}
                />
              </div>
            </div>

            {/* 4. DATA ANNOTATION & RLHF */}
            <div className="pt-6 border-t border-[#ddc1b0] space-y-4">
              <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                <CheckSquare className="w-4 h-4" />
                <span>4. Data Annotation & RLHF Section</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="Category Subtitle"
                  value={formData.pages.services?.rlhfSubtitle || ""}
                  onChange={(val) => updateMainServices({ rlhfSubtitle: val })}
                />
                <FormField
                  label="Section Title"
                  value={formData.pages.services?.rlhfTitle || ""}
                  onChange={(val) => updateMainServices({ rlhfTitle: val })}
                />
              </div>

              <FormField
                label="Description"
                type="textarea"
                rows={3}
                value={formData.pages.services?.rlhfDescription || ""}
                onChange={(val) => updateMainServices({ rlhfDescription: val })}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="Dedicated Page Button Text"
                  value={formData.pages.services?.rlhfCtaText || ""}
                  onChange={(val) => updateMainServices({ rlhfCtaText: val })}
                />
                <FormField
                  label="Button Href"
                  type="mono"
                  value={formData.pages.services?.rlhfCtaHref || ""}
                  onChange={(val) => updateMainServices({ rlhfCtaHref: val })}
                />
              </div>
            </div>
          </div>
        )}

        {/* Form Fields: Individual Subpages */}
        {selectedTabKey !== "main" && currentSubpage && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>
                Editing: {servicesNav.find((s) => s.key === selectedTabKey)?.label}
              </span>
            </div>

            <FormField
              label="Badge Pill Text"
              value={currentSubpage.heroBadge || ""}
              onChange={(val) =>
                updateSubpage(selectedTabKey as keyof ServiceSubpagesCMSData, { heroBadge: val })
              }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Hero Title"
                value={currentSubpage.title || ""}
                onChange={(val) =>
                  updateSubpage(selectedTabKey as keyof ServiceSubpagesCMSData, { title: val })
                }
              />
              <FormField
                label="Subtitle"
                value={currentSubpage.subtitle || ""}
                onChange={(val) =>
                  updateSubpage(selectedTabKey as keyof ServiceSubpagesCMSData, { subtitle: val })
                }
              />
            </div>

            <FormField
              label="Hero Description"
              type="textarea"
              rows={3}
              value={currentSubpage.description || ""}
              onChange={(val) =>
                updateSubpage(selectedTabKey as keyof ServiceSubpagesCMSData, { description: val })
              }
            />

            <div className="pt-4 border-t border-[#ddc1b0]/60 space-y-4">
              <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                <MousePointer className="w-4 h-4" />
                <span>Call to Action (CTA) Buttons</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="Primary CTA Text"
                  value={currentSubpage.primaryCtaText || ""}
                  onChange={(val) =>
                    updateSubpage(selectedTabKey as keyof ServiceSubpagesCMSData, { primaryCtaText: val })
                  }
                />
                <FormField
                  label="Primary CTA Href"
                  type="mono"
                  value={currentSubpage.primaryCtaHref || ""}
                  onChange={(val) =>
                    updateSubpage(selectedTabKey as keyof ServiceSubpagesCMSData, { primaryCtaHref: val })
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="Secondary CTA Text"
                  value={currentSubpage.secondaryCtaText || ""}
                  onChange={(val) =>
                    updateSubpage(selectedTabKey as keyof ServiceSubpagesCMSData, { secondaryCtaText: val })
                  }
                />
                <FormField
                  label="Secondary CTA Href"
                  type="mono"
                  value={currentSubpage.secondaryCtaHref || ""}
                  onChange={(val) =>
                    updateSubpage(selectedTabKey as keyof ServiceSubpagesCMSData, { secondaryCtaHref: val })
                  }
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#ddc1b0]/60 space-y-4">
              <FormField
                label="Capability Badges / Tech Stack (comma-separated)"
                value={(currentSubpage.capabilitiesBadges || []).join(", ")}
                onChange={(val) =>
                  updateSubpage(selectedTabKey as keyof ServiceSubpagesCMSData, {
                    capabilitiesBadges: val.split(",").map((s) => s.trim()).filter(Boolean),
                  })
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
