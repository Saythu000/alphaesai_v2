"use client";

import React, { useState } from "react";
import { Navigation, Plus, Trash2, Edit3, Globe, Sparkles, Layers, Check, X } from "lucide-react";
import { FullCMSData, CustomCMSPage, HeaderCMSData, FooterCMSData } from "@/lib/cms-store";
import { SectionHeader } from "../common/SectionHeader";
import { FormField } from "../common/FormField";

interface Props {
  formData: FullCMSData;
  setFormData: React.Dispatch<React.SetStateAction<FullCMSData>>;
}

export const HeaderFooterTab: React.FC<Props> = ({ formData, setFormData }) => {
  const [subTab, setSubTab] = useState<"navigation" | "megamenu" | "footer">("navigation");

  // Modal State for Adding New Option & Dynamic Page
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState<string>("top-level");
  const [newSlug, setNewSlug] = useState("");
  const [newBadge, setNewBadge] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newHeroTitle, setNewHeroTitle] = useState("");
  const [newHeroSubtitle, setNewHeroSubtitle] = useState("");

  // Edit / Rename Modal States
  const [editingNavLink, setEditingNavLink] = useState<{ id: string; label: string; href: string } | null>(null);
  const [editingMegamenuItem, setEditingMegamenuItem] = useState<{
    catId: string;
    item: { id: string; name: string; desc: string; badge: string; href: string };
  } | null>(null);
  const [editingCategoryTitle, setEditingCategoryTitle] = useState<{ catId: string; title: string } | null>(null);
  const [editingProductItem, setEditingProductItem] = useState<{
    id: string;
    title: string;
    desc: string;
    href: string;
  } | null>(null);
  const [editingAcademyItem, setEditingAcademyItem] = useState<{
    id: string;
    title: string;
    desc: string;
    href: string;
  } | null>(null);

  const handleSlugAutoFormat = (titleVal: string) => {
    setNewTitle(titleVal);
    const slug = titleVal
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    setNewSlug(slug);
    if (!newHeroTitle) setNewHeroTitle(titleVal);
  };

  const handleCreateOptionAndPage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newSlug.trim()) return;

    const targetHref = newCategory === "top-level"
      ? `/custom/${newSlug}`
      : `/custom/${newSlug}`;

    const newPageObj: CustomCMSPage = {
      id: `custom-page-${Date.now()}`,
      slug: newSlug,
      title: newTitle,
      category: newCategory,
      badge: newBadge || "New",
      hero: {
        badge: newBadge || "Enterprise Solution",
        title: newHeroTitle || newTitle,
        subtitle: newHeroSubtitle || "Next-Generation Enterprise Capabilities",
        description: newDesc || `Comprehensive ${newTitle} solutions engineered for scale, reliability, and security.`,
        ctaText: "Schedule Executive Briefing",
        ctaHref: "/contact",
      },
      contentBlocks: [
        {
          id: `block-1-${Date.now()}`,
          title: "Enterprise Systems Integration",
          description: `Seamlessly integrate ${newTitle} into your existing cloud infrastructure and tech stack.`,
          iconName: "Cpu",
        },
        {
          id: `block-2-${Date.now()}`,
          title: "High-Performance Architecture",
          description: "Engineered with P99 latency SLA benchmarks, zero-downtime CI/CD, and robust security controls.",
          iconName: "Layers",
        },
        {
          id: `block-[#3-${Date.now()}`,
          title: "Security & Regulatory Compliance",
          description: "Full compliance with enterprise security boundaries, RBAC, PII sanitization, and audit trails.",
          iconName: "ShieldCheck",
        },
      ],
      seo: {
        title: `${newTitle} | AlphaesAI Core`,
        description: newDesc || `Learn about ${newTitle} solutions by AlphaesAI.`,
      },
    };

    setFormData((prev) => {
      const updatedPages = [...(prev.customPages || []), newPageObj];
      const updatedHeader = { ...prev.header };

      if (newCategory === "top-level") {
        // Add to main navbar top-level links
        const newNavLink = {
          id: `nav-custom-${Date.now()}`,
          label: newTitle,
          href: targetHref,
        };
        updatedHeader.navLinks = [...updatedHeader.navLinks, newNavLink];
      } else if (newCategory === "academy") {
        // Add to Academy dropdown
        const academyItem = {
          id: `acad-${Date.now()}`,
          title: newTitle,
          desc: newDesc || `${newTitle} Masterclass & Architecture`,
          href: targetHref,
          badge: newBadge,
        };
        updatedHeader.megamenu = {
          ...updatedHeader.megamenu,
          academyDropdown: [...(updatedHeader.megamenu.academyDropdown || []), academyItem],
        };
      } else if (newCategory === "products") {
        // Add to Products dropdown
        const prodItem = {
          id: `prod-${Date.now()}`,
          title: newTitle,
          desc: newDesc || `${newTitle} Product Suite`,
          href: targetHref,
          badge: newBadge,
        };
        updatedHeader.megamenu = {
          ...updatedHeader.megamenu,
          productsDropdown: [...(updatedHeader.megamenu.productsDropdown || []), prodItem],
        };
      } else {
        // Add to specific Services Megamenu category (e.g. cat-ai, cat-data, cat-solutions)
        const newItem = {
          id: `item-${Date.now()}`,
          name: newTitle,
          desc: newDesc || `${newTitle} Execution & Support`,
          badge: newBadge || "New",
          href: targetHref,
          iconName: "Cpu",
        };

        const updatedCategories = updatedHeader.megamenu.servicesCategories.map((cat) => {
          if (cat.id === newCategory) {
            return {
              ...cat,
              items: [...cat.items, newItem],
            };
          }
          return cat;
        });

        updatedHeader.megamenu = {
          ...updatedHeader.megamenu,
          servicesCategories: updatedCategories,
        };
      }

      return {
        ...prev,
        header: updatedHeader,
        customPages: updatedPages,
      };
    });

    // Reset Form & Close Modal
    setIsModalOpen(false);
    setNewTitle("");
    setNewSlug("");
    setNewBadge("");
    setNewDesc("");
    setNewHeroTitle("");
    setNewHeroSubtitle("");
    alert(`Success! Navbar option "${newTitle}" and dynamic page "/custom/${newSlug}" have been created.`);
  };

  const handleDeleteNavLink = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      header: {
        ...prev.header,
        navLinks: prev.header.navLinks.filter((item) => item.id !== id),
      },
    }));
  };

  const handleDeleteMegamenuItem = (catId: string, itemId: string) => {
    setFormData((prev) => ({
      ...prev,
      header: {
        ...prev.header,
        megamenu: {
          ...prev.header.megamenu,
          servicesCategories: prev.header.megamenu.servicesCategories.map((cat) => {
            if (cat.id === catId) {
              return {
                ...cat,
                items: cat.items.filter((item) => item.id !== itemId),
              };
            }
            return cat;
          }),
        },
      },
    }));
  };

  const handleSaveEditedNavLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingNavLink) return;
    setFormData((prev) => ({
      ...prev,
      header: {
        ...prev.header,
        navLinks: (prev.header?.navLinks || []).map((link) =>
          link.id === editingNavLink.id
            ? { ...link, label: editingNavLink.label, href: editingNavLink.href }
            : link
        ),
      },
    }));
    setEditingNavLink(null);
  };

  const handleSaveEditedMegamenuItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMegamenuItem) return;
    const { catId, item } = editingMegamenuItem;
    setFormData((prev) => ({
      ...prev,
      header: {
        ...prev.header,
        megamenu: {
          ...prev.header.megamenu,
          servicesCategories: (prev.header.megamenu?.servicesCategories || []).map((cat) => {
            if (cat.id === catId) {
              return {
                ...cat,
                items: (cat.items || []).map((it) =>
                  it.id === item.id
                    ? { ...it, name: item.name, desc: item.desc, badge: item.badge, href: item.href }
                    : it
                ),
              };
            }
            return cat;
          }),
        },
      },
    }));
    setEditingMegamenuItem(null);
  };

  const handleSaveEditedCategoryTitle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCategoryTitle) return;
    const { catId, title } = editingCategoryTitle;
    setFormData((prev) => ({
      ...prev,
      header: {
        ...prev.header,
        megamenu: {
          ...prev.header.megamenu,
          servicesCategories: (prev.header.megamenu?.servicesCategories || []).map((cat) =>
            cat.id === catId ? { ...cat, title } : cat
          ),
        },
      },
    }));
    setEditingCategoryTitle(null);
  };

  const handleDeleteProductItem = (itemId: string) => {
    setFormData((prev) => ({
      ...prev,
      header: {
        ...prev.header,
        megamenu: {
          ...prev.header.megamenu,
          productsDropdown: (prev.header.megamenu?.productsDropdown || []).filter((item) => item.id !== itemId),
        },
      },
    }));
  };

  const handleDeleteAcademyItem = (itemId: string) => {
    setFormData((prev) => ({
      ...prev,
      header: {
        ...prev.header,
        megamenu: {
          ...prev.header.megamenu,
          academyDropdown: (prev.header.megamenu?.academyDropdown || []).filter((item) => item.id !== itemId),
        },
      },
    }));
  };

  const handleSaveEditedProductItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProductItem) return;
    setFormData((prev) => ({
      ...prev,
      header: {
        ...prev.header,
        megamenu: {
          ...prev.header.megamenu,
          productsDropdown: (prev.header.megamenu?.productsDropdown || []).map((item) =>
            item.id === editingProductItem.id
              ? { ...item, title: editingProductItem.title, desc: editingProductItem.desc, href: editingProductItem.href }
              : item
          ),
        },
      },
    }));
    setEditingProductItem(null);
  };

  const handleSaveEditedAcademyItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingAcademyItem) return;
    setFormData((prev) => ({
      ...prev,
      header: {
        ...prev.header,
        megamenu: {
          ...prev.header.megamenu,
          academyDropdown: (prev.header.megamenu?.academyDropdown || []).map((item) =>
            item.id === editingAcademyItem.id
              ? { ...item, title: editingAcademyItem.title, desc: editingAcademyItem.desc, href: editingAcademyItem.href }
              : item
          ),
        },
      },
    }));
    setEditingAcademyItem(null);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
        <SectionHeader
          title="Navbar Options & Megamenu Engine"
          description="Edit main navbar options, megamenu flyout items, and create dynamic new pages with instant placement."
          icon={Navigation}
          previewHref="/"
        />

        {/* Hero Callout Banner */}
        <div className="bg-gradient-to-r from-[#241913] via-[#38261b] to-[#964900] text-white p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full text-white font-['JetBrains_Mono']">
              ⚡ Dynamic Page & Nav Generator
            </span>
            <h3 className="text-xl font-extrabold font-['JetBrains_Mono'] mt-2">
              Add Navbar Option & Launch Custom Page
            </h3>
            <p className="text-xs text-[#ffeedd] mt-1 max-w-xl">
              Create a link under any Megamenu category (AI &amp; Engineering, Data &amp; Cloud, Enterprise AI) or Top-Level Navbar. Next.js will automatically create and publish the page!
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-3 bg-[#fff8f5] text-[#241913] hover:bg-white font-['JetBrains_Mono'] text-xs font-extrabold rounded-xl transition-all shadow-md flex items-center gap-2 shrink-0"
          >
            <Plus className="w-4.5 h-4.5 text-[#964900]" />
            <span>➕ Create Navbar Option & Page</span>
          </button>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex border-b border-[#ddc1b0] gap-4">
          <button
            type="button"
            onClick={() => setSubTab("navigation")}
            className={`pb-2 text-xs font-bold transition-all border-b-2 ${
              subTab === "navigation"
                ? "border-[#964900] text-[#964900]"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            Navbar Links & Dynamic Page Creator
          </button>
          <button
            type="button"
            onClick={() => setSubTab("megamenu")}
            className={`pb-2 text-xs font-bold transition-all border-b-2 ${
              subTab === "megamenu"
                ? "border-[#964900] text-[#964900]"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            Services Megamenu Categories
          </button>
          <button
            type="button"
            onClick={() => setSubTab("footer")}
            className={`pb-2 text-xs font-bold transition-all border-b-2 ${
              subTab === "footer"
                ? "border-[#964900] text-[#964900]"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            Footer Links & Social
          </button>
        </div>

        {/* TAB 1: NAVBAR LINKS & NEW PAGE CREATOR */}
        {subTab === "navigation" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between bg-[#fff8f5] p-4 rounded-xl border border-[#ddc1b0]">
              <div>
                <h4 className="text-sm font-bold text-[#241913] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#964900]" />
                  Add New Navbar Option & Generate Dynamic Page
                </h4>
                <p className="text-xs text-[#564336] mt-1">
                  Add custom links to any Megamenu category or top-level Navbar. Next.js will auto-generate the page!
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-[#964900] text-white text-xs font-bold font-['JetBrains_Mono'] rounded-xl hover:bg-[#723600] transition-colors flex items-center gap-2 shadow-sm shrink-0"
              >
                <Plus className="w-4 h-4" />
                Add New Option & Create Page
              </button>
            </div>

            {/* Announcement & CTA Controls */}
            <div className="space-y-4 pt-2">
              <FormField
                label="Announcement Bar Text"
                value={formData.header?.announcementBarText || ""}
                onChange={(val) =>
                  setFormData((prev) => ({
                    ...prev,
                    header: { ...(prev.header || {}), announcementBarText: val } as HeaderCMSData,
                  }))
                }
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="Primary CTA Text"
                  value={formData.header?.primaryCtaText || ""}
                  onChange={(val) =>
                    setFormData((prev) => ({
                      ...prev,
                      header: { ...(prev.header || {}), primaryCtaText: val } as HeaderCMSData,
                    }))
                  }
                />
                <FormField
                  label="Primary CTA Href"
                  type="mono"
                  value={formData.header?.primaryCtaHref || ""}
                  onChange={(val) =>
                    setFormData((prev) => ({
                      ...prev,
                      header: { ...(prev.header || {}), primaryCtaHref: val } as HeaderCMSData,
                    }))
                  }
                />
              </div>
            </div>

            {/* Existing Top-Level Links List */}
            <div className="pt-4 border-t border-[#ddc1b0]/60">
              <h4 className="text-xs font-bold text-[#241913] font-['JetBrains_Mono'] uppercase tracking-wider mb-3">
                Current Top-Level Navbar Links
              </h4>
              <div className="space-y-2">
                {(formData.header?.navLinks || []).map((link) => (
                  <div
                    key={link.id}
                    className="flex items-center justify-between p-3 bg-white border border-[#ddc1b0] rounded-xl hover:border-[#964900] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-[#964900]" />
                      <span className="text-xs font-bold text-[#241913]">{link.label}</span>
                      <code className="text-[11px] text-gray-500 font-['JetBrains_Mono']">{link.href}</code>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setEditingNavLink({ id: link.id, label: link.label, href: link.href })}
                        className="px-2.5 py-1 text-[#964900] bg-[#fff8f5] hover:bg-[#ffeade] border border-[#ddc1b0] rounded-lg transition-colors flex items-center gap-1 text-xs font-bold font-['JetBrains_Mono']"
                        title="Rename / Edit Navbar Link"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Rename / Edit</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteNavLink(link.id)}
                        className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Navbar Link"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MEGAMENU CATEGORIES */}
        {subTab === "megamenu" && (
          <div className="space-y-6">
            <p className="text-xs text-[#564336]">
              Manage items inside each Services Megamenu flyout category.
            </p>

            <div className="space-y-6">
              {(formData.header?.megamenu?.servicesCategories || []).map((cat) => (
                <div key={cat.id} className="p-4 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[#ddc1b0]">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold font-['JetBrains_Mono'] text-[#964900] uppercase tracking-wider">
                        📁 Category: {cat.title}
                      </span>
                      <button
                        type="button"
                        onClick={() => setEditingCategoryTitle({ catId: cat.id, title: cat.title })}
                        className="px-2 py-0.5 text-[#964900] bg-white hover:bg-[#ffeade] border border-[#ddc1b0] rounded-md text-[10px] font-bold font-['JetBrains_Mono'] flex items-center gap-1 transition-colors"
                        title="Rename Category Title"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>Rename Category</span>
                      </button>
                    </div>
                    <span className="text-[11px] text-gray-500">
                      {(cat.items || []).length} dropdown option(s)
                    </span>
                  </div>

                  <div className="space-y-2">
                    {(cat.items || []).map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 bg-white border border-[#ddc1b0] rounded-xl"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-[#241913]">{item.name}</span>
                          {item.badge && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#964900]/10 text-[#964900] font-bold">
                              {item.badge}
                            </span>
                          )}
                          <code className="text-[10px] text-gray-400 font-['JetBrains_Mono']">{item.href}</code>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() =>
                              setEditingMegamenuItem({
                                catId: cat.id,
                                item: {
                                  id: item.id,
                                  name: item.name,
                                  desc: item.desc || "",
                                  badge: item.badge || "",
                                  href: item.href || "",
                                },
                              })
                            }
                            className="px-2.5 py-1 text-[#964900] bg-[#fff8f5] hover:bg-[#ffeade] border border-[#ddc1b0] rounded-lg transition-colors flex items-center gap-1 text-xs font-bold font-['JetBrains_Mono']"
                            title="Edit / Rename Option"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>Rename / Edit</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteMegamenuItem(cat.id, item.id)}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Products Dropdown Options */}
            <div className="p-4 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#ddc1b0]">
                <span className="text-xs font-bold font-['JetBrains_Mono'] text-[#964900] uppercase tracking-wider">
                  📦 Dropdown: Products
                </span>
                <span className="text-[11px] text-gray-500">
                  {(formData.header?.megamenu?.productsDropdown || []).length} product option(s)
                </span>
              </div>

              <div className="space-y-2">
                {(formData.header?.megamenu?.productsDropdown || []).map((prod) => (
                  <div
                    key={prod.id}
                    className="flex items-center justify-between p-3 bg-white border border-[#ddc1b0] rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#241913]">{prod.title}</span>
                      {prod.badge && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#964900]/10 text-[#964900] font-bold">
                          {prod.badge}
                        </span>
                      )}
                      <code className="text-[10px] text-gray-400 font-['JetBrains_Mono']">{prod.href}</code>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() =>
                          setEditingProductItem({
                            id: prod.id,
                            title: prod.title,
                            desc: prod.desc || "",
                            href: prod.href || "",
                          })
                        }
                        className="px-2.5 py-1 text-[#964900] bg-[#fff8f5] hover:bg-[#ffeade] border border-[#ddc1b0] rounded-lg transition-colors flex items-center gap-1 text-xs font-bold font-['JetBrains_Mono']"
                        title="Edit / Rename Product Option"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Rename / Edit</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteProductItem(prod.id)}
                        className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Remove product"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academy Tracks Dropdown Options */}
            <div className="p-4 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#ddc1b0]">
                <span className="text-xs font-bold font-['JetBrains_Mono'] text-[#964900] uppercase tracking-wider">
                  🎓 Dropdown: Academy Tracks
                </span>
                <span className="text-[11px] text-gray-500">
                  {(formData.header?.megamenu?.academyDropdown || []).length} academy track option(s)
                </span>
              </div>

              <div className="space-y-2">
                {(formData.header?.megamenu?.academyDropdown || []).map((acad) => (
                  <div
                    key={acad.id}
                    className="flex items-center justify-between p-3 bg-white border border-[#ddc1b0] rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#241913]">{acad.title}</span>
                      {acad.badge && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#964900]/10 text-[#964900] font-bold">
                          {acad.badge}
                        </span>
                      )}
                      <code className="text-[10px] text-gray-400 font-['JetBrains_Mono']">{acad.href}</code>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() =>
                          setEditingAcademyItem({
                            id: acad.id,
                            title: acad.title,
                            desc: acad.desc || "",
                            href: acad.href || "",
                          })
                        }
                        className="px-2.5 py-1 text-[#964900] bg-[#fff8f5] hover:bg-[#ffeade] border border-[#ddc1b0] rounded-lg transition-colors flex items-center gap-1 text-xs font-bold font-['JetBrains_Mono']"
                        title="Edit / Rename Academy Track Option"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Rename / Edit</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteAcademyItem(acad.id)}
                        className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Remove track"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: FOOTER */}
        {subTab === "footer" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Footer Brand Name"
                value={formData.footer?.brandName || ""}
                onChange={(val) =>
                  setFormData((prev) => ({
                    ...prev,
                    footer: { ...(prev.footer || {}), brandName: val } as FooterCMSData,
                  }))
                }
              />
              <FormField
                label="Contact Email"
                value={formData.footer?.contactEmail || ""}
                onChange={(val) =>
                  setFormData((prev) => ({
                    ...prev,
                    footer: { ...(prev.footer || {}), contactEmail: val } as FooterCMSData,
                  }))
                }
              />
            </div>
            <FormField
              label="Tagline"
              value={formData.footer?.tagline || ""}
              onChange={(val) =>
                setFormData((prev) => ({
                  ...prev,
                  footer: { ...(prev.footer || {}), tagline: val } as FooterCMSData,
                }))
              }
            />
          </div>
        )}
      </div>

      {/* MODAL: ADD NEW NAVBAR OPTION & GENERATE DYNAMIC PAGE */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-[#ddc1b0] rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#ddc1b0]">
              <h3 className="text-lg font-bold font-['JetBrains_Mono'] text-[#241913] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#964900]" />
                Add New Navbar Option & Create Page
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateOptionAndPage} className="space-y-4">
              {/* Option Title */}
              <FormField
                label="Option Title / Page Name"
                placeholder="e.g. Cloud Modernization & Migration"
                value={newTitle}
                onChange={handleSlugAutoFormat}
              />

              {/* Category Selector */}
              <div>
                <label className="block text-xs font-bold text-[#241913] mb-1.5 font-['JetBrains_Mono']">
                  Select Category / Placement Location:
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#fff8f5] border border-[#ddc1b0] rounded-xl text-xs font-['Inter'] font-semibold text-[#241913] focus:outline-none focus:border-[#964900]"
                >
                  <option value="top-level">📌 Top-Level Navbar Link</option>
                  <option value="cat-ai">🤖 Services: AI &amp; Engineering</option>
                  <option value="cat-data">☁️ Services: Data &amp; Cloud Optimization</option>
                  <option value="cat-solutions">🏢 Services: Enterprise AI Solutions</option>
                  <option value="academy">🎓 Academy Dropdown</option>
                  <option value="products">📦 Products Dropdown</option>
                </select>
              </div>

              {/* Auto-Generated URL Slug */}
              <div>
                <label className="block text-xs font-bold text-[#241913] mb-1.5 font-['JetBrains_Mono']">
                  Generated URL Path:
                </label>
                <div className="flex items-center px-3.5 py-2.5 bg-[#fff8f5] border border-[#ddc1b0] rounded-xl text-xs font-['JetBrains_Mono'] text-[#964900]">
                  <span>https://alphaesai.com/custom/</span>
                  <input
                    type="text"
                    value={newSlug}
                    onChange={(e) => setNewSlug(e.target.value)}
                    className="bg-transparent font-bold focus:outline-none text-[#241913] ml-0.5 w-full"
                    placeholder="cloud-modernization"
                  />
                </div>
              </div>

              {/* Optional Badge */}
              <FormField
                label="Badge Tag (Optional)"
                placeholder="e.g. New, Popular, SOTA"
                value={newBadge}
                onChange={setNewBadge}
              />

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-[#241913] mb-1.5 font-['JetBrains_Mono']">
                  Short Description:
                </label>
                <textarea
                  rows={2}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Short description of this service or offering..."
                  className="w-full px-3.5 py-2.5 bg-[#fff8f5] border border-[#ddc1b0] rounded-xl text-xs font-['Inter'] text-[#241913] focus:outline-none focus:border-[#964900]"
                />
              </div>

              {/* Page Hero Customization */}
              <div className="p-4 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl space-y-3">
                <span className="text-xs font-bold font-['JetBrains_Mono'] text-[#964900] uppercase tracking-wider block">
                  Initial Page Hero Content
                </span>
                <FormField
                  label="Hero Headline"
                  placeholder="e.g. Enterprise Cloud Modernization"
                  value={newHeroTitle}
                  onChange={setNewHeroTitle}
                />
                <FormField
                  label="Hero Subtitle"
                  placeholder="e.g. Transform legacy infrastructure into cloud-native architectures."
                  value={newHeroSubtitle}
                  onChange={setNewHeroSubtitle}
                />
              </div>

              {/* Submit Controls */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#ddc1b0]">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-gray-900 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#964900] text-white text-xs font-bold font-['JetBrains_Mono'] rounded-xl hover:bg-[#723600] transition-colors flex items-center gap-2 shadow-md"
                >
                  <Check className="w-4 h-4" />
                  Create Option & Generate Page
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* MODAL: EDIT / RENAME TOP-LEVEL NAVBAR LINK */}
      {editingNavLink && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-[#ddc1b0] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#ddc1b0]">
              <h3 className="text-base font-bold font-['JetBrains_Mono'] text-[#241913] flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-[#964900]" />
                Rename / Edit Top-Level Navbar Link
              </h3>
              <button
                type="button"
                onClick={() => setEditingNavLink(null)}
                className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEditedNavLink} className="space-y-4">
              <FormField
                label="Link Title / Label"
                value={editingNavLink.label}
                onChange={(val) => setEditingNavLink({ ...editingNavLink, label: val })}
              />
              <FormField
                label="Link Href / URL"
                type="mono"
                value={editingNavLink.href}
                onChange={(val) => setEditingNavLink({ ...editingNavLink, href: val })}
              />

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#ddc1b0]">
                <button
                  type="button"
                  onClick={() => setEditingNavLink(null)}
                  className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-gray-900 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#964900] text-white text-xs font-bold font-['JetBrains_Mono'] rounded-xl hover:bg-[#723600] transition-colors flex items-center gap-2 shadow-md"
                >
                  <Check className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: EDIT / RENAME SERVICES MEGAMENU DROPDOWN ITEM */}
      {editingMegamenuItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-[#ddc1b0] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#ddc1b0]">
              <h3 className="text-base font-bold font-['JetBrains_Mono'] text-[#241913] flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-[#964900]" />
                Rename / Edit Services Dropdown Option
              </h3>
              <button
                type="button"
                onClick={() => setEditingMegamenuItem(null)}
                className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEditedMegamenuItem} className="space-y-4">
              <FormField
                label="Option Name / Title"
                value={editingMegamenuItem.item.name}
                onChange={(val) =>
                  setEditingMegamenuItem({
                    ...editingMegamenuItem,
                    item: { ...editingMegamenuItem.item, name: val },
                  })
                }
              />
              <FormField
                label="Link Href / URL"
                type="mono"
                value={editingMegamenuItem.item.href}
                onChange={(val) =>
                  setEditingMegamenuItem({
                    ...editingMegamenuItem,
                    item: { ...editingMegamenuItem.item, href: val },
                  })
                }
              />
              <FormField
                label="Badge Tag (Optional)"
                placeholder="e.g. Popular, FinOps, New, HIPAA Ready"
                value={editingMegamenuItem.item.badge}
                onChange={(val) =>
                  setEditingMegamenuItem({
                    ...editingMegamenuItem,
                    item: { ...editingMegamenuItem.item, badge: val },
                  })
                }
              />
              <div>
                <label className="block text-xs font-bold text-[#241913] mb-1.5 font-['JetBrains_Mono']">
                  Short Description:
                </label>
                <textarea
                  rows={2}
                  value={editingMegamenuItem.item.desc}
                  onChange={(e) =>
                    setEditingMegamenuItem({
                      ...editingMegamenuItem,
                      item: { ...editingMegamenuItem.item, desc: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 bg-[#fff8f5] border border-[#ddc1b0] rounded-xl text-xs font-['Inter'] text-[#241913] focus:outline-none focus:border-[#964900]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#ddc1b0]">
                <button
                  type="button"
                  onClick={() => setEditingMegamenuItem(null)}
                  className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-gray-900 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#964900] text-white text-xs font-bold font-['JetBrains_Mono'] rounded-xl hover:bg-[#723600] transition-colors flex items-center gap-2 shadow-md"
                >
                  <Check className="w-4 h-4" />
                  Save Option
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: EDIT MEGAMENU CATEGORY TITLE */}
      {editingCategoryTitle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-[#ddc1b0] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#ddc1b0]">
              <h3 className="text-base font-bold font-['JetBrains_Mono'] text-[#241913] flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-[#964900]" />
                Rename Services Category Title
              </h3>
              <button
                type="button"
                onClick={() => setEditingCategoryTitle(null)}
                className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEditedCategoryTitle} className="space-y-4">
              <FormField
                label="Category Title"
                placeholder="e.g. AI & Engineering"
                value={editingCategoryTitle.title}
                onChange={(val) => setEditingCategoryTitle({ ...editingCategoryTitle, title: val })}
              />

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#ddc1b0]">
                <button
                  type="button"
                  onClick={() => setEditingCategoryTitle(null)}
                  className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-gray-900 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#964900] text-white text-xs font-bold font-['JetBrains_Mono'] rounded-xl hover:bg-[#723600] transition-colors flex items-center gap-2 shadow-md"
                >
                  <Check className="w-4 h-4" />
                  Save Category Title
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: EDIT PRODUCT ITEM */}
      {editingProductItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-[#ddc1b0] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#ddc1b0]">
              <h3 className="text-base font-bold font-['JetBrains_Mono'] text-[#241913] flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-[#964900]" />
                Rename / Edit Product Option
              </h3>
              <button
                type="button"
                onClick={() => setEditingProductItem(null)}
                className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEditedProductItem} className="space-y-4">
              <FormField
                label="Product Title"
                value={editingProductItem.title}
                onChange={(val) => setEditingProductItem({ ...editingProductItem, title: val })}
              />
              <FormField
                label="Link Href / URL"
                type="mono"
                value={editingProductItem.href}
                onChange={(val) => setEditingProductItem({ ...editingProductItem, href: val })}
              />
              <div>
                <label className="block text-xs font-bold text-[#241913] mb-1.5 font-['JetBrains_Mono']">
                  Short Description:
                </label>
                <textarea
                  rows={2}
                  value={editingProductItem.desc}
                  onChange={(e) => setEditingProductItem({ ...editingProductItem, desc: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#fff8f5] border border-[#ddc1b0] rounded-xl text-xs font-['Inter'] text-[#241913] focus:outline-none focus:border-[#964900]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#ddc1b0]">
                <button
                  type="button"
                  onClick={() => setEditingProductItem(null)}
                  className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-gray-900 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#964900] text-white text-xs font-bold font-['JetBrains_Mono'] rounded-xl hover:bg-[#723600] transition-colors flex items-center gap-2 shadow-md"
                >
                  <Check className="w-4 h-4" />
                  Save Product Option
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: EDIT ACADEMY ITEM */}
      {editingAcademyItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-[#ddc1b0] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#ddc1b0]">
              <h3 className="text-base font-bold font-['JetBrains_Mono'] text-[#241913] flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-[#964900]" />
                Rename / Edit Academy Track Option
              </h3>
              <button
                type="button"
                onClick={() => setEditingAcademyItem(null)}
                className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEditedAcademyItem} className="space-y-4">
              <FormField
                label="Track Title"
                value={editingAcademyItem.title}
                onChange={(val) => setEditingAcademyItem({ ...editingAcademyItem, title: val })}
              />
              <FormField
                label="Link Href / URL"
                type="mono"
                value={editingAcademyItem.href}
                onChange={(val) => setEditingAcademyItem({ ...editingAcademyItem, href: val })}
              />
              <div>
                <label className="block text-xs font-bold text-[#241913] mb-1.5 font-['JetBrains_Mono']">
                  Short Description:
                </label>
                <textarea
                  rows={2}
                  value={editingAcademyItem.desc}
                  onChange={(e) => setEditingAcademyItem({ ...editingAcademyItem, desc: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#fff8f5] border border-[#ddc1b0] rounded-xl text-xs font-['Inter'] text-[#241913] focus:outline-none focus:border-[#964900]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#ddc1b0]">
                <button
                  type="button"
                  onClick={() => setEditingAcademyItem(null)}
                  className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-gray-900 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#964900] text-white text-xs font-bold font-['JetBrains_Mono'] rounded-xl hover:bg-[#723600] transition-colors flex items-center gap-2 shadow-md"
                >
                  <Check className="w-4 h-4" />
                  Save Track Option
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
