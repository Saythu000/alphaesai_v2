"use client";

import { motion } from "framer-motion";
import { TrendingDown, Zap, ShieldCheck, Clock } from "lucide-react";

const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

const ROI_METRICS = [
  {
    value: "85%+",
    label: "Cloud Compute & FinOps Savings",
    description: "Achieved via Databricks/Snowflake query tuning, GPU cluster auto-scaling, and dynamic model quantization.",
    icon: TrendingDown,
  },
  {
    value: "10x",
    label: "Faster Deployment Cycles",
    description: "Forward Deployed AI Engineers embed directly into your workflows to launch production pipelines in days.",
    icon: Zap,
  },
  {
    value: "99.99%",
    label: "Enterprise SLA Availability",
    description: "High-availability multi-cloud data architecture with zero single-point-of-failure guarantees.",
    icon: ShieldCheck,
  },
  {
    value: "70%",
    label: "Query Latency Reduction",
    description: "Optimized indexing, hybrid vector retrieval, and distributed Spark processing on massive datasets.",
    icon: Clock,
  },
];

export function RoiMetricsGrid() {
  return (
    <div className="w-full max-w-[1100px] mx-auto mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ROI_METRICS.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: SMOOTH_EASE, delay: idx * 0.12 }}
              className="p-6 border border-[#ddc1b0] rounded-xl bg-[#F3F3F3] hover:border-[#964900] hover:bg-[#ffffff] transition-all flex flex-col justify-between shadow-sm group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#964900] group-hover:text-[#ff5722] transition-colors">
                  {metric.value}
                </span>
                <div className="p-2 rounded-lg bg-[#fff8f5] text-[#964900] group-hover:bg-[#964900] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h4 className="font-['Hanken_Grotesk'] text-base font-bold text-[#241913] mb-1">
                  {metric.label}
                </h4>
                <p className="font-['Inter'] text-xs text-[#564336] leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
