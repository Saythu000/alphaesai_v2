"use client";

import Link from "next/link";
import { useCMS } from "@/context/CMSContext";
import {
  Stethoscope,
  MessageSquare,
  Video,
  Brain,
  Calendar,
  LayoutDashboard,
  ShieldCheck,
  Check,
  Triangle,
  ArrowRight,
} from "lucide-react";

const defaultSections = [
  {
    icon: MessageSquare,
    title: "AI Consultation",
    desc: "Patients chat with our AI doctor for an instant, structured intake — available 24/7.",
    bullets: ["Symptom checker", "Triage & urgency scoring", "Multilingual"],
  },
  {
    icon: Video,
    title: "Doctor Consultation",
    desc: "Seamless video or voice consult with a licensed physician, pre-briefed by AI.",
    bullets: ["HD video & voice", "Async or live", "Specialty routing"],
  },
  {
    icon: Brain,
    title: "AI Clinical Engine",
    desc: "Automated clinical summaries and decision support — built for clinicians, not replacing them.",
    bullets: [
      "SOAP-format summaries",
      "Differential diagnosis hints",
      "Drug interaction checks",
    ],
  },
  {
    icon: Calendar,
    title: "Patient Features",
    desc: "Appointments, reports and full visit history in one secure portal.",
    bullets: ["Booking & reminders", "Lab reports", "Prescription history"],
  },
  {
    icon: LayoutDashboard,
    title: "Doctor Features",
    desc: "A clinician dashboard with AI assistance baked into every workflow.",
    bullets: ["Smart scheduling", "AI-drafted notes", "EMR integration"],
  },
  {
    icon: ShieldCheck,
    title: "Security",
    desc: "HIPAA-ready architecture, encrypted at rest and in transit, audit-logged.",
    bullets: ["HIPAA-ready", "End-to-end encryption", "SOC 2 roadmap"],
  },
];

export default function DrGodly() {
  const { data } = useCMS();
  const cmsData = data.pages?.drgodly;

  return (
    <div className="w-full bg-[#fff8f5] text-[#241913] min-h-screen">
      {/* Hero Header */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 border border-[#241913]/15 bg-[#fff1ea] px-4 py-1.5 rounded-full font-mono-tech text-xs font-semibold text-[#964900] mb-6 tracking-widest uppercase shadow-sm">
          <Triangle className="w-3 h-3 fill-[#964900] text-[#964900]" />
          <span>{cmsData?.heroBadge || "AlphaesAI Healthcare Product"}</span>
        </div>

        <h1 className="font-hanken text-4xl sm:text-6xl font-extrabold text-[#241913] mb-6 tracking-tight leading-tight">
          {cmsData?.title || "DrGodly — AI-First Telemedicine Platform"}
        </h1>

        <p className="font-inter text-lg text-[#564336] max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          {cmsData?.subtitle || "AI doctor + real doctor in one seamless experience. Built on the same enterprise-grade infrastructure we deploy for our clients."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href={cmsData?.primaryCtaHref || "/contact"}
            className="bg-[#964900] text-white font-inter text-base px-8 py-3.5 rounded-md font-semibold hover:bg-[#7a3b00] transition-colors shadow-md text-center inline-flex items-center gap-2"
          >
            <span>{cmsData?.primaryCtaText || "Start AI Consultation"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="border border-[#241913]/20 bg-[#F3F3F3] text-[#241913] font-inter text-base px-8 py-3.5 rounded-md font-semibold hover:bg-[#fff1ea] transition-colors text-center"
          >
            Request Healthcare Demo
          </Link>
        </div>
      </section>

      {/* Platform Features Grid */}
      <section className="py-20 bg-[#fff1ea] border-t border-[#241913]/10">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-mono-tech text-[#964900] uppercase tracking-widest mb-2 font-bold">
              Dual Intelligence
            </div>
            <h2 className="font-hanken text-3xl sm:text-4xl font-bold text-[#241913]">
              One Platform, Two Intelligences
            </h2>
            <p className="font-inter text-base text-[#564336] mt-3">
              Everything a modern telemedicine product needs — with AI woven through every clinical workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {defaultSections.map((s) => {
              const IconComp = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-[#fff8f5] border border-[#241913]/15 hover:border-[#964900]/40 rounded-xl p-8 space-y-4 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#fff1ea] border border-[#241913]/10 flex items-center justify-center text-[#964900] shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-hanken text-xl font-bold text-[#241913]">
                    {s.title}
                  </h3>
                  <p className="font-inter text-xs text-[#564336] leading-relaxed">
                    {s.desc}
                  </p>
                  <ul className="space-y-2 pt-4 border-t border-[#241913]/10 font-inter">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-xs font-semibold text-[#241913]"
                      >
                        <Check className="w-4 h-4 text-[#964900]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono-tech text-[#964900] uppercase tracking-widest mb-2 font-bold">
              Workflow
            </div>
            <h2 className="font-hanken text-3xl sm:text-4xl font-bold text-[#241913]">
              From Symptom to Prescription in One Flow
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { t: "AI Intake", d: "Chat-based symptom triage & intake." },
              { t: "Clinical Summary", d: "AI generates a structured SOAP note." },
              { t: "Doctor Consult", d: "Video/voice with a licensed doctor." },
              { t: "Prescription & Follow-up", d: "EMR integration and automated reminders." },
            ].map((s, i) => (
              <div
                key={s.t}
                className="bg-[#F3F3F3] border border-[#241913]/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-xs font-mono-tech font-bold text-[#964900] mb-2">
                  STEP 0{i + 1}
                </div>
                <div className="font-hanken font-bold text-[#241913] text-base mb-1">
                  {s.t}
                </div>
                <div className="font-inter text-xs text-[#564336] leading-relaxed">
                  {s.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

