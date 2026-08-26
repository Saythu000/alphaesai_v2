"use client";

import Link from "next/link";
import {
  Bot,
  Cpu,
  Workflow,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
  Code2,
} from "lucide-react";

const modules = [
  {
    step: "MODULE 01",
    title: "Autonomous Agent Architecture & Antigravity SDK",
    desc: "Master the foundations of agentic loop design, stateful memory management, and deterministic planning with the Antigravity SDK.",
    skills: ["State Graph Design", "Context Window Optimization", "Short & Long-term Memory Stores"],
  },
  {
    step: "MODULE 02",
    title: "Tool Calling, Function Execution & Dynamic Schema Binding",
    desc: "Learn to equip agents with structured JSON schemas, safe API execution sandboxes, and automatic retries for complex enterprise tools.",
    skills: ["OpenAPI Tool Binding", "Sandboxed Python Execution", "Self-Healing Tool Retries"],
  },
  {
    step: "MODULE 03",
    title: "Multi-Agent Systems & Hierarchical Swarm Routing",
    desc: "Architect multi-agent swarms where specialized subagents handle discrete tasks (Research, Refactoring, QA) with master controller orchestration.",
    skills: ["Subagent Lifecycle", "Inter-Agent Messaging", "Task Delegation Protocols"],
  },
  {
    step: "MODULE 04",
    title: "Enterprise AI Guardrails, Security & Human-In-The-Loop",
    desc: "Implement hard security boundaries against prompt injection, enforce role-based tool authorization, and integrate human approval loops.",
    skills: ["LlamaGuard & NeMo Scanners", "RBAC Tool Allowlisting", "Human-in-the-Loop Gateways"],
  },
];

export default function AgenticAiAcademy() {
  return (
    <div className="w-full bg-[#fff8f5] text-[#241913] min-h-screen">
      {/* Hero Header */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 border border-[#241913]/15 bg-[#fff1ea] px-4 py-1.5 rounded-full font-mono-tech text-xs font-semibold text-[#964900] mb-6 tracking-widest uppercase shadow-sm">
          <Bot className="w-4 h-4 text-[#964900]" />
          <span>AlphaesAI Academy — Deep Tech Track</span>
        </div>

        <h1 className="font-hanken text-4xl sm:text-6xl font-extrabold text-[#241913] mb-6 tracking-tight leading-tight">
          Agentic AI & Multi-Agent Engineering
        </h1>

        <p className="font-inter text-lg text-[#564336] max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          Master the art of building production-grade autonomous AI agents, tool-calling swarms, and self-healing agentic workflows using industrial-scale design patterns.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="/contact"
            className="bg-[#964900] text-white font-inter text-base px-8 py-3.5 rounded-md font-semibold hover:bg-[#7a3b00] transition-colors shadow-md text-center inline-flex items-center gap-2"
          >
            <span>Enroll in Agentic AI Track</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services/forward-deployed-ai-engineering"
            className="border border-[#241913]/20 bg-[#F3F3F3] text-[#241913] font-inter text-base px-8 py-3.5 rounded-md font-semibold hover:bg-[#fff1ea] transition-colors text-center"
          >
            Explore FDE Agent Capabilities
          </Link>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-16 bg-[#fff1ea] border-t border-b border-[#241913]/10">
        <div className="max-w-[1440px] mx-auto px-8 grid md:grid-cols-3 gap-8">
          <div className="bg-[#fff8f5] border border-[#241913]/15 rounded-2xl p-6 space-y-3 shadow-sm">
            <Cpu className="w-8 h-8 text-[#964900]" />
            <h3 className="font-hanken text-xl font-bold">Sub-100ms Execution</h3>
            <p className="font-inter text-xs text-[#564336]">
              Optimize prompt chaining and tool routing to achieve microsecond agent reactivity for high-throughput enterprise workloads.
            </p>
          </div>

          <div className="bg-[#fff8f5] border border-[#241913]/15 rounded-2xl p-6 space-y-3 shadow-sm">
            <Workflow className="w-8 h-8 text-[#964900]" />
            <h3 className="font-hanken text-xl font-bold">Hierarchical Swarms</h3>
            <p className="font-inter text-xs text-[#564336]">
              Deconstruct complex goals into parallel task streams delegated across specialized subagents with shared state synchronization.
            </p>
          </div>

          <div className="bg-[#fff8f5] border border-[#241913]/15 rounded-2xl p-6 space-y-3 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-[#964900]" />
            <h3 className="font-hanken text-xl font-bold">Zero-Trust Guardrails</h3>
            <p className="font-inter text-xs text-[#564336]">
              Protect agents against indirect prompt injection, data exfiltration, and unauthorized action execution with runtime interceptors.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Breakdown */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono-tech text-[#964900] uppercase tracking-widest mb-2 font-bold">
              Curriculum Roadmap
            </div>
            <h2 className="font-hanken text-3xl sm:text-4xl font-bold text-[#241913]">
              What You Will Build & Master
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
              Ready to Build Industrial Agentic AI?
            </h2>
            <p className="font-inter text-sm text-[#f3ded3]/80 max-w-xl mx-auto leading-relaxed">
              Join senior engineers and enterprise architects in our intensive hands-on Agentic AI program.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#964900] hover:bg-[#b85b00] text-white font-inter text-sm font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg"
            >
              <span>Request Academy Briefing & Syllabus</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
