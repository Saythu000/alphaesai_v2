"use client";

import Link from "next/link";
import {
  ArrowRight, Sparkles, Cloud, LineChart, Database, Stethoscope,
  ShieldCheck, Cpu, Zap, Check, X, AlertTriangle, BarChart3, Server, TrendingDown, Activity,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Counter } from "@/components/site/Counter";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Sparkles,
    title: "AI Consulting & Development",
    desc: "GenAI applications, autonomous agents and ML systems shipped to production — not prototypes.",
    points: ["LLM applications & RAG", "Agentic workflows", "MLOps & evaluation"],
  },
  {
    icon: LineChart,
    title: "Cloud Cost Optimization & FinOps",
    desc: "Cut cloud spend by 30–50% with rightsizing, savings plans, K8s cost control and live dashboards.",
    points: ["Cost audits", "K8s cost control", "Savings plans & RIs"],
    highlight: true,
  },
  {
    icon: Cloud,
    title: "Cloud Migration & Architecture",
    desc: "Multi-cloud architectures across AWS, Azure, GCP and Oracle — fully codified with IaC.",
    points: ["AWS · Azure · GCP · OCI", "Infrastructure as Code", "Zero vendor lock-in"],
  },
  {
    icon: Database,
    title: "Databricks Consulting",
    desc: "Lakehouse pipelines, ML workflows and performance tuning by certified Databricks engineers.",
    points: ["Delta Lake pipelines", "ML workflows", "Performance + cost"],
  },
];

const heroTrust = [
  { icon: Sparkles, label: "50+ AI Systems Deployed" },
  { icon: TrendingDown, label: "30–50% Cloud Cost Savings" },
  { icon: ShieldCheck, label: "HIPAA-ready Architecture" },
];

const leaks = [
  { icon: Server, title: "Idle resources", desc: "Forgotten dev clusters, unused volumes and zombie load balancers." },
  { icon: BarChart3, title: "Overprovisioned systems", desc: "Workloads sized for peak that runs 2 hours per week." },
  { icon: Cpu, title: "Inefficient AI workloads", desc: "GPU instances running 24/7 for batch jobs that need 2 hours." },
  { icon: AlertTriangle, title: "No cost visibility", desc: "No per-team, per-feature or per-customer attribution." },
];

const clouds = [
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "Azure", logo: "/logos/azure.svg" },
  { name: "GCP", logo: "/logos/gcp.svg" },
  { name: "Oracle Cloud", logo: "/logos/oracle.svg" },
];

const compare = [
  { feat: "Strategy + build + deploy in one team", us: true, them: false },
  { feat: "Built-in FinOps from day one", us: true, them: false },
  { feat: "Production-grade AI (not POCs)", us: true, them: "Sometimes" as any },
  { feat: "Multi-cloud, no vendor lock-in", us: true, them: false },
  { feat: "Own AI products (DrGodly)", us: true, them: false },
  { feat: "Faster delivery cycles", us: "2–6 weeks", them: "3–9 months" as any },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background text-foreground">
        {/* Minimal accent area */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20" aria-hidden />

        <div className="container relative pt-24 pb-28 md:pt-36 md:pb-40">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              AI · Cloud · FinOps · Healthcare
            </div>

            <div className="relative">
              <h1 className="text-5xl md:text-7xl lg:text-[5.25rem] font-bold tracking-tight leading-[1.02] text-foreground">
                Cut Cloud Costs by{" "}
                <span className="text-primary">
                  50%
                </span>{" "}
                While Building AI Platforms Like{" "}
                <span className="text-primary">
                  DrGodly
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              AI-first systems combined with FinOps-driven cloud architecture.{" "}
              <span className="text-foreground font-medium">Built for production, not experiments.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Button asChild size="lg" variant="hero" className="h-12 px-7 text-base">
                <Link href="/contact">Get Free Cloud Cost Audit <ArrowRight className="ml-1" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7 text-base border-border bg-secondary text-foreground hover:bg-muted hover:text-foreground">
                <Link href="/drgodly">Explore DrGodly Platform</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-8 text-sm text-muted-foreground">
              {heroTrust.map((t) => (
                <div key={t.label} className="inline-flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-secondary border border-border">
                    <t.icon className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="font-medium text-foreground">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <Section className="!py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: 50, suf: "+", l: "AI Systems Deployed" },
            { v: 100, suf: "+", l: "Cloud Workloads Optimized" },
            { v: 50, suf: "%", l: "Max Cost Reduction" },
            { v: 99.9, suf: "%", l: "Uptime", float: true },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card hover-lift">
              <div className="text-3xl md:text-5xl font-bold text-primary">
                {s.float ? <Counter to={99.9} suffix="%" decimals={1} /> : <Counter to={s.v} suffix={s.suf} />}
              </div>
              <div className="mt-2 text-sm md:text-base text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" className="bg-[#F9FAFB]">
        <SectionHeading
          eyebrow="What we do"
          title={<>Four core practices, <span className="text-primary">one execution team</span></>}
          subtitle="From AI strategy and engineering to multi-cloud architecture and FinOps — delivered end to end."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`group rounded-2xl border bg-card p-8 shadow-card hover-lift relative overflow-hidden ${
                s.highlight ? "border-primary/50 bg-primary/5" : "border-border"
              }`}
            >
              {s.highlight && (
                <div className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-primary/15 text-primary">
                  Most requested
                </div>
              )}
              <div className="h-12 w-12 rounded-xl bg-transparent flex items-center justify-center mb-6 border border-primary/30">
                <s.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground mb-5">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary" /> {p}
                  </li>
                ))}
              </ul>
              <Button asChild variant="ghost" className="px-0 hover:bg-transparent text-primary">
                <Link href="/services">Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* PRODUCT SPOTLIGHT — DRGODLY */}
      <Section className="relative">
        <div className="rounded-3xl bg-white border border-border p-8 md:p-16 overflow-hidden relative shadow-md">
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                <Stethoscope className="h-3 w-3" /> Our flagship product
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground">
                Meet <span className="text-primary">DrGodly</span> — AI-Powered Telemedicine Platform
              </h2>
              <p className="text-muted-foreground text-lg">
                AI doctor + real doctor in one seamless experience. Built on the same AI and cloud
                infrastructure we deploy for our enterprise clients.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                {["AI symptom checker","Doctor consultations","EMR records","AI clinical summaries","Secure platform","HIPAA-ready"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-foreground"><Check className="h-4 w-4 text-primary" />{f}</li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild size="lg" variant="hero"><Link href="/drgodly">Explore DrGodly <ArrowRight className="ml-1" /></Link></Button>
                <Button asChild size="lg" variant="outline" className="border-border bg-secondary text-foreground hover:bg-muted"><Link href="/contact">Request Demo</Link></Button>
              </div>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-primary/20 hidden lg:block" aria-hidden />
              <ol className="space-y-4">
                {[
                  { t: "AI symptom consultation", d: "Patient chats with our AI doctor for an instant intake." },
                  { t: "AI clinical summary", d: "The model produces a structured handoff for the physician." },
                  { t: "Real doctor consult", d: "Video or voice consult with a licensed clinician." },
                  { t: "Prescription & follow-up", d: "EMR-stored records, e-prescriptions and follow-ups." },
                ].map((s, i) => (
                  <li key={s.t} className="relative flex gap-4 rounded-2xl border border-border bg-secondary p-5 hover-lift">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-bold text-lg relative z-10">{i + 1}</div>
                    <div>
                      <div className="font-semibold text-foreground">{s.t}</div>
                      <div className="text-sm text-muted-foreground">{s.d}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Section>

      {/* CLOUD LEAK */}
      <Section className="bg-secondary/30">
        <SectionHeading
          eyebrow="FinOps"
          title={<>Where your cloud budget is <span className="text-primary">leaking</span></>}
          subtitle="Most enterprises overspend by 30–45% on cloud. Here's where it happens — and what we fix."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {leaks.map((l) => (
            <div key={l.title} className="rounded-2xl border border-border bg-card p-6 shadow-card hover-lift">
              <div className="h-10 w-10 rounded-lg bg-transparent text-primary flex items-center justify-center mb-4 border border-primary/30">
                <l.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div className="font-semibold mb-1 text-foreground">{l.title}</div>
              <p className="text-sm text-muted-foreground">{l.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="hero"><Link href="/contact">Get Free Cost Audit <ArrowRight className="ml-1" /></Link></Button>
        </div>
      </Section>

      {/* MULTI-CLOUD */}
      <Section>
        <SectionHeading
          eyebrow="Multi-cloud"
          title={<>Cloud-agnostic architecture, <span className="text-primary">no vendor lock-in</span></>}
          subtitle="We design and deploy on every major hyperscaler — and across them when it matters."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clouds.map((c) => (
            <div key={c.name} className="rounded-2xl border border-border bg-card p-8 text-center shadow-card hover-lift flex flex-col items-center justify-center">
              <img 
                src={c.logo} 
                alt={c.name} 
                className="h-10 w-auto mx-auto mb-3 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
              <div className="font-semibold text-foreground">{c.name}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* COMPARISON */}
      <Section className="bg-secondary/30">
        <SectionHeading
          eyebrow="Why AlpheasAI"
          title={<>Traditional vendors vs. <span className="text-primary">AlpheasAI</span></>}
        />
        {/* Desktop table view */}
        <div className="hidden md:block rounded-2xl border border-border bg-card shadow-card overflow-hidden">
          <div className="grid grid-cols-3 text-sm font-semibold bg-secondary px-6 py-4 text-foreground">
            <div>Capability</div>
            <div className="text-center">Traditional vendor</div>
            <div className="text-center text-primary">AlpheasAI</div>
          </div>
          {compare.map((row, i) => (
            <div key={row.feat} className={`grid grid-cols-3 items-center px-6 py-4 text-sm ${i % 2 ? "bg-secondary/30" : ""}`}>
              <div className="font-medium text-foreground">{row.feat}</div>
              <div className="text-center text-muted-foreground">
                {typeof row.them === "boolean" ? (row.them ? <Check className="inline h-4 w-4 text-primary" /> : <X className="inline h-4 w-4 text-muted-foreground/60" />) : row.them}
              </div>
              <div className="text-center font-medium text-foreground">
                {typeof row.us === "boolean" ? (row.us ? <Check className="inline h-5 w-5 text-primary" /> : <X className="inline h-5 w-5" />) : <span className="text-primary">{row.us}</span>}
              </div>
            </div>
          ))}
        </div>
        {/* Mobile card view */}
        <div className="md:hidden space-y-4">
          {compare.map((row) => (
            <div key={row.feat} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="font-medium text-foreground mb-3">{row.feat}</div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Traditional:</span>
                  {typeof row.them === "boolean" ? (row.them ? <Check className="h-4 w-4 text-primary" /> : <X className="h-4 w-4 text-muted-foreground/60" />) : <span className="text-muted-foreground">{row.them}</span>}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-medium">AlpheasAI:</span>
                  {typeof row.us === "boolean" ? (row.us ? <Check className="h-5 w-5 text-primary" /> : <X className="h-5 w-5" />) : <span className="text-primary font-medium">{row.us}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section>
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center shadow-md relative overflow-hidden">
          <div className="relative space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Ready to build scalable AI platforms <br className="hidden md:block" />and reduce cloud costs?
            </h2>
            <p className="text-primary-foreground/85 max-w-2xl mx-auto">
              Talk to an engineer in 24 hours. Walk away with a roadmap — whether or not you work with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90"><Link href="/contact">Book Strategy Call</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"><Link href="/contact">Get Free Assessment</Link></Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Index;
