"use client";

import Link from "next/link";
import { useCMS } from "@/context/CMSContext";
import {
  Sparkles,
  ArrowRight,
  Check,
  Shield,
  Database,
  Zap,
  Activity,
  RefreshCw,
  Users,
  Triangle,
} from "lucide-react";

const platformModules = [
  {
    title: "Autonomous Lead Qualification Agents",
    desc: "Automate prospect scoring and conversation routing using real-time CRM and knowledge base signals.",
    icon: Users,
  },
  {
    title: "Knowledge Base Synchronization",
    desc: "Connect directly to Salesforce, Databricks Delta Lake, Snowflake, and Notion to ground answers in verified enterprise data.",
    icon: Database,
  },
  {
    title: "Real-Time Customer Operations",
    desc: "Resolve customer inquiries and trigger workflow actions 24/7 with zero human intervention required for routine ops.",
    icon: Zap,
  },
  {
    title: "Enterprise Security & Guardrails",
    desc: "Model permission layers and PII filtering ensure customer data stays secure and compliant with HIPAA & SOC2.",
    icon: Shield,
  },
];

export default function OneAIAssistPage() {
  const { data } = useCMS();
  const cmsData = data.pages?.oneaiAssist;

  return (
    <div className="w-full bg-[#fff8f5] text-[#241913] min-h-screen">
      {/* Hero Header */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 border border-[#241913]/15 bg-[#fff1ea] px-4 py-1.5 rounded-full font-mono-tech text-xs font-semibold text-[#964900] mb-6 tracking-widest uppercase shadow-sm">
          <Triangle className="w-3 h-3 fill-[#964900] text-[#964900]" />
          <span>{cmsData?.heroBadge || "Flagship Customer Growth Platform"}</span>
        </div>

        <h1 className="font-hanken text-4xl sm:text-6xl font-extrabold text-[#241913] mb-6 tracking-tight leading-tight">
          {cmsData?.title || "OneAI Assist — AI-Powered Customer Growth"}
        </h1>

        <p className="font-inter text-lg text-[#564336] max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          {cmsData?.subtitle || "OneAI Assist is AlphaesAI's production-grade customer automation platform."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href={cmsData?.primaryCtaHref || "/contact"}
            className="bg-[#964900] text-white font-inter text-base px-8 py-3.5 rounded-md font-semibold hover:bg-[#7a3b00] transition-colors shadow-md text-center inline-flex items-center gap-2"
          >
            <span>{cmsData?.primaryCtaText || "Request Platform Demo"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/partners"
            className="border border-[#241913]/20 bg-[#F3F3F3] text-[#241913] font-inter text-base px-8 py-3.5 rounded-md font-semibold hover:bg-[#fff1ea] transition-colors text-center"
          >
            Become a Partner / Reseller
          </Link>
        </div>
      </section>

      {/* Live Architecture Showcase */}
      <section className="py-20 bg-[#fff1ea] border-y border-[#241913]/10">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-mono-tech text-[#964900] uppercase tracking-widest mb-2 font-bold">
              Live Architecture
            </div>
            <h2 className="font-hanken text-3xl sm:text-4xl font-bold text-[#241913]">
              Central Knowledge Graph & Agent Feeds
            </h2>
          </div>

          <div className="bg-[#fff8f5] border border-[#241913]/15 rounded-xl p-6 sm:p-8 shadow-sm">
            {/* Console Header */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#241913]/10 pb-4 mb-6 gap-4 bg-[#F3F3F3] p-4 rounded-lg border border-[#241913]/10">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[#964900]" />
                <span className="font-mono-tech text-sm font-bold text-[#241913]">
                  OneAI Assist | Live Control Console
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono-tech">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-800 border border-emerald-500/30 rounded-full flex items-center gap-1.5 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                  Live Sync Active
                </span>
                <span className="text-[#564336]">Project: Enterprise Growth Q4</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Pipeline Connectors */}
              <div className="bg-[#F3F3F3] border border-[#241913]/10 rounded-lg p-5 space-y-4 shadow-sm">
                <div className="text-xs font-mono-tech text-[#564336] uppercase tracking-wider font-bold">
                  Pipeline Connectors
                </div>

                <div className="p-3.5 bg-[#fff8f5] rounded-md border border-[#241913]/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#241913]">
                      Salesforce CRM
                    </div>
                    <div className="text-[10px] font-mono-tech text-[#964900] font-medium">
                      Syncing • 120GB
                    </div>
                  </div>
                  <RefreshCw className="w-4 h-4 text-[#964900] animate-spin" />
                </div>

                <div className="p-3.5 bg-[#fff8f5] rounded-md border border-[#241913]/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#241913]">
                      Databricks Delta Lake
                    </div>
                    <div className="text-[10px] font-mono-tech text-emerald-700 font-medium">
                      Connected • 2.8TB
                    </div>
                  </div>
                  <Check className="w-4 h-4 text-emerald-700" />
                </div>

                <div className="p-3.5 bg-[#fff8f5] rounded-md border border-[#241913]/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#241913]">
                      Snowflake Warehouse
                    </div>
                    <div className="text-[10px] font-mono-tech text-amber-700 font-medium">
                      Fetching • 950GB
                    </div>
                  </div>
                  <Activity className="w-4 h-4 text-amber-700" />
                </div>
              </div>

              {/* Agent Feeds */}
              <div className="bg-[#F3F3F3] border border-[#241913]/10 rounded-lg p-5 space-y-4 shadow-sm">
                <div className="text-xs font-mono-tech text-[#564336] uppercase tracking-wider font-bold">
                  Autonomous Agent Feeds
                </div>

                <div className="p-3.5 bg-[#fff8f5] rounded-md border border-[#241913]/10 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#964900]">
                      AGENT 04 (LISA):
                    </span>
                    <span className="text-[10px] font-mono-tech text-[#564336]">
                      12s ago
                    </span>
                  </div>
                  <p className="text-xs text-[#241913]">
                    Processed lead qualification ticket #812 and updated SQL lead status.
                  </p>
                </div>

                <div className="p-3.5 bg-[#fff8f5] rounded-md border border-[#241913]/10 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#4a5e86]">
                      AGENT 07 (MAX):
                    </span>
                    <span className="text-[10px] font-mono-tech text-[#564336]">
                      28s ago
                    </span>
                  </div>
                  <p className="text-xs text-[#241913]">
                    Analyzed Salesforce pipeline data for opportunity scoring (+22% conversion).
                  </p>
                </div>
              </div>

              {/* Lead Qualification Matrix */}
              <div className="bg-[#F3F3F3] border border-[#241913]/10 rounded-lg p-5 space-y-4 shadow-sm">
                <div className="text-xs font-mono-tech text-[#564336] uppercase tracking-wider font-bold">
                  Lead Qualification Matrix
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="text-[#564336] font-medium">
                        Conversion Rate
                      </span>
                      <span className="font-mono-tech font-bold text-[#964900]">
                        12.8% (+3.2%)
                      </span>
                    </div>
                    <div className="w-full bg-[#fff8f5] h-2 rounded overflow-hidden border border-[#241913]/10">
                      <div className="bg-[#964900] h-full w-[65%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="text-[#564336] font-medium">
                        Pipeline Value Generated
                      </span>
                      <span className="font-mono-tech font-bold text-emerald-700">
                        $2.4M
                      </span>
                    </div>
                    <div className="w-full bg-[#fff8f5] h-2 rounded overflow-hidden border border-[#241913]/10">
                      <div className="bg-emerald-600 h-full w-[80%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Modules */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono-tech text-[#964900] uppercase tracking-widest mb-2 font-bold">
              Platform Capabilities
            </div>
            <h2 className="font-hanken text-3xl sm:text-4xl font-bold text-[#241913]">
              4 Production Modules in One Platform
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformModules.map((mod) => {
              const IconComp = mod.icon;
              return (
                <div
                  key={mod.title}
                  className="bg-[#F3F3F3] border border-[#241913]/10 hover:border-[#964900]/40 rounded-xl p-8 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="p-3 rounded-lg bg-[#fff1ea] text-[#964900] w-fit mb-5 border border-[#241913]/10 shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-hanken text-xl font-bold text-[#241913] mb-3">
                    {mod.title}
                  </h3>
                  <p className="font-inter text-sm text-[#564336] leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

