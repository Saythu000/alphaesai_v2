"use client";

import React, { useState } from "react";
import { Briefcase, LayoutGrid, Layers, MousePointer, ShieldCheck, Database, Cloud, CheckSquare, AlertTriangle, Award, Users } from "lucide-react";
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

            {/* DATABASE TUNING SPECIALIZED SECTION EDITORS */}
            {selectedTabKey === "databaseTuning" && (
              <div className="space-y-8 pt-6 border-t border-[#964900]/30">
                {/* 1. HERO TAGLINE / SUB-BADGE */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <Database className="w-4 h-4" />
                    <span>Hero Tagline / Sub-Badge</span>
                  </div>
                  <FormField
                    label="Hero Tagline (Upper tracking bar)"
                    value={currentSubpage.heroTagline || "FASTER · MORE RELIABLE · LOWER COST"}
                    onChange={(val) => updateSubpage("databaseTuning", { heroTagline: val })}
                  />
                </div>

                {/* 2. THE CHALLENGE SECTION */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <Briefcase className="w-4 h-4" />
                    <span>Section: The Challenge</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Section Subtitle / Badge"
                      value={currentSubpage.challengeSubtitle || "The Challenge"}
                      onChange={(val) => updateSubpage("databaseTuning", { challengeSubtitle: val })}
                    />
                    <FormField
                      label="Section Title"
                      value={currentSubpage.challengeTitle || "Your Database Is Likely Costing You More Than It Should"}
                      onChange={(val) => updateSubpage("databaseTuning", { challengeTitle: val })}
                    />
                  </div>
                  <FormField
                    label="Description"
                    type="textarea"
                    rows={3}
                    value={currentSubpage.challengeDescription || ""}
                    onChange={(val) => updateSubpage("databaseTuning", { challengeDescription: val })}
                  />
                  <FormField
                    label="Signs Cards Sub-heading"
                    value={currentSubpage.signsTitle || "Signs It’s Time to Optimize:"}
                    onChange={(val) => updateSubpage("databaseTuning", { signsTitle: val })}
                  />
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-mono font-bold text-[#964900] uppercase">5 Signs Cards</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(currentSubpage.signs || []).map((sign, i) => (
                        <div key={i} className="p-4 bg-white border border-[#ddc1b0] rounded-xl space-y-2">
                          <FormField
                            label={`Sign ${i + 1} Title`}
                            value={sign.title}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.signs || [])];
                              updated[i] = { ...updated[i], title: val };
                              updateSubpage("databaseTuning", { signs: updated });
                            }}
                          />
                          <FormField
                            label="Description"
                            type="textarea"
                            rows={2}
                            value={sign.desc}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.signs || [])];
                              updated[i] = { ...updated[i], desc: val };
                              updateSubpage("databaseTuning", { signs: updated });
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. WHAT WE DO (FULL DATA STACK OFFERINGS) */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <Layers className="w-4 h-4" />
                    <span>Section: What We Do (Performance Engineering Across Full Data Stack)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Section Subtitle"
                      value={currentSubpage.whatWeDoSubtitle || "What We Do"}
                      onChange={(val) => updateSubpage("databaseTuning", { whatWeDoSubtitle: val })}
                    />
                    <FormField
                      label="Section Title"
                      value={currentSubpage.whatWeDoTitle || "Performance Engineering Across the Full Data Stack"}
                      onChange={(val) => updateSubpage("databaseTuning", { whatWeDoTitle: val })}
                    />
                  </div>
                  <FormField
                    label="Description"
                    type="textarea"
                    rows={2}
                    value={currentSubpage.whatWeDoDescription || ""}
                    onChange={(val) => updateSubpage("databaseTuning", { whatWeDoDescription: val })}
                  />

                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-mono font-bold text-[#964900] uppercase">Service Capabilities (5 Offering Cards)</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(currentSubpage.capabilities || []).map((cap, i) => (
                        <div key={i} className="p-4 bg-white border border-[#ddc1b0] rounded-xl space-y-2">
                          <FormField
                            label={`Offering ${i + 1} Title`}
                            value={cap.title}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.capabilities || [])];
                              updated[i] = { ...updated[i], title: val };
                              updateSubpage("databaseTuning", { capabilities: updated });
                            }}
                          />
                          <FormField
                            label="Description"
                            type="textarea"
                            rows={2}
                            value={cap.desc}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.capabilities || [])];
                              updated[i] = { ...updated[i], desc: val };
                              updateSubpage("databaseTuning", { capabilities: updated });
                            }}
                          />
                          <FormField
                            label="Bullet Points (comma-separated)"
                            value={(cap.bullets || cap.highlights || []).join(", ")}
                            onChange={(val) => {
                              const list = val.split(",").map((s) => s.trim()).filter(Boolean);
                              const updated = [...(currentSubpage.capabilities || [])];
                              updated[i] = { ...updated[i], bullets: list, highlights: list };
                              updateSubpage("databaseTuning", { capabilities: updated });
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4. EXECUTION FRAMEWORK (4-PHASE MODEL) */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Section: Execution Framework (4-Phase Model)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Section Subtitle"
                      value={currentSubpage.methodologySubtitle || "Execution Framework"}
                      onChange={(val) => updateSubpage("databaseTuning", { methodologySubtitle: val })}
                    />
                    <FormField
                      label="Section Title"
                      value={currentSubpage.methodologyTitle || "How We Work: Assess → Optimize → Stabilize → Scale"}
                      onChange={(val) => updateSubpage("databaseTuning", { methodologyTitle: val })}
                    />
                  </div>
                  <FormField
                    label="Description"
                    type="textarea"
                    rows={2}
                    value={currentSubpage.methodologyDescription || ""}
                    onChange={(val) => updateSubpage("databaseTuning", { methodologyDescription: val })}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Phase CTA Text"
                      value={currentSubpage.phaseCtaText || "Request Assessment"}
                      onChange={(val) => updateSubpage("databaseTuning", { phaseCtaText: val })}
                    />
                    <FormField
                      label="Phase CTA Href"
                      type="mono"
                      value={currentSubpage.phaseCtaHref || "/contact"}
                      onChange={(val) => updateSubpage("databaseTuning", { phaseCtaHref: val })}
                    />
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-mono font-bold text-[#964900] uppercase">4 Phase Cards</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(currentSubpage.phases || []).map((phase, i) => (
                        <div key={i} className="p-4 bg-white border border-[#ddc1b0] rounded-xl space-y-2">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <FormField
                              label="Step #"
                              value={phase.step}
                              onChange={(val) => {
                                const updated = [...(currentSubpage.phases || [])];
                                updated[i] = { ...updated[i], step: val };
                                updateSubpage("databaseTuning", { phases: updated });
                              }}
                            />
                            <div className="md:col-span-2">
                              <FormField
                                label="Phase Name"
                                value={phase.name}
                                onChange={(val) => {
                                  const updated = [...(currentSubpage.phases || [])];
                                  updated[i] = { ...updated[i], name: val };
                                  updateSubpage("databaseTuning", { phases: updated });
                                }}
                              />
                            </div>
                          </div>
                          <FormField
                            label="Summary"
                            type="textarea"
                            rows={2}
                            value={phase.summary}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.phases || [])];
                              updated[i] = { ...updated[i], summary: val };
                              updateSubpage("databaseTuning", { phases: updated });
                            }}
                          />
                          <FormField
                            label="Execution Scope / Detail"
                            type="textarea"
                            rows={2}
                            value={phase.detail}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.phases || [])];
                              updated[i] = { ...updated[i], detail: val };
                              updateSubpage("databaseTuning", { phases: updated });
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 5. FLEXIBLE DELIVERY MODELS / ENGAGEMENT OPTIONS */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <Briefcase className="w-4 h-4" />
                    <span>Section: Engagement Options</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Section Subtitle"
                      value={currentSubpage.engagementSubtitle || "Flexible Delivery Models"}
                      onChange={(val) => updateSubpage("databaseTuning", { engagementSubtitle: val })}
                    />
                    <FormField
                      label="Section Title"
                      value={currentSubpage.engagementTitle || "Engagement Options"}
                      onChange={(val) => updateSubpage("databaseTuning", { engagementTitle: val })}
                    />
                  </div>
                  <FormField
                    label="Description"
                    type="textarea"
                    rows={2}
                    value={currentSubpage.engagementDescription || ""}
                    onChange={(val) => updateSubpage("databaseTuning", { engagementDescription: val })}
                  />

                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-mono font-bold text-[#964900] uppercase">3 Engagement Tiers</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {(currentSubpage.engagementTiers || []).map((tier, i) => (
                        <div key={i} className="p-4 bg-white border border-[#ddc1b0] rounded-xl space-y-2">
                          <FormField
                            label={`Tier ${i + 1} Badge`}
                            value={tier.badge || tier.subtitle || ""}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.engagementTiers || [])];
                              updated[i] = { ...updated[i], badge: val, subtitle: val };
                              updateSubpage("databaseTuning", { engagementTiers: updated });
                            }}
                          />
                          <FormField
                            label="Tier Title / Name"
                            value={tier.name || tier.title || ""}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.engagementTiers || [])];
                              updated[i] = { ...updated[i], name: val, title: val };
                              updateSubpage("databaseTuning", { engagementTiers: updated });
                            }}
                          />
                          <FormField
                            label="Target / Description"
                            type="textarea"
                            rows={2}
                            value={tier.target || tier.desc || ""}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.engagementTiers || [])];
                              updated[i] = { ...updated[i], target: val, desc: val };
                              updateSubpage("databaseTuning", { engagementTiers: updated });
                            }}
                          />
                          <FormField
                            label="Deliverables (one per line)"
                            type="textarea"
                            rows={4}
                            value={(tier.deliverables || []).join("\n")}
                            onChange={(val) => {
                              const list = val.split("\n").map((s) => s.trim()).filter(Boolean);
                              const updated = [...(currentSubpage.engagementTiers || [])];
                              updated[i] = { ...updated[i], deliverables: list };
                              updateSubpage("databaseTuning", { engagementTiers: updated });
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 6. OUR DIFFERENTIATOR */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <CheckSquare className="w-4 h-4" />
                    <span>Section: Differentiators (Why AlphaesAI?)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Section Subtitle"
                      value={currentSubpage.differentiatorSubtitle || "Our Differentiator"}
                      onChange={(val) => updateSubpage("databaseTuning", { differentiatorSubtitle: val })}
                    />
                    <FormField
                      label="Section Title"
                      value={currentSubpage.differentiatorTitle || "Why AlphaesAI: Engineering-First, Not Theory-Driven"}
                      onChange={(val) => updateSubpage("databaseTuning", { differentiatorTitle: val })}
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
                            updateSubpage("databaseTuning", { differentiators: updated });
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
                            updateSubpage("databaseTuning", { differentiators: updated });
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
                      onChange={(val) => updateSubpage("databaseTuning", { faqSubtitle: val })}
                    />
                    <FormField
                      label="FAQ Section Title"
                      value={currentSubpage.faqTitle || "Got Questions?"}
                      onChange={(val) => updateSubpage("databaseTuning", { faqTitle: val })}
                    />
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-mono font-bold text-[#964900] uppercase">FAQ Items</div>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...(currentSubpage.faqs || []), { q: "New Question?", a: "New Answer detail..." }];
                          updateSubpage("databaseTuning", { faqs: updated });
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
                              updateSubpage("databaseTuning", { faqs: updated });
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
                            updateSubpage("databaseTuning", { faqs: updated });
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
                            updateSubpage("databaseTuning", { faqs: updated });
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
                    value={currentSubpage.finalCtaTitle || "Is Your Database Slowing Your Business Down?"}
                    onChange={(val) => updateSubpage("databaseTuning", { finalCtaTitle: val })}
                  />
                  <FormField
                    label="Banner Description"
                    type="textarea"
                    rows={2}
                    value={currentSubpage.finalCtaDescription || "Stop throwing budget at a performance problem that can be fixed with architecture. Let’s identify exactly what’s happening in your environment."}
                    onChange={(val) => updateSubpage("databaseTuning", { finalCtaDescription: val })}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Button Text"
                      value={currentSubpage.finalCtaText || "Book a Database Performance & Cost Assessment"}
                      onChange={(val) => updateSubpage("databaseTuning", { finalCtaText: val })}
                    />
                    <FormField
                      label="Button Href"
                      type="mono"
                      value={currentSubpage.finalCtaHref || "/contact"}
                      onChange={(val) => updateSubpage("databaseTuning", { finalCtaHref: val })}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* CLOUD MIGRATION & CYBER SECURITY SPECIALIZED SECTION EDITORS */}
            {selectedTabKey === "cloudMigration" && (
              <div className="space-y-8 pt-6 border-t border-[#964900]/30">
                {/* 1. CHALLENGE & FRICTION POINTS */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Section: The Enterprise Challenge (Friction Factors)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Section Subtitle"
                      value={currentSubpage.challengeSubtitle || "THE ENTERPRISE CHALLENGE"}
                      onChange={(val) => updateSubpage("cloudMigration", { challengeSubtitle: val })}
                    />
                    <FormField
                      label="Section Title"
                      value={currentSubpage.challengeTitle || "Migration & Security Friction Points"}
                      onChange={(val) => updateSubpage("cloudMigration", { challengeTitle: val })}
                    />
                  </div>
                  <FormField
                    label="Description"
                    type="textarea"
                    rows={2}
                    value={currentSubpage.challengeDescription || ""}
                    onChange={(val) => updateSubpage("cloudMigration", { challengeDescription: val })}
                  />

                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-mono font-bold text-[#964900] uppercase">Friction Factor Cards (4 Cards)</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(currentSubpage.frictionPoints || []).map((fp, i) => (
                        <div key={i} className="p-4 bg-white border border-[#ddc1b0] rounded-xl space-y-2">
                          <div className="grid grid-cols-2 gap-2">
                            <FormField
                              label={`Card ${i + 1} Title`}
                              value={fp.title}
                              onChange={(val) => {
                                const updated = [...(currentSubpage.frictionPoints || [])];
                                updated[i] = { ...updated[i], title: val };
                                updateSubpage("cloudMigration", { frictionPoints: updated });
                              }}
                            />
                            <FormField
                              label="Tag"
                              value={fp.tag}
                              onChange={(val) => {
                                const updated = [...(currentSubpage.frictionPoints || [])];
                                updated[i] = { ...updated[i], tag: val };
                                updateSubpage("cloudMigration", { frictionPoints: updated });
                              }}
                            />
                          </div>
                          <FormField
                            label="Description"
                            type="textarea"
                            rows={2}
                            value={fp.desc}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.frictionPoints || [])];
                              updated[i] = { ...updated[i], desc: val };
                              updateSubpage("cloudMigration", { frictionPoints: updated });
                            }}
                          />
                          <FormField
                            label="Lucide Icon Name"
                            type="mono"
                            value={fp.iconName || "AlertTriangle"}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.frictionPoints || [])];
                              updated[i] = { ...updated[i], iconName: val };
                              updateSubpage("cloudMigration", { frictionPoints: updated });
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. WHAT WE BUILD / CAPABILITIES */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <Layers className="w-4 h-4" />
                    <span>Section: Full-Stack Capabilities</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Section Subtitle"
                      value={currentSubpage.whatWeDoSubtitle || "WHAT WE BUILD"}
                      onChange={(val) => updateSubpage("cloudMigration", { whatWeDoSubtitle: val })}
                    />
                    <FormField
                      label="Section Title"
                      value={currentSubpage.whatWeDoTitle || "End-to-End Platform Capabilities"}
                      onChange={(val) => updateSubpage("cloudMigration", { whatWeDoTitle: val })}
                    />
                  </div>
                  <FormField
                    label="Description"
                    type="textarea"
                    rows={2}
                    value={currentSubpage.whatWeDoDescription || ""}
                    onChange={(val) => updateSubpage("cloudMigration", { whatWeDoDescription: val })}
                  />

                  <div className="space-y-4 pt-2">
                    <div className="text-xs font-mono font-bold text-[#964900] uppercase">Capability Blocks (5 Core Capabilities)</div>
                    {(currentSubpage.capabilities || []).map((cap, i) => (
                      <div key={i} className="p-4 bg-white border border-[#ddc1b0] rounded-xl space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <FormField
                            label={`Capability ${i + 1} Badge`}
                            value={cap.badge}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.capabilities || [])];
                              updated[i] = { ...updated[i], badge: val };
                              updateSubpage("cloudMigration", { capabilities: updated });
                            }}
                          />
                          <FormField
                            label="Title"
                            value={cap.title}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.capabilities || [])];
                              updated[i] = { ...updated[i], title: val };
                              updateSubpage("cloudMigration", { capabilities: updated });
                            }}
                          />
                          <FormField
                            label="Icon Name"
                            type="mono"
                            value={cap.iconName || "Cloud"}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.capabilities || [])];
                              updated[i] = { ...updated[i], iconName: val };
                              updateSubpage("cloudMigration", { capabilities: updated });
                            }}
                          />
                        </div>
                        <FormField
                          label="Description"
                          type="textarea"
                          rows={2}
                          value={cap.desc}
                          onChange={(val) => {
                            const updated = [...(currentSubpage.capabilities || [])];
                            updated[i] = { ...updated[i], desc: val };
                            updateSubpage("cloudMigration", { capabilities: updated });
                          }}
                        />
                        <FormField
                          label="Bullet Highlights (comma-separated)"
                          type="textarea"
                          rows={2}
                          value={(cap.highlights || cap.bullets || []).join(", ")}
                          onChange={(val) => {
                            const list = val.split(",").map((s) => s.trim()).filter(Boolean);
                            const updated = [...(currentSubpage.capabilities || [])];
                            updated[i] = { ...updated[i], highlights: list, bullets: list };
                            updateSubpage("cloudMigration", { capabilities: updated });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. THE ALPHAESAI DIFFERENCE */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <CheckSquare className="w-4 h-4" />
                    <span>Section: The AlphaesAI Difference</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Section Subtitle"
                      value={currentSubpage.differentiatorSubtitle || "THE ALPHAESAI DIFFERENCE"}
                      onChange={(val) => updateSubpage("cloudMigration", { differentiatorSubtitle: val })}
                    />
                    <FormField
                      label="Section Title"
                      value={currentSubpage.differentiatorTitle || "Why Enterprise Leaders Choose Us"}
                      onChange={(val) => updateSubpage("cloudMigration", { differentiatorTitle: val })}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    {(currentSubpage.aiDifferencePoints || []).map((diff, i) => (
                      <div key={i} className="p-4 bg-white border border-[#ddc1b0] rounded-xl space-y-2">
                        <FormField
                          label={`Card ${i + 1} Title`}
                          value={diff.title}
                          onChange={(val) => {
                            const updated = [...(currentSubpage.aiDifferencePoints || [])];
                            updated[i] = { ...updated[i], title: val };
                            updateSubpage("cloudMigration", { aiDifferencePoints: updated });
                          }}
                        />
                        <FormField
                          label="Description"
                          type="textarea"
                          rows={3}
                          value={diff.desc}
                          onChange={(val) => {
                            const updated = [...(currentSubpage.aiDifferencePoints || [])];
                            updated[i] = { ...updated[i], desc: val };
                            updateSubpage("cloudMigration", { aiDifferencePoints: updated });
                          }}
                        />
                        <FormField
                          label="Icon Name"
                          type="mono"
                          value={diff.iconName || "Layers"}
                          onChange={(val) => {
                            const updated = [...(currentSubpage.aiDifferencePoints || [])];
                            updated[i] = { ...updated[i], iconName: val };
                            updateSubpage("cloudMigration", { aiDifferencePoints: updated });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. ENGAGEMENT OPTIONS */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <Briefcase className="w-4 h-4" />
                    <span>Section: Engagement Models</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Section Subtitle"
                      value={currentSubpage.engagementSubtitle || "FLEXIBLE ENGAGEMENT MODELS"}
                      onChange={(val) => updateSubpage("cloudMigration", { engagementSubtitle: val })}
                    />
                    <FormField
                      label="Section Title"
                      value={currentSubpage.engagementTitle || "Structured for Speed & Scalability"}
                      onChange={(val) => updateSubpage("cloudMigration", { engagementTitle: val })}
                    />
                  </div>
                  <FormField
                    label="Description"
                    type="textarea"
                    rows={2}
                    value={currentSubpage.engagementDescription || ""}
                    onChange={(val) => updateSubpage("cloudMigration", { engagementDescription: val })}
                  />

                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-mono font-bold text-[#964900] uppercase">3 Engagement Tiers</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {(currentSubpage.engagementTiers || []).map((tier, i) => (
                        <div key={i} className="p-4 bg-white border border-[#ddc1b0] rounded-xl space-y-2">
                          <FormField
                            label={`Tier ${i + 1} Badge`}
                            value={tier.subtitle || tier.badge || ""}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.engagementTiers || [])];
                              updated[i] = { ...updated[i], subtitle: val, badge: val };
                              updateSubpage("cloudMigration", { engagementTiers: updated });
                            }}
                          />
                          <FormField
                            label="Tier Title / Name"
                            value={tier.title || tier.name || ""}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.engagementTiers || [])];
                              updated[i] = { ...updated[i], title: val, name: val };
                              updateSubpage("cloudMigration", { engagementTiers: updated });
                            }}
                          />
                          <FormField
                            label="Description"
                            type="textarea"
                            rows={2}
                            value={tier.desc || tier.target || ""}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.engagementTiers || [])];
                              updated[i] = { ...updated[i], desc: val, target: val };
                              updateSubpage("cloudMigration", { engagementTiers: updated });
                            }}
                          />
                          <div className="grid grid-cols-2 gap-2">
                            <FormField
                              label="CTA Text"
                              value={tier.cta || ""}
                              onChange={(val) => {
                                const updated = [...(currentSubpage.engagementTiers || [])];
                                updated[i] = { ...updated[i], cta: val };
                                updateSubpage("cloudMigration", { engagementTiers: updated });
                              }}
                            />
                            <FormField
                              label="CTA Href"
                              type="mono"
                              value={tier.href || ""}
                              onChange={(val) => {
                                const updated = [...(currentSubpage.engagementTiers || [])];
                                updated[i] = { ...updated[i], href: val };
                                updateSubpage("cloudMigration", { engagementTiers: updated });
                              }}
                            />
                          </div>
                          <FormField
                            label="Deliverables (one per line)"
                            type="textarea"
                            rows={4}
                            value={(tier.deliverables || []).join("\n")}
                            onChange={(val) => {
                              const list = val.split("\n").map((s) => s.trim()).filter(Boolean);
                              const updated = [...(currentSubpage.engagementTiers || [])];
                              updated[i] = { ...updated[i], deliverables: list };
                              updateSubpage("cloudMigration", { engagementTiers: updated });
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 5. FREQUENTLY ASKED QUESTIONS (FAQ) */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Section: Frequently Asked Questions (FAQ)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="FAQ Subtitle"
                      value={currentSubpage.faqSubtitle || "FREQUENTLY ASKED QUESTIONS"}
                      onChange={(val) => updateSubpage("cloudMigration", { faqSubtitle: val })}
                    />
                    <FormField
                      label="FAQ Section Title"
                      value={currentSubpage.faqTitle || "Got Questions About Migration & Security?"}
                      onChange={(val) => updateSubpage("cloudMigration", { faqTitle: val })}
                    />
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-mono font-bold text-[#964900] uppercase">FAQ Items</div>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...(currentSubpage.faqs || []), { q: "New Question?", a: "New Answer detail..." }];
                          updateSubpage("cloudMigration", { faqs: updated });
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
                              updateSubpage("cloudMigration", { faqs: updated });
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
                            updateSubpage("cloudMigration", { faqs: updated });
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
                            updateSubpage("cloudMigration", { faqs: updated });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. FINAL CALL TO ACTION BANNER */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <MousePointer className="w-4 h-4" />
                    <span>Section: Bottom CTA Banner</span>
                  </div>
                  <FormField
                    label="Engine Badge Pill"
                    value={currentSubpage.engineBadge || "ENTERPRISE CLOUD & SECURITY ENGINE"}
                    onChange={(val) => updateSubpage("cloudMigration", { engineBadge: val })}
                  />
                  <FormField
                    label="Banner Title"
                    value={currentSubpage.finalCtaTitle || "Ready to Architect Your Enterprise Data Platform?"}
                    onChange={(val) => updateSubpage("cloudMigration", { finalCtaTitle: val })}
                  />
                  <FormField
                    label="Banner Description"
                    type="textarea"
                    rows={2}
                    value={currentSubpage.finalCtaDescription || "Schedule an executive technical briefing with our principal platform architects."}
                    onChange={(val) => updateSubpage("cloudMigration", { finalCtaDescription: val })}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Button Text"
                      value={currentSubpage.finalCtaText || "Request Technical Briefing"}
                      onChange={(val) => updateSubpage("cloudMigration", { finalCtaText: val })}
                    />
                    <FormField
                      label="Button Href"
                      type="mono"
                      value={currentSubpage.finalCtaHref || "/contact"}
                      onChange={(val) => updateSubpage("cloudMigration", { finalCtaHref: val })}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* DATA ANNOTATION & RLHF SPECIALIZED SECTION EDITORS */}
            {selectedTabKey === "dataAnnotation" && (
              <div className="space-y-8 pt-6 border-t border-[#964900]/30">
                {/* 1. FAILURE MODES / ANNOTATION REALITY */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Section: Failure Modes & Annotation Reality</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Section Subtitle"
                      value={currentSubpage.challengeSubtitle || "THE REALITY OF ANNOTATION"}
                      onChange={(val) => updateSubpage("dataAnnotation", { challengeSubtitle: val })}
                    />
                    <FormField
                      label="Section Title"
                      value={currentSubpage.challengeTitle || "If Your Annotators Don’t Understand Engineering Goals, They Can’t Label for Them"}
                      onChange={(val) => updateSubpage("dataAnnotation", { challengeTitle: val })}
                    />
                  </div>
                  <FormField
                    label="Description"
                    type="textarea"
                    rows={2}
                    value={currentSubpage.challengeDescription || "Standard crowd-sourced labeling fails when applied to complex, domain-specific AI models. We eliminate the systemic breakdown points in traditional annotation pipelines."}
                    onChange={(val) => updateSubpage("dataAnnotation", { challengeDescription: val })}
                  />

                  {/* Failure Modes Items */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-mono font-bold text-[#964900] uppercase">Failure Mode Cards</div>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...(currentSubpage.failureModes || []), { title: "New Failure Mode", tag: "TAG", desc: "Description..." }];
                          updateSubpage("dataAnnotation", { failureModes: updated });
                        }}
                        className="px-3 py-1 bg-[#964900] text-white text-xs font-bold rounded-lg hover:bg-[#7a3b00] transition-colors"
                      >
                        + Add Card
                      </button>
                    </div>

                    {(currentSubpage.failureModes || []).map((fm, i) => (
                      <div key={i} className="p-4 bg-white border border-[#ddc1b0] rounded-xl space-y-3 relative">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#564336]">Failure Mode #{i + 1}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = (currentSubpage.failureModes || []).filter((_, idx) => idx !== i);
                              updateSubpage("dataAnnotation", { failureModes: updated });
                            }}
                            className="text-xs text-red-600 font-bold hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            label="Title"
                            value={fm.title}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.failureModes || [])];
                              updated[i] = { ...updated[i], title: val };
                              updateSubpage("dataAnnotation", { failureModes: updated });
                            }}
                          />
                          <FormField
                            label="Tag"
                            value={fm.tag}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.failureModes || [])];
                              updated[i] = { ...updated[i], tag: val };
                              updateSubpage("dataAnnotation", { failureModes: updated });
                            }}
                          />
                        </div>
                        <FormField
                          label="Description"
                          type="textarea"
                          rows={2}
                          value={fm.desc}
                          onChange={(val) => {
                            const updated = [...(currentSubpage.failureModes || [])];
                            updated[i] = { ...updated[i], desc: val };
                            updateSubpage("dataAnnotation", { failureModes: updated });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. OUR APPROACH SECTION */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <Layers className="w-4 h-4" />
                    <span>Section: Our Approach & Pillars</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Section Subtitle"
                      value={currentSubpage.approachSubtitle || "OUR APPROACH"}
                      onChange={(val) => updateSubpage("dataAnnotation", { approachSubtitle: val })}
                    />
                    <FormField
                      label="Section Title"
                      value={currentSubpage.approachTitle || "High-Precision Feedback Loops for Superior Model Outputs"}
                      onChange={(val) => updateSubpage("dataAnnotation", { approachTitle: val })}
                    />
                  </div>
                  <FormField
                    label="Section Description"
                    type="textarea"
                    rows={2}
                    value={currentSubpage.approachDescription || "We structure data curation and human feedback into a continuous, engineering-aligned cycle designed to maximize downstream model evaluation metrics."}
                    onChange={(val) => updateSubpage("dataAnnotation", { approachDescription: val })}
                  />

                  {/* Approach Pillars Items */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-mono font-bold text-[#964900] uppercase">Approach Pillars</div>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...(currentSubpage.approachPillars || []), { id: `pillar-${Date.now()}`, badge: "Badge", title: "New Pillar", desc: "Description...", items: ["Highlight 1"], iconName: "Target" }];
                          updateSubpage("dataAnnotation", { approachPillars: updated });
                        }}
                        className="px-3 py-1 bg-[#964900] text-white text-xs font-bold rounded-lg hover:bg-[#7a3b00] transition-colors"
                      >
                        + Add Pillar
                      </button>
                    </div>

                    {(currentSubpage.approachPillars || []).map((pillar, i) => (
                      <div key={i} className="p-4 bg-white border border-[#ddc1b0] rounded-xl space-y-3 relative">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#564336]">Pillar #{i + 1}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = (currentSubpage.approachPillars || []).filter((_, idx) => idx !== i);
                              updateSubpage("dataAnnotation", { approachPillars: updated });
                            }}
                            className="text-xs text-red-600 font-bold hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <FormField
                            label="Badge"
                            value={pillar.badge}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.approachPillars || [])];
                              updated[i] = { ...updated[i], badge: val };
                              updateSubpage("dataAnnotation", { approachPillars: updated });
                            }}
                          />
                          <FormField
                            label="Title"
                            value={pillar.title}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.approachPillars || [])];
                              updated[i] = { ...updated[i], title: val };
                              updateSubpage("dataAnnotation", { approachPillars: updated });
                            }}
                          />
                          <FormField
                            label="Icon Name"
                            value={pillar.iconName || "Target"}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.approachPillars || [])];
                              updated[i] = { ...updated[i], iconName: val };
                              updateSubpage("dataAnnotation", { approachPillars: updated });
                            }}
                          />
                        </div>
                        <FormField
                          label="Description"
                          type="textarea"
                          rows={2}
                          value={pillar.desc}
                          onChange={(val) => {
                            const updated = [...(currentSubpage.approachPillars || [])];
                            updated[i] = { ...updated[i], desc: val };
                            updateSubpage("dataAnnotation", { approachPillars: updated });
                          }}
                        />
                        <FormField
                          label="Key Deliverable / Bullet Items (comma separated)"
                          value={(pillar.items || []).join(", ")}
                          onChange={(val) => {
                            const updated = [...(currentSubpage.approachPillars || [])];
                            updated[i] = { ...updated[i], items: val.split(",").map(s => s.trim()).filter(Boolean) };
                            updateSubpage("dataAnnotation", { approachPillars: updated });
                          }}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            label="Impact Card Title"
                            value={pillar.impactTitle || "Production Model Impact"}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.approachPillars || [])];
                              updated[i] = { ...updated[i], impactTitle: val };
                              updateSubpage("dataAnnotation", { approachPillars: updated });
                            }}
                          />
                          <FormField
                            label="Impact Description"
                            value={pillar.impactDesc || "Directly boosts evaluation metrics..."}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.approachPillars || [])];
                              updated[i] = { ...updated[i], impactDesc: val };
                              updateSubpage("dataAnnotation", { approachPillars: updated });
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. THE ALPHAESAI COMMITMENT */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <Award className="w-4 h-4" />
                    <span>Section: The AlphaesAI Commitment</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Section Subtitle"
                      value={currentSubpage.commitmentSubtitle || "THE ALPHAESAI COMMITMENT"}
                      onChange={(val) => updateSubpage("dataAnnotation", { commitmentSubtitle: val })}
                    />
                    <FormField
                      label="Section Title"
                      value={currentSubpage.commitmentTitle || "We Define Quality by Model Performance, Not Label Count"}
                      onChange={(val) => updateSubpage("dataAnnotation", { commitmentTitle: val })}
                    />
                  </div>
                  <FormField
                    label="Section Description"
                    type="textarea"
                    rows={2}
                    value={currentSubpage.commitmentDescription || "We don't measure progress by raw output counts. Our sole benchmark is how well your AI model performs when deployed to real-world users."}
                    onChange={(val) => updateSubpage("dataAnnotation", { commitmentDescription: val })}
                  />

                  {/* Commitment Points List */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-mono font-bold text-[#964900] uppercase">Commitment Cards</div>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...(currentSubpage.commitmentPoints || []), { title: "New Point", desc: "Description...", iconName: "Target" }];
                          updateSubpage("dataAnnotation", { commitmentPoints: updated });
                        }}
                        className="px-3 py-1 bg-[#964900] text-white text-xs font-bold rounded-lg hover:bg-[#7a3b00] transition-colors"
                      >
                        + Add Card
                      </button>
                    </div>

                    {(currentSubpage.commitmentPoints || []).map((cp, i) => (
                      <div key={i} className="p-4 bg-white border border-[#ddc1b0] rounded-xl space-y-3 relative">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#564336]">Point #{i + 1}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = (currentSubpage.commitmentPoints || []).filter((_, idx) => idx !== i);
                              updateSubpage("dataAnnotation", { commitmentPoints: updated });
                            }}
                            className="text-xs text-red-600 font-bold hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            label="Title"
                            value={cp.title}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.commitmentPoints || [])];
                              updated[i] = { ...updated[i], title: val };
                              updateSubpage("dataAnnotation", { commitmentPoints: updated });
                            }}
                          />
                          <FormField
                            label="Icon Name"
                            value={cp.iconName || "Target"}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.commitmentPoints || [])];
                              updated[i] = { ...updated[i], iconName: val };
                              updateSubpage("dataAnnotation", { commitmentPoints: updated });
                            }}
                          />
                        </div>
                        <FormField
                          label="Description"
                          type="textarea"
                          rows={2}
                          value={cp.desc}
                          onChange={(val) => {
                            const updated = [...(currentSubpage.commitmentPoints || [])];
                            updated[i] = { ...updated[i], desc: val };
                            updateSubpage("dataAnnotation", { commitmentPoints: updated });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. SPECIALIZED DOMAIN NETWORKS */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <Users className="w-4 h-4" />
                    <span>Section: Specialized Domain Networks</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Section Subtitle"
                      value={currentSubpage.domainSubtitle || "SPECIALIZED DOMAIN NETWORKS"}
                      onChange={(val) => updateSubpage("dataAnnotation", { domainSubtitle: val })}
                    />
                    <FormField
                      label="Section Title"
                      value={currentSubpage.domainTitle || "Vetted Experts Matched to Your Industry Taxonomy"}
                      onChange={(val) => updateSubpage("dataAnnotation", { domainTitle: val })}
                    />
                  </div>
                  <FormField
                    label="Section Description"
                    type="textarea"
                    rows={2}
                    value={currentSubpage.domainDescription || "We match specialized annotators to the exact nuances of your industry data."}
                    onChange={(val) => updateSubpage("dataAnnotation", { domainDescription: val })}
                  />

                  {/* Domains List */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-mono font-bold text-[#964900] uppercase">Domain Cards</div>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...(currentSubpage.domains || []), { name: "New Industry Domain", tag: "TAG", focus: "Focus area...", iconName: "Building2" }];
                          updateSubpage("dataAnnotation", { domains: updated });
                        }}
                        className="px-3 py-1 bg-[#964900] text-white text-xs font-bold rounded-lg hover:bg-[#7a3b00] transition-colors"
                      >
                        + Add Domain
                      </button>
                    </div>

                    {(currentSubpage.domains || []).map((d, i) => (
                      <div key={i} className="p-4 bg-white border border-[#ddc1b0] rounded-xl space-y-3 relative">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#564336]">Domain #{i + 1}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = (currentSubpage.domains || []).filter((_, idx) => idx !== i);
                              updateSubpage("dataAnnotation", { domains: updated });
                            }}
                            className="text-xs text-red-600 font-bold hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <FormField
                            label="Industry Name"
                            value={d.name}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.domains || [])];
                              updated[i] = { ...updated[i], name: val };
                              updateSubpage("dataAnnotation", { domains: updated });
                            }}
                          />
                          <FormField
                            label="Tag"
                            value={d.tag}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.domains || [])];
                              updated[i] = { ...updated[i], tag: val };
                              updateSubpage("dataAnnotation", { domains: updated });
                            }}
                          />
                          <FormField
                            label="Icon Name"
                            value={d.iconName || "Building2"}
                            onChange={(val) => {
                              const updated = [...(currentSubpage.domains || [])];
                              updated[i] = { ...updated[i], iconName: val };
                              updateSubpage("dataAnnotation", { domains: updated });
                            }}
                          />
                        </div>
                        <FormField
                          label="Focus & Key Annotations"
                          type="textarea"
                          rows={2}
                          value={d.focus}
                          onChange={(val) => {
                            const updated = [...(currentSubpage.domains || [])];
                            updated[i] = { ...updated[i], focus: val };
                            updateSubpage("dataAnnotation", { domains: updated });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. FREQUENTLY ASKED QUESTIONS (FAQ) */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Section: Frequently Asked Questions (FAQ)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="FAQ Subtitle"
                      value={currentSubpage.faqSubtitle || "FREQUENTLY ASKED QUESTIONS"}
                      onChange={(val) => updateSubpage("dataAnnotation", { faqSubtitle: val })}
                    />
                    <FormField
                      label="FAQ Section Title"
                      value={currentSubpage.faqTitle || "Data Curation & RLHF Inquiries"}
                      onChange={(val) => updateSubpage("dataAnnotation", { faqTitle: val })}
                    />
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-mono font-bold text-[#964900] uppercase">FAQ Items</div>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...(currentSubpage.faqs || []), { q: "New Question?", a: "New Answer detail..." }];
                          updateSubpage("dataAnnotation", { faqs: updated });
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
                              updateSubpage("dataAnnotation", { faqs: updated });
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
                            updateSubpage("dataAnnotation", { faqs: updated });
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
                            updateSubpage("dataAnnotation", { faqs: updated });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. FINAL CALL TO ACTION BANNER */}
                <div className="p-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-[#964900] font-mono text-xs font-bold uppercase tracking-wider">
                    <MousePointer className="w-4 h-4" />
                    <span>Section: Bottom CTA Banner</span>
                  </div>
                  <FormField
                    label="Engine Badge Pill"
                    value={currentSubpage.engineBadge || "ALIGN YOUR MODEL TODAY"}
                    onChange={(val) => updateSubpage("dataAnnotation", { engineBadge: val })}
                  />
                  <FormField
                    label="Banner Title"
                    value={currentSubpage.finalCtaTitle || "Ready to give your models the high-fidelity data they deserve?"}
                    onChange={(val) => updateSubpage("dataAnnotation", { finalCtaTitle: val })}
                  />
                  <FormField
                    label="Banner Description"
                    type="textarea"
                    rows={2}
                    value={currentSubpage.finalCtaDescription || "Let’s discuss your dataset requirements, domain expert alignment, and RLHF pipeline needs."}
                    onChange={(val) => updateSubpage("dataAnnotation", { finalCtaDescription: val })}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Button Text"
                      value={currentSubpage.finalCtaText || "Schedule an Executive Briefing"}
                      onChange={(val) => updateSubpage("dataAnnotation", { finalCtaText: val })}
                    />
                    <FormField
                      label="Button Href"
                      type="mono"
                      value={currentSubpage.finalCtaHref || "/contact"}
                      onChange={(val) => updateSubpage("dataAnnotation", { finalCtaHref: val })}
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
