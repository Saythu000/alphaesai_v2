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

// -----------------------------------------------------------------------------
// NEW EXPANDED COMPONENT INTERFACES
// -----------------------------------------------------------------------------

export interface MegamenuCategoryItem {
  id: string;
  name: string;
  desc: string;
  badge: string;
  href: string;
  iconName: string;
}

export interface MegamenuCategory {
  id: string;
  title: string;
  items: MegamenuCategoryItem[];
  featuredTitle: string;
  featuredDesc: string;
  featuredHref: string;
  featuredBadge: string;
}

export interface MegamenuDropdownItem {
  id: string;
  title: string;
  desc: string;
  href: string;
  badge?: string;
}

export interface HeaderMegamenuCMSData {
  servicesCategories: MegamenuCategory[];
  productsDropdown: MegamenuDropdownItem[];
  academyDropdown: MegamenuDropdownItem[];
}

export interface TechStackItem {
  id: string;
  name: string;
  category: string;
  iconName: string;
}

export interface ComplianceShieldItem {
  id: string;
  title: string;
  badge: string;
  description: string;
}

export interface TechStackBarCMSData {
  badge: string;
  title: string;
  subtitle: string;
  techStack: TechStackItem[];
  complianceShields: ComplianceShieldItem[];
}

export interface ArchNodeMetric {
  label: string;
  value: string;
}

export interface ArchNodeCMS {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  iconName: string;
  stack: string[];
  metrics: ArchNodeMetric[];
  description: string;
  security: string;
}

export interface HubSpokeArchCMSData {
  badgeText: string;
  title: string;
  subtitle: string;
  nodes: ArchNodeCMS[];
}

export interface TestimonialItemCMS {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorAvatar: string;
  domain: string;
  roiChips: string[];
  videoThumbnail: string;
  videoTitle: string;
}

export interface EnhancedTestimonialCMSData {
  badgeText: string;
  title: string;
  subtitle: string;
  items: TestimonialItemCMS[];
}

export interface RoiMetricCMS {
  id: string;
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export interface FdeRadialNodeCMS {
  id: string;
  name: string;
  iconName: string;
  angle: number;
}

export interface FdeStepCMS {
  id: string;
  number: string;
  title: string;
  description: string;
  targetNodeIds: string[];
}

export interface FdeInteractiveHubCMSData {
  badgeText?: string;
  title?: string;
  nodes: FdeRadialNodeCMS[];
  steps: FdeStepCMS[];
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
  techStackBar: TechStackBarCMSData;
  hubSpokeArch: HubSpokeArchCMSData;
  enhancedTestimonials: EnhancedTestimonialCMSData;
  roiMetricsGrid: RoiMetricCMS[];
  fdeInteractiveHub: FdeInteractiveHubCMSData;
}

export interface HeaderCMSData {
  announcementBarText: string;
  announcementLinkText: string;
  announcementLinkHref: string;
  navLinks: FooterLink[];
  primaryCtaText: string;
  primaryCtaHref: string;
  megamenu: HeaderMegamenuCMSData;
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

export interface ServiceItemFeatureCMS {
  id?: string;
  title: string;
  desc: string;
  iconName?: string;
}

export interface ServicesCMSData {
  badge: string;
  title: string;
  subtitle: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  cards: ServiceCardCMS[];

  // FDE Section
  fdeTitle: string;
  fdeSubtitle: string;
  fdeDescription: string;
  fdeCtaText: string;
  fdeCtaHref: string;
  fdeFeatures?: ServiceItemFeatureCMS[];
  fdeProcessBadge?: string;
  fdeProcessTitle?: string;
  fdeGuaranteeBadge?: string;
  fdeGuaranteeTitle?: string;
  fdeGuaranteeSubtitle?: string;
  fdeGuaranteeCtaText?: string;
  fdeGuaranteeCtaHref?: string;

  // Database Optimization Section
  dbSubtitle?: string;
  dbTitle?: string;
  dbDescription?: string;
  dbStatBadge?: string;
  dbStatMetric1?: string;
  dbStatLabel1?: string;
  dbStatDesc1?: string;
  dbStatMetric2?: string;
  dbStatLabel2?: string;
  dbFeatures?: ServiceItemFeatureCMS[];

  // Cloud Security Section
  cloudSecuritySubtitle?: string;
  cloudSecurityTitle?: string;
  cloudSecurityDescription?: string;
  cloudSecurityCtaText?: string;
  cloudSecurityCtaHref?: string;
  cloudSecurityFeatures?: ServiceItemFeatureCMS[];

  // Data Annotation & RLHF Section
  rlhfSubtitle?: string;
  rlhfTitle?: string;
  rlhfDescription?: string;
  rlhfCtaText?: string;
  rlhfCtaHref?: string;
  rlhfFeatures?: ServiceItemFeatureCMS[];
}

export interface ServiceFrictionPointCMS {
  title: string;
  tag: string;
  desc: string;
  iconName: string;
}

export interface ServiceCapabilityCMS {
  id: string;
  badge: string;
  title: string;
  desc: string;
  highlights: string[];
  iconName: string;
}

export interface ServiceEngagementTierCMS {
  title: string;
  subtitle: string;
  desc: string;
  cta: string;
  href: string;
  featured: boolean;
  deliverables: string[];
}

export interface ServiceSubpageDetailCMS {
  heroBadge: string;
  title: string;
  subtitle: string;
  description: string;
  capabilitiesBadges: string[];
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  frictionPoints: ServiceFrictionPointCMS[];
  capabilities: ServiceCapabilityCMS[];
  aiDifferencePoints: { title: string; desc: string; iconName: string }[];
  engagementTiers: ServiceEngagementTierCMS[];
  faqs: { q: string; a: string }[];
}

export interface ServiceSubpagesCMSData {
  cloudMigration: ServiceSubpageDetailCMS;
  fde: ServiceSubpageDetailCMS;
  dataAnnotation: ServiceSubpageDetailCMS;
  databaseTuning: ServiceSubpageDetailCMS;
}

export interface AcademyModuleCMS {
  step: string;
  title: string;
  desc: string;
  skills: string[];
}

export interface AcademyTrackDetailCMS {
  heroBadge: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  highlights: { title: string; desc: string; iconName: string }[];
  modules: AcademyModuleCMS[];
  ctaTitle: string;
  ctaDesc: string;
  ctaBtnText: string;
  ctaBtnHref: string;
}

export interface AcademySubpagesCMSData {
  agenticAi: AcademyTrackDetailCMS;
  databricks: AcademyTrackDetailCMS;
  fullstackAi: AcademyTrackDetailCMS;
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

export interface JobPostingCMS {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  techStack: string[];
  featured?: boolean;
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

export interface CareersCMSData {
  heroBadge: string;
  title: string;
  subtitle: string;
  jobs: JobPostingCMS[];
}

// -----------------------------------------------------------------------------
// BLOG CMS INTERFACES
// -----------------------------------------------------------------------------
export interface BlogPostSectionCMS {
  heading: string;
  body: string;
  codeSnippet?: string;
}

export interface BlogPostCMSData {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  snippet: string;
  featured?: boolean;
  content: {
    introduction: string;
    keyTakeaways: string[];
    sections: BlogPostSectionCMS[];
    conclusion: string;
  };
}

export interface BlogCMSData {
  heroBadge: string;
  title: string;
  subtitle: string;
  categories: string[];
  articles: BlogPostCMSData[];
}

export interface PagesCMSData {
  services: ServicesCMSData;
  drgodly: DrGodlyCMSData;
  oneaiAssist: OneAIAssistCMSData;
  about: AboutCMSData;
  partners: PartnersCMSData;
  contact: ContactCMSData;
  careers: CareersCMSData;
  serviceSubpages: ServiceSubpagesCMSData;
  academySubpages: AcademySubpagesCMSData;
}

export interface CustomCMSPage {
  id: string;
  slug: string;
  title: string;
  category: string; // e.g. "top-level" | "cat-ai" | "cat-data" | "cat-solutions" | "products" | "academy"
  badge?: string;
  hero: {
    badge?: string;
    title: string;
    subtitle: string;
    description: string;
    ctaText?: string;
    ctaHref?: string;
  };
  contentBlocks: Array<{
    id: string;
    title: string;
    description: string;
    iconName?: string;
  }>;
  seo?: {
    title: string;
    description: string;
  };
}

export interface FullCMSData {
  header: HeaderCMSData;
  footer: FooterCMSData;
  homepage: HomepageCMSData;
  pages: PagesCMSData;
  blog: BlogCMSData;
  customPages?: CustomCMSPage[];
}

// -----------------------------------------------------------------------------
// DEFAULT CMS DATA SEED
// -----------------------------------------------------------------------------
export const DEFAULT_CMS_DATA: FullCMSData = {
  header: {
    announcementBarText: "🚀 Introducing AlphaesAI Core v2.0: Deploy Senior AI Engineers directly into your enterprise cloud & codebase.",
    announcementLinkText: "Learn about FDE Model",
    announcementLinkHref: "/services/forward-deployed-ai-engineering",
    navLinks: [
      { id: "nav-1", label: "Services", href: "/services" },
      { id: "nav-2", label: "OneAI Assist", href: "/oneai-assist" },
      { id: "nav-3", label: "Dr. Godly Health", href: "/drgodly" },
      { id: "nav-4", label: "Partners", href: "/partners" },
      { id: "nav-5", label: "About", href: "/about" },
      { id: "nav-6", label: "Blog", href: "/blog" },
      { id: "nav-7", label: "Contact", href: "/contact" },
    ],
    primaryCtaText: "Contact Us",
    primaryCtaHref: "/contact",
    megamenu: {
      servicesCategories: [
        {
          id: "cat-ai",
          title: "AI & Engineering",
          items: [
            {
              id: "item-fde",
              name: "Forward Deployed AI (FDE)",
              desc: "Embedded senior AI engineers to ship production code.",
              badge: "Popular",
              href: "/services/forward-deployed-ai-engineering",
              iconName: "Cpu",
            },
          ],
          featuredTitle: "Forward Deployed AI Model",
          featuredDesc: "Our senior AI engineers operate within your codebase and cloud boundary to deliver custom models.",
          featuredHref: "/services/forward-deployed-ai-engineering",
          featuredBadge: "FDE Execution",
        },
        {
          id: "cat-data",
          title: "Data & Cloud Optimization",
          items: [
            {
              id: "item-dbx",
              name: "Databricks Lakehouse Mastery",
              desc: "Delta Lake tuning, Liquid Clustering, and DBU cost cuts.",
              badge: "FinOps",
              href: "/services/database-performance-and-cloud-optimization",
              iconName: "Database",
            },
            {
              id: "item-sf",
              name: "Snowflake Warehouse Tuning",
              desc: "Query optimization, auto-scaling, and Snowpark AI pipelines.",
              badge: "5x Speed",
              href: "/services/database-performance-and-cloud-optimization",
              iconName: "Zap",
            },
            {
              id: "item-cloud",
              name: "Cloud Architecture & Migration",
              desc: "Multi-cloud IaC across AWS, Azure, GCP, and OCI.",
              badge: "Zero-Lockin",
              href: "/services/cloud-migration-cyber-security-databricks-snowflake",
              iconName: "Cloud",
            },
          ],
          featuredTitle: "Database & Cloud Tuning",
          featuredDesc: "Cut Snowflake & Databricks compute spend by up to 60% with zero downtime.",
          featuredHref: "/services/database-performance-and-cloud-optimization",
          featuredBadge: "60% Cost Cut",
        },
        {
          id: "cat-rlhf",
          title: "Data Annotation & RLHF",
          items: [
            {
              id: "item-rlhf-align",
              name: "RLHF & Data Curation",
              desc: "Domain-expert fine-tuning datasets and preference ranking.",
              badge: "High Precision",
              href: "/services/data-annotation-and-rlhf",
              iconName: "CheckCircle2",
            },
            {
              id: "item-cv",
              name: "Computer Vision & Multimodal",
              desc: "Bounding box, segmentation, and video telemetry labeling.",
              badge: "Multi-Modal",
              href: "/services/data-annotation-and-rlhf",
              iconName: "Sparkles",
            },
            {
              id: "item-label",
              name: "Enterprise Data Labeling",
              desc: "Human-in-the-loop validation for medical, legal, and financial AI.",
              badge: "HIPAA Ready",
              href: "/services/data-annotation-and-rlhf",
              iconName: "ShieldCheck",
            },
          ],
          featuredTitle: "Data Curation & Alignment",
          featuredDesc: "High-precision datasets curated by domain experts for enterprise model accuracy.",
          featuredHref: "/services/data-annotation-and-rlhf",
          featuredBadge: "Domain Experts",
        },
        {
          id: "cat-sec",
          title: "Cloud & Cybersecurity",
          items: [
            {
              id: "item-sec-zt",
              name: "Zero-Trust AI Security",
              desc: "Policy-as-code, prompt injection guardrails, and IAM scoping.",
              badge: "SOC-2 Ready",
              href: "/services/cloud-migration-cyber-security-databricks-snowflake",
              iconName: "ShieldCheck",
            },
            {
              id: "item-devsecops",
              name: "DevSecOps & Policy-as-Code",
              desc: "Automated OPA, Gatekeeper, and secrets scanning pipelines.",
              badge: "Automated",
              href: "/services/cloud-migration-cyber-security-databricks-snowflake",
              iconName: "Lock",
            },
            {
              id: "item-k8s",
              name: "Production Kubernetes",
              desc: "EKS, AKS, GKE clusters with GPU scheduling and RBAC isolation.",
              badge: "Kubernetes",
              href: "/services/cloud-migration-cyber-security-databricks-snowflake",
              iconName: "Server",
            },
          ],
          featuredTitle: "Zero-Trust Cloud Defense",
          featuredDesc: "Protect your AI data pipelines with policy-as-code and automated compliance guardrails.",
          featuredHref: "/services/cloud-migration-cyber-security-databricks-snowflake",
          featuredBadge: "Cyber Security",
        },
      ],
      productsDropdown: [
        {
          id: "prod-oneai",
          title: "OneAI Assist — Enterprise Agent Platform",
          desc: "Multi-vector knowledge retrieval, autonomous workflow execution, and enterprise RBAC.",
          href: "/oneai-assist",
          badge: "SaaS Platform",
        },
        {
          id: "prod-drgodly",
          title: "DrGodly — AI Telemedicine Suite",
          desc: "HIPAA-compliant clinical decision support, EHR integration, and multi-modal diagnostics.",
          href: "/drgodly",
          badge: "Healthcare AI",
        },
      ],
      academyDropdown: [
        {
          id: "acad-agentic",
          title: "Agentic AI Architecture",
          desc: "Master tool-calling swarms, Antigravity SDK, and sub-100ms agent execution.",
          href: "/academy/agentic-ai",
          badge: "Deep Tech",
        },
        {
          id: "acad-fullstack",
          title: "Fullstack Developer with AI",
          desc: "Build Next.js 15 streaming copilots, vector DB search, and server-sent events.",
          href: "/academy/fullstack-developer-with-ai",
          badge: "Hands-on",
        },
        {
          id: "acad-databricks",
          title: "Databricks Lakehouse Mastery",
          desc: "Liquid Clustering, PySpark shuffle elimination, and FinOps DBU optimization.",
          href: "/academy/databricks",
          badge: "FinOps & Data",
        },
      ],
    },
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
      primaryCtaText: "Contact Us",
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
      description: "Join enterprise engineering teams who have eliminated infrastructure complexity and deployed production AI with AlphaesAI.",
      primaryCtaText: "Contact Us",
      primaryCtaHref: "/contact",
      secondaryCtaText: "View docs",
      secondaryCtaHref: "/services",
    },
    techStackBar: {
      badge: "Enterprise Stack & Security Standards",
      title: "Data Analytics & Enterprise AI Infrastructure Stack",
      subtitle: "Built directly on industry-standard Data Warehouses, Distributed Analytics Engines, and SOTA AI Frameworks.",
      techStack: [
        { id: "ts-1", name: "Databricks", category: "Lakehouse & Compute", iconName: "Database" },
        { id: "ts-2", name: "Snowflake", category: "Data Warehouse", iconName: "Zap" },
        { id: "ts-3", name: "Apache Spark", category: "Distributed Processing", iconName: "Cpu" },
        { id: "ts-4", name: "Google BigQuery", category: "Cloud Analytics", iconName: "Globe" },
        { id: "ts-5", name: "PyTorch", category: "Deep Learning", iconName: "Layers" },
        { id: "ts-6", name: "Hugging Face", category: "Model Zoo & Hub", iconName: "Sparkles" },
        { id: "ts-7", name: "OpenAI API", category: "Foundation Models", iconName: "Bot" },
        { id: "ts-8", name: "LangChain", category: "Agent Framework", iconName: "Workflow" },
        { id: "ts-9", name: "Pinecone", category: "Vector Database", iconName: "Server" },
        { id: "ts-10", name: "dbt Cloud", category: "Data Transformation", iconName: "Terminal" },
        { id: "ts-11", name: "Neon DB", category: "Serverless Postgres", iconName: "Database" },
        { id: "ts-12", name: "Antigravity SDK", category: "Agentic Loop SDK", iconName: "ShieldCheck" },
      ],
      complianceShields: [
        { id: "cs-1", title: "SOC-2 Type II", badge: "SOC-2 Certified", description: "Audited security, availability, and confidential data processing controls." },
        { id: "cs-2", title: "HIPAA Ready", badge: "HIPAA Compliant", description: "BAA execution, encrypted medical data pipelines & PHI sanitization." },
        { id: "cs-3", title: "ISO 27001", badge: "ISO Certified", description: "Global information security management system & risk governance." },
        { id: "cs-4", title: "GDPR Privacy", badge: "EU Privacy Shield", description: "Strict data sovereignty, right-to-forget & zero data retention guarantees." },
      ],
    },
    hubSpokeArch: {
      badgeText: "System Architecture",
      title: "Interactive Enterprise AI & Data Analytics Pipeline",
      subtitle: "Click any architectural node to inspect live data throughput, security guardrails, and supported tech stacks.",
      nodes: [
        {
          id: "ingestion",
          title: "Data Ingestion & Analytics",
          subtitle: "Batch & Real-time Streaming",
          badge: "STAGE 01",
          iconName: "Database",
          stack: ["Apache Spark", "Databricks Delta", "Snowflake", "dbt", "Kafka"],
          metrics: [
            { label: "Throughput", value: "2.4 GB/sec" },
            { label: "Pipeline Latency", value: "< 45ms" },
          ],
          description: "Massive scale ingestion from transactional DBs, IoT logs, and warehouse streams into Delta Lakehouses with zero data loss.",
          security: "End-to-End TLS 1.3 Encryption • Automated Schema Drift Validation",
        },
        {
          id: "finetuning",
          title: "AI Model Fine-Tuning & GPU",
          subtitle: "Domain Adaptation & Quantization",
          badge: "STAGE 02",
          iconName: "Cpu",
          stack: ["PyTorch", "Hugging Face", "vLLM", "Ray Train", "NVIDIA H100"],
          metrics: [
            { label: "GPU Utilization", value: "94.2%" },
            { label: "Inference Speed", value: "140 tok/sec" },
          ],
          description: "Parameter-Efficient Fine-Tuning (LoRA/QLoRA) of open-weights LLMs tailored for high-accuracy enterprise domain tasks.",
          security: "Isolated GPU Enclaves • Encrypted Model Checkpoints in Cloud Buckets",
        },
        {
          id: "rlhf",
          title: "RLHF & Data Curation",
          subtitle: "Human Alignment & Preference Scoring",
          badge: "STAGE 03",
          iconName: "CheckCircle2",
          stack: ["DPO/PPO", "Argilla", "Custom Annotation Hub", "CleanLab"],
          metrics: [
            { label: "Alignment Score", value: "99.1%" },
            { label: "Hallucination Rate", value: "< 0.05%" },
          ],
          description: "Domain-expert reinforcement learning and preference scoring to eliminate hallucinations and enforce safety guidelines.",
          security: "Human-in-the-Loop Approval • PII Anonymization Filters",
        },
        {
          id: "vector",
          title: "Vector Search & Knowledge DB",
          subtitle: "Hybrid Dense/Sparse Retrieval",
          badge: "STAGE 04",
          iconName: "Layers",
          stack: ["Pinecone", "Qdrant", "pgvector", "Databricks Vector Search"],
          metrics: [
            { label: "Recall Rate", value: "98.7%" },
            { label: "Query Latency", value: "12ms" },
          ],
          description: "Sub-15ms semantic retrieval across tens of millions of enterprise documents using hybrid vector search and neural reranking.",
          security: "Tenant Document Isolation • Row-Level Access Control (RLS)",
        },
        {
          id: "gateway",
          title: "Secure API & Analytics Gateway",
          subtitle: "Zero-Trust Agent Runtime",
          badge: "STAGE 05",
          iconName: "ShieldCheck",
          stack: ["Antigravity SDK", "FastAPI", "Kong Gateway", "Open Policy Agent"],
          metrics: [
            { label: "Uptime SLA", value: "99.999%" },
            { label: "Security Interceptions", value: "100%" },
          ],
          description: "Rate-limited, zero-trust API gateway enforcing prompt injection defense, RBAC tool allowlisting, and audit logging.",
          security: "LlamaGuard Input/Output Scanners • OAuth2 / SAML SSO Binding",
        },
      ],
    },
    enhancedTestimonials: {
      badgeText: "Client Success & Proven ROI",
      title: "Trusted by Engineering & Data Leaders",
      subtitle: "Real results delivered by our Forward-Deployed AI Engineers and cloud data optimization stack.",
      items: [
        {
          id: "fintech",
          quote: "AlphaesAI's Forward-Deployed Engineers transformed our Databricks analytics pipeline, cutting query latency by 72% and saving over $18,000 per month in GPU compute costs within 3 weeks.",
          authorName: "Sarah Jenkins",
          authorTitle: "VP of Enterprise Data Engineering, Flowstate Fintech",
          authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
          domain: "Fintech & Data Warehousing",
          roiChips: ["72% Latency Reduction", "$18.5k/mo Savings", "3-Week Rollout"],
          videoThumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80",
          videoTitle: "Case Study: Scaling High-Throughput Analytics at Flowstate",
        },
        {
          id: "healthcare",
          quote: "With DrGodly AI and AlphaesAI's HIPAA-ready data pipeline, our clinical research teams process complex patient records 5x faster while maintaining 100% data privacy compliance.",
          authorName: "Dr. Marcus Vance, Ph.D.",
          authorTitle: "Director of Clinical Informatics, BioGenesis Health",
          authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
          domain: "Healthcare & Life Sciences",
          roiChips: ["5x Faster Intake", "100% HIPAA BAA", "Zero Data Leakage"],
          videoThumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80",
          videoTitle: "Case Study: Secure Medical NLP at BioGenesis",
        },
        {
          id: "logistics",
          quote: "Deploying OneAI Assist automated 85% of our tier-1 support tickets instantly. Their custom fine-tuned model outperformed off-the-shelf APIs with 99.4% resolution accuracy.",
          authorName: "David Sterling",
          authorTitle: "Head of Operations & AI Systems, Global LogiTech",
          authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
          domain: "Global Supply Chain & SaaS",
          roiChips: ["85% Automated Tickets", "99.4% Accuracy", "< 500ms Response"],
          videoThumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80",
          videoTitle: "Case Study: Customer Automation at Global LogiTech",
        },
      ],
    },
    roiMetricsGrid: [
      {
        id: "roi-1",
        value: "85%+",
        label: "Cloud Compute & FinOps Savings",
        description: "Achieved via Databricks/Snowflake query tuning, GPU cluster auto-scaling, and dynamic model quantization.",
        iconName: "TrendingDown",
      },
      {
        id: "roi-2",
        value: "10x",
        label: "Faster Deployment Cycles",
        description: "Forward Deployed AI Engineers embed directly into your workflows to launch production pipelines in days.",
        iconName: "Zap",
      },
      {
        id: "roi-3",
        value: "99.99%",
        label: "Enterprise SLA Availability",
        description: "High-availability multi-cloud data architecture with zero single-point-of-failure guarantees.",
        iconName: "ShieldCheck",
      },
      {
        id: "roi-4",
        value: "70%",
        label: "Query Latency Reduction",
        description: "Optimized indexing, hybrid vector retrieval, and distributed Spark processing on massive datasets.",
        iconName: "Clock",
      },
    ],
    fdeInteractiveHub: {
      nodes: [
        { id: "ai-agents", name: "AI Agents", iconName: "Bot", angle: 0 },
        { id: "rag-systems", name: "RAG Systems", iconName: "Layers", angle: 45 },
        { id: "sec-gov", name: "Security & Governance", iconName: "ShieldCheck", angle: 90 },
        { id: "cloud-platform", name: "Cloud Platform", iconName: "Cloud", angle: 135 },
        { id: "platform-eng", name: "Platform Engineering", iconName: "Cpu", angle: 180 },
        { id: "integrations", name: "Enterprise Integrations", iconName: "Workflow", angle: 225 },
        { id: "automation", name: "Automation & Orchestration", iconName: "Zap", angle: 270 },
        { id: "data-eng", name: "Data Engineering", iconName: "Database", angle: 315 },
      ],
      steps: [
        { id: "step-1", number: "01", title: "DISCOVER", description: "Audit legacy architecture, security boundaries, and data bottlenecks.", targetNodeIds: ["data-eng", "sec-gov"] },
        { id: "step-2", number: "02", title: "DESIGN", description: "Architect multi-cloud topology, vector indexes, and agent state graphs.", targetNodeIds: ["rag-systems", "cloud-platform"] },
        { id: "step-3", number: "03", title: "BUILD", description: "Embed FDE engineers to write production code directly inside client repos.", targetNodeIds: ["ai-agents", "integrations"] },
        { id: "step-4", number: "04", title: "DEPLOY", description: "Launch zero-downtime blue/green pipelines with automated CI/CD guardrails.", targetNodeIds: ["automation", "platform-eng"] },
        { id: "step-5", number: "05", title: "OPTIMIZE", description: "Continuous FinOps cost rightsizing, SLO tracking, and model quantization.", targetNodeIds: ["cloud-platform", "data-eng"] },
      ],
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
      fdeTitle: "Forward-Deployed Engineering (FDE)",
      fdeSubtitle: "Core Delivery Model",
      fdeDescription: "We act as an extension of your engineering team. We architect scalable RAG systems, autonomous agents, and custom ML models that integrate into your operational stack—designed for production, not just experiments.",
      fdeCtaText: "Schedule an Executive Briefing",
      fdeCtaHref: "/contact",
      fdeFeatures: [
        {
          title: "Embedded Side-by-Side Team",
          desc: "Our senior engineers work directly inside your Slack, GitHub, AWS/GCP, and JIRA workflows as part of your team.",
          iconName: "Users",
        },
        {
          title: "Autonomous AI & RAG Systems",
          desc: "Architect and deploy scalable RAG pipelines, multi-agent workflows, and custom ML integrations into your operational stack.",
          iconName: "Terminal",
        },
        {
          title: "Production Accountability",
          desc: "We don't leave after writing slide decks. We take full responsibility for shipping working, tested production code.",
          iconName: "Zap",
        },
        {
          title: "Zero Vendor Lock-in",
          desc: "All infrastructure, code, and CI/CD pipelines belong entirely to your organization with full documentation transfer.",
          iconName: "Lock",
        },
      ],
      fdeProcessBadge: "Interactive Delivery Framework",
      fdeProcessTitle: "From Discovery to Continuous Optimization",
      fdeGuaranteeBadge: "ACCOUNTABILITY GUARANTEE",
      fdeGuaranteeTitle: "Engineers inside your codebase within 48 hours",
      fdeGuaranteeSubtitle: "No long procurement cycles. Immediate impact on active production sprints.",
      fdeGuaranteeCtaText: "Book FDE Scoping Call",
      fdeGuaranteeCtaHref: "/contact",

      // Database Optimization
      dbSubtitle: "Performance Tuning & FinOps",
      dbTitle: "Database & Cloud Optimization",
      dbDescription: "Your database is likely costing you more than it should. We identify bottlenecks, optimize query execution, and manage resource allocation to cut your infrastructure costs by 30-50% while improving latency.",
      dbStatBadge: "Immediate Cost Reduction",
      dbStatMetric1: "30–50%",
      dbStatLabel1: "Infrastructure Cost Cut",
      dbStatDesc1: "Average monthly spend reduction across PostgreSQL, Aurora, RDS, and Snowflake without degrading response times.",
      dbStatMetric2: "10x Throughput",
      dbStatLabel2: "P99 Query Latency & Scaling Improvement",
      dbFeatures: [
        {
          title: "Slow Query & Index Optimization",
          desc: "Deep analysis of query execution plans, missing indexes, and buffer pool contention across PostgreSQL, MySQL, SQL Server, Aurora, and Snowflake.",
        },
        {
          title: "FinOps Cost Rightsizing",
          desc: "Identify over-provisioned cloud database instances, read-replicas, and storage tiers to reduce monthly AWS/GCP database spend by 30–50%.",
        },
        {
          title: "Zero-Downtime Migration & Tuning",
          desc: "Execute index creation, table partitioning, and database migrations live in production without causing application downtime.",
        },
        {
          title: "Connection Pooling & Latency Reduction",
          desc: "Implement Redis caching layers, PgBouncer pooling, and query result caching to sustain 10x user throughput spikes with ultra-low latency.",
        },
      ],

      // Cloud Migration & Security
      cloudSecuritySubtitle: "Resilient Cloud & Security",
      cloudSecurityTitle: "Cloud Migration, Cyber Security, Databricks & Snowflake",
      cloudSecurityDescription: "We migrate workloads without the downtime. Using infrastructure-as-code, we build secure, reproducible environments across AWS, Azure, GCP, and OCI, with security-by-design at the core to protect your data assets.",
      cloudSecurityCtaText: "Dedicated Service Page",
      cloudSecurityCtaHref: "/services/cloud-migration-cyber-security-databricks-snowflake",
      cloudSecurityFeatures: [
        {
          title: "Zero-Downtime Cloud Migrations",
          desc: "Seamlessly move workloads across AWS, Azure, and GCP using blue-green deployments and automated failovers without impacting users.",
          iconName: "Cloud",
        },
        {
          title: "Infrastructure as Code (IaC)",
          desc: "Build reproducible, versioned infrastructure modules using Terraform, OpenTofu, and CloudFormation for predictable deployments.",
          iconName: "Terminal",
        },
        {
          title: "Hardened Security Environments",
          desc: "Implement zero-trust network segmentation, IAM least-privilege scoping, and continuous compliance scanning by design.",
          iconName: "ShieldCheck",
        },
        {
          title: "Data Asset Protection & Guardrails",
          desc: "Enforce encryption at rest and in transit, secrets management via HashiCorp Vault, and data loss prevention policies.",
          iconName: "Lock",
        },
      ],

      // Data Annotation & RLHF
      rlhfSubtitle: "High-Fidelity AI Training Data",
      rlhfTitle: "Data Annotation & RLHF",
      rlhfDescription: "High-quality models require high-quality data. We provide expert-level data annotation and RLHF services, ensuring your AI models receive the precision training necessary to perform reliably in real-world scenarios.",
      rlhfCtaText: "Dedicated Service Page",
      rlhfCtaHref: "/services/data-annotation-and-rlhf",
      rlhfFeatures: [
        {
          title: "High-Fidelity Data Labeling",
          desc: "Domain-expert annotated datasets tailored for complex NLP, computer vision, and multimodal model training requirements.",
          iconName: "FileCheck",
        },
        {
          title: "Reinforcement Learning (RLHF)",
          desc: "Iterative preference feedback loops and reward model design to align AI outputs with human intent and safety standards.",
          iconName: "Zap",
        },
        {
          title: "Precision Curated Evaluation",
          desc: "Rigorously audit training datasets to eliminate bias, hallucinations, and edge-case errors before model deployment.",
          iconName: "Check",
        },
        {
          title: "Custom Domain Fine-Tuning",
          desc: "Prepare domain-specific datasets (Legal, Healthcare, Finance) for targeted model fine-tuning with strict privacy controls.",
          iconName: "Users",
        },
      ],
    },
    serviceSubpages: {
      cloudMigration: {
        heroBadge: "CLOUD MIGRATION · CYBER SECURITY · DATABRICKS & SNOWFLAKE",
        title: "Cloud Infrastructure Built for the AI Era.",
        subtitle: "Scalable. Secure. Optimized.",
        description: "Traditional cloud infrastructure was never designed for the demands of modern AI. From volatile GPU requirements and complex data pipelines to the security implications of large-scale LLMs, the old playbooks no longer apply. AlphaesAI engineers high-performance cloud environments—across AWS, Azure, GCP, and OCI—that integrate security, cost-optimization, and data architecture from Day 1. We don’t just move workloads; we build foundations that make your AI systems viable, scalable, and secure.",
        capabilitiesBadges: ["AWS", "Azure", "GCP", "OCI", "Databricks", "Snowflake", "Production Kubernetes", "Policy-as-Code"],
        primaryCtaText: "Schedule an Executive Briefing",
        primaryCtaHref: "/contact",
        secondaryCtaText: "Explore Capabilities",
        secondaryCtaHref: "#capabilities",
        frictionPoints: [
          { title: "Escalating Cloud Spend", tag: "FINOPS FRICTION", desc: "GPU and compute costs spiraling without clear attribution to ROI, leading to runaway monthly cloud invoices.", iconName: "DollarSign" },
          { title: "Security Gaps", tag: "SECOPS RISKS", desc: "Traditional network perimeters fail to account for the specific data access, PII sanitization, and LLM security needs of AI.", iconName: "Lock" },
          { title: "Data Bottlenecks", tag: "PIPELINE STALLS", desc: "Disconnected data silos in Databricks or Snowflake that slow down model training, batch processing, and real-time inference.", iconName: "Database" },
          { title: "Operational Debt", tag: "DEVOPS BOTTLENECK", desc: "Manual, undocumented infrastructure that prevents your engineering team from shipping models and features to production.", iconName: "Server" },
        ],
        capabilities: [
          {
            id: "migration",
            badge: "Multi-Cloud Migration",
            title: "Cloud Architecture & Migration",
            desc: "We design, modernize, and migrate environments across AWS, Azure, GCP, and OCI. Our focus is zero-downtime, infrastructure-as-code (IaC) execution with Terraform and OpenTofu that eliminates vendor lock-in.",
            highlights: [
              "Zero-downtime blue/green workloads migration",
              "Infrastructure-as-Code (Terraform, OpenTofu, Pulumi)",
              "Multi-cloud architectures across AWS, Azure, GCP & OCI",
            ],
            iconName: "Cloud",
          },
          {
            id: "security",
            badge: "Cyber Security & Guardrails",
            title: "Secure Infrastructure (Cyber Security)",
            desc: "Security isn't an afterthought. We implement policy-as-code, identity and access management (IAM), and automated compliance guardrails that prevent non-compliant infrastructure before it deploys.",
            highlights: [
              "Automated policy-as-code (OPA & Gatekeeper)",
              "Zero-trust IAM least-privilege scoping & RBAC",
              "PII sanitization & AI agent execution boundaries",
            ],
            iconName: "ShieldCheck",
          },
          {
            id: "lakehouse",
            badge: "Data Lakehouse & Warehouse",
            title: "AI-Ready Data Foundations (Databricks & Snowflake)",
            desc: "We bridge the gap between your cloud and your data. From architecting high-performance Delta lakehouses in Databricks to optimizing Snowflake data warehousing, we ensure your data stack is clean, secure, and ready for model training.",
            highlights: [
              "Databricks Unity Catalog & Delta Lake orchestration",
              "Snowflake warehouse optimization & cost controls",
              "Feature store setup & real-time streaming ingestion",
            ],
            iconName: "Database",
          },
          {
            id: "k8s",
            badge: "Container & GPU Compute",
            title: "Production Kubernetes & GPU Orchestration",
            desc: "Enterprise-grade EKS, AKS, GKE, and self-managed clusters with GPU-aware scheduling, robust RBAC, and namespace isolation strategies designed specifically for high-throughput AI compute.",
            highlights: [
              "GPU-aware pod scheduling & node auto-scaling",
              "Hardened EKS, AKS, GKE & hybrid clusters",
              "Namespace isolation & workload cost attribution",
            ],
            iconName: "Cpu",
          },
          {
            id: "observability",
            badge: "Telemetry & SRE",
            title: "Observability & High Availability",
            desc: "Actionable telemetry, standardized structured logging, and strict Service Level Objectives (SLOs). We build resilient self-healing systems that tell you what’s wrong before your users notice.",
            highlights: [
              "Full-stack Datadog, Prometheus & Grafana telemetry",
              "Automated alerting & incident playbook generation",
              "Strict SLO/SLA monitoring for model inference APIs",
            ],
            iconName: "Activity",
          },
        ],
        aiDifferencePoints: [
          { title: "Cost-Aware Design", desc: "We bake cost attribution and GPU scheduling into your infrastructure architecture from Day 1—not as an unexpected line item on the invoice.", iconName: "DollarSign" },
          { title: "Unified Expertise", desc: "The same senior engineers who architect your cloud infrastructure also understand the data pipelines, vector DBs, and LLM models running on top of it.", iconName: "Layers" },
          { title: "No Vendor Lock-in", desc: "We build for multi-cloud flexibility, choosing the platform and tools that fit your specific performance and budget needs without proprietary hooks.", iconName: "Globe" },
        ],
        engagementTiers: [
          {
            title: "Cloud & Security Audit",
            subtitle: "DIAGNOSTIC & READINESS",
            desc: "A diagnostic deep-dive to identify vulnerabilities, cost inefficiencies, and performance bottlenecks in your current setup.",
            cta: "Get the Audit",
            href: "/contact?service=cloud-audit",
            featured: false,
            deliverables: [
              "Infrastructure & security architecture review",
              "FinOps cloud spend diagnostic",
              "AI data readiness assessment",
              "Prioritized remediation roadmap",
            ],
          },
          {
            title: "Infrastructure Modernization & Migration",
            subtitle: "FULL-STACK EXECUTION",
            desc: "Full-stack migration or refactoring projects designed to get your environments cloud-native, secure, and AI-ready.",
            cta: "Discuss Your Roadmap",
            href: "/contact?service=cloud-migration",
            featured: true,
            deliverables: [
              "Zero-downtime cloud & data migration",
              "IaC codebase buildout (Terraform/OpenTofu)",
              "Databricks & Snowflake lakehouse setup",
              "EKS/GKE production Kubernetes setup",
            ],
          },
          {
            title: "Continuous Optimization (FinOps & SecOps)",
            subtitle: "MANAGED GOVERNANCE",
            desc: "Ongoing oversight to keep your cloud spend, security posture, and data architecture performant as your AI usage grows.",
            cta: "Talk to an Expert",
            href: "/contact?service=continuous-optimization",
            featured: false,
            deliverables: [
              "Monthly FinOps cost rightsizing",
              "Continuous SecOps compliance scanning",
              "Databricks/Snowflake performance tuning",
              "Dedicated senior cloud engineer access",
            ],
          },
        ],
        faqs: [
          { q: "How do you handle Databricks/Snowflake integration?", a: "We don't just manage the data tools; we optimize the entire pipeline—from how data flows into your lakehouse to how your cloud infrastructure supports high-concurrency model inference and feature retrieval." },
          { q: "Do you focus on one cloud provider?", a: "We work seamlessly across AWS, Azure, GCP, and OCI. We advocate for the architecture that serves your business needs and workload requirements, not the platform that’s easiest to sell." },
          { q: "Is my infrastructure 'AI-ready'?", a: "If your infrastructure lacks GPU scheduling, granular cost-attribution, or secure integration with your data warehouses (Snowflake/Databricks), it is likely creating friction. We can perform a rapid audit of your setup and tell you exactly where the gaps are." },
          { q: "How long does a typical cloud migration or refactoring take?", a: "Diagnostic audits take 1–2 weeks. Full modernization or zero-downtime migration projects typically range from 4 to 12 weeks depending on workload complexity, with zero interruption to your live production users." },
        ],
      },
      fde: {
        heroBadge: "FORWARD-DEPLOYED AI ENGINEERING (FDE)",
        title: "Senior AI Engineers Embedded Directly Into Your Team.",
        subtitle: "Zero Handoff Friction. Production Velocity.",
        description: "Traditional tech consultancies leave behind slides and static reports. AlphaesAI deploys Forward-Deployed AI Engineers directly into your codebase, Git repositories, and cloud accounts. We work alongside your internal engineers to build production RAG systems, tool-calling agent swarms, and high-throughput model endpoints in weeks.",
        capabilitiesBadges: ["Embedded Engineers", "Antigravity SDK", "Agentic Swarms", "Zero Handoff", "Sub-100ms Latency"],
        primaryCtaText: "Request FDE Deployment",
        primaryCtaHref: "/contact",
        secondaryCtaText: "View FDE Process",
        secondaryCtaHref: "#process",
        frictionPoints: [
          { title: "Consulting Handoff Friction", tag: "DELIVERY GAP", desc: "External advice that never gets translated into actual shipping production code.", iconName: "AlertTriangle" },
          { title: "Runaway AI Pilots", tag: "PILOT PURGATORY", desc: "Prototypes that work in Jupyter notebooks but stall when scaled to real enterprise concurrency.", iconName: "Cpu" },
        ],
        capabilities: [
          {
            id: "agents",
            badge: "Autonomous Agents",
            title: "Multi-Agent Swarm Orchestration",
            desc: "Building deterministic state graphs and subagent swarms that execute complex workflows safely.",
            highlights: ["Antigravity SDK loop integration", "Tool schema allowlisting", "Human-in-the-loop approval gateways"],
            iconName: "Bot",
          },
        ],
        aiDifferencePoints: [
          { title: "Direct Git Access", desc: "Our engineers submit pull requests and build CI/CD pipelines directly inside your repos.", iconName: "Terminal" },
        ],
        engagementTiers: [],
        faqs: [
          { q: "How does the FDE model work?", a: "Senior AlphaesAI engineers embed into your team's Slack, Jira, and Git repository, writing production code alongside your staff." },
        ],
      },
      dataAnnotation: {
        heroBadge: "DATA ANNOTATION · RLHF · MULTI-MODAL ALIGNMENT",
        title: "High-Precision Datasets Curated by Domain Experts.",
        subtitle: "Human Alignment for Enterprise SOTA Models.",
        description: "AI accuracy depends entirely on data quality. AlphaesAI provides high-precision data annotation, RLHF preference ranking, and multi-modal alignment executed by domain-expert annotators and verified by automated quality heuristics.",
        capabilitiesBadges: ["RLHF", "DPO/PPO", "Computer Vision", "HIPAA Labeling", "Domain Experts"],
        primaryCtaText: "Schedule Data Consultation",
        primaryCtaHref: "/contact",
        secondaryCtaText: "Explore Annotations",
        secondaryCtaHref: "#capabilities",
        frictionPoints: [],
        capabilities: [],
        aiDifferencePoints: [],
        engagementTiers: [],
        faqs: [],
      },
      databaseTuning: {
        heroBadge: "DATABASE & CLOUD PERFORMANCE OPTIMIZATION",
        title: "Slashing Lakehouse Costs & Accelerating Query Latency.",
        subtitle: "Databricks Delta & Snowflake FinOps Mastery.",
        description: "We optimize complex Databricks Delta Lake and Snowflake data warehouses to cut DBU compute spend by up to 60% while accelerating pipeline latency by 5x.",
        capabilitiesBadges: ["Databricks", "Snowflake", "Delta Lake", "Liquid Clustering", "FinOps Savings"],
        primaryCtaText: "Get Performance Audit",
        primaryCtaHref: "/contact",
        secondaryCtaText: "View Case Studies",
        secondaryCtaHref: "#case-studies",
        frictionPoints: [],
        capabilities: [],
        aiDifferencePoints: [],
        engagementTiers: [],
        faqs: [],
      },
    },
    academySubpages: {
      agenticAi: {
        heroBadge: "AlphaesAI Academy — Deep Tech Track",
        title: "Agentic AI & Multi-Agent Engineering",
        subtitle: "Master the art of building production-grade autonomous AI agents, tool-calling swarms, and self-healing agentic workflows using industrial-scale design patterns.",
        primaryCtaText: "Enroll in Agentic AI Track",
        primaryCtaHref: "/contact",
        secondaryCtaText: "Explore FDE Agent Capabilities",
        secondaryCtaHref: "/services/forward-deployed-ai-engineering",
        highlights: [
          { title: "Sub-100ms Execution", desc: "Optimize prompt chaining and tool routing to achieve microsecond agent reactivity for high-throughput enterprise workloads.", iconName: "Cpu" },
          { title: "Hierarchical Swarms", desc: "Deconstruct complex goals into parallel task streams delegated across specialized subagents with shared state synchronization.", iconName: "Workflow" },
          { title: "Zero-Trust Guardrails", desc: "Protect agents against indirect prompt injection, data exfiltration, and unauthorized action execution with runtime interceptors.", iconName: "ShieldCheck" },
        ],
        modules: [
          { step: "MODULE 01", title: "Autonomous Agent Architecture & Antigravity SDK", desc: "Master the foundations of agentic loop design, stateful memory management, and deterministic planning with the Antigravity SDK.", skills: ["State Graph Design", "Context Window Optimization", "Short & Long-term Memory Stores"] },
          { step: "MODULE 02", title: "Tool Calling, Function Execution & Dynamic Schema Binding", desc: "Learn to equip agents with structured JSON schemas, safe API execution sandboxes, and automatic retries for complex enterprise tools.", skills: ["OpenAPI Tool Binding", "Sandboxed Python Execution", "Self-Healing Tool Retries"] },
          { step: "MODULE 03", title: "Multi-Agent Systems & Hierarchical Swarm Routing", desc: "Architect multi-agent swarms where specialized subagents handle discrete tasks (Research, Refactoring, QA) with master controller orchestration.", skills: ["Subagent Lifecycle", "Inter-Agent Messaging", "Task Delegation Protocols"] },
          { step: "MODULE 04", title: "Enterprise AI Guardrails, Security & Human-In-The-Loop", desc: "Implement hard security boundaries against prompt injection, enforce role-based tool authorization, and integrate human approval loops.", skills: ["LlamaGuard & NeMo Scanners", "RBAC Tool Allowlisting", "Human-in-the-Loop Gateways"] },
        ],
        ctaTitle: "Ready to Build Industrial Agentic AI?",
        ctaDesc: "Join senior engineers and enterprise architects in our intensive hands-on Agentic AI program.",
        ctaBtnText: "Request Academy Briefing & Syllabus",
        ctaBtnHref: "/contact",
      },
      databricks: {
        heroBadge: "AlphaesAI Academy — Data Engineering Track",
        title: "Databricks & Delta Lake Mastery",
        subtitle: "Master Liquid Clustering, PySpark shuffle elimination, Unity Catalog governance, and FinOps DBU cost reduction.",
        primaryCtaText: "Enroll in Databricks Track",
        primaryCtaHref: "/contact",
        secondaryCtaText: "Explore Database Tuning",
        secondaryCtaHref: "/services/database-performance-and-cloud-optimization",
        highlights: [
          { title: "FinOps Cost Cuts", desc: "Cut monthly DBU expenditure by up to 60% with liquid clustering and cluster rightsizing.", iconName: "TrendingDown" },
          { title: "Unity Catalog", desc: "Implement granular fine-grained access control across workspace data assets.", iconName: "Database" },
        ],
        modules: [
          { step: "MODULE 01", title: "Delta Lake Architecture & Liquid Clustering", desc: "Replace Z-Ordering with Liquid Clustering for 4x query acceleration.", skills: ["Liquid Clustering", "Delta Lake 3.0", "DBU Rightsizing"] },
        ],
        ctaTitle: "Master Enterprise Lakehouses",
        ctaDesc: "Accelerate your data engineering career with industrial Databricks optimization.",
        ctaBtnText: "Request Syllabus",
        ctaBtnHref: "/contact",
      },
      fullstackAi: {
        heroBadge: "AlphaesAI Academy — Fullstack AI Track",
        title: "Fullstack Engineering with Next.js 15 & AI Copilots",
        subtitle: "Build real-time streaming copilots, vector retrieval search, and SSE interfaces with Next.js App Router and React 19.",
        primaryCtaText: "Enroll in Fullstack AI Track",
        primaryCtaHref: "/contact",
        secondaryCtaText: "Explore OneAI Assist",
        secondaryCtaHref: "/oneai-assist",
        highlights: [
          { title: "Token Streaming", desc: "Leverage Server-Sent Events (SSE) and Edge Runtime for sub-50ms token rendering.", iconName: "Zap" },
        ],
        modules: [
          { step: "MODULE 01", title: "Next.js App Router & Streaming Copilots", desc: "Build fluid conversational AI web interfaces with optimistic UI state.", skills: ["Next.js 15 App Router", "Server-Sent Events", "Pinecone Vector RAG"] },
        ],
        ctaTitle: "Build SOTA AI Web Applications",
        ctaDesc: "Master modern AI frontend and fullstack architecture.",
        ctaBtnText: "Enroll Now",
        ctaBtnHref: "/contact",
      },
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
      phone: "+91 70106 42399",
      address: "No. 472/7 Balaji Arcade, Ejipura, Koramangala 4th Block, Bengaluru, Karnataka - 560095, India",
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
    careers: {
      heroBadge: "Join Our Engineering Team",
      title: "Build the Operating System for Industrial-Scale Agentic AI",
      subtitle: "We are looking for forward-deployed engineers, Databricks optimization architects, and cloud security pioneers to build systems that run real enterprise operations.",
      jobs: [],
    },
  },
  blog: {
    heroBadge: "AlphaesAI Engineering Insights",
    title: "Technical Deep Dives & Industrial AI Blueprints",
    subtitle: "Production-proven architectures for Agentic AI, Databricks Lakehouse optimization, full-stack AI applications, and zero-trust cloud security.",
    categories: [
      "All Articles",
      "Agentic AI",
      "Databricks & Lakehouse",
      "Full-Stack AI",
      "Security & Compliance",
      "FDE Case Studies",
    ],
    articles: [
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
              codeSnippet: `// Example Antigravity Agent Tool Invocation Guardrail\nimport { createAgent, withGuardrails } from "@alphaesai/antigravity-sdk";\n\nconst agent = createAgent({\n  name: "DBOperationsAgent",\n  tools: [sqlQueryTool, clusterScalingTool],\n  guardrails: withGuardrails({\n    maxToolRetries: 3,\n    disallowedCommands: ["DROP TABLE", "DELETE FROM *"],\n    requireHumanApprovalFor: ["scale_cluster_down"],\n  }),\n});`,
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
              codeSnippet: `-- Enabling Liquid Clustering on Databricks Delta Table\nCREATE TABLE telemetry_logs (\n  timestamp TIMESTAMP,\n  device_id STRING,\n  payload STRING\n)\nUSING DELTA\nCLUSTER BY (device_id, timestamp);`,
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
    ],
  },
};


const STORAGE_KEY = "alphaesai_cms_data_v10";

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
    const defaultEcosystemCol = DEFAULT_CMS_DATA.footer.columns.find(
      (c) => c.id === "col-ecosystem"
    )!;

    const sanitizedCols = filteredCols.map((col: { id?: string; title?: string }) => {
      if (col?.id === "col-contact" || col?.title?.toLowerCase().includes("contact")) {
        return defaultContactCol;
      }
      if (col?.id === "col-ecosystem" || col?.title?.toLowerCase().includes("ecosystem")) {
        return defaultEcosystemCol;
      }
      return col;
    });

    const hasContact = sanitizedCols.some(
      (col: { id?: string; title?: string }) => col?.id === "col-contact" || col?.title?.toLowerCase().includes("contact")
    );
    if (!hasContact) {
      sanitizedCols.push(defaultContactCol);
    }

    const hasEcosystem = sanitizedCols.some(
      (col: { id?: string; title?: string }) => col?.id === "col-ecosystem" || col?.title?.toLowerCase().includes("ecosystem")
    );
    if (!hasEcosystem) {
      sanitizedCols.push(defaultEcosystemCol);
    }

    const rawServicesCategories = Array.isArray(parsed.header?.megamenu?.servicesCategories)
      ? parsed.header.megamenu.servicesCategories
      : DEFAULT_CMS_DATA.header.megamenu.servicesCategories;

    const sanitizedServicesCategories = rawServicesCategories.map((cat: { items?: Array<{ name?: string; title?: string }> }) => ({
      ...cat,
      items: Array.isArray(cat.items)
        ? cat.items.filter((item: { name?: string; title?: string }) =>
            !/autonomous ai agents|rag & vector db/i.test(item.name || item.title || "")
          )
        : [],
    }));

    const sanitizedHeader = { ...DEFAULT_CMS_DATA.header, ...(parsed.header || {}) };
    if (!sanitizedHeader.primaryCtaText || /get started|start building/i.test(sanitizedHeader.primaryCtaText)) {
      sanitizedHeader.primaryCtaText = "Contact Us";
    }
    sanitizedHeader.megamenu = {
      ...DEFAULT_CMS_DATA.header.megamenu,
      ...(parsed.header?.megamenu || {}),
      servicesCategories: sanitizedServicesCategories,
      productsDropdown: Array.isArray(parsed.header?.megamenu?.productsDropdown)
        ? parsed.header.megamenu.productsDropdown
        : DEFAULT_CMS_DATA.header.megamenu.productsDropdown,
      academyDropdown: Array.isArray(parsed.header?.megamenu?.academyDropdown)
        ? parsed.header.megamenu.academyDropdown
        : DEFAULT_CMS_DATA.header.megamenu.academyDropdown,
    };

    const sanitizedHero = { ...DEFAULT_CMS_DATA.homepage?.hero, ...(parsed.homepage?.hero || {}) };
    if (!sanitizedHero.primaryCtaText || /get started|start building/i.test(sanitizedHero.primaryCtaText)) {
      sanitizedHero.primaryCtaText = "Contact Us";
    }

    const sanitizedCtaBanner = { ...DEFAULT_CMS_DATA.homepage?.ctaBanner, ...(parsed.homepage?.ctaBanner || {}) };
    if (!sanitizedCtaBanner.primaryCtaText || /get started|start building/i.test(sanitizedCtaBanner.primaryCtaText)) {
      sanitizedCtaBanner.primaryCtaText = "Contact Us";
    }

    return {
      header: sanitizedHeader,
      footer: {
        ...DEFAULT_CMS_DATA.footer,
        ...(parsed.footer || {}),
        columns: sanitizedCols.length > 0 ? sanitizedCols : DEFAULT_CMS_DATA.footer.columns,
      },
      homepage: {
        ...DEFAULT_CMS_DATA.homepage,
        ...(parsed.homepage || {}),
        hero: sanitizedHero,
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
        ctaBanner: sanitizedCtaBanner,
        techStackBar: {
          ...DEFAULT_CMS_DATA.homepage.techStackBar,
          ...(parsed.homepage?.techStackBar || {}),
          techStack: Array.isArray(parsed.homepage?.techStackBar?.techStack)
            ? parsed.homepage.techStackBar.techStack
            : DEFAULT_CMS_DATA.homepage.techStackBar.techStack,
          complianceShields: Array.isArray(parsed.homepage?.techStackBar?.complianceShields)
            ? parsed.homepage.techStackBar.complianceShields
            : DEFAULT_CMS_DATA.homepage.techStackBar.complianceShields,
        },
        hubSpokeArch: {
          ...DEFAULT_CMS_DATA.homepage.hubSpokeArch,
          ...(parsed.homepage?.hubSpokeArch || {}),
          nodes: Array.isArray(parsed.homepage?.hubSpokeArch?.nodes)
            ? parsed.homepage.hubSpokeArch.nodes
            : DEFAULT_CMS_DATA.homepage.hubSpokeArch.nodes,
        },
        enhancedTestimonials: {
          ...DEFAULT_CMS_DATA.homepage.enhancedTestimonials,
          ...(parsed.homepage?.enhancedTestimonials || {}),
          items: Array.isArray(parsed.homepage?.enhancedTestimonials?.items)
            ? parsed.homepage.enhancedTestimonials.items
            : DEFAULT_CMS_DATA.homepage.enhancedTestimonials.items,
        },
        roiMetricsGrid: Array.isArray(parsed.homepage?.roiMetricsGrid)
          ? parsed.homepage.roiMetricsGrid
          : DEFAULT_CMS_DATA.homepage.roiMetricsGrid,
        fdeInteractiveHub: {
          ...DEFAULT_CMS_DATA.homepage.fdeInteractiveHub,
          ...(parsed.homepage?.fdeInteractiveHub || {}),
          nodes: Array.isArray(parsed.homepage?.fdeInteractiveHub?.nodes)
            ? parsed.homepage.fdeInteractiveHub.nodes
            : DEFAULT_CMS_DATA.homepage.fdeInteractiveHub.nodes,
          steps: Array.isArray(parsed.homepage?.fdeInteractiveHub?.steps)
            ? parsed.homepage.fdeInteractiveHub.steps
            : DEFAULT_CMS_DATA.homepage.fdeInteractiveHub.steps,
        },
      },
      pages: {
        services: {
          ...DEFAULT_CMS_DATA.pages.services,
          ...(parsed.pages?.services || {}),
          cards: Array.isArray(parsed.pages?.services?.cards)
            ? parsed.pages.services.cards
            : DEFAULT_CMS_DATA.pages.services.cards,
          fdeFeatures: Array.isArray(parsed.pages?.services?.fdeFeatures)
            ? parsed.pages.services.fdeFeatures
            : DEFAULT_CMS_DATA.pages.services.fdeFeatures,
          dbFeatures: Array.isArray(parsed.pages?.services?.dbFeatures)
            ? parsed.pages.services.dbFeatures
            : DEFAULT_CMS_DATA.pages.services.dbFeatures,
          cloudSecurityFeatures: Array.isArray(parsed.pages?.services?.cloudSecurityFeatures)
            ? parsed.pages.services.cloudSecurityFeatures
            : DEFAULT_CMS_DATA.pages.services.cloudSecurityFeatures,
          rlhfFeatures: Array.isArray(parsed.pages?.services?.rlhfFeatures)
            ? parsed.pages.services.rlhfFeatures
            : DEFAULT_CMS_DATA.pages.services.rlhfFeatures,
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
        careers: {
          ...DEFAULT_CMS_DATA.pages.careers,
          ...(parsed.pages?.careers || {}),
          jobs: Array.isArray(parsed.pages?.careers?.jobs)
            ? parsed.pages.careers.jobs
            : DEFAULT_CMS_DATA.pages.careers.jobs,
        },
        serviceSubpages: {
          cloudMigration: {
            ...DEFAULT_CMS_DATA.pages.serviceSubpages.cloudMigration,
            ...(parsed.pages?.serviceSubpages?.cloudMigration || {}),
          },
          fde: {
            ...DEFAULT_CMS_DATA.pages.serviceSubpages.fde,
            ...(parsed.pages?.serviceSubpages?.fde || {}),
          },
          dataAnnotation: {
            ...DEFAULT_CMS_DATA.pages.serviceSubpages.dataAnnotation,
            ...(parsed.pages?.serviceSubpages?.dataAnnotation || {}),
          },
          databaseTuning: {
            ...DEFAULT_CMS_DATA.pages.serviceSubpages.databaseTuning,
            ...(parsed.pages?.serviceSubpages?.databaseTuning || {}),
          },
        },
        academySubpages: {
          agenticAi: {
            ...DEFAULT_CMS_DATA.pages.academySubpages.agenticAi,
            ...(parsed.pages?.academySubpages?.agenticAi || {}),
          },
          databricks: {
            ...DEFAULT_CMS_DATA.pages.academySubpages.databricks,
            ...(parsed.pages?.academySubpages?.databricks || {}),
          },
          fullstackAi: {
            ...DEFAULT_CMS_DATA.pages.academySubpages.fullstackAi,
            ...(parsed.pages?.academySubpages?.fullstackAi || {}),
          },
        },
      },
      blog: {
        heroBadge: parsed.blog?.heroBadge || (DEFAULT_CMS_DATA.blog?.heroBadge ?? ""),
        title: parsed.blog?.title || (DEFAULT_CMS_DATA.blog?.title ?? ""),
        subtitle: parsed.blog?.subtitle || (DEFAULT_CMS_DATA.blog?.subtitle ?? ""),
        categories: Array.isArray(parsed.blog?.categories)
          ? parsed.blog.categories
          : (DEFAULT_CMS_DATA.blog?.categories ?? []),
        articles: Array.isArray(parsed.blog?.articles)
          ? parsed.blog.articles
          : (DEFAULT_CMS_DATA.blog?.articles ?? []),
      },
      customPages: Array.isArray(parsed.customPages)
        ? parsed.customPages
        : (DEFAULT_CMS_DATA.customPages || []),
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
