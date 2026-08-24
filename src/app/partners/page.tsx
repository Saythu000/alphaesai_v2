"use client";

import Link from "next/link";
import { useCMS } from "@/context/CMSContext";
import { ArrowRight, Check, Handshake, Triangle } from "lucide-react";

export default function PartnersPage() {
  const { data } = useCMS();
  const cmsData = data.pages?.partners;

  return (
    <div className="w-full bg-[#fff8f5] text-[#241913] min-h-screen">
      {/* Hero Header */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 border border-[#241913]/15 bg-[#fff1ea] px-4 py-1.5 rounded-full font-mono-tech text-xs font-semibold text-[#964900] mb-6 tracking-widest uppercase shadow-sm">
          <Triangle className="w-3 h-3 fill-[#964900] text-[#964900]" />
          <span>{cmsData?.heroBadge || "AlphaesAI Partner Network"}</span>
        </div>

        <h1 className="font-hanken text-4xl sm:text-6xl font-extrabold text-[#241913] mb-6 tracking-tight leading-tight">
          {cmsData?.title || "OneAI Assist: A Growth Engine for Your Clients"}
        </h1>

        <p className="font-inter text-lg text-[#564336] max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          {cmsData?.subtitle || "Offer your clients a production-grade automation platform. Whether you are a referral, reseller, or technology partner, AlphaesAI provides the engineering depth to ensure AI delivers lead-generation results for your portfolio."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href={cmsData?.primaryCtaHref || "/contact"}
            className="bg-[#964900] text-white font-inter text-base px-8 py-3.5 rounded-md font-semibold hover:bg-[#7a3b00] transition-colors shadow-md text-center inline-flex items-center gap-2"
          >
            <span>{cmsData?.primaryCtaText || "Apply to Become a Partner"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="border border-[#241913]/20 bg-[#F3F3F3] text-[#241913] font-inter text-base px-8 py-3.5 rounded-md font-semibold hover:bg-[#fff1ea] transition-colors text-center"
          >
            Schedule Partner Discovery Call
          </Link>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-20 bg-[#fff1ea] border-t border-[#241913]/10">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-mono-tech text-[#964900] uppercase tracking-widest mb-2 font-bold">
              Collaborative Models
            </div>
            <h2 className="font-hanken text-3xl sm:text-4xl font-bold text-[#241913]">
              Partner Ecosystem Tiers
            </h2>
            <p className="font-inter text-base text-[#564336] mt-3">
              Choose how you want to partner with AlphaesAI and accelerate client growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 01: Referral */}
            <div className="bg-[#fff8f5] border border-[#241913]/15 hover:border-[#964900]/40 rounded-xl p-8 space-y-4 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-xs font-mono-tech text-[#964900] uppercase font-bold">
                Tier 01
              </div>
              <h3 className="font-hanken text-2xl font-bold text-[#241913]">
                Referral Partners
              </h3>
              <p className="font-inter text-sm text-[#564336] leading-relaxed">
                Connect enterprise clients who need production AI systems and earn competitive referral rewards.
              </p>
              <ul className="space-y-3 text-xs text-[#241913] pt-4 border-t border-[#241913]/10 font-inter">
                <li className="flex items-center gap-2.5 font-medium">
                  <Check className="w-4 h-4 text-[#964900]" /> Up to 15% revenue share
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <Check className="w-4 h-4 text-[#964900]" /> Full engineering sales support
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <Check className="w-4 h-4 text-[#964900]" /> Joint executive briefings
                </li>
              </ul>
            </div>

            {/* Tier 02: Reseller */}
            <div className="bg-[#fff8f5] border-2 border-[#964900] rounded-xl p-8 space-y-4 shadow-md relative hover:shadow-lg transition-all duration-300">
              <div className="absolute top-4 right-4 text-[10px] font-mono-tech font-bold px-3 py-1 bg-[#964900]/10 text-[#964900] border border-[#964900]/30 rounded-full">
                MOST POPULAR
              </div>
              <div className="text-xs font-mono-tech text-[#964900] uppercase font-bold">
                Tier 02
              </div>
              <h3 className="font-hanken text-2xl font-bold text-[#241913]">
                Reseller Partners
              </h3>
              <p className="font-inter text-sm text-[#564336] leading-relaxed">
                Package OneAI Assist under your consulting brand and deliver automated AI transformation to your portfolio.
              </p>
              <ul className="space-y-3 text-xs text-[#241913] pt-4 border-t border-[#241913]/10 font-inter">
                <li className="flex items-center gap-2.5 font-semibold">
                  <Check className="w-4 h-4 text-[#964900]" /> White-label deployment
                </li>
                <li className="flex items-center gap-2.5 font-semibold">
                  <Check className="w-4 h-4 text-[#964900]" /> Dedicated FDE technical lead
                </li>
                <li className="flex items-center gap-2.5 font-semibold">
                  <Check className="w-4 h-4 text-[#964900]" /> Recurring SaaS revenue share
                </li>
              </ul>
            </div>

            {/* Tier 03: Technology */}
            <div className="bg-[#fff8f5] border border-[#241913]/15 hover:border-[#964900]/40 rounded-xl p-8 space-y-4 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-xs font-mono-tech text-[#964900] uppercase font-bold">
                Tier 03
              </div>
              <h3 className="font-hanken text-2xl font-bold text-[#241913]">
                Technology Partners
              </h3>
              <p className="font-inter text-sm text-[#564336] leading-relaxed">
                Build native integrations between your data platforms and OneAI Assist knowledge graph.
              </p>
              <ul className="space-y-3 text-xs text-[#241913] pt-4 border-t border-[#241913]/10 font-inter">
                <li className="flex items-center gap-2.5 font-medium">
                  <Check className="w-4 h-4 text-[#964900]" /> Co-marketing & joint sales
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <Check className="w-4 h-4 text-[#964900]" /> API & SDK priority access
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <Check className="w-4 h-4 text-[#964900]" /> Sandbox dev environments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

