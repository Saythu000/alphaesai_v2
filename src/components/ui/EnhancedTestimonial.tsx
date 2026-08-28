"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Play, CheckCircle2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useCMS } from "@/context/CMSContext";

const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

export function EnhancedTestimonial() {
  const { data } = useCMS();
  const testimonialData = data?.homepage?.enhancedTestimonials || {
    badgeText: "Client Success & Proven ROI",
    title: "Trusted by Engineering & Data Leaders",
    subtitle: "Real results delivered by our Forward-Deployed AI Engineers and cloud data optimization stack.",
    items: []
  };

  const testimonials = testimonialData.items || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const activeTestimonial = testimonials[currentIndex] || {
    id: "default",
    quote: "AlphaesAI's Forward-Deployed Engineers transformed our Databricks analytics pipeline.",
    authorName: "Sarah Jenkins",
    authorTitle: "VP of Enterprise Data Engineering",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    domain: "Fintech & Data Warehousing",
    roiChips: ["72% Latency Reduction", "$18.5k/mo Savings"],
    videoThumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80",
    videoTitle: "Case Study Overview"
  };

  const handleNext = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 text-center border-b border-[#ddc1b0] bg-[#fff8f5]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: SMOOTH_EASE }}
          className="mb-10 text-center"
        >
          <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#964900] uppercase tracking-widest bg-[#fff1ea] border border-[#ddc1b0] px-3.5 py-1.5 rounded-full inline-block mb-3">
            {testimonialData.badgeText}
          </span>
          <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#241913] mb-3">
            {testimonialData.title}
          </h2>
          <p className="font-['Inter'] text-base text-[#564336]">
            {testimonialData.subtitle}
          </p>
        </motion.div>


        {/* Testimonial Card */}
        <div className="w-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: SMOOTH_EASE }}
              className="bg-[#F3F3F3] p-6 sm:p-10 rounded-2xl border border-[#ddc1b0] text-left relative shadow-md w-full"
            >
              <Quote className="w-12 h-12 text-[#ddc1b0] absolute top-6 left-6 opacity-40" />

              <div className="relative z-10 pl-6 sm:pl-10">
                {/* Domain & Verified Seal */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#964900] uppercase tracking-wider">
                    {activeTestimonial.domain}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1c130d] text-white border border-[#ddc1b0] text-[11px] font-['JetBrains_Mono']">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5722]" />
                    <span>Verified Enterprise Client</span>
                  </div>
                </div>

                {/* Main Quote */}
                <blockquote className="font-['Inter'] text-base sm:text-xl text-[#241913] mb-6 leading-relaxed italic font-medium">
                  "{activeTestimonial.quote}"
                </blockquote>

                {/* Quantifiable ROI Chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {(activeTestimonial.roiChips || []).map((chip) => (
                    <span
                      key={chip}
                      className="font-['JetBrains_Mono'] text-xs font-bold text-[#964900] bg-[#fff1ea] border border-[#ddc1b0] px-3 py-1 rounded-full"
                    >
                      ⚡ {chip}
                    </span>
                  ))}
                </div>

                {/* Author Info & Video Trigger Button */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#ddc1b0]">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-12 h-12 rounded-full border-2 border-[#964900] object-cover"
                      alt={`Headshot of ${activeTestimonial.authorName}`}
                      src={activeTestimonial.authorAvatar}
                    />
                    <div>
                      <div className="font-['Hanken_Grotesk'] text-base font-bold text-[#241913]">
                        {activeTestimonial.authorName}
                      </div>
                      <div className="font-['Inter'] text-xs text-[#564336]">
                        {activeTestimonial.authorTitle}
                      </div>
                    </div>
                  </div>

                  {/* Video Case Study Trigger */}
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-[#964900] hover:bg-[#723600] text-white font-['JetBrains_Mono'] font-bold text-xs px-4 py-2.5 rounded-full transition-colors shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Executive Interview</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <div className="flex items-center gap-2">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? "w-8 bg-[#964900]" : "bg-[#ddc1b0] hover:bg-[#964900]/50"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full border border-[#ddc1b0] bg-[#ffffff] text-[#241913] hover:bg-[#fff1ea] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full border border-[#ddc1b0] bg-[#ffffff] text-[#241913] hover:bg-[#fff1ea] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Case Study Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: SMOOTH_EASE }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1c130d] border-2 border-[#ddc1b0] rounded-2xl max-w-2xl w-full text-white overflow-hidden shadow-2xl relative"
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-20 text-white/70 hover:text-white p-1.5 rounded-full bg-black/60 backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeTestimonial.videoThumbnail}
                  alt={activeTestimonial.videoTitle}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c130d] via-transparent to-black/30 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center p-6">
                  <div className="p-4 rounded-full bg-[#ff5722] text-white shadow-2xl mb-4 animate-bounce">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                  <h4 className="font-['Hanken_Grotesk'] text-xl font-bold text-white mb-1">
                    {activeTestimonial.videoTitle}
                  </h4>
                  <p className="font-['Inter'] text-xs text-white/70">
                    Executive Briefing • 90 Seconds Duration
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#1c130d] flex items-center justify-between border-t border-white/10">
                <div className="text-left">
                  <div className="font-['Hanken_Grotesk'] text-sm font-bold text-white">
                    {activeTestimonial.authorName}
                  </div>
                  <div className="font-['Inter'] text-xs text-white/60">
                    {activeTestimonial.authorTitle}
                  </div>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="bg-[#964900] hover:bg-[#723600] text-white font-['JetBrains_Mono'] font-bold text-xs px-5 py-2.5 rounded-full transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

