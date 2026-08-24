"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Database,
  Gauge,
  TrendingDown,
  Activity,
  Layers,
  ShieldCheck,
  Zap,
  Server,
  HelpCircle,
  Clock,
  DollarSign,
  AlertTriangle,
  Flame,
  LineChart,
} from "lucide-react";

// Capabilities Pills
const capabilities = [
  "Query Optimization",
  "Index Tuning",
  "PostgreSQL & MySQL",
  "Connection Pooling",
  "Cloud Cost Optimization",
  "Scaling Architecture",
];

// 5 Signs it's time to optimize
const signs = [
  {
    title: "Performance Drift",
    desc: "Application response times climb continuously as your data volume grows.",
    icon: Clock,
  },
  {
    title: "Hidden Costs",
    desc: "Cloud infrastructure bills rising steeply without a clear correlation to active user growth.",
    icon: DollarSign,
  },
  {
    title: "Resource Contention",
    desc: "Unpredictable CPU, I/O, or RAM memory spikes that cause intermittent query timeouts.",
    icon: Flame,
  },
  {
    title: "Infrastructure Debt",
    desc: "Engineers spending valuable hours firefighting database issues instead of shipping features.",
    icon: AlertTriangle,
  },
  {
    title: "Connection Exhaustion",
    desc: "Application services struggling to maintain stable database connection pools under load.",
    icon: Activity,
  },
];

// Full Data Stack Offerings
const services = [
  {
    title: "Database Health Assessment",
    desc: "A diagnostic audit of your schema, execution plans, index efficiency, and configuration. You get a prioritized roadmap of high-impact fixes.",
    icon: Gauge,
    bullets: ["Execution plan review", "Index bloat analysis", "Schema health checks"],
  },
  {
    title: "Query & Index Tuning",
    desc: "We rewrite slow queries, optimize execution plans, and clean up index bloat to drastically reduce latency and resource consumption.",
    icon: Zap,
    bullets: ["Slow query rewrites", "Composite indexing", "P99 latency reduction"],
  },
  {
    title: "FinOps & Cost Engineering",
    desc: "We right-size your infrastructure, optimize IOPS, and manage reserved capacity to cut your database spend by 30–50% without performance loss.",
    icon: TrendingDown,
    bullets: ["30-50% cloud cost cuts", "IOPS right-sizing", "Auto-scaling rules"],
  },
  {
    title: "Application-Database Bridge",
    desc: "We fix N+1 query patterns, connection pooling issues, and inefficient ORM behaviors that look like database problems but are actually application-level inefficiencies.",
    icon: Layers,
    bullets: ["N+1 query eradication", "PgBouncer / Proxy setup", "ORM query audits"],
  },
  {
    title: "Scaling & Architecture",
    desc: "Moving you from 'struggling to keep up' to a robust architecture with read replicas, table partitioning, and caching strategies.",
    icon: Server,
    bullets: ["Read replicas & sharding", "Redis caching layer", "Partitioning strategies"],
  },
];

// 4-Phase Model
const phases = [
  {
    step: "01",
    name: "Assess",
    summary: "We map your workload to identify high-impact bottlenecks and query inefficiencies.",
    detail: "Deep-dive telemetry analysis using pg_stat_statements, slow query logs, cloud metrics, and schema inspection.",
  },
  {
    step: "02",
    name: "Optimize",
    summary: "We implement structural fixes—query rewriting, indexing, and configuration tuning.",
    detail: "Directly apply index creation, query refactoring, connection pool sizing, and parameter tuning in your environment.",
  },
  {
    step: "03",
    name: "Stabilize",
    summary: "We establish monitoring and operational hygiene to prevent performance regression.",
    detail: "Configure alerts, latency thresholds, automated query profiling, and regression checks in your CI/CD pipeline.",
  },
  {
    step: "04",
    name: "Scale",
    summary: "We architect your database systems for the next order of magnitude in user and data growth.",
    detail: "Implement read replicas, connection proxying, archival policies, and horizontal scaling strategies.",
  },
];

// Engagement Options
const engagementTiers = [
  {
    name: "Database Health Check",
    badge: "Diagnostic Audit",
    target: "For teams needing a clear diagnostic path and immediate visibility.",
    deliverables: [
      "Full Database & Query Audit",
      "Findings & Bottleneck Report",
      "Prioritized Fix Roadmap",
    ],
    highlight: false,
  },
  {
    name: "Performance Optimization",
    badge: "Most Popular",
    target: "For teams with active performance or escalating cloud cost bottlenecks.",
    deliverables: [
      "Full Diagnostic Audit",
      "Query & Index Implementation",
      "Configuration & Pool Tuning",
      "Before/After Latency Benchmarking",
    ],
    highlight: true,
  },
  {
    name: "Continuous Database Optimization",
    badge: "Ongoing Partnership",
    target: "For teams needing ongoing DB expertise without a full-time DBA hire.",
    deliverables: [
      "Real-Time Telemetry Monitoring",
      "Ongoing Query Optimization",
      "Capacity Planning & Scaling",
      "Monthly Reviews & Cost Audits",
    ],
    highlight: false,
  },
];

// Why AlphaesAI
const differentiators = [
  {
    title: "Root Cause Focus",
    desc: "We don't just recommend bigger cloud instances; we fix the inefficient code and configurations driving the bill.",
    icon: Zap,
  },
  {
    title: "Outcome-Driven",
    desc: "We target measurable KPIs: query latency reduction, cloud spend savings (30-50%), and zero-downtime stability.",
    icon: LineChart,
  },
  {
    title: "Cloud-Native Expertise",
    desc: "We work across AWS, Azure, and GCP with deep production experience in RDS, Aurora, Neon, Supabase, PostgreSQL, and MySQL.",
    icon: Database,
  },
  {
    title: "Production-Ready",
    desc: "Every fix we propose is designed and benchmarked for real-world production traffic, not staging environments.",
    icon: ShieldCheck,
  },
];

// FAQ list
const faqs = [
  {
    q: "Do we need to rewrite our application?",
    a: "Usually, no. We isolate bottlenecks in queries, indexing, and database configuration. We only suggest application-level code changes if an inefficient ORM or N+1 query pattern is the definitive source of the performance drop.",
  },
  {
    q: "How is this different from just adding more compute?",
    a: "Adding compute is a temporary band-aid that permanently increases your monthly cloud burn. We fix the underlying execution efficiency issues—a one-time investment that reduces long-term operational costs while making the system run faster.",
  },
  {
    q: "What database technologies do you support?",
    a: "We are platform-agnostic, working across AWS, Azure, and Google Cloud, with deep, specialized expertise in managed databases like Amazon RDS, Aurora, Neon, Supabase, self-hosted PostgreSQL, MySQL, and MongoDB.",
  },
];

export default function DatabaseOptimizationPage() {
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
            <span className="text-[#564336]">Database Performance & Cloud Optimization</span>
          </motion.div>

          {/* Page Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffeade] border border-[#ddc1b0] text-[#964900] text-xs font-['JetBrains_Mono'] font-bold mb-6"
          >
            <Database className="w-3.5 h-3.5" />
            <span>Database Performance & Cloud Optimization</span>
          </motion.div>

          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-xs font-['JetBrains_Mono'] font-bold text-[#964900] uppercase tracking-widest mb-3"
          >
            FASTER · MORE RELIABLE · LOWER COST
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold font-['JetBrains_Mono'] tracking-tight text-[#241913] leading-[1.1] max-w-4xl"
          >
            Make Your Database <br />
            <span className="text-[#964900]">Faster, Leaner,</span> and Ready to Scale.
          </motion.h1>

          {/* Hero Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-[#564336] max-w-2xl font-normal leading-relaxed"
          >
            We identify bottlenecks, eliminate expensive query inefficiencies, and architect scalable database systems. We solve performance issues at the root—without requiring full-scale application rewrites.
          </motion.p>

          {/* Capability Pills Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-2 items-center"
          >
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#241913] uppercase tracking-wider mr-2">
              Capabilities:
            </span>
            {capabilities.map((cap) => (
              <span
                key={cap}
                className="px-3 py-1 rounded-full bg-white border border-[#ddc1b0]/80 shadow-sm text-xs font-['JetBrains_Mono'] text-[#564336] font-medium hover:border-[#964900] hover:text-[#964900] transition-colors"
              >
                {cap}
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
                Book a Database Assessment
              </span>
              <span className="relative -left-px z-10 w-11 h-11 rounded-xl flex items-center justify-center text-white bg-[#964900]">
                <ArrowDownRight className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45" />
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#ddc1b0] text-sm font-['JetBrains_Mono'] font-bold text-[#241913] hover:bg-[#ffeade] hover:border-[#964900] transition-colors"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-4 h-4 text-[#964900]" />
            </Link>
          </motion.div>
        </section>

        {/* SECTION 1: THE CHALLENGE */}
        <section className="py-16 px-6 sm:px-12 bg-white border-y border-[#ddc1b0]/50">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffeade] text-[#964900] text-xs font-['JetBrains_Mono'] font-bold uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>The Challenge</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-['JetBrains_Mono'] text-[#241913] leading-tight">
                Your Database Is Likely Costing You More Than It Should
              </h2>
              <p className="text-base sm:text-lg text-[#564336] leading-relaxed">
                Performance issues rarely appear as catastrophic failures. They show up as gradual drift—increasing latency, creeping cloud bills, and unpredictable CPU spikes. Most teams react by throwing more compute at the problem, which masks the issue while inflating monthly costs. We stop the cycle of over-provisioning and start optimizing the architecture.
              </p>
            </div>

            {/* 5 Signs Grid */}
            <div>
              <h3 className="text-xl font-['JetBrains_Mono'] font-bold text-[#241913] mb-6">
                Signs It’s Time to Optimize:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {signs.map((sign, idx) => {
                  const IconComp = sign.icon;
                  return (
                    <motion.div
                      key={sign.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="bg-[#fff8f5] border border-[#ddc1b0] rounded-2xl p-5 shadow-sm hover:border-[#964900] transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-9 h-9 rounded-lg bg-[#ffeade] flex items-center justify-center text-[#964900] mb-3">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-['JetBrains_Mono'] font-bold text-[#241913] mb-2">
                          {sign.title}
                        </h4>
                        <p className="text-xs text-[#564336] leading-relaxed">{sign.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT WE DO */}
        <section className="py-20 px-6 sm:px-12 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffeade] text-[#964900] text-xs font-['JetBrains_Mono'] font-bold uppercase tracking-wider mb-4">
              <span>What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-['JetBrains_Mono'] text-[#241913] tracking-tight">
              Performance Engineering Across the Full Data Stack
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#564336] leading-relaxed">
              We don’t look at databases in isolation. We trace the path from your application code to the storage layer to identify where you are leaking performance and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-[#ddc1b0] rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-[#964900] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#ffeade] flex items-center justify-center text-[#964900] mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-['JetBrains_Mono'] font-bold text-[#241913] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#564336] leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <ul className="space-y-2 pt-4 border-t border-[#ddc1b0]/40">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#964900]">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: HOW WE WORK (4-PHASE MODEL) */}
        <section className="py-20 px-6 sm:px-12 bg-[#241913] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#964900]/30 border border-[#964900] text-[#ffb07c] text-xs font-['JetBrains_Mono'] font-bold uppercase tracking-wider mb-4">
                <span>Execution Framework</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-['JetBrains_Mono'] text-white tracking-tight">
                How We Work: Assess → Optimize → Stabilize → Scale
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#ddc1b0] leading-relaxed">
                A battle-tested 4-step framework engineered for zero-downtime database optimization.
              </p>
            </div>

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
                          Phase {index + 1} — {p.name}
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
              <div className="lg:col-span-7 bg-[#1b120c] border border-[#443329] rounded-3xl p-8 lg:p-10 min-h-[340px] flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-8xl font-['JetBrains_Mono'] font-black text-[#38261b] select-none pointer-events-none">
                  {phases[activePhase].step}
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="inline-block text-xs font-['JetBrains_Mono'] font-bold uppercase tracking-widest text-[#ffb07c]">
                    Phase {phases[activePhase].step} Detail
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-['JetBrains_Mono'] font-bold text-white">
                    Phase {activePhase + 1} — {phases[activePhase].name}
                  </h3>
                  <p className="text-base sm:text-lg text-[#ddc1b0] leading-relaxed">
                    {phases[activePhase].summary}
                  </p>
                  <div className="p-4 rounded-xl bg-[#2d2019] border border-[#443329] text-sm text-[#e8d5cb] leading-relaxed">
                    <strong className="text-white font-['JetBrains_Mono']">Execution Scope: </strong>
                    {phases[activePhase].detail}
                  </div>
                </div>

                <div className="relative z-10 pt-6 border-t border-[#443329] flex items-center justify-between mt-6">
                  <span className="text-xs font-['JetBrains_Mono'] text-[#a88f80]">
                    Phase {activePhase + 1} of 4
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-['JetBrains_Mono'] font-bold text-[#ffb07c] hover:underline"
                  >
                    <span>Request Assessment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: ENGAGEMENT OPTIONS */}
        <section className="py-20 px-6 sm:px-12 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffeade] text-[#964900] text-xs font-['JetBrains_Mono'] font-bold uppercase tracking-wider mb-4">
              <span>Flexible Delivery Models</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-['JetBrains_Mono'] text-[#241913] tracking-tight">
              Engagement Options
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#564336] leading-relaxed">
              Choose the model that fits your immediate performance bottlenecks and long-term database strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  tier.highlight
                    ? "bg-[#241913] text-white border-2 border-[#964900] shadow-2xl relative"
                    : "bg-white text-[#241913] border border-[#ddc1b0] shadow-sm hover:border-[#964900]"
                }`}
              >
                <div>
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-['JetBrains_Mono'] font-bold mb-4 ${
                      tier.highlight
                        ? "bg-[#964900] text-white"
                        : "bg-[#ffeade] text-[#964900]"
                    }`}
                  >
                    {tier.badge}
                  </div>
                  <h3
                    className={`text-2xl font-['JetBrains_Mono'] font-bold mb-3 ${
                      tier.highlight ? "text-white" : "text-[#241913]"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${
                      tier.highlight ? "text-[#ddc1b0]" : "text-[#564336]"
                    }`}
                  >
                    {tier.target}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-current/10">
                    <div className="text-xs font-['JetBrains_Mono'] font-bold uppercase tracking-wider">
                      Includes:
                    </div>
                    {tier.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            tier.highlight ? "text-[#ffb07c]" : "text-[#964900]"
                          }`}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href="/contact"
                    className={`w-full py-3.5 px-6 rounded-xl font-['JetBrains_Mono'] font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                      tier.highlight
                        ? "bg-[#964900] hover:bg-[#b55800] text-white shadow-lg"
                        : "bg-[#241913] hover:bg-[#964900] text-white"
                    }`}
                  >
                    <span>Select Engagement</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: WHY ALPHAESAI */}
        <section className="py-20 px-6 sm:px-12 bg-white border-y border-[#ddc1b0]/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffeade] text-[#964900] text-xs font-['JetBrains_Mono'] font-bold uppercase tracking-wider mb-4">
                <span>Our Differentiator</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-['JetBrains_Mono'] text-[#241913] tracking-tight">
                Why AlphaesAI: Engineering-First, Not Theory-Driven
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
              Is Your Database Slowing Your Business Down?
            </h2>
            <p className="text-lg sm:text-xl text-[#ffeedd] max-w-xl mx-auto mb-8 font-normal">
              Stop throwing budget at a performance problem that can be fixed with architecture. Let’s identify exactly what’s happening in your environment.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center shadow-2xl hover:scale-105 transition-transform"
            >
              <span className="absolute right-0 inset-y-0 w-[calc(100%-1.25rem)] rounded-xl bg-[#964900]" />
              <span className="relative z-10 px-8 py-4 rounded-xl bg-[#fff8f5] text-[#241913] text-sm font-['JetBrains_Mono'] font-bold tracking-wide">
                Book a Database Performance & Cost Assessment
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
