"use client";

import Link from "next/link";
import { useCMS } from "@/context/CMSContext";
import FdeInteractiveHub from "@/components/FdeInteractiveHub";
import {
  Check,
  Database,
  ShieldCheck,
  Zap,
  Users,
  Terminal,
  Lock,
  TrendingDown,
  Triangle,
  Cloud,
  FileCheck,
  ArrowDownRight,
} from "lucide-react";

const fdePillars = [
  {
    title: "Embedded Side-by-Side Team",
    desc: "Our senior engineers work directly inside your Slack, GitHub, AWS/GCP, and JIRA workflows as part of your team.",
    icon: Users,
  },
  {
    title: "Autonomous AI & RAG Systems",
    desc: "Architect and deploy scalable RAG pipelines, multi-agent workflows, and custom ML integrations into your operational stack.",
    icon: Terminal,
  },
  {
    title: "Production Accountability",
    desc: "We don't leave after writing slide decks. We take full responsibility for shipping working, tested production code.",
    icon: Zap,
  },
  {
    title: "Zero Vendor Lock-in",
    desc: "All infrastructure, code, and CI/CD pipelines belong entirely to your organization with full documentation transfer.",
    icon: Lock,
  },
];

const dbopsFeatures = [
  {
    title: "Slow Query & Index Optimization",
    desc: "Deep analysis of query execution plans, missing indexes, and buffer pool contention across PostgreSQL, MySQL, SQL Server, Aurora, and Snowflake.",
  },
  {
    title: "FinOps Cost Rightsizing",
    desc: "Identify over-provisioned cloud database instances, read-replicas, and storage tiers to reduce monthly AWS/GCP database spend by 30–50%.",
  },
  {
    title: "Zero-Downtime Migration & Tuning",
    desc: "Execute index creation, table partitioning, and database migrations live in production without causing application downtime.",
  },
  {
    title: "Connection Pooling & Latency Reduction",
    desc: "Implement Redis caching layers, PgBouncer pooling, and query result caching to sustain 10x user throughput spikes with ultra-low latency.",
  },
];

const cloudSecurityPillars = [
  {
    title: "Zero-Downtime Cloud Migrations",
    desc: "Seamlessly move workloads across AWS, Azure, and GCP using blue-green deployments and automated failovers without impacting users.",
    icon: Cloud,
  },
  {
    title: "Infrastructure as Code (IaC)",
    desc: "Build reproducible, versioned infrastructure modules using Terraform, OpenTofu, and CloudFormation for predictable deployments.",
    icon: Terminal,
  },
  {
    title: "Hardened Security Environments",
    desc: "Implement zero-trust network segmentation, IAM least-privilege scoping, and continuous compliance scanning by design.",
    icon: ShieldCheck,
  },
  {
    title: "Data Asset Protection & Guardrails",
    desc: "Enforce encryption at rest and in transit, secrets management via HashiCorp Vault, and data loss prevention policies.",
    icon: Lock,
  },
];

const rlhfPillars = [
  {
    title: "High-Fidelity Data Labeling",
    desc: "Domain-expert annotated datasets tailored for complex NLP, computer vision, and multimodal model training requirements.",
    icon: FileCheck,
  },
  {
    title: "Reinforcement Learning (RLHF)",
    desc: "Iterative preference feedback loops and reward model design to align AI outputs with human intent and safety standards.",
    icon: Zap,
  },
  {
    title: "Precision Curated Evaluation",
    desc: "Rigorously audit training datasets to eliminate bias, hallucinations, and edge-case errors before model deployment.",
    icon: Check,
  },
  {
    title: "Custom Domain Fine-Tuning",
    desc: "Prepare domain-specific datasets (Legal, Healthcare, Finance) for targeted model fine-tuning with strict privacy controls.",
    icon: Users,
  },
];

export default function ServicesPage() {
  const { data } = useCMS();
  const cmsServices = data.pages?.services;

  return (
    <div className="w-full bg-[#fff8f5] text-[#241913]">
      {/* Hero Header */}
      <section className="py-20 px-4 max-w-[1280px] mx-auto text-center relative overflow-hidden border-b border-[#ddc1b0]">
        <div className="inline-flex items-center gap-2 border border-[#ddc1b0] bg-[#ffffff] px-4 py-1.5 rounded-full font-['JetBrains_Mono'] text-xs font-bold text-[#964900] mb-6 tracking-widest uppercase shadow-sm">
          <Triangle className="w-3.5 h-3.5 fill-[#964900]" />
          <span>{cmsServices?.badge || "ALPHAESAI ENGINEERING SERVICES"}</span>
        </div>

        <h1 className="font-['Hanken_Grotesk'] text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#241913] mb-6 tracking-tight leading-tight">
          {cmsServices?.title || "Systems That Ship. Architecture That Scales."}
        </h1>

        <p className="font-['Inter'] text-lg text-[#564336] max-w-3xl mx-auto mb-8 font-normal leading-relaxed">
          {cmsServices?.subtitle || "We don't build prototypes that collect dust. We design, deploy, and maintain the production-grade systems that run your business."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="/contact"
            className="bg-[#964900] text-white font-['JetBrains_Mono'] font-bold text-base px-8 py-3.5 rounded-full hover:bg-[#723600] transition-colors shadow-md text-center"
          >
            Schedule an Executive Briefing
          </Link>
          <a
            href="#fde"
            className="border border-[#ddc1b0] bg-[#ffffff] text-[#241913] font-['JetBrains_Mono'] font-bold text-base px-8 py-3.5 rounded-full hover:bg-[#fff1ea] transition-colors text-center"
          >
            Explore Capability Pillars
          </a>
        </div>

        {/* Quick Anchor Navigation Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="#fde"
            className="px-4 py-1.5 bg-[#ffffff] border border-[#ddc1b0] hover:border-[#964900] rounded-full text-xs font-['JetBrains_Mono'] font-semibold text-[#241913] transition-colors shadow-sm"
          >
            ⚡ Forward Deployed Engineering
          </a>
          <a
            href="#dbops"
            className="px-4 py-1.5 bg-[#ffffff] border border-[#ddc1b0] hover:border-[#964900] rounded-full text-xs font-['JetBrains_Mono'] font-semibold text-[#241913] transition-colors shadow-sm"
          >
            🚀 Database & Cloud Optimization
          </a>
          <a
            href="#cloud-migration-security"
            className="px-4 py-1.5 bg-[#ffffff] border border-[#ddc1b0] hover:border-[#964900] rounded-full text-xs font-['JetBrains_Mono'] font-semibold text-[#241913] transition-colors shadow-sm"
          >
            ☁️ Cloud Migration & Security
          </a>
          <a
            href="#data-annotation-rlhf"
            className="px-4 py-1.5 bg-[#ffffff] border border-[#ddc1b0] hover:border-[#964900] rounded-full text-xs font-['JetBrains_Mono'] font-semibold text-[#241913] transition-colors shadow-sm"
          >
            🎯 Data Annotation & RLHF
          </a>
        </div>
      </section>

      {/* 1. FORWARD DEPLOYED ENGINEERING (FDE) */}
      <section id="fde" className="py-20 bg-[#ffffff] border-b border-[#ddc1b0]">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-['JetBrains_Mono'] text-[#964900] font-bold uppercase tracking-widest mb-2">
              Core Delivery Model
            </div>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#241913] mb-4">
              Forward Deployed Engineering (FDE)
            </h2>
            <p className="font-['Inter'] text-base text-[#564336] leading-relaxed">
              We act as an extension of your engineering team. We architect scalable RAG systems, autonomous agents, and custom ML models that integrate into your operational stack—designed for production, not just experiments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {fdePillars.map((p) => {
              const IconComp = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-[#F3F3F3] border border-[#ddc1b0] hover:border-[#964900] rounded-xl p-6 transition-all duration-300 shadow-sm hover-lift"
                >
                  <div className="w-10 h-10 rounded bg-[#ffffff] border border-[#ddc1b0] flex items-center justify-center text-[#964900] mb-4 shadow-sm">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-['Hanken_Grotesk'] text-lg font-bold text-[#241913] mb-2">
                    {p.title}
                  </h3>
                  <p className="font-['Inter'] text-xs text-[#564336] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* INTERACTIVE FDE HUB & SPOKE PROCESS ENGINE */}
          <div className="my-14 bg-white rounded-2xl border border-[#ddc1b0]/60 p-4 sm:p-8 shadow-sm">
            <FdeInteractiveHub
              badgeText="Interactive Delivery Framework"
              title="From Discovery to Continuous Optimization"
            />
          </div>

          <div className="bg-[#fff1ea] border border-[#ddc1b0] rounded-xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-['JetBrains_Mono'] text-[#964900] uppercase font-bold mb-1">
                ACCOUNTABILITY GUARANTEE
              </div>
              <h4 className="font-['Hanken_Grotesk'] text-xl font-bold text-[#241913]">
                Engineers inside your codebase within 48 hours
              </h4>
              <p className="font-['Inter'] text-xs text-[#564336] mt-1">
                No long procurement cycles. Immediate impact on active production sprints.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-[#964900] text-white font-['JetBrains_Mono'] font-bold text-sm px-6 py-3 rounded-full hover:bg-[#723600] transition-colors shadow-sm shrink-0"
            >
              Book FDE Scoping Call
            </Link>
          </div>
        </div>
      </section>

      {/* 2. DATABASE OPTIMIZATION */}
      <section id="dbops" className="py-20 border-b border-[#ddc1b0] bg-[#fff8f5]">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-['JetBrains_Mono'] text-[#964900] font-bold uppercase tracking-widest mb-2">
              Performance Tuning & FinOps
            </div>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#241913] mb-4">
              Database & Cloud Optimization
            </h2>
            <p className="font-['Inter'] text-base text-[#564336] leading-relaxed">
              Your database is likely costing you more than it should. We identify bottlenecks, optimize query execution, and manage resource allocation to cut your infrastructure costs by 30-50% while improving latency.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-[#241913] text-white rounded-xl p-8 shadow-md flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#964900]/30 text-[#ffb786] border border-[#964900]/50 text-xs font-['JetBrains_Mono'] mb-6">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>Immediate Cost Reduction</span>
                </div>
                <div className="text-4xl font-extrabold text-[#ffb786] font-['JetBrains_Mono'] mb-2">
                  30–50%
                </div>
                <div className="text-lg font-bold font-['Hanken_Grotesk'] text-white mb-2">
                  Infrastructure Cost Cut
                </div>
                <p className="text-xs font-['Inter'] text-white/70 leading-relaxed">
                  Average monthly spend reduction across PostgreSQL, Aurora, RDS, and Snowflake without degrading response times.
                </p>
              </div>
              <div className="pt-8 border-t border-white/10 mt-8">
                <div className="text-2xl font-extrabold text-[#ffb786] font-['JetBrains_Mono'] mb-1">
                  10x Throughput
                </div>
                <div className="text-xs font-['Inter'] text-white/70">P99 Query Latency & Scaling Improvement</div>
              </div>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {dbopsFeatures.map((f) => (
                <div
                  key={f.title}
                  className="bg-[#ffffff] border border-[#ddc1b0] hover:border-[#964900] rounded-xl p-6 transition-all duration-300 shadow-sm hover-lift"
                >
                  <div className="w-8 h-8 rounded bg-[#fff1ea] flex items-center justify-center text-[#964900] mb-3">
                    <Check className="w-4 h-4" />
                  </div>
                  <h3 className="font-['Hanken_Grotesk'] text-base font-bold text-[#241913] mb-2">
                    {f.title}
                  </h3>
                  <p className="font-['Inter'] text-xs text-[#564336] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLOUD MIGRATION & CYBER SECURITY */}
      <section id="cloud-migration-security" className="py-20 bg-[#ffffff] border-b border-[#ddc1b0]">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-3xl">
              <div className="text-xs font-['JetBrains_Mono'] text-[#964900] font-bold uppercase tracking-widest mb-2">
                Resilient Cloud & Security
              </div>
              <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#241913] mb-4">
                Cloud Migration, Cyber Security, Databricks & Snowflake
              </h2>
              <p className="font-['Inter'] text-base text-[#564336] leading-relaxed">
                We migrate workloads without the downtime. Using infrastructure-as-code, we build secure, reproducible environments across AWS, Azure, GCP, and OCI, with security-by-design at the core to protect your data assets.
              </p>
            </div>
            <Link
              href="/services/cloud-migration-cyber-security-databricks-snowflake"
              className="inline-flex items-center gap-2 bg-[#964900] text-white font-['JetBrains_Mono'] font-bold text-xs px-5 py-3 rounded-full hover:bg-[#723600] transition-colors shadow-sm shrink-0"
            >
              <span>Dedicated Service Page</span>
              <ArrowDownRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {cloudSecurityPillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-[#F3F3F3] border border-[#ddc1b0] hover:border-[#964900] rounded-xl p-8 transition-all duration-300 shadow-sm hover-lift"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded bg-[#ffffff] text-[#964900] border border-[#ddc1b0] shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-['Hanken_Grotesk'] text-xl font-bold text-[#241913]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="font-['Inter'] text-sm text-[#564336] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DATA ANNOTATION & RLHF */}
      <section id="data-annotation-rlhf" className="py-20 bg-[#fff8f5]">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-3xl">
              <div className="text-xs font-['JetBrains_Mono'] text-[#964900] font-bold uppercase tracking-widest mb-2">
                High-Fidelity AI Training Data
              </div>
              <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#241913] mb-4">
                Data Annotation & RLHF
              </h2>
              <p className="font-['Inter'] text-base text-[#564336] leading-relaxed">
                High-quality models require high-quality data. We provide expert-level data annotation and RLHF services, ensuring your AI models receive the precision training necessary to perform reliably in real-world scenarios.
              </p>
            </div>
            <Link
              href="/services/data-annotation-and-rlhf"
              className="inline-flex items-center gap-2 bg-[#964900] text-white font-['JetBrains_Mono'] font-bold text-xs px-5 py-3 rounded-full hover:bg-[#723600] transition-colors shadow-sm shrink-0"
            >
              <span>Dedicated Service Page</span>
              <ArrowDownRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {rlhfPillars.map((sec) => {
              const IconComp = sec.icon;
              return (
                <div
                  key={sec.title}
                  className="bg-[#ffffff] border border-[#ddc1b0] hover:border-[#964900] rounded-xl p-8 transition-all duration-300 shadow-sm hover-lift"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded bg-[#fff1ea] text-[#964900] border border-[#ddc1b0] shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-['Hanken_Grotesk'] text-xl font-bold text-[#241913]">
                      {sec.title}
                    </h3>
                  </div>
                  <p className="font-['Inter'] text-sm text-[#564336] leading-relaxed">
                    {sec.desc}
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
