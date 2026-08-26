"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Activity, Database, Cpu, Sparkles, Server, Code2 } from "lucide-react";

const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

// Data Analytics & AI Stack Items
const TECH_STACK = [
  { name: "Databricks", category: "Lakehouse & Delta Analytics", icon: Database },
  { name: "Snowflake", category: "Cloud Data Warehouse", icon: Server },
  { name: "Apache Spark", category: "Distributed Big Data Analytics", icon: Cpu },
  { name: "Google BigQuery", category: "Serverless Analytics Engine", icon: Database },
  { name: "PyTorch", category: "Deep Learning Framework", icon: Code2 },
  { name: "Hugging Face", category: "Model Hub & Transformers", icon: Sparkles },
  { name: "OpenAI", category: "Foundation LLMs & Embeddings", icon: Activity },
  { name: "LangChain", category: "LLM Agent Orchestration", icon: Code2 },
  { name: "Pinecone", category: "High-Scale Vector DB", icon: Database },
  { name: "dbt", category: "Analytics Engineering", icon: Server },
  { name: "Neon DB", category: "Serverless PostgreSQL", icon: Database },
  { name: "Antigravity SDK", category: "Autonomous Agent Core", icon: Sparkles },
];

// Operational Compliance Shields
const COMPLIANCE_SHIELDS = [
  {
    title: "SOC-2 Type II Standards",
    badge: "SOC 2 TYPE II",
    desc: "Verified Enterprise Data Isolation & Access Auditing",
    icon: ShieldCheck,
    color: "#ff5722",
  },
  {
    title: "HIPAA Regulated Ready",
    badge: "HIPAA COMPLIANT",
    desc: "BAA-Ready ePHI Encryption at Rest & In-Transit",
    icon: Lock,
    color: "#964900",
  },
  {
    title: "ISO 27001 Controls",
    badge: "ISO 27001",
    desc: "Rigorous Information Security System Controls",
    icon: ShieldCheck,
    color: "#ff5722",
  },
  {
    title: "GDPR Privacy Shield",
    badge: "GDPR ENFORCED",
    desc: "EU Data Sovereignty & Zero Unauthorized Retention",
    icon: Lock,
    color: "#964900",
  },
];

export function SupportedTechStackBar() {
  return (
    <section className="py-16 px-4 bg-[#fff8f5] border-b border-[#ddc1b0] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: SMOOTH_EASE }}
          className="text-center mb-10"
        >
          <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#964900] uppercase tracking-widest bg-[#fff1ea] border border-[#ddc1b0] px-3.5 py-1.5 rounded-full inline-block mb-3">
            Enterprise Stack & Security Standards
          </span>
          <h3 className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl font-extrabold text-[#241913]">
            Data Analytics & Enterprise AI Infrastructure Stack
          </h3>
          <p className="font-['Inter'] text-sm text-[#564336] max-w-xl mx-auto mt-2">
            Built directly on industry-standard Data Warehouses, Distributed Analytics Engines, and SOTA AI Frameworks.
          </p>
        </motion.div>

        {/* Tech Stack Marquee / Pill Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: SMOOTH_EASE, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-14"
        >
          {TECH_STACK.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="p-3.5 rounded-xl border border-[#ddc1b0] bg-[#ffffff] shadow-sm flex flex-col items-center text-center gap-1.5 hover:border-[#964900] hover:shadow-md transition-all group"
              >
                <div className="p-2 rounded-lg bg-[#fff8f5] text-[#964900] group-hover:bg-[#964900] group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-['Hanken_Grotesk'] text-sm font-bold text-[#241913] group-hover:text-[#964900] transition-colors">
                  {tech.name}
                </span>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#564336]/80 line-clamp-1">
                  {tech.category}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Security & Compliance Shield Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {COMPLIANCE_SHIELDS.map((item, idx) => {
            const ShieldIcon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: SMOOTH_EASE, delay: 0.15 + idx * 0.1 }}
                className="p-5 rounded-2xl bg-[#1c130d] border border-[#ddc1b0] text-white flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-[#ff5722] transition-colors"
              >
                {/* Subtle Amber Glow Background Effect */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#ff5722]/10 rounded-full blur-2xl group-hover:bg-[#ff5722]/20 transition-all pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <span className="font-['JetBrains_Mono'] text-[10px] font-bold text-[#ffa066] tracking-wider uppercase border border-[#ffa066]/30 px-2.5 py-1 rounded-full bg-[#ffa066]/10">
                    {item.badge}
                  </span>
                  <ShieldIcon className="w-5 h-5 text-[#ff7338]" />
                </div>

                <div>
                  <h4 className="font-['Hanken_Grotesk'] text-lg font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="font-['Inter'] text-xs text-white/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
