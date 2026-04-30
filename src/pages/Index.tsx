import { lazy, Suspense, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Code2,
  Globe2,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageSeo } from "@/components/seo/PageSeo";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteLayout } from "@/components/site/SiteLayout";
import { TiltCard } from "@/components/site/TiltCard";

const LazyHomeSections = lazy(() =>
  import("@/components/site/LazyHomeSections").then((module) => ({ default: module.LazyHomeSections })),
);

const services = [
  {
    icon: Code2,
    title: "Custom Website Development",
    description:
      "Premium websites, landing pages, and business platforms built from scratch with clean React architecture.",
    path: "/services/custom-web-development",
  },
  {
    icon: Rocket,
    title: "Startup MVP Development",
    description:
      "Launch-ready MVPs for founders who need clarity, speed, and a product that does not feel stitched together.",
    path: "/services/startup-website-development",
  },
  {
    icon: Globe2,
    title: "Web3 & Crypto Platforms",
    description:
      "Wallet-ready frontends, dashboards, token experiences, and Web3-native interfaces that feel easy to trust.",
    path: "/services/web3-development",
  },
  {
    icon: Layers3,
    title: "Education Platforms",
    description:
      "Student portals, content hubs, course platforms, and clean learning experiences built for real users.",
    path: "/services/education-platform-development",
  },
  {
    icon: ShieldCheck,
    title: "Hosting, SEO & Launch Ops",
    description:
      "Deployment, domains, SSL, speed, metadata, analytics, and the quiet technical work that makes a site feel serious.",
  },
];

const projects = [
  {
    name: "Ztees",
    category: "E-Commerce Platform",
    url: "https://ztees.store",
    description: "A fast fashion storefront with WhatsApp ordering, product flow, and conversion-first UX.",
    caseStudyUrl: "/case-studies/ztees",
    servicePath: "/services/custom-web-development",
    stats: ["240% sales lift", "48h launch", "3.2% conversion"],
  },
  {
    name: "BountyChain",
    category: "Web3 Platform",
    url: "https://bountychain-three.vercel.app/",
    description: "A decentralized bounty platform with wallet logic, clear task flows, and trust-led UI.",
    caseStudyUrl: "/case-studies/bountychains",
    servicePath: "/services/web3-development",
    stats: ["Web3 UX", "Wallet-ready", "Realtime flow"],
  },
  {
    name: "ITM Notes",
    category: "Education Platform",
    url: "https://itm-notes-new.vercel.app/",
    description: "A mobile-first note-sharing platform built as a student charity project.",
    caseStudyUrl: "/case-studies/itm-notes",
    servicePath: "/services/education-platform-development",
    stats: ["Student-first", "Fast access", "Clean search"],
  },
];

const proofItems = [
  "React + Node.js builds",
  "SEO-ready structure",
  "Fast launch systems",
  "Conversion-focused UI",
  "Mobile-first delivery",
  "Real founders, no middlemen",
];

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Velocity Web",
    url: "https://velocityweb.online",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Velocity Web",
    url: "https://velocityweb.online",
    logo: "https://velocityweb.online/logo.png",
    description: "Custom web development agency for startups, brands, Web3 platforms, and education products.",
    founder: [
      { "@type": "Person", name: "Maher Bhatt" },
      { "@type": "Person", name: "Anurag Pandey" },
      { "@type": "Person", name: "Jaydev Singh Gohil" },
    ],
  },
];

const Index = () => (
  <SiteLayout>
    <PageSeo
      title="Velocity Web | Premium Custom Websites, Web Apps & Startup MVPs"
      description="Velocity Web builds premium custom websites, web apps, startup MVPs, Web3 platforms, and education products with React, SEO, speed, and conversion-first design."
      canonical="https://velocityweb.online"
      keywords="custom web development, web development agency india, react development service, startup website development, web3 development, ecommerce website development"
      ogTitle="Velocity Web | Premium Custom Websites & Web Apps"
      ogDescription="A small founder-led web studio building fast, polished, conversion-ready websites and platforms."
      schema={pageSchema}
    />

    <section className="mx-auto max-w-7xl px-4 pb-12 pt-4 sm:px-6 lg:px-10 lg:pb-20">
      <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="space-y-8">
          <div className="reveal-card inline-flex items-center gap-2 rounded-full border border-[#6366f13d] bg-[#f8f8ff] px-4 py-2 text-sm text-[#818cf8] shadow-[0_0_32px_rgba(99,102,241,0.12)]">
            <span className="h-2 w-2 rounded-full bg-[#6366f1] shadow-[0_0_18px_rgba(99,102,241,0.85)]" />
            Founder-led web studio. Average turnaround: 1-2 weeks
          </div>

          <div className="space-y-5">
            <h1 className="reveal-card max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-[#0f0f1a] sm:text-6xl lg:text-7xl" style={{ "--delay": "90ms" } as CSSProperties}>
              Websites that feel like a <span className="accent-gradient-text">growth engine</span>.
            </h1>
            <p className="reveal-card max-w-2xl text-base leading-relaxed text-[#4b4b6b] sm:text-lg" style={{ "--delay": "160ms" } as CSSProperties}>
              Velocity Web builds premium custom websites, web apps, e-commerce stores, startup MVPs, Web3 products,
              and education platforms with sharp design, clean code, and launch-ready SEO.
            </p>
          </div>

          <div className="reveal-card flex flex-wrap gap-4" style={{ "--delay": "230ms" } as CSSProperties}>
            <Button asChild size="lg" className="webzi-button px-7 font-semibold transition-transform duration-200 hover:-translate-y-0.5">
              <Link to="/services/custom-web-development">Start a Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-[#6366f155] bg-[#f8f8ff] px-7 text-[#818cf8] hover:bg-[#6366f1] hover:text-[#0f0f1a]"
            >
              <a href="#portfolio">View Work</a>
            </Button>
          </div>

          <div className="reveal-card grid gap-3 sm:grid-cols-3" style={{ "--delay": "300ms" } as CSSProperties}>
            {[
              { value: "3", label: "founders building directly" },
              { value: "1-2w", label: "typical delivery window" },
              { value: "SEO", label: "built into the structure" },
            ].map((item) => (
              <TiltCard key={item.label} className="mesh-card p-4">
                <p className="font-display text-3xl text-[#0f0f1a]">{item.value}</p>
                <p className="mt-1 text-sm text-[#5c5c80]">{item.label}</p>
              </TiltCard>
            ))}
          </div>
        </div>

        <div className="reveal-card hero-stage min-h-[34rem] p-5 lg:p-7" style={{ "--delay": "180ms" } as CSSProperties}>
          <div className="dashboard-grid absolute inset-0 opacity-55" />
          <div className="scan-panel absolute inset-0" />
          <div className="relative z-10 flex h-full min-h-[31rem] flex-col justify-between gap-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#6b6b8a]">Velocity launch console</p>
                <h2 className="mt-2 font-display text-2xl text-[#0f0f1a]">Custom build pipeline</h2>
              </div>
              <span className="rounded-full bg-[#6366f1] px-3 py-1 text-xs font-bold text-[#0f0f1a]">LIVE</span>
            </div>

            <div className="relative mx-auto flex h-56 w-56 items-center justify-center rounded-full">
              <div className="hero-orbit absolute inset-0 rounded-full" />
              <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-[#6366f13d] bg-[#f8f8ff] shadow-[0_0_70px_rgba(99,102,241,0.22)]">
                <Sparkles className="h-12 w-12 text-[#6366f1]" />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Design", "Premium UI system"],
                ["Code", "React architecture"],
                ["Launch", "SEO + analytics"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-[#6366f124] bg-white/90 p-4 backdrop-blur">
                  <p className="font-display text-lg text-[#0f0f1a]">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#5c5c80]">{text}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[1.5rem] border border-[#6366f124] bg-[#f0f0ff]/60 p-4">
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#6b6b8a]">
                <span>Current proof</span>
                <span className="text-[#818cf8]">Ztees</span>
              </div>
              <div className="signal-line h-1 rounded-full bg-[#e0e0f0]" />
              <div className="mt-4 grid grid-cols-3 gap-3">
                {["240% lift", "48h launch", "3.2% CVR"].map((metric) => (
                  <div key={metric} className="rounded-xl bg-[#f8f8ff] px-3 py-2 text-center text-sm text-[#818cf8]">
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="proof-ticker mt-10 overflow-hidden rounded-full border border-[#6366f11f] bg-[#f8f8ff99] py-3">
        <div className="ticker-track flex gap-3 px-3">
          {[...proofItems, ...proofItems].map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-2 rounded-full border border-[#6366f11c] bg-[#6366f10d] px-4 py-2 text-sm text-[#3b3b5c]">
              <BadgeCheck className="h-4 w-4 text-[#6366f1]" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>

    <section id="services" className="section-space">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="WHAT WE BUILD"
          title="Launch Systems,"
          accent="Not Templates"
          subtext="Every section, interaction, and backend decision is designed around the business outcome: trust faster, explain better, convert cleaner."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <TiltCard key={service.title} className="mesh-card reveal-card h-full p-5" style={{ "--delay": `${index * 70}ms` } as CSSProperties}>
                <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#6366f126] bg-[#6366f112]">
                  <Icon className="h-5 w-5 text-[#6366f1]" />
                </div>
                <h3 className="font-display text-xl text-[#0f0f1a]">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#4b4b6b]">{service.description}</p>
                {service.path ? (
                  <Link to={service.path} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#818cf8]">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <a href="/#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#818cf8]">
                    Ask About Launch Ops
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>

    <section id="portfolio" className="section-space">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="SELECTED WORK"
          title="Proof That"
          accent="Actually Ships"
          subtext="Real projects, real links, and practical results. We keep the visual polish, but the work still has to survive real users."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <TiltCard key={project.name} className="mesh-card reveal-card h-full p-6" style={{ "--delay": `${index * 90}ms` } as CSSProperties}>
              <p className="text-xs uppercase tracking-[0.22em] text-[#6366f1]">{project.category}</p>
              <h3 className="mt-3 font-display text-3xl text-[#0f0f1a]">{project.name}</h3>
              <p className="mt-4 min-h-20 text-sm leading-relaxed text-[#4b4b6b]">{project.description}</p>
              <div className="mt-5 grid gap-2">
                {project.stats.map((stat) => (
                  <div key={stat} className="rounded-2xl border border-[#6366f11f] bg-[#f8f8ff] px-4 py-3 text-sm text-[#4b4b6b]">
                    {stat}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <Link to={project.caseStudyUrl} className="inline-flex items-center gap-2 text-[#818cf8]">
                  Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to={project.servicePath} className="inline-flex items-center gap-2 text-[#818cf8]">
                  Related Service
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#5c5c80]">
                  Live Site
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>

    <Suspense fallback={<div className="section-space min-h-[40vh]" aria-hidden="true" />}>
      <LazyHomeSections />
    </Suspense>

    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10">
      <div className="mesh-card overflow-hidden p-6 sm:p-10">
        <div className="dashboard-grid absolute inset-0 opacity-35" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="section-label">READY WHEN YOU ARE</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-[#0f0f1a] sm:text-5xl">
              Let us turn your idea into a site people can trust.
            </h2>
            <p className="mt-4 max-w-2xl text-[#4b4b6b]">
              Send the brief. We will help shape the offer, build the interface, ship the site, and keep it fast.
            </p>
          </div>
          <Button asChild size="lg" className="webzi-button px-8 font-semibold">
            <a href="#contact">
              Start Now
              <Zap className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default Index;
