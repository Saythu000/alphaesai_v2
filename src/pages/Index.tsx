import { Link } from "react-router-dom";
import {
  ArrowRight, Sparkles, Cloud, LineChart, Database, Stethoscope,
  ShieldCheck, Cpu, Zap, Check, X, AlertTriangle, BarChart3, Server,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
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

const trustBadges = [
  "Databricks Certified", "HIPAA Ready", "50+ AI Systems", "30–50% Cost Savings",
];

const leaks = [
  { icon: Server, title: "Idle resources", desc: "Forgotten dev clusters, unused volumes and zombie load balancers." },
  { icon: BarChart3, title: "Overprovisioned systems", desc: "Workloads sized for peak that runs 2 hours per week." },
  { icon: Cpu, title: "Inefficient AI workloads", desc: "GPU instances running 24/7 for batch jobs that need 2 hours." },
  { icon: AlertTriangle, title: "No cost visibility", desc: "No per-team, per-feature or per-customer attribution." },
];

const clouds = ["AWS", "Azure", "GCP", "Oracle Cloud"];

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
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
        <div className="container relative pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <Eyebrow>AI · Cloud · FinOps · Healthcare</Eyebrow>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Enterprise AI & Cloud Efficiency{" "}
              <span className="text-gradient">Without the Enterprise Risk</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Deploy intelligent systems and AI-powered platforms like DrGodly on scalable,
              cost-optimized cloud infrastructure. Reduce cloud costs by up to{" "}
              <span className="font-semibold text-foreground">50%</span> with built-in FinOps.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button asChild size="lg" variant="hero">
                <Link to="/contact">Get Free AI & Cloud Assessment <ArrowRight className="ml-1" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/drgodly">Explore Platforms</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
              {trustBadges.map((b) => (
                <span key={b} className="text-xs font-medium px-3 py-1.5 rounded-full bg-card border border-border shadow-sm">
                  {b}
                </span>
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
            { v: 100, suf: "+", l: "Cloud Workloads" },
            { v: 50, suf: "%", l: "Max Cost Reduction" },
            { v: 99.9, suf: "%", l: "Uptime", float: true },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card hover-lift">
              <div className="text-3xl md:text-5xl font-bold text-gradient">
                {s.float ? "99.9%" : <Counter to={s.v} suffix={s.suf} />}
              </div>
              <div className="mt-2 text-sm md:text-base text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services">
        <SectionHeading
          eyebrow="What we do"
          title={<>Four core practices, <span className="text-gradient">one execution team</span></>}
          subtitle="From AI strategy and engineering to multi-cloud architecture and FinOps — delivered end to end."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`group rounded-2xl border bg-card p-8 shadow-card hover-lift relative overflow-hidden ${
                s.highlight ? "border-primary/40" : "border-border"
              }`}
            >
              {s.highlight && (
                <div className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary">
                  Most requested
                </div>
              )}
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow mb-6">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground mb-5">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" /> {p}
                  </li>
                ))}
              </ul>
              <Button asChild variant="ghost" className="px-0 hover:bg-transparent text-primary">
                <Link to="/services">Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* PRODUCT SPOTLIGHT — DRGODLY */}
      <Section className="relative">
        <div className="rounded-3xl bg-gradient-to-br from-secondary to-[hsl(222_47%_4%)] text-secondary-foreground p-8 md:p-16 overflow-hidden relative shadow-lg">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs font-medium">
                <Stethoscope className="h-3 w-3" /> Our flagship product
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Meet <span className="text-gradient">DrGodly</span> — AI-Powered Telemedicine Platform
              </h2>
              <p className="text-white/70 text-lg">
                AI doctor + real doctor in one seamless experience. Built on the same AI and cloud
                infrastructure we deploy for our enterprise clients.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                {["AI symptom checker","Doctor consultations","EMR records","AI clinical summaries","Secure platform","HIPAA-ready"].map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary-glow" />{f}</li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild size="lg" variant="hero"><Link to="/drgodly">Explore DrGodly <ArrowRight className="ml-1" /></Link></Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10"><Link to="/contact">Request Demo</Link></Button>
              </div>
            </div>
            <ol className="space-y-4">
              {[
                { t: "AI symptom consultation", d: "Patient chats with our AI doctor for an instant intake." },
                { t: "AI clinical summary", d: "The model produces a structured handoff for the physician." },
                { t: "Real doctor consult", d: "Video or voice consult with a licensed clinician." },
                { t: "Prescription & follow-up", d: "EMR-stored records, e-prescriptions and follow-ups." },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 hover-lift">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-semibold">{i + 1}</div>
                  <div>
                    <div className="font-semibold">{s.t}</div>
                    <div className="text-sm text-white/60">{s.d}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* CLOUD LEAK */}
      <Section className="bg-muted/30">
        <SectionHeading
          eyebrow="FinOps"
          title={<>Where your cloud budget is <span className="text-gradient">leaking</span></>}
          subtitle="Most enterprises overspend by 30–45% on cloud. Here's where it happens — and what we fix."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {leaks.map((l) => (
            <div key={l.title} className="rounded-2xl border border-border bg-card p-6 shadow-card hover-lift">
              <div className="h-10 w-10 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center mb-4">
                <l.icon className="h-5 w-5" />
              </div>
              <div className="font-semibold mb-1">{l.title}</div>
              <p className="text-sm text-muted-foreground">{l.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="hero"><Link to="/contact">Get Free Cost Audit <ArrowRight className="ml-1" /></Link></Button>
        </div>
      </Section>

      {/* MULTI-CLOUD */}
      <Section>
        <SectionHeading
          eyebrow="Multi-cloud"
          title={<>Cloud-agnostic architecture, <span className="text-gradient">no vendor lock-in</span></>}
          subtitle="We design and deploy on every major hyperscaler — and across them when it matters."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clouds.map((c) => (
            <div key={c} className="rounded-2xl border border-border bg-card p-8 text-center shadow-card hover-lift">
              <Cloud className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="font-semibold">{c}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* COMPARISON */}
      <Section className="bg-muted/30">
        <SectionHeading
          eyebrow="Why AlpheasAI"
          title={<>Traditional vendors vs. <span className="text-gradient">AlpheasAI</span></>}
        />
        <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
          <div className="grid grid-cols-3 text-sm font-semibold bg-muted/50 px-6 py-4">
            <div>Capability</div>
            <div className="text-center">Traditional vendor</div>
            <div className="text-center text-primary">AlpheasAI</div>
          </div>
          {compare.map((row, i) => (
            <div key={row.feat} className={`grid grid-cols-3 items-center px-6 py-4 text-sm ${i % 2 ? "bg-muted/20" : ""}`}>
              <div className="font-medium">{row.feat}</div>
              <div className="text-center text-muted-foreground">
                {typeof row.them === "boolean" ? (row.them ? <Check className="inline h-4 w-4 text-success" /> : <X className="inline h-4 w-4 text-muted-foreground/60" />) : row.them}
              </div>
              <div className="text-center font-medium">
                {typeof row.us === "boolean" ? (row.us ? <Check className="inline h-5 w-5 text-primary" /> : <X className="inline h-5 w-5" />) : <span className="text-primary">{row.us}</span>}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section>
        <div className="rounded-3xl bg-gradient-to-br from-primary to-accent text-primary-foreground p-10 md:p-16 text-center shadow-glow relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
          <div className="relative space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Ready to build scalable AI platforms <br className="hidden md:block" />and reduce cloud costs?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Talk to an engineer in 24 hours. Walk away with a roadmap — whether or not you work with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90"><Link to="/contact">Book Strategy Call</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20"><Link to="/contact">Get Free Assessment</Link></Button>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
