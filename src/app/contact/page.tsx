"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";

export default function Contact() {
  return (
    <>
      <section className="bg-background">
        <div className="container py-20 md:py-28 max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-foreground">
            Get in touch
          </h1>
          <p className="text-lg text-muted-foreground">
            Let&apos;s discuss your AI, cloud, or FinOps needs.
          </p>
        </div>
      </section>

      <Section>
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start?</h2>
          <p className="text-primary-foreground/85 max-w-2xl mx-auto mb-8">
            Reach out to our team directly to discuss your AI, cloud, or FinOps needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="tel:+918220850596" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-primary-foreground font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +91 8220850596
            </a>
            <a 
              href="mailto:contact@alphaesai.com" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-primary-foreground font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              contact@alphaesai.com
            </a>
          </div>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
