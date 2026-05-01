import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Eyebrow, Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Calendar, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Thanks — we'll be in touch within 24 hours.", description: "A senior engineer will reach out shortly." });
  };

  return (
    <Layout>
      <section className="bg-hero">
        <div className="container py-20 md:py-28 max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Get a <span className="text-gradient">free assessment</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Tell us a bit about your project. A senior engineer will respond within 24 hours.
          </p>
        </div>
      </section>

      <Section className="!pt-12">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-8 shadow-card">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <Check className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-semibold">Message received</h2>
                <p className="text-muted-foreground">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" required placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" type="email" required placeholder="jane@company.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Acme Inc." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="topic">I'm interested in</Label>
                    <select id="topic" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option>AI consulting & development</option>
                      <option>Cloud cost optimization (FinOps)</option>
                      <option>Cloud migration & architecture</option>
                      <option>Databricks consulting</option>
                      <option>DrGodly demo</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="msg">Project details</Label>
                  <Textarea id="msg" rows={5} placeholder="What are you building, and what does success look like?" />
                </div>
                <Button type="submit" size="lg" variant="hero" className="w-full sm:w-auto">Send message</Button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            {[
              { icon: Calendar, title: "Book a strategy call", desc: "30-min intro with a senior engineer." },
              { icon: Mail, title: "Email us", desc: "hello@alpheasai.com" },
              { icon: MessageCircle, title: "Response time", desc: "Within 24 hours, every business day." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-card hover-lift">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow mb-3">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="font-semibold">{c.title}</div>
                <div className="text-sm text-muted-foreground">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
