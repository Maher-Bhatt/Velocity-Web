import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
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
    title: "🛠️ Custom Website Development",
    description:
      "Built from scratch for your brand. E-commerce stores, landing pages, web apps. Modern, fast, conversion-focused.",
    path: "/services/custom-web-development",
  },
  {
    title: "⚡ Startup MVP Development",
    description:
      "Launch your product fast. Clean, modern websites & apps. Built for startups. Days, not months.",
    path: "/services/startup-website-development",
  },
  {
    title: "🌐 Web3 & Crypto Platforms",
    description:
      "Build on blockchain. Wallet integration, smart contract frontends, decentralized apps. Web3-native design.",
    path: "/services/web3-development",
  },
  {
    title: "📚 Education Platforms",
    description:
      "Learning platforms, student apps, course websites. Custom built for education. Mobile-first.",
    path: "/services/education-platform-development",
  },
  {
    title: "🌍 Hosting & Domains",
    description:
      "We handle deployment, hosting, SSL, domain management. Monthly or yearly. You focus on your business.",
  },
];

const projects = [
  {
    name: "Ztees",
    category: "E-Commerce Platform",
    url: "https://ztees.store",
    description: "Custom-built online store. 240% sales increase. Launched in 48 hours.",
    caseStudyUrl: "/case-studies/ztees",
    servicePath: "/services/custom-web-development",
    metrics: {
      salesIncrease: "240%",
      conversionRate: "3.2%",
      timeToLaunch: "48 hours",
    },
  },
  {
    name: "BountyChain",
    category: "Web3 Platform",
    url: "https://bountychain-three.vercel.app/",
    description: "Decentralized bounty platform. Wallet integration. Real-time updates.",
    caseStudyUrl: "/case-studies/bountychains",
    servicePath: "/services/web3-development",
  },
  {
    name: "ITM Notes",
    category: "Education Platform",
    url: "https://itm-notes.vercel.app/",
    description: "Student-first note platform. Mobile-first. Built as charity project.",
    caseStudyUrl: "/case-studies/itm-notes",
    servicePath: "/services/education-platform-development",
  },
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
  },
];

const Index = () => (
    <SiteLayout>
      <PageSeo
        title="Custom Web Development Agency India | Fast, High-Converting Websites | Velocity Web"
        description="Custom web development for startups, e-commerce brands, Web3 platforms, and education products. Built fast with React and Node.js."
        canonical="https://velocityweb.online"
        keywords="custom web development, web development agency india, react development service, startup website development, web3 development"
        ogTitle="Custom Web Development Agency | Velocity Web"
        ogDescription="Fast, modern web development for startups, brands, and platforms. E-commerce, Web3, SaaS, education."
        schema={pageSchema}
      />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-[#c8a4443d] bg-[#13131c] px-4 py-2 text-sm text-[#e6d3a1]">
              Average turnaround: 1-2 weeks
            </div>
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                <span className="gold-gradient-text">Custom Websites &amp; Web Apps</span> Built Fast
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-[#b9b9c8] sm:text-lg">
                E-commerce sites, web applications, startup MVPs. Built with React &amp; Node.js. Hosting &amp; domain
                included.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-[#c8a444] text-[#0a0a0f] hover:bg-[#d7b75d]">
                <Link to="/services/custom-web-development">Build My Website</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#c8a444] bg-transparent text-[#e2cd94] hover:bg-[#c8a444] hover:text-[#0a0a0f]">
                <a href="#portfolio">See Our Work</a>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: "React", label: "Primary frontend stack" },
                { value: "Node.js", label: "Backend-ready builds" },
                { value: "Days", label: "Fast launch mindset" },
              ].map((item) => (
                <TiltCard key={item.label} className="glass-card px-4 py-5">
                  <p className="font-display text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-[#a5a5b4]">{item.label}</p>
                </TiltCard>
              ))}
            </div>
          </div>

          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <TiltCard className="floating-hero-card glass-card p-7">
              <div className="hero-card-layer hero-card-layer-one" />
              <div className="hero-card-layer hero-card-layer-two" />
              <div className="relative z-10 space-y-5">
                <p className="text-xs font-semibold tracking-[0.3em] text-[#bfa66a]">LIVE PROJECT</p>
                <h2 className="font-display text-2xl text-white">Ztees - ztees.store</h2>
                <ul className="space-y-3 text-sm text-[#cbcbd6]">
                  <li>E-Commerce + WhatsApp ordering</li>
                  <li>Front/back image flip effects</li>
                  <li>Delivered in under 2 days</li>
                </ul>
                <Link to="/case-studies/ztees" className="inline-flex items-center gap-2 text-sm font-medium text-[#e6d29b]">
                  Read the full case study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      <section id="services" className="section-space">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
          <SectionHeading
            label="WHAT WE DO"
            title="Services That"
            accent="Actually Matter"
            subtext="We focus on the services that help startups and brands launch faster, explain products clearly, and scale beyond template limitations."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <TiltCard key={service.title} className="glass-card h-full p-6">
                <h3 className="font-display text-xl text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">{service.description}</p>
                {service.path ? (
                  <Link to={service.path} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#e6d29b]">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <a href="/#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#e6d29b]">
                    Ask About Hosting
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-space">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
          <SectionHeading
            label="OUR WORK"
            title="Projects We're"
            accent="Proud Of"
            subtext="Real websites, for real people. No templates - every project is built from scratch."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <TiltCard key={project.name} className="glass-card h-full p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[#bfa66a]">{project.category}</p>
                <h3 className="mt-3 font-display text-2xl text-white">{project.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">{project.description}</p>
                {"metrics" in project ? (
                  <div className="mt-5 grid gap-3">
                    <div className="rounded-xl border border-[#c8a44422] bg-[#111119] p-3 text-sm text-[#d0d0dc]">
                      Sales increase: {project.metrics.salesIncrease}
                    </div>
                    <div className="rounded-xl border border-[#c8a44422] bg-[#111119] p-3 text-sm text-[#d0d0dc]">
                      Conversion rate: {project.metrics.conversionRate}
                    </div>
                    <div className="rounded-xl border border-[#c8a44422] bg-[#111119] p-3 text-sm text-[#d0d0dc]">
                      Time to launch: {project.metrics.timeToLaunch}
                    </div>
                  </div>
                ) : null}
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  {"caseStudyUrl" in project ? (
                    <Link to={project.caseStudyUrl} className="inline-flex items-center gap-2 text-[#e6d29b]">
                      Read Full Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                  {"servicePath" in project ? (
                    <Link to={project.servicePath} className="inline-flex items-center gap-2 text-[#e6d29b]">
                      Explore Related Service
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#d0d0dc]">
                    Visit Live Site
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
    </SiteLayout>
);

export default Index;
