"use client";

import { useState } from "react";
import Link from "next/link";
import { useCMS } from "@/context/CMSContext";
import {
  Cloud,
  ShieldCheck,
  Database,
  Cpu,
  Activity,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  Lock,
  Layers,
  Sparkles,
  Zap,
  Server,
  DollarSign,
  Globe2,
} from "lucide-react";

const defaultFrictionPoints = [
  {
    iconName: "DollarSign",
    title: "Escalating Cloud Spend",
    tag: "FINOPS FRICTION",
    desc: "GPU and compute costs spiraling without clear attribution to ROI, leading to runaway monthly cloud invoices.",
  },
  {
    iconName: "Lock",
    title: "Security Gaps",
    tag: "SECOPS RISKS",
    desc: "Traditional network perimeters fail to account for the specific data access, PII sanitization, and LLM security needs of AI.",
  },
  {
    iconName: "Database",
    title: "Data Bottlenecks",
    tag: "PIPELINE STALLS",
    desc: "Disconnected data silos in Databricks or Snowflake that slow down model training, batch processing, and real-time inference.",
  },
  {
    iconName: "Server",
    title: "Operational Debt",
    tag: "DEVOPS BOTTLENECK",
    desc: "Manual, undocumented infrastructure that prevents your engineering team from shipping models and features to production.",
  },
];

const defaultCapabilities = [
  {
    id: "migration",
    iconName: "Cloud",
    badge: "Multi-Cloud Migration",
    title: "Cloud Architecture & Migration",
    desc: "We design, modernize, and migrate environments across AWS, Azure, GCP, and OCI. Our focus is zero-downtime, infrastructure-as-code (IaC) execution with Terraform and OpenTofu that eliminates vendor lock-in.",
    highlights: [
      "Zero-downtime blue/green workloads migration",
      "Infrastructure-as-Code (Terraform, OpenTofu, Pulumi)",
      "Multi-cloud architectures across AWS, Azure, GCP & OCI",
    ],
  },
  {
    id: "security",
    iconName: "ShieldCheck",
    badge: "Cyber Security & Guardrails",
    title: "Secure Infrastructure (Cyber Security)",
    desc: "Security isn't an afterthought. We implement policy-as-code, identity and access management (IAM), and automated compliance guardrails that prevent non-compliant infrastructure before it deploys.",
    highlights: [
      "Automated policy-as-code (OPA & Gatekeeper)",
      "Zero-trust IAM least-privilege scoping & RBAC",
      "PII sanitization & AI agent execution boundaries",
    ],
  },
  {
    id: "lakehouse",
    iconName: "Database",
    badge: "Data Lakehouse & Warehouse",
    title: "AI-Ready Data Foundations (Databricks & Snowflake)",
    desc: "We bridge the gap between your cloud and your data. From architecting high-performance Delta lakehouses in Databricks to optimizing Snowflake data warehousing, we ensure your data stack is clean, secure, and ready for model training.",
    highlights: [
      "Databricks Unity Catalog & Delta Lake orchestration",
      "Snowflake warehouse optimization & cost controls",
      "Feature store setup & real-time streaming ingestion",
    ],
  },
  {
    id: "k8s",
    iconName: "Cpu",
    badge: "Container & GPU Compute",
    title: "Production Kubernetes & GPU Orchestration",
    desc: "Enterprise-grade EKS, AKS, GKE, and self-managed clusters with GPU-aware scheduling, robust RBAC, and namespace isolation strategies designed specifically for high-throughput AI compute.",
    highlights: [
      "GPU-aware pod scheduling & node auto-scaling",
      "Hardened EKS, AKS, GKE & hybrid clusters",
      "Namespace isolation & workload cost attribution",
    ],
  },
  {
    id: "observability",
    iconName: "Activity",
    badge: "Telemetry & SRE",
    title: "Observability & High Availability",
    desc: "Actionable telemetry, standardized structured logging, and strict Service Level Objectives (SLOs). We build resilient self-healing systems that tell you what’s wrong before your users notice.",
    highlights: [
      "Full-stack Datadog, Prometheus & Grafana telemetry",
      "Automated alerting & incident playbook generation",
      "Strict SLO/SLA monitoring for model inference APIs",
    ],
  },
];

const defaultAiDifferencePoints = [
  {
    title: "Cost-Aware Design",
    desc: "We bake cost attribution and GPU scheduling into your infrastructure architecture from Day 1—not as an unexpected line item on the invoice.",
    iconName: "DollarSign",
  },
  {
    title: "Unified Expertise",
    desc: "The same senior engineers who architect your cloud infrastructure also understand the data pipelines, vector DBs, and LLM models running on top of it.",
    iconName: "Layers",
  },
  {
    title: "No Vendor Lock-in",
    desc: "We build for multi-cloud flexibility, choosing the platform and tools that fit your specific performance and budget needs without proprietary hooks.",
    iconName: "Globe2",
  },
];

const defaultEngagementTiers = [
  {
    title: "Cloud & Security Audit",
    subtitle: "DIAGNOSTIC & READINESS",
    desc: "A diagnostic deep-dive to identify vulnerabilities, cost inefficiencies, and performance bottlenecks in your current setup.",
    cta: "Get the Audit",
    href: "/contact?service=cloud-audit",
    featured: false,
    deliverables: [
      "Infrastructure & security architecture review",
      "FinOps cloud spend diagnostic",
      "AI data readiness assessment",
      "Prioritized remediation roadmap",
    ],
  },
  {
    title: "Infrastructure Modernization & Migration",
    subtitle: "FULL-STACK EXECUTION",
    desc: "Full-stack migration or refactoring projects designed to get your environments cloud-native, secure, and AI-ready.",
    cta: "Discuss Your Roadmap",
    href: "/contact?service=cloud-migration",
    featured: true,
    deliverables: [
      "Zero-downtime cloud & data migration",
      "IaC codebase buildout (Terraform/OpenTofu)",
      "Databricks & Snowflake lakehouse setup",
      "EKS/GKE production Kubernetes setup",
    ],
  },
  {
    title: "Continuous Optimization (FinOps & SecOps)",
    subtitle: "MANAGED GOVERNANCE",
    desc: "Ongoing oversight to keep your cloud spend, security posture, and data architecture performant as your AI usage grows.",
    cta: "Talk to an Expert",
    href: "/contact?service=continuous-optimization",
    featured: false,
    deliverables: [
      "Monthly FinOps cost rightsizing",
      "Continuous SecOps compliance scanning",
      "Databricks/Snowflake performance tuning",
      "Dedicated senior cloud engineer access",
    ],
  },
];

const defaultFaqs = [
  {
    q: "How do you handle Databricks/Snowflake integration?",
    a: "We don't just manage the data tools; we optimize the entire pipeline—from how data flows into your lakehouse to how your cloud infrastructure supports high-concurrency model inference and feature retrieval.",
  },
  {
    q: "Do you focus on one cloud provider?",
    a: "We work seamlessly across AWS, Azure, GCP, and OCI. We advocate for the architecture that serves your business needs and workload requirements, not the platform that’s easiest to sell.",
  },
  {
    q: "Is my infrastructure 'AI-ready'?",
    a: "If your infrastructure lacks GPU scheduling, granular cost-attribution, or secure integration with your data warehouses (Snowflake/Databricks), it is likely creating friction. We can perform a rapid audit of your setup and tell you exactly where the gaps are.",
  },
  {
    q: "How long does a typical cloud migration or refactoring take?",
    a: "Diagnostic audits take 1–2 weeks. Full modernization or zero-downtime migration projects typically range from 4 to 12 weeks depending on workload complexity, with zero interruption to your live production users.",
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cloud,
  ShieldCheck,
  Database,
  Cpu,
  Activity,
  DollarSign,
  Lock,
  Server,
  Globe2,
  Layers,
  Zap,
  Sparkles,
};

function getIcon(name?: string, fallback: React.ComponentType<{ className?: string }> = Cloud) {
  if (!name) return fallback;
  return iconMap[name] || fallback;
}

export default function CloudSecurityDatabricksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { data } = useCMS();
  const cmsCloud = data?.pages?.serviceSubpages?.cloudMigration;

  const badgeText = cmsCloud?.heroBadge || "CLOUD MIGRATION · CYBER SECURITY · DATABRICKS & SNOWFLAKE";
  const titleText = cmsCloud?.title || "Cloud Infrastructure Built for the AI Era.";
  const taglineText = cmsCloud?.subtitle || "Scalable. Secure. Optimized.";
  const descText = cmsCloud?.description || "Traditional cloud infrastructure was never designed for the demands of modern AI. From volatile GPU requirements and complex data pipelines to the security implications of large-scale LLMs, the old playbooks no longer apply. AlphaesAI engineers high-performance cloud environments—across AWS, Azure, GCP, and OCI—that integrate security, cost-optimization, and data architecture from Day 1. We don’t just move workloads; we build foundations that make your AI systems viable, scalable, and secure.";
  const displayCapabilities = cmsCloud?.capabilitiesBadges && cmsCloud.capabilitiesBadges.length > 0
    ? cmsCloud.capabilitiesBadges
    : ["AWS", "Azure", "GCP", "OCI", "Databricks", "Snowflake", "Production Kubernetes", "Policy-as-Code"];
  const primaryCtaText = cmsCloud?.primaryCtaText || "Schedule an Executive Briefing";
  const primaryCtaHref = cmsCloud?.primaryCtaHref || "/contact";
  const secondaryCtaText = cmsCloud?.secondaryCtaText || "Explore Capabilities";
  const secondaryCtaHref = cmsCloud?.secondaryCtaHref || "#capabilities";

  // Section 2: Challenge
  const challengeSubtitle = cmsCloud?.challengeSubtitle || "THE CLOUD FRICTION FACTOR";
  const challengeTitle = cmsCloud?.challengeTitle || "Why Standard Cloud Infrastructure Fails Modern AI Workloads";
  const challengeDescription = cmsCloud?.challengeDescription || "Most cloud environments are optimized for predictable web traffic, not the erratic, resource-heavy nature of AI. When you attempt to run high-throughput inference or complex data processing on legacy setups, you inevitably hit ceilings in performance, security, and cost.";
  const frictionPoints = cmsCloud?.frictionPoints?.length ? cmsCloud.frictionPoints : defaultFrictionPoints;

  // Section 3: Capabilities
  const whatWeDoSubtitle = cmsCloud?.whatWeDoSubtitle || "WHAT WE BUILD";
  const whatWeDoTitle = cmsCloud?.whatWeDoTitle || "Architecting Production-Grade Cloud & Data Systems";
  const whatWeDoDescription = cmsCloud?.whatWeDoDescription || "We design, deploy, and operationalize resilient cloud foundations engineered specifically for AI workloads, data lakehouses, and high-availability enterprise applications.";
  const capabilities = cmsCloud?.capabilities?.length ? cmsCloud.capabilities : defaultCapabilities;

  // Section 4: AI Difference
  const diffSubtitle = cmsCloud?.differentiatorSubtitle || "THE AI DIFFERENCE";
  const diffTitle = cmsCloud?.differentiatorTitle || "Engineering for AI, Not Just for Uptime";
  const diffDescription = cmsCloud?.competenciesDescription || "We understand the technical reality of AI better than standard consultancies. We bridge the gap between infrastructure engineering, data architecture, and AI model performance.";
  const aiDifferencePoints = cmsCloud?.aiDifferencePoints?.length
    ? cmsCloud.aiDifferencePoints
    : (cmsCloud?.differentiators?.length
        ? cmsCloud.differentiators.map((d: { title: string; desc: string; iconName?: string }) => ({ title: d.title, desc: d.desc, iconName: d.iconName || "DollarSign" }))
        : defaultAiDifferencePoints);

  // Section 5: Engagement Options
  const engagementSubtitle = cmsCloud?.engagementSubtitle || "ENGAGEMENT OPTIONS";
  const engagementTitle = cmsCloud?.engagementTitle || "Tailored Delivery Models for Your Cloud Journey";
  const engagementDescription = cmsCloud?.engagementDescription || "Whether you need a targeted security audit, a zero-downtime cloud migration, or continuous FinOps & SecOps optimization, we offer structured engagement options.";
  const engagementTiers = cmsCloud?.engagementTiers?.length ? cmsCloud.engagementTiers : defaultEngagementTiers;

  // Section 6: FAQ
  const faqSubtitle = cmsCloud?.faqSubtitle || "FREQUENTLY ASKED QUESTIONS";
  const faqTitle = cmsCloud?.faqTitle || "Cloud & Data Architecture Queries";
  const faqs = cmsCloud?.faqs?.length
    ? cmsCloud.faqs.map((f: { q?: string; question?: string; a?: string; answer?: string }) => ({ q: f.q || f.question || "", a: f.a || f.answer || "" }))
    : defaultFaqs;

  // Section 7: Final CTA Banner
  const finalCtaBadge = cmsCloud?.engineBadge || "START ENGINEERING TODAY";
  const finalCtaTitle = cmsCloud?.finalCtaTitle || "Ready to build infrastructure that can actually run AI at scale?";
  const finalCtaDescription = cmsCloud?.finalCtaDescription || "Let’s discuss your current cloud roadblocks and how we can engineer a path forward across AWS, Azure, GCP, OCI, Databricks, and Snowflake.";
  const finalCtaText = cmsCloud?.finalCtaText || "Schedule an Executive Briefing";
  const finalCtaHref = cmsCloud?.finalCtaHref || "/contact";

  return (
    <div className="w-full bg-[#fff8f5] text-[#241913]">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-28 px-4 max-w-[1280px] mx-auto border-b border-[#ddc1b0]">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Breadcrumb / Tagline Pill */}
          <div className="inline-flex items-center gap-2 border border-[#ddc1b0] bg-[#ffffff] px-4 py-1.5 rounded-full font-['JetBrains_Mono'] text-xs font-bold text-[#964900] mb-6 tracking-widest uppercase shadow-sm">
            <Cloud className="w-3.5 h-3.5 text-[#964900]" />
            <span>{badgeText}</span>
          </div>

          <h1 className="font-['Hanken_Grotesk'] text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#241913] mb-4 tracking-tight leading-[1.1]">
            {titleText}
          </h1>

          <p className="font-['JetBrains_Mono'] text-lg font-bold text-[#964900] mb-6 tracking-wide">
            {taglineText}
          </p>

          <p className="font-['Inter'] text-base sm:text-lg text-[#564336] max-w-3xl mb-8 leading-relaxed font-normal">
            {descText}
          </p>

          {/* Capabilities Badges Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {displayCapabilities.map((cap) => (
              <span
                key={cap}
                className="px-3 py-1 bg-[#fff1ea] border border-[#ddc1b0] rounded-full text-xs font-['JetBrains_Mono'] font-medium text-[#241913]"
              >
                {cap}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href={primaryCtaHref}
              className="bg-[#964900] text-white font-['JetBrains_Mono'] font-bold text-base px-8 py-4 rounded-full hover:bg-[#723600] transition-all duration-200 shadow-md flex items-center gap-2 group text-center"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={secondaryCtaHref}
              className="border border-[#ddc1b0] bg-[#ffffff] text-[#241913] font-['JetBrains_Mono'] font-bold text-base px-8 py-4 rounded-full hover:bg-[#fff1ea] transition-colors text-center"
            >
              {secondaryCtaText}
            </a>
          </div>
        </div>
      </section>

      {/* 2. THE CHALLENGE */}
      <section className="py-20 bg-[#ffffff] border-b border-[#ddc1b0]">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#964900] font-bold uppercase tracking-widest mb-3">
              <AlertTriangle className="w-4 h-4" />
              <span>{challengeSubtitle}</span>
            </div>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#241913] mb-4">
              {challengeTitle}
            </h2>
            <p className="font-['Inter'] text-base text-[#564336] leading-relaxed">
              {challengeDescription}
            </p>
          </div>

          {/* 4 Friction Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {frictionPoints.map((pt, idx) => {
              const IconComp = getIcon(pt.iconName, DollarSign);
              return (
                <div
                  key={pt.title || idx}
                  className="bg-[#fff8f5] border border-[#ddc1b0] hover:border-[#964900] rounded-xl p-6 transition-all duration-300 shadow-sm hover-lift flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded bg-[#ffffff] border border-[#ddc1b0] flex items-center justify-center text-[#964900] shadow-sm">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-['JetBrains_Mono'] font-bold text-[#964900] bg-[#fff1ea] px-2 py-0.5 rounded border border-[#ddc1b0]">
                        {pt.tag}
                      </span>
                    </div>
                    <h3 className="font-['Hanken_Grotesk'] text-lg font-bold text-[#241913] mb-2">
                      {pt.title}
                    </h3>
                    <p className="font-['Inter'] text-xs text-[#564336] leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHAT WE BUILD (CAPABILITIES) */}
      <section id="capabilities" className="py-20 bg-[#fff8f5] border-b border-[#ddc1b0]">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-['JetBrains_Mono'] text-[#964900] font-bold uppercase tracking-widest mb-3">
              {whatWeDoSubtitle}
            </div>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#241913] mb-4">
              {whatWeDoTitle}
            </h2>
            <p className="font-['Inter'] text-base text-[#564336] leading-relaxed">
              {whatWeDoDescription}
            </p>
          </div>

          <div className="space-y-8">
            {capabilities.map((cap, idx) => {
              const IconComp = getIcon(cap.iconName, Cloud);
              const highlightsList = cap.highlights || (cap as { bullets?: string[] }).bullets || [];
              return (
                <div
                  key={cap.id || idx}
                  id={cap.id}
                  className="bg-[#ffffff] border border-[#ddc1b0] hover:border-[#964900] rounded-2xl p-8 transition-all duration-300 shadow-sm hover-lift grid lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-lg bg-[#fff1ea] text-[#964900] border border-[#ddc1b0]">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#964900] uppercase tracking-wider">
                        {cap.badge}
                      </span>
                    </div>

                    <h3 className="font-['Hanken_Grotesk'] text-2xl font-extrabold text-[#241913] mb-3">
                      {cap.title}
                    </h3>

                    <p className="font-['Inter'] text-sm text-[#564336] leading-relaxed mb-6">
                      {cap.desc}
                    </p>

                    <div className="space-y-2">
                      {highlightsList.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-xs font-['Inter'] text-[#241913]">
                          <CheckCircle2 className="w-4 h-4 text-[#964900] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-[#F3F3F3] border border-[#ddc1b0] rounded-xl p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-[11px] font-['JetBrains_Mono'] text-[#964900] font-bold uppercase mb-2">
                        CAPABILITY HIGHLIGHT 0{idx + 1}
                      </div>
                      <div className="text-sm font-['Hanken_Grotesk'] font-bold text-[#241913] mb-4">
                        Production Implementation & Standards
                      </div>
                      <p className="text-xs font-['Inter'] text-[#564336] leading-relaxed mb-6">
                        Built with versioned Infrastructure-as-Code modules, automated CI/CD pipelines, and enterprise security policies ready for audit.
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-between text-xs font-['JetBrains_Mono'] font-bold text-[#964900] hover:text-[#723600] pt-4 border-t border-[#ddc1b0]"
                    >
                      <span>Consult on {cap.badge}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. THE AI DIFFERENCE */}
      <section className="py-20 bg-[#241913] text-white border-b border-[#ddc1b0]">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#ffb786] font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4 text-[#ffb786]" />
              <span>{diffSubtitle}</span>
            </div>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              {diffTitle}
            </h2>
            <p className="font-['Inter'] text-base text-white/80 leading-relaxed">
              {diffDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aiDifferencePoints.map((item, idx) => {
              const IconComp = getIcon(item.iconName, DollarSign);
              return (
                <div
                  key={item.title || idx}
                  className="bg-[#1c130d] border border-white/10 hover:border-[#964900] rounded-xl p-8 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#964900]/20 border border-[#964900]/40 flex items-center justify-center text-[#ffb786] mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-['Hanken_Grotesk'] text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="font-['Inter'] text-xs text-white/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. ENGAGEMENT OPTIONS */}
      <section className="py-20 bg-[#ffffff] border-b border-[#ddc1b0]">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-['JetBrains_Mono'] text-[#964900] font-bold uppercase tracking-widest mb-3">
              {engagementSubtitle}
            </div>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#241913] mb-4">
              {engagementTitle}
            </h2>
            <p className="font-['Inter'] text-base text-[#564336] leading-relaxed">
              {engagementDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementTiers.map((tier, idx) => {
              const t = tier as { featured?: boolean; highlight?: boolean; subtitle?: string; badge?: string; title?: string; name?: string; desc?: string; target?: string; deliverables?: string[]; cta?: string; href?: string };
              const isFeatured = t.featured || t.highlight || false;
              const subTitle = t.subtitle || t.badge || "";
              const tierName = t.title || t.name || "";
              const tierDesc = t.desc || t.target || "";
              const deliverables = t.deliverables || [];
              const ctaText = t.cta || "Get Started";
              const ctaHref = t.href || "/contact";
              return (
                <div
                  key={tierName || idx}
                  className={`rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between ${
                    isFeatured
                      ? "bg-[#241913] text-white border-2 border-[#964900] shadow-xl relative"
                      : "bg-[#fff8f5] text-[#241913] border border-[#ddc1b0] hover:border-[#964900] shadow-sm hover-lift"
                  }`}
                >
                  {isFeatured && (
                    <div className="absolute -top-3.5 right-6 bg-[#964900] text-white text-[10px] font-['JetBrains_Mono'] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                      MOST POPULAR
                    </div>
                  )}

                  <div>
                    {subTitle && (
                      <div
                        className={`text-[10px] font-['JetBrains_Mono'] font-bold uppercase tracking-widest mb-2 ${
                          isFeatured ? "text-[#ffb786]" : "text-[#964900]"
                        }`}
                      >
                        {subTitle}
                      </div>
                    )}

                    <h3
                      className={`font-['Hanken_Grotesk'] text-2xl font-extrabold mb-3 ${
                        isFeatured ? "text-white" : "text-[#241913]"
                      }`}
                    >
                      {tierName}
                    </h3>

                    <p
                      className={`font-['Inter'] text-xs leading-relaxed mb-6 ${
                        isFeatured ? "text-white/80" : "text-[#564336]"
                      }`}
                    >
                      {tierDesc}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {deliverables.map((d) => (
                        <div key={d} className="flex items-start gap-2.5 text-xs font-['Inter']">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isFeatured ? "text-[#ffb786]" : "text-[#964900]"
                            }`}
                          />
                          <span className={isFeatured ? "text-white/90" : "text-[#241913]"}>
                            {d}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={ctaHref}
                    className={`w-full font-['JetBrains_Mono'] font-bold text-sm py-3.5 rounded-full text-center transition-all duration-200 shadow-sm ${
                      isFeatured
                        ? "bg-[#964900] text-white hover:bg-[#b05600]"
                        : "bg-[#ffffff] text-[#241913] border border-[#ddc1b0] hover:bg-[#fff1ea] hover:border-[#964900]"
                    }`}
                  >
                    {ctaText}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-20 bg-[#fff8f5] border-b border-[#ddc1b0]">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-['JetBrains_Mono'] text-[#964900] font-bold uppercase tracking-widest mb-3">
              {faqSubtitle}
            </div>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#241913]">
              {faqTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q || idx}
                  className="bg-[#ffffff] border border-[#ddc1b0] rounded-xl transition-all duration-200 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-['Hanken_Grotesk'] font-bold text-lg text-[#241913] hover:text-[#964900] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#964900] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 font-['Inter'] text-sm text-[#564336] leading-relaxed border-t border-[#ddc1b0]/40 mt-1 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA BANNER */}
      <section className="py-20 px-4 max-w-[1280px] mx-auto">
        <div className="bg-[#241913] text-white rounded-3xl p-10 sm:p-16 border border-[#ddc1b0] shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#964900]/50 bg-[#964900]/20 px-4 py-1.5 rounded-full font-['JetBrains_Mono'] text-xs font-bold text-[#ffb786] mb-6 tracking-widest uppercase">
            <Zap className="w-3.5 h-3.5 text-[#ffb786]" />
            <span>{finalCtaBadge}</span>
          </div>

          <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            {finalCtaTitle}
          </h2>

          <p className="font-['Inter'] text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            {finalCtaDescription}
          </p>

          <Link
            href={finalCtaHref}
            className="inline-flex items-center gap-2 bg-[#964900] text-white font-['JetBrains_Mono'] font-bold text-base px-9 py-4 rounded-full hover:bg-[#b05600] transition-colors shadow-lg group"
          >
            <span>{finalCtaText}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
