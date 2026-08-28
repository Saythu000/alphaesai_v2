"use client";

import React from "react";
import { Quote, Plus, Trash2 } from "lucide-react";
import { FullCMSData } from "@/lib/cms-store";
import { SectionHeader } from "../../common/SectionHeader";
import { FormField } from "../../common/FormField";

interface Props {
  formData: FullCMSData;
  setFormData: React.Dispatch<React.SetStateAction<FullCMSData>>;
}

export const TestimonialsSectionEditor: React.FC<Props> = ({ formData, setFormData }) => {
  const test = formData.homepage.testimonial;

  const updateTestimonial = (fields: Partial<typeof test>) => {
    setFormData((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        testimonial: { ...prev.homepage.testimonial, ...fields },
      },
    }));
  };

  return (
    <div id="sec-06-testimonials" className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
      <SectionHeader
        title="Customer Testimonials & Case Proof"
        description="Edit executive quote, author credentials, and client proof badges."
        icon={Quote}
        previewHref="/#testimonials"
        previewLabel="Preview /#testimonials"
      />

      <FormField
        label="Executive Quote Text"
        type="textarea"
        rows={3}
        value={test.quote}
        onChange={(val) => updateTestimonial({ quote: val })}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Author Full Name"
          value={test.authorName}
          onChange={(val) => updateTestimonial({ authorName: val })}
        />
        <FormField
          label="Author Title & Organization"
          value={test.authorTitle}
          onChange={(val) => updateTestimonial({ authorTitle: val })}
        />
      </div>

      {/* Enhanced Testimonials Carousel Editor */}
      <div className="pt-4 border-t border-[#ddc1b0] space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#964900] uppercase">
            Client Case Study Spotlight Items ({formData.homepage.enhancedTestimonials?.items?.length || 0})
          </h3>
          <button
            type="button"
            onClick={() => {
              const newItem = {
                id: `testi-${Date.now()}`,
                quote: "AlphaesAI engineered our AI data pipeline seamlessly into production.",
                authorName: "Jane Doe",
                authorTitle: "VP of Data Engineering",
                authorAvatar: "",
                domain: "FinTech & Banking",
                roiChips: ["10x Pipeline Throughput", "Zero Downtime Migration"],
                videoThumbnail: "",
                videoTitle: "Watch Executive Case Video",
              };
              const currentItems = formData.homepage.enhancedTestimonials?.items || [];
              setFormData((prev) => ({
                ...prev,
                homepage: {
                  ...prev.homepage,
                  enhancedTestimonials: {
                    ...prev.homepage.enhancedTestimonials,
                    items: [...currentItems, newItem],
                  },
                },
              }));
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#964900] text-white text-xs font-bold rounded-lg hover:bg-[#783a00]"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Case Spotlight Item
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {(formData.homepage.enhancedTestimonials?.items || []).map((item, idx) => (
            <div key={item.id} className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-3 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#964900] uppercase">
                  Case Study Item #{idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const updated = formData.homepage.enhancedTestimonials.items.filter((_, i) => i !== idx);
                    setFormData((prev) => ({
                      ...prev,
                      homepage: {
                        ...prev.homepage,
                        enhancedTestimonials: {
                          ...prev.homepage.enhancedTestimonials,
                          items: updated,
                        },
                      },
                    }));
                  }}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <FormField
                  label="Author Name"
                  value={item.authorName}
                  onChange={(val) => {
                    const updated = [...formData.homepage.enhancedTestimonials.items];
                    updated[idx] = { ...updated[idx], authorName: val };
                    setFormData((prev) => ({
                      ...prev,
                      homepage: {
                        ...prev.homepage,
                        enhancedTestimonials: {
                          ...prev.homepage.enhancedTestimonials,
                          items: updated,
                        },
                      },
                    }));
                  }}
                />
                <FormField
                  label="Domain Industry"
                  value={item.domain}
                  onChange={(val) => {
                    const updated = [...formData.homepage.enhancedTestimonials.items];
                    updated[idx] = { ...updated[idx], domain: val };
                    setFormData((prev) => ({
                      ...prev,
                      homepage: {
                        ...prev.homepage,
                        enhancedTestimonials: {
                          ...prev.homepage.enhancedTestimonials,
                          items: updated,
                        },
                      },
                    }));
                  }}
                />
              </div>

              <FormField
                label="Quote text"
                type="textarea"
                rows={2}
                value={item.quote}
                onChange={(val) => {
                  const updated = [...formData.homepage.enhancedTestimonials.items];
                  updated[idx] = { ...updated[idx], quote: val };
                  setFormData((prev) => ({
                    ...prev,
                    homepage: {
                      ...prev.homepage,
                      enhancedTestimonials: {
                        ...prev.homepage.enhancedTestimonials,
                        items: updated,
                      },
                    },
                  }));
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
