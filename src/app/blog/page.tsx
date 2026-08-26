"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Sparkles,
  Tag,
  X,
  CheckCircle2,
  Share2,
  Bookmark,
  MessageSquare,
} from "lucide-react";

interface Article {
  id: string;
  title: string;
  category: "Agentic AI" | "Databricks & Lakehouse" | "Full-Stack AI" | "Security & Compliance" | "FDE Case Studies";
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  snippet: string;
  content: {
    introduction: string;
    keyTakeaways: string[];
    sections: { heading: string; body: string; codeSnippet?: string }[];
    conclusion: string;
  };
  featured?: boolean;
}

const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "Architecting Production Agentic AI with Zero-Hallucination Guardrails",
    category: "Agentic AI",
    readTime: "7 min read",
    date: "Aug 24, 2026",
    author: "Forward Deployed AI Team",
    authorRole: "Principal AI Architect",
    snippet: "How we design multi-agent swarms using the Antigravity SDK to execute complex enterprise workflows with sub-100ms tool-calling latency and deterministic safety bounds.",
    featured: true,
    content: {
      introduction: "Autonomous agentic systems represent the biggest shift in enterprise software since cloud migration. However, deploying agents into live production environments requires far more than wrapping an LLM API in a loop.",
      keyTakeaways: [
        "Use explicit tool schema allowlisting with identity-bound credentials.",
        "Implement short-circuiting input/output guardrails using LlamaGuard models.",
        "Separate planning subagents from execution subagents to avoid runaway loops.",
      ],
      sections: [
        {
          heading: "1. The Anatomy of an Enterprise Agent Loop",
          body: "An enterprise agent loop must be deterministic in its control flow while remaining flexible in reasoning. By leveraging the Antigravity SDK, we establish explicit state graph boundaries that prevent agents from executing destructive commands without explicit human approval.",
          codeSnippet: `// Example Antigravity Agent Tool Invocation Guardrail
import { createAgent, withGuardrails } from "@alphaesai/antigravity-sdk";

const agent = createAgent({
  name: "DBOperationsAgent",
  tools: [sqlQueryTool, clusterScalingTool],
  guardrails: withGuardrails({
    maxToolRetries: 3,
    disallowedCommands: ["DROP TABLE", "DELETE FROM *"],
    requireHumanApprovalFor: ["scale_cluster_down"],
  }),
});`,
        },
        {
          heading: "2. Mitigating Indirect Prompt Injection in RAG Pipelines",
          body: "When agents ingest external documents, web pages, or email threads, malicious prompts embedded in context can hijack execution. We enforce context defanging and pre-tokenization sanitization before documents reach the agent's context window.",
        },
      ],
      conclusion: "By combining hierarchical subagent swarms with strict tool allowlisting, enterprises can safely deploy autonomous AI agents that deliver high speed without risk of data loss.",
    },
  },
  {
    id: "art-2",
    title: "Cutting Databricks Delta Lake Compute Costs by 60% in 30 Days",
    category: "Databricks & Lakehouse",
    readTime: "6 min read",
    date: "Aug 20, 2026",
    author: "Data Architecture Lead",
    authorRole: "Senior Lakehouse Engineer",
    snippet: "A practical step-by-step guide to Liquid Clustering, PySpark shuffle elimination, and automated DBU cluster auto-scaling for enterprise lakehouses.",
    content: {
      introduction: "Databricks compute costs (DBUs) can quickly escalate if queries rely on legacy Z-Ordering or suffer from data skew. In this deep dive, we outline the exact optimization playbook our Forward-Deployed Engineers applied for a Fortune 500 client.",
      keyTakeaways: [
        "Replace legacy OPTIMIZE ZORDER WITH Liquid Clustering for up to 4x faster query speeds.",
        "Eliminate PySpark shuffle spills by tuning spark.sql.shuffle.partitions dynamically.",
        "Use Graviton3-backed compute instances to cut raw instance costs by 20%.",
      ],
      sections: [
        {
          heading: "1. Migrating from Z-Ordering to Liquid Clustering",
          body: "Liquid Clustering provides incremental, low-overhead data layout optimization without requiring full table rewrites. This dramatically reduces DBU consumption during batch ingestion.",
          codeSnippet: `-- Enabling Liquid Clustering on Databricks Delta Table
CREATE TABLE telemetry_logs (
  timestamp TIMESTAMP,
  device_id STRING,
  payload STRING
)
USING DELTA
CLUSTER BY (device_id, timestamp);`,
        },
      ],
      conclusion: "Systematic Lakehouse optimization delivers immediate ROI by slashing monthly DBU expenditure while simultaneously accelerating ETL pipeline throughput.",
    },
  },
  {
    id: "art-3",
    title: "Building Full-Stack AI Apps with Next.js App Router & Streaming Copilots",
    category: "Full-Stack AI",
    readTime: "5 min read",
    date: "Aug 16, 2026",
    author: "Fullstack Engineering Lead",
    authorRole: "Staff Web Architect",
    snippet: "Learn how to build real-time conversational UIs with Server-Sent Events, Optimistic State updates, and Pinecone vector retrieval in Next.js 15.",
    content: {
      introduction: "Users expect AI web applications to respond instantaneously with streaming tokens, interactive markdown code blocks, and zero page reload lag.",
      keyTakeaways: [
        "Use Server-Sent Events (SSE) for low-overhead token streaming.",
        "Implement optimistic state updates in React 19 to render user messages instantly.",
        "Pre-fetch vector search embeddings in parallel with user input parsing.",
      ],
      sections: [
        {
          heading: "1. Streaming Text with Next.js App Router API Routes",
          body: "By leveraging ReadableStream in Next.js Edge Runtime, you can stream LLM tokens to the browser with microsecond latency.",
        },
      ],
      conclusion: "Combining modern Next.js App Router architecture with vector search delivers a fluid, responsive AI copilot experience.",
    },
  },
  {
    id: "art-4",
    title: "HIPAA & SOC-2 Type II Compliance for Enterprise LLM Pipelines",
    category: "Security & Compliance",
    readTime: "8 min read",
    date: "Aug 10, 2026",
    author: "Cybersecurity Task Force",
    authorRole: "Head of AI Security",
    snippet: "Complete blueprint for zero-trust cloud boundaries, automated PII redaction, and audit logging when deploying medical and financial AI models.",
    content: {
      introduction: "Security and compliance are non-negotiable when deploying generative AI in healthcare and financial services. Here is how we enforce HIPAA compliance for models like DrGodly AI.",
      keyTakeaways: [
        "Encrypt all embeddings and prompt payloads at rest and in transit.",
        "Implement automatic regex & NER PII redaction prior to LLM submission.",
        "Maintain immutable append-only audit logs for all model inferences.",
      ],
      sections: [
        {
          heading: "1. Automated PII Sanitization",
          body: "Before sending prompts to external or fine-tuned model endpoints, sensitive fields (SSN, medical record numbers, names) must be redacted and tokenized.",
        },
      ],
      conclusion: "Zero-trust AI pipelines enable enterprises to innovate with confidence while meeting rigid regulatory benchmarks.",
    },
  },
  {
    id: "art-5",
    title: "Why Forward-Deployed AI Engineering (FDE) Outperforms Traditional Consulting",
    category: "FDE Case Studies",
    readTime: "6 min read",
    date: "Aug 04, 2026",
    author: "AlphaesAI Leadership",
    authorRole: "Co-Founder & CTO",
    snippet: "Why embedding senior AI engineers directly into client codebases ships production systems in weeks, eliminating presentation decks and scope creep.",
    content: {
      introduction: "Traditional tech consulting relies on lengthy discovery phases, static slide decks, and handoff friction. Our Forward-Deployed Engineering model embeds senior AI builders directly inside your team.",
      keyTakeaways: [
        "FDE engineers write production code directly inside your Git repositories and cloud accounts.",
        "Deploy working AI prototypes in 14 days rather than 6-month consulting roadmaps.",
        "Zero knowledge transfer overhead since client engineers co-build the codebase.",
      ],
      sections: [
        {
          heading: "1. Embedded Production Velocity",
          body: "Our FDE teams bring pre-tested architecture templates, Antigravity SDK tooling, and Databricks optimization scripts, allowing them to ship production code on Day 1.",
        },
      ],
      conclusion: "Forward-Deployed Engineering ensures that strategic AI initiatives translate directly into shipping software and measurable business value.",
    },
  },
];

const CATEGORIES = [
  "All Articles",
  "Agentic AI",
  "Databricks & Lakehouse",
  "Full-Stack AI",
  "Security & Compliance",
  "FDE Case Studies",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCategory =
      selectedCategory === "All Articles" || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <div className="w-full bg-[#fff8f5] text-[#241913] min-h-screen">
      {/* Hero Banner */}
      <section className="py-20 px-8 max-w-[1440px] mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 border border-[#241913]/15 bg-[#fff1ea] px-4 py-1.5 rounded-full font-mono-tech text-xs font-semibold text-[#964900] mb-6 tracking-widest uppercase shadow-sm">
          <BookOpen className="w-4 h-4 text-[#964900]" />
          <span>AlphaesAI Engineering Insights</span>
        </div>

        <h1 className="font-hanken text-4xl sm:text-6xl font-extrabold text-[#241913] mb-6 tracking-tight leading-tight">
          Technical Deep Dives & Industrial AI Blueprints
        </h1>

        <p className="font-inter text-lg text-[#564336] max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          Production-proven architectures for Agentic AI, Databricks Lakehouse optimization, full-stack AI applications, and zero-trust cloud security.
        </p>

        {/* Search & Category Filter */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#564336]" />
            <input
              type="text"
              placeholder="Search technical articles, topics, or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-[#fff1ea] border border-[#241913]/20 rounded-2xl font-inter text-sm text-[#241913] placeholder-[#564336]/60 focus:outline-none focus:border-[#964900] shadow-sm transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-mono-tech text-xs font-bold transition-colors shadow-sm ${
                  selectedCategory === cat
                    ? "bg-[#964900] text-white"
                    : "bg-[#fff1ea] text-[#564336] border border-[#241913]/10 hover:bg-[#ffeade] hover:text-[#241913]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article Spotlight */}
      {selectedCategory === "All Articles" && !searchQuery && (
        <section className="py-8 px-8 max-w-[1440px] mx-auto">
          <div className="bg-[#241913] text-[#fff8f5] rounded-3xl p-8 sm:p-12 border border-[#ddc1b0]/20 shadow-2xl relative overflow-hidden grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#964900] text-white px-3 py-1 rounded-full text-xs font-mono-tech font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Technical Paper
              </div>
              <h2 className="font-hanken text-2xl sm:text-4xl font-extrabold text-[#ffb786] leading-tight">
                {featuredArticle.title}
              </h2>
              <p className="font-inter text-sm text-[#f3ded3]/80 leading-relaxed">
                {featuredArticle.snippet}
              </p>
              <div className="flex items-center gap-6 font-inter text-xs text-[#f3ded3]/60 pt-2">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#ffb786]" />
                  {featuredArticle.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#ffb786]" />
                  {featuredArticle.readTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#ffb786]" />
                  {featuredArticle.date}
                </span>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => setActiveArticle(featuredArticle)}
                  className="bg-[#964900] hover:bg-[#b85b00] text-white font-inter text-sm font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-colors shadow-md"
                >
                  <span>Read Full Technical Paper</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-center justify-center p-6 bg-[#fff8f5]/10 rounded-2xl border border-white/10 text-center space-y-3">
              <BookOpen className="w-12 h-12 text-[#ffb786]" />
              <div className="font-mono-tech text-xs font-bold text-[#ffb786] uppercase tracking-wider">
                Production Blueprint
              </div>
              <p className="font-inter text-xs text-[#f3ded3]/70">
                Includes ready-to-use Antigravity SDK guardrail configurations.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Main Articles Grid */}
      <section className="py-16 px-8 max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#241913]/10">
          <h2 className="font-hanken text-2xl font-bold text-[#241913]">
            {selectedCategory === "All Articles" ? "Latest Articles" : selectedCategory} ({filteredArticles.length})
          </h2>
          <span className="font-mono-tech text-xs text-[#564336] uppercase tracking-wider font-bold">
            Showing {filteredArticles.length} of {ARTICLES.length} posts
          </span>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-[#fff1ea] rounded-2xl border border-[#241913]/10">
            <p className="font-inter text-base text-[#564336]">
              No articles found matching &quot;{searchQuery}&quot; in category {selectedCategory}.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All Articles");
                setSearchQuery("");
              }}
              className="mt-4 bg-[#964900] text-white font-inter text-xs font-bold px-4 py-2 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                className="bg-[#fff8f5] border border-[#241913]/15 hover:border-[#964900]/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#fff1ea] border border-[#241913]/10 text-[#964900] font-mono-tech text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {art.category}
                    </span>
                    <span className="font-inter text-xs text-[#564336] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#964900]" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-hanken text-xl font-bold text-[#241913] group-hover:text-[#964900] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="font-inter text-xs text-[#564336] leading-relaxed line-clamp-3">
                    {art.snippet}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#241913]/10 flex items-center justify-between">
                  <div className="font-inter text-[11px] text-[#564336]">
                    <div className="font-bold text-[#241913]">{art.author}</div>
                    <div className="text-[#564336]/80">{art.date}</div>
                  </div>

                  <button
                    onClick={() => setActiveArticle(art)}
                    className="bg-[#fff1ea] group-hover:bg-[#964900] text-[#964900] group-hover:text-white font-mono-tech text-xs font-bold px-3.5 py-2 rounded-xl transition-colors inline-flex items-center gap-1"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter Subscription Bar */}
      <section className="py-20 bg-[#fff1ea] border-t border-[#241913]/10">
        <div className="max-w-4xl mx-auto px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#fff8f5] border border-[#241913]/15 px-4 py-1.5 rounded-full font-mono-tech text-xs font-bold text-[#964900] uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Weekly Engineering Briefing</span>
          </div>

          <h2 className="font-hanken text-3xl font-extrabold text-[#241913]">
            Stay Ahead of the AI Engineering Shift
          </h2>

          <p className="font-inter text-sm text-[#564336] max-w-xl mx-auto leading-relaxed">
            Get practical Agentic AI blueprints, Lakehouse optimization techniques, and code snippets delivered straight to your inbox every Wednesday.
          </p>

          {subscribed ? (
            <div className="bg-[#fff8f5] border border-[#964900]/40 text-[#964900] p-4 rounded-2xl font-inter text-sm font-bold inline-flex items-center gap-2 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-[#964900]" />
              Thank you for subscribing! Check your inbox for the latest AI briefing.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your work email..."
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="flex-1 px-4 py-3 bg-[#fff8f5] border border-[#241913]/20 rounded-xl font-inter text-sm text-[#241913] placeholder-[#564336]/60 focus:outline-none focus:border-[#964900]"
              />
              <button
                type="submit"
                className="bg-[#964900] hover:bg-[#7a3b00] text-white font-inter text-sm font-bold px-6 py-3 rounded-xl transition-colors shadow-md whitespace-nowrap"
              >
                Subscribe Free
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Interactive Article Reader Modal Drawer */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#fff8f5] border border-[#ddc1b0] w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-[#241913]/10 bg-[#fff1ea] flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono-tech text-xs font-bold text-[#964900] uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5" />
                {activeArticle.category}
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1.5 text-[#241913] hover:bg-[#241913]/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="space-y-2">
                <h1 className="font-hanken text-2xl sm:text-3xl font-extrabold text-[#241913] leading-tight">
                  {activeArticle.title}
                </h1>
                <div className="flex items-center gap-4 font-inter text-xs text-[#564336] pt-1">
                  <span>By <strong className="text-[#241913]">{activeArticle.author}</strong> ({activeArticle.authorRole})</span>
                  <span>•</span>
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>
              </div>

              <div className="p-4 bg-[#fff1ea] border border-[#241913]/10 rounded-xl font-inter text-xs text-[#564336] leading-relaxed italic">
                &ldquo;{activeArticle.content.introduction}&rdquo;
              </div>

              {/* Key Takeaways */}
              <div className="space-y-3 bg-[#F3F3F3] p-5 rounded-2xl border border-[#241913]/10">
                <div className="font-mono-tech text-xs font-bold text-[#964900] uppercase tracking-wider">
                  Key Technical Takeaways
                </div>
                <ul className="space-y-2 font-inter text-xs text-[#241913]">
                  {activeArticle.content.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#964900] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sections */}
              {activeArticle.content.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="font-hanken text-lg font-bold text-[#241913]">
                    {sec.heading}
                  </h3>
                  <p className="font-inter text-xs text-[#564336] leading-relaxed">
                    {sec.body}
                  </p>
                  {sec.codeSnippet && (
                    <pre className="bg-[#241913] text-[#ffb786] p-4 rounded-xl font-mono-tech text-xs overflow-x-auto border border-[#ddc1b0]/20 shadow-inner">
                      <code>{sec.codeSnippet}</code>
                    </pre>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-[#241913]/10 font-inter text-xs text-[#564336]">
                <strong className="text-[#241913]">Conclusion:</strong> {activeArticle.content.conclusion}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-[#241913]/10 bg-[#fff1ea] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs font-inter text-[#564336]">
                Want to implement this architecture in your codebase?
              </div>
              <Link
                href="/contact"
                onClick={() => setActiveArticle(null)}
                className="bg-[#964900] hover:bg-[#7a3b00] text-white font-inter text-xs font-bold px-5 py-2.5 rounded-xl transition-colors shadow-md"
              >
                Schedule FDE Briefing
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
