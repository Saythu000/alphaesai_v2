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
    title: "Embedded AI Systems Engineering",
    desc: "Production-grade GenAI applications, autonomous agents and ML systems deployed directly into client infrastructure. No prototypes, no handoffs.",
    points: ["LLM applications & RAG systems", "Agentic workflows & autonomous agents", "MLOps infrastructure & evaluation frameworks"],
  },
  {
    icon: LineChart,
    title: "FinOps Architecture & Optimization",
    desc: "Cloud cost reduction through embedded cost-optimization engineering. 30–50% savings via rightsizing, architectural redesign, and real-time visibility.",
    points: ["Cost optimization architecture", "Real-time cost attribution", "K8s & workload optimization"],
    highlight: true,
  },
  {
    icon: Cloud,
    title: "Multi-Cloud Infrastructure Engineering",
    desc: "Cloud-agnostic architecture and migrations across AWS, Azure, GCP, and OCI. Fully Infrastructure-as-Code with zero vendor lock-in.",
    points: ["Multi-cloud architecture design", "Infrastructure-as-Code (IaC)", "Zero vendor lock-in deployment"],
  },
  {
    icon: Database,
    title: "Data Platform & Lakehouse Engineering",
    desc: "Lakehouse architecture, data pipeline engineering and ML platform optimization. Embedded execution from design through production.",
    points: ["Delta Lake & data pipelines", "ML platform engineering", "Performance optimization & cost efficiency"],
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
  { name: "Oracle Cloud Infrastructure (OCI)", logo: "/logos/oracle.svg" },
];

const compare: { feat: string; us: boolean | string; them: boolean | string }[] = [
  { feat: "Embedded systems engineers on client teams", us: true, them: false },
  { feat: "Cost optimization architected from day one", us: true, them: false },
  { feat: "Production-grade AI systems (not POCs)", us: true, them: "Sometimes" },
  { feat: "Cloud-agnostic, multi-cloud capable", us: true, them: false },
  { feat: "Accountable for production outcomes", us: true, them: false },
  { feat: "End-to-end delivery timelines", us: "2–6 weeks", them: "3–9 months" },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background text-foreground">
        {/* Video Background */}
        <div className="absolute inset-0 -z-10">
          {/* Desktop video - hidden on mobile for performance */}
          <div className="hidden md:block absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster="/videos/hero-fallback.jpg"
            >
              <source src="/videos/hero-background.webm" type="video/webm" />
              <source src="/videos/hero-background.mp4" type="video/mp4" />
            </video>
          </div>
          
          {/* Mobile fallback image - always visible on mobile */}
          <img 
            src="/videos/hero-fallback.jpg" 
            alt="Abstract data visualization" 
            className="absolute inset-0 w-full h-full object-cover md:hidden" 
          />
          
          {/* Desktop fallback image - shows if video fails */}
          <img 
            src="/videos/hero-fallback.jpg" 
            alt="Abstract data visualization" 
            className="absolute inset-0 w-full h-full object-cover hidden md:block" 
          />
          
          {/* Maroon overlay at 40% opacity with subtle animation */}
          <div className="absolute inset-0 bg-maroon/60 animate-overlay-pulse" aria-hidden />
        </div>
        
        {/* Geometric grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #800020 1px, transparent 1px),
              linear-gradient(to bottom, #800020 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>
        {/* Minimal accent area */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20" aria-hidden />

        <div className="container relative pt-24 pb-28 md:pt-36 md:pb-40">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              AI · Cloud · FinOps · Healthcare
            </div>

            <div className="relative">
              <h1 className="text-5xl md:text-7xl lg:text-[5.25rem] font-bold tracking-tight leading-[1.02] text-maroon">
                Embedded AI & Cloud Systems Engineering
              </h1>
            </div>

            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Our engineers embed directly into your teams as operating members. We architect and ship production-grade AI systems, multi-cloud infrastructure, and FinOps optimization in{" "}
              <span className="text-maroon font-medium">2–6 weeks, not quarters.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Button asChild size="lg" variant="hero" className="h-12 px-7 text-base">
                <Link href="/contact">Start FDE Engagement <ArrowRight className="ml-1" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7 text-base border-border bg-secondary text-foreground hover:bg-muted hover:text-foreground">
                <Link href="/contact">Get Strategic Assessment</Link>
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
            <div key={s.l} className="rounded-2xl border border-border bg-card p-6 md:p-8 hover-lift">
              <div className="text-3xl md:text-5xl font-bold text-gold">
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
          eyebrow="The FDE Paradigm"
          title={<>Embedded Systems Engineering<span className="text-primary"> Vectors</span></>}
          subtitle="Our engineers operate as embedded systems architects across AI, cloud infrastructure, data platforms, and FinOps optimization."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`group rounded-2xl border bg-card p-8 hover-lift relative overflow-hidden ${
                s.highlight ? "border-primary/50 bg-primary/5" : "border-border"
              }`}
            >
              {s.highlight && (
                <div className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-primary/15 text-primary">
                  Most requested
                </div>
              )}
              <div className="h-12 w-12 rounded-xl bg-transparent flex items-center justify-center mb-6 border border-aqua/20">
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
        <div className="rounded-3xl bg-white border border-border p-8 md:p-16 overflow-hidden relative">
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                <Stethoscope className="h-3 w-3" /> Our flagship product
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-maroon">
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
              {/* High-Fidelity UI Mockup with Browser Frame */}
              <div className="relative rounded-2xl border-2 border-gold overflow-hidden shadow-lg" style={{ boxShadow: '0 20px 50px rgba(128, 0, 32, 0.15)' }}>
                {/* Browser Title Bar */}
                <div className="bg-maroon/90 px-4 py-2 flex items-center justify-between border-b border-gold/30">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <div className="ml-4 text-xs text-white/80 font-mono">drgodly.alpheas.ai</div>
                  </div>
                  <div className="text-xs text-white/60">DrGodly Platform</div>
                </div>
                
                {/* Mockup Content */}
                <div className="relative bg-black">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-primary/20 pointer-events-none" />
                  <img 
                    src="/mockups/drgodly-ui-dark.png" 
                    alt="DrGodly AI Platform Interface - Dark theme with gold and orange accents showing active AI processing"
                    className="w-full h-auto"
                  />
                  {/* Active processing indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 text-white text-xs font-medium animate-glow-aqua">
                    <div className="h-2 w-2 rounded-full bg-aqua" style={{ animation: 'pulse 3s ease-in-out infinite' }} />
                    Active AI Processing
                  </div>
                </div>
              </div>
              
              {/* Technical diagram with aqua accents */}
              <div className="mt-6 p-4 rounded-xl border border-aqua/20 bg-secondary/30">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <span>System Architecture</span>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-aqua" style={{ animation: 'pulse 3s ease-in-out infinite' }} />
                    <span>Live Data Flow</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((node) => (
                    <div key={node} className="relative">
                      <div className="h-8 rounded border border-aqua/30 bg-secondary/50 flex items-center justify-center">
                        <div className={`h-1.5 w-1.5 rounded-full ${node <= 3 ? 'bg-aqua' : 'bg-muted-foreground/40'}`} style={node <= 3 ? { animation: 'pulse 4s ease-in-out infinite' } : {}} />
                      </div>
                      {node < 6 && (
                        <div className="absolute top-1/2 -right-2 h-0.5 w-2 bg-aqua/40" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
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
              <div className="h-10 w-10 rounded-lg bg-transparent text-primary flex items-center justify-center mb-4 border border-aqua/20">
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
            <div key={c.name} className="rounded-2xl border border-border bg-card p-8 text-center hover-lift flex flex-col items-center justify-center group">
              <img 
                src={c.logo} 
                alt={c.name} 
                className="h-10 w-auto mx-auto mb-3 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" 
              />
              <div className="font-semibold text-foreground">{c.name}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* COMPARISON */}
      <Section className="bg-secondary/30">
        <SectionHeading
          eyebrow="FDE Model Advantage"
          title={<>Forward Deployed vs. <span className="text-primary">Traditional Consulting</span></>}
        />
        {/* Desktop table view */}
        <div className="hidden md:block rounded-2xl border border-border bg-card overflow-hidden">
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
            <div key={row.feat} className="rounded-2xl border border-border bg-card p-5">
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
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center relative overflow-hidden">
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
