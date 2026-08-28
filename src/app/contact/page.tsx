"use client";

import { useState } from "react";
import { useCMS } from "@/context/CMSContext";
import { Phone, Mail, MapPin, Triangle, Send, CheckCircle2, User, FileText } from "lucide-react";

export default function Contact() {
  const { data } = useCMS();
  const contactEmail = data.footer?.contactEmail || "contact@alphaesai.com";
  const contactPhone = data.footer?.contactPhone || "+91 70106 42399";
  const contactAddress = data.footer?.contactAddress || "No. 472/7 Balaji Arcade, Ejipura, Koramangala 4th Block, Bengaluru, Karnataka - 560095, India";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

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

            {/* Interactive Contact Form */}
            <div className="bg-[#fff8f5] border-2 border-[#964900] rounded-xl p-8 sm:p-10 shadow-md space-y-6">
              <div className="text-xs font-mono-tech text-[#964900] uppercase font-bold tracking-widest">
                Direct Inquiry Form
              </div>
              <h2 className="font-hanken text-3xl font-bold text-[#241913]">
                Get in Touch with Our Team
              </h2>

              {isSubmitted ? (
                <div className="p-6 bg-[#fff1ea] border border-[#964900]/30 rounded-xl space-y-4 text-center py-10">
                  <CheckCircle2 className="w-12 h-12 text-[#964900] mx-auto" />
                  <h3 className="font-hanken text-xl font-bold text-[#241913]">
                    Message Received Successfully!
                  </h3>
                  <p className="font-inter text-sm text-[#564336] max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. A principal architect will review your message and get back to you within 4 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", phone: "", email: "", description: "" });
                    }}
                    className="mt-4 px-6 py-2.5 bg-[#964900] text-white font-inter text-xs font-bold rounded-lg hover:bg-[#7a3b00] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-inter text-sm">
                  {/* Full Name Field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono-tech font-bold uppercase text-[#564336]">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#964900] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-[#241913]/20 rounded-lg pl-10 pr-4 py-3 text-[#241913] placeholder-[#241913]/40 focus:outline-none focus:border-[#964900] focus:ring-1 focus:ring-[#964900] transition-all"
                      />
                    </div>
                  </div>

                  {/* Grid: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number Field */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono-tech font-bold uppercase text-[#564336]">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#964900] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white border border-[#241913]/20 rounded-lg pl-10 pr-4 py-3 text-[#241913] placeholder-[#241913]/40 focus:outline-none focus:border-[#964900] focus:ring-1 focus:ring-[#964900] transition-all"
                        />
                      </div>
                    </div>

                    {/* Email Address Field */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono-tech font-bold uppercase text-[#564336]">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#964900] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white border border-[#241913]/20 rounded-lg pl-10 pr-4 py-3 text-[#241913] placeholder-[#241913]/40 focus:outline-none focus:border-[#964900] focus:ring-1 focus:ring-[#964900] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Description Field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono-tech font-bold uppercase text-[#564336]">
                      Why do you need to contact us? <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FileText className="w-4 h-4 text-[#964900] absolute left-3.5 top-3.5" />
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your project, database performance bottlenecks, cloud migration goals, or AI engineering needs..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full bg-white border border-[#241913]/20 rounded-lg pl-10 pr-4 py-3 text-[#241913] placeholder-[#241913]/40 focus:outline-none focus:border-[#964900] focus:ring-1 focus:ring-[#964900] transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#964900] text-white font-inter text-sm px-6 py-3.5 rounded-md font-semibold hover:bg-[#7a3b00] disabled:opacity-50 transition-colors shadow-md flex items-center justify-center gap-2 text-center"
                    >
                      {isSubmitting ? (
                        <span>Sending Request...</span>
                      ) : (
                        <>
                          <span>Submit Contact Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-[#564336] text-center font-mono-tech mt-3">
                      Guaranteed response from a principal architect within 4 business hours.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
