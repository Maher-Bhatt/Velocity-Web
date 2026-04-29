import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { company, navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type SiteLayoutProps = {
  children: ReactNode;
};

export const SiteLayout = ({ children }: SiteLayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="site-shell relative min-h-screen overflow-x-hidden">
      <div className="parallax-orb orb-one" />
      <div className="parallax-orb orb-two" />
      <div className="parallax-orb orb-three" />

      <header className={cn("navbar-shell fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-10", scrolled && "navbar-scrolled")}>
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#b7ff3c1f] bg-[#071008cc] px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-5">
          <Link to="/" className="inline-flex items-center">
            <span className="text-base font-extrabold tracking-tight text-white sm:text-lg">VELOCITY</span>
            <span className="ml-2 text-base font-light tracking-[0.3em] text-[#b7ff3c] sm:text-lg">WEB</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="depth-wrap hidden lg:block">
            <Button asChild variant="outline" className="depth-button border-[#b7ff3c] bg-transparent text-[#b7ff3c] hover:bg-[#b7ff3c] hover:text-[#0a0a0f]">
              <a href="/#contact">Get Started</a>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#b7ff3c33] text-[#d7ff71] lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={cn(
            "mobile-menu-panel overflow-hidden rounded-2xl border border-[#b7ff3c2b] bg-[#071008f2] backdrop-blur-xl lg:hidden",
            mobileOpen ? "mt-4 max-h-96 p-4 opacity-100" : "max-h-0 border-transparent p-0 opacity-0",
          )}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-1 w-full bg-[#b7ff3c] text-[#0a0a0f] hover:bg-[#d8ff73]">
              <a href="/#contact" onClick={() => setMobileOpen(false)}>
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-24 sm:pt-28">{children}</main>

      <footer className="border-t border-[#b7ff3c22] bg-[#030604]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <div className="inline-flex items-center">
                <span className="text-lg font-extrabold tracking-tight text-white">VELOCITY</span>
                <span className="ml-2 text-lg font-light tracking-[0.3em] text-[#b7ff3c]">WEB</span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#a8a8b7]">
                Three founders building websites that actually help businesses grow - in weeks, not months.
              </p>
              <a href={company.website} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-[#d7ff71]">
                velocityweb.online
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-3 text-sm text-[#8f8f9f]">{company.location}</p>
            </div>

            <div>
              <p className="font-display text-sm uppercase tracking-[0.18em] text-[#b7ff3c]">Quick Links</p>
              <div className="mt-4 flex flex-col gap-2 text-sm text-[#c4c4d2]">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="footer-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-display text-sm uppercase tracking-[0.18em] text-[#b7ff3c]">Get in Touch</p>
              <div className="mt-4 space-y-3 text-sm text-[#c4c4d2]">
                <a href={`mailto:${company.email}`} className="footer-link flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#b7ff3c]" />
                  {company.email}
                </a>
                <a href={`tel:${company.phoneTel}`} className="footer-link flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#b7ff3c]" />
                  {company.phoneDisplay}
                </a>
                <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="footer-link flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-[#b7ff3c]" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[#ffffff12] pt-6 text-xs text-[#8f8f9f]">
            <p>Copyright {company.year} {company.name}. All rights reserved.</p>
            <p>Built with care by three humans, not a template.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
