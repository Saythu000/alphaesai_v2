import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="border-t border-border bg-muted/30 mt-24">
    <div className="container py-16 grid gap-10 md:grid-cols-4">
      <div className="space-y-4">
        <Logo />
        <p className="text-sm text-muted-foreground max-w-xs">
          Start Your Tech Journey Here — hands-on tech education and internships in Frontend, Full Stack and AI/ML.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm">Programs</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/services" className="hover:text-foreground">Frontend Development</Link></li>
          <li><Link to="/services" className="hover:text-foreground">Full Stack Development</Link></li>
          <li><Link to="/services" className="hover:text-foreground">AI & ML</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm">Resources</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
          <li><Link to="/about" className="hover:text-foreground">About</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm">Company</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/about" className="hover:text-foreground">About</Link></li>
          <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} alphaesAI. All rights reserved.</p>
        <p>Start Your Tech Journey Here</p>
      </div>
    </div>
  </footer>
);
