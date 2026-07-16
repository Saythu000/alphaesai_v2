import Link from "next/link";
import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="border-t border-border bg-muted/30 mt-24">
    <div className="container py-16 grid gap-10 md:grid-cols-5">
      <div className="space-y-4">
        <Logo />
        <p className="text-sm text-muted-foreground max-w-xs">
          Enterprise AI, multi-cloud architecture, and FinOps — delivered as production-ready systems.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm">Services</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link href="/services" className="hover:text-foreground">AI Consulting</Link></li>
          <li><Link href="/services" className="hover:text-foreground">FinOps & Cost Optimization</Link></li>
          <li><Link href="/services" className="hover:text-foreground">Cloud Migration</Link></li>
          <li><Link href="/services" className="hover:text-foreground">Databricks</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm">Products</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link href="/drgodly" className="hover:text-foreground">DrGodly</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm">Company</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link href="/about" className="hover:text-foreground">About</Link></li>
          <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm">Get in Touch</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="tel:+917010642399" className="hover:text-foreground">+91 70106 42399</a></li>
          <li><a href="mailto:contact@alphaesai.com" className="hover:text-foreground">contact@alphaesai.com</a></li>
          <li className="pt-2">
            <p className="text-xs leading-relaxed">
              No. 472/7 Balaji Arcade, 2nd & 3rd Floor, A.V.S. Compound, 20th L Cross Road, AVS Layout, Ejipura, Koramangala 4th Block, Bengaluru, Karnataka - 560095
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} AlpheasAI. All rights reserved.</p>
        <p>HIPAA Ready · Multi-cloud</p>
      </div>
    </div>
  </footer>
);
