"use client";

import React, { useState } from "react";
import { FileText, Trash2, Edit3, ExternalLink, Sparkles, Plus, Save } from "lucide-react";
import { FullCMSData, CustomCMSPage } from "@/lib/cms-store";
import { SectionHeader } from "../common/SectionHeader";
import { FormField } from "../common/FormField";

interface Props {
  formData: FullCMSData;
  setFormData: React.Dispatch<React.SetStateAction<FullCMSData>>;
}

export const CustomPagesTab: React.FC<Props> = ({ formData, setFormData }) => {
  const customPages = formData.customPages || [];
  const [selectedPageIndex, setSelectedPageIndex] = useState<number | null>(
    customPages.length > 0 ? 0 : null
  );

  const selectedPage =
    selectedPageIndex !== null && customPages[selectedPageIndex]
      ? customPages[selectedPageIndex]
      : null;

  const handleUpdatePageField = (field: string, value: any) => {
    if (selectedPageIndex === null) return;
    setFormData((prev) => {
      const pages = [...(prev.customPages || [])];
      pages[selectedPageIndex] = {
        ...pages[selectedPageIndex],
        [field]: value,
      };
      return { ...prev, customPages: pages };
    });
  };

  const handleUpdateHeroField = (field: string, value: string) => {
    if (selectedPageIndex === null || !selectedPage) return;
    setFormData((prev) => {
      const pages = [...(prev.customPages || [])];
      pages[selectedPageIndex] = {
        ...pages[selectedPageIndex],
        hero: {
          ...pages[selectedPageIndex].hero,
          [field]: value,
        },
      };
      return { ...prev, customPages: pages };
    });
  };

  const handleDeleteCustomPage = (index: number) => {
    if (!confirm("Are you sure you want to delete this custom page?")) return;
    setFormData((prev) => {
      const pages = [...(prev.customPages || [])];
      pages.splice(index, 1);
      return { ...prev, customPages: pages };
    });
    setSelectedPageIndex((prev) => (prev && prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
        <SectionHeader
          title="Dynamic Custom Pages Manager"
          description="Edit headlines, content blocks, and SEO metadata for all custom pages created via Navbar options."
          icon={FileText}
          previewHref={selectedPage ? `/custom/${selectedPage.slug}` : "/"}
        />

        {customPages.length === 0 ? (
          <div className="p-12 text-center bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-3">
            <Sparkles className="w-8 h-8 text-[#964900] mx-auto" />
            <h4 className="text-base font-bold text-[#241913] font-['JetBrains_Mono']">
              No Custom Pages Created Yet
            </h4>
            <p className="text-xs text-[#564336] max-w-md mx-auto">
              Go to the <strong>Header & Footer Management</strong> tab and click <strong>&quot;Add New Option & Create Page&quot;</strong> to create your first dynamic custom page!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Page Selector List */}
            <div className="lg:col-span-4 space-y-2">
              <h4 className="text-xs font-bold text-[#241913] font-['JetBrains_Mono'] uppercase tracking-wider mb-2">
                Custom Pages ({customPages.length})
              </h4>
              {customPages.map((page, idx) => {
                const isSelected = selectedPageIndex === idx;
                return (
                  <div
                    key={page.id || idx}
                    onClick={() => setSelectedPageIndex(idx)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "bg-[#fff8f5] border-[#964900] shadow-sm text-[#964900]"
                        : "bg-white border-[#ddc1b0] hover:border-gray-400 text-gray-800"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold font-['JetBrains_Mono']">
                        {page.title}
                      </div>
                      <div className="text-[11px] text-gray-500 font-['JetBrains_Mono']">
                        /custom/{page.slug}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <a
                        href={`/custom/${page.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 text-gray-400 hover:text-[#964900]"
                        title="Preview Page"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteCustomPage(idx);
                        }}
                        className="p-1 text-red-500 hover:text-red-700"
                        title="Delete Page"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Editor Form */}
            <div className="lg:col-span-8 bg-[#fff8f5] border border-[#ddc1b0] p-6 rounded-2xl space-y-6">
              {selectedPage ? (
                <>
                  <div className="flex items-center justify-between pb-3 border-b border-[#ddc1b0]">
                    <div>
                      <h4 className="text-sm font-bold font-['JetBrains_Mono'] text-[#241913]">
                        Editing: {selectedPage.title}
                      </h4>
                      <code className="text-xs text-[#964900] font-['JetBrains_Mono']">
                        Path: /custom/{selectedPage.slug}
                      </code>
                    </div>
                    <a
                      href={`/custom/${selectedPage.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 bg-[#241913] text-white text-xs font-bold font-['JetBrains_Mono'] rounded-xl hover:bg-[#964900] transition-colors flex items-center gap-1.5"
                    >
                      <span>Live View</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* General Settings */}
                  <div className="space-y-4">
                    <FormField
                      label="Page Title"
                      value={selectedPage.title}
                      onChange={(val) => handleUpdatePageField("title", val)}
                    />
                    <FormField
                      label="URL Slug"
                      type="mono"
                      value={selectedPage.slug}
                      onChange={(val) => handleUpdatePageField("slug", val)}
                    />
                  </div>

                  {/* Hero Customization */}
                  <div className="p-4 bg-white border border-[#ddc1b0] rounded-xl space-y-4">
                    <h5 className="text-xs font-bold font-['JetBrains_Mono'] text-[#964900] uppercase tracking-wider">
                      Hero Section Content
                    </h5>
                    <FormField
                      label="Hero Badge"
                      value={selectedPage.hero?.badge || ""}
                      onChange={(val) => handleUpdateHeroField("badge", val)}
                    />
                    <FormField
                      label="Hero Title"
                      value={selectedPage.hero?.title || ""}
                      onChange={(val) => handleUpdateHeroField("title", val)}
                    />
                    <FormField
                      label="Hero Subtitle"
                      value={selectedPage.hero?.subtitle || ""}
                      onChange={(val) => handleUpdateHeroField("subtitle", val)}
                    />
                    <FormField
                      label="Hero Description"
                      type="textarea"
                      value={selectedPage.hero?.description || ""}
                      onChange={(val) => handleUpdateHeroField("description", val)}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        label="CTA Button Text"
                        value={selectedPage.hero?.ctaText || ""}
                        onChange={(val) => handleUpdateHeroField("ctaText", val)}
                      />
                      <FormField
                        label="CTA Target Href"
                        type="mono"
                        value={selectedPage.hero?.ctaHref || ""}
                        onChange={(val) => handleUpdateHeroField("ctaHref", val)}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-12 text-gray-500 text-xs">
                  Select a custom page on the left to edit its details.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
