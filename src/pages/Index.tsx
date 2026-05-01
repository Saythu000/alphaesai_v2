import { Link } from "react-router-dom";
import { ArrowRight, Code2, Layers, Cpu, GraduationCap, Briefcase, Sparkles, Check, Users, Trophy } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Counter } from "@/components/site/Counter";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Master HTML, CSS, JavaScript and React to build modern, responsive user interfaces.",
    points: ["UI & UX fundamentals", "React + Tailwind", "Real client projects"],
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    desc: "Go end-to-end — from pixel-perfect frontends to APIs, databases and deployments.",
    points: ["Node.js & databases", "REST & auth", "Deploy to production"],
    highlight: true,
  },
  {
    icon: Cpu,
    title: "AI & ML",
    desc: "Learn the maths and tooling behind modern AI — and ship your first ML-powered app.",
    points: ["Python & data science", "Classic ML + LLMs", "Capstone AI project"],
  },
];

const heroTrust = [
  { icon: GraduationCap, label: "Real-world projects from Day 1" },
  { icon: Briefcase, label: "Internship + Certificate" },
  { icon: Users, label: "Mentor-led learning" },
];

const why = [
  { icon: Sparkles, title: "Self Learning", desc: "Structured paths that teach you how to learn — long after the program ends." },
  { icon: Users, title: "Comfort", desc: "Friendly mentors, small cohorts and a community of learners just like you." },
  { icon: Trophy, title: "Opportunity", desc: "Hands-on internships and project experience you can put on your resume." },
];

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary via-[hsl(240_55%_12%)] to-[hsl(225_60%_14%)] text-white">
        <div className="absolute inset-0 bg-grid opacity-[0.07]" aria-hidden />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[1100px] rounded-full bg-primary/30 blur-[140px] opacity-70" aria-hidden />
        <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-accent/40 blur-[140px] opacity-60" aria-hidden />

        <div className="container relative pt-24 pb-28 md:pt-36 md:pb-40">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-glow-pulse" />
              Tech education · Internships · Mentorship
            </div>

            <div className="relative">
              <div className="absolute inset-x-0 -inset-y-6 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl opacity-60 -z-10" aria-hidden />
              <h1 className="text-5xl md:text-7xl lg:text-[5.25rem] font-bold tracking-tight leading-[1.02] text-white">
                Start Your{" "}
                <span className="bg-gradient-to-r from-primary-glow via-white to-accent bg-clip-text text-transparent">
                  Tech Journey
                </span>{" "}
                Here
              </h1>
            </div>

            <p className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
              Hands-on training in Frontend, Full Stack and AI/ML — taught by mentors,
              <span className="text-white"> built around real projects.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Button asChild size="lg" variant="hero" className="h-12 px-7 text-base">
                <Link to="/contact">Apply for Internship <ArrowRight className="ml-1" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7 text-base border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <Link to="/services">Explore Programs</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-8 text-sm text-white/70">
              {heroTrust.map((t) => (
                <div key={t.label} className="inline-flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 border border-white/10">
                    <t.icon className="h-3.5 w-3.5 text-primary-glow" />
                  </span>
                  <span className="font-medium">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" aria-hidden />
      </section>

      {/* STATS */}
      <Section className="!py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: 500, suf: "+", l: "Learners trained" },
            { v: 30, suf: "+", l: "Mentor-led projects" },
            { v: 90, suf: "%", l: "Internship completion" },
            { v: 3, suf: "", l: "Specialization tracks" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card hover-lift">
              <div className="text-3xl md:text-5xl font-bold text-gradient">
                <Counter to={s.v} suffix={s.suf} />
              </div>
              <div className="mt-2 text-sm md:text-base text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <Eyebrow>About Us</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Who <span className="text-gradient">we are</span>?
            </h2>
            <p className="text-muted-foreground text-lg">
              At alphaesAI, we're pioneering the future of tech education by offering
              comprehensive training in Frontend Development, Full Stack Development and
              Artificial Intelligence.
            </p>
            <p className="text-muted-foreground text-lg">
              Our mission is to empower aspiring developers and AI enthusiasts with
              industry-ready skills that make a real impact.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 pt-2">
              {["Frontend Development", "Full Stack Development", "ML & AI"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm font-medium">
                  <Check className="h-4 w-4 text-primary" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-accent/10 p-10 shadow-card">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code2, label: "Frontend" },
                { icon: Layers, label: "Full Stack" },
                { icon: Cpu, label: "AI / ML" },
                { icon: Briefcase, label: "Internship" },
              ].map((c) => (
                <div key={c.label} className="rounded-2xl border border-border bg-card p-6 text-center hover-lift">
                  <div className="h-12 w-12 mx-auto rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow mb-3">
                    <c.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="font-semibold text-sm">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section className="bg-muted/30">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>Real World Learning <span className="text-gradient">From Day 01</span></>}
          subtitle="We don't believe in passive tutorials. Every learner ships projects, gets mentor feedback and walks out with a portfolio."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {why.map((w) => (
            <div key={w.title} className="rounded-2xl border border-border bg-card p-7 shadow-card hover-lift">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow mb-5">
                <w.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{w.title}</h3>
              <p className="text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROGRAMS / SERVICES */}
      <Section id="programs">
        <SectionHeading
          eyebrow="Our Services"
          title={<>Unleash your talents with <span className="text-gradient">hands-on internships</span></>}
          subtitle="Three focused tracks. Pick the one that matches your goals — or combine them."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className={`group rounded-2xl border bg-card p-8 shadow-card hover-lift relative overflow-hidden ${
                p.highlight ? "border-primary/40" : "border-border"
              }`}
            >
              {p.highlight && (
                <div className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary">
                  Most popular
                </div>
              )}
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow mb-6">
                <p.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground mb-5">{p.desc}</p>
              <ul className="space-y-2 mb-6">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" /> {pt}
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

      {/* FINAL CTA */}
      <Section>
        <div className="rounded-3xl bg-gradient-to-br from-primary to-accent text-primary-foreground p-10 md:p-16 text-center shadow-glow relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
          <div className="relative space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Ready to start your <br className="hidden md:block" /> tech journey?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Apply for an internship today and learn directly from mentors who've shipped real products.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90"><Link to="/contact">Apply for Internship</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20"><Link to="/services">View Programs</Link></Button>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
