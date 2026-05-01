import { Layout } from "@/components/site/Layout";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  { title: "How to land your first frontend internship", excerpt: "A practical guide to building a portfolio that gets noticed by recruiters.", date: "Apr 22, 2026", tag: "Career" },
  { title: "Full Stack roadmap 2026", excerpt: "The exact stack — and the order — we recommend to interns starting from zero.", date: "Apr 10, 2026", tag: "Roadmap" },
  { title: "Why ML & AI projects matter on your resume", excerpt: "Three project ideas that move you from tutorial-watcher to job-ready.", date: "Mar 28, 2026", tag: "AI / ML" },
  { title: "Self-learning, the right way", excerpt: "How our interns structure 90-day learning sprints that actually stick.", date: "Mar 14, 2026", tag: "Learning" },
];

const Blog = () => (
  <Layout>
    <section className="bg-hero">
      <div className="container py-20 md:py-28 max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Learn, build, <span className="text-gradient">grow</span>.
        </h1>
        <p className="text-lg text-muted-foreground">
          Tutorials, career advice and behind-the-scenes from the alphaesAI team and interns.
        </p>
      </div>
    </section>

    <Section>
      <SectionHeading eyebrow="Latest" title="From the alphaesAI blog" />
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <Link key={p.title} to="/blog" className="group rounded-2xl border border-border bg-card p-7 shadow-card hover-lift">
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{p.tag}</span>
              <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{p.excerpt}</p>
            <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
              Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  </Layout>
);

export default Blog;
