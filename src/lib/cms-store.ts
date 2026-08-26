export interface FooterLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterColumn {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface FooterCMSData {
  brandName: string;
  tagline: string;
  description: string;
  contactEmail: string;
  contactPhone?: string;
  contactAddress?: string;
  columns: FooterColumn[];
}

export interface HomepageHeroCMSData {
  announcementText: string;
  announcementLinkText: string;
  announcementLinkHref: string;
  headline: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

export interface Homepage3DCMSData {
  badgeText: string;
  title: string;
  subtitle: string;
  cardHeadline: string;
  cardDescription: string;
  cardBtn1Text: string;
  cardBtn1Href: string;
  cardBtn2Text: string;
  cardBtn2Href: string;
  chestBrandText: string;
}

export interface MetricItem {
  id: string;
  value: string;
  description: string;
}

export interface ArchitectureCard {
  id: string;
  title: string;
  desc: string;
}

export interface TestimonialCMSData {
  heading: string;
  subhead: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorAvatar: string;
  footerCaption: string;
}

export interface HomepageCMSData {
  hero: HomepageHeroCMSData;
  showcase3d: Homepage3DCMSData;
  metrics: MetricItem[];
  architecture: {
    badgeText: string;
    title: string;
    cards: ArchitectureCard[];
  };
  testimonial: TestimonialCMSData;
  ctaBanner: {
    title: string;
    description: string;
    primaryCtaText: string;
    primaryCtaHref: string;
    secondaryCtaText: string;
    secondaryCtaHref: string;
  };
}

export interface HeaderCMSData {
  announcementBarText: string;
  announcementLinkText: string;
  announcementLinkHref: string;
  navLinks: FooterLink[];
  primaryCtaText: string;
  primaryCtaHref: string;
}

export interface ServiceCardCMS {
  id: string;
  title: string;
  desc: string;
  href: string;
  badge: string;
}

export interface FeatureCardCMS {
  id: string;
  title: string;
  desc: string;
}

export interface FAQItemCMS {
  id: string;
  question: string;
  answer: string;
}

export interface ServicesCMSData {
  badge: string;
  title: string;
  subtitle: string;
  cards: ServiceCardCMS[];
  fdeTitle: string;
  fdeSubtitle: string;
  fdeDescription: string;
  fdeCtaText: string;
  fdeCtaHref: string;
}

export interface DrGodlyCMSData {
  heroBadge: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  featuresHeading: string;
  features: FeatureCardCMS[];
  metrics: MetricItem[];
}

export interface OneAIAssistCMSData {
  heroBadge: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  featuresHeading: string;
  features: FeatureCardCMS[];
}

export interface AboutCMSData {
  heroBadge: string;
  title: string;
  subtitle: string;
  missionTitle: string;
  missionDesc: string;
  visionTitle: string;
  visionDesc: string;
  stats: MetricItem[];
  values: FeatureCardCMS[];
}

export interface PartnersCMSData {
  heroBadge: string;
  title: string;
  subtitle: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  alliancesHeading: string;
  partners: FeatureCardCMS[];
  ctaTitle: string;
  ctaDesc: string;
  ctaBtnText: string;
  ctaBtnHref: string;
}

export interface ContactCMSData {
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  address: string;
  formTitle: string;
  faqsHeading: string;
  faqs: FAQItemCMS[];
}

export interface PagesCMSData {
  services: ServicesCMSData;
  drgodly: DrGodlyCMSData;
  oneaiAssist: OneAIAssistCMSData;
  about: AboutCMSData;
  partners: PartnersCMSData;
  contact: ContactCMSData;
}

export interface FullCMSData {
  header: HeaderCMSData;
  footer: FooterCMSData;
  homepage: HomepageCMSData;
  pages: PagesCMSData;
}

export const DEFAULT_CMS_DATA: FullCMSData = {
  header: {
    announcementBarText: "⚡ Introducing AlphaesAI Connect 2026 — The Agentic Cloud Conference.",
    announcementLinkText: "Learn More",
    announcementLinkHref: "/contact",
    navLinks: [
      { id: "nav-1", label: "Services", href: "/services" },
      { id: "nav-2", label: "OneAI Assist", href: "/oneai-assist" },
      { id: "nav-3", label: "Dr. Godly Health", href: "/drgodly" },
      { id: "nav-4", label: "Partners", href: "/partners" },
      { id: "nav-5", label: "About", href: "/about" },
      { id: "nav-6", label: "Contact", href: "/contact" },
    ],
    primaryCtaText: "Get Started Free",
    primaryCtaHref: "/contact",
  },
  footer: {
    brandName: "AlphaesAI",
    tagline: "© 2026 AlphaesAI, Inc. All rights reserved.",
    description: "Industrial-Scale Intelligence for apps, agents, and enterprise data.",
    contactEmail: "contact@alphaesai.com",
    contactPhone: "+91 70106 42399",
    contactAddress: "No. 472/7 Balaji Arcade, Ejipura, Koramangala 4th Block, Bengaluru, Karnataka - 560095, India",
    columns: [
      {
        id: "col-platform",
        title: "Platform",
        links: [
          { id: "l-1", label: "Services", href: "/services" },
          { id: "l-2", label: "FDE Model", href: "/services/forward-deployed-ai-engineering" },
          { id: "l-3", label: "OneAI Assist", href: "/oneai-assist" },
        ],
      },
      {
        id: "col-ecosystem",
        title: "Ecosystem",
        links: [
          { id: "l-4", label: "Partners", href: "/partners" },
          { id: "l-5", label: "DrGodly Health", href: "/drgodly" },
          { id: "l-6", label: "Company", href: "/about" },
          { id: "l-7", label: "Careers", href: "/careers" },
        ],
      },
      {
        id: "col-contact",
        title: "Contact & Location",
        links: [
          { id: "l-10", label: "Schedule Briefing", href: "/contact" },
          { id: "l-11", label: "contact@alphaesai.com", href: "mailto:contact@alphaesai.com" },
          { id: "l-12", label: "+91 70106 42399", href: "tel:+917010642399" },
          { id: "l-13", label: "No. 472/7 Balaji Arcade, Ejipura, Koramangala 4th Block, Bengaluru, Karnataka - 560095, India", href: "/contact" },
        ],
      },
    ],
  },
  homepage: {
    hero: {
      announcementText: "AI Transformation, Engineered for Production",
      announcementLinkText: "Learn More →",
      announcementLinkHref: "/services/forward-deployed-ai-engineering",
      headline: "Build AI Capabilities That Create Measurable Business Value",
      subtitle: "AlphaesAI helps organizations move from AI pilots to production systems — combining AI engineering, cloud infrastructure, and automation into technology that actually runs your business.",
      primaryCtaText: "Start building for free",
      primaryCtaHref: "/contact",
      secondaryCtaText: "Explore Services & Products",
      secondaryCtaHref: "/services",
    },
    showcase3d: {
      badgeText: "",
      title: "AI-Native Autonomous Infrastructure",
      subtitle: "Intelligent agents, high-throughput model pipelines, and self-healing cloud workloads operating in real time.",
      cardHeadline: "Experience Autonomous Intelligence",
      cardDescription: "Interact with our live 3D agent model. AlphaesAI deploys production-grade autonomous agent workflows, fine-tuned models, and zero-downtime cloud infrastructure tailored for enterprise scale.",
      cardBtn1Text: "Forward Deployed AI (FDE)",
      cardBtn1Href: "/services/forward-deployed-ai-engineering",
      cardBtn2Text: "Talk to an Engineer",
      cardBtn2Href: "/contact",
      chestBrandText: "ALPHAESAI",
    },
    metrics: [
      {
        id: "m-1",
        value: "4.5x faster",
        description: "Faster model execution & API response times by deploying AI agents close to data pipelines.",
      },
      {
        id: "m-2",
        value: "310B+",
        description: "Daily operational telemetry signals & security guardrail evaluations performed.",
      },
    ],
    architecture: {
      badgeText: "Global Architecture",
      title: "Built for Scale and Speed",
      cards: [
        {
          id: "c-1",
          title: "Run everywhere",
          desc: "Security, connectivity, and code run in 335+ cities around the world, within 50ms of 95% of the world's population.",
        },
        {
          id: "c-2",
          title: "Run anywhere",
          desc: "Our network is close to your users, applications, and sites. It optimizes all your traffic from source to destination for low latency.",
        },
        {
          id: "c-3",
          title: "Run at massive scale",
          desc: "No more capacity planning. Ever.",
        },
      ],
    },
    testimonial: {
      heading: "AlphaesAI powers 45% of the Fortune 500",
      subhead: "Trusted by the teams you trust.",
      quote: "“For Shopify, the real challenge is not about how many different pieces of complex technology we can use but the opposite. AlphaesAI helps us find a simple way to achieve something very complex that we can scale and maintain.”",
      authorName: "Duncan Davidson",
      authorTitle: "VP of Developer Productivity, Shopify",
      authorAvatar: "https://lh3.googleusercontent.com/aida/AEtjO1UkYof6Ot5QA8VLP79HJ5QzG3-VO18HIt5NzJujBk29W7z66X9dckZ5AWU3P6H9WSzWj94BdTWTryCJ1fTWGFmANT_jqbWLU9qANkn2_83_M8_M27MhVEArlUVibxvTo4s6lQzU5QcBQJt1kEKmodvWghBSjZvTu2RFoh4x3a_xsKe0Y1PDHKtjPt-9hLllxvNRvcZQ36AJQ_gPssErlNzQo3ZNQ7_XZbRNCTuLbLMWJHYC1MhhYVuiqSo",
      footerCaption: "And thousands more across global enterprise SaaS...",
    },
    ctaBanner: {
      title: "Build without boundaries",
      description: "Join thousands of developers who've eliminated infrastructure complexity and deployed globally with AlphaesAI. Start building for free — no credit card required.",
      primaryCtaText: "Start building for free",
      primaryCtaHref: "/contact",
      secondaryCtaText: "View docs",
      secondaryCtaHref: "/services",
    },
  },
  pages: {
    services: {
      badge: "Enterprise Capabilities",
      title: "Cloud Migration, Cyber Security, Databricks & Snowflake Optimization",
      subtitle: "Architecting, optimizing, and securing enterprise data platforms at global scale with zero compromise on speed.",
      cards: [
        {
          id: "s-1",
          badge: "FDE Model",
          title: "Forward-Deployed AI Engineering",
          desc: "Senior AI & ML engineers embedded directly inside your team to deploy production RAG, autonomous agents, and custom LLMs.",
          href: "/services/forward-deployed-ai-engineering",
        },
        {
          id: "s-2",
          badge: "Security & Cloud",
          title: "Cloud Migration & Cyber Security",
          desc: "Zero-trust cloud transitions, Databricks lakehouse security hardening, and automated compliance scanning.",
          href: "/services/cloud-migration-cyber-security-databricks-snowflake",
        },
        {
          id: "s-3",
          badge: "Data Quality",
          title: "Data Annotation & RLHF",
          desc: "Domain-expert data curation, fine-tuning datasets, RLHF alignment, and human-in-the-loop validation.",
          href: "/services/data-annotation-and-rlhf",
        },
        {
          id: "s-4",
          badge: "Performance",
          title: "Database & Cloud Optimization",
          desc: "Cutting Snowflake & Databricks query costs by up to 60% while accelerating pipeline latency by 5x.",
          href: "/services/database-performance-and-cloud-optimization",
        },
      ],
      fdeTitle: "Forward-Deployed Engineering (FDE) Embedded Teams",
      fdeSubtitle: "We build alongside your engineers to ship production AI in weeks, not years.",
      fdeDescription: "Our senior AI engineers operate within your codebase, infrastructure, and security boundary to deliver fully custom AI agents, automated pipelines, and cloud optimizations.",
      fdeCtaText: "Request FDE Deployment",
      fdeCtaHref: "/contact",
    },
    drgodly: {
      heroBadge: "AI Healthcare Intelligence",
      title: "Dr. Godly AI — Clinical Decision Support & Patient Care Intelligence",
      subtitle: "Empowering clinicians, hospital networks, and research labs with real-time, HIPAA-compliant diagnostic assistance.",
      description: "Dr. Godly AI processes patient records, multi-modal imaging, and medical research in milliseconds to deliver actionable clinical insights directly into EHR workflows.",
      primaryCtaText: "Explore Dr. Godly Medical AI",
      primaryCtaHref: "/contact",
      featuresHeading: "Next-Generation Medical AI Features",
      features: [
        { id: "dr-1", title: "EHR Deep Integration", desc: "Native integration with Epic, Cerner, and FHIR standards for zero-friction clinician workflows." },
        { id: "dr-2", title: "Multi-modal Diagnostics", desc: "Automated analysis of radiology images, lab results, and patient history notes." },
        { id: "dr-3", title: "HIPAA & SOC-2 Type II Certified", desc: "End-to-end encrypted medical data pipelines meeting the highest global health compliance standards." },
      ],
      metrics: [
        { id: "drm-1", value: "99.4%", description: "Diagnostic accuracy rate verified across peer-reviewed clinical trials." },
        { id: "drm-2", value: "3.2 Hours", description: "Average clinician paperwork time saved per daily hospital shift." },
      ],
    },
    oneaiAssist: {
      heroBadge: "Autonomous Copilot Platform",
      title: "OneAI Assist — Intelligent Enterprise Automation Copilot",
      subtitle: "Transform internal documentation, workflows, and complex databases into conversational natural-language actions.",
      description: "OneAI Assist bridges your fragmented enterprise knowledge base with agentic task execution, answering questions and performing complex operational actions securely.",
      primaryCtaText: "Deploy OneAI Copilot",
      primaryCtaHref: "/contact",
      featuresHeading: "Why Enterprises Choose OneAI Assist",
      features: [
        { id: "o-1", title: "Multi-Vector Knowledge Retrieval", desc: "Instant semantic search across Notion, Confluence, GitHub, Jira, and Slack with sub-50ms latency." },
        { id: "o-2", title: "Autonomous Task Execution", desc: "Triggers workflows in Jira, Salesforce, and Databricks directly from natural language prompts." },
        { id: "o-3", title: "Enterprise Access Controls", desc: "Strict role-based access control (RBAC) preventing unauthorized data leakage across departments." },
      ],
    },
    about: {
      heroBadge: "Our Mission & Team",
      title: "Building the Operating System for Industrial-Scale AI",
      subtitle: "We empower engineers and enterprises to build, secure, and scale autonomous AI without infrastructure overhead.",
      missionTitle: "Our Mission",
      missionDesc: "To make autonomous AI agents, multi-cloud computing, and enterprise intelligence simple, lightning-fast, and universally accessible.",
      visionTitle: "Our Vision",
      visionDesc: "A world where every company can deploy production AI models and self-healing cloud workloads with absolute security and zero downtime.",
      stats: [
        { id: "ab-1", value: "335+", description: "Global edge points of presence across 100+ countries." },
        { id: "ab-2", value: "99.999%", description: "Guaranteed SLA uptime for critical enterprise AI workloads." },
        { id: "ab-3", value: "500k+", description: "Active developer community using AlphaesAI tooling." },
      ],
      values: [
        { id: "val-1", title: "Obsessive Speed", desc: "We optimize for microsecond performance in every line of code we write." },
        { id: "val-2", title: "Uncompromising Security", desc: "Zero-trust architecture built-in by default to safeguard customer data." },
        { id: "val-3", title: "Forward Engineering", desc: "We deploy engineers directly to solve real problems alongside our clients." },
      ],
    },
    partners: {
      heroBadge: "Global Cloud Ecosystem",
      title: "AlphaesAI Partner Alliance Program",
      subtitle: "Collaborating with industry-leading cloud providers, chipmakers, and AI pioneers to accelerate innovation.",
      alliancesHeading: "Strategic Technology Partners",
      partners: [
        { id: "p-1", title: "Databricks Alliance Partner", desc: "Jointly optimizing Lakehouse architectures, Delta Lake performance, and AI model serving." },
        { id: "p-2", title: "Snowflake Technology Partner", desc: "Delivering automated cost optimization and native Snowpark AI acceleration." },
        { id: "p-3", title: "AWS Advanced Tier", desc: "Deploying high-throughput AI infrastructure on AWS Graviton and Inferentia silicon." },
        { id: "p-4", title: "Google Cloud Platform Partner", desc: "Accelerating Vertex AI workflows and BigQuery enterprise data pipelines." },
      ],
      ctaTitle: "Become an AlphaesAI Partner",
      ctaDesc: "Join our global ecosystem to co-sell, build integrated AI solutions, and expand your market reach.",
      ctaBtnText: "Apply for Partner Program",
      ctaBtnHref: "/contact",
    },
    contact: {
      title: "Contact Our Engineering & Architecture Team",
      subtitle: "Have a technical inquiry, custom deployment request, or partnership proposal? We'd love to talk.",
      email: "contact@alphaesai.com",
      phone: "+1 (800) 555-ALPHAES",
      address: "AlphaesAI Tower, 500 AI Innovation Way, San Francisco, CA 94105",
      formTitle: "Schedule a 1-on-1 Engineering Briefing",
      faqsHeading: "Frequently Asked Questions",
      faqs: [
        {
          id: "faq-1",
          question: "How quickly can the Forward-Deployed AI (FDE) team integrate?",
          answer: "Our engineers can be embedded into your codebase and cloud environment within 48 to 72 hours of initial briefing.",
        },
        {
          id: "faq-2",
          question: "Is AlphaesAI compliant with HIPAA, SOC-2, and GDPR?",
          answer: "Yes, AlphaesAI holds SOC-2 Type II certification, is fully HIPAA compliant for health workloads, and enforces strict GDPR data privacy controls.",
        },
        {
          id: "faq-3",
          question: "Can AlphaesAI optimize our existing Databricks & Snowflake pipelines?",
          answer: "Absolutely. Our optimization engine typically reduces cloud data platform compute spend by 30% to 60% within the first 30 days.",
        },
      ],
    },
  },
};

const STORAGE_KEY = "alphaesai_cms_data_v5";

export function sanitizeCMSData(raw: unknown): FullCMSData {
  if (!raw || typeof raw !== "object") return DEFAULT_CMS_DATA;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parsed = raw as any;
  try {
    const rawCols = Array.isArray(parsed.footer?.columns)
      ? parsed.footer.columns
      : DEFAULT_CMS_DATA.footer.columns;

    const filteredCols = rawCols.filter(
      (col: { id?: string; title?: string }) =>
        col?.id !== "col-legal" && col?.title?.toLowerCase() !== "legal"
    );

    const defaultContactCol = DEFAULT_CMS_DATA.footer.columns.find(
      (c) => c.id === "col-contact"
    )!;

    const sanitizedCols = filteredCols.map((col: { id?: string; title?: string }) => {
      if (col?.id === "col-contact" || col?.title?.toLowerCase().includes("contact")) {
        return defaultContactCol;
      }
      return col;
    });

    const hasContact = sanitizedCols.some(
      (col: { id?: string; title?: string }) => col?.id === "col-contact" || col?.title?.toLowerCase().includes("contact")
    );
    if (!hasContact) {
      sanitizedCols.push(defaultContactCol);
    }

    return {
      header: { ...DEFAULT_CMS_DATA.header, ...(parsed.header || {}) },
      footer: {
        ...DEFAULT_CMS_DATA.footer,
        ...(parsed.footer || {}),
        columns: sanitizedCols.length > 0 ? sanitizedCols : DEFAULT_CMS_DATA.footer.columns,
      },
      homepage: {
        ...DEFAULT_CMS_DATA.homepage,
        ...(parsed.homepage || {}),
        hero: { ...DEFAULT_CMS_DATA.homepage.hero, ...(parsed.homepage?.hero || {}) },
        showcase3d: { ...DEFAULT_CMS_DATA.homepage.showcase3d, ...(parsed.homepage?.showcase3d || {}) },
        metrics: Array.isArray(parsed.homepage?.metrics)
          ? parsed.homepage.metrics
          : DEFAULT_CMS_DATA.homepage.metrics,
        architecture: {
          ...DEFAULT_CMS_DATA.homepage.architecture,
          ...(parsed.homepage?.architecture || {}),
          cards: Array.isArray(parsed.homepage?.architecture?.cards)
            ? parsed.homepage.architecture.cards
            : DEFAULT_CMS_DATA.homepage.architecture.cards,
        },
        testimonial: { ...DEFAULT_CMS_DATA.homepage.testimonial, ...(parsed.homepage?.testimonial || {}) },
        ctaBanner: { ...DEFAULT_CMS_DATA.homepage.ctaBanner, ...(parsed.homepage?.ctaBanner || {}) },
      },
      pages: {
        services: {
          ...DEFAULT_CMS_DATA.pages.services,
          ...(parsed.pages?.services || {}),
          cards: Array.isArray(parsed.pages?.services?.cards)
            ? parsed.pages.services.cards
            : DEFAULT_CMS_DATA.pages.services.cards,
        },
        drgodly: {
          ...DEFAULT_CMS_DATA.pages.drgodly,
          ...(parsed.pages?.drgodly || {}),
          features: Array.isArray(parsed.pages?.drgodly?.features)
            ? parsed.pages.drgodly.features
            : DEFAULT_CMS_DATA.pages.drgodly.features,
          metrics: Array.isArray(parsed.pages?.drgodly?.metrics)
            ? parsed.pages.drgodly.metrics
            : DEFAULT_CMS_DATA.pages.drgodly.metrics,
        },
        oneaiAssist: {
          ...DEFAULT_CMS_DATA.pages.oneaiAssist,
          ...(parsed.pages?.oneaiAssist || {}),
          features: Array.isArray(parsed.pages?.oneaiAssist?.features)
            ? parsed.pages.oneaiAssist.features
            : DEFAULT_CMS_DATA.pages.oneaiAssist.features,
        },
        about: {
          ...DEFAULT_CMS_DATA.pages.about,
          ...(parsed.pages?.about || {}),
          stats: Array.isArray(parsed.pages?.about?.stats)
            ? parsed.pages.about.stats
            : DEFAULT_CMS_DATA.pages.about.stats,
          values: Array.isArray(parsed.pages?.about?.values)
            ? parsed.pages.about.values
            : DEFAULT_CMS_DATA.pages.about.values,
        },
        partners: {
          ...DEFAULT_CMS_DATA.pages.partners,
          ...(parsed.pages?.partners || {}),
          partners: Array.isArray(parsed.pages?.partners?.partners)
            ? parsed.pages.partners.partners
            : DEFAULT_CMS_DATA.pages.partners.partners,
        },
        contact: {
          ...DEFAULT_CMS_DATA.pages.contact,
          ...(parsed.pages?.contact || {}),
          faqs: Array.isArray(parsed.pages?.contact?.faqs)
            ? parsed.pages.contact.faqs
            : DEFAULT_CMS_DATA.pages.contact.faqs,
        },
      },
    };
  } catch (err) {
    console.error("Failed to sanitize CMS data:", err);
    return DEFAULT_CMS_DATA;
  }
}

export function loadCMSData(): FullCMSData {
  if (typeof window === "undefined") return DEFAULT_CMS_DATA;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return sanitizeCMSData(parsed);
    }
  } catch (err) {
    console.error("Failed to load CMS data from localStorage:", err);
  }
  return DEFAULT_CMS_DATA;
}

export function saveCMSData(data: FullCMSData): boolean {
  if (typeof window === "undefined") return false;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (err) {
    console.error("Failed to save CMS data to localStorage:", err);
    return false;
  }
}

export function resetCMSData(): FullCMSData {
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.error("Failed to reset CMS data:", err);
    }
  }
  return DEFAULT_CMS_DATA;
}
