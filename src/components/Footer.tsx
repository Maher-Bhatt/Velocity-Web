import { Mail, Phone, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919879529957";

const Footer = () => (
  <footer className="border-t border-border/30 pt-16 pb-8">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-12 mb-14">
        <div className="md:col-span-1">
          <a href="#" className="inline-flex items-center gap-0 mb-5">
            <span className="font-display font-extrabold text-xl tracking-tight text-foreground">VELOCITY</span>
            <span className="font-display font-light text-xl tracking-widest text-primary ml-2">WEB</span>
          </a>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Three founders building websites that actually help businesses grow — in weeks, not months.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-5 text-primary/60 uppercase tracking-wider">Quick Links</h4>
          <nav className="flex flex-col gap-3">
            {[
              { label: "Services", href: "#services" },
              { label: "Portfolio", href: "#portfolio" },
              { label: "Team", href: "#founders" },
              { label: "Pricing", href: "#pricing" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-5 text-primary/60 uppercase tracking-wider">Get in Touch</h4>
          <div className="flex flex-col gap-4">
            <a href="mailto:velocitywe6@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail size={16} className="text-primary/50" />
              velocitywe6@gmail.com
            </a>
            <a href="tel:+919879529957" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone size={16} className="text-primary/50" />
              +91 9879529957
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle size={16} className="text-primary/50" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground/60">
        <span>© 2026 Velocity Web. All rights reserved.</span>
        <span>Built with care by three humans, not a template.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
