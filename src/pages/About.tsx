import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Target, Compass, Rocket, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Real-world learning", desc: "We teach by building. Every learner ships projects, not just slides." },
  { icon: Compass, title: "Mentors who care", desc: "Small cohorts and direct access to mentors who've worked in industry." },
  { icon: Rocket, title: "Industry-ready skills", desc: "Curriculum tuned to what hiring teams actually look for in 2026." },
  { icon: Users, title: "A community", desc: "Learn alongside peers, share work and grow together." },
];

const About = () => (
  <Layout>
    <section className="bg-hero">
      <div className="container py-20 md:py-28 max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
        <Eyebrow>About alphaesAI</Eyebrow>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Pioneering the future of <span className="text-gradient">tech education</span>.
        </h1>
        <p className="text-lg text-muted-foreground">
          We empower aspiring developers and AI enthusiasts with hands-on training,
          mentorship and internships that lead to real opportunity.
        </p>
      </div>
    </section>

    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Who we are</h2>
          <p className="text-muted-foreground text-lg">
            At alphaesAI, we believe great developers aren't born — they're built through
            projects, feedback and community. We focus on three areas where the demand for
            new talent is exploding: Frontend, Full Stack and AI/ML.
          </p>
          <p className="text-muted-foreground text-lg">
            Our internships and mentor-led programs give learners the structure of a
            classroom and the realism of a startup — so you graduate with a portfolio,
            not just a certificate.
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
      <SectionHeading eyebrow="By the numbers" title="A growing community of builders." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { v: "500+", l: "Learners trained" },
          { v: "30+", l: "Mentor-led projects" },
          { v: "90%", l: "Internship completion" },
          { v: "3", l: "Specialization tracks" },
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start your tech journey with us</h2>
        <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90"><Link to="/contact">Apply for Internship</Link></Button>
      </div>
    </Section>
  </Layout>
);

export default About;
