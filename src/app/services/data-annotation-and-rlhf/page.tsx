"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileCheck,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Users,
  Target,
  Stethoscope,
  Briefcase,
  Scale,
  Building2,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Zap,
  Award,
  Layers,
  Activity,
  Sliders,
  Check,
} from "lucide-react";

const failureModes = [
  {
    title: "Context Blindness",
    tag: "EXPERT GAP",
    desc: "Crowd-sourced workers lack the deep technical, legal, domain or medical expertise your specific AI training data demands.",
  },
  {
    title: "The Handoff Disconnect",
    tag: "SILOED PIPELINE",
    desc: "Data delivered as a static CSV/JSON file without any visibility into post-training model behavior or loss metrics.",
  },
  {
    title: "Noisy Signals",
    tag: "INCONSISTENCY",
    desc: "Vague guidelines and inconsistent annotators create contradictory data, leading to unpredictable model performance.",
  },
  {
    title: "Safety as an Afterthought",
    tag: "RISK EXPOSURE",
    desc: "Red-teaming requires systematic engineering rigor and adversarial probing, not just checking boxes off a static list.",
  },
];

const approachPillars = [
  {
    id: "rlhf",
    icon: Target,
    badge: "Preference Modeling",
    title: "RLHF & Preference Data",
    desc: "We structure human feedback (pairwise ranking, comparison, and multi-turn preference scoring) to explicitly align model behavior with your specific domain and business requirements.",
    items: [
      "Pairwise & multi-turn response ranking",
      "Reward model dataset curation",
      "Custom rating rubrics tailored to business logic",
    ],
  },
  {
    id: "domain",
    icon: Users,
    badge: "Subject Matter Experts",
    title: "Domain-Specific Annotation",
    desc: "We pair your labeling tasks directly with vetted subject-matter experts in healthcare, finance, legal, insurance, and software engineering—never unvetted crowd workers.",
    items: [
      "Board-certified medical coders & radiologists",
      "Financial analysts & compliance auditors",
      "Senior software engineers & legal practitioners",
    ],
  },
  {
    id: "finetuning",
    icon: Sliders,
    badge: "Clean Signal Datasets",
    title: "Fine-Tuning Curated Datasets",
    desc: "We version-control and curate your datasets specifically for instruction tuning and SFT (Supervised Fine-Tuning), ensuring pristine, noise-free signals for every training run.",
    items: [
      "Dataset versioning & line-level lineage tracking",
      "De-duplication & distribution balancing",
      "Instruction-following dataset formatting",
    ],
  },
  {
    id: "benchmarking",
    icon: Activity,
    badge: "Human-in-the-Loop Audit",
    title: "Rigorous Benchmarking & Evaluation",
    desc: "We validate model accuracy, tone, reasoning transparency, and factuality through expert human review before you push model weights to production.",
    items: [
      "Hallucination & bias measurement",
      "Factuality verification against golden references",
      "Quantitative human-eval leaderboard scoring",
    ],
  },
  {
    id: "redteaming",
    icon: ShieldCheck,
    badge: "Adversarial Probing",
    title: "Adversarial Red-Teaming & Safety Alignment",
    desc: "We systematically probe for prompt injections, jailbreaks, toxicity, and edge cases before your users encounter them in real-world interactions.",
    items: [
      "Custom adversarial attack vector crafting",
      "Guardrail breach stress testing",
      "Safety policy compliance audit reports",
    ],
  },
];

const commitmentPoints = [
  {
    title: "Contextual Alignment",
    desc: "We tune label schemas to what your specific model architecture and loss functions need to learn.",
    icon: Target,
  },
  {
    title: "Direct Feedback Loops",
    desc: "We tie data annotations directly to post-training evaluation metrics and fine-tuning results.",
    icon: Layers,
  },
  {
    title: "Expert Matching",
    desc: "We don't use generalist crowd pools. We match domain practitioners to your exact industry taxonomy.",
    icon: Award,
  },
  {
    title: "Outcome Accountability",
    desc: "We measure success by how your model performs in production, not by how many raw labels we click.",
    icon: Zap,
  },
];

const domains = [
  {
    name: "Healthcare & Life Sciences",
    icon: Stethoscope,
    tag: "HIGH COMPLEXITY",
    focus: "Radiology report annotation, EHR structured extraction, clinical coding (ICD-10/SNOMED), medical QA.",
  },
  {
    name: "Finance & Fintech",
    icon: Briefcase,
    tag: "STRICT ACCURACY",
    focus: "Transaction classification, earnings call sentiment, SEC filing parsing, fraud pattern tagging.",
  },
  {
    name: "Legal & Compliance",
    icon: Scale,
    tag: "PRECISION REQUIRED",
    focus: "Contract clause classification, privilege review, entity extraction, regulatory compliance audit data.",
  },
  {
    name: "Insurance & Risk",
    icon: Building2,
    tag: "DOMAIN-SPECIFIC",
    focus: "Claims risk extraction, policy document classification, property damage vision analysis.",
  },
];

const faqs = [
  {
    q: "How is this different from crowd-sourced annotation platforms?",
    a: "Crowd platforms prioritize raw volume and speed using unvetted gig workers. We prioritize expert judgment, strict quality control, and engineering alignment. Our annotators are domain specialists (MDs, attorneys, financial analysts, software engineers) who understand what your model is trying to achieve.",
  },
  {
    q: "Can you handle high-volume labeling projects?",
    a: "We specialize in high-nuance, high-fidelity work like RLHF, domain-specific SFT, and red-teaming. If your project requires simple, low-complexity bulk bounding boxes, we will be completely transparent about whether we are the optimal fit.",
  },
  {
    q: "Do you support ongoing RLHF and post-launch human-in-the-loop programs?",
    a: "Yes. We offer both one-time dataset creation/fine-tuning curation and continuous human-in-the-loop programs where expert annotators review real user edge cases to refine model performance dynamically post-launch.",
  },
  {
    q: "How do you guarantee data privacy and compliance?",
    a: "We operate under strict SOC 2, HIPAA, and GDPR compliant workflows. All domain experts execute NDAs, and data can be processed within air-gapped or dedicated secure client environments with zero data retention on external servers.",
  },
];

export default function DataAnnotationAndRlhfPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full bg-[#fff8f5] text-[#241913]">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-28 px-4 max-w-[1280px] mx-auto border-b border-[#ddc1b0]">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Breadcrumb / Tagline Pill */}
          <div className="inline-flex items-center gap-2 border border-[#ddc1b0] bg-[#ffffff] px-4 py-1.5 rounded-full font-['JetBrains_Mono'] text-xs font-bold text-[#964900] mb-6 tracking-widest uppercase shadow-sm">
            <FileCheck className="w-3.5 h-3.5 text-[#964900]" />
            <span>DATA ANNOTATION & RLHF · PRECISION TRAINING DATA</span>
          </div>

          <h1 className="font-['Hanken_Grotesk'] text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#241913] mb-4 tracking-tight leading-[1.1]">
            DATA ANNOTATION & <span className="text-[#964900]">RLHF</span>
          </h1>

          <p className="font-['JetBrains_Mono'] text-lg font-bold text-[#964900] mb-6 tracking-wide">
            Precision Labeling · Engineering-Aligned · Production-Grade
          </p>

          <p className="font-['Inter'] text-base sm:text-lg text-[#564336] max-w-3xl mb-8 leading-relaxed font-normal">
            Most annotation platforms sell volume. We sell model performance. If your data isn’t mapped to your engineering goals, your model fails regardless of the architecture. We integrate domain experts directly into your training pipeline to ensure the feedback fed into your model is as precise as the code you write.
          </p>

          {/* Value Badges Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              "RLHF & Preference Scoring",
              "SFT Fine-Tuning Curation",
              "Adversarial Red-Teaming",
              "Healthcare & Medical Annotators",
              "Legal & Financial Experts",
              "Human-in-the-Loop Eval",
            ].map((badge) => (
              <span
                key={badge}
                className="px-3.5 py-1 bg-[#fff1ea] border border-[#ddc1b0] rounded-full text-xs font-['JetBrains_Mono'] font-medium text-[#241913]"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="bg-[#964900] text-white font-['JetBrains_Mono'] font-bold text-base px-8 py-4 rounded-full hover:bg-[#723600] transition-all duration-200 shadow-md flex items-center gap-2 group text-center"
            >
              <span>Schedule an Executive Briefing</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#approach"
              className="border border-[#ddc1b0] bg-[#ffffff] text-[#241913] font-['JetBrains_Mono'] font-bold text-base px-8 py-4 rounded-full hover:bg-[#fff1ea] transition-colors text-center"
            >
              Explore Approach
            </a>
          </div>
        </div>
      </section>

      {/* 2. THE REALITY OF ANNOTATION (FAILURE MODES) */}
      <section className="py-20 bg-[#ffffff] border-b border-[#ddc1b0]">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#964900] font-bold uppercase tracking-widest mb-3">
              <AlertTriangle className="w-4 h-4" />
              <span>THE REALITY OF ANNOTATION</span>
            </div>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#241913] mb-4">
              If Your Annotators Don’t Understand Engineering Goals, They Can’t Label for Them
            </h2>
            <p className="font-['Inter'] text-base text-[#564336] leading-relaxed">
              Standard crowd-sourced labeling fails when applied to complex, domain-specific AI models. We eliminate the systemic breakdown points in traditional annotation pipelines.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {failureModes.map((fm) => (
              <div
                key={fm.title}
                className="bg-[#fff8f5] border border-[#ddc1b0] hover:border-[#964900] rounded-xl p-6 transition-all duration-300 shadow-sm hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded bg-[#fff1ea] flex items-center justify-center text-[#964900] font-['JetBrains_Mono'] font-bold text-xs">
                      !
                    </div>
                    <span className="text-[10px] font-['JetBrains_Mono'] font-bold text-[#964900] bg-[#fff1ea] px-2 py-0.5 rounded border border-[#ddc1b0]">
                      {fm.tag}
                    </span>
                  </div>
                  <h3 className="font-['Hanken_Grotesk'] text-lg font-bold text-[#241913] mb-2">
                    {fm.title}
                  </h3>
                  <p className="font-['Inter'] text-xs text-[#564336] leading-relaxed">
                    {fm.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH: HIGH-PRECISION FEEDBACK LOOPS */}
      <section id="approach" className="py-20 bg-[#fff8f5] border-b border-[#ddc1b0]">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-['JetBrains_Mono'] text-[#964900] font-bold uppercase tracking-widest mb-3">
              OUR APPROACH
            </div>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#241913] mb-4">
              High-Precision Feedback Loops for Superior Model Outputs
            </h2>
            <p className="font-['Inter'] text-base text-[#564336] leading-relaxed">
              We structure data curation and human feedback into a continuous, engineering-aligned cycle designed to maximize downstream model evaluation metrics.
            </p>
          </div>

          <div className="space-y-8">
            {approachPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  id={pillar.id}
                  className="bg-[#ffffff] border border-[#ddc1b0] hover:border-[#964900] rounded-2xl p-8 transition-all duration-300 shadow-sm hover-lift grid lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-lg bg-[#fff1ea] text-[#964900] border border-[#ddc1b0]">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#964900] uppercase tracking-wider">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="font-['Hanken_Grotesk'] text-2xl font-extrabold text-[#241913] mb-3">
                      {pillar.title}
                    </h3>

                    <p className="font-['Inter'] text-sm text-[#564336] leading-relaxed mb-6">
                      {pillar.desc}
                    </p>

                    <div className="space-y-2">
                      {pillar.items.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-xs font-['Inter'] text-[#241913]">
                          <CheckCircle2 className="w-4 h-4 text-[#964900] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-[#F3F3F3] border border-[#ddc1b0] rounded-xl p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-[11px] font-['JetBrains_Mono'] text-[#964900] font-bold uppercase mb-2">
                        PILLAR 0{idx + 1}
                      </div>
                      <div className="text-sm font-['Hanken_Grotesk'] font-bold text-[#241913] mb-3">
                        Production Model Impact
                      </div>
                      <p className="text-xs font-['Inter'] text-[#564336] leading-relaxed mb-6">
                        Directly boosts evaluation metrics (BLEU, ROUGE, human win-rate, safety guardrail compliance) through rigorous ground-truth verification.
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-between text-xs font-['JetBrains_Mono'] font-bold text-[#964900] hover:text-[#723600] pt-4 border-t border-[#ddc1b0]"
                    >
                      <span>Scope {pillar.badge} Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. THE ALPHAESAI COMMITMENT */}
      <section className="py-20 bg-[#241913] text-white border-b border-[#ddc1b0]">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#ffb786] font-bold uppercase tracking-widest mb-3">
              <Award className="w-4 h-4 text-[#ffb786]" />
              <span>THE ALPHAESAI COMMITMENT</span>
            </div>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              We Define Quality by Model Performance, Not Label Count
            </h2>
            <p className="font-['Inter'] text-base text-white/80 leading-relaxed">
              We don't measure progress by raw output counts. Our sole benchmark is how well your AI model performs when deployed to real-world users.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitmentPoints.map((cp) => {
              const IconComp = cp.icon;
              return (
                <div
                  key={cp.title}
                  className="bg-[#1c130d] border border-white/10 hover:border-[#964900] rounded-xl p-6 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#964900]/20 border border-[#964900]/40 flex items-center justify-center text-[#ffb786] mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-['Hanken_Grotesk'] text-lg font-bold text-white mb-2">
                      {cp.title}
                    </h3>
                    <p className="font-['Inter'] text-xs text-white/70 leading-relaxed">
                      {cp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. DOMAIN EXPERTISE */}
      <section className="py-20 bg-[#ffffff] border-b border-[#ddc1b0]">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-['JetBrains_Mono'] text-[#964900] font-bold uppercase tracking-widest mb-3">
              SPECIALIZED DOMAIN NETWORKS
            </div>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#241913] mb-4">
              Vetted Experts Matched to Your Industry Taxonomy
            </h2>
            <p className="font-['Inter'] text-base text-[#564336] leading-relaxed">
              We match specialized annotators to the exact nuances of your industry data.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {domains.map((d) => {
              const IconComp = d.icon;
              return (
                <div
                  key={d.name}
                  className="bg-[#fff8f5] border border-[#ddc1b0] hover:border-[#964900] rounded-2xl p-8 transition-all duration-300 shadow-sm hover-lift"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-[#ffffff] border border-[#ddc1b0] text-[#964900] shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="font-['Hanken_Grotesk'] text-xl font-bold text-[#241913]">
                        {d.name}
                      </h3>
                    </div>
                    <span className="text-[10px] font-['JetBrains_Mono'] font-bold text-[#964900] bg-[#fff1ea] px-2.5 py-1 rounded border border-[#ddc1b0]">
                      {d.tag}
                    </span>
                  </div>
                  <p className="font-['Inter'] text-sm text-[#564336] leading-relaxed">
                    {d.focus}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-20 bg-[#fff8f5] border-b border-[#ddc1b0]">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-['JetBrains_Mono'] text-[#964900] font-bold uppercase tracking-widest mb-3">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#241913]">
              Data Curation & RLHF Inquiries
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="bg-[#ffffff] border border-[#ddc1b0] rounded-xl transition-all duration-200 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-['Hanken_Grotesk'] font-bold text-lg text-[#241913] hover:text-[#964900] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#964900] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 font-['Inter'] text-sm text-[#564336] leading-relaxed border-t border-[#ddc1b0]/40 mt-1 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA BANNER */}
      <section className="py-20 px-4 max-w-[1280px] mx-auto">
        <div className="bg-[#241913] text-white rounded-3xl p-10 sm:p-16 border border-[#ddc1b0] shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#964900]/50 bg-[#964900]/20 px-4 py-1.5 rounded-full font-['JetBrains_Mono'] text-xs font-bold text-[#ffb786] mb-6 tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#ffb786]" />
            <span>ALIGN YOUR MODEL TODAY</span>
          </div>

          <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to give your models the high-fidelity data they deserve?
          </h2>

          <p className="font-['Inter'] text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Let’s discuss your dataset requirements, domain expert alignment, and RLHF pipeline needs.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#964900] text-white font-['JetBrains_Mono'] font-bold text-base px-9 py-4 rounded-full hover:bg-[#b05600] transition-colors shadow-lg group"
          >
            <span>Schedule an Executive Briefing</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
