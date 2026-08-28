"use client";

import { use, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCMS } from "@/context/CMSContext";
import {
  ArrowDownRight,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Bot,
  Zap,
  Globe,
  Home,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Cpu,
  Layers,
  ShieldCheck,
  Bot,
  Zap,
  Globe,
  Sparkles,
};

export default function DynamicCustomPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const { data } = useCMS();

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Find matching custom page by slug
  const page = data.customPages?.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!page) {
    return (
      <div className="min-h-screen bg-[#fff8f5] text-[#241913] font-['Inter'] flex flex-col items-center justify-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white border border-[#ddc1b0] rounded-3xl p-8 shadow-xl text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#ffeade] text-[#964900] mx-auto flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold font-['JetBrains_Mono'] text-[#241913] mb-3">
            Page Not Found
          </h1>
          <p className="text-sm text-[#564336] mb-6">
            The page <code className="bg-[#fff8f5] px-2 py-1 rounded text-[#964900] font-['JetBrains_Mono']">/custom/{slug}</code> does not exist or has not been published yet.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#241913] text-white text-sm font-['JetBrains_Mono'] font-bold hover:bg-[#964900] transition-colors w-full"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff8f5] text-[#241913] font-['Inter'] selection:bg-[#964900] selection:text-white">
      <main className="pt-24 sm:pt-28 pb-20">
        {/* HERO SECTION */}
        <section className="relative px-6 sm:px-12 max-w-6xl mx-auto pt-8 pb-16">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#964900]/10 via-[#ffeedd]/40 to-transparent blur-3xl -z-10 rounded-full" />

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#964900] mb-6 font-bold uppercase tracking-wider"
          >
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#564336]">{page.title}</span>
          </motion.div>

          {/* Page Badge */}
          {page.hero?.badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffeade] border border-[#ddc1b0] text-[#964900] text-xs font-['JetBrains_Mono'] font-bold mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{page.hero.badge}</span>
            </motion.div>
          )}

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold font-['JetBrains_Mono'] tracking-tight text-[#241913] leading-[1.1] max-w-4xl"
          >
            {page.hero?.title || page.title}
          </motion.h1>

          {/* Subtitle / Subtext */}
          {page.hero?.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-xl sm:text-2xl text-[#964900] font-['JetBrains_Mono'] font-bold"
            >
              {page.hero.subtitle}
            </motion.p>
          )}

          {/* Description */}
          {page.hero?.description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-lg sm:text-xl text-[#564336] max-w-2xl font-normal leading-relaxed"
            >
              {page.hero.description}
            </motion.p>
          )}

          {/* Hero CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href={page.hero?.ctaHref || "/contact"}
              className="group relative inline-flex items-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="absolute right-0 inset-y-0 w-[calc(100%-1.25rem)] rounded-xl bg-[#964900]" />
              <span className="relative z-10 px-6 py-3.5 rounded-xl bg-[#241913] text-white text-sm font-['JetBrains_Mono'] font-bold tracking-wide">
                {page.hero?.ctaText || "Get Started"}
              </span>
              <span className="relative -left-px z-10 w-11 h-11 rounded-xl flex items-center justify-center text-white bg-[#964900]">
                <ArrowDownRight className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45" />
              </span>
            </Link>
          </motion.div>
        </section>

        {/* CONTENT BLOCKS / FEATURE CARDS */}
        {page.contentBlocks && page.contentBlocks.length > 0 && (
          <section className="py-16 px-6 sm:px-12 bg-white border-y border-[#ddc1b0]/50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffeade] text-[#964900] text-xs font-['JetBrains_Mono'] font-bold uppercase tracking-wider mb-4">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Key Offerings & Capabilities</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-['JetBrains_Mono'] text-[#241913] leading-tight">
                  What We Deliver
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {page.contentBlocks.map((block, idx) => {
                  const IconComp =
                    (block.iconName && ICON_MAP[block.iconName]) || Sparkles;
                  return (
                    <motion.div
                      key={block.id || idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-[#fff8f5] border border-[#ddc1b0] rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-[#964900] transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-[#ffeade] flex items-center justify-center text-[#964900] mb-5">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-['JetBrains_Mono'] font-bold text-[#241913] mb-3">
                          {block.title}
                        </h3>
                        <p className="text-sm text-[#564336] leading-relaxed">
                          {block.description}
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-[#ddc1b0]/40 flex items-center gap-2 text-xs font-['JetBrains_Mono'] font-bold text-[#964900]">
                        <CheckCircle2 className="w-4 h-4 text-[#964900]" />
                        <span>Enterprise Ready</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* FINAL CTA BANNER */}
        <section className="px-6 sm:px-12 max-w-5xl mx-auto pt-16">
          <div className="bg-gradient-to-r from-[#241913] via-[#38261b] to-[#964900] text-white rounded-3xl p-10 sm:p-14 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            <h2 className="text-3xl sm:text-5xl font-extrabold font-['JetBrains_Mono'] mb-4 tracking-tight">
              Ready to Accelerate Your AI Operations?
            </h2>
            <p className="text-lg sm:text-xl text-[#ffeedd] max-w-xl mx-auto mb-8 font-normal">
              Schedule a technical briefing with our senior engineering leadership today.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center shadow-2xl hover:scale-105 transition-transform"
            >
              <span className="absolute right-0 inset-y-0 w-[calc(100%-1.25rem)] rounded-xl bg-[#964900]" />
              <span className="relative z-10 px-8 py-4 rounded-xl bg-[#fff8f5] text-[#241913] text-sm font-['JetBrains_Mono'] font-bold tracking-wide">
                Schedule Technical Briefing
              </span>
              <span className="relative -left-px z-10 w-12 h-12 rounded-xl flex items-center justify-center text-white bg-[#964900]">
                <ArrowDownRight className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45" />
              </span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
