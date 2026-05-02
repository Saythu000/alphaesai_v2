import { ReactNode } from "react";

export const Section = ({
  children,
  className = "",
  id,
}: { children: ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="container">{children}</div>
  </section>
);

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
    {children}
  </div>
);

export const SectionHeading = ({
  eyebrow, title, subtitle, center = true,
}: { eyebrow?: string; title: ReactNode; subtitle?: string; center?: boolean }) => (
  <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} space-y-4 mb-14`}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-maroon">{title}</h2>
    {subtitle && <p className="text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
  </div>
);
