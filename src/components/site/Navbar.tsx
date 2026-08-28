"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  X,
  Plus,
  ChevronDown,
  ChevronRight,
  ArrowDownRight,
  Sparkles,
  Database,
  ShieldCheck,
  FileCheck,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useCMS } from "@/context/CMSContext";
import Logo from "@/components/ui/Logo";

const servicesCategories = [
  {
    id: "ai-engineering",
    category: "AI & Engineering",
    icon: Sparkles,
    description: "Production LLMs, autonomous agentic workflows, and fine-tuned models.",
    featured: {
      title: "Forward Deployed AI",
      tag: "FEATURED CAPABILITY",
      href: "/services/forward-deployed-ai-engineering",
      desc: "Embed elite AI engineers directly into your product engineering workflows.",
    },
    items: [
      {
        href: "/services/forward-deployed-ai-engineering",
        label: "Forward Deployed AI (FDE)",
        badge: "Popular",
      },
      {
        href: "/services/forward-deployed-ai-engineering#agentic-workflows",
        label: "Autonomous AI Agents",
        badge: "New",
      },
      {
        href: "/services/forward-deployed-ai-engineering#fine-tuning",
        label: "Custom Model Fine-Tuning",
      },
    ],
  },
  {
    id: "data-cloud",
    category: "Data & Cloud Optimization",
    icon: Database,
    description: "High-performance Lakehouse architectures and real-time streaming ETL.",
    featured: {
      title: "Database & Cloud Tuning",
      tag: "OPTIMIZATION",
      href: "/services/database-performance-and-cloud-optimization",
      desc: "Sub-second query performance on Databricks & Snowflake Lakehouses.",
    },
    items: [
      {
        href: "/services/database-performance-and-cloud-optimization",
        label: "Database & Cloud Tuning",
      },
      {
        href: "/services/database-performance-and-cloud-optimization#lakehouse",
        label: "Databricks & Snowflake Lakehouse",
      },
      {
        href: "/services/database-performance-and-cloud-optimization#etl",
        label: "Streaming Real-Time ETL",
      },
    ],
  },
  {
    id: "data-rlhf",
    category: "Data Annotation & RLHF",
    icon: FileCheck,
    description: "Human-in-the-loop alignment, RLHF, and domain-specific dataset curation.",
    featured: {
      title: "RLHF & Safety Alignment",
      tag: "ACCURACY & ALIGNMENT",
      href: "/services/data-annotation-and-rlhf#rlhf",
      desc: "Align enterprise AI with strict safety and accuracy guardrails.",
    },
    items: [
      {
        href: "/services/data-annotation-and-rlhf",
        label: "High-Fidelity Data Annotation",
      },
      {
        href: "/services/data-annotation-and-rlhf#rlhf",
        label: "RLHF & Model Safety Alignment",
      },
      {
        href: "/services/data-annotation-and-rlhf#benchmarking",
        label: "Dataset Evaluation & Audits",
      },
    ],
  },
  {
    id: "cloud-security",
    category: "Cloud & Cybersecurity",
    icon: ShieldCheck,
    description: "Zero-downtime cloud migration, MLOps pipelines, and AI security guardrails.",
    featured: {
      title: "AI Guardrails & Security",
      tag: "ENTERPRISE SECURITY",
      href: "/services/cloud-migration-cyber-security-databricks-snowflake#security",
      desc: "Enterprise compliance, prompt injection prevention, and zero-trust security.",
    },
    items: [
      {
        href: "/services/cloud-migration-cyber-security-databricks-snowflake",
        label: "Zero-Downtime Cloud Migration",
      },
      {
        href: "/services/cloud-migration-cyber-security-databricks-snowflake#security",
        label: "AI Guardrails & Cybersecurity",
      },
      {
        href: "/services/cloud-migration-cyber-security-databricks-snowflake#k8s",
        label: "DevOps & MLOps Pipelines",
      },
    ],
  },
];

const productsDropdown = [
  { href: "/oneai-assist", label: "OneAI Assist — Enterprise Agent Platform" },
  { href: "/drgodly", label: "DrGodly — AI Telemedicine Suite" },
];

const academyDropdown = [
  { href: "/academy/agentic-ai", label: "Agentic AI Architecture" },
  { href: "/academy/fullstack-developer-with-ai", label: "Fullstack Engineering with AI" },
  { href: "/academy/databricks", label: "Databricks & Lakehouse Masterclass" },
];

const directLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About" },
];

export const Navbar = () => {
  const { data } = useCMS();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState<number | null>(null);
  const [productsOpen, setProductsOpen] = useState(false);
  const [academyOpen, setAcademyOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setProductsOpen(false);
    setAcademyOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ x: "-50%", y: -100, opacity: 0 }}
      animate={{ x: "-50%", y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed top-2.5 max-[850px]:top-0 left-1/2 w-full max-w-[1240px] max-[1300px]:max-w-[95%] max-[850px]:max-w-none z-50 bg-[#fff8f5] shadow-xl/10 border-b border-[#ddc1b0]/40 rounded-b-3xl sm:rounded-b-[24px] max-[850px]:rounded-none max-[850px]:rounded-b-2xl transition-shadow duration-300"
    >
      {/* Top Left Concave Inverted Corner SVG Cutout */}
      <svg
        aria-hidden="true"
        className="absolute top-0 -left-[49px] rotate-180 text-[#fff8f5] pointer-events-none hidden max-[850px]:hidden sm:block"
        fill="currentColor"
        height="50"
        width="50"
        viewBox="0 0 50 50"
      >
        <path d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z" />
      </svg>

      {/* Top Right Concave Inverted Corner SVG Cutout */}
      <svg
        aria-hidden="true"
        className="absolute top-0 -right-[49px] rotate-90 text-[#fff8f5] pointer-events-none hidden max-[850px]:hidden sm:block"
        fill="currentColor"
        height="50"
        width="50"
        viewBox="0 0 50 50"
      >
        <path d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z" />
      </svg>

      {/* Main Header Inner Row */}
      <div className="h-14 sm:h-16 flex items-center justify-between px-5 sm:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Logo size="sm" showSubtitle={true} />
        </Link>

        {/* Center Desktop Navigation Links & Dropdowns */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3">
          {/* CapeStart-Style Cascading Flyout Dropdown for Services */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => {
              setServicesOpen(false);
              setActiveServiceTab(null);
            }}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-['Inter'] font-semibold text-[#564336] hover:text-[#241913] rounded-full hover:bg-[#241913]/5 transition-colors"
            >
              Services
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-[#964900]" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute top-full left-0 mt-2 w-64 bg-[#fff8f5]/95 backdrop-blur-xl border border-[#ddc1b0]/80 rounded-2xl shadow-xl p-2 z-50"
              >
                {/* Primary Category List */}
                <div className="flex flex-col gap-1">
                  {servicesCategories.map((cat, idx) => {
                    const isActive = activeServiceTab === idx;
                    return (
                      <div
                        key={cat.id}
                        onMouseEnter={() => setActiveServiceTab(idx)}
                        onClick={() => setActiveServiceTab(activeServiceTab === idx ? null : idx)}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-['Inter'] font-semibold transition-all cursor-pointer select-none ${
                          isActive
                            ? "bg-[#241913]/10 text-[#964900] font-bold shadow-sm"
                            : "text-[#564336] hover:bg-[#ffeade]/60 hover:text-[#241913]"
                        }`}
                      >
                        <span>{cat.category}</span>
                        {isActive ? (
                          <X className="w-3.5 h-3.5 text-[#964900] shrink-0" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 text-[#564336]/60 shrink-0" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Secondary Cascading Flyout Card (Popout to Right) */}
                {activeServiceTab !== null && (
                  <motion.div
                    key={servicesCategories[activeServiceTab].id}
                    initial={{ opacity: 0, x: 8, scale: 0.97 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 8, scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    className="absolute top-0 left-[calc(100%+0.5rem)] w-72 bg-[#fff8f5]/95 backdrop-blur-xl border border-[#ddc1b0]/80 rounded-2xl shadow-xl p-2.5 z-50 flex flex-col gap-1"
                  >
                    <div className="px-3 py-1 text-[10px] font-['JetBrains_Mono'] font-extrabold uppercase tracking-wider text-[#964900]">
                      {servicesCategories[activeServiceTab].category}
                    </div>
                    {servicesCategories[activeServiceTab].items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-['Inter'] font-semibold text-[#241913] hover:text-[#964900] hover:bg-[#ffeade]/80 transition-all group"
                      >
                        <span className="flex items-center gap-2">
                          {item.label}
                          {item.badge && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#964900]/15 text-[#964900]">
                              {item.badge}
                            </span>
                          )}
                        </span>
                        <ArrowRight className="w-3 h-3 text-[#964900] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-['Inter'] font-semibold text-[#564336] hover:text-[#241913] rounded-full hover:bg-[#241913]/5 transition-colors"
            >
              Products
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  productsOpen ? "rotate-180 text-[#964900]" : ""
                }`}
              />
            </button>

            {productsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute top-full left-0 mt-2 w-72 bg-[#fff8f5]/95 backdrop-blur-xl border border-[#ddc1b0]/80 rounded-2xl shadow-xl p-2.5 z-50"
              >
                {productsDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between px-3.5 py-2.5 text-xs font-['Inter'] font-semibold text-[#241913] hover:text-[#964900] hover:bg-[#ffeade]/80 rounded-xl transition-all group"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-3 h-3 text-[#964900] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          {/* Academy Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAcademyOpen(true)}
            onMouseLeave={() => setAcademyOpen(false)}
          >
            <button
              onClick={() => setAcademyOpen(!academyOpen)}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-['Inter'] font-semibold text-[#564336] hover:text-[#241913] rounded-full hover:bg-[#241913]/5 transition-colors"
            >
              Academy
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  academyOpen ? "rotate-180 text-[#964900]" : ""
                }`}
              />
            </button>

            {academyOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute top-full left-0 mt-2 w-72 bg-[#fff8f5]/95 backdrop-blur-xl border border-[#ddc1b0]/80 rounded-2xl shadow-xl p-2.5 z-50"
              >
                {academyDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between px-3.5 py-2.5 text-xs font-['Inter'] font-semibold text-[#241913] hover:text-[#964900] hover:bg-[#ffeade]/80 rounded-xl transition-all group"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-3 h-3 text-[#964900] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          {/* Direct Links */}
          {directLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3.5 py-2 text-xs font-['Inter'] font-semibold rounded-full transition-colors ${
                isActive(link.href)
                  ? "bg-[#241913]/10 text-[#964900] font-bold"
                  : "text-[#564336] hover:text-[#241913] hover:bg-[#241913]/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Split-Badge React Bits CTA Button */}
          <Link href={data.header?.primaryCtaHref || "/contact"} className="group relative inline-flex items-center shadow-md hover:shadow-lg transition-shadow">
            <span className="absolute right-0 inset-y-0 w-[calc(100%-1.25rem)] rounded-xl bg-[#964900]" />
            <span className="relative z-10 px-4 py-2.5 rounded-xl bg-[#241913] text-white text-xs font-['JetBrains_Mono'] font-bold tracking-wide">
              {data.header?.primaryCtaText || "Contact Us"}
            </span>
            <span className="relative -left-px z-10 w-9 h-9 rounded-xl flex items-center justify-center text-white bg-[#964900]">
              <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />
            </span>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 text-[#241913] hover:bg-[#241913]/5 rounded-xl transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="md:hidden border-t border-[#ddc1b0]/40 bg-[#fff8f5] px-6 py-4 rounded-b-2xl animate-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div className="text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#964900] font-bold px-1">
              Services & Capabilities
            </div>
            
            {servicesCategories.map((cat) => (
              <div key={cat.category} className="flex flex-col gap-1.5">
                <div className="text-xs font-['JetBrains_Mono'] font-bold text-[#241913] px-2 py-1 bg-[#ffeade]/50 rounded-lg">
                  {cat.category}
                </div>
                {cat.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-3 py-1 text-xs font-['Inter'] text-[#564336] hover:text-[#964900]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}

            <div className="text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#964900] font-bold px-1 pt-2">
              Products
            </div>
            {productsDropdown.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-xl text-xs font-['JetBrains_Mono'] text-[#241913] hover:bg-[#ffeade]"
              >
                {item.label}
              </Link>
            ))}

            <div className="text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#964900] font-bold px-1 pt-2">
              Academy Programs
            </div>
            {academyDropdown.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-xl text-xs font-['JetBrains_Mono'] text-[#241913] hover:bg-[#ffeade]"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              {directLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 rounded-xl text-xs font-['JetBrains_Mono'] text-[#241913] hover:bg-[#ffeade]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 text-center bg-[#964900] text-white font-['JetBrains_Mono'] font-bold text-xs py-3 rounded-xl shadow-md"
              >
                Book Executive Briefing
              </Link>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
};
