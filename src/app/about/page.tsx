"use client";

import Link from "next/link";
import { useCMS } from "@/context/CMSContext";
import { Target, Compass, Rocket, Users, Triangle, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Production over prototypes",
    desc: "We don't ship demos. We ship production systems your team can run on Monday.",
  },
  {
    icon: Compass,
    title: "Cost is a feature",
    desc: "FinOps is built into every architecture from day one — not bolted on later.",
  },
  {
    icon: Rocket,
    title: "Speed with safety",
    desc: "Senior engineers, modern tooling, and safety guardrails — fast doesn't mean reckless.",
  },
  {
    icon: Users,
    title: "Builders, not slide-makers",
    desc: "Every Forward Deployed Engineer on our team writes production code.",
  },
];

export default function About() {
  const { data } = useCMS();
  const cmsData = data.pages?.about;

  return (
    <div className="w-full bg-[#fff8f5] text-[#241913] min-h-screen">
      {/* Hero Header */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 border border-[#241913]/15 bg-[#fff1ea] px-4 py-1.5 rounded-full font-mono-tech text-xs font-semibold text-[#964900] mb-6 tracking-widest uppercase shadow-sm">
          <Triangle className="w-3 h-3 fill-[#964900] text-[#964900]" />
          <span>{cmsData?.heroBadge || "About AlphaesAI"}</span>
        </div>

        <h1 className="font-hanken text-4xl sm:text-6xl font-extrabold text-[#241913] mb-6 tracking-tight leading-tight">
          {cmsData?.title || "Building the Operating System for Industrial-Scale AI"}
        </h1>

        <p className="font-inter text-lg text-[#564336] max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          {cmsData?.subtitle || "We build production-grade AI platforms like OneAI Assist and embed Forward Deployed Engineers inside client teams to modernize data architecture, optimize database costs, and deploy AI guardrails."}
        </p>

        <div className="flex justify-center">
          <Link
            href="/contact"
            className="bg-[#964900] text-white font-inter text-base px-8 py-3.5 rounded-md font-semibold hover:bg-[#7a3b00] transition-colors shadow-md text-center inline-flex items-center gap-2"
          >
            <span>Talk to Our Engineering Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Philosophy & Values */}
      <section className="py-20 bg-[#fff1ea] border-t border-[#241913]/10">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-xs font-mono-tech text-[#964900] uppercase tracking-widest font-bold">
                Our Philosophy
              </div>
              <h2 className="font-hanken text-3xl sm:text-4xl font-bold text-[#241913]">
                Why We Exist
              </h2>
              <p className="font-inter text-base text-[#564336] leading-relaxed">
                Most AI and cloud projects fail in production — burning budget
                on PoCs that never ship, on infrastructure no one understands, and
                on cloud database bills no one can explain.
              </p>
              <p className="font-inter text-base text-[#564336] leading-relaxed">
                AlphaesAI was founded by senior engineers who have shipped
                large-scale AI and data platforms across healthcare, fintech,
                and enterprise SaaS. We bring that exact rigor and our
                battle-tested playbooks to every client engagement.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v) => {
                const IconComp = v.icon;
                return (
                  <div
                    key={v.title}
                    className="bg-[#fff8f5] border border-[#241913]/15 hover:border-[#964900]/40 rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#fff1ea] border border-[#241913]/10 flex items-center justify-center text-[#964900] mb-4 shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-hanken font-bold text-[#241913] text-base mb-2">
                      {v.title}
                    </h3>
                    <p className="font-inter text-xs text-[#564336] leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-mono-tech text-[#964900] uppercase tracking-widest font-bold">
              Proven Performance
            </div>
            <h2 className="font-hanken text-3xl sm:text-4xl font-bold text-[#241913]">
              Built by Engineers. Driven by Outcomes.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: "50+", l: "AI systems in production" },
              { v: "100+", l: "Cloud workloads managed" },
              { v: "30–50%", l: "Avg. cloud database savings" },
              { v: "99.9%", l: "Platform uptime SLA" },
            ].map((s) => (
              <div
                key={s.l}
                className="bg-[#F3F3F3] border border-[#241913]/10 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-[#964900] font-mono-tech">
                  {s.v}
                </div>
                <div className="text-xs text-[#564336] mt-2 font-medium font-inter">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

