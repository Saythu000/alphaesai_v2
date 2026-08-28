"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
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
  Eye,
  EyeOff,
  Database,
  User,
  Key,
  Loader2,
  LogOut,
  Newspaper,
  GraduationCap,
  Cpu,
  Edit3,
  Check,
  X,
  Sparkles,
  Clock,
  TrendingDown,
} from "lucide-react";
import { useCMS } from "@/context/CMSContext";
import {
  FullCMSData,
  DEFAULT_CMS_DATA,
  FAQItemCMS,
  BlogPostCMSData,
  ServiceSubpagesCMSData,
  AcademySubpagesCMSData,
} from "@/lib/cms-store";
import { toast } from "sonner";

type TabType =
  | "hero"
  | "showcase"
  | "architecture"
  | "techStack"
  | "fdeHub"
  | "testimonial"
  | "cta"
  | "blog"
  | "services"
  | "serviceSubpages"
  | "academySubpages"
  | "drgodly"
  | "oneai"
  | "about"
  | "partners"
  | "contact"
  | "careers"
  | "navigation"
  | "megamenu"
  | "footer"
  | "settings";

interface TabItem {
  id: TabType;
  label: string;
  category: "homepage" | "blog" | "subpages" | "global";
  icon: React.ElementType;
  previewHref?: string;
}

const TABS: TabItem[] = [
  // Homepage
  { id: "hero", label: "Hero Banner", category: "homepage", icon: Layout, previewHref: "/" },
  { id: "showcase", label: "3D Showcase & Metrics", category: "homepage", icon: Box, previewHref: "/#showcase" },
  { id: "architecture", label: "Global Architecture", category: "homepage", icon: Grid, previewHref: "/#architecture" },
  { id: "techStack", label: "Tech Stack & Badges", category: "homepage", icon: ShieldCheck, previewHref: "/#tech-stack" },
  { id: "fdeHub", label: "FDE Process Hub & ROI", category: "homepage", icon: Cpu, previewHref: "/#fde-hub" },
  { id: "testimonial", label: "Testimonials & Proof", category: "homepage", icon: Quote, previewHref: "/#testimonials" },
  { id: "cta", label: "CTA Banner", category: "homepage", icon: Zap, previewHref: "/#cta" },

  // Blog
  { id: "blog", label: "Blog Posts & Articles", category: "blog", icon: Newspaper, previewHref: "/blog" },

  // Subpages
  { id: "services", label: "Services Hub", category: "subpages", icon: Briefcase, previewHref: "/services" },
  { id: "serviceSubpages", label: "Service Subpages (4)", category: "subpages", icon: Layers, previewHref: "/services" },
  { id: "academySubpages", label: "Academy Tracks (3)", category: "subpages", icon: GraduationCap, previewHref: "/academy" },
  { id: "drgodly", label: "Dr. Godly Health", category: "subpages", icon: Stethoscope, previewHref: "/drgodly" },
  { id: "oneai", label: "OneAI Assist", category: "subpages", icon: Bot, previewHref: "/oneai-assist" },
  { id: "about", label: "About Firm", category: "subpages", icon: Info, previewHref: "/about" },
  { id: "partners", label: "Partner Network", category: "subpages", icon: Handshake, previewHref: "/partners" },
  { id: "contact", label: "Contact & FAQs", category: "subpages", icon: PhoneCall, previewHref: "/contact" },
  { id: "careers", label: "Careers & Open Roles", category: "subpages", icon: Briefcase, previewHref: "/careers" },

  // Global
  { id: "navigation", label: "Header Announcement", category: "global", icon: Navigation, previewHref: "/" },
  { id: "megamenu", label: "Header Megamenu & Nav", category: "global", icon: Layers, previewHref: "/" },
  { id: "footer", label: "Footer Links & Branding", category: "global", icon: Layers, previewHref: "/" },
  { id: "settings", label: "Backups, Sync & Reset", category: "global", icon: Settings },
];

export default function AdminPage() {
  const { data, updateData, resetData, isLoaded } = useCMS();
  const [formData, setFormData] = useState<FullCMSData>(data);
  const hasInitializedForm = React.useRef(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [adminUser, setAdminUser] = useState<{ username: string; email?: string } | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>("hero");
  const [searchQuery, setSearchQuery] = useState("");

  // Subpage active tabs
  const [activeServiceSubpage, setActiveServiceSubpage] = useState<
    "cloudMigration" | "fde" | "dataAnnotation" | "databaseTuning"
  >("cloudMigration");
  const [activeAcademySubpage, setActiveAcademySubpage] = useState<
    "agenticAi" | "databricks" | "fullstackAi"
  >("agenticAi");

  // Blog Article Form modal/editor state
  const [editingArticle, setEditingArticle] = useState<BlogPostCMSData | null>(null);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);

  // Settings tab credential update & DB sync state
  const [credUsername, setCredUsername] = useState("admin");
  const [credPassword, setCredPassword] = useState("");
  const [isUpdatingCreds, setIsUpdatingCreds] = useState(false);
  const [isSyncingDB, setIsSyncingDB] = useState(false);

  React.useEffect(() => {
    if (isLoaded && !hasInitializedForm.current) {
      setFormData(data);
      hasInitializedForm.current = true;
    }
  }, [data, isLoaded]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!usernameInput.trim() || !passwordInput.trim()) {
      toast.error("Please enter both username/email and password.");
      return;
    }

    setIsAuthenticating(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: usernameInput.trim(),
          password: passwordInput,
        }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setIsAuthenticated(true);
        setAdminUser(result.user);
        toast.success(`Welcome ${result.user.username}! Authenticated via Neon DB.`);
      } else {
        toast.error(result.error || "Authentication failed. Invalid credentials.");
      }
    } catch (err) {
      console.error("Neon DB authentication error:", err);
      toast.error("Failed to connect to Neon database authentication server.");
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleUpdateCredentials = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!credUsername.trim() || !credPassword.trim()) {
      toast.error("Username and new password are required.");
      return;
    }

    if (credPassword.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    setIsUpdatingCreds(true);
    try {
      const res = await fetch("/api/admin/credentials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: credUsername.trim(),
          password: credPassword,
        }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        toast.success("Admin credentials successfully updated in Neon DB!");
        setCredPassword("");
      } else {
        toast.error(result.error || "Failed to update admin credentials.");
      }
    } catch (err) {
      console.error("Error updating credentials:", err);
      toast.error("Error connecting to database to update credentials.");
    } finally {
      setIsUpdatingCreds(false);
    }
  };

  const handleSyncDefaultsToDB = async () => {
    setIsSyncingDB(true);
    try {
      const response = await fetch("/api/cms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        toast.success("Successfully pushed & synced complete CMS data to Neon DB!");
      } else {
        toast.error(result.error || "Failed to sync data to Neon DB.");
      }
    } catch (err) {
      console.error("Error syncing to Neon DB:", err);
      toast.error("Error connecting to server to sync database.");
    } finally {
      setIsSyncingDB(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAdminUser(null);
    setPasswordInput("");
    toast.info("Logged out of Admin Control Panel.");
  };

  const handleSave = () => {
    updateData(formData);
    toast.success("All changes saved live to website & Neon DB!");
  };

  const handleReset = () => {
    if (
      confirm(
        "Are you sure you want to reset all content to factory defaults? All custom text will be replaced."
      )
    ) {
      resetData();
      setFormData(DEFAULT_CMS_DATA);
      toast.info("CMS restored to factory default settings.");
    }
  };

  const exportJSON = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `alphaesai_cms_backup_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    toast.success("CMS backup downloaded successfully!");
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
          toast.success("CMS backup imported and applied live!");
        } catch {
          toast.error("Invalid JSON file format.");
        }
      };
    }
  };

  // Blog Article Form Handlers
  const handleOpenNewArticle = () => {
    setEditingArticle({
      id: `post-${Date.now()}`,
      title: "New AI Engineering Blueprint",
      category: "Agentic AI",
      readTime: "6 min read",
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      author: "Alphaes AI Engineering",
      authorRole: "Core Architecture Team",
      snippet: "Brief preview description of the article...",
      featured: false,
      content: {
        introduction: "Detailed introduction paragraph for this article...",
        keyTakeaways: [
          "First key architectural takeaway",
          "Second key performance outcome"
        ],
        sections: [
          {
            heading: "1. Core Architectural Pattern",
            body: "Detailed technical section body content...",
            codeSnippet: "// Code example\nconst agent = new AlphaesAgent();"
          }
        ],
        conclusion: "Final concluding thoughts and takeaway summary."
      }
    });
    setIsBlogModalOpen(true);
  };

  const handleSaveArticle = () => {
    if (!editingArticle) return;
    const existing = formData.blog.articles || [];
    const index = existing.findIndex((a) => a.id === editingArticle.id);
    let updated: BlogPostCMSData[];

    if (index >= 0) {
      updated = [...existing];
      updated[index] = editingArticle;
    } else {
      updated = [editingArticle, ...existing];
    }

    const nextData: FullCMSData = {
      ...formData,
      blog: {
        ...formData.blog,
        articles: updated,
      },
    };

    setFormData(nextData);
    updateData(nextData);
    setIsBlogModalOpen(false);
    setEditingArticle(null);
    toast.success("Blog article saved live to website & DB!");
  };

  const handleDeleteArticle = (id: string) => {
    if (confirm("Are you sure you want to delete this blog article?")) {
      const updated = (formData.blog.articles || []).filter((a) => a.id !== id);
      const nextData: FullCMSData = {
        ...formData,
        blog: {
          ...formData.blog,
          articles: updated,
        },
      };
      setFormData(nextData);
      updateData(nextData);
      toast.info("Article deleted live from website & DB.");
    }
  };

  // FILTERED TABS
  const filteredTabs = TABS.filter((t) =>
    t.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // AUTHENTICATION LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#fff8f5] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white border border-[#ddc1b0] rounded-3xl p-8 shadow-xl space-y-6">
          <div className="text-center space-y-3">
            <div className="inline-block p-3 rounded-2xl bg-[#fff8f5] border border-[#ddc1b0]">
              <Logo />
            </div>
            <h1 className="font-['Hanken_Grotesk'] text-2xl font-extrabold text-[#964900]">
              Admin Portal
            </h1>
            <p className="text-xs text-[#564336]">
              Authenticated against Neon PostgreSQL Database
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                Username / Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  placeholder="admin"
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 pl-10 text-sm focus:outline-none focus:border-[#964900]"
                  required
                />
                <User className="w-4 h-4 text-[#964900] absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 pl-10 pr-10 text-sm focus:outline-none focus:border-[#964900]"
                  required
                />
                <Key className="w-4 h-4 text-[#964900] absolute left-3.5 top-3.5" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-[#564336] hover:text-[#964900]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isAuthenticating}
              className="w-full bg-[#964900] text-white font-bold py-3.5 rounded-xl hover:bg-[#b05600] transition-colors flex items-center justify-center gap-2 text-sm shadow-md disabled:opacity-50"
            >
              {isAuthenticating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying Neon DB...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Authenticate & Access CMS</span>
                </>
              )}
            </button>
          </form>

          <div className="p-3 bg-[#fff8f5] border border-[#ddc1b0] rounded-xl text-center">
            <p className="text-[11px] text-[#564336]">
              Neon DB Account: <span className="font-mono font-bold text-[#964900]">admin</span> / <span className="font-mono font-bold text-[#964900]">alphaes2026</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff8f5] text-[#1c1917] flex flex-col font-['Hanken_Grotesk']">
      {/* TOP ADMIN HEADER BAR */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#ddc1b0] px-6 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <Logo />
          <div className="h-6 w-px bg-[#ddc1b0]" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold bg-[#964900] text-white px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <Database className="w-3 h-3 text-emerald-400" />
              <span>Neon DB Active</span>
            </span>
            <span className="text-xs text-[#564336] font-medium hidden md:inline">
              Enterprise Live CMS Editor
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSave}
            className="bg-[#964900] text-white font-bold text-xs px-4 py-2 rounded-xl hover:bg-[#b05600] transition-colors flex items-center gap-1.5 shadow"
          >
            <Save className="w-4 h-4" />
            <span>Save All Live Changes</span>
          </button>

          <button
            onClick={handleSyncDefaultsToDB}
            disabled={isSyncingDB}
            className="bg-emerald-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl hover:bg-emerald-800 transition-colors flex items-center gap-1.5 shadow disabled:opacity-50"
            title="Push complete default structure and edits to Neon DB"
          >
            {isSyncingDB ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <RefreshCw className="w-4 h-4" />
            )}
            <span className="hidden sm:inline">Sync Neon DB</span>
          </button>

          <button
            onClick={handleLogout}
            className="p-2 text-[#564336] hover:text-red-600 rounded-xl hover:bg-red-50 transition-colors"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* SIDEBAR NAVIGATION */}
        <aside className="w-64 bg-white border-r border-[#ddc1b0] flex flex-col p-4 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search editor tabs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-[#ddc1b0] rounded-xl p-2.5 pl-8 text-xs focus:outline-none focus:border-[#964900]"
            />
            <Search className="w-3.5 h-3.5 text-[#564336] absolute left-2.5 top-3" />
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 pr-1">
            {/* HOMEPAGE SECTION */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-extrabold text-[#964900] uppercase tracking-wider px-2">
                Homepage Sections
              </span>
              {filteredTabs
                .filter((t) => t.category === "homepage")
                .map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition-all ${
                        activeTab === tab.id
                          ? "bg-[#964900] text-white shadow-sm"
                          : "text-[#564336] hover:bg-[#fff8f5] hover:text-[#964900]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span>{tab.label}</span>
                      </div>
                      <ChevronRight className="w-3 h-3 opacity-60" />
                    </button>
                  );
                })}
            </div>

            {/* BLOG SECTION */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-extrabold text-[#964900] uppercase tracking-wider px-2">
                Blog & Content
              </span>
              {filteredTabs
                .filter((t) => t.category === "blog")
                .map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition-all ${
                        activeTab === tab.id
                          ? "bg-[#964900] text-white shadow-sm"
                          : "text-[#564336] hover:bg-[#fff8f5] hover:text-[#964900]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span>{tab.label}</span>
                      </div>
                      <ChevronRight className="w-3 h-3 opacity-60" />
                    </button>
                  );
                })}
            </div>

            {/* SUBPAGES SECTION */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-extrabold text-[#964900] uppercase tracking-wider px-2">
                Subpages & Solutions
              </span>
              {filteredTabs
                .filter((t) => t.category === "subpages")
                .map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition-all ${
                        activeTab === tab.id
                          ? "bg-[#964900] text-white shadow-sm"
                          : "text-[#564336] hover:bg-[#fff8f5] hover:text-[#964900]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span>{tab.label}</span>
                      </div>
                      <ChevronRight className="w-3 h-3 opacity-60" />
                    </button>
                  );
                })}
            </div>

            {/* GLOBAL SECTION */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-extrabold text-[#964900] uppercase tracking-wider px-2">
                Global Header, Footer & Settings
              </span>
              {filteredTabs
                .filter((t) => t.category === "global")
                .map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition-all ${
                        activeTab === tab.id
                          ? "bg-[#964900] text-white shadow-sm"
                          : "text-[#564336] hover:bg-[#fff8f5] hover:text-[#964900]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span>{tab.label}</span>
                      </div>
                      <ChevronRight className="w-3 h-3 opacity-60" />
                    </button>
                  );
                })}
            </div>
          </div>
        </aside>

        {/* MAIN EDITOR CONTENT */}
        <main className="flex-1 overflow-y-auto p-8 space-y-6">
          {/* TAB 1: HERO */}
          {activeTab === "hero" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <Layout className="w-5 h-5" />
                    Homepage Hero Banner Editor
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Edit top headline, subtext, announcement bar, and main call-to-action buttons.
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
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Announcement Banner Text
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
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Announcement Link Label
                  </label>
                  <input
                    type="text"
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
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Announcement Href
                  </label>
                  <input
                    type="text"
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
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                  Main Hero Headline
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
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                  Hero Subtitle Paragraph
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
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#ddc1b0]">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Primary CTA Button Text
                  </label>
                  <input
                    type="text"
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
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Primary CTA Link Href
                  </label>
                  <input
                    type="text"
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
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Secondary CTA Button Text
                  </label>
                  <input
                    type="text"
                    value={formData.homepage.hero.secondaryCtaText || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          hero: { ...formData.homepage.hero, secondaryCtaText: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Secondary CTA Link Href
                  </label>
                  <input
                    type="text"
                    value={formData.homepage.hero.secondaryCtaHref || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          hero: { ...formData.homepage.hero, secondaryCtaHref: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SHOWCASE */}
          {activeTab === "showcase" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <Box className="w-5 h-5" />
                    3D Interactive Robot & Metrics Editor
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Customize section headers, 3D card text, robot chest brand, and performance stat cards.
                  </p>
                </div>
                <Link
                  href="/#showcase"
                  target="_blank"
                  className="text-xs font-mono font-bold text-[#964900] hover:underline flex items-center gap-1"
                >
                  <span>Preview /#showcase</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              {/* Section Header Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6 border-b border-[#ddc1b0]">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Badge Text
                  </label>
                  <input
                    type="text"
                    value={formData.homepage.showcase3d.badgeText || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          showcase3d: { ...formData.homepage.showcase3d, badgeText: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Section Title
                  </label>
                  <input
                    type="text"
                    value={formData.homepage.showcase3d.title || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          showcase3d: { ...formData.homepage.showcase3d, title: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-bold"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Section Subtitle
                  </label>
                  <input
                    type="text"
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
              </div>

              {/* 3D Robot Card Content Controls */}
              <div className="space-y-4 pb-6 border-b border-[#ddc1b0]">
                <h3 className="text-sm font-extrabold text-[#241913] uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#964900]" />
                  3D Showcase Card Overlay Controls
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                      Card Headline
                    </label>
                    <input
                      type="text"
                      value={formData.homepage.showcase3d.cardHeadline || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            showcase3d: { ...formData.homepage.showcase3d, cardHeadline: e.target.value },
                          },
                        })
                      }
                      className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                      Robot Chest Brand Typography (3D Animated)
                    </label>
                    <input
                      type="text"
                      value={formData.homepage.showcase3d.chestBrandText || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            showcase3d: { ...formData.homepage.showcase3d, chestBrandText: e.target.value },
                          },
                        })
                      }
                      className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-mono font-bold text-[#964900]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                      Card Description
                    </label>
                    <textarea
                      rows={2}
                      value={formData.homepage.showcase3d.cardDescription || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            showcase3d: { ...formData.homepage.showcase3d, cardDescription: e.target.value },
                          },
                        })
                      }
                      className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                      Button 1 Text
                    </label>
                    <input
                      type="text"
                      value={formData.homepage.showcase3d.cardBtn1Text || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            showcase3d: { ...formData.homepage.showcase3d, cardBtn1Text: e.target.value },
                          },
                        })
                      }
                      className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                      Button 1 Link Href
                    </label>
                    <input
                      type="text"
                      value={formData.homepage.showcase3d.cardBtn1Href || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            showcase3d: { ...formData.homepage.showcase3d, cardBtn1Href: e.target.value },
                          },
                        })
                      }
                      className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                      Button 2 Text
                    </label>
                    <input
                      type="text"
                      value={formData.homepage.showcase3d.cardBtn2Text || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            showcase3d: { ...formData.homepage.showcase3d, cardBtn2Text: e.target.value },
                          },
                        })
                      }
                      className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                      Button 2 Link Href
                    </label>
                    <input
                      type="text"
                      value={formData.homepage.showcase3d.cardBtn2Href || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homepage: {
                            ...formData.homepage,
                            showcase3d: { ...formData.homepage.showcase3d, cardBtn2Href: e.target.value },
                          },
                        })
                      }
                      className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Performance Metrics Cards */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-extrabold text-[#241913] uppercase tracking-wider">
                    Performance Metric Stat Cards ({formData.homepage.metrics?.length || 0})
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      const newMetric = {
                        id: `m-${Date.now()}`,
                        value: "99.9%",
                        description: "High availability SLA across all deployed agent pipelines.",
                      };
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          metrics: [...(formData.homepage.metrics || []), newMetric],
                        },
                      });
                    }}
                    className="bg-[#964900] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-[#723600]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add Stat Card
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(formData.homepage.metrics || []).map((m, idx) => (
                    <div key={m.id || idx} className="p-4 border border-[#ddc1b0] rounded-xl bg-[#fff8f5] relative space-y-3">
                      <button
                        type="button"
                        onClick={() => {
                          const updated = formData.homepage.metrics.filter((_, i) => i !== idx);
                          setFormData({
                            ...formData,
                            homepage: { ...formData.homepage, metrics: updated },
                          });
                        }}
                        className="absolute top-3 right-3 text-red-500 hover:text-red-700 p-1"
                        title="Delete Metric"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div>
                        <label className="block text-[10px] font-bold text-[#564336] uppercase mb-1">
                          Metric Value (e.g. 4.5x faster)
                        </label>
                        <input
                          type="text"
                          value={m.value}
                          onChange={(e) => {
                            const updated = [...formData.homepage.metrics];
                            updated[idx] = { ...updated[idx], value: e.target.value };
                            setFormData({
                              ...formData,
                              homepage: { ...formData.homepage, metrics: updated },
                            });
                          }}
                          className="w-full border border-[#ddc1b0] rounded-lg p-2.5 text-sm font-bold text-[#964900]"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-[#564336] uppercase mb-1">
                          Metric Description
                        </label>
                        <textarea
                          rows={2}
                          value={m.description}
                          onChange={(e) => {
                            const updated = [...formData.homepage.metrics];
                            updated[idx] = { ...updated[idx], description: e.target.value };
                            setFormData({
                              ...formData,
                              homepage: { ...formData.homepage, metrics: updated },
                            });
                          }}
                          className="w-full border border-[#ddc1b0] rounded-lg p-2.5 text-xs"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ARCHITECTURE */}
          {activeTab === "architecture" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <Grid className="w-5 h-5" />
                    Global Architecture Bento Grid
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Manage core agentic architecture pillars displayed in the homepage bento grid.
                  </p>
                </div>
                <Link
                  href="/#architecture"
                  target="_blank"
                  className="text-xs font-mono font-bold text-[#964900] hover:underline flex items-center gap-1"
                >
                  <span>Preview /#architecture</span>
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
                    Section Headline
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
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-bold"
                  />
                </div>
              </div>

              {/* Bento Cards */}
              <div className="pt-4 border-t border-[#ddc1b0] space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#964900] uppercase">
                    Architecture Pillar Cards
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      const newCard = {
                        id: `card-${Date.now()}`,
                        title: "New Agentic Architecture Pillar",
                        desc: "High-performance enterprise AI component integrated into production workloads.",
                      };
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          architecture: {
                            ...formData.homepage.architecture,
                            cards: [...formData.homepage.architecture.cards, newCard],
                          },
                        },
                      });
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#964900] text-white text-xs font-bold rounded-lg hover:bg-[#783a00] transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add Bento Card
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formData.homepage.architecture.cards.map((card, idx) => (
                    <div key={card.id} className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-2 relative">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#964900] uppercase">
                          Card #{idx + 1}
                        </span>
                        <button
                          type="button"
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
                          className="text-red-500 hover:text-red-700 p-1"
                          title="Delete Card"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
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

          {/* TAB 4: TECH STACK */}
          {activeTab === "techStack" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    Tech Stack Bar & Security Compliance Badges
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Edit enterprise tech stack icons and compliance shields (SOC2, HIPAA, ISO27001, FedRAMP).
                  </p>
                </div>
                <Link
                  href="/#tech-stack"
                  target="_blank"
                  className="text-xs font-mono font-bold text-[#964900] hover:underline flex items-center gap-1"
                >
                  <span>Preview /#tech-stack</span>
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
                    value={formData.homepage.techStackBar.badge}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          techStackBar: { ...formData.homepage.techStackBar, badge: e.target.value },
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
                    value={formData.homepage.techStackBar.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          techStackBar: { ...formData.homepage.techStackBar, title: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                  Section Subtitle
                </label>
                <textarea
                  rows={2}
                  value={formData.homepage.techStackBar.subtitle}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      homepage: {
                        ...formData.homepage,
                        techStackBar: { ...formData.homepage.techStackBar, subtitle: e.target.value },
                      },
                    })
                  }
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 text-xs"
                />
              </div>

              {/* Tech Stack Items */}
              <div className="pt-4 border-t border-[#ddc1b0] space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#964900] uppercase">
                    Tech Stack Technologies ({formData.homepage.techStackBar.techStack?.length || 0})
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      const newTech = {
                        id: `tech-${Date.now()}`,
                        name: "New Technology",
                        category: "Data & Compute",
                        iconName: "Cpu",
                      };
                      const updated = [...(formData.homepage.techStackBar.techStack || []), newTech];
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          techStackBar: { ...formData.homepage.techStackBar, techStack: updated },
                        },
                      });
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#964900] text-white text-xs font-bold rounded-lg hover:bg-[#783a00]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add Tech Stack Item
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {(formData.homepage.techStackBar.techStack || []).map((tech, idx) => (
                    <div key={tech.id} className="p-3 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          value={tech.name}
                          onChange={(e) => {
                            const updated = [...formData.homepage.techStackBar.techStack];
                            updated[idx] = { ...updated[idx], name: e.target.value };
                            setFormData({
                              ...formData,
                              homepage: {
                                ...formData.homepage,
                                techStackBar: { ...formData.homepage.techStackBar, techStack: updated },
                              },
                            });
                          }}
                          className="font-bold text-xs bg-white border border-[#ddc1b0] rounded-lg p-1.5 w-full mr-2"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updated = formData.homepage.techStackBar.techStack.filter((_, i) => i !== idx);
                            setFormData({
                              ...formData,
                              homepage: {
                                ...formData.homepage,
                                techStackBar: { ...formData.homepage.techStackBar, techStack: updated },
                              },
                            });
                          }}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Category"
                          value={tech.category}
                          onChange={(e) => {
                            const updated = [...formData.homepage.techStackBar.techStack];
                            updated[idx] = { ...updated[idx], category: e.target.value };
                            setFormData({
                              ...formData,
                              homepage: {
                                ...formData.homepage,
                                techStackBar: { ...formData.homepage.techStackBar, techStack: updated },
                              },
                            });
                          }}
                          className="w-1/2 text-[11px] border border-[#ddc1b0] rounded p-1.5 bg-white"
                        />
                        <select
                          value={tech.iconName}
                          onChange={(e) => {
                            const updated = [...formData.homepage.techStackBar.techStack];
                            updated[idx] = { ...updated[idx], iconName: e.target.value };
                            setFormData({
                              ...formData,
                              homepage: {
                                ...formData.homepage,
                                techStackBar: { ...formData.homepage.techStackBar, techStack: updated },
                              },
                            });
                          }}
                          className="w-1/2 text-[11px] border border-[#ddc1b0] rounded p-1.5 bg-white font-mono"
                        >
                          <option value="Database">Database</option>
                          <option value="Zap">Zap</option>
                          <option value="Cpu">Cpu</option>
                          <option value="Globe">Globe</option>
                          <option value="Layers">Layers</option>
                          <option value="Sparkles">Sparkles</option>
                          <option value="Bot">Bot</option>
                          <option value="Workflow">Workflow</option>
                          <option value="Server">Server</option>
                          <option value="Terminal">Terminal</option>
                          <option value="ShieldCheck">ShieldCheck</option>
                          <option value="Activity">Activity</option>
                          <option value="Lock">Lock</option>
                          <option value="Code2">Code2</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Shields Editor */}
              <div className="pt-4 border-t border-[#ddc1b0] space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#964900] uppercase">
                    Enterprise Compliance Shields (SOC2, HIPAA, ISO27001)
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      const newShield = {
                        id: `shield-${Date.now()}`,
                        title: "New Security Standard",
                        badge: "CERTIFIED",
                        description: "Full compliance and audit readiness.",
                      };
                      const updated = [...formData.homepage.techStackBar.complianceShields, newShield];
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          techStackBar: { ...formData.homepage.techStackBar, complianceShields: updated },
                        },
                      });
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#964900] text-white text-xs font-bold rounded-lg hover:bg-[#783a00]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add Compliance Shield
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formData.homepage.techStackBar.complianceShields.map((shield, idx) => (
                    <div key={shield.id} className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          placeholder="Badge (e.g. SOC 2 TYPE II)"
                          value={shield.badge}
                          onChange={(e) => {
                            const updated = [...formData.homepage.techStackBar.complianceShields];
                            updated[idx].badge = e.target.value;
                            setFormData({
                              ...formData,
                              homepage: {
                                ...formData.homepage,
                                techStackBar: { ...formData.homepage.techStackBar, complianceShields: updated },
                              },
                            });
                          }}
                          className="font-mono text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-1 rounded border border-emerald-300"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updated = formData.homepage.techStackBar.complianceShields.filter((_, i) => i !== idx);
                            setFormData({
                              ...formData,
                              homepage: {
                                ...formData.homepage,
                                techStackBar: { ...formData.homepage.techStackBar, complianceShields: updated },
                              },
                            });
                          }}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <input
                        type="text"
                        value={shield.title}
                        onChange={(e) => {
                          const updated = [...formData.homepage.techStackBar.complianceShields];
                          updated[idx].title = e.target.value;
                          setFormData({
                            ...formData,
                            homepage: {
                              ...formData.homepage,
                              techStackBar: { ...formData.homepage.techStackBar, complianceShields: updated },
                            },
                          });
                        }}
                        className="font-bold text-xs bg-white border border-[#ddc1b0] rounded-lg p-2 w-full"
                      />
                      <textarea
                        rows={2}
                        value={shield.description}
                        onChange={(e) => {
                          const updated = [...formData.homepage.techStackBar.complianceShields];
                          updated[idx].description = e.target.value;
                          setFormData({
                            ...formData,
                            homepage: {
                              ...formData.homepage,
                              techStackBar: { ...formData.homepage.techStackBar, complianceShields: updated },
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

          {/* TAB 5: FDE HUB & ROI */}
          {activeTab === "fdeHub" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-[#964900]" />
                    FDE Interactive Process Hub & ROI Metrics Grid
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Configure the forward deployed engineering deployment cycle and enterprise ROI metrics.
                  </p>
                </div>
                <Link
                  href="/#fde-hub"
                  target="_blank"
                  className="text-xs font-mono font-bold text-[#964900] hover:underline flex items-center gap-1"
                >
                  <span>Preview /#fde-hub</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              {/* FDE Steps List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#964900] uppercase">
                    FDE Deployment Process Cycle Steps
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      const newStep = {
                        id: `step-${Date.now()}`,
                        number: `0${(formData.homepage.fdeInteractiveHub.steps?.length || 0) + 1}`,
                        title: "New Deployment Phase",
                        description: "Description of engineering deliverables for this phase.",
                        targetNodeIds: ["node-1"],
                      };
                      const updated = [...(formData.homepage.fdeInteractiveHub.steps || []), newStep];
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          fdeInteractiveHub: {
                            ...formData.homepage.fdeInteractiveHub,
                            steps: updated,
                          },
                        },
                      });
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#964900] text-white text-xs font-bold rounded-lg hover:bg-[#783a00]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add FDE Process Step
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(formData.homepage.fdeInteractiveHub.steps || []).map((step, idx) => (
                    <div key={step.id} className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-[#964900]">
                            Step Number:
                          </span>
                          <input
                            type="text"
                            value={step.number}
                            onChange={(e) => {
                              const updated = [...formData.homepage.fdeInteractiveHub.steps];
                              updated[idx].number = e.target.value;
                              setFormData({
                                ...formData,
                                homepage: {
                                  ...formData.homepage,
                                  fdeInteractiveHub: {
                                    ...formData.homepage.fdeInteractiveHub,
                                    steps: updated,
                                  },
                                },
                              });
                            }}
                            className="w-12 text-xs font-mono font-bold border border-[#ddc1b0] rounded p-1 text-center bg-white"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const updated = formData.homepage.fdeInteractiveHub.steps.filter((_, i) => i !== idx);
                            setFormData({
                              ...formData,
                              homepage: {
                                ...formData.homepage,
                                fdeInteractiveHub: {
                                  ...formData.homepage.fdeInteractiveHub,
                                  steps: updated,
                                },
                              },
                            });
                          }}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <input
                        type="text"
                        value={step.title}
                        onChange={(e) => {
                          const updated = [...formData.homepage.fdeInteractiveHub.steps];
                          updated[idx].title = e.target.value;
                          setFormData({
                            ...formData,
                            homepage: {
                              ...formData.homepage,
                              fdeInteractiveHub: {
                                ...formData.homepage.fdeInteractiveHub,
                                steps: updated,
                              },
                            },
                          });
                        }}
                        className="font-bold text-xs bg-white border border-[#ddc1b0] rounded-lg p-2 w-full"
                      />
                      <textarea
                        rows={2}
                        value={step.description}
                        onChange={(e) => {
                          const updated = [...formData.homepage.fdeInteractiveHub.steps];
                          updated[idx].description = e.target.value;
                          setFormData({
                            ...formData,
                            homepage: {
                              ...formData.homepage,
                              fdeInteractiveHub: {
                                ...formData.homepage.fdeInteractiveHub,
                                steps: updated,
                              },
                            },
                          });
                        }}
                        className="w-full text-xs border border-[#ddc1b0] rounded-lg p-2 bg-white"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* ROI Metrics Grid Editor */}
              <div className="pt-4 border-t border-[#ddc1b0] space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#964900] uppercase">
                    Enterprise ROI Metrics Grid ({formData.homepage.roiMetricsGrid?.length || 0})
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      const newMetric = {
                        id: `roi-${Date.now()}`,
                        value: "99.9%",
                        label: "System Uptime SLA",
                        description: "Guaranteed production enterprise reliability.",
                        iconName: "Zap",
                      };
                      const updated = [...(formData.homepage.roiMetricsGrid || []), newMetric];
                      setFormData({
                        ...formData,
                        homepage: { ...formData.homepage, roiMetricsGrid: updated },
                      });
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#964900] text-white text-xs font-bold rounded-lg hover:bg-[#783a00]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add ROI Metric Card
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {(formData.homepage.roiMetricsGrid || []).map((roi, idx) => (
                    <div key={roi.id} className="p-3 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          placeholder="Value (e.g. 14 Days)"
                          value={roi.value}
                          onChange={(e) => {
                            const updated = [...formData.homepage.roiMetricsGrid];
                            updated[idx] = { ...updated[idx], value: e.target.value };
                            setFormData({
                              ...formData,
                              homepage: { ...formData.homepage, roiMetricsGrid: updated },
                            });
                          }}
                          className="font-extrabold text-sm text-[#964900] bg-white border border-[#ddc1b0] rounded-lg p-1.5 w-full mr-2"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updated = formData.homepage.roiMetricsGrid.filter((_, i) => i !== idx);
                            setFormData({
                              ...formData,
                              homepage: { ...formData.homepage, roiMetricsGrid: updated },
                            });
                          }}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <input
                        type="text"
                        placeholder="Label"
                        value={roi.label}
                        onChange={(e) => {
                          const updated = [...formData.homepage.roiMetricsGrid];
                          updated[idx] = { ...updated[idx], label: e.target.value };
                          setFormData({
                            ...formData,
                            homepage: { ...formData.homepage, roiMetricsGrid: updated },
                          });
                        }}
                        className="font-bold text-xs bg-white border border-[#ddc1b0] rounded-lg p-1.5 w-full"
                      />
                      <textarea
                        rows={2}
                        placeholder="Description"
                        value={roi.description}
                        onChange={(e) => {
                          const updated = [...formData.homepage.roiMetricsGrid];
                          updated[idx] = { ...updated[idx], description: e.target.value };
                          setFormData({
                            ...formData,
                            homepage: { ...formData.homepage, roiMetricsGrid: updated },
                          });
                        }}
                        className="w-full text-xs border border-[#ddc1b0] rounded-lg p-1.5 bg-white"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: TESTIMONIAL */}
          {activeTab === "testimonial" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <Quote className="w-5 h-5" />
                    Customer Testimonials & Case Proof
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Edit executive quote, author credentials, and client proof badges.
                  </p>
                </div>
                <Link
                  href="/#testimonials"
                  target="_blank"
                  className="text-xs font-mono font-bold text-[#964900] hover:underline flex items-center gap-1"
                >
                  <span>Preview /#testimonials</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
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
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm italic font-serif"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Author Full Name
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
                    Author Title & Organization
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

              {/* Enhanced Testimonial Items Carousel Editor */}
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
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          enhancedTestimonials: {
                            ...formData.homepage.enhancedTestimonials,
                            items: [...currentItems, newItem],
                          },
                        },
                      });
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
                            setFormData({
                              ...formData,
                              homepage: {
                                ...formData.homepage,
                                enhancedTestimonials: {
                                  ...formData.homepage.enhancedTestimonials,
                                  items: updated,
                                },
                              },
                            });
                          }}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold text-[#564336] uppercase mb-1">
                            Author Name & Domain
                          </label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="Name"
                              value={item.authorName}
                              onChange={(e) => {
                                const updated = [...formData.homepage.enhancedTestimonials.items];
                                updated[idx] = { ...updated[idx], authorName: e.target.value };
                                setFormData({
                                  ...formData,
                                  homepage: {
                                    ...formData.homepage,
                                    enhancedTestimonials: {
                                      ...formData.homepage.enhancedTestimonials,
                                      items: updated,
                                    },
                                  },
                                });
                              }}
                              className="w-1/2 text-xs font-bold bg-white border border-[#ddc1b0] rounded-lg p-2"
                            />
                            <input
                              type="text"
                              placeholder="Domain (e.g. Healthcare AI)"
                              value={item.domain}
                              onChange={(e) => {
                                const updated = [...formData.homepage.enhancedTestimonials.items];
                                updated[idx] = { ...updated[idx], domain: e.target.value };
                                setFormData({
                                  ...formData,
                                  homepage: {
                                    ...formData.homepage,
                                    enhancedTestimonials: {
                                      ...formData.homepage.enhancedTestimonials,
                                      items: updated,
                                    },
                                  },
                                });
                              }}
                              className="w-1/2 text-xs bg-white border border-[#ddc1b0] rounded-lg p-2"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-[#564336] uppercase mb-1">
                            Author Title / Organization
                          </label>
                          <input
                            type="text"
                            value={item.authorTitle}
                            onChange={(e) => {
                              const updated = [...formData.homepage.enhancedTestimonials.items];
                              updated[idx] = { ...updated[idx], authorTitle: e.target.value };
                              setFormData({
                                ...formData,
                                homepage: {
                                  ...formData.homepage,
                                  enhancedTestimonials: {
                                    ...formData.homepage.enhancedTestimonials,
                                    items: updated,
                                  },
                                },
                              });
                            }}
                            className="w-full text-xs bg-white border border-[#ddc1b0] rounded-lg p-2"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-[#564336] uppercase mb-1">
                          Testimonial Quote
                        </label>
                        <textarea
                          rows={2}
                          value={item.quote}
                          onChange={(e) => {
                            const updated = [...formData.homepage.enhancedTestimonials.items];
                            updated[idx] = { ...updated[idx], quote: e.target.value };
                            setFormData({
                              ...formData,
                              homepage: {
                                ...formData.homepage,
                                enhancedTestimonials: {
                                  ...formData.homepage.enhancedTestimonials,
                                  items: updated,
                                },
                              },
                            });
                          }}
                          className="w-full text-xs bg-white border border-[#ddc1b0] rounded-lg p-2 italic"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-[#564336] uppercase mb-1">
                          ROI Metric Chips (comma separated)
                        </label>
                        <input
                          type="text"
                          value={Array.isArray(item.roiChips) ? item.roiChips.join(", ") : item.roiChips || ""}
                          onChange={(e) => {
                            const updated = [...formData.homepage.enhancedTestimonials.items];
                            updated[idx] = {
                              ...updated[idx],
                              roiChips: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                            };
                            setFormData({
                              ...formData,
                              homepage: {
                                ...formData.homepage,
                                enhancedTestimonials: {
                                  ...formData.homepage.enhancedTestimonials,
                                  items: updated,
                                },
                              },
                            });
                          }}
                          className="w-full text-xs font-mono bg-white border border-[#ddc1b0] rounded-lg p-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: CTA BANNER */}
          {activeTab === "cta" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Bottom Call-To-Action Banner
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Customize final conversion headline, copy, and scoping buttons.
                  </p>
                </div>
                <Link
                  href="/#cta"
                  target="_blank"
                  className="text-xs font-mono font-bold text-[#964900] hover:underline flex items-center gap-1"
                >
                  <span>Preview /#cta</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                  CTA Headline
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
                  className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                  CTA Description Paragraph
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
                    Primary CTA Text
                  </label>
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
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Primary CTA Href
                  </label>
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
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Secondary CTA Text
                  </label>
                  <input
                    type="text"
                    value={formData.homepage.ctaBanner.secondaryCtaText || "Explore Services & Products"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          ctaBanner: { ...formData.homepage.ctaBanner, secondaryCtaText: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Secondary CTA Href
                  </label>
                  <input
                    type="text"
                    value={formData.homepage.ctaBanner.secondaryCtaHref || "/services"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        homepage: {
                          ...formData.homepage,
                          ctaBanner: { ...formData.homepage.ctaBanner, secondaryCtaHref: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: BLOG POSTS MANAGER */}
          {activeTab === "blog" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <Newspaper className="w-5 h-5 text-[#964900]" />
                    Blog Articles & Research Library Manager (/blog)
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Create, edit, publish, or remove technical articles displayed live on the Blog.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href="/blog"
                    target="_blank"
                    className="text-xs font-mono font-bold text-[#964900] hover:underline flex items-center gap-1 mr-2"
                  >
                    <span>Preview /blog</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                  <button
                    onClick={handleOpenNewArticle}
                    className="bg-[#964900] text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create New Article</span>
                  </button>
                </div>
              </div>

              {/* Hero Banner Editor */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Hero Badge Text
                  </label>
                  <input
                    type="text"
                    value={formData.blog?.heroBadge || "Research & Architecture Insights"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        blog: { ...formData.blog, heroBadge: e.target.value },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Blog Page Title
                  </label>
                  <input
                    type="text"
                    value={formData.blog?.title || "Engineering Blueprints & Case Studies"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        blog: { ...formData.blog, title: e.target.value },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-bold"
                  />
                </div>
              </div>

              {/* Published Articles List */}
              <div className="pt-4 border-t border-[#ddc1b0] space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#964900] uppercase">
                    Published Articles ({(formData.blog?.articles || []).length})
                  </h3>
                </div>

                <div className="space-y-3">
                  {(formData.blog?.articles || []).map((art, idx) => (
                    <div
                      key={art.id}
                      className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl flex items-center justify-between gap-4 shadow-sm"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold bg-[#964900] text-white px-2 py-0.5 rounded">
                            {art.category}
                          </span>
                          <span className="text-xs text-[#564336] font-mono">{art.date}</span>
                          {art.featured && (
                            <span className="text-[10px] font-mono font-bold bg-amber-200 text-amber-900 px-2 py-0.5 rounded flex items-center gap-1">
                              <Sparkles className="w-2.5 h-2.5" />
                              <span>Featured</span>
                            </span>
                          )}
                        </div>
                        <h4 className="font-bold text-sm text-[#1c1917]">{art.title}</h4>
                        <p className="text-xs text-[#564336] line-clamp-1">{art.snippet}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          href={`/blog/${art.id}`}
                          target="_blank"
                          className="p-2 text-[#564336] hover:text-[#964900] bg-white border border-[#ddc1b0] rounded-lg text-xs font-bold flex items-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          onClick={() => {
                            setEditingArticle({ ...art });
                            setIsBlogModalOpen(true);
                          }}
                          className="p-2 text-[#964900] bg-white border border-[#ddc1b0] rounded-lg text-xs font-bold flex items-center gap-1 hover:bg-[#fff1ea]"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteArticle(art.id)}
                          className="p-2 text-red-600 bg-white border border-[#ddc1b0] rounded-lg hover:bg-red-50"
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

          {/* TAB 9: SERVICES HUB */}
          {activeTab === "services" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Services Hub Main Overview Controls (/services)
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Edit Services hub badge, main headline, and core service offerings cards grid.
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
                    Badge Text
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
                    Services Title
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
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-bold"
                  />
                </div>
              </div>

              {/* Service Cards */}
              <div className="pt-4 border-t border-[#ddc1b0] space-y-3">
                <h3 className="text-sm font-bold text-[#964900] uppercase">
                  Service Cards Grid ({formData.pages.services.cards.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formData.pages.services.cards.map((card, idx) => (
                    <div key={card.id} className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-2">
                      <span className="text-[10px] font-mono font-bold text-[#964900] uppercase">
                        Service #{idx + 1}
                      </span>
                      <input
                        type="text"
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
                        className="font-bold text-xs bg-white border border-[#ddc1b0] rounded-lg p-2 w-full"
                      />
                      <textarea
                        rows={2}
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

          {/* TAB 10: SERVICE SUBPAGES (4) */}
          {activeTab === "serviceSubpages" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#964900]" />
                    Detailed Service Subpages Editor (4 Subpages)
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Select a service subpage below to edit its hero, capabilities, friction points, and FAQs.
                  </p>
                </div>
              </div>

              {/* Subpage Tabs */}
              <div className="flex flex-wrap gap-2 border-b border-[#ddc1b0] pb-3">
                {([
                  { id: "cloudMigration", label: "Cloud Migration", href: "/services/cloud-migration-and-modernization" },
                  { id: "fde", label: "Forward Deployed AI", href: "/services/forward-deployed-ai-engineering" },
                  { id: "dataAnnotation", label: "Data Annotation & RLHF", href: "/services/data-annotation-and-rlhf" },
                  { id: "databaseTuning", label: "Database Performance & FinOps", href: "/services/database-performance-and-cloud-optimization" },
                ] as const).map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setActiveServiceSubpage(st.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeServiceSubpage === st.id
                        ? "bg-[#964900] text-white shadow"
                        : "bg-[#fff8f5] text-[#564336] border border-[#ddc1b0] hover:bg-[#fff1ea]"
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>

              {/* Subpage Form Editor */}
              {(() => {
                const subpageKey = activeServiceSubpage;
                const subpage = formData.pages.serviceSubpages?.[subpageKey];
                if (!subpage) return null;

                return (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                          Hero Badge
                        </label>
                        <input
                          type="text"
                          value={subpage.heroBadge}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              pages: {
                                ...formData.pages,
                                serviceSubpages: {
                                  ...formData.pages.serviceSubpages,
                                  [subpageKey]: { ...subpage, heroBadge: e.target.value },
                                },
                              },
                            });
                          }}
                          className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-mono"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                          Main Subpage Title
                        </label>
                        <input
                          type="text"
                          value={subpage.title}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              pages: {
                                ...formData.pages,
                                serviceSubpages: {
                                  ...formData.pages.serviceSubpages,
                                  [subpageKey]: { ...subpage, title: e.target.value },
                                },
                              },
                            });
                          }}
                          className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-bold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                        Subtitle Paragraph
                      </label>
                      <textarea
                        rows={2}
                        value={subpage.subtitle}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            pages: {
                              ...formData.pages,
                              serviceSubpages: {
                                ...formData.pages.serviceSubpages,
                                [subpageKey]: { ...subpage, subtitle: e.target.value },
                              },
                            },
                          });
                        }}
                        className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                        Detailed Description Body
                      </label>
                      <textarea
                        rows={3}
                        value={subpage.description}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            pages: {
                              ...formData.pages,
                              serviceSubpages: {
                                ...formData.pages.serviceSubpages,
                                [subpageKey]: { ...subpage, description: e.target.value },
                              },
                            },
                          });
                        }}
                        className="w-full border border-[#ddc1b0] rounded-xl p-3 text-xs"
                      />
                    </div>

                    {/* Capabilities List */}
                    <div className="pt-4 border-t border-[#ddc1b0] space-y-3">
                      <h4 className="text-xs font-bold text-[#964900] uppercase">
                        Key Engineering Capabilities ({(subpage.capabilities || []).length})
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {(subpage.capabilities || []).map((cap, idx) => (
                          <div key={cap.id || idx} className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-2">
                            <span className="text-[10px] font-mono font-bold text-[#964900] uppercase">
                              Capability #{idx + 1}
                            </span>
                            <input
                              type="text"
                              value={cap.title}
                              onChange={(e) => {
                                const updatedCaps = [...subpage.capabilities];
                                updatedCaps[idx].title = e.target.value;
                                setFormData({
                                  ...formData,
                                  pages: {
                                    ...formData.pages,
                                    serviceSubpages: {
                                      ...formData.pages.serviceSubpages,
                                      [subpageKey]: { ...subpage, capabilities: updatedCaps },
                                    },
                                  },
                                });
                              }}
                              className="font-bold text-xs bg-white border border-[#ddc1b0] rounded-lg p-2 w-full"
                            />
                            <textarea
                              rows={2}
                              value={cap.desc}
                              onChange={(e) => {
                                const updatedCaps = [...subpage.capabilities];
                                updatedCaps[idx].desc = e.target.value;
                                setFormData({
                                  ...formData,
                                  pages: {
                                    ...formData.pages,
                                    serviceSubpages: {
                                      ...formData.pages.serviceSubpages,
                                      [subpageKey]: { ...subpage, capabilities: updatedCaps },
                                    },
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
                );
              })()}
            </div>
          )}

          {/* TAB 11: ACADEMY SUBPAGES (3) */}
          {activeTab === "academySubpages" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#964900]" />
                    Academy Training Tracks Editor (3 Tracks)
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Select an academy training track below to edit curriculum modules and hero text.
                  </p>
                </div>
              </div>

              {/* Academy Sub-tabs */}
              <div className="flex flex-wrap gap-2 border-b border-[#ddc1b0] pb-3">
                {([
                  { id: "agenticAi", label: "Agentic AI Architecture", href: "/academy/agentic-ai-architecture" },
                  { id: "databricks", label: "Databricks Lakehouse Mastery", href: "/academy/databricks-lakehouse-mastery" },
                  { id: "fullstackAi", label: "Fullstack AI Engineer", href: "/academy/fullstack-ai-developer" },
                ] as const).map((at) => (
                  <button
                    key={at.id}
                    onClick={() => setActiveAcademySubpage(at.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeAcademySubpage === at.id
                        ? "bg-[#964900] text-white shadow"
                        : "bg-[#fff8f5] text-[#564336] border border-[#ddc1b0] hover:bg-[#fff1ea]"
                    }`}
                  >
                    {at.label}
                  </button>
                ))}
              </div>

              {/* Academy Track Form Editor */}
              {(() => {
                const trackKey = activeAcademySubpage;
                const track = formData.pages.academySubpages?.[trackKey];
                if (!track) return null;

                return (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                          Track Badge
                        </label>
                        <input
                          type="text"
                          value={track.heroBadge}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              pages: {
                                ...formData.pages,
                                academySubpages: {
                                  ...formData.pages.academySubpages,
                                  [trackKey]: { ...track, heroBadge: e.target.value },
                                },
                              },
                            });
                          }}
                          className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-mono"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                          Track Main Title
                        </label>
                        <input
                          type="text"
                          value={track.title}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              pages: {
                                ...formData.pages,
                                academySubpages: {
                                  ...formData.pages.academySubpages,
                                  [trackKey]: { ...track, title: e.target.value },
                                },
                              },
                            });
                          }}
                          className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm font-bold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                        Subtitle Paragraph
                      </label>
                      <textarea
                        rows={2}
                        value={track.subtitle}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            pages: {
                              ...formData.pages,
                              academySubpages: {
                                ...formData.pages.academySubpages,
                                [trackKey]: { ...track, subtitle: e.target.value },
                              },
                            },
                          });
                        }}
                        className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                      />
                    </div>

                    {/* Modules List */}
                    <div className="pt-4 border-t border-[#ddc1b0] space-y-3">
                      <h4 className="text-xs font-bold text-[#964900] uppercase">
                        Curriculum Step Modules ({(track.modules || []).length})
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {(track.modules || []).map((mod, idx) => (
                          <div key={idx} className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-2">
                            <span className="text-[10px] font-mono font-bold text-[#964900] uppercase">
                              Module Step #{mod.step}
                            </span>
                            <input
                              type="text"
                              value={mod.title}
                              onChange={(e) => {
                                const updatedMods = [...track.modules];
                                updatedMods[idx].title = e.target.value;
                                setFormData({
                                  ...formData,
                                  pages: {
                                    ...formData.pages,
                                    academySubpages: {
                                      ...formData.pages.academySubpages,
                                      [trackKey]: { ...track, modules: updatedMods },
                                    },
                                  },
                                });
                              }}
                              className="font-bold text-xs bg-white border border-[#ddc1b0] rounded-lg p-2 w-full"
                            />
                            <textarea
                              rows={2}
                              value={mod.desc}
                              onChange={(e) => {
                                const updatedMods = [...track.modules];
                                updatedMods[idx].desc = e.target.value;
                                setFormData({
                                  ...formData,
                                  pages: {
                                    ...formData.pages,
                                    academySubpages: {
                                      ...formData.pages.academySubpages,
                                      [trackKey]: { ...track, modules: updatedMods },
                                    },
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
                );
              })()}
            </div>
          )}

          {/* TAB 12: DR GODLY HEALTH */}
          {activeTab === "drgodly" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <Stethoscope className="w-5 h-5" />
                    Dr. Godly Health Product Controls (/drgodly)
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Edit clinical AI agent suite product page badge, hero text, and feature cards.
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

              {/* Features List */}
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

          {/* TAB 13: ONEAI ASSIST */}
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

          {/* TAB 14: ABOUT FIRM */}
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

          {/* TAB 15: PARTNERS */}
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

          {/* TAB 16: CONTACT & FAQS */}
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
                  {formData.pages.contact.faqs.map((faq: FAQItemCMS, idx: number) => (
                    <div key={faq.id} className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#964900] uppercase">
                          FAQ #{idx + 1}
                        </span>
                        <button
                          onClick={() => {
                            const updated = formData.pages.contact.faqs.filter((_: FAQItemCMS, i: number) => i !== idx);
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

          {/* TAB 17: CAREERS */}
          {activeTab === "careers" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
                <div>
                  <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Careers & Job Postings Controls (/careers)
                  </h2>
                  <p className="text-xs text-[#564336] mt-0.5">
                    Post, edit, and manage open job positions displayed live on the Careers page.
                  </p>
                </div>
                <Link
                  href="/careers"
                  target="_blank"
                  className="text-xs font-mono font-bold text-[#964900] hover:underline flex items-center gap-1"
                >
                  <span>Preview /careers</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              {/* Hero Banner Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Hero Badge Text
                  </label>
                  <input
                    type="text"
                    value={formData.pages.careers?.heroBadge || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pages: {
                          ...formData.pages,
                          careers: { ...formData.pages.careers, heroBadge: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Hero Page Title
                  </label>
                  <input
                    type="text"
                    value={formData.pages.careers?.title || "Build the Operating System for Industrial-Scale Agentic AI"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pages: {
                          ...formData.pages,
                          careers: { ...formData.pages.careers, title: e.target.value },
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm"
                  />
                </div>
              </div>

              {/* JOB POSTINGS LIST */}
              <div className="pt-4 border-t border-[#ddc1b0] space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#964900] uppercase">
                      Open Job Positions ({formData.pages.careers?.jobs?.length || 0})
                    </h3>
                  </div>
                  <button
                    onClick={() => {
                      const newJob = {
                        id: `job-${Date.now()}`,
                        title: "New Engineering Position",
                        department: "Agentic AI",
                        location: "Bengaluru, IN / Remote",
                        type: "Full-Time",
                        experience: "3+ Years",
                        featured: false,
                        summary: "Description of the open role...",
                        responsibilities: [
                          "Lead technical design and development.",
                          "Collaborate with client engineering teams."
                        ],
                        techStack: ["TypeScript", "Python", "Docker"]
                      };
                      const currentJobs = formData.pages.careers?.jobs || [];
                      setFormData({
                        ...formData,
                        pages: {
                          ...formData.pages,
                          careers: {
                            ...formData.pages.careers,
                            jobs: [newJob, ...currentJobs]
                          }
                        }
                      });
                      toast.success("Added new job opening draft!");
                    }}
                    className="bg-[#964900] text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Post New Job Opening</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {(formData.pages.careers?.jobs || []).map((job, idx) => (
                    <div key={job.id} className="p-5 border border-[#ddc1b0] bg-[#fff8f5] rounded-2xl space-y-3 shadow-sm">
                      <div className="flex items-center justify-between border-b border-[#ddc1b0]/60 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono font-bold bg-[#964900] text-white px-2 py-0.5 rounded">
                            Job #{idx + 1}
                          </span>
                          <span className="text-xs font-bold text-[#964900]">{job.title || "Untitled Role"}</span>
                        </div>
                        <button
                          onClick={() => {
                            const updatedJobs = (formData.pages.careers?.jobs || []).filter((_, i) => i !== idx);
                            setFormData({
                              ...formData,
                              pages: {
                                ...formData.pages,
                                careers: { ...formData.pages.careers, jobs: updatedJobs }
                              }
                            });
                            toast.info("Deleted job posting.");
                          }}
                          className="text-red-500 hover:text-red-700 p-1 flex items-center gap-1 text-xs font-semibold"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Remove</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-[11px] font-bold text-[#564336] uppercase mb-1">
                            Job Title *
                          </label>
                          <input
                            type="text"
                            value={job.title}
                            onChange={(e) => {
                              const updatedJobs = [...(formData.pages.careers?.jobs || [])];
                              updatedJobs[idx].title = e.target.value;
                              setFormData({
                                ...formData,
                                pages: {
                                  ...formData.pages,
                                  careers: { ...formData.pages.careers, jobs: updatedJobs }
                                }
                              });
                            }}
                            className="w-full border border-[#ddc1b0] rounded-xl p-2.5 text-xs font-bold bg-white"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-[#564336] uppercase mb-1">
                            Department *
                          </label>
                          <input
                            type="text"
                            value={job.department}
                            onChange={(e) => {
                              const updatedJobs = [...(formData.pages.careers?.jobs || [])];
                              updatedJobs[idx].department = e.target.value;
                              setFormData({
                                ...formData,
                                pages: {
                                  ...formData.pages,
                                  careers: { ...formData.pages.careers, jobs: updatedJobs }
                                }
                              });
                            }}
                            className="w-full border border-[#ddc1b0] rounded-xl p-2.5 text-xs bg-white"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-[#564336] uppercase mb-1">
                            Location *
                          </label>
                          <input
                            type="text"
                            value={job.location}
                            onChange={(e) => {
                              const updatedJobs = [...(formData.pages.careers?.jobs || [])];
                              updatedJobs[idx].location = e.target.value;
                              setFormData({
                                ...formData,
                                pages: {
                                  ...formData.pages,
                                  careers: { ...formData.pages.careers, jobs: updatedJobs }
                                }
                              });
                            }}
                            className="w-full border border-[#ddc1b0] rounded-xl p-2.5 text-xs bg-white"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 18: NAVIGATION */}
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
            </div>
          )}

          {/* TAB 19: MEGAMENU */}
          {activeTab === "megamenu" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#964900]" />
                Header Megamenu & Dropdown Items Editor
              </h2>
              <p className="text-xs text-[#564336]">
                Configure navigation megamenu categories, sub-services links, and dropdown items.
              </p>

              {/* Categories Grid */}
              <div className="space-y-4">
                {(formData.header.megamenu?.servicesCategories || []).map((cat, cIdx) => (
                  <div key={cat.id} className="p-5 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-3">
                    <div className="flex items-center justify-between border-b border-[#ddc1b0]/60 pb-2">
                      <span className="text-xs font-mono font-bold text-[#964900] uppercase">
                        Category #{cIdx + 1}: {cat.title}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-[#564336] uppercase mb-1">
                          Category Title
                        </label>
                        <input
                          type="text"
                          value={cat.title}
                          onChange={(e) => {
                            const updatedCats = [...formData.header.megamenu.servicesCategories];
                            updatedCats[cIdx].title = e.target.value;
                            setFormData({
                              ...formData,
                              header: {
                                ...formData.header,
                                megamenu: {
                                  ...formData.header.megamenu,
                                  servicesCategories: updatedCats,
                                },
                              },
                            });
                          }}
                          className="w-full border border-[#ddc1b0] rounded-xl p-2 text-xs font-bold bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-[#564336] uppercase mb-1">
                          Featured Banner Title
                        </label>
                        <input
                          type="text"
                          value={cat.featuredTitle}
                          onChange={(e) => {
                            const updatedCats = [...formData.header.megamenu.servicesCategories];
                            updatedCats[cIdx].featuredTitle = e.target.value;
                            setFormData({
                              ...formData,
                              header: {
                                ...formData.header,
                                megamenu: {
                                  ...formData.header.megamenu,
                                  servicesCategories: updatedCats,
                                },
                              },
                            });
                          }}
                          className="w-full border border-[#ddc1b0] rounded-xl p-2 text-xs bg-white"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 20: FOOTER */}
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
            </div>
          )}

          {/* TAB 21: SETTINGS, BACKUPS & SYNC */}
          {activeTab === "settings" && (
            <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
              <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
                <Settings className="w-5 h-5" />
                CMS Backups, Neon DB Sync, Credentials & Reset
              </h2>

              {/* PUSH & SYNC DEFAULTS TO NEON DB BUTTON */}
              <div className="p-5 border border-emerald-300 bg-emerald-50/60 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <RefreshCw className="w-4 h-4 text-emerald-600" />
                  <span>Sync & Push Complete Structure to Neon DB</span>
                </div>
                <p className="text-xs text-emerald-700">
                  Click this button to merge current defaults and form edits, then push the full JSON schema up to your Neon PostgreSQL database. This guarantees all new subpages, blog articles, and tech stack shields exist in Neon DB.
                </p>
                <button
                  onClick={handleSyncDefaultsToDB}
                  disabled={isSyncingDB}
                  className="bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-emerald-800 transition-colors flex items-center gap-2 disabled:opacity-50 shadow"
                >
                  {isSyncingDB ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Syncing Neon DB...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Push & Sync All Data to Neon DB</span>
                    </>
                  )}
                </button>
              </div>

              {/* NEON DB ADMIN CREDENTIAL MANAGEMENT */}
              <div className="p-5 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#964900] font-bold text-sm">
                    <Database className="w-4 h-4 text-emerald-600" />
                    <span>Neon Database Admin Credentials</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                    Active Session: {adminUser?.username || "admin"}
                  </span>
                </div>
                <p className="text-xs text-[#564336]">
                  Update your admin username and password saved in your Neon PostgreSQL database.
                </p>

                <form onSubmit={handleUpdateCredentials} className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                      New Username / Email
                    </label>
                    <input
                      type="text"
                      value={credUsername}
                      onChange={(e) => setCredUsername(e.target.value)}
                      placeholder="e.g. admin"
                      className="w-full border border-[#ddc1b0] rounded-xl p-2.5 text-sm bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={credPassword}
                      onChange={(e) => setCredPassword(e.target.value)}
                      placeholder="Enter new strong password"
                      className="w-full border border-[#ddc1b0] rounded-xl p-2.5 text-sm bg-white"
                      required
                    />
                  </div>
                  <div className="md:col-span-2 pt-1 flex justify-end">
                    <button
                      type="submit"
                      disabled={isUpdatingCreds}
                      className="bg-[#964900] text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-[#b05600] transition-colors flex items-center gap-2 disabled:opacity-50"
                    >
                      {isUpdatingCreds ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Updating Neon DB...</span>
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Update Credentials in Neon DB</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-3">
                  <div className="flex items-center gap-2 text-[#964900] font-bold text-sm">
                    <Download className="w-4 h-4" />
                    <span>Export Full CMS JSON Backup</span>
                  </div>
                  <p className="text-xs text-[#564336]">
                    Download a full JSON file containing all site copy and settings.
                  </p>
                  <button
                    onClick={exportJSON}
                    className="bg-[#964900] text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-[#b05600] transition-colors"
                  >
                    Download JSON Backup File
                  </button>
                </div>

                <div className="p-5 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-3">
                  <div className="flex items-center gap-2 text-[#964900] font-bold text-sm">
                    <Upload className="w-4 h-4" />
                    <span>Import JSON Backup File</span>
                  </div>
                  <p className="text-xs text-[#564336]">
                    Upload a previously exported JSON backup file to overwrite current site content.
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
                  This action will restore default factory text across all pages.
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

      {/* BLOG ARTICLE EDIT MODAL */}
      {isBlogModalOpen && editingArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-[#ddc1b0] rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-[#ddc1b0] flex items-center justify-between bg-[#fff8f5]">
              <div className="flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-[#964900]" />
                <h3 className="font-bold text-base text-[#964900]">
                  Edit Article: {editingArticle.title || "Untitled Post"}
                </h3>
              </div>
              <button
                onClick={() => {
                  setIsBlogModalOpen(false);
                  setEditingArticle(null);
                }}
                className="p-1 rounded-lg text-[#564336] hover:bg-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    value={editingArticle.title}
                    onChange={(e) =>
                      setEditingArticle({ ...editingArticle, title: e.target.value })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-2.5 text-sm font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Category Tag
                  </label>
                  <input
                    type="text"
                    value={editingArticle.category}
                    onChange={(e) =>
                      setEditingArticle({ ...editingArticle, category: e.target.value })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-2.5 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Read Time
                  </label>
                  <input
                    type="text"
                    value={editingArticle.readTime}
                    onChange={(e) =>
                      setEditingArticle({ ...editingArticle, readTime: e.target.value })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-2.5 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={editingArticle.author}
                    onChange={(e) =>
                      setEditingArticle({ ...editingArticle, author: e.target.value })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-2.5 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Author Role
                  </label>
                  <input
                    type="text"
                    value={editingArticle.authorRole}
                    onChange={(e) =>
                      setEditingArticle({ ...editingArticle, authorRole: e.target.value })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-2.5 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                  Card Snippet Summary
                </label>
                <textarea
                  rows={2}
                  value={editingArticle.snippet}
                  onChange={(e) =>
                    setEditingArticle({ ...editingArticle, snippet: e.target.value })
                  }
                  className="w-full border border-[#ddc1b0] rounded-xl p-2.5 text-xs"
                />
              </div>

              <div className="flex items-center gap-2">
                <label className="flex items-center gap-2 text-xs font-bold text-[#964900] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingArticle.featured || false}
                    onChange={(e) =>
                      setEditingArticle({ ...editingArticle, featured: e.target.checked })
                    }
                    className="w-4 h-4 accent-[#964900]"
                  />
                  <span>Mark as Featured Article</span>
                </label>
              </div>

              {/* Content Details */}
              <div className="pt-4 border-t border-[#ddc1b0] space-y-4">
                <h4 className="text-xs font-bold text-[#964900] uppercase">
                  Article Body & Key Takeaways
                </h4>

                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Introduction Paragraph
                  </label>
                  <textarea
                    rows={3}
                    value={editingArticle.content?.introduction || ""}
                    onChange={(e) =>
                      setEditingArticle({
                        ...editingArticle,
                        content: {
                          ...editingArticle.content,
                          introduction: e.target.value,
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-2.5 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Key Takeaways (1 per line)
                  </label>
                  <textarea
                    rows={3}
                    value={(editingArticle.content?.keyTakeaways || []).join("\n")}
                    onChange={(e) =>
                      setEditingArticle({
                        ...editingArticle,
                        content: {
                          ...editingArticle.content,
                          keyTakeaways: e.target.value.split("\n").filter(Boolean),
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-2.5 text-xs font-mono"
                  />
                </div>

                {/* Body Sections */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold text-[#964900] uppercase">
                      Body Sections ({(editingArticle.content?.sections || []).length})
                    </label>
                    <button
                      onClick={() => {
                        const newSec = {
                          heading: "New Section Heading",
                          body: "Section body text...",
                        };
                        const updatedSecs = [...(editingArticle.content?.sections || []), newSec];
                        setEditingArticle({
                          ...editingArticle,
                          content: {
                            ...editingArticle.content,
                            sections: updatedSecs,
                          },
                        });
                      }}
                      className="text-xs font-bold text-[#964900] bg-[#fff8f5] border border-[#ddc1b0] px-2.5 py-1 rounded-lg hover:bg-[#fff1ea]"
                    >
                      + Add Section
                    </button>
                  </div>

                  {(editingArticle.content?.sections || []).map((sec, sIdx) => (
                    <div key={sIdx} className="p-3 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#964900] uppercase">
                          Section #{sIdx + 1}
                        </span>
                        <button
                          onClick={() => {
                            const updatedSecs = (editingArticle.content?.sections || []).filter(
                              (_, i) => i !== sIdx
                            );
                            setEditingArticle({
                              ...editingArticle,
                              content: {
                                ...editingArticle.content,
                                sections: updatedSecs,
                              },
                            });
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <input
                        type="text"
                        value={sec.heading}
                        onChange={(e) => {
                          const updatedSecs = [...editingArticle.content.sections];
                          updatedSecs[sIdx].heading = e.target.value;
                          setEditingArticle({
                            ...editingArticle,
                            content: {
                              ...editingArticle.content,
                              sections: updatedSecs,
                            },
                          });
                        }}
                        className="w-full text-xs font-bold border border-[#ddc1b0] rounded-lg p-2 bg-white"
                      />

                      <textarea
                        rows={3}
                        value={sec.body}
                        onChange={(e) => {
                          const updatedSecs = [...editingArticle.content.sections];
                          updatedSecs[sIdx].body = e.target.value;
                          setEditingArticle({
                            ...editingArticle,
                            content: {
                              ...editingArticle.content,
                              sections: updatedSecs,
                            },
                          });
                        }}
                        className="w-full text-xs border border-[#ddc1b0] rounded-lg p-2 bg-white"
                      />

                      <div>
                        <label className="block text-[10px] font-bold text-[#564336] uppercase mb-1">
                          Code Snippet (Optional)
                        </label>
                        <textarea
                          rows={2}
                          value={sec.codeSnippet || ""}
                          onChange={(e) => {
                            const updatedSecs = [...editingArticle.content.sections];
                            updatedSecs[sIdx].codeSnippet = e.target.value;
                            setEditingArticle({
                              ...editingArticle,
                              content: {
                                ...editingArticle.content,
                                sections: updatedSecs,
                              },
                            });
                          }}
                          placeholder="// Code snippet..."
                          className="w-full text-[11px] font-mono border border-[#ddc1b0] rounded-lg p-2 bg-[#1c1917] text-amber-200"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
                    Conclusion Paragraph
                  </label>
                  <textarea
                    rows={2}
                    value={editingArticle.content?.conclusion || ""}
                    onChange={(e) =>
                      setEditingArticle({
                        ...editingArticle,
                        content: {
                          ...editingArticle.content,
                          conclusion: e.target.value,
                        },
                      })
                    }
                    className="w-full border border-[#ddc1b0] rounded-xl p-2.5 text-xs"
                  />
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-[#ddc1b0] flex items-center justify-end gap-3 bg-[#fff8f5]">
              <button
                onClick={() => {
                  setIsBlogModalOpen(false);
                  setEditingArticle(null);
                }}
                className="px-4 py-2 border border-[#ddc1b0] text-xs font-bold rounded-xl text-[#564336] bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveArticle}
                className="px-5 py-2 bg-[#964900] text-white text-xs font-bold rounded-xl hover:bg-[#b05600] flex items-center gap-1.5 shadow"
              >
                <Check className="w-4 h-4" />
                <span>Save Article</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
