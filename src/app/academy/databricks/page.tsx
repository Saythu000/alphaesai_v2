"use client";

import Link from "next/link";
import {
  Database,
  Server,
  Zap,
  TrendingDown,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const modules = [
  {
    step: "MODULE 01",
    title: "Databricks Lakehouse Architecture & Unity Catalog Governance",
    desc: "Master the Medallion Architecture (Bronze, Silver, Gold), unified data governance with Unity Catalog, fine-grained access controls, and data lineage.",
    skills: ["Medallion Architecture", "Unity Catalog RBAC", "Data Lineage & Auditing"],
  },
  {
    step: "MODULE 02",
    title: "Delta Lake Deep Dive & Liquid Clustering Optimization",
    desc: "Optimize Delta Lake storage with Z-Ordering, Liquid Clustering, Vacuum management, time travel, and file compaction for sub-second query speeds.",
    skills: ["Liquid Clustering", "Z-Order Optimization", "ACID Transactions"],
  },
  {
    step: "MODULE 03",
    title: "PySpark Performance Tuning & 60% Compute Cost Reduction",
    desc: "Eliminate shuffle spills, resolve data skew, configure auto-scaling clusters efficiently, and slash DBU compute expenses across large data workloads.",
    skills: ["PySpark Shuffle Optimization", "DBU Cost Reduction", "Auto-Scaling Clusters"],
  },
  {
    step: "MODULE 04",
    title: "Databricks Model Serving, Snowpark & MLflow Integration",
    desc: "Deploy large language models (LLMs) and custom ML models on Databricks Model Serving endpoints with Unity Catalog integration and MLflow tracking.",
    skills: ["Databricks Model Serving", "MLflow Registry", "Snowpark Integration"],
  },
];

export default function DatabricksAcademy() {
  return (
    <div className="w-full bg-[#fff8f5] text-[#241913] min-h-screen">
      {/* Hero Header */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 border border-[#241913]/15 bg-[#fff1ea] px-4 py-1.5 rounded-full font-mono-tech text-xs font-semibold text-[#964900] mb-6 tracking-widest uppercase shadow-sm">
          <Database className="w-4 h-4 text-[#964900]" />
          <span>AlphaesAI Academy — Data Engineering Track</span>
        </div>

        <h1 className="font-hanken text-4xl sm:text-6xl font-extrabold text-[#241913] mb-6 tracking-tight leading-tight">
          Databricks & Lakehouse Optimization
        </h1>

        <p className="font-inter text-lg text-[#564336] max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          Master industrial-scale Lakehouse architectures, Delta Lake optimization, PySpark performance tuning, and Databricks DBU cost reduction techniques.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="/contact"
            className="bg-[#964900] text-white font-inter text-base px-8 py-3.5 rounded-md font-semibold hover:bg-[#7a3b00] transition-colors shadow-md text-center inline-flex items-center gap-2"
          >
            <span>Enroll in Databricks Track</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services/database-performance-and-cloud-optimization"
            className="border border-[#241913]/20 bg-[#F3F3F3] text-[#241913] font-inter text-base px-8 py-3.5 rounded-md font-semibold hover:bg-[#fff1ea] transition-colors text-center"
          >
            View Database & Cloud Services
          </Link>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="py-16 bg-[#fff1ea] border-t border-b border-[#241913]/10">
        <div className="max-w-[1440px] mx-auto px-8 grid md:grid-cols-3 gap-8">
          <div className="bg-[#fff8f5] border border-[#241913]/15 rounded-2xl p-6 space-y-3 shadow-sm">
            <TrendingDown className="w-8 h-8 text-[#964900]" />
            <h3 className="font-hanken text-xl font-bold">60% DBU Cost Savings</h3>
            <p className="font-inter text-xs text-[#564336]">
              Apply proven cluster sizing, spot instance strategies, and query auto-tuning to drastically lower Databricks DBU consumption.
            </p>
          </div>

          <div className="bg-[#fff8f5] border border-[#241913]/15 rounded-2xl p-6 space-y-3 shadow-sm">
            <Zap className="w-8 h-8 text-[#964900]" />
            <h3 className="font-hanken text-xl font-bold">5x Faster Latency</h3>
            <p className="font-inter text-xs text-[#564336]">
              Leverage Liquid Clustering, Z-Ordering, and Photon engine acceleration to turn multi-hour queries into sub-second runs.
            </p>
          </div>

          <div className="bg-[#fff8f5] border border-[#241913]/15 rounded-2xl p-6 space-y-3 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-[#964900]" />
            <h3 className="font-hanken text-xl font-bold">Unity Catalog Governance</h3>
            <p className="font-inter text-xs text-[#564336]">
              Enforce centralized data governance, column-level security, and audit logging across all your data assets.
            </p>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono-tech text-[#964900] uppercase tracking-widest mb-2 font-bold">
              Program Modules
            </div>
            <h2 className="font-hanken text-3xl sm:text-4xl font-bold text-[#241913]">
              Become a Databricks Certified Architect
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((m) => (
              <div
                key={m.step}
                className="bg-[#F3F3F3] border border-[#241913]/15 rounded-2xl p-8 space-y-4 hover:border-[#964900]/40 transition-colors shadow-sm"
              >
                <div className="text-xs font-mono-tech font-bold text-[#964900]">
                  {m.step}
                </div>
                <h3 className="font-hanken text-xl font-bold text-[#241913]">
                  {m.title}
                </h3>
                <p className="font-inter text-xs text-[#564336] leading-relaxed">
                  {m.desc}
                </p>
                <div className="pt-4 border-t border-[#241913]/10 flex flex-wrap gap-2">
                  {m.skills.map((s) => (
                    <span
                      key={s}
                      className="bg-[#fff1ea] border border-[#241913]/10 text-[#964900] font-inter text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-[#241913] text-[#fff8f5] rounded-3xl p-10 text-center space-y-6 max-w-4xl mx-auto shadow-2xl">
            <Sparkles className="w-10 h-10 text-[#ffb786] mx-auto" />
            <h2 className="font-hanken text-3xl font-extrabold text-[#ffb786]">
              Optimize Your Databricks Lakehouse Environment
            </h2>
            <p className="font-inter text-sm text-[#f3ded3]/80 max-w-xl mx-auto leading-relaxed">
              Learn directly from Forward-Deployed Engineers who have optimized Databricks for global Fortune 500 enterprises.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#964900] hover:bg-[#b85b00] text-white font-inter text-sm font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg"
            >
              <span>Enroll in Databricks Program</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
