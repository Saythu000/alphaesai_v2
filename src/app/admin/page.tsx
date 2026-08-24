"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Save,
  RotateCcw,
  Plus,
  Trash2,
  ExternalLink,
  Layout,
  Layers,
  Settings,
  Lock,
  Box,
  Grid,
  Quote,
  Zap,
  Briefcase,
  Stethoscope,
  Bot,
  Info,
  Handshake,
  PhoneCall,
  Search,
  ChevronRight,
  Download,
  Upload,
  RefreshCw,
  CheckCircle2,
  FileText,
  Navigation,
} from "lucide-react";
import { useCMS } from "@/context/CMSContext";
import { FullCMSData, DEFAULT_CMS_DATA } from "@/lib/cms-store";
import { toast } from "sonner";

type TabType =
  | "hero"
  | "showcase"
  | "architecture"
  | "testimonial"
  | "cta"
  | "services"
  | "drgodly"
  | "oneai"
  | "about"
  | "partners"
  | "contact"
  | "navigation"
  | "footer"
  | "settings";

interface TabItem {
  id: TabType;
  label: string;
  category: "homepage" | "subpages" | "global";
  icon: React.ElementType;
  previewHref?: string;
}

const TABS: TabItem[] = [
  // Homepage
  { id: "hero", label: "Hero Banner", category: "homepage", icon: Layout, previewHref: "/" },
  { id: "showcase", label: "3D Showcase & Metrics", category: "homepage", icon: Box, previewHref: "/#showcase" },
  { id: "architecture", label: "Global Architecture", category: "homepage", icon: Grid, previewHref: "/#architecture" },
  { id: "testimonial", label: "Testimonials & Proof", category: "homepage", icon: Quote, previewHref: "/#testimonials" },
  { id: "cta", label: "CTA Banner", category: "homepage", icon: Zap, previewHref: "/#cta" },

  // Subpages
  { id: "services", label: "Services Hub", category: "subpages", icon: Briefcase, previewHref: "/services" },
  { id: "drgodly", label: "Dr. Godly Health", category: "subpages", icon: Stethoscope, previewHref: "/drgodly" },
  { id: "oneai", label: "OneAI Assist", category: "subpages", icon: Bot, previewHref: "/oneai-assist" },
  { id: "about", label: "About Firm", category: "subpages", icon: Info, previewHref: "/about" },
  { id: "partners", label: "Partner Network", category: "subpages", icon: Handshake, previewHref: "/partners" },
  { id: "contact", label: "Contact & FAQs", category: "subpages", icon: PhoneCall, previewHref: "/contact" },

  // Global
  { id: "navigation", label: "Header & Announcement", category: "global", icon: Navigation, previewHref: "/" },
  { id: "footer", label: "Footer Links & Branding", category: "global", icon: Layers, previewHref: "/" },
  { id: "settings", label: "Backups & System Reset", category: "global", icon: Settings },
];

export default function AdminPage() {
  const { data, updateData, resetData } = useCMS();
  const [formData, setFormData] = useState<FullCMSData>(data);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [activeTab, setActiveTab] = useState<TabType>("hero");
  const [searchQuery, setSearchQuery] = useState("");

  React.useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "alphaes2026" || passcode === "admin") {
      setIsAuthenticated(true);
      toast.success("Authenticated as Administrator");
    } else {
      toast.error("Invalid passcode. Try 'alphaes2026'");
    }
  };

  const handleSave = () => {
    updateData(formData);
    toast.success("All changes saved live to website!");
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all website content to default values?")) {
      resetData();
      setFormData(DEFAULT_CMS_DATA);
      toast.info("Content reset to defaults");
    }
  };

  const exportJSON = () => {
    const dataStr =
      "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute(
      "download",
      `alphaesai-cms-backup-${new Date().toISOString().slice(0, 10)}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          setFormData(parsed);
          updateData(parsed);
          toast.success("CMS Data successfully imported from backup file!");
        } catch (err) {
          toast.error("Failed to parse JSON backup file");
        }
      };
    }
  };

  // Filter tabs based on search query
  const filteredTabs = TABS.filter(
    (tab) =>
      tab.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tab.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeTabInfo = TABS.find((t) => t.id === activeTab) || TABS[0];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#1c130d] text-[#fff8f5] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#241913] border-2 border-[#964900] p-8 rounded-2xl shadow-2xl space-y-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#964900] flex items-center justify-center text-white mb-2 shadow-lg">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="font-['Hanken_Grotesk'] text-2xl font-black text-[#ffb786]">
              AlphaesAI CMS Control Panel
            </h1>
            <p className="font-['Inter'] text-xs text-[#f3ded3]/70">
              Enter admin passcode to manage website content, headlines, subpages, footer links, and contact info.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block font-['JetBrains_Mono'] text-xs font-bold text-[#ffb786] uppercase mb-2">
                Admin Passcode
              </label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode (alphaes2026)"
                className="w-full bg-[#1c130d] border border-[#ddc1b0]/30 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#964900] font-['JetBrains_Mono']"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#964900] text-white font-['JetBrains_Mono'] font-bold py-3 rounded-lg hover:bg-[#b05600] transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Unlock Admin Panel</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff8f5] text-[#241913]">
      {/* Top Header Bar */}
      <header className="bg-[#1c130d] text-white border-b border-[#964900] sticky top-0 z-50 shadow-lg">
        <div className="max-w-[1440px] mx-auto px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#964900] flex items-center justify-center text-white shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-['Hanken_Grotesk'] text-lg font-extrabold text-[#ffb786] flex items-center gap-2">
                <span>AlphaesAI Central CMS</span>
                <span className="bg-[#964900]/40 text-[#ffb786] border border-[#964900] text-[10px] font-['JetBrains_Mono'] px-2 py-0.5 rounded-full uppercase">
                  Live Mode
                </span>
              </h1>
              <p className="font-['JetBrains_Mono'] text-[11px] text-white/60">
                Full-Site Content Manager for All Pages & Navigation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {activeTabInfo.previewHref && (
              <Link
                href={activeTabInfo.previewHref}
                target="_blank"
                className="border border-white/20 bg-white/10 text-white font-['JetBrains_Mono'] text-xs font-bold px-3.5 py-2 rounded-full hover:bg-white/20 transition-colors inline-flex items-center gap-1.5"
              >
                <span>View {activeTabInfo.label}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            )}

            <button
              onClick={handleSave}
              className="bg-[#964900] text-white font-['JetBrains_Mono'] text-xs font-bold px-5 py-2 rounded-full hover:bg-[#b05600] transition-colors shadow-md flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" />
              <span>Save Live Changes</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Grid: Sidebar + Editor Content */}
      <div className="max-w-[1440px] mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT SIDEBAR NAVIGATION */}
        <aside className="lg:col-span-3 space-y-6">
          {/* Quick Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#964900] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search sections or pages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#ddc1b0] rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#241913] placeholder-[#564336]/50 focus:outline-none focus:border-[#964900] shadow-sm font-['JetBrains_Mono']"
            />
          </div>

          {/* Nav Categories */}
          <div className="bg-white border border-[#ddc1b0] rounded-2xl p-4 shadow-sm space-y-6">
            {/* Category: Homepage */}
            <div>
              <div className="text-[10px] font-['JetBrains_Mono'] font-bold text-[#964900] uppercase tracking-widest mb-2 px-2 flex items-center justify-between">
                <span>1. Homepage Sections</span>
                <span className="text-white bg-[#964900] rounded-full text-[9px] px-1.5 py-0.2">5</span>
              </div>
              <div className="space-y-1">
                {filteredTabs
                  .filter((t) => t.category === "homepage")
                  .map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-['JetBrains_Mono'] font-bold transition-all ${
                          isActive
                            ? "bg-[#964900] text-white shadow-sm"
                            : "text-[#564336] hover:bg-[#fff1ea] hover:text-[#964900]"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 shrink-0" />
                          <span>{tab.label}</span>
                        </div>
                        {isActive && <ChevronRight className="w-3.5 h-3.5 text-white" />}
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* Category: Subpages */}
            <div>
              <div className="text-[10px] font-['JetBrains_Mono'] font-bold text-[#964900] uppercase tracking-widest mb-2 px-2 flex items-center justify-between">
                <span>2. Subpages Manager</span>
                <span className="text-white bg-[#964900] rounded-full text-[9px] px-1.5 py-0.2">6</span>
              </div>
              <div className="space-y-1">
                {filteredTabs
                  .filter((t) => t.category === "subpages")
                  .map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-['JetBrains_Mono'] font-bold transition-all ${
                          isActive
                            ? "bg-[#964900] text-white shadow-sm"
                            : "text-[#564336] hover:bg-[#fff1ea] hover:text-[#964900]"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 shrink-0" />
                          <span>{tab.label}</span>
                        </div>
                        {isActive && <ChevronRight className="w-3.5 h-3.5 text-white" />}
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* Category: Global */}
            <div>
              <div className="text-[10px] font-['JetBrains_Mono'] font-bold text-[#964900] uppercase tracking-widest mb-2 px-2 flex items-center justify-between">
                <span>3. Global & System</span>
                <span className="text-white bg-[#964900] rounded-full text-[9px] px-1.5 py-0.2">3</span>
              </div>
              <div className="space-y-1">
                {filteredTabs
                  .filter((t) => t.category === "global")
                  .map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-['JetBrains_Mono'] font-bold transition-all ${
                          isActive
                            ? "bg-[#964900] text-white shadow-sm"
                            : "text-[#564336] hover:bg-[#fff1ea] hover:text-[#964900]"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 shrink-0" />
                          <span>{tab.label}</span>
                        </div>
                        {isActive && <ChevronRight className="w-3.5 h-3.5 text-white" />}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* Quick Action Box */}
          <div className="bg-[#fff1ea] border border-[#ddc1b0] p-4 rounded-2xl space-y-3">
            <h4 className="font-['Hanken_Grotesk'] text-xs font-bold text-[#964900] uppercase">
              Quick Controls
            </h4>
            <div className="space-y-2">
              <button
                onClick={handleSave}
                className="w-full bg-[#964900] text-white text-xs font-bold py-2 rounded-xl hover:bg-[#b05600] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save All Changes</span>
              </button>
              <button
                onClick={exportJSON}
                className="w-full bg-white border border-[#ddc1b0] text-[#241913] text-xs font-bold py-2 rounded-xl hover:bg-[#fff8f5] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-[#964900]" />
                <span>Export JSON Backup</span>
              </button>
            </div>
          </div>
        </aside>

        {/* RIGHT EDITOR PANEL CONTENT */}
        <main className="lg:col-span-9 space-y-6">
          {/* TAB 1: HERO */}
          {activeTab === "hero" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <Layout className="w-5 h-5" />
                    Homepage Hero Section Editor
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Edit the main headline, subtitle, announcement chip, and call-to-action buttons on the homepage.
                  </p>
                </div>
                <Link
                  href="/"
                  target="_blank"
                  className="text-xs font-mono font-bold text-[#964900] hover:underline flex items-center gap-1"
                >
                  <span>Preview Page</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Announcement Chip Text
                  </label>
                  <input
                    type="text"
                    value={formData.homepage.hero.announcementText}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          hero: { ...formData.homepage.hero, announcementText: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm focus:outline-none focus:border-[#964900]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Announcement Link & Href
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Label"
                      value={formData.homepage.hero.announcementLinkText}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            hero: { ...formData.homepage.hero, announcementLinkText: e.target.value },
                          },
                        })
                      }
                      className="w-1/2 border border-[#ddc1b0] rounded-xl p-3 text-sm focus:outline-none focus:border-[#964900]"
                    />
                    <input
                      type="text"
                      placeholder="Href"
                      value={formData.homepage.hero.announcementLinkHref}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            hero: { ...formData.homepage.hero, announcementLinkHref: e.target.value },
                          },
                        })
                      }
                      className="w-1/2 border border-[#ddc1b0] rounded-xl p-3 text-sm font-mono focus:outline-none focus:border-[#964900]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                  Main Headline
                </label>
                <textarea
                  rows={2}
                  value={formData.homepage.hero.headline}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      homepage: {
                        ...formData.homepage,
                        hero: { ...formData.homepage.hero, headline: e.target.value },
                      },
                    })
                  }
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm focus:outline-none focus:border-[#964900]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                  Subtitle Paragraph
                </label>
                <textarea
                  rows={3}
                  value={formData.homepage.hero.subtitle}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      homepage: {
                        ...formData.homepage,
                        hero: { ...formData.homepage.hero, subtitle: e.target.value },
                      },
                    })
                  }
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm focus:outline-none focus:border-[#964900]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Primary CTA (Text & Href)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Label"
                      value={formData.homepage.hero.primaryCtaText}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            hero: { ...formData.homepage.hero, primaryCtaText: e.target.value },
                          },
                        })
                      }
                      className="w-1/2 border border-[#ddc1b0] rounded-xl p-3 text-sm focus:outline-none focus:border-[#964900]"
                    />
                    <input
                      type="text"
                      placeholder="Href"
                      value={formData.homepage.hero.primaryCtaHref}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            hero: { ...formData.homepage.hero, primaryCtaHref: e.target.value },
                          },
                        })
                      }
                      className="w-1/2 border border-[#ddc1b0] rounded-xl p-3 text-sm font-mono focus:outline-none focus:border-[#964900]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Secondary CTA (Text & Href)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Label"
                      value={formData.homepage.hero.secondaryCtaText}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            hero: { ...formData.homepage.hero, secondaryCtaText: e.target.value },
                          },
                        })
                      }
                      className="w-1/2 border border-[#ddc1b0] rounded-xl p-3 text-sm focus:outline-none focus:border-[#964900]"
                    />
                    <input
                      type="text"
                      placeholder="Href"
                      value={formData.homepage.hero.secondaryCtaHref}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            hero: { ...formData.homepage.hero, secondaryCtaHref: e.target.value },
                          },
                        })
                      }
                      className="w-1/2 border border-[#ddc1b0] rounded-xl p-3 text-sm font-mono focus:outline-none focus:border-[#964900]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SHOWCASE & METRICS */}
          {activeTab === "showcase" && (
            <div className="space-y-6">
              <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
                <div className="border-b border-[#ddc1b0] pb-3">
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <Box className="w-5 h-5" />
                    3D Interactive Robot & AI Infrastructure Showcase
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Edit the interactive 3D robot section titles, headlines, call-to-action buttons, and chest logo text on the homepage.
                  </p>
                </div>

                {/* Section Top Header & Subtitle */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                      Section Badge Text (e.g. &quot;Interactive 3D Engine&quot;)
                    </label>
                    <input
                      type="text"
                      value={formData.homepage.showcase3d.badgeText}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            showcase3d: { ...formData.homepage.showcase3d, badgeText: e.target.value },
                          },
                        })
                      }
                      className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-bold text-[#964900]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                      Section Main Title
                    </label>
                    <input
                      type="text"
                      value={formData.homepage.showcase3d.title}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            showcase3d: { ...formData.homepage.showcase3d, title: e.target.value },
                          },
                        })
                      }
                      className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Section Subtitle Paragraph
                  </label>
                  <textarea
                    rows={2}
                    value={formData.homepage.showcase3d.subtitle || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          showcase3d: { ...formData.homepage.showcase3d, subtitle: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>

                {/* 3D Card Content */}
                <div className="p-4 bg-[#fff8f5] border border-[#ddc1b0] rounded-xl space-y-4">
                  <h3 className="font-['Hanken_Grotesk'] text-sm font-bold text-[#964900] uppercase">
                    3D Robot Card Content Controls
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                      3D Card Main Headline (e.g. &quot;AI-Native Autonomous Infrastructure&quot;)
                    </label>
                    <input
                      type="text"
                      value={formData.homepage.showcase3d.cardHeadline}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            showcase3d: { ...formData.homepage.showcase3d, cardHeadline: e.target.value },
                          },
                        })
                      }
                      className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-extrabold text-[#241913] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                      3D Card Description Paragraph
                    </label>
                    <textarea
                      rows={3}
                      value={formData.homepage.showcase3d.cardDescription}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            showcase3d: { ...formData.homepage.showcase3d, cardDescription: e.target.value },
                          },
                        })
                      }
                      className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                        Primary CTA Button (Label & Href)
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Label"
                          value={formData.homepage.showcase3d.cardBtn1Text || "Explore Agent Capabilities"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              homepage: {
                                ...formData.homepage,
                                showcase3d: { ...formData.homepage.showcase3d, cardBtn1Text: e.target.value },
                              },
                            })
                          }
                          className="w-1/2 border border-[#ddc1b0] rounded-xl p-2.5 text-xs bg-white font-bold"
                        />
                        <input
                          type="text"
                          placeholder="Href"
                          value={formData.homepage.showcase3d.cardBtn1Href || "/services"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              homepage: {
                                ...formData.homepage,
                                showcase3d: { ...formData.homepage.showcase3d, cardBtn1Href: e.target.value },
                              },
                            })
                          }
                          className="w-1/2 border border-[#ddc1b0] rounded-xl p-2.5 text-xs bg-white font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                        Secondary CTA Button (Label & Href)
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Label"
                          value={formData.homepage.showcase3d.cardBtn2Text || "View Architecture"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              homepage: {
                                ...formData.homepage,
                                showcase3d: { ...formData.homepage.showcase3d, cardBtn2Text: e.target.value },
                              },
                            })
                          }
                          className="w-1/2 border border-[#ddc1b0] rounded-xl p-2.5 text-xs bg-white"
                        />
                        <input
                          type="text"
                          placeholder="Href"
                          value={formData.homepage.showcase3d.cardBtn2Href || "#architecture"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              homepage: {
                                ...formData.homepage,
                                showcase3d: { ...formData.homepage.showcase3d, cardBtn2Href: e.target.value },
                              },
                            })
                          }
                          className="w-1/2 border border-[#ddc1b0] rounded-xl p-2.5 text-xs bg-white font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                      3D Robot Chest Text (Overlay Branding)
                    </label>
                    <input
                      type="text"
                      value={formData.homepage.showcase3d.chestBrandText || "ALPHAES AI"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            showcase3d: { ...formData.homepage.showcase3d, chestBrandText: e.target.value },
                          },
                        })
                      }
                      className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-mono uppercase bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Performance Metrics List (CRUD) */}
              <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-3">
                  <h3 className="font-['Hanken_Grotesk'] text-lg font-bold text-[#964900]">
                    Performance Metrics List
                  </h3>
                  <button
                    onClick={() => {
                      const newM = {
                        id: `m-${Date.now()}`,
                        value: "99.9%",
                        description: "Guaranteed enterprise uptime SLA.",
                      };
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          metrics: [...formData.homepage.metrics, newM],
                        },
                      });
                    }}
                    className="bg-[#964900] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-[#b05600]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Metric</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formData.homepage.metrics.map((metric, idx) => (
                    <div key={metric.id} className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#964900] uppercase">
                          Metric #{idx + 1}
                        </span>
                        <button
                          onClick={() => {
                            const updated = formData.homepage.metrics.filter((_, i) => i !== idx);
                            setFormData({
                              ...formData,
                              homepage: { ...formData.homepage, metrics: updated },
                            });
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <input
                        type="text"
                        placeholder="Value (e.g. 4.5x faster)"
                        value={metric.value}
                        onChange={(e) => {
                          const updated = [...formData.homepage.metrics];
                          updated[idx].value = e.target.value;
                          setFormData({
                            ...formData,
                            homepage: { ...formData.homepage, metrics: updated },
                          });
                        }}
                        className="w-full font-bold text-sm bg-white border border-[#ddc1b0] rounded-lg p-2 text-[#964900]"
                      />

                      <textarea
                        rows={2}
                        placeholder="Description"
                        value={metric.description}
                        onChange={(e) => {
                          const updated = [...formData.homepage.metrics];
                          updated[idx].description = e.target.value;
                          setFormData({
                            ...formData,
                            homepage: { ...formData.homepage, metrics: updated },
                          });
                        }}
                        className="w-full text-xs border border-[#ddc1b0] rounded-lg p-2 bg-white"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ARCHITECTURE */}
          {activeTab === "architecture" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                <Grid className="w-5 h-5" />
                Global Architecture Bento Grid
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Section Badge
                  </label>
                  <input
                    type="text"
                    value={formData.homepage.architecture.badgeText}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          architecture: { ...formData.homepage.architecture, badgeText: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Section Title
                  </label>
                  <input
                    type="text"
                    value={formData.homepage.architecture.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          architecture: { ...formData.homepage.architecture, title: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>
              </div>

              {/* Bento Cards CRUD */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-[#564336] uppercase">
                    Architecture Cards
                  </label>
                  <button
                    onClick={() => {
                      const newC = {
                        id: `c-${Date.now()}`,
                        title: "New Cloud Region",
                        desc: "High throughput data pipeline optimization.",
                      };
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          architecture: {
                            ...formData.homepage.architecture,
                            cards: [...formData.homepage.architecture.cards, newC],
                          },
                        },
                      });
                    }}
                    className="bg-[#964900] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Card</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {formData.homepage.architecture.cards.map((card, idx) => (
                    <div key={card.id} className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#964900] uppercase">
                          Card #{idx + 1}
                        </span>
                        <button
                          onClick={() => {
                            const updated = formData.homepage.architecture.cards.filter((_, i) => i !== idx);
                            setFormData({
                              ...formData,
                              homepage: {
                                ...formData.homepage,
                                architecture: { ...formData.homepage.architecture, cards: updated },
                              },
                            });
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <input
                        type="text"
                        value={card.title}
                        onChange={(e) => {
                          const updated = [...formData.homepage.architecture.cards];
                          updated[idx].title = e.target.value;
                          setFormData({
                            ...formData,
                            homepage: {
                              ...formData.homepage,
                              architecture: { ...formData.homepage.architecture, cards: updated },
                            },
                          });
                        }}
                        className="font-bold text-sm bg-white border border-[#ddc1b0] rounded-lg p-2 w-full"
                      />

                      <textarea
                        rows={3}
                        value={card.desc}
                        onChange={(e) => {
                          const updated = [...formData.homepage.architecture.cards];
                          updated[idx].desc = e.target.value;
                          setFormData({
                            ...formData,
                            homepage: {
                              ...formData.homepage,
                              architecture: { ...formData.homepage.architecture, cards: updated },
                            },
                          });
                        }}
                        className="w-full text-xs border border-[#ddc1b0] rounded-lg p-2 bg-white"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: TESTIMONIALS */}
          {activeTab === "testimonial" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                <Quote className="w-5 h-5" />
                Executive Testimonials & Social Proof
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Heading
                  </label>
                  <input
                    type="text"
                    value={formData.homepage.testimonial.heading}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          testimonial: { ...formData.homepage.testimonial, heading: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Subhead Caption
                  </label>
                  <input
                    type="text"
                    value={formData.homepage.testimonial.subhead}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          testimonial: { ...formData.homepage.testimonial, subhead: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                  Executive Quote Text
                </label>
                <textarea
                  rows={3}
                  value={formData.homepage.testimonial.quote}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      homepage: {
                        ...formData.homepage,
                        testimonial: { ...formData.homepage.testimonial, quote: e.target.value },
                      },
                    })
                  }
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={formData.homepage.testimonial.authorName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          testimonial: { ...formData.homepage.testimonial, authorName: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Author Title & Company
                  </label>
                  <input
                    type="text"
                    value={formData.homepage.testimonial.authorTitle}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          testimonial: { ...formData.homepage.testimonial, authorTitle: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: CTA BANNER */}
          {activeTab === "cta" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Bottom Call-To-Action Banner
              </h2>

              <div>
                <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                  CTA Headline Title
                </label>
                <input
                  type="text"
                  value={formData.homepage.ctaBanner.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      homepage: {
                        ...formData.homepage,
                        ctaBanner: { ...formData.homepage.ctaBanner, title: e.target.value },
                      },
                    })
                  }
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                  Description Paragraph
                </label>
                <textarea
                  rows={2}
                  value={formData.homepage.ctaBanner.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      homepage: {
                        ...formData.homepage,
                        ctaBanner: { ...formData.homepage.ctaBanner, description: e.target.value },
                      },
                    })
                  }
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Primary Button Label & Href
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.homepage.ctaBanner.primaryCtaText}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            ctaBanner: { ...formData.homepage.ctaBanner, primaryCtaText: e.target.value },
                          },
                        })
                      }
                      className="w-1/2 border border-[#ddc1b0] rounded-xl p-3 text-sm"
                    />
                    <input
                      type="text"
                      value={formData.homepage.ctaBanner.primaryCtaHref}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            ctaBanner: { ...formData.homepage.ctaBanner, primaryCtaHref: e.target.value },
                          },
                        })
                      }
                      className="w-1/2 border border-[#ddc1b0] rounded-xl p-3 text-sm font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Secondary Button Label & Href
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.homepage.ctaBanner.secondaryCtaText}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            ctaBanner: { ...formData.homepage.ctaBanner, secondaryCtaText: e.target.value },
                          },
                        })
                      }
                      className="w-1/2 border border-[#ddc1b0] rounded-xl p-3 text-sm"
                    />
                    <input
                      type="text"
                      value={formData.homepage.ctaBanner.secondaryCtaHref}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            ctaBanner: { ...formData.homepage.ctaBanner, secondaryCtaHref: e.target.value },
                          },
                        })
                      }
                      className="w-1/2 border border-[#ddc1b0] rounded-xl p-3 text-sm font-mono"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: SERVICES HUB */}
          {activeTab === "services" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Services Hub Page Controls (/services)
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Manage service offerings, FDE model banner, and service details.
                  </p>
                </div>
                <Link
                  href="/services"
                  target="_blank"
                  className="text-xs font-mono font-bold text-[#964900] hover:underline flex items-center gap-1"
                >
                  <span>Preview /services</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Hero Badge Text
                  </label>
                  <input
                    type="text"
                    value={formData.pages.services.badge}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pages: {
                          ...formData.pages,
                          services: { ...formData.pages.services, badge: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Main Services Title
                  </label>
                  <input
                    type="text"
                    value={formData.pages.services.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pages: {
                          ...formData.pages,
                          services: { ...formData.pages.services, title: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                  Subtitle Paragraph
                </label>
                <textarea
                  rows={2}
                  value={formData.pages.services.subtitle}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pages: {
                        ...formData.pages,
                        services: { ...formData.pages.services, subtitle: e.target.value },
                      },
                    })
                  }
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                />
              </div>

              {/* Service Cards */}
              <div className="pt-4 border-t border-[#ddc1b0] space-y-3">
                <h3 className="text-sm font-bold text-[#964900] uppercase">
                  Service Capability Cards (4 Main Cards)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formData.pages.services.cards.map((card, idx) => (
                    <div key={card.id} className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#964900]">Card #{idx + 1}</span>
                        <input
                          type="text"
                          placeholder="Badge"
                          value={card.badge}
                          onChange={(e) => {
                            const updated = [...formData.pages.services.cards];
                            updated[idx].badge = e.target.value;
                            setFormData({
                              ...formData,
                              pages: {
                                ...formData.pages,
                                services: { ...formData.pages.services, cards: updated },
                              },
                            });
                          }}
                          className="text-[10px] font-mono border border-[#ddc1b0] rounded px-2 py-0.5"
                        />
                      </div>

                      <input
                        type="text"
                        placeholder="Title"
                        value={card.title}
                        onChange={(e) => {
                          const updated = [...formData.pages.services.cards];
                          updated[idx].title = e.target.value;
                          setFormData({
                            ...formData,
                            pages: {
                              ...formData.pages,
                              services: { ...formData.pages.services, cards: updated },
                            },
                          });
                        }}
                        className="font-bold text-sm bg-white border border-[#ddc1b0] rounded-lg p-2 w-full"
                      />

                      <textarea
                        rows={2}
                        placeholder="Description"
                        value={card.desc}
                        onChange={(e) => {
                          const updated = [...formData.pages.services.cards];
                          updated[idx].desc = e.target.value;
                          setFormData({
                            ...formData,
                            pages: {
                              ...formData.pages,
                              services: { ...formData.pages.services, cards: updated },
                            },
                          });
                        }}
                        className="w-full text-xs border border-[#ddc1b0] rounded-lg p-2 bg-white"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: DR GODLY */}
          {activeTab === "drgodly" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <Stethoscope className="w-5 h-5" />
                    Dr. Godly Medical AI Controls (/drgodly)
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Edit clinical decision support details, diagnostic features, and metrics.
                  </p>
                </div>
                <Link
                  href="/drgodly"
                  target="_blank"
                  className="text-xs font-mono font-bold text-[#964900] hover:underline flex items-center gap-1"
                >
                  <span>Preview /drgodly</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Badge Text
                  </label>
                  <input
                    type="text"
                    value={formData.pages.drgodly.heroBadge}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pages: {
                          ...formData.pages,
                          drgodly: { ...formData.pages.drgodly, heroBadge: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Main Headline
                  </label>
                  <input
                    type="text"
                    value={formData.pages.drgodly.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pages: {
                          ...formData.pages,
                          drgodly: { ...formData.pages.drgodly, title: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                  Subtitle Paragraph
                </label>
                <textarea
                  rows={2}
                  value={formData.pages.drgodly.subtitle}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pages: {
                        ...formData.pages,
                        drgodly: { ...formData.pages.drgodly, subtitle: e.target.value },
                      },
                    })
                  }
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                />
              </div>

              {/* Dr Godly Features */}
              <div className="pt-4 border-t border-[#ddc1b0] space-y-3">
                <h3 className="text-sm font-bold text-[#964900] uppercase">
                  Clinical Features List
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {formData.pages.drgodly.features.map((feat, idx) => (
                    <div key={feat.id} className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-2">
                      <span className="text-[10px] font-mono font-bold text-[#964900] uppercase">
                        Feature #{idx + 1}
                      </span>
                      <input
                        type="text"
                        value={feat.title}
                        onChange={(e) => {
                          const updated = [...formData.pages.drgodly.features];
                          updated[idx].title = e.target.value;
                          setFormData({
                            ...formData,
                            pages: {
                              ...formData.pages,
                              drgodly: { ...formData.pages.drgodly, features: updated },
                            },
                          });
                        }}
                        className="font-bold text-xs bg-white border border-[#ddc1b0] rounded-lg p-2 w-full"
                      />
                      <textarea
                        rows={2}
                        value={feat.desc}
                        onChange={(e) => {
                          const updated = [...formData.pages.drgodly.features];
                          updated[idx].desc = e.target.value;
                          setFormData({
                            ...formData,
                            pages: {
                              ...formData.pages,
                              drgodly: { ...formData.pages.drgodly, features: updated },
                            },
                          });
                        }}
                        className="w-full text-xs border border-[#ddc1b0] rounded-lg p-2 bg-white"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: ONEAI ASSIST */}
          {activeTab === "oneai" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    OneAI Assist Copilot Controls (/oneai-assist)
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Edit enterprise documentation assistant headline and feature highlights.
                  </p>
                </div>
                <Link
                  href="/oneai-assist"
                  target="_blank"
                  className="text-xs font-mono font-bold text-[#964900] hover:underline flex items-center gap-1"
                >
                  <span>Preview /oneai-assist</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Badge Text
                  </label>
                  <input
                    type="text"
                    value={formData.pages.oneaiAssist.heroBadge}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pages: {
                          ...formData.pages,
                          oneaiAssist: { ...formData.pages.oneaiAssist, heroBadge: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Main Platform Title
                  </label>
                  <input
                    type="text"
                    value={formData.pages.oneaiAssist.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pages: {
                          ...formData.pages,
                          oneaiAssist: { ...formData.pages.oneaiAssist, title: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                  Subtitle Paragraph
                </label>
                <textarea
                  rows={2}
                  value={formData.pages.oneaiAssist.subtitle}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pages: {
                        ...formData.pages,
                        oneaiAssist: { ...formData.pages.oneaiAssist, subtitle: e.target.value },
                      },
                    })
                  }
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                />
              </div>

              {/* Features List */}
              <div className="pt-4 border-t border-[#ddc1b0] space-y-3">
                <h3 className="text-sm font-bold text-[#964900] uppercase">
                  Copilot Features List
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {formData.pages.oneaiAssist.features.map((feat, idx) => (
                    <div key={feat.id} className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-2">
                      <span className="text-[10px] font-mono font-bold text-[#964900] uppercase">
                        Feature #{idx + 1}
                      </span>
                      <input
                        type="text"
                        value={feat.title}
                        onChange={(e) => {
                          const updated = [...formData.pages.oneaiAssist.features];
                          updated[idx].title = e.target.value;
                          setFormData({
                            ...formData,
                            pages: {
                              ...formData.pages,
                              oneaiAssist: { ...formData.pages.oneaiAssist, features: updated },
                            },
                          });
                        }}
                        className="font-bold text-xs bg-white border border-[#ddc1b0] rounded-lg p-2 w-full"
                      />
                      <textarea
                        rows={2}
                        value={feat.desc}
                        onChange={(e) => {
                          const updated = [...formData.pages.oneaiAssist.features];
                          updated[idx].desc = e.target.value;
                          setFormData({
                            ...formData,
                            pages: {
                              ...formData.pages,
                              oneaiAssist: { ...formData.pages.oneaiAssist, features: updated },
                            },
                          });
                        }}
                        className="w-full text-xs border border-[#ddc1b0] rounded-lg p-2 bg-white"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 9: ABOUT */}
          {activeTab === "about" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    About Firm Page Controls (/about)
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Edit company mission, vision, key stats, and core operational values.
                  </p>
                </div>
                <Link
                  href="/about"
                  target="_blank"
                  className="text-xs font-mono font-bold text-[#964900] hover:underline flex items-center gap-1"
                >
                  <span>Preview /about</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Hero Badge Text
                  </label>
                  <input
                    type="text"
                    value={formData.pages.about.heroBadge}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pages: {
                          ...formData.pages,
                          about: { ...formData.pages.about, heroBadge: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Main Headline
                  </label>
                  <input
                    type="text"
                    value={formData.pages.about.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pages: {
                          ...formData.pages,
                          about: { ...formData.pages.about, title: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                  Subtitle Paragraph
                </label>
                <textarea
                  rows={2}
                  value={formData.pages.about.subtitle}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pages: {
                        ...formData.pages,
                        about: { ...formData.pages.about, subtitle: e.target.value },
                      },
                    })
                  }
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                />
              </div>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#ddc1b0]">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#964900] uppercase">
                    Mission Statement
                  </label>
                  <input
                    type="text"
                    value={formData.pages.about.missionTitle}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pages: {
                          ...formData.pages,
                          about: { ...formData.pages.about, missionTitle: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-2.5 text-sm font-bold"
                  />
                  <textarea
                    rows={3}
                    value={formData.pages.about.missionDesc}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pages: {
                          ...formData.pages,
                          about: { ...formData.pages.about, missionDesc: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-2.5 text-xs"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#964900] uppercase">
                    Vision Statement
                  </label>
                  <input
                    type="text"
                    value={formData.pages.about.visionTitle}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pages: {
                          ...formData.pages,
                          about: { ...formData.pages.about, visionTitle: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-2.5 text-sm font-bold"
                  />
                  <textarea
                    rows={3}
                    value={formData.pages.about.visionDesc}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pages: {
                          ...formData.pages,
                          about: { ...formData.pages.about, visionDesc: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-2.5 text-xs"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 10: PARTNERS */}
          {activeTab === "partners" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <Handshake className="w-5 h-5" />
                    Partner Alliance Controls (/partners)
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Edit strategic alliances (Databricks, Snowflake, AWS, GCP) and application CTA.
                  </p>
                </div>
                <Link
                  href="/partners"
                  target="_blank"
                  className="text-xs font-mono font-bold text-[#964900] hover:underline flex items-center gap-1"
                >
                  <span>Preview /partners</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Badge Text
                  </label>
                  <input
                    type="text"
                    value={formData.pages.partners.heroBadge}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pages: {
                          ...formData.pages,
                          partners: { ...formData.pages.partners, heroBadge: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Partners Title
                  </label>
                  <input
                    type="text"
                    value={formData.pages.partners.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pages: {
                          ...formData.pages,
                          partners: { ...formData.pages.partners, title: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                  Subtitle Paragraph
                </label>
                <textarea
                  rows={2}
                  value={formData.pages.partners.subtitle}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pages: {
                        ...formData.pages,
                        partners: { ...formData.pages.partners, subtitle: e.target.value },
                      },
                    })
                  }
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                />
              </div>

              {/* Partner Cards */}
              <div className="pt-4 border-t border-[#ddc1b0] space-y-3">
                <h3 className="text-sm font-bold text-[#964900] uppercase">
                  Strategic Alliances
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formData.pages.partners.partners.map((partner, idx) => (
                    <div key={partner.id} className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-2">
                      <span className="text-[10px] font-mono font-bold text-[#964900] uppercase">
                        Partner #{idx + 1}
                      </span>
                      <input
                        type="text"
                        value={partner.title}
                        onChange={(e) => {
                          const updated = [...formData.pages.partners.partners];
                          updated[idx].title = e.target.value;
                          setFormData({
                            ...formData,
                            pages: {
                              ...formData.pages,
                              partners: { ...formData.pages.partners, partners: updated },
                            },
                          });
                        }}
                        className="font-bold text-xs bg-white border border-[#ddc1b0] rounded-lg p-2 w-full"
                      />
                      <textarea
                        rows={2}
                        value={partner.desc}
                        onChange={(e) => {
                          const updated = [...formData.pages.partners.partners];
                          updated[idx].desc = e.target.value;
                          setFormData({
                            ...formData,
                            pages: {
                              ...formData.pages,
                              partners: { ...formData.pages.partners, partners: updated },
                            },
                          });
                        }}
                        className="w-full text-xs border border-[#ddc1b0] rounded-lg p-2 bg-white"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 11: CONTACT */}
          {activeTab === "contact" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <PhoneCall className="w-5 h-5" />
                    Contact & Scoping Controls (/contact)
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Update phone numbers, official email, physical office address, and contact page FAQs.
                  </p>
                </div>
                <Link
                  href="/contact"
                  target="_blank"
                  className="text-xs font-mono font-bold text-[#964900] hover:underline flex items-center gap-1"
                >
                  <span>Preview /contact</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Direct Official Email
                  </label>
                  <input
                    type="email"
                    value={formData.footer.contactEmail}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        footer: { ...formData.footer, contactEmail: e.target.value },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Direct Phone Number
                  </label>
                  <input
                    type="text"
                    value={formData.footer.contactPhone || "+91 70106 42399"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        footer: { ...formData.footer, contactPhone: e.target.value },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                  Headquarters Physical Address
                </label>
                <textarea
                  rows={2}
                  value={
                    formData.footer.contactAddress ||
                    "No. 472/7 Balaji Arcade, Ejipura, Koramangala 4th Block, Bengaluru, Karnataka - 560095, India"
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      footer: { ...formData.footer, contactAddress: e.target.value },
                    })
                  }
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                />
              </div>

              {/* FAQs CRUD */}
              <div className="pt-4 border-t border-[#ddc1b0] space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#964900] uppercase">
                    Frequently Asked Questions (FAQs)
                  </h3>
                  <button
                    onClick={() => {
                      const newFaq = {
                        id: `faq-${Date.now()}`,
                        question: "New FAQ Question?",
                        answer: "Detailed answer response.",
                      };
                      setFormData({
                        ...formData,
                        pages: {
                          ...formData.pages,
                          contact: {
                            ...formData.pages.contact,
                            faqs: [...formData.pages.contact.faqs, newFaq],
                          },
                        },
                      });
                    }}
                    className="bg-[#964900] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add FAQ</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {formData.pages.contact.faqs.map((faq, idx) => (
                    <div key={faq.id} className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#964900] uppercase">
                          FAQ #{idx + 1}
                        </span>
                        <button
                          onClick={() => {
                            const updated = formData.pages.contact.faqs.filter((_, i) => i !== idx);
                            setFormData({
                              ...formData,
                              pages: {
                                ...formData.pages,
                                contact: { ...formData.pages.contact, faqs: updated },
                              },
                            });
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) => {
                          const updated = [...formData.pages.contact.faqs];
                          updated[idx].question = e.target.value;
                          setFormData({
                            ...formData,
                            pages: {
                              ...formData.pages,
                              contact: { ...formData.pages.contact, faqs: updated },
                            },
                          });
                        }}
                        className="font-bold text-sm bg-white border border-[#ddc1b0] rounded-lg p-2 w-full"
                      />

                      <textarea
                        rows={2}
                        value={faq.answer}
                        onChange={(e) => {
                          const updated = [...formData.pages.contact.faqs];
                          updated[idx].answer = e.target.value;
                          setFormData({
                            ...formData,
                            pages: {
                              ...formData.pages,
                              contact: { ...formData.pages.contact, faqs: updated },
                            },
                          });
                        }}
                        className="w-full text-xs border border-[#ddc1b0] rounded-lg p-2 bg-white"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 12: NAVIGATION & HEADER */}
          {activeTab === "navigation" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                <Navigation className="w-5 h-5" />
                Global Top Navigation Bar & Announcement Controls
              </h2>

              <div>
                <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                  Top Announcement Bar Message
                </label>
                <input
                  type="text"
                  value={formData.header.announcementBarText}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      header: { ...formData.header, announcementBarText: e.target.value },
                    })
                  }
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Announcement Link Text
                  </label>
                  <input
                    type="text"
                    value={formData.header.announcementLinkText}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        header: { ...formData.header, announcementLinkText: e.target.value },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Announcement Link Href
                  </label>
                  <input
                    type="text"
                    value={formData.header.announcementLinkHref}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        header: { ...formData.header, announcementLinkHref: e.target.value },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-mono"
                  />
                </div>
              </div>

              {/* Navigation Items */}
              <div className="pt-4 border-t border-[#ddc1b0] space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#964900] uppercase">
                    Navigation Menu Items
                  </h3>
                  <button
                    onClick={() => {
                      const newNav = {
                        id: `nav-${Date.now()}`,
                        label: "New Page",
                        href: "/services",
                      };
                      setFormData({
                        ...formData,
                        header: {
                          ...formData.header,
                          navLinks: [...formData.header.navLinks, newNav],
                        },
                      });
                    }}
                    className="bg-[#964900] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Nav Link</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {formData.header.navLinks.map((link, idx) => (
                    <div key={link.id} className="p-3 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl flex items-center gap-2">
                      <input
                        type="text"
                        value={link.label}
                        onChange={(e) => {
                          const updated = [...formData.header.navLinks];
                          updated[idx].label = e.target.value;
                          setFormData({
                            ...formData,
                            header: { ...formData.header, navLinks: updated },
                          });
                        }}
                        className="w-1/2 text-xs font-bold border border-[#ddc1b0] rounded-lg p-2 bg-white"
                      />
                      <input
                        type="text"
                        value={link.href}
                        onChange={(e) => {
                          const updated = [...formData.header.navLinks];
                          updated[idx].href = e.target.value;
                          setFormData({
                            ...formData,
                            header: { ...formData.header, navLinks: updated },
                          });
                        }}
                        className="w-1/2 text-xs font-mono border border-[#ddc1b0] rounded-lg p-2 bg-white"
                      />
                      <button
                        onClick={() => {
                          const updated = formData.header.navLinks.filter((_, i) => i !== idx);
                          setFormData({
                            ...formData,
                            header: { ...formData.header, navLinks: updated },
                          });
                        }}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 13: FOOTER */}
          {activeTab === "footer" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                <Layers className="w-5 h-5" />
                Global Footer & Links Editor
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    value={formData.footer.brandName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        footer: { ...formData.footer, brandName: e.target.value },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Tagline & Copyright
                  </label>
                  <input
                    type="text"
                    value={formData.footer.tagline}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        footer: { ...formData.footer, tagline: e.target.value },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                  Brand Description Paragraph
                </label>
                <textarea
                  rows={2}
                  value={formData.footer.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      footer: { ...formData.footer, description: e.target.value },
                    })
                  }
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                />
              </div>

              {/* Footer Link Columns */}
              <div className="pt-4 border-t border-[#ddc1b0] space-y-4">
                <h3 className="text-sm font-bold text-[#964900] uppercase">
                  Footer Link Columns (Dynamic CRUD)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {formData.footer.columns.map((col, cIdx) => (
                    <div key={col.id} className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-3">
                      <input
                        type="text"
                        value={col.title}
                        onChange={(e) => {
                          const updated = [...formData.footer.columns];
                          updated[cIdx].title = e.target.value;
                          setFormData({
                            ...formData,
                            footer: { ...formData.footer, columns: updated },
                          });
                        }}
                        className="font-bold text-sm bg-white border border-[#ddc1b0] rounded-lg p-2 w-full text-[#964900]"
                      />

                      <div className="space-y-2">
                        {col.links.map((link, lIdx) => (
                          <div key={link.id} className="flex gap-1.5 items-center">
                            <input
                              type="text"
                              placeholder="Label"
                              value={link.label}
                              onChange={(e) => {
                                const updatedCols = [...formData.footer.columns];
                                updatedCols[cIdx].links[lIdx].label = e.target.value;
                                setFormData({
                                  ...formData,
                                  footer: { ...formData.footer, columns: updatedCols },
                                });
                              }}
                              className="w-1/2 text-xs border border-[#ddc1b0] rounded-md p-1.5 bg-white"
                            />
                            <input
                              type="text"
                              placeholder="Href"
                              value={link.href}
                              onChange={(e) => {
                                const updatedCols = [...formData.footer.columns];
                                updatedCols[cIdx].links[lIdx].href = e.target.value;
                                setFormData({
                                  ...formData,
                                  footer: { ...formData.footer, columns: updatedCols },
                                });
                              }}
                              className="w-1/2 text-xs font-mono border border-[#ddc1b0] rounded-md p-1.5 bg-white"
                            />
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => {
                          const newLink = {
                            id: `l-${Date.now()}`,
                            label: "New Link",
                            href: "/",
                          };
                          const updatedCols = [...formData.footer.columns];
                          updatedCols[cIdx].links.push(newLink);
                          setFormData({
                            ...formData,
                            footer: { ...formData.footer, columns: updatedCols },
                          });
                        }}
                        className="w-full text-[11px] font-bold text-[#964900] bg-white border border-[#ddc1b0] py-1 rounded-md hover:bg-[#fff1ea]"
                      >
                        + Add Link
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 14: SETTINGS & BACKUPS */}
          {activeTab === "settings" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                <Settings className="w-5 h-5" />
                CMS Backups, JSON Import/Export & Reset
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-3">
                  <div className="flex items-center gap-2 text-[#964900] font-bold text-sm">
                    <Download className="w-4 h-4" />
                    <span>Export Full CMS JSON Backup</span>
                  </div>
                  <p className="text-xs text-[#564336]">
                    Download a full JSON file containing all website headlines, cards, page titles, footer links, and contact information.
                  </p>
                  <button
                    onClick={exportJSON}
                    className="bg-[#964900] text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-[#b05600] transition-colors"
                  >
                    Download JSON File
                  </button>
                </div>

                <div className="p-5 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-3">
                  <div className="flex items-center gap-2 text-[#964900] font-bold text-sm">
                    <Upload className="w-4 h-4" />
                    <span>Import JSON Backup File</span>
                  </div>
                  <p className="text-xs text-[#564336]">
                    Upload a previously exported JSON backup file to overwrite current site content live across all pages.
                  </p>
                  <input
                    type="file"
                    accept=".json"
                    onChange={importJSON}
                    className="text-xs text-[#564336] file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#964900] file:text-white hover:file:bg-[#b05600]"
                  />
                </div>
              </div>

              <div className="p-5 border border-red-300 bg-red-50/50 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                  <RefreshCw className="w-4 h-4" />
                  <span>Reset All Website Content to Factory Defaults</span>
                </div>
                <p className="text-xs text-red-600">
                  This action will delete all local storage edits and restore default factory text across all pages.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-red-600 text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset to Factory Defaults</span>
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
