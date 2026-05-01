import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, MessageSquare, Video, Brain, Calendar, LayoutDashboard, ShieldCheck, Check } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Button } from "@/components/ui/button";

const sections = [
  { icon: MessageSquare, title: "AI Consultation", desc: "Patients chat with our AI doctor for an instant, structured intake — available 24/7.",
    bullets: ["Symptom checker", "Triage & urgency scoring", "Multilingual"] },
  { icon: Video, title: "Doctor Consultation", desc: "Seamless video or voice consult with a licensed physician, pre-briefed by AI.",
    bullets: ["HD video & voice", "Async or live", "Specialty routing"] },
  { icon: Brain, title: "AI Clinical Engine", desc: "Automated clinical summaries and decision support — built for clinicians, not replacing them.",
    bullets: ["SOAP-format summaries", "Differential diagnosis hints", "Drug interaction checks"] },
  { icon: Calendar, title: "Patient Features", desc: "Appointments, reports and full visit history in one secure portal.",
    bullets: ["Booking & reminders", "Lab reports", "Prescription history"] },
  { icon: LayoutDashboard, title: "Doctor Features", desc: "A clinician dashboard with AI assistance baked into every workflow.",
    bullets: ["Smart scheduling", "AI-drafted notes", "EMR integration"] },
  { icon: ShieldCheck, title: "Security", desc: "HIPAA-ready architecture, encrypted at rest and in transit, audit-logged.",
    bullets: ["HIPAA-ready", "End-to-end encryption", "SOC 2 roadmap"] },
];

const DrGodly = () => (
  <Layout>
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-[hsl(222_47%_4%)] text-secondary-foreground">
      <div className="absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-3xl" />
      <div className="container relative py-20 md:py-32 text-center max-w-3xl mx-auto space-y-6 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs font-medium">
          <Stethoscope className="h-3 w-3" /> AlpheasAI Product
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          <span className="text-gradient">DrGodly</span> — AI-First Telemedicine Platform
        </h1>
        <p className="text-lg text-white/70">
          AI doctor + real doctor in one seamless experience. Built on the same enterprise-grade
          infrastructure we deploy for our clients.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button asChild size="lg" variant="hero"><Link to="/contact">Start AI Consultation <ArrowRight className="ml-1" /></Link></Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10"><Link to="/contact">Request Demo</Link></Button>
        </div>
      </div>
    </section>

    <Section>
      <SectionHeading
        eyebrow="Platform"
        title={<>One platform, <span className="text-gradient">two intelligences</span></>}
        subtitle="Everything a modern telemedicine product needs — with AI woven through every workflow."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((s) => (
          <div key={s.title} className="rounded-2xl border border-border bg-card p-7 shadow-card hover-lift">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow mb-5">
              <s.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
            <ul className="space-y-2">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" />{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>

    <Section className="bg-muted/30">
      <SectionHeading eyebrow="How it works" title={<>From symptom to prescription in <span className="text-gradient">one flow</span></>} />
      <div className="grid md:grid-cols-4 gap-5">
        {[
          { t: "AI intake", d: "Chat-based symptom consultation." },
          { t: "Clinical summary", d: "AI generates a structured handoff." },
          { t: "Doctor consult", d: "Video / voice with a real physician." },
          { t: "Prescription & follow-up", d: "Stored in EMR, with reminders." },
        ].map((s, i) => (
          <div key={s.t} className="rounded-2xl border border-border bg-card p-6 shadow-card hover-lift">
            <div className="text-xs font-semibold text-primary mb-2">STEP {i + 1}</div>
            <div className="font-semibold mb-1">{s.t}</div>
            <div className="text-sm text-muted-foreground">{s.d}</div>
          </div>
        ))}
      </div>
    </Section>

    <Section>
      <div className="rounded-3xl bg-gradient-to-br from-primary to-accent text-primary-foreground p-10 md:p-16 text-center shadow-glow">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">See DrGodly in action</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">Live demo with our team — for hospitals, clinics and digital-health startups.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90"><Link to="/contact">Request Demo</Link></Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20"><Link to="/contact">Talk to founders</Link></Button>
        </div>
      </div>
      <p className="text-xs text-muted-foreground text-center mt-8 max-w-2xl mx-auto">
        Disclaimer: DrGodly's AI does not replace licensed doctors. AI outputs are intended as
        decision support and triage — final diagnosis and prescriptions are always provided by a
        licensed clinician.
      </p>
    </Section>
  </Layout>
);

export default DrGodly;
