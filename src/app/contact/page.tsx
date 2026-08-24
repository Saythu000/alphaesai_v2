"use client";

import Link from "next/link";
import { useCMS } from "@/context/CMSContext";
import { Phone, Mail, MapPin, Calendar, Check, ArrowRight, Triangle } from "lucide-react";

export default function Contact() {
  const { data } = useCMS();
  const contactEmail = data.footer?.contactEmail || "contact@alphaesai.com";
  const contactPhone = data.footer?.contactPhone || "+91 70106 42399";
  const contactAddress = data.footer?.contactAddress || "No. 472/7 Balaji Arcade, Ejipura, Koramangala 4th Block, Bengaluru, Karnataka - 560095, India";

  return (
    <div className="w-full bg-[#fff8f5] text-[#241913] min-h-screen">
      {/* Hero Header */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 border border-[#241913]/15 bg-[#fff1ea] px-4 py-1.5 rounded-full font-mono-tech text-xs font-semibold text-[#964900] mb-6 tracking-widest uppercase shadow-sm">
          <Triangle className="w-3 h-3 fill-[#964900] text-[#964900]" />
          <span>Executive Briefing & Scoping</span>
        </div>

        <h1 className="font-hanken text-4xl sm:text-6xl font-extrabold text-[#241913] mb-6 tracking-tight leading-tight">
          Schedule an <span className="text-[#964900]">Executive Briefing</span>
        </h1>

        <p className="font-inter text-lg text-[#564336] max-w-3xl mx-auto mb-6 font-normal leading-relaxed">
          Connect directly with our Principal Architects and Forward Deployed
          Engineers to audit your data architecture, database performance, and
          AI roadmap.
        </p>

        <p className="text-xs sm:text-sm text-[#964900] font-mono-tech font-semibold">
          // Confidential 45-minute technical review · Zero sales pressure · Principal Engineer led
        </p>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-[#fff1ea] border-t border-[#241913]/10">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="bg-[#fff8f5] border border-[#241913]/15 rounded-xl p-8 shadow-sm space-y-6">
                <div className="text-xs font-mono-tech text-[#964900] uppercase font-bold tracking-widest">
                  Direct Contact
                </div>
                <h3 className="font-hanken text-2xl font-bold text-[#241913]">
                  Engineering Operations
                </h3>

                <ul className="space-y-4 text-sm text-[#564336]">
                  <li className="flex items-center gap-3 bg-[#F3F3F3] p-4 rounded-lg border border-[#241913]/10 shadow-sm">
                    <Phone className="w-5 h-5 text-[#964900] shrink-0" />
                    <div>
                      <div className="text-xs text-[#564336] font-mono-tech">
                        Phone Support
                      </div>
                      <a
                        href={`tel:${contactPhone}`}
                        className="font-bold text-[#241913] hover:text-[#964900] transition-colors"
                      >
                        {contactPhone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 bg-[#F3F3F3] p-4 rounded-lg border border-[#241913]/10 shadow-sm">
                    <Mail className="w-5 h-5 text-[#964900] shrink-0" />
                    <div>
                      <div className="text-xs text-[#564336] font-mono-tech">
                        Direct Email
                      </div>
                      <a
                        href={`mailto:${contactEmail}`}
                        className="font-bold text-[#241913] hover:text-[#964900] transition-colors"
                      >
                        {contactEmail}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-[#fff8f5] border border-[#241913]/15 rounded-xl p-8 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#964900] uppercase font-bold tracking-widest">
                  <MapPin className="w-4 h-4" />
                  <span>Headquarters</span>
                </div>
                <h3 className="font-hanken text-xl font-bold text-[#241913]">
                  Bengaluru Engineering Center
                </h3>
                <p className="font-inter text-sm text-[#564336] leading-relaxed">
                  {contactAddress}
                </p>
              </div>
            </div>

            {/* Executive Briefing Checklist & Action */}
            <div className="bg-[#fff8f5] border-2 border-[#964900] rounded-xl p-8 sm:p-10 shadow-md space-y-6">
              <div className="text-xs font-mono-tech text-[#964900] uppercase font-bold tracking-widest">
                Executive Briefing Topics
              </div>
              <h2 className="font-hanken text-3xl font-bold text-[#241913]">
                What We Cover In 45 Minutes
              </h2>

              <ul className="space-y-4 text-xs sm:text-sm text-[#241913] font-inter">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#964900] shrink-0 mt-0.5" />
                  <span>
                    <strong>Database & Cloud FinOps Audit</strong>: Identify 30–50% query and infrastructure savings.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#964900] shrink-0 mt-0.5" />
                  <span>
                    <strong>Databricks & Snowflake Modernization</strong>: Evaluate Delta Lake readiness for AI RAG pipelines.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#964900] shrink-0 mt-0.5" />
                  <span>
                    <strong>OneAI Assist Platform Demo</strong>: Review live lead scoring & autonomous agent workflows.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#964900] shrink-0 mt-0.5" />
                  <span>
                    <strong>FDE Engagement Scoping</strong>: Map out a 2–6 week embedded engineering sprint timeline.
                  </span>
                </li>
              </ul>

              <div className="pt-6 border-t border-[#241913]/10 space-y-4">
                <a
                  href="mailto:contact@alphaesai.com?subject=Executive%20Briefing%20Request"
                  className="bg-[#964900] text-white font-inter text-sm px-6 py-3.5 rounded-md font-semibold hover:bg-[#7a3b00] transition-colors shadow-md flex items-center justify-center gap-2 text-center w-full"
                >
                  <span>Email Us to Book Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-[11px] text-[#564336] text-center font-mono-tech">
                  Guaranteed response from a principal architect within 4 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

