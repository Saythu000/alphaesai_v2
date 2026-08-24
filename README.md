# ⚡ AlphaesAI Core (v2)

> **Systems That Ship. Architecture That Scales.**  
> Enterprise-grade Forward Deployed AI Engineering, Production RAG Pipelines, Autonomous AI Agents, DBOps, and Cloud Security Infrastructure.

---

## 🌟 Overview

**AlphaesAI Core** is a modern, high-performance web platform built to showcase and manage AlphaesAI's end-to-end artificial intelligence engineering capabilities. It bridges embedded forward-deployed engineering teams with enterprise client codebases to deliver production-ready AI systems.

### Core Service Offerings:
- **Forward Deployed AI Engineering (FDE)**: Embedded senior engineers working side-by-side inside client Slack, GitHub, AWS/GCP, and JIRA workflows.
- **Database Performance & Cloud Optimization (DBOps)**: High-throughput SQL tuning, vector store indexing, and cloud infrastructure cost reduction.
- **Cloud Migration & Cybersecurity**: Zero-trust architecture, automated compliance guardrails, and cloud security posture management.
- **Data Annotation & RLHF**: High-precision RLHF, fine-tuning datasets, and human-in-the-loop validation pipelines.
- **Dr. Godly AI Agent & OneAI Assist**: Enterprise autonomous agentic assistance platforms.

---

## 🔥 Key Features & Interactive Architecture

### 1. 🛸 Interactive FDE Hub & Spoke Process Engine
- **Orbital Hub & Spoke Visualizer**: Radial positioning of 8 satellite capability nodes (*AI Agents, RAG Systems, Security & Governance, Cloud Platform, Platform Engineering, Enterprise Integrations, Automation & Orchestration, Data Engineering*).
- **Animated SVG Laser Beams**: Dynamic SVG connectors with laser pulse glow animations traveling between the central core and active nodes.
- **5-Phase Interactive Timeline**: Synchronized step cards (*01 DISCOVER, 02 DESIGN, 03 BUILD, 04 DEPLOY, 05 OPTIMIZE*) with step target node illumination and 4.5s auto-cycling (with hover-pause).

### 2. 🎛️ Multi-Page CMS Admin Dashboard (`/admin`)
- **Centralized Content Management**: In-browser administration dashboard categorizing content into Homepage Sections, Subpages Manager, and Global Settings.
- **Real-Time Search & Live Previews**: Filter content by keyword and jump directly to live route previews.
- **Backup & Restore**: One-click JSON export and import mechanism for instant content backup and migration.
- **3D Robot Chest Text Control**: Custom editing controls for Spline 3D robot model chest overlays, hero titles, and card call-to-actions.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI & Logic**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **3D Integration**: [@splinetool/react-spline](https://spline.design/) & Three.js

---

## 📂 Project Structure

```text
alpheas-ai-core-main/
├── src/
│   ├── app/
│   │   ├── admin/                                         # Multi-Page CMS Admin Dashboard (/admin)
│   │   ├── services/
│   │   │   ├── page.tsx                                   # Services Hub page with FDE Interactive Engine
│   │   │   ├── forward-deployed-ai-engineering/           # FDE Service Page
│   │   │   ├── database-performance-and-cloud-optimization/# DBOps Service Page
│   │   │   ├── cloud-migration-cyber-security-databricks-snowflake/# Cloud & Security Page
│   │   │   └── data-annotation-and-rlhf/                  # Data Annotation & RLHF Page
│   │   ├── drgodly/                                       # Dr. Godly AI Agent Page
│   │   ├── oneai-assist/                                  # OneAI Assist Page
│   │   ├── partners/                                      # Partners Page
│   │   ├── about/                                         # About Page
│   │   ├── contact/                                       # Contact Page
│   │   ├── layout.tsx                                     # Main Root Layout with CMSProvider
│   │   └── page.tsx                                       # Homepage with 3D Robot Showcase
│   ├── components/
│   │   ├── FdeInteractiveHub.tsx                          # Interactive Radial Hub & Spoke Engine Component
│   │   ├── site/                                          # Layout, Navbar, Footer, 3D Canvas components
│   │   └── ui/                                            # Reusable UI primitives (Spotlight, Cards, Buttons)
│   ├── context/
│   │   └── CMSContext.tsx                                 # Global CMS state provider
│   └── lib/
│       └── cms-store.ts                                   # CMS data store & default content definitions
├── public/                                                # Static assets, logos, mockups
├── package.json                                           # Dependencies & scripts
└── README.md                                              # Project documentation
```

---

## 🚀 Getting Started (Local Development)

Follow these steps to get the project running locally on your machine.

### Prerequisites
Make sure you have Node.js installed on your machine:
- **Node.js**: `v18.0.0` or higher (Node `v20+` recommended)
- **Package Manager**: `npm` (or `pnpm` / `bun`)

### 1. Clone the Repository
```bash
git clone https://github.com/generativeai333-ai/alphaesai_v2.git
cd alphaesai_v2
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the web application.

### Key Local Routes:
- **Homepage**: `http://localhost:3000/`
- **FDE Service & Interactive Engine**: `http://localhost:3000/services/forward-deployed-ai-engineering`
- **Services Hub**: `http://localhost:3000/services`
- **CMS Admin Dashboard**: `http://localhost:3000/admin`

---

## 🏗️ Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server on port 3000. |
| `npm run build` | Builds the application for production. |
| `npm run start` | Starts the Next.js production server. |
| `npx tsc --noEmit` | Runs TypeScript static analysis and type checking. |

---

## 🔒 Security & Best Practices

- All CMS modifications are safely managed in client-side state and browser local storage.
- No sensitive API keys or personal access tokens are committed to source control.

---

## 📄 License

Copyright © 2026 AlphaesAI. All rights reserved.
