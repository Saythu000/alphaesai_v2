"use client";

import React from "react";
import { FullCMSData } from "@/lib/cms-store";
import { HeroSectionEditor } from "./homepage/sec-01-HeroEditor";
import { ShowcaseSectionEditor } from "./homepage/sec-02-ShowcaseEditor";
import { ArchitectureSectionEditor } from "./homepage/sec-03-ArchitectureEditor";
import { TechStackSectionEditor } from "./homepage/sec-04-TechStackEditor";
import { FdeSectionEditor } from "./homepage/sec-05-FdeEditor";
import { TestimonialsSectionEditor } from "./homepage/sec-06-TestimonialsEditor";
import { CtaBannerSectionEditor } from "./homepage/sec-07-CtaBannerEditor";

interface Props {
  formData: FullCMSData;
  setFormData: React.Dispatch<React.SetStateAction<FullCMSData>>;
}

export const HomepageTab: React.FC<Props> = ({ formData, setFormData }) => {
  const sectionsNav = [
    { id: "sec-01-hero", label: "01. Hero" },
    { id: "sec-02-showcase", label: "02. Showcase" },
    { id: "sec-03-architecture", label: "03. Arch Grid" },
    { id: "sec-04-techstack", label: "04. Tech Stack" },
    { id: "sec-05-fde", label: "05. FDE Hub" },
    { id: "sec-06-testimonials", label: "06. Testimonials" },
    { id: "sec-07-cta", label: "07. CTA Banner" },
  ];

  return (
    <div className="space-y-8">
      {/* Quick Jump Section Bar */}
      <div className="sticky top-0 z-20 bg-[#fff8f5]/95 backdrop-blur border-b border-[#ddc1b0] py-2.5 px-4 -mx-8 flex items-center gap-2 overflow-x-auto">
        <span className="text-[10px] font-mono uppercase font-bold text-[#564336] mr-1 shrink-0">
          Jump to Section:
        </span>
        {sectionsNav.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className="bg-white hover:bg-[#964900] text-[#964900] hover:text-white border border-[#ddc1b0] text-xs font-mono px-3 py-1 rounded-lg transition-colors shrink-0 shadow-sm font-bold"
          >
            {sec.label}
          </a>
        ))}
      </div>

      <HeroSectionEditor formData={formData} setFormData={setFormData} />
      <ShowcaseSectionEditor formData={formData} setFormData={setFormData} />
      <ArchitectureSectionEditor formData={formData} setFormData={setFormData} />
      <TechStackSectionEditor formData={formData} setFormData={setFormData} />
      <FdeSectionEditor formData={formData} setFormData={setFormData} />
      <TestimonialsSectionEditor formData={formData} setFormData={setFormData} />
      <CtaBannerSectionEditor formData={formData} setFormData={setFormData} />
    </div>
  );
};
