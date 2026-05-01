import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Target, Compass, Rocket, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Production over prototypes", desc: "We don't ship demos. We ship systems your team can run on Monday." },
  { icon: Compass, title: "Cost is a feature", desc: "FinOps is built into every architecture from day one — not bolted on later." },
  { icon: Rocket, title: "Speed with safety", desc: "Senior engineers, modern tooling and guardrails — fast doesn't mean reckless." },
  { icon: Users, title: "Builders, not slide-makers", desc: "Every consultant on our team writes production code." },
];

const About = () => (
  <Layout>
    <section className="bg-hero">
      <div className="container py-20 md:py-28 max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
        <Eyebrow>About AlpheasAI</Eyebrow>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          A product company that <span className="text-gradient">consults</span> — not the other way around.
        </h1>
        <p className="text-lg text-muted-foreground">
          We build our own AI products, like DrGodly. The same engineers help our clients ship
          intelligent, cost-efficient platforms in weeks — not quarters.
        </p>
      </div>
    </section>

    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why we exist</h2>
          <p className="text-muted-foreground text-lg">
            Most AI and cloud projects fail in production — burning budget on PoCs that never ship,
            on infrastructure no one understands, and on cloud bills no one can explain.
          </p>
          <p className="text-muted-foreground text-lg">
            AlpheasAI was founded by engineers who have shipped large-scale AI and cloud systems at
            healthcare, fintech and SaaS companies. We bring that same rigor — and our own
            production playbooks — to every engagement.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-card hover-lift">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3 shadow-glow">
                <v.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="font-semibold mb-1">{v.title}</div>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <Section className="bg-muted/30">
      <SectionHeading eyebrow="By the numbers" title="A small team. Real outcomes." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { v: "50+", l: "AI systems in production" },
          { v: "100+", l: "Cloud workloads managed" },
          { v: "30–50%", l: "Avg. cloud savings" },
          { v: "99.9%", l: "Platform uptime" },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl border border-border bg-card p-8 text-center shadow-card">
            <div className="text-3xl md:text-4xl font-bold text-gradient">{s.v}</div>
            <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
          </div>
        ))}
      </div>
    </Section>

    <Section>
      <div className="rounded-3xl bg-gradient-to-br from-primary to-accent text-primary-foreground p-10 md:p-16 text-center shadow-glow">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Work with engineers, not account managers</h2>
        <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90"><Link to="/contact">Book Strategy Call</Link></Button>
      </div>
    </Section>
  </Layout>
);

export default About;
