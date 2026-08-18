// AlphaesAI Homepage
import { Metadata } from "next";
import Layout from "@/components/site/Layout";
import Index from "./index-page";

export const metadata: Metadata = {
  title: "AlphaesAI - AI, Cloud & FinOps Engineering",
  description:
    "Cut cloud costs by 50% while building AI platforms. AI-first systems combined with FinOps-driven cloud architecture.",
};

export default function Page() {
  return (
    <Layout>
      <Index />
    </Layout>
  );
}
