"use client";

import React, { useState } from "react";
import {
  Briefcase,
  ArrowRight,
  Sparkles,
  Code2,
  Zap,
  ShieldCheck,
  Award,
  Send,
  MapPin,
  Clock,
  Globe2,
  Laptop,
  BookOpen,
  HeartPulse,
  Building2,
  X,
  CheckCircle2,
  Flame,
} from "lucide-react";
import { useCMS } from "@/context/CMSContext";
import { JobPostingCMS } from "@/lib/cms-store";

export default function CareersPage() {
  const { data } = useCMS();
  const careersData = data.pages.careers;
  const roles = careersData?.jobs || [];

  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [activeRole, setActiveRole] = useState<JobPostingCMS | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedinUrl: "",
    portfolioUrl: "",
    experience: "3-5 years",
    coverNote: ""
  });

  const filteredRoles =
    selectedDept === "All"
      ? roles
      : roles.filter((r) => r.department === selectedDept);

  const handleApplyClick = (role: JobPostingCMS) => {
    setActiveRole(role);
    setIsSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="w-full bg-[#1c120c] text-[#fff8f5] min-h-screen pt-24 pb-20 font-['Inter'] selection:bg-[#ffb786]/30">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-radial from-[#964900]/20 via-[#392218]/10 to-transparent blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 space-y-20">
        {/* HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-6">
          <h1 className="font-['Hanken_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-black text-[#fff8f5] tracking-tight leading-[1.1]">
            Build the Operating System for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb786] via-[#ff8833] to-[#e65c00]">
              Industrial-Scale Agentic AI
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#f3ded3]/80 leading-relaxed font-light max-w-3xl mx-auto">
            We are looking for forward-deployed engineers, Databricks optimization architects, and cloud security pioneers to build systems that run real enterprise operations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#open-positions"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#964900] to-[#b85b00] hover:from-[#a85200] hover:to-[#c96400] text-white font-bold text-sm transition-all shadow-lg hover:shadow-[#964900]/30 flex items-center gap-2 group"
            >
              <Briefcase className="w-4 h-4 text-[#ffb786]" />
              View Open Roles
              <ArrowRight className="w-4 h-4 text-[#ffb786] group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#culture"
              className="px-6 py-3.5 rounded-xl bg-[#241913] hover:bg-[#392218] border border-[#ddc1b0]/20 text-[#ffb786] font-medium text-sm transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Our Engineering Culture
            </a>
          </div>
        </div>

        {/* CULTURE PILLARS */}
        <div id="culture" className="space-y-8 pt-8 border-t border-[#ddc1b0]/15">
          <div className="text-center space-y-2">
            <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#ffb786] uppercase tracking-wider">
              Engineering Mindset
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-3xl font-bold text-[#fff8f5]">
              Why Senior Engineers Choose AlphaesAI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#241913]/90 border border-[#ddc1b0]/20 hover:border-[#ffb786]/50 transition-all space-y-3 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#964900]/30 border border-[#ffb786]/30 flex items-center justify-center text-[#ffb786]">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-['Hanken_Grotesk'] text-lg font-bold text-[#fff8f5]">
                Forward-Deployed (FDE)
              </h3>
              <p className="text-xs text-[#f3ded3]/70 leading-relaxed font-light">
                No artificial sandbox projects. Our engineers write code directly into production enterprise architectures alongside client executives.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#241913]/90 border border-[#ddc1b0]/20 hover:border-[#ffb786]/50 transition-all space-y-3 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#964900]/30 border border-[#ffb786]/30 flex items-center justify-center text-[#ffb786]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-['Hanken_Grotesk'] text-lg font-bold text-[#fff8f5]">
                Microsecond Latency
              </h3>
              <p className="text-xs text-[#f3ded3]/70 leading-relaxed font-light">
                We optimize for sub-millisecond execution, custom CUDA kernels, and memory-efficient PySpark queries across petabyte datasets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#241913]/90 border border-[#ddc1b0]/20 hover:border-[#ffb786]/50 transition-all space-y-3 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#964900]/30 border border-[#ffb786]/30 flex items-center justify-center text-[#ffb786]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-['Hanken_Grotesk'] text-lg font-bold text-[#fff8f5]">
                Zero-Trust First
              </h3>
              <p className="text-xs text-[#f3ded3]/70 leading-relaxed font-light">
                Security is embedded in every pull request — eBPF runtime monitoring, KMS envelope encryption, and strict RBAC data isolation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#241913]/90 border border-[#ddc1b0]/20 hover:border-[#ffb786]/50 transition-all space-y-3 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#964900]/30 border border-[#ffb786]/30 flex items-center justify-center text-[#ffb786]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-['Hanken_Grotesk'] text-lg font-bold text-[#fff8f5]">
                Radical Ownership
              </h3>
              <p className="text-xs text-[#f3ded3]/70 leading-relaxed font-light">
                Small, elite pods of 2-3 engineers own complete products from technical RFCs to multi-region cloud deployment.
              </p>
            </div>
          </div>
        </div>

        {/* OPEN ROLES SECTION */}
        <div id="open-positions" className="space-y-8 pt-8 border-t border-[#ddc1b0]/15">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#ffb786] uppercase tracking-wider">
                Current Openings
              </span>
              <h2 className="font-['Hanken_Grotesk'] text-3xl font-bold text-[#fff8f5]">
                Engineering & Architecture Roles
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 bg-[#241913] p-1.5 rounded-xl border border-[#ddc1b0]/20">
              {["All", "Agentic AI", "Data Platforms", "Cloud Infrastructure"].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedDept === dept
                      ? "bg-[#964900] text-white shadow"
                      : "text-[#f3ded3]/70 hover:text-[#ffb786] hover:bg-[#392218]"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Roles List */}
          <div className="space-y-4">
            {filteredRoles.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-[#241913]/90 border border-[#ddc1b0]/20 space-y-4 shadow-md">
                <Briefcase className="w-12 h-12 text-[#ffb786]/50 mx-auto" />
                <h3 className="font-['Hanken_Grotesk'] text-xl font-bold text-[#fff8f5]">
                  No Open Positions Currently Posted
                </h3>
                <p className="text-xs text-[#f3ded3]/70 max-w-md mx-auto leading-relaxed font-light">
                  There are currently no active openings in {selectedDept === "All" ? "any department" : selectedDept}. New roles are posted directly from our engineering leadership team in the Admin Panel.
                </p>
                <a
                  href="mailto:careers@alphaesai.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#964900] hover:bg-[#a85200] text-white font-bold text-xs transition-colors shadow-md mt-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#ffb786]" />
                  Submit Spontaneous Application
                </a>
              </div>
            ) : (
              filteredRoles.map((role) => (
                <div
                  key={role.id}
                  className="p-6 rounded-2xl bg-[#241913]/90 border border-[#ddc1b0]/20 hover:border-[#ffb786]/50 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 group shadow-md"
                >
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#964900]/40 border border-[#ffb786]/30 text-[#ffb786] text-[11px] font-['JetBrains_Mono'] font-bold uppercase tracking-wider">
                        {role.department}
                      </span>
                      {role.featured && (
                        <span className="px-2.5 py-0.5 rounded-md bg-[#ff7700]/20 border border-[#ff7700]/40 text-[#ff8833] text-[11px] font-['JetBrains_Mono'] font-bold uppercase tracking-wider flex items-center gap-1">
                          <Flame className="w-3 h-3 text-[#ff7700]" /> High Priority
                        </span>
                      )}
                    </div>
                    <h3 className="font-['Hanken_Grotesk'] text-xl font-bold text-[#fff8f5] group-hover:text-[#ffb786] transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-xs text-[#f3ded3]/75 leading-relaxed font-light">
                      {role.summary}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#f3ded3]/60">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#ffb786]" />
                        {role.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#ffb786]" />
                        {role.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#ffb786]" />
                        {role.experience}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {role.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-[#392218]/60 text-[#f3ded3]/70 text-[10px] font-['JetBrains_Mono'] border border-[#ddc1b0]/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 pt-2 lg:pt-0">
                    <button
                      onClick={() => handleApplyClick(role)}
                      className="w-full lg:w-auto px-5 py-2.5 rounded-xl bg-[#964900] hover:bg-[#a85200] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-[#964900]/30"
                    >
                      Apply for Position
                      <ArrowRight className="w-3.5 h-3.5 text-[#ffb786]" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* BENEFITS & PERKS GRID */}
        <div className="space-y-8 pt-8 border-t border-[#ddc1b0]/15">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#ffb786] uppercase tracking-wider">
              Work & Life
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-3xl font-bold text-[#fff8f5]">
              Benefits & Perks for Top Talent
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#241913]/80 border border-[#ddc1b0]/20 flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#392218] border border-[#ffb786]/30 flex items-center justify-center text-[#ffb786] shrink-0">
                <Globe2 className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="font-['Hanken_Grotesk'] font-bold text-sm text-[#fff8f5]">Flexible Remote / Hybrid</h4>
                <p className="text-xs text-[#f3ded3]/70 font-light leading-relaxed">Work from anywhere in India or remotely worldwide with flexible core hours.</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#241913]/80 border border-[#ddc1b0]/20 flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#392218] border border-[#ffb786]/30 flex items-center justify-center text-[#ffb786] shrink-0">
                <Laptop className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="font-['Hanken_Grotesk'] font-bold text-sm text-[#fff8f5]">Top-Tier Hardware</h4>
                <p className="text-xs text-[#f3ded3]/70 font-light leading-relaxed">Choice of MacBook Pro M3 Max or high-spec Linux GPU workstations + 4K monitors.</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#241913]/80 border border-[#ddc1b0]/20 flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#392218] border border-[#ffb786]/30 flex items-center justify-center text-[#ffb786] shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="font-['Hanken_Grotesk'] font-bold text-sm text-[#fff8f5]">Learning & Conference Stipend</h4>
                <p className="text-xs text-[#f3ded3]/70 font-light leading-relaxed">₹1,50,000 annual budget for AI research papers, technical books, and global tech conferences.</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#241913]/80 border border-[#ddc1b0]/20 flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#392218] border border-[#ffb786]/30 flex items-center justify-center text-[#ffb786] shrink-0">
                <HeartPulse className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="font-['Hanken_Grotesk'] font-bold text-sm text-[#fff8f5]">Full Health Coverage</h4>
                <p className="text-xs text-[#f3ded3]/70 font-light leading-relaxed">Comprehensive health, dental, and mental wellness coverage for you and your family.</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#241913]/80 border border-[#ddc1b0]/20 flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#392218] border border-[#ffb786]/30 flex items-center justify-center text-[#ffb786] shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="font-['Hanken_Grotesk'] font-bold text-sm text-[#fff8f5]">Koramangala HQ Perks</h4>
                <p className="text-xs text-[#f3ded3]/70 font-light leading-relaxed">Gourmet coffee, daily team lunches, and ergonomic setup at our Bengaluru innovation hub.</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#241913]/80 border border-[#ddc1b0]/20 flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#392218] border border-[#ffb786]/30 flex items-center justify-center text-[#ffb786] shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="font-['Hanken_Grotesk'] font-bold text-sm text-[#fff8f5]">Generous Equity Packages</h4>
                <p className="text-xs text-[#f3ded3]/70 font-light leading-relaxed">Direct equity grants so every engineer shares in the long-term value created by AlphaesAI.</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA BANNER */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#392218] via-[#241913] to-[#1c120c] border border-[#ffb786]/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#964900]/20 blur-3xl pointer-events-none" />
          <h3 className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl font-extrabold text-[#fff8f5]">
            Don't See an Exact Match for Your Skills?
          </h3>
          <p className="text-sm text-[#f3ded3]/80 max-w-2xl mx-auto font-light leading-relaxed">
            We are always interested in exceptional engineers who solve hard problems. Send your resume and portfolio directly to our engineering leadership team.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:careers@alphaesai.com"
              className="px-6 py-3 rounded-xl bg-[#964900] hover:bg-[#a85200] text-white font-bold text-xs transition-colors flex items-center gap-2 shadow-lg"
            >
              <Send className="w-4 h-4 text-[#ffb786]" />
              Email careers@alphaesai.com
            </a>
          </div>
        </div>
      </div>

      {/* APPLICATION MODAL DRAWER */}
      {activeRole && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#241913] border border-[#ffb786]/30 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveRole(null)}
              className="absolute top-5 right-5 text-[#f3ded3]/60 hover:text-[#ffb786] transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#964900]/40 border border-[#ffb786]/50 text-[#ffb786] flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold text-[#fff8f5]">
                  Application Received!
                </h3>
                <p className="text-xs text-[#f3ded3]/80 max-w-md mx-auto leading-relaxed">
                  Thank you for applying to the <span className="font-bold text-[#ffb786]">{activeRole.title}</span> role. Our engineering team will review your application and respond within 48 hours.
                </p>
                <button
                  onClick={() => setActiveRole(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#964900] hover:bg-[#a85200] text-white font-bold text-xs transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-[#964900]/30 border border-[#ffb786]/30 text-[#ffb786] text-[10px] font-['JetBrains_Mono'] font-bold uppercase tracking-wider">
                    {activeRole.department}
                  </span>
                  <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold text-[#fff8f5] mt-1">
                    Apply for {activeRole.title}
                  </h3>
                  <p className="text-xs text-[#f3ded3]/70">
                    Location: {activeRole.location} • {activeRole.type}
                  </p>
                </div>

                <div className="space-y-4 text-xs font-['Inter']">
                  <div>
                    <label className="block text-[#f3ded3]/90 font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c120c] border border-[#ddc1b0]/20 text-[#fff8f5] focus:outline-none focus:border-[#ffb786]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#f3ded3]/90 font-medium mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c120c] border border-[#ddc1b0]/20 text-[#fff8f5] focus:outline-none focus:border-[#ffb786]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#f3ded3]/90 font-medium mb-1">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c120c] border border-[#ddc1b0]/20 text-[#fff8f5] focus:outline-none focus:border-[#ffb786]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#f3ded3]/90 font-medium mb-1">
                        LinkedIn Profile URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/username"
                        value={formData.linkedinUrl}
                        onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c120c] border border-[#ddc1b0]/20 text-[#fff8f5] focus:outline-none focus:border-[#ffb786]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#f3ded3]/90 font-medium mb-1">
                        GitHub / Portfolio URL *
                      </label>
                      <input
                        required
                        type="url"
                        placeholder="https://github.com/username"
                        value={formData.portfolioUrl}
                        onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c120c] border border-[#ddc1b0]/20 text-[#fff8f5] focus:outline-none focus:border-[#ffb786]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#f3ded3]/90 font-medium mb-1">
                      Years of Relevant Experience
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c120c] border border-[#ddc1b0]/20 text-[#fff8f5] focus:outline-none focus:border-[#ffb786]"
                    >
                      <option value="1-3 years">1-3 Years</option>
                      <option value="3-5 years">3-5 Years</option>
                      <option value="5-8 years">5-8 Years</option>
                      <option value="8+ years">8+ Years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#f3ded3]/90 font-medium mb-1">
                      Why are you excited about building at AlphaesAI?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about a technical problem or AI pipeline you built recently..."
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c120c] border border-[#ddc1b0]/20 text-[#fff8f5] focus:outline-none focus:border-[#ffb786]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveRole(null)}
                    className="px-4 py-2.5 rounded-xl border border-[#ddc1b0]/20 text-[#f3ded3]/70 hover:text-white text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl bg-[#964900] hover:bg-[#a85200] text-white font-bold text-xs transition-colors flex items-center gap-2 shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-[#ffb786]" />
                        Submit Application
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
