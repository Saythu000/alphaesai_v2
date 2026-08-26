"use client";

import Link from "next/link";
import {
  Code,
  Layers,
  Database,
  Zap,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Globe,
  Sparkles,
} from "lucide-react";

const modules = [
  {
    step: "MODULE 01",
    title: "Modern AI-Native Frontend Stack (Next.js 15, Tailwind & Reactbits)",
    desc: "Build sleek, responsive web interfaces tailored for conversational AI, streaming text responses, glassmorphic UI components, and dynamic 3D visualizations.",
    skills: ["Next.js 15 App Router", "Server & Client Components", "Streaming UI & Suspense"],
  },
  {
    step: "MODULE 02",
    title: "Vector Databases, RAG Pipelines & Semantic Search",
    desc: "Master embedding generation, hybrid vector search (Dense + Sparse), chunking strategies, and retrieval-augmented generation with Pinecone & Neon DB.",
    skills: ["Embedding Models", "Pinecone / Qdrant", "Hybrid Vector Search"],
  },
  {
    step: "MODULE 03",
    title: "Real-Time AI Copilots, Server-Sent Events & WebSockets",
    desc: "Connect frontend applications to streaming LLM outputs, real-time audio/video AI APIs, and interactive conversational drawers with sub-50ms latency.",
    skills: ["Server-Sent Events (SSE)", "WebSocket Streaming", "Optimistic State Updates"],
  },
  {
    step: "MODULE 04",
    title: "Production Deployment, Vercel, Docker & CI/CD Pipelines",
    desc: "Deploy full-stack AI applications globally with serverless edge functions, rate-limiting, telemetry monitoring, and automated security scanning.",
    skills: ["Vercel App Hosting", "Docker Containerization", "Rate Limiting & Telemetry"],
  },
];

export default function FullstackAiAcademy() {
  return (
    <div className="w-full bg-[#fff8f5] text-[#241913] min-h-screen">
      {/* Hero Header */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 border border-[#241913]/15 bg-[#fff1ea] px-4 py-1.5 rounded-full font-mono-tech text-xs font-semibold text-[#964900] mb-6 tracking-widest uppercase shadow-sm">
          <Terminal className="w-4 h-4 text-[#964900]" />
          <span>AlphaesAI Academy — Fullstack AI Track</span>
        </div>

        <h1 className="font-hanken text-4xl sm:text-6xl font-extrabold text-[#241913] mb-6 tracking-tight leading-tight">
          Fullstack Developer with AI
        </h1>

        <p className="font-inter text-lg text-[#564336] max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          Become a modern AI-native full-stack software engineer. Learn to architect, develop, and deploy production Web AI applications, RAG pipelines, and interactive copilots.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="/contact"
            className="bg-[#964900] text-white font-inter text-base px-8 py-3.5 rounded-md font-semibold hover:bg-[#7a3b00] transition-colors shadow-md text-center inline-flex items-center gap-2"
          >
            <span>Enroll in Fullstack AI Track</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/oneai-assist"
            className="border border-[#241913]/20 bg-[#F3F3F3] text-[#241913] font-inter text-base px-8 py-3.5 rounded-md font-semibold hover:bg-[#fff1ea] transition-colors text-center"
          >
            See Live AI Copilot Example
          </Link>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-16 bg-[#fff1ea] border-t border-b border-[#241913]/10">
        <div className="max-w-[1440px] mx-auto px-8 grid md:grid-cols-3 gap-8">
          <div className="bg-[#fff8f5] border border-[#241913]/15 rounded-2xl p-6 space-y-3 shadow-sm">
            <Globe className="w-8 h-8 text-[#964900]" />
            <h3 className="font-hanken text-xl font-bold">Next.js 15 & React 19</h3>
            <p className="font-inter text-xs text-[#564336]">
              Architect high-performance web applications leveraging Server Components, dynamic streaming, and microsecond hydration.
            </p>
          </div>

          <div className="bg-[#fff8f5] border border-[#241913]/15 rounded-2xl p-6 space-y-3 shadow-sm">
            <Database className="w-8 h-8 text-[#964900]" />
            <h3 className="font-hanken text-xl font-bold">RAG & Vector Search</h3>
            <p className="font-inter text-xs text-[#564336]">
              Transform structured & unstructured enterprise data into searchable vector indexes with real-time RAG context retrieval.
            </p>
          </div>

          <div className="bg-[#fff8f5] border border-[#241913]/15 rounded-2xl p-6 space-y-3 shadow-sm">
            <Zap className="w-8 h-8 text-[#964900]" />
            <h3 className="font-hanken text-xl font-bold">Streaming & AI UX</h3>
            <p className="font-inter text-xs text-[#564336]">
              Master generative UI pattern design, animated markdown rendering, optimistic execution states, and real-time audio channels.
            </p>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono-tech text-[#964900] uppercase tracking-widest mb-2 font-bold">
              Engineering Track Curriculum
            </div>
            <h2 className="font-hanken text-3xl sm:text-4xl font-bold text-[#241913]">
              From Zero to AI Fullstack Specialist
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((m) => (
              <div
                key={m.step}
                className="bg-[#F3F3F3] border border-[#241913]/15 rounded-2xl p-8 space-y-4 hover:border-[#964900]/40 transition-colors shadow-sm"
              >
                <div className="text-xs font-mono-tech font-bold text-[#964900]">
                  {m.step}
                </div>
                <h3 className="font-hanken text-xl font-bold text-[#241913]">
                  {m.title}
                </h3>
                <p className="font-inter text-xs text-[#564336] leading-relaxed">
                  {m.desc}
                </p>
                <div className="pt-4 border-t border-[#241913]/10 flex flex-wrap gap-2">
                  {m.skills.map((s) => (
                    <span
                      key={s}
                      className="bg-[#fff1ea] border border-[#241913]/10 text-[#964900] font-inter text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-[#241913] text-[#fff8f5] rounded-3xl p-10 text-center space-y-6 max-w-4xl mx-auto shadow-2xl">
            <Sparkles className="w-10 h-10 text-[#ffb786] mx-auto" />
            <h2 className="font-hanken text-3xl font-extrabold text-[#ffb786]">
              Accelerate Your AI Engineering Career
            </h2>
            <p className="font-inter text-sm text-[#f3ded3]/80 max-w-xl mx-auto leading-relaxed">
              Gain production experience building real-world AI applications with senior software engineers.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#964900] hover:bg-[#b85b00] text-white font-inter text-sm font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg"
            >
              <span>Apply for Fullstack AI Program</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
