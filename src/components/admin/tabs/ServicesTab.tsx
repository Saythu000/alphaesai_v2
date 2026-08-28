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

            {/* FDE SPECIALIZED SECTION EDITORS */}
            {selectedTabKey === "fde" && (
              <div className="space-y-8 pt-6 border-t border-[#964900]/30">
                {/* 1. INTERACTIVE ENGINE / FDE HUB */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <Layers className="w-4 h-4" />
                    <span>Interactive Hub / FDE Engine Header</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Engine Badge Pill"
                      value={currentSubpage.engineBadge || "AlphaesAI FDE Engine"}
                      onChange={(val) => updateSubpage("fde", { engineBadge: val })}
                    />
                    <FormField
                      label="Engine Title"
                      value={currentSubpage.engineTitle || "Working alongside you, every step"}
                      onChange={(val) => updateSubpage("fde", { engineTitle: val })}
                    />
                  </div>
                </div>

                {/* 2. CORE PHILOSOPHY / ENGINEERING OWNERSHIP */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <Briefcase className="w-4 h-4" />
                    <span>Section: Core Philosophy (Engineering Ownership)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Section Subtitle / Badge"
                      value={currentSubpage.coreSubtitle || "The Core: Engineering Ownership"}
                      onChange={(val) => updateSubpage("fde", { coreSubtitle: val })}
                    />
                    <FormField
                      label="Section Title"
                      value={currentSubpage.coreTitle || "Forward Deployed Engineering (FDE)"}
                      onChange={(val) => updateSubpage("fde", { coreTitle: val })}
                    />
                  </div>
                  <FormField
                    label="Description Paragraph 1"
                    type="textarea"
                    rows={3}
                    value={currentSubpage.coreDescription1 || ""}
                    onChange={(val) => updateSubpage("fde", { coreDescription1: val })}
                  />
                  <FormField
                    label="Description Paragraph 2"
                    type="textarea"
                    rows={2}
                    value={currentSubpage.coreDescription2 || ""}
                    onChange={(val) => updateSubpage("fde", { coreDescription2: val })}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Core Section CTA Text"
                      value={currentSubpage.coreCtaText || "Schedule an Executive Briefing"}
                      onChange={(val) => updateSubpage("fde", { coreCtaText: val })}
                    />
                    <FormField
                      label="Core Section CTA Href"
                      type="mono"
                      value={currentSubpage.coreCtaHref || "/contact"}
                      onChange={(val) => updateSubpage("fde", { coreCtaHref: val })}
                    />
                  </div>
                  <div className="p-4 bg-white border border-[#ddc1b0] rounded-xl space-y-3">
                    <FormField
                      label="What Sets FDE Apart Card Title"
                      value={currentSubpage.coreApartTitle || "What Sets FDE Apart"}
                      onChange={(val) => updateSubpage("fde", { coreApartTitle: val })}
                    />
                    <FormField
                      label="Bullet Points (one item per line)"
                      type="textarea"
                      rows={4}
                      value={(currentSubpage.coreApartPoints || []).join("\n")}
                      onChange={(val) =>
                        updateSubpage("fde", {
                          coreApartPoints: val.split("\n").map((s) => s.trim()).filter(Boolean),
                        })
                      }
                    />
                  </div>
                </div>

                {/* 3. THE REALITY / DEMO-TO-PRODUCTION GAP */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Section: The Reality (Demo-to-Production Gap)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Section Subtitle"
                      value={currentSubpage.realitySubtitle || "The Reality"}
                      onChange={(val) => updateSubpage("fde", { realitySubtitle: val })}
                    />
                    <FormField
                      label="Section Title"
                      value={currentSubpage.realityTitle || "The Demo-to-Production Gap"}
                      onChange={(val) => updateSubpage("fde", { realityTitle: val })}
                    />
                  </div>
                  <FormField
                    label="Description"
                    type="textarea"
                    rows={3}
                    value={currentSubpage.realityDescription || ""}
                    onChange={(val) => updateSubpage("fde", { realityDescription: val })}
                  />

                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-mono font-bold text-[#964900] uppercase">Gap Cards (4 Cards)</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(currentSubpage.realityGaps || []).map((gap, i) => (
                        <div key={i} className="p-4 bg-white border border-[#ddc1b0] rounded-xl space-y-2">
                          <FormField
                            label={`Card ${i + 1} Title`}
                            value={gap.title}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.realityGaps || [])];
                              updated[i] = { ...updated[i], title: val };
                              updateSubpage("fde", { realityGaps: updated });
                            }}
                          />
                          <FormField
                            label={`Card ${i + 1} Description`}
                            type="textarea"
                            rows={2}
                            value={gap.desc}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.realityGaps || [])];
                              updated[i] = { ...updated[i], desc: val };
                              updateSubpage("fde", { realityGaps: updated });
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4. METHODOLOGY / 5-PHASE DEPLOYMENT MODEL */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <LayoutGrid className="w-4 h-4" />
                    <span>Section: Methodology (5-Phase Deployment Model)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Section Subtitle"
                      value={currentSubpage.methodologySubtitle || "Methodology"}
                      onChange={(val) => updateSubpage("fde", { methodologySubtitle: val })}
                    />
                    <FormField
                      label="Section Title"
                      value={currentSubpage.methodologyTitle || "Our 5-Phase Deployment Model"}
                      onChange={(val) => updateSubpage("fde", { methodologyTitle: val })}
                    />
                  </div>
                  <FormField
                    label="Description"
                    type="textarea"
                    rows={2}
                    value={currentSubpage.methodologyDescription || ""}
                    onChange={(val) => updateSubpage("fde", { methodologyDescription: val })}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Phase Box CTA Text"
                      value={currentSubpage.phaseCtaText || "Start Discovery Briefing"}
                      onChange={(val) => updateSubpage("fde", { phaseCtaText: val })}
                    />
                    <FormField
                      label="Phase Box CTA Href"
                      type="mono"
                      value={currentSubpage.phaseCtaHref || "/contact"}
                      onChange={(val) => updateSubpage("fde", { phaseCtaHref: val })}
                    />
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="text-xs font-mono font-bold text-[#964900] uppercase">Deployment Phases</div>
                    {(currentSubpage.phases || []).map((phase, i) => (
                      <div key={i} className="p-4 bg-white border border-[#ddc1b0] rounded-xl space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <FormField
                            label="Phase Step (e.g. 01)"
                            value={phase.step}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.phases || [])];
                              updated[i] = { ...updated[i], step: val };
                              updateSubpage("fde", { phases: updated });
                            }}
                          />
                          <div className="md:col-span-2">
                            <FormField
                              label="Phase Name"
                              value={phase.name}
                              onChange={(val) => {
                                const updated = [...(currentSubpage.phases || [])];
                                updated[i] = { ...updated[i], name: val };
                                updateSubpage("fde", { phases: updated });
                              }}
                            />
                          </div>
                        </div>
                        <FormField
                          label="Phase Summary"
                          type="textarea"
                          rows={2}
                          value={phase.summary}
                          onChange={(val) => {
                            const updated = [...(currentSubpage.phases || [])];
                            updated[i] = { ...updated[i], summary: val };
                            updateSubpage("fde", { phases: updated });
                          }}
                        />
                        <FormField
                          label="Key Deliverables Detail"
                          type="textarea"
                          rows={2}
                          value={phase.detail}
                          onChange={(val) => {
                            const updated = [...(currentSubpage.phases || [])];
                            updated[i] = { ...updated[i], detail: val };
                            updateSubpage("fde", { phases: updated });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. CORE COMPETENCIES / EXPERTISE IN PRACTICE */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <Database className="w-4 h-4" />
                    <span>Section: Core Competencies (Expertise in Practice)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Section Subtitle"
                      value={currentSubpage.competenciesSubtitle || "Core Competencies"}
                      onChange={(val) => updateSubpage("fde", { competenciesSubtitle: val })}
                    />
                    <FormField
                      label="Section Title"
                      value={currentSubpage.competenciesTitle || "Expertise in Practice"}
                      onChange={(val) => updateSubpage("fde", { competenciesTitle: val })}
                    />
                  </div>
                  <FormField
                    label="Description"
                    type="textarea"
                    rows={2}
                    value={currentSubpage.competenciesDescription || ""}
                    onChange={(val) => updateSubpage("fde", { competenciesDescription: val })}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {(currentSubpage.competencies || []).map((comp, i) => (
                      <div key={i} className="p-4 bg-white border border-[#ddc1b0] rounded-xl space-y-3">
                        <FormField
                          label={`Domain ${i + 1} Category`}
                          value={comp.category}
                          onChange={(val) => {
                            const updated = [...(currentSubpage.competencies || [])];
                            updated[i] = { ...updated[i], category: val };
                            updateSubpage("fde", { competencies: updated });
                          }}
                        />
                        <FormField
                          label="Description"
                          type="textarea"
                          rows={2}
                          value={comp.desc}
                          onChange={(val) => {
                            const updated = [...(currentSubpage.competencies || [])];
                            updated[i] = { ...updated[i], desc: val };
                            updateSubpage("fde", { competencies: updated });
                          }}
                        />
                        <FormField
                          label="Tags (comma-separated)"
                          value={(comp.tags || []).join(", ")}
                          onChange={(val) => {
                            const updated = [...(currentSubpage.competencies || [])];
                            updated[i] = {
                              ...updated[i],
                              tags: val.split(",").map((s) => s.trim()).filter(Boolean),
                            };
                            updateSubpage("fde", { competencies: updated });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. OUR DIFFERENTIATORS / WHY CHOOSE ALPHAESAI */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <CheckSquare className="w-4 h-4" />
                    <span>Section: Differentiators (Why Choose AlphaesAI?)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Section Subtitle"
                      value={currentSubpage.differentiatorSubtitle || "Our Differentiator"}
                      onChange={(val) => updateSubpage("fde", { differentiatorSubtitle: val })}
                    />
                    <FormField
                      label="Section Title"
                      value={currentSubpage.differentiatorTitle || "Why Choose AlphaesAI?"}
                      onChange={(val) => updateSubpage("fde", { differentiatorTitle: val })}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {(currentSubpage.differentiators || []).map((diff, i) => (
                      <div key={i} className="p-4 bg-white border border-[#ddc1b0] rounded-xl space-y-2">
                        <FormField
                          label={`Card ${i + 1} Title`}
                          value={diff.title}
                          onChange={(val) => {
                            const updated = [...(currentSubpage.differentiators || [])];
                            updated[i] = { ...updated[i], title: val };
                            updateSubpage("fde", { differentiators: updated });
                          }}
                        />
                        <FormField
                          label="Description"
                          type="textarea"
                          rows={2}
                          value={diff.desc}
                          onChange={(val) => {
                            const updated = [...(currentSubpage.differentiators || [])];
                            updated[i] = { ...updated[i], desc: val };
                            updateSubpage("fde", { differentiators: updated });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ) */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Section: Frequently Asked Questions (FAQ)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="FAQ Subtitle"
                      value={currentSubpage.faqSubtitle || "Frequently Asked Questions"}
                      onChange={(val) => updateSubpage("fde", { faqSubtitle: val })}
                    />
                    <FormField
                      label="FAQ Section Title"
                      value={currentSubpage.faqTitle || "Got Questions?"}
                      onChange={(val) => updateSubpage("fde", { faqTitle: val })}
                    />
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-mono font-bold text-[#964900] uppercase">FAQ Items</div>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...(currentSubpage.faqs || []), { q: "New Question?", a: "New Answer detail..." }];
                          updateSubpage("fde", { faqs: updated });
                        }}
                        className="px-3 py-1 bg-[#964900] text-white text-xs font-bold rounded-lg hover:bg-[#7a3b00] transition-colors"
                      >
                        + Add FAQ
                      </button>
                    </div>

                    {(currentSubpage.faqs || []).map((faq, i) => (
                      <div key={i} className="p-4 bg-white border border-[#ddc1b0] rounded-xl space-y-3 relative">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#564336]">FAQ #{i + 1}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = (currentSubpage.faqs || []).filter((_, idx) => idx !== i);
                              updateSubpage("fde", { faqs: updated });
                            }}
                            className="text-xs text-red-600 font-bold hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                        <FormField
                          label="Question"
                          value={faq.q}
                          onChange={(val) => {
                            const updated = [...(currentSubpage.faqs || [])];
                            updated[i] = { ...updated[i], q: val };
                            updateSubpage("fde", { faqs: updated });
                          }}
                        />
                        <FormField
                          label="Answer"
                          type="textarea"
                          rows={3}
                          value={faq.a}
                          onChange={(val) => {
                            const updated = [...(currentSubpage.faqs || [])];
                            updated[i] = { ...updated[i], a: val };
                            updateSubpage("fde", { faqs: updated });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 8. FINAL CALL TO ACTION BANNER */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <MousePointer className="w-4 h-4" />
                    <span>Section: Bottom CTA Banner</span>
                  </div>
                  <FormField
                    label="Banner Title"
                    value={currentSubpage.finalCtaTitle || "Ready to Move from Experiment to Production?"}
                    onChange={(val) => updateSubpage("fde", { finalCtaTitle: val })}
                  />
                  <FormField
                    label="Banner Description"
                    type="textarea"
                    rows={2}
                    value={currentSubpage.finalCtaDescription || "Let’s build something that works. Book a technical discovery briefing with our senior engineers today."}
                    onChange={(val) => updateSubpage("fde", { finalCtaDescription: val })}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Button Text"
                      value={currentSubpage.finalCtaText || "Schedule an Executive Briefing"}
                      onChange={(val) => updateSubpage("fde", { finalCtaText: val })}
                    />
                    <FormField
                      label="Button Href"
                      type="mono"
                      value={currentSubpage.finalCtaHref || "/contact"}
                      onChange={(val) => updateSubpage("fde", { finalCtaHref: val })}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
