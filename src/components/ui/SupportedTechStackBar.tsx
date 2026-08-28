"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Activity, Database, Cpu, Sparkles, Server, Code2 } from "lucide-react";
import { useCMS } from "@/context/CMSContext";

const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  Server,
  Cpu,
  Code2,
  Sparkles,
  Activity,
  ShieldCheck,
  Lock,
};


export function SupportedTechStackBar() {
  const { data } = useCMS();
  const techStackData = data?.homepage?.techStackBar || {
    badge: "Enterprise Stack & Security Standards",
    title: "Data Analytics & Enterprise AI Infrastructure Stack",
    subtitle: "Built directly on industry-standard Data Warehouses, Distributed Analytics Engines, and SOTA AI Frameworks.",
    techStack: [],
    complianceShields: []
  };

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
            {techStackData.badge}
          </span>
          <h3 className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl font-extrabold text-[#241913]">
            {techStackData.title}
          </h3>
          <p className="font-['Inter'] text-sm text-[#564336] max-w-xl mx-auto mt-2">
            {techStackData.subtitle}
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
          {(techStackData.techStack || []).map((tech) => {
            const Icon = ICON_MAP[tech.iconName] || Database;
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
          {(techStackData.complianceShields || []).map((item, idx) => {
            const ShieldIcon = ShieldCheck;
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
                    {item.description}
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

