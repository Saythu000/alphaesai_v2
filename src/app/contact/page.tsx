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
            Contact page coming soon. In the meantime, reach out to our team directly.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
