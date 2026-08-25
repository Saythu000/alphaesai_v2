"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FdeInteractiveHub from "@/components/FdeInteractiveHub";
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  TrendingUp,
  Code2,
  Sparkles,
  Lock,
  Workflow,
  Server,
  HelpCircle,
} from "lucide-react";

// Capability Pillars
const pillars = [
  "AI Agents",
  "Cloud & Platform Engineering",
  "Cybersecurity & Governance",
  "RAG Systems",
  "FinOps",
  "Enterprise Integrations",
  "Automation",
  "Data Engineering",
];

// Gaps we bridge
const gaps = [
  {
    title: "Systemic Integration",
    desc: "We embed AI into your existing tech stack, avoiding siloed solutions and brittle wrappers.",
    icon: Workflow,
  },
  {
    title: "Operational Readiness",
    desc: "We solve for data dependencies, governance, and security from Day 1—not as an afterthought.",
    icon: Lock,
  },
  {
    title: "Infrastructure Efficiency",
    desc: "We manage the 'hidden' costs of AI, from inference optimization to cloud overhead reduction.",
    icon: Zap,
  },
  {
    title: "The Last Mile",
    desc: "We transform successful demos into resilient, production systems that deliver measurable ROI.",
    icon: TrendingUp,
  },
];

// 5-Phase Deployment Model
const phases = [
  {
    step: "01",
    name: "Discovery & Audit",
    summary:
      "We analyze your bottlenecks and identify high-leverage opportunities aligned with your core business objectives.",
    detail:
      "Deep dive into data pipelines, security boundaries, cloud infrastructure, and current pain points to define exact success metrics.",
  },
  {
    step: "02",
    name: "Rapid Prototyping",
    summary:
      "We build high-fidelity proofs of concept using your real data, validating technical viability before committing to scale.",
    detail:
      "Rapidly test agentic loops, RAG accuracy, and data flows in a sandboxed environment to eliminate architecture risk early.",
  },
  {
    step: "03",
    name: "Production Implementation",
    summary:
      "We deploy secure, scalable systems integrated directly into your existing enterprise infrastructure.",
    detail:
      "Full-stack engineering: model hosting, zero-downtime CI/CD pipelines, container orchestration, and real-time observability.",
  },
  {
    step: "04",
    name: "Enablement",
    summary:
      "We don't just hand off code; we train your internal team to operate, monitor, and extend the system with complete confidence.",
    detail:
      "Runbooks, interactive workshops, architecture documentation, and paired coding sessions to ensure operational independence.",
  },
  {
    step: "05",
    name: "Continuous Engineering",
    summary:
      "We remain your embedded partner, providing optimization, tuning, and feature expansion as your requirements evolve.",
    detail:
      "Ongoing model performance audits, latency reduction, cost engineering, and seamless integration of emerging AI capabilities.",
  },
];

// Expertise in Practice
const expertise = [
  {
    category: "AI & Agents",
    desc: "Deploying agentic workflows, RAG systems, and lead-gen automation (powered by our OneAI Assist engine).",
    icon: Cpu,
    tags: ["Agentic Frameworks", "Production RAG", "OneAI Assist Engine"],
  },
  {
    category: "Cloud & Platform",
    desc: "Modernizing infrastructure with secure, resilient, and CI/CD-ready cloud architectures.",
    icon: Server,
    tags: ["AWS / Azure / GCP", "Kubernetes", "Infrastructure as Code"],
  },
  {
    category: "Governance & Security",
    desc: "Engineering 'secure-by-design' AI frameworks that satisfy compliance requirements and mitigate model risks.",
    icon: ShieldCheck,
    tags: ["PII Sanitization", "RBAC Controls", "Model Audit Trails"],
  },
  {
    category: "FinOps & Cost Engineering",
    desc: "We optimize GPU and cloud utilization to ensure scaling does not compromise your operational budget.",
    icon: Layers,
    tags: ["Inference Cost Cuts", "GPU Scheduling", "Cloud Right-Sizing"],
  },
];

// Why Choose AlphaesAI
const differentiators = [
  {
    title: "Code Over Decks",
    desc: "We are builders who advise, not consultants who theorize. Every engagement ends in working, production code.",
    icon: Code2,
  },
  {
    title: "Proven by Practice",
    desc: "OneAI Assist and DrGodly are living testaments to the engineering rigor and architecture standards we bring to your team.",
    icon: Sparkles,
  },
  {
    title: "Full-Stack Ownership",
    desc: "We treat AI, security, and cloud infrastructure as a single, cohesive engineering system with end-to-end accountability.",
    icon: Layers,
  },
  {
    title: "Designed for Independence",
    desc: "Our goal is your self-sufficiency. We document everything, transfer complete knowledge, and leave your team empowered.",
    icon: CheckCircle2,
  },
];

// FAQ list
const faqs = [
  {
    q: "How does FDE differ from traditional consulting?",
    a: "Consulting delivers decks and high-level strategy slides; we deliver working code and production systems. We stay embedded in your environment until the project is operational, accountable for the real-world performance, security, and reliability of the final solution.",
  },
  {
    q: "Is this staff augmentation?",
    a: "No. Staff augmentation simply fills a seat with extra hours. Our Forward Deployed Engineers bring a specific methodology, pre-tested architecture components, and senior-level domain expertise to take complete ownership of delivery and outcomes.",
  },
  {
    q: "How soon can we start?",
    a: "Engagement starts with a technical discovery briefing to align your infrastructure with your core business goals. We typically move from initial audit to first working proof of concept in weeks, not months.",
  },
];

export default function ForwardDeployedEngineeringPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <div className="min-h-screen bg-[#fff8f5] text-[#241913] font-['Inter'] selection:bg-[#964900] selection:text-white">
      <main className="pt-24 sm:pt-28 pb-20">
        {/* HERO SECTION */}
        <section className="relative px-6 sm:px-12 max-w-6xl mx-auto pt-8 pb-16">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#964900]/10 via-[#ffeedd]/40 to-transparent blur-3xl -z-10 rounded-full" />

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#964900] mb-6 font-bold uppercase tracking-wider"
          >
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#564336]">Forward Deployed AI Engineering</span>
          </motion.div>

          {/* Page Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffeade] border border-[#ddc1b0] text-[#964900] text-xs font-['JetBrains_Mono'] font-bold mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AlphaesAI — Forward Deployed Engineering</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold font-['JetBrains_Mono'] tracking-tight text-[#241913] leading-[1.1] max-w-4xl"
          >
            Built to Deploy. <br />
            <span className="text-[#964900]">Accountable for Results.</span> <br />
            Production-Grade AI.
          </motion.h1>

          {/* Subtext Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-[#564336] max-w-2xl font-normal leading-relaxed"
          >
            We don’t just advise; we operate. Our senior engineers integrate directly into your organization, taking full ownership from architecture to production stability.
          </motion.p>

          {/* Capability Pillars Pill Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-2 items-center"
          >
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#241913] uppercase tracking-wider mr-2">
              Capability Pillars:
            </span>
            {pillars.map((pillar) => (
              <span
                key={pillar}
                className="px-3 py-1 rounded-full bg-white border border-[#ddc1b0]/80 shadow-sm text-xs font-['JetBrains_Mono'] text-[#564336] font-medium hover:border-[#964900] hover:text-[#964900] transition-colors"
              >
                {pillar}
              </span>
            ))}
          </motion.div>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="absolute right-0 inset-y-0 w-[calc(100%-1.25rem)] rounded-xl bg-[#964900]" />
              <span className="relative z-10 px-6 py-3.5 rounded-xl bg-[#241913] text-white text-sm font-['JetBrains_Mono'] font-bold tracking-wide">
                Schedule an Executive Briefing
              </span>
              <span className="relative -left-px z-10 w-11 h-11 rounded-xl flex items-center justify-center text-white bg-[#964900]">
                <ArrowDownRight className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45" />
              </span>
            </Link>

            <a
              href="#interactive-engine"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#ddc1b0] text-sm font-['JetBrains_Mono'] font-bold text-[#241913] hover:bg-[#ffeade] hover:border-[#964900] transition-colors"
            >
              <span>Explore Interactive Engine</span>
              <ArrowRight className="w-4 h-4 text-[#964900]" />
            </a>
          </motion.div>
        </section>

        {/* INTERACTIVE ENGINE SHOWCASE (HUB & SPOKE DIAGRAM) */}
        <section id="interactive-engine" className="py-12 px-6 sm:px-12 max-w-6xl mx-auto">
          <FdeInteractiveHub
            badgeText="AlphaesAI FDE Engine"
            title="Working alongside you, every step"
          />
        </section>

        {/* SECTION 1: THE CORE - ENGINEERING OWNERSHIP */}
        <section className="py-16 px-6 sm:px-12 bg-white border-y border-[#ddc1b0]/50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffeade] text-[#964900] text-xs font-['JetBrains_Mono'] font-bold uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5" />
                <span>The Core: Engineering Ownership</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-['JetBrains_Mono'] text-[#241913] leading-tight">
                Forward Deployed Engineering (FDE)
              </h2>
              <p className="text-base sm:text-lg text-[#564336] leading-relaxed">
                Forward Deployed Engineering (FDE) is our alternative to the &apos;pilot purgatory&apos; that traps most enterprise AI initiatives. We don’t just advise; we operate. Our senior engineers integrate directly into your organization, working shoulder-to-shoulder with your team to architect, build, and deploy production-grade AI and cloud infrastructure.
              </p>
              <p className="text-base sm:text-lg text-[#564336] leading-relaxed">
                We don’t walk away after the pitch—we stay until the system is stable, scalable, and operational in your environment.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold text-[#964900] hover:text-[#723600] group"
                >
                  <span>Schedule an Executive Briefing</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Visual Accent Card */}
            <div className="lg:col-span-5 bg-[#fff8f5] border border-[#ddc1b0] rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#964900]/10 rounded-full blur-2xl" />
              <h3 className="text-lg font-['JetBrains_Mono'] font-bold text-[#241913] mb-4">
                What Sets FDE Apart
              </h3>
              <ul className="space-y-4">
                {[
                  "Embedded senior engineers inside your workflow",
                  "Direct code ownership, not high-level strategy slides",
                  "Zero lock-in: full documentation & knowledge transfer",
                  "Accountable for P99 latency, security & GPU cost",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#564336]">
                    <CheckCircle2 className="w-5 h-5 text-[#964900] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE REALITY - DEMO TO PRODUCTION GAP */}
        <section className="py-20 px-6 sm:px-12 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffeade] text-[#964900] text-xs font-['JetBrains_Mono'] font-bold uppercase tracking-wider mb-4">
              <span>The Reality</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-['JetBrains_Mono'] text-[#241913] tracking-tight">
              The Demo-to-Production Gap
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#564336] leading-relaxed">
              Most AI initiatives fail not because the technology is flawed, but because the delivery model is. A prototype is not a product. Bringing AI into a complex enterprise environment requires more than a clever algorithm—it demands rigorous engineering, robust security, and seamless integration.
            </p>
          </div>

          {/* 4 Gaps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gaps.map((gap, idx) => {
              const IconComp = gap.icon;
              return (
                <motion.div
                  key={gap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border border-[#ddc1b0]/80 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-[#964900] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ffeade] flex items-center justify-center text-[#964900] mb-5 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-['JetBrains_Mono'] font-bold text-[#241913] mb-2">
                    {gap.title}
                  </h3>
                  <p className="text-sm text-[#564336] leading-relaxed">{gap.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: OUR 5-PHASE DEPLOYMENT MODEL */}
        <section id="phases" className="py-20 px-6 sm:px-12 bg-[#241913] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#964900]/30 border border-[#964900] text-[#ffb07c] text-xs font-['JetBrains_Mono'] font-bold uppercase tracking-wider mb-4">
                <span>Methodology</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-['JetBrains_Mono'] text-white tracking-tight">
                Our 5-Phase Deployment Model
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#ddc1b0] leading-relaxed">
                We follow a structured, disciplined process designed to minimize technical risk and accelerate time-to-market.
              </p>
            </div>

            {/* Interactive Timeline Tabs / Accordion */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Selector List */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                {phases.map((p, index) => {
                  const isActive = activePhase === index;
                  return (
                    <button
                      key={p.step}
                      onClick={() => setActivePhase(index)}
                      className={`text-left p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                        isActive
                          ? "bg-[#964900] border-[#ffb07c] shadow-lg text-white"
                          : "bg-[#2d2019] border-[#443329] text-[#ddc1b0] hover:bg-[#382920]"
                      }`}
                    >
                      <span
                        className={`font-['JetBrains_Mono'] font-bold text-lg ${
                          isActive ? "text-white" : "text-[#964900]"
                        }`}
                      >
                        {p.step}
                      </span>
                      <div>
                        <div className="font-['JetBrains_Mono'] font-bold text-base text-white">
                          {p.name}
                        </div>
                        <div className="text-xs line-clamp-1 opacity-80 mt-1 font-['Inter']">
                          {p.summary}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Detail Preview Box */}
              <div className="lg:col-span-7 bg-[#1b120c] border border-[#443329] rounded-3xl p-8 lg:p-10 min-h-[360px] flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-8xl font-['JetBrains_Mono'] font-black text-[#38261b] select-none pointer-events-none">
                  {phases[activePhase].step}
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="inline-block text-xs font-['JetBrains_Mono'] font-bold uppercase tracking-widest text-[#ffb07c]">
                    Phase {phases[activePhase].step} Detail
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-['JetBrains_Mono'] font-bold text-white">
                    {phases[activePhase].name}
                  </h3>
                  <p className="text-base sm:text-lg text-[#ddc1b0] leading-relaxed">
                    {phases[activePhase].summary}
                  </p>
                  <div className="p-4 rounded-xl bg-[#2d2019] border border-[#443329] text-sm text-[#e8d5cb] leading-relaxed">
                    <strong className="text-white font-['JetBrains_Mono']">Key Deliverables: </strong>
                    {phases[activePhase].detail}
                  </div>
                </div>

                <div className="relative z-10 pt-6 border-t border-[#443329] flex items-center justify-between mt-6">
                  <span className="text-xs font-['JetBrains_Mono'] text-[#a88f80]">
                    Phase {activePhase + 1} of 5
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-['JetBrains_Mono'] font-bold text-[#ffb07c] hover:underline"
                  >
                    <span>Start Discovery Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: EXPERTISE IN PRACTICE */}
        <section className="py-20 px-6 sm:px-12 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffeade] text-[#964900] text-xs font-['JetBrains_Mono'] font-bold uppercase tracking-wider mb-4">
              <span>Core Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-['JetBrains_Mono'] text-[#241913] tracking-tight">
              Expertise in Practice
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#564336] leading-relaxed">
              We specialize across 4 essential domains of modern enterprise software and AI engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.category}
                  className="bg-white border border-[#ddc1b0] rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-[#964900] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#ffeade] flex items-center justify-center text-[#964900]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-['JetBrains_Mono'] font-bold text-[#241913]">
                        {item.category}
                      </h3>
                    </div>
                    <p className="text-sm text-[#564336] leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#ddc1b0]/40">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-[#fff8f5] border border-[#ddc1b0]/60 text-[11px] font-['JetBrains_Mono'] text-[#964900] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: WHY CHOOSE ALPHAESAI */}
        <section className="py-20 px-6 sm:px-12 bg-white border-y border-[#ddc1b0]/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffeade] text-[#964900] text-xs font-['JetBrains_Mono'] font-bold uppercase tracking-wider mb-4">
                <span>Our Differentiator</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-['JetBrains_Mono'] text-[#241913] tracking-tight">
                Why Choose AlphaesAI?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((d, i) => {
                const IconComp = d.icon;
                return (
                  <motion.div
                    key={d.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl p-6 shadow-sm hover:border-[#964900] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#ffeade] flex items-center justify-center text-[#964900] mb-4">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-['JetBrains_Mono'] font-bold text-[#241913] mb-2">
                        {d.title}
                      </h3>
                      <p className="text-xs text-[#564336] leading-relaxed">{d.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQ */}
        <section className="py-20 px-6 sm:px-12 max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffeade] text-[#964900] text-xs font-['JetBrains_Mono'] font-bold uppercase tracking-wider mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['JetBrains_Mono'] text-[#241913] tracking-tight">
              Got Questions?
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="bg-white border border-[#ddc1b0] rounded-2xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-['JetBrains_Mono'] font-bold text-base sm:text-lg text-[#241913] hover:text-[#964900] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#964900] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-sm text-[#564336] leading-relaxed border-t border-[#ddc1b0]/40 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* FINAL CTA BANNER */}
        <section className="px-6 sm:px-12 max-w-5xl mx-auto pt-8">
          <div className="bg-gradient-to-r from-[#241913] via-[#38261b] to-[#964900] text-white rounded-3xl p-10 sm:p-14 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            <h2 className="text-3xl sm:text-5xl font-extrabold font-['JetBrains_Mono'] mb-4 tracking-tight">
              Ready to Move from Experiment to Production?
            </h2>
            <p className="text-lg sm:text-xl text-[#ffeedd] max-w-xl mx-auto mb-8 font-normal">
              Let’s build something that works. Book a technical discovery briefing with our senior engineers today.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center shadow-2xl hover:scale-105 transition-transform"
            >
              <span className="absolute right-0 inset-y-0 w-[calc(100%-1.25rem)] rounded-xl bg-[#964900]" />
              <span className="relative z-10 px-8 py-4 rounded-xl bg-[#fff8f5] text-[#241913] text-sm font-['JetBrains_Mono'] font-bold tracking-wide">
                Schedule an Executive Briefing
              </span>
              <span className="relative -left-px z-10 w-12 h-12 rounded-xl flex items-center justify-center text-white bg-[#964900]">
                <ArrowDownRight className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45" />
              </span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
