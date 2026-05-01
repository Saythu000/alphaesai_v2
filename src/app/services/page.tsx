"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, LineChart, Cloud, Database, Check } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "ai",
    icon: Sparkles,
    title: "AI Development",
    tagline: "Production-grade GenAI, agents and ML systems.",
    bullets: [
      "LLM applications, RAG and search",
      "Agentic workflows and tool use",
      "Custom model fine-tuning",
      "MLOps, evaluation and observability",
      "AI safety, guardrails and red-teaming",
    ],
  },
  {
    id: "finops",
    icon: LineChart,
    title: "Cloud Cost Optimization & FinOps",
    tagline: "Cut cloud spend by 30–50% — without slowing engineering down.",
    highlight: true,
    bullets: [
      "Full cost audit across AWS, Azure, GCP, OCI",
      "Rightsizing, savings plans, RIs, spot strategy",
      "Kubernetes cost control (Karpenter, Kubecost)",
      "GPU & AI workload optimization",
      "Per-team / per-feature cost attribution",
      "Live FinOps dashboards & alerts",
    ],
  },
  {
    id: "migration",
    icon: Cloud,
    title: "Cloud Migration & Architecture",
    tagline: "Multi-cloud architectures with no vendor lock-in.",
    bullets: [
      "AWS · Azure · GCP · Oracle Cloud",
      "Landing zones and account/subscription design",
      "Zero-downtime migration playbooks",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Networking, security and compliance",
    ],
  },
  {
    id: "databricks",
    icon: Database,
    title: "Databricks Consulting",
    tagline: "Lakehouse, ML and performance — by certified engineers.",
    bullets: [
      "Delta Lake architecture and pipelines",
      "ML workflows on Databricks",
      "Performance tuning & cost optimization",
      "Unity Catalog & data governance",
      "Migration from Snowflake / EMR / HDP",
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-background">
        <div className="container py-20 md:py-28 text-center max-w-3xl mx-auto space-y-6">
          <Eyebrow>Services</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-foreground">
            End-to-end <span className="text-primary">AI, Cloud & FinOps</span> engineering
          </h1>
          <p className="text-lg text-muted-foreground">
            One team for strategy, build and operations — across every major cloud.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-sm px-4 py-2 rounded-full border border-border bg-card hover:border-primary transition-colors text-foreground">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {services.map((s, i) => (
        <Section key={s.id} id={s.id} className={i % 2 ? "bg-secondary/30" : ""}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${i % 2 ? "lg:order-2" : ""} space-y-5`}>
              <div className="inline-flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                {s.highlight && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-primary/15 text-primary">
                    Flagship practice
                  </span>
                )}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{s.title}</h2>
              <p className="text-lg text-muted-foreground">{s.tagline}</p>
              <Button asChild variant="hero"><Link href="/contact">Talk to an engineer <ArrowRight className="ml-1" /></Link></Button>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <ul className="space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-foreground">
                    <span className="h-6 w-6 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}

      <Section>
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure where to start?</h2>
          <p className="text-primary-foreground/85 max-w-2xl mx-auto mb-8">Get a free 60-minute assessment with a senior engineer.</p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90"><Link href="/contact">Get Free Assessment</Link></Button>
        </div>
      </Section>
    </>
  );
}
