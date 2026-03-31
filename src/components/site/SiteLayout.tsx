import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
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
  const { scrollY } = useScroll();
  const layerOneY = useTransform(scrollY, [0, 1800], [0, -160]);
  const layerTwoY = useTransform(scrollY, [0, 1800], [0, -240]);
  const layerThreeY = useTransform(scrollY, [0, 1800], [0, -90]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="site-shell relative min-h-screen overflow-x-hidden">
      <motion.div style={{ y: layerOneY }} className="parallax-orb orb-one" />
      <motion.div style={{ y: layerTwoY }} className="parallax-orb orb-two" />
      <motion.div style={{ y: layerThreeY }} className="parallax-orb orb-three" />

      <header className={cn("navbar-shell fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-10", scrolled && "navbar-scrolled")}>
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/" className="inline-flex items-center">
            <span className="text-base font-extrabold tracking-tight text-white sm:text-lg">VELOCITY</span>
            <span className="ml-2 text-base font-light tracking-[0.3em] text-[#c8a444] sm:text-lg">WEB</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <motion.div whileHover={{ y: -2, z: 14 }} whileTap={{ y: 1, z: 0 }} className="depth-wrap hidden lg:block">
            <Button asChild variant="outline" className="depth-button border-[#c8a444] bg-transparent text-[#c8a444] hover:bg-[#c8a444] hover:text-[#0a0a0f]">
              <a href="/#contact">Get Started</a>
            </Button>
          </motion.div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#c8a44433] text-[#e8d4a1] lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mobile-menu-panel mt-4 rounded-2xl border border-[#c8a4442b] bg-[#0f0f16f0] p-4 backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </a>
                ))}
                <Button asChild className="mt-1 w-full bg-[#c8a444] text-[#0a0a0f] hover:bg-[#d8b95f]">
                  <a href="/#contact" onClick={() => setMobileOpen(false)}>
                    Get Started
                  </a>
                </Button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main className="relative z-10 pt-24 sm:pt-28">{children}</main>

      <footer className="border-t border-[#c8a44422] bg-[#09090d]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <div className="inline-flex items-center">
                <span className="text-lg font-extrabold tracking-tight text-white">VELOCITY</span>
                <span className="ml-2 text-lg font-light tracking-[0.3em] text-[#c8a444]">WEB</span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#a8a8b7]">
                Three founders building websites that actually help businesses grow - in weeks, not months.
              </p>
              <a href={company.website} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-[#dfc98d]">
                velocityweb.online
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-3 text-sm text-[#8f8f9f]">{company.location}</p>
            </div>

            <div>
              <p className="font-display text-sm uppercase tracking-[0.18em] text-[#bfa66a]">Quick Links</p>
              <div className="mt-4 flex flex-col gap-2 text-sm text-[#c4c4d2]">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="footer-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-display text-sm uppercase tracking-[0.18em] text-[#bfa66a]">Get in Touch</p>
              <div className="mt-4 space-y-3 text-sm text-[#c4c4d2]">
                <a href={`mailto:${company.email}`} className="footer-link flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#c8a444]" />
                  {company.email}
                </a>
                <a href={`tel:${company.phoneTel}`} className="footer-link flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#c8a444]" />
                  {company.phoneDisplay}
                </a>
                <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="footer-link flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-[#c8a444]" />
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
