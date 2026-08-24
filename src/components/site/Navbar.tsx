"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ArrowDownRight,
  Sparkles,
  Database,
  ShieldCheck,
  FileCheck,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

import { useCMS } from "@/context/CMSContext";

const servicesMegaMenu = [
  {
    category: "AI & Engineering",
    icon: Sparkles,
    items: [
      {
        href: "/services/forward-deployed-ai-engineering",
        label: "Forward Deployed AI Eng (FDE)",
        desc: "Embedded senior engineers building production RAG & agents.",
      },
      {
        href: "/services/forward-deployed-ai-engineering#agentic-workflows",
        label: "Autonomous Agent Workflows",
        desc: "Multi-agent orchestration & custom tool integration.",
      },
      {
        href: "/services/forward-deployed-ai-engineering#fine-tuning",
        label: "Custom Model Fine-Tuning",
        desc: "Domain-specific model optimization & safety alignment.",
      },
    ],
  },
  {
    category: "Data & Database Operations",
    icon: Database,
    items: [
      {
        href: "/services/database-performance-and-cloud-optimization",
        label: "Database Operations (DBOps)",
        desc: "30–50% infrastructure cost cuts & P99 latency tuning.",
      },
      {
        href: "/services/database-performance-and-cloud-optimization#lakehouse",
        label: "Databricks & Snowflake Lakehouse",
        desc: "Governed Delta Lake & scalable feature engineering.",
      },
      {
        href: "/services/database-performance-and-cloud-optimization#etl",
        label: "Streaming & Real-Time ETL",
        desc: "Kafka, Spark Streaming & telemetry ingestion pipelines.",
      },
    ],
  },
  {
    category: "Data Annotation & RLHF",
    icon: FileCheck,
    items: [
      {
        href: "/services/data-annotation-and-rlhf",
        label: "High-Fidelity Data Annotation",
        desc: "Text, Audio, Video & Vision expert labeling.",
      },
      {
        href: "/services/data-annotation-and-rlhf#rlhf",
        label: "RLHF & Model Safety Alignment",
        desc: "Preference feedback loops & reward model design.",
      },
      {
        href: "/services/data-annotation-and-rlhf#benchmarking",
        label: "Dataset Audit & Evaluation",
        desc: "Rigorously audit datasets to eliminate bias & hallucinations.",
      },
    ],
  },
  {
    category: "Cloud & Cybersecurity",
    icon: ShieldCheck,
    items: [
      {
        href: "/services/cloud-migration-cyber-security-databricks-snowflake",
        label: "Zero-Downtime Cloud Migration",
        desc: "Seamlessly move workloads across AWS, Azure & GCP.",
      },
      {
        href: "/services/cloud-migration-cyber-security-databricks-snowflake#security",
        label: "Cybersecurity & AI Guardrails",
        desc: "PII sanitization, RBAC & agent execution boundaries.",
      },
      {
        href: "/services/cloud-migration-cyber-security-databricks-snowflake#k8s",
        label: "DevOps & MLOps Infrastructure",
        desc: "Infrastructure as Code, CI/CD pipelines & monitoring.",
      },
    ],
  },
];

const productsDropdown = [
  { href: "/oneai-assist", label: "OneAI Assist — Enterprise Agent Platform" },
  { href: "/drgodly", label: "DrGodly — AI Telemedicine Suite" },
];

const directLinks = [
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About" },
];

export const Navbar = () => {
  const { data } = useCMS();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setProductsOpen(false);
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
      className="fixed top-2.5 max-[850px]:top-0 left-1/2 w-full max-w-4xl max-[1200px]:max-w-2xl max-[850px]:max-w-none z-50 bg-[#fff8f5] shadow-xl/10 border-b border-[#ddc1b0]/40 rounded-b-3xl sm:rounded-b-[24px] max-[850px]:rounded-none max-[850px]:rounded-b-2xl transition-shadow duration-300"
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
      <div className="h-14 sm:h-16 flex items-center justify-between px-5 sm:px-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-5 h-5 rounded-full bg-[#964900] group-hover:scale-110 transition-transform shadow-sm" />
          <span className="font-['JetBrains_Mono'] text-lg font-bold text-[#964900] tracking-tight">
            {data.footer?.brandName || "AlphaesAI"}
          </span>
        </Link>

        {/* Center Desktop Navigation Links & Dropdowns */}
        <nav className="hidden md:flex items-center gap-1">
          {/* CapeStart-Style Categorized Mega Dropdown for Services */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 px-4 py-2 text-xs font-['JetBrains_Mono'] font-medium text-[#564336] hover:text-[#241913] rounded-full hover:bg-[#241913]/5 transition-colors"
            >
              Services
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full -left-[140px] lg:-left-[180px] mt-1 w-[820px] lg:w-[860px] bg-[#fff8f5] border border-[#ddc1b0] rounded-3xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                
                {/* 4-Column Mega Dropdown Grid */}
                <div className="grid grid-cols-4 gap-5">
                  {servicesMegaMenu.map((cat) => {
                    const IconComponent = cat.icon;
                    return (
                      <div key={cat.category} className="flex flex-col gap-3">
                        <div className="flex items-center gap-1.5 border-b border-[#ddc1b0]/60 pb-2">
                          <IconComponent className="w-4 h-4 text-[#964900] shrink-0" />
                          <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#241913] uppercase tracking-wider">
                            {cat.category}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          {cat.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="p-2 rounded-xl hover:bg-[#ffeade] transition-colors group"
                            >
                              <div className="text-xs font-['JetBrains_Mono'] font-bold text-[#241913] group-hover:text-[#964900] leading-snug">
                                {item.label}
                              </div>
                              <div className="text-[11px] font-['Inter'] text-[#564336] mt-0.5 leading-tight line-clamp-2">
                                {item.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Full-Width Banner Link */}
                <div className="mt-5 pt-4 border-t border-[#ddc1b0]/60 flex items-center justify-between bg-[#fff1ea] -mx-6 -mb-6 px-6 py-3.5 rounded-b-3xl">
                  <div className="text-xs font-['Inter'] text-[#564336]">
                    Looking for custom enterprise architecture or a tailored scoping session?
                  </div>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-['JetBrains_Mono'] font-bold text-[#964900] hover:text-[#723600] transition-colors"
                  >
                    <span>View All Services & Pillars</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
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
              className="flex items-center gap-1 px-4 py-2 text-xs font-['JetBrains_Mono'] font-medium text-[#564336] hover:text-[#241913] rounded-full hover:bg-[#241913]/5 transition-colors"
            >
              Products
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {productsOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {productsDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-xs font-['JetBrains_Mono'] text-[#241913] hover:bg-[#ffeade] hover:text-[#964900] rounded-xl transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Direct Links */}
          {directLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-xs font-['JetBrains_Mono'] font-medium rounded-full transition-colors ${
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
          <Link
            href="/contact"
            className="text-xs font-['JetBrains_Mono'] font-medium text-[#564336] hover:text-[#241913] transition-colors"
          >
            Log In
          </Link>

          {/* Split-Badge React Bits CTA Button */}
          <Link href={data.header?.primaryCtaHref || "/contact"} className="group relative inline-flex items-center shadow-md hover:shadow-lg transition-shadow">
            <span className="absolute right-0 inset-y-0 w-[calc(100%-1.25rem)] rounded-xl bg-[#964900]" />
            <span className="relative z-10 px-4 py-2.5 rounded-xl bg-[#241913] text-white text-xs font-['JetBrains_Mono'] font-bold tracking-wide">
              {data.header?.primaryCtaText || "Book Briefing"}
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
            
            {servicesMegaMenu.map((cat) => (
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
