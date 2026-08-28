"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Cpu, Target, Brain, Lock, ArrowRight, Activity, CheckCircle2, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useCMS } from "@/context/CMSContext";

const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  Cpu,
  Target,
  Brain,
  Lock,
};


export function HubSpokeArchitecture() {
  const { data } = useCMS();
  const archData = data?.homepage?.hubSpokeArch || {
    badgeText: "System Architecture",
    title: "Interactive Enterprise AI & Data Analytics Pipeline",
    subtitle: "Click or hover any architectural node to inspect data processing stages, technology stack integrations, and latency metrics.",
    nodes: []
  };

  const nodes = archData.nodes || [];
  const [activeNodeId, setActiveNodeId] = useState<string>(nodes[0]?.id || "ingestion");
  const [selectedModalNodeId, setSelectedModalNodeId] = useState<string | null>(null);

  const activeNode = nodes.find(n => n.id === activeNodeId) || nodes[0] || {
    id: "ingestion",
    title: "Data Ingestion",
    subtitle: "",
    badge: "STAGE 01",
    iconName: "Database",
    stack: [],
    metrics: [],
    description: "",
    security: ""
  };

  const selectedModalNode = nodes.find(n => n.id === selectedModalNodeId);

  return (
    <section className="py-20 px-4 bg-[#fff8f5] border-b border-[#ddc1b0] relative">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: SMOOTH_EASE }}
          className="text-center mb-12"
        >
          <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#964900] uppercase tracking-widest bg-[#fff1ea] border border-[#ddc1b0] px-3.5 py-1.5 rounded-full inline-block mb-3">
            {archData.badgeText}
          </span>
          <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#241913] mb-3">
            {archData.title}
          </h2>
          <p className="font-['Inter'] text-base text-[#564336] max-w-2xl mx-auto">
            {archData.subtitle}
          </p>
        </motion.div>


        {/* Main Interactive Diagram Card Container */}
        <Card className="w-full bg-[#1c130d] border-2 border-[#ddc1b0] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-white">
          {/* Subtle Orange Glow Backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff5722]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Grid Layout: Left Interactive Node Hub / Right Inspector Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 items-center">
            
            {/* LEFT 7-COL: Interactive Nodes & Visual Connections */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-['JetBrains_Mono'] text-xs text-[#ffa066] uppercase tracking-wider font-semibold flex items-center gap-2">
                  <Activity className="w-4 h-4 animate-pulse text-[#ff7338]" />
                  <span>Pipeline Architecture Flow</span>
                </span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-white/50">
                  Select a node to inspect
                </span>
              </div>

              {nodes.map((node) => {
                const NodeIcon = ICON_MAP[node.iconName] || Database;
                const isActive = activeNode?.id === node.id;
                return (
                  <motion.button
                    key={node.id}
                    onClick={() => {
                      setActiveNodeId(node.id);
                      setSelectedModalNodeId(node.id);
                    }}
                    onMouseEnter={() => setActiveNodeId(node.id)}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                      isActive
                        ? "bg-[#281c14] border-[#ff7338] shadow-[0_0_20px_rgba(255,115,56,0.25)]"
                        : "bg-[#211710]/70 border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-lg border transition-colors ${
                          isActive
                            ? "bg-[#ff5722] text-white border-[#ffa066]"
                            : "bg-white/5 text-white/70 border-white/10 group-hover:text-white"
                        }`}
                      >
                        <NodeIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-['JetBrains_Mono'] text-[10px] font-bold text-[#ffa066] uppercase">
                            {node.badge}
                          </span>
                          <span className="font-['Hanken_Grotesk'] text-base font-bold text-white">
                            {node.title}
                          </span>
                        </div>
                        <p className="font-['Inter'] text-xs text-white/60 mt-0.5">
                          {node.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {isActive && (
                        <span className="hidden sm:inline-flex items-center gap-1 font-['JetBrains_Mono'] text-[10px] text-[#ffa066] font-bold">
                          <span>ACTIVE NODE</span>
                        </span>
                      )}
                      <ArrowRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? "text-[#ff7338] translate-x-1" : "text-white/30 group-hover:text-white"
                        }`}
                      />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* RIGHT 5-COL: Active Node Inspector Box */}
            <div className="lg:col-span-5">
              {activeNode && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNode.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, ease: SMOOTH_EASE }}
                    className="p-6 rounded-2xl bg-[#281c14] border-2 border-[#ff7338]/40 shadow-xl flex flex-col gap-5 relative overflow-hidden"
                  >
                    {/* Inspector Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <span className="font-['JetBrains_Mono'] text-[10px] font-bold text-[#ffa066] uppercase">
                          {activeNode.badge} • INSPECTION PANEL
                        </span>
                        <h3 className="font-['Hanken_Grotesk'] text-xl font-bold text-white">
                          {activeNode.title}
                        </h3>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#ff5722]/20 border border-[#ff5722] text-[#ffa066]">
                        {(() => {
                          const IconComp = ICON_MAP[activeNode.iconName] || Database;
                          return <IconComp className="w-5 h-5" />;
                        })()}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-['Inter'] text-xs text-white/80 leading-relaxed">
                      {activeNode.description}
                    </p>

                    {/* Metrics Bar */}
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-black/40 border border-white/10">
                      {(activeNode.metrics || []).map((m) => (
                        <div key={m.label} className="flex flex-col text-center">
                          <span className="font-['Hanken_Grotesk'] text-sm font-extrabold text-[#ffa066]">
                            {m.value}
                          </span>
                          <span className="font-['JetBrains_Mono'] text-[9px] text-white/60 line-clamp-1">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Integrated Tech Stack Tags */}
                    <div>
                      <span className="font-['JetBrains_Mono'] text-[11px] text-white/60 block mb-2 font-semibold">
                        Integrated Tech Stack & Analytics Tools:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {(activeNode.stack || []).map((t) => (
                          <span
                            key={t}
                            className="font-['JetBrains_Mono'] text-[10px] px-2.5 py-1 rounded-md bg-white/10 text-white border border-white/15"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Security Guardrail Note */}
                    <div className="pt-2 border-t border-white/10 flex items-start gap-2 text-[11px] text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-[#ff7338] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Security Guardrail:</strong> {activeNode.security}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </Card>
      </div>

      {/* Modal Popup for Deep Inspection when Node is Clicked */}
      <AnimatePresence>
        {selectedModalNode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedModalNodeId(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: SMOOTH_EASE }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1c130d] border-2 border-[#ff7338] p-6 sm:p-8 rounded-2xl max-w-lg w-full text-white shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedModalNodeId(null)}
                className="absolute top-4 right-4 text-white/60 hover:text-white p-1 rounded-full bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-[#ff5722] text-white">
                  {(() => {
                    const IconComp = ICON_MAP[selectedModalNode.iconName] || Database;
                    return <IconComp className="w-6 h-6" />;
                  })()}
                </div>
                <div>
                  <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#ffa066]">
                    {selectedModalNode.badge}
                  </span>
                  <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold">
                    {selectedModalNode.title}
                  </h3>
                </div>
              </div>

              <p className="font-['Inter'] text-sm text-white/80 leading-relaxed mb-6">
                {selectedModalNode.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-['JetBrains_Mono'] text-xs text-[#ffa066] font-bold uppercase mb-2">
                    Key Performance Metrics
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {(selectedModalNode.metrics || []).map((m) => (
                      <div key={m.label} className="p-3 rounded-lg bg-black/50 border border-white/10 text-center">
                        <div className="font-['Hanken_Grotesk'] text-base font-bold text-white">
                          {m.value}
                        </div>
                        <div className="font-['JetBrains_Mono'] text-[9px] text-white/60">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-['JetBrains_Mono'] text-xs text-[#ffa066] font-bold uppercase mb-2">
                    Supported Tools & Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {(selectedModalNode.stack || []).map((item) => (
                      <span key={item} className="font-['JetBrains_Mono'] text-xs px-3 py-1 rounded-md bg-white/10 border border-white/20">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedModalNodeId(null)}
                className="mt-6 w-full py-3 bg-[#964900] hover:bg-[#723600] text-white font-['JetBrains_Mono'] font-bold text-xs rounded-full transition-colors"
              >
                Close Node Inspection
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
