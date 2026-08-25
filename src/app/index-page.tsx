"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, MapPin, Activity, Quote, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { SplineScene } from "@/components/ui/spline";
import { Spotlight } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";
import { useCMS } from "@/context/CMSContext";

const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

const Index = () => {
  const { data } = useCMS();
  const { hero, showcase3d, metrics, architecture, testimonial, ctaBanner } = data.homepage;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleCanvasMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className="w-full bg-[#fff8f5] text-[#241913]">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section
        className="pt-24 pb-16 px-4 md:pt-32 md:pb-24 relative overflow-hidden text-center border-b border-[#ddc1b0]"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fff8f5] opacity-90 pointer-events-none" />

        <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center text-center">
          {/* Announcement Chip */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: SMOOTH_EASE, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ddc1b0] bg-[#fff8f5]/60 backdrop-blur-md mb-8 shadow-sm"
          >
            <span className="font-['JetBrains_Mono'] text-xs font-medium text-[#241913]">
              {hero.announcementText}
            </span>
            <Link
              href={hero.announcementLinkHref}
              className="font-['JetBrains_Mono'] text-xs text-[#0051C3] underline font-bold ml-1"
            >
              {hero.announcementLinkText}
            </Link>
          </motion.div>

          {/* Main Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: SMOOTH_EASE, delay: 0.25 }}
            className="font-['Hanken_Grotesk'] text-4xl sm:text-6xl lg:text-[64px] leading-[1.1] font-extrabold text-[#241913] mb-6 max-w-4xl tracking-tight"
          >
            {hero.headline}
          </motion.h1>

          {/* Body Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: SMOOTH_EASE, delay: 0.4 }}
            className="font-['Inter'] text-lg sm:text-xl text-[#564336] mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: SMOOTH_EASE, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href={hero.primaryCtaHref}
              className="bg-[#964900] text-white font-[#JetBrains_Mono] font-bold py-4 px-8 rounded-full text-base shadow-lg hover:bg-[#723600] transition-all hover:scale-105"
            >
              {hero.primaryCtaText}
            </Link>
            <Link
              href={hero.secondaryCtaHref}
              className="bg-[#ffffff] border border-[#ddc1b0] text-[#241913] font-['JetBrains_Mono'] font-bold py-4 px-8 rounded-full text-base hover:bg-[#fff1ea] transition-colors shadow-sm"
            >
              {hero.secondaryCtaText}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE 3D ROBOT & AI INFRASTRUCTURE SHOWCASE                      */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 border-b border-[#ddc1b0] bg-[#fff8f5]">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SMOOTH_EASE }}
            className="text-center mb-10"
          >
            <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#964900] uppercase tracking-widest bg-[#fff1ea] border border-[#ddc1b0] px-3.5 py-1.5 rounded-full inline-block mb-3">
              {showcase3d.badgeText}
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#241913] mb-3">
              {showcase3d.title}
            </h2>
            <p className="font-['Inter'] text-base sm:text-lg text-[#564336] max-w-2xl mx-auto">
              {showcase3d.subtitle}
            </p>
          </motion.div>

          {/* Interactive 3D Robot Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: SMOOTH_EASE, delay: 0.15 }}
            className="w-full max-w-[1100px] mb-12"
          >
            <Card className="w-full h-[550px] bg-[#1c130d] border-2 border-[#ddc1b0] relative overflow-hidden rounded-2xl shadow-2xl">
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                size={300}
              />

              <div className="flex flex-col md:flex-row h-full relative z-10">
                {/* Left content */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-left">
                  <h3 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
                    {showcase3d.cardHeadline}
                  </h3>

                  <p className="font-['Inter'] text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                    {showcase3d.cardDescription}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link
                      href={showcase3d.cardBtn1Href}
                      className="bg-[#964900] text-white font-['JetBrains_Mono'] font-bold text-xs px-5 py-3 rounded-full hover:bg-[#b05600] transition-colors shadow-sm inline-flex items-center gap-2"
                    >
                      <span>{showcase3d.cardBtn1Text}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href={showcase3d.cardBtn2Href}
                      className="border border-white/20 bg-white/5 text-white font-['JetBrains_Mono'] font-bold text-xs px-5 py-3 rounded-full hover:bg-white/10 transition-colors"
                    >
                      {showcase3d.cardBtn2Text}
                    </Link>
                  </div>
                </div>

                {/* Right 3D Spline Canvas */}
                <div
                  onMouseMove={handleCanvasMouseMove}
                  onMouseLeave={handleCanvasMouseLeave}
                  className="w-full md:w-1/2 h-[300px] md:h-full relative overflow-hidden [perspective:1000px]"
                >
                  <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />

                  {/* Robot Chest Brand - Animated Parallax Typography */}
                  <motion.div
                    className="absolute top-[48%] left-[50%] pointer-events-none z-20"
                    animate={{
                      x: `calc(-50% + ${mousePos.x * 22}px)`,
                      y: `calc(-50% + ${mousePos.y * 18}px)`,
                      rotateY: mousePos.x * 12,
                      rotateX: -mousePos.y * 12,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 16,
                      mass: 0.4,
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [-2.5, 2.5, -2.5],
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative flex items-center justify-center"
                    >
                      <span className="font-['Hanken_Grotesk'] text-[13px] sm:text-[15px] font-black tracking-[0.38em] uppercase select-none text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        {showcase3d.chestBrandText}
                      </span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Performance Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {metrics.map((metric, idx) => (
              <motion.div
                key={metric.id || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: SMOOTH_EASE, delay: idx * 0.15 }}
                className="flex flex-col gap-2 p-6 border border-[#ddc1b0] rounded-xl bg-[#F3F3F3] hover:border-[#964900] transition-colors"
              >
                <h4 className="font-['Hanken_Grotesk'] text-2xl font-bold text-[#964900]">
                  {metric.value}
                </h4>
                <p className="font-['Inter'] text-sm text-[#564336]">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. BENTO GRID FEATURES SECTION                                            */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 bg-[#F3F3F3] border-b border-[#ddc1b0]">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SMOOTH_EASE }}
            className="text-center mb-12"
          >
            <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#964900] uppercase tracking-widest">
              {architecture.badgeText}
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#241913] mt-2">
              {architecture.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {architecture.cards.map((item, idx) => {
              const icons = [Globe, MapPin, Activity];
              const Icon = icons[idx % icons.length];
              return (
                <motion.div
                  key={item.id || idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.15,
                    ease: SMOOTH_EASE,
                  }}
                  className="p-8 border border-[#ddc1b0] rounded-xl bg-[#ffffff] flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <Icon className="w-8 h-8 text-[#964900]" />
                  <h3 className="font-['Hanken_Grotesk'] text-xl font-bold text-[#241913]">
                    {item.title}
                  </h3>
                  <p className="font-['Inter'] text-sm text-[#564336] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SOCIAL PROOF & TESTIMONIAL SECTION                                     */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 text-center border-b border-[#ddc1b0]">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SMOOTH_EASE }}
          >
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-5xl font-extrabold text-[#241913] mb-4">
              {testimonial.heading}
            </h2>
            <p className="font-['Inter'] text-base text-[#564336] mb-12">
              {testimonial.subhead}
            </p>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: SMOOTH_EASE, delay: 0.1 }}
            className="bg-[#F3F3F3] p-8 rounded-2xl border border-[#ddc1b0] text-left relative mb-12 shadow-sm w-full"
          >
            <Quote className="w-10 h-10 text-[#ddc1b0] absolute top-6 left-6 opacity-40" />
            <blockquote className="font-['Inter'] text-lg text-[#241913] mb-6 pl-10 relative z-10 leading-relaxed italic">
              {testimonial.quote}
            </blockquote>
            <div className="flex items-center gap-4 pl-10">
              <img
                className="w-12 h-12 rounded-full border-2 border-[#ddc1b0] object-cover"
                alt={`Headshot of ${testimonial.authorName}`}
                src={testimonial.authorAvatar}
              />
              <div>
                <div className="font-['Hanken_Grotesk'] text-sm font-bold text-[#241913]">
                  {testimonial.authorName}
                </div>
                <div className="font-['Inter'] text-xs text-[#564336]">
                  {testimonial.authorTitle}
                </div>
              </div>
            </div>
          </motion.div>

          <p className="font-['JetBrains_Mono'] text-xs text-[#564336] uppercase tracking-wider font-semibold">
            {testimonial.footerCaption}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FINAL HIGH-IMPACT CTA BANNER                                           */}
      {/* ========================================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: SMOOTH_EASE }}
        className="py-24 px-4 bg-[#964900] text-white text-center"
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-5xl font-extrabold text-white mb-6">
            {ctaBanner.title}
          </h2>
          <p className="font-['Inter'] text-base sm:text-lg text-[#ffdcc6] mb-10 leading-relaxed font-light">
            {ctaBanner.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={ctaBanner.primaryCtaHref}
              className="bg-[#ffffff] text-[#964900] font-['JetBrains_Mono'] font-bold py-3.5 px-8 rounded-full text-sm hover:bg-[#fff8f5] transition-colors shadow-lg hover:scale-105 transition-transform"
            >
              {ctaBanner.primaryCtaText}
            </Link>
            <Link
              href={ctaBanner.secondaryCtaHref}
              className="bg-transparent border-2 border-white text-white font-['JetBrains_Mono'] font-bold py-3.5 px-8 rounded-full text-sm hover:bg-white/10 transition-colors"
            >
              {ctaBanner.secondaryCtaText}
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
