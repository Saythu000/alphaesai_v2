"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Bot,
  FileSearch,
  ShieldCheck,
  Cloud,
  Layers,
  Network,
  Cpu,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export interface FdeStep {
  id: string;
  number: string;
  title: string;
  description: string;
  targetNodeIds: string[];
}

export interface FdeNode {
  id: string;
  name: string;
  iconName: string;
  angle: number; // Angle in degrees for radial placement
}

const DEFAULT_NODES: FdeNode[] = [
  { id: "ai-agents", name: "AI Agents", iconName: "bot", angle: 270 },
  { id: "rag-systems", name: "RAG Systems", iconName: "filesearch", angle: 315 },
  { id: "security", name: "Security & Governance", iconName: "shield", angle: 0 },
  { id: "cloud", name: "Cloud Platform", iconName: "cloud", angle: 45 },
  { id: "platform", name: "Platform Engineering", iconName: "layers", angle: 90 },
  { id: "integrations", name: "Enterprise Integrations", iconName: "network", angle: 135 },
  { id: "automation", name: "Automation & Orchestration", iconName: "cpu", angle: 180 },
  { id: "data", name: "Data Engineering", iconName: "database", angle: 225 },
];

const DEFAULT_STEPS: FdeStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "DISCOVER",
    description: "Identify high-value AI use cases and align on measurable outcomes.",
    targetNodeIds: ["ai-agents", "rag-systems"],
  },
  {
    id: "step-2",
    number: "02",
    title: "DESIGN",
    description: "Architect secure, scalable solutions tailored to your tech stack.",
    targetNodeIds: ["security", "cloud"],
  },
  {
    id: "step-3",
    number: "03",
    title: "BUILD",
    description: "Engineer, integrate, and validate AI systems alongside your team.",
    targetNodeIds: ["data", "platform"],
  },
  {
    id: "step-4",
    number: "04",
    title: "DEPLOY",
    description: "Productionize with guardrails, monitoring, and enterprise governance.",
    targetNodeIds: ["automation", "integrations"],
  },
  {
    id: "step-5",
    number: "05",
    title: "OPTIMIZE",
    description: "Monitor outcomes, learn continuously, and compound value over time.",
    targetNodeIds: [
      "ai-agents",
      "rag-systems",
      "security",
      "cloud",
      "platform",
      "integrations",
      "automation",
      "data",
    ],
  },
];

const renderIcon = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case "database":
      return <Database className="w-5 h-5" />;
    case "bot":
      return <Bot className="w-5 h-5" />;
    case "filesearch":
      return <FileSearch className="w-5 h-5" />;
    case "shield":
      return <ShieldCheck className="w-5 h-5" />;
    case "cloud":
      return <Cloud className="w-5 h-5" />;
    case "layers":
      return <Layers className="w-5 h-5" />;
    case "network":
      return <Network className="w-5 h-5" />;
    case "cpu":
    default:
      return <Cpu className="w-5 h-5" />;
  }
};

interface Props {
  title?: string;
  badgeText?: string;
  steps?: FdeStep[];
  nodes?: FdeNode[];
}

export const FdeInteractiveHub: React.FC<Props> = ({
  title = "Working alongside you, every step",
  badgeText = "AlphaesAI FDE Engine",
  steps = DEFAULT_STEPS,
  nodes = DEFAULT_NODES,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through steps every 4.5 seconds unless user hovers/clicks
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, steps.length]);

  const currentStep = steps[activeStepIndex] || steps[0];
  const activeNodeIds = currentStep.targetNodeIds || [];

  return (
    <div className="w-full bg-[#160e09] border border-[#ddc1b0]/30 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden text-white font-['Inter']">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#964900]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* LEFT COLUMN: HUB & SPOKE INTERACTIVE DIAGRAM */}
        <div
          className="lg:col-span-7 flex items-center justify-center min-h-[420px] sm:min-h-[480px] relative select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Radial Container */}
          <div className="relative w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] flex items-center justify-center">
            {/* SVG Connecting Laser Beams */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <defs>
                <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#964900" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#ff9d42" stopOpacity="1" />
                  <stop offset="100%" stopColor="#964900" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {nodes.map((node) => {
                const isActive = activeNodeIds.includes(node.id);
                // Convert polar angle to Cartesian x, y coordinates
                const rad = (node.angle * Math.PI) / 180;
                // Center is 50%, 50%
                const radiusPercent = 38; // Radius percentage
                const x2 = 50 + radiusPercent * Math.cos(rad);
                const y2 = 50 + radiusPercent * Math.sin(rad);

                return (
                  <g key={`beam-${node.id}`}>
                    {/* Inactive ambient connector line */}
                    <line
                      x1="50%"
                      y1="50%"
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke={isActive ? "url(#beamGradient)" : "rgba(221, 193, 176, 0.2)"}
                      strokeWidth={isActive ? 2.5 : 1}
                      strokeDasharray={isActive ? "6 4" : undefined}
                    />

                    {/* Laser pulse animation on active beams */}
                    {isActive && (
                      <motion.line
                        x1="50%"
                        y1="50%"
                        x2={`${x2}%`}
                        y2={`${y2}%`}
                        stroke="#ffb07c"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 100, strokeDasharray: "15 80" }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* CENTRAL HUB BADGE */}
            <motion.div
              animate={{
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 0 25px rgba(150, 73, 0, 0.3)",
                  "0 0 45px rgba(255, 157, 66, 0.5)",
                  "0 0 25px rgba(150, 73, 0, 0.3)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] rounded-full bg-gradient-to-br from-[#382013] via-[#1c130d] to-[#0d0805] border-2 border-[#ff9d42]/70 flex flex-col items-center justify-center p-4 text-center shadow-2xl cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#964900] flex items-center justify-center text-white mb-1 shadow-md">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
              </div>
              <span className="font-['Hanken_Grotesk'] text-xs sm:text-sm font-black tracking-wider uppercase text-white leading-tight">
                AlphaesAI
              </span>
              <span className="font-['JetBrains_Mono'] text-[9px] sm:text-[10px] text-[#ffb07c] font-bold uppercase tracking-widest mt-0.5">
                FDE Core Hub
              </span>
              <span className="text-[8px] text-white/50 uppercase tracking-tighter mt-1">
                Embedded • Collaborative
              </span>
            </motion.div>

            {/* SATELLITE NODES (Positioned radially around 50%, 50%) */}
            {nodes.map((node) => {
              const isActive = activeNodeIds.includes(node.id);
              const rad = (node.angle * Math.PI) / 180;
              const radiusPercent = 38;
              const xPercent = 50 + radiusPercent * Math.cos(rad);
              const yPercent = 50 + radiusPercent * Math.sin(rad);

              return (
                <div
                  key={node.id}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${xPercent}%`,
                    top: `${yPercent}%`,
                  }}
                >
                  <motion.div
                    animate={
                      isActive
                        ? { scale: 1.08, y: [-2, 2, -2] }
                        : { scale: 1, y: [-3, 3, -3] }
                    }
                    transition={{
                      y: { duration: 3.5 + (node.angle % 3), repeat: Infinity, ease: "easeInOut" },
                      scale: { duration: 0.3 },
                    }}
                    className={`w-24 sm:w-28 p-2.5 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-colors backdrop-blur-md ${
                      isActive
                        ? "bg-[#964900]/95 border-[#ffb07c] shadow-[0_0_25px_rgba(255,157,66,0.7)] text-white"
                        : "bg-[#241710]/85 border-[#ddc1b0]/30 text-white/80 hover:border-[#ff9d42] hover:text-white"
                    }`}
                    onClick={() => {
                      const matchingStep = steps.findIndex((s) => s.targetNodeIds.includes(node.id));
                      if (matchingStep !== -1) {
                        setActiveStepIndex(matchingStep);
                      }
                    }}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center mb-1 ${
                        isActive ? "bg-white text-[#964900]" : "bg-white/10 text-[#ffb07c]"
                      }`}
                    >
                      {renderIcon(node.iconName)}
                    </div>
                    <span className="font-['Hanken_Grotesk'] text-[10px] sm:text-xs font-bold leading-tight">
                      {node.name}
                    </span>
                    {isActive && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#ff9d42] rounded-full border border-white shadow-sm"
                      />
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: 5-STEP INTERACTIVE PROCESS TIMELINE */}
        <div className="lg:col-span-5 space-y-4">
          <div className="mb-6">
            <span className="text-[11px] font-['JetBrains_Mono'] font-bold text-[#ffb07c] uppercase tracking-widest bg-[#964900]/30 border border-[#964900]/60 px-3 py-1 rounded-full inline-block mb-2">
              {badgeText}
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {title}
            </h2>
          </div>

          <div className="space-y-3">
            {steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;

              return (
                <motion.div
                  key={step.id}
                  onClick={() => {
                    setActiveStepIndex(idx);
                    setIsPaused(true);
                  }}
                  onMouseEnter={() => {
                    setActiveStepIndex(idx);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => setIsPaused(false)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-r from-[#964900]/95 to-[#542800]/95 border-[#ffb07c] shadow-lg text-white"
                      : "bg-[#241710]/60 border-[#4a3528]/60 text-white/70 hover:bg-[#332117] hover:border-[#964900]/60"
                  }`}
                >
                  {/* Left accent bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeAccentBar"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ffb07c]"
                    />
                  )}

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-['JetBrains_Mono'] text-xs font-black px-2.5 py-1 rounded-md ${
                          isActive
                            ? "bg-white text-[#964900]"
                            : "bg-white/10 text-[#ffb07c]"
                        }`}
                      >
                        {step.number}
                      </span>
                      <h3
                        className={`font-['Hanken_Grotesk'] text-base sm:text-lg font-extrabold ${
                          isActive ? "text-white" : "text-white/90"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[#ffb07c]"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    )}
                  </div>

                  <p className="font-['Inter'] text-xs sm:text-sm text-white/80 mt-2 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connected Nodes Badges */}
                  {isActive && step.targetNodeIds.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 pt-3 border-t border-white/15 flex flex-wrap gap-1.5 items-center"
                    >
                      <span className="text-[10px] font-['JetBrains_Mono'] text-white/60 font-bold uppercase tracking-wider mr-1">
                        Active Nodes:
                      </span>
                      {step.targetNodeIds.map((nid) => {
                        const targetNode = nodes.find((n) => n.id === nid);
                        if (!targetNode) return null;
                        return (
                          <span
                            key={nid}
                            className="px-2 py-0.5 rounded-full bg-white/20 text-white font-['JetBrains_Mono'] text-[10px] font-bold"
                          >
                            {targetNode.name}
                          </span>
                        );
                      })}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FdeInteractiveHub;
