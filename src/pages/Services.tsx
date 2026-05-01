import { Link } from "react-router-dom";
import { ArrowRight, Code2, Layers, Cpu, Check } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Section, Eyebrow } from "@/components/site/Section";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "frontend",
    icon: Code2,
    title: "Frontend Development",
    tagline: "Build beautiful, responsive interfaces users love.",
    bullets: [
      "HTML, CSS & modern JavaScript",
      "React, Tailwind CSS and component design",
      "UI / UX foundations and accessibility",
      "Responsive layouts for mobile and desktop",
      "Hands-on portfolio projects",
    ],
  },
  {
    id: "fullstack",
    icon: Layers,
    title: "Full Stack Development",
    tagline: "Go end-to-end — client, server and database.",
    highlight: true,
    bullets: [
      "Node.js, Express and REST APIs",
      "Databases (SQL & NoSQL)",
      "Authentication, sessions and security",
      "Deploying real apps to production",
      "Capstone full-stack project",
    ],
  },
  {
    id: "ai",
    icon: Cpu,
    title: "AI & ML",
    tagline: "Learn the maths, tools and projects behind modern AI.",
    bullets: [
      "Python for data science",
      "Classical ML: regression, trees, clustering",
      "Deep learning & intro to LLMs",
      "Build & deploy an ML-powered app",
      "Career guidance for AI roles",
    ],
  },
];

const Services = () => (
  <Layout>
    <section className="bg-hero">
      <div className="container py-20 md:py-28 text-center max-w-3xl mx-auto space-y-6 animate-fade-in-up">
        <Eyebrow>Our Services</Eyebrow>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Hands-on <span className="text-gradient">programs & internships</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Three focused tracks designed to take you from beginner to job-ready, with mentor support every step.
        </p>
        <div className="flex flex-wrap gap-3 justify-center pt-2">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="text-sm px-4 py-2 rounded-full border border-border bg-card hover:border-primary transition-colors">
              {s.title}
            </a>
          ))}
        </div>
      </div>
    </section>

    {services.map((s, i) => (
      <Section key={s.id} id={s.id} className={i % 2 ? "bg-muted/30" : ""}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`${i % 2 ? "lg:order-2" : ""} space-y-5`}>
            <div className="inline-flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              {s.highlight && (
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary">
                  Most popular
                </span>
              )}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{s.title}</h2>
            <p className="text-lg text-muted-foreground">{s.tagline}</p>
            <Button asChild variant="hero"><Link to="/contact">Apply for Internship <ArrowRight className="ml-1" /></Link></Button>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <ul className="space-y-3">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
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
      <div className="rounded-3xl bg-gradient-to-br from-primary to-accent text-primary-foreground p-10 md:p-16 text-center shadow-glow">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure which track to pick?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">Tell us about your background and goals — we'll help you choose.</p>
        <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90"><Link to="/contact">Talk to a mentor</Link></Button>
      </div>
    </Section>
  </Layout>
);

export default Services;
