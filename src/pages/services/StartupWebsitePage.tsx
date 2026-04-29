import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageSeo } from "@/components/seo/PageSeo";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteLayout } from "@/components/site/SiteLayout";
import { TiltCard } from "@/components/site/TiltCard";

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://velocityweb.online" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://velocityweb.online/#services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Startup Website Development",
      item: "https://velocityweb.online/services/startup-website-development",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Startup Website Development",
  description: "Fast startup websites and MVP launch experiences built with modern frontend and backend tools.",
  provider: {
    "@type": "Organization",
    name: "Velocity Web",
    url: "https://velocityweb.online",
  },
  areaServed: {
    "@type": "Country",
    name: "IN",
  },
};

const StartupWebsitePage = () => (
  <SiteLayout>
    <PageSeo
      title="Startup Website Development: From MVP to Live in Days | Velocity Web"
      description="Startup website development for MVPs, launches, and product marketing sites. Fast iteration, clear UX, and modern React-based builds."
      canonical="https://velocityweb.online/services/startup-website-development"
      keywords="startup website development, MVP development, product launch website, startup website agency"
      ogTitle="Startup Website Development: From MVP to Live in Days"
      ogDescription="Fast startup websites and MVP launch experiences for founders that need traction, not delays."
      schema={[breadcrumbs, serviceSchema]}
    />

    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <p className="section-label">STARTUP WEBSITES</p>
          <h1 className="section-title">Startup Website Development: From MVP to Live in Days</h1>
          <p className="max-w-3xl text-base leading-relaxed text-[#b7b7c6]">
            Startup teams rarely need months of ceremony. They need a website or launch experience that helps them tell
            the story clearly, ship the first version quickly, and create room to iterate once real users respond. That
            is why startup website development is less about polish for its own sake and more about building the minimum
            strong version of the product narrative, conversion flow, and technical foundation.
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-[#b7b7c6]">
            Velocity Web helps founders go from concept to live site in days by narrowing the build around what the
            launch actually needs: positioning clarity, the right page architecture, clean frontend code, and a stack
            that does not fight future iteration. For startup teams, speed is not the opposite of quality. Speed is
            part of the quality requirement because learning starts only when the site is live.
          </p>
        </div>

        <TiltCard className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-[#b7ff3c]">Good fit if</p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#d0d0dc]">
            <li>You are launching an MVP or validating an idea</li>
            <li>You need a product site that can evolve fast</li>
            <li>You want React-based flexibility without big agency overhead</li>
            <li>You need a site live in days, not months</li>
          </ul>
        </TiltCard>
      </div>
    </section>

    <section className="section-space">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="WHY STARTUPS NEED SPEED"
          title="Startup launches need"
          accent="momentum"
          subtext="The first version of the site should teach the team something useful as quickly as possible."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Speed beats theoretical perfection</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              A startup site does not need every possible page, integration, and edge case solved before launch. It
              needs enough clarity, trust, and product explanation to support the first wave of users, signups, demos,
              or conversations. Once traffic starts landing, the team learns where friction really exists and what to
              improve next.
            </p>
          </TiltCard>
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Iteration needs a flexible stack</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              React and TypeScript make iteration easier because components, layout patterns, and data flows can evolve
              without the whole site becoming fragile. That matters when the startup changes messaging, pivots the offer,
              adds a waitlist, or upgrades from marketing site to product funnel.
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="PROCESS"
          title="How we build startup"
          accent="launch sites"
          subtext="The process is intentionally lean so founders spend time shipping instead of sitting through excessive delivery layers."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">Discovery</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#d7ff71]">Clarify the offer and the user action</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              We identify what the startup is selling, who it is selling to, and what action the site must support
              right now. That may be signups, demo bookings, waitlist entries, wallet connects, or feature education.
            </p>
          </TiltCard>
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">Design</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#d7ff71]">Product clarity over decoration</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              Startup sites need fast understanding. We build the page hierarchy, proof sections, and interface flow so
              visitors can understand the value proposition quickly and move to the next step without friction.
            </p>
          </TiltCard>
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">Build</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#d7ff71]">React, Node.js, and practical integrations</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              We build the site with a frontend and backend setup that supports the current launch while still leaving
              room for the product to grow. That may include forms, gated content, application states, dashboards, or
              analytics instrumentation depending on the project.
            </p>
          </TiltCard>
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">Deploy</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#d7ff71]">Get live, then improve from data</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              Once the site is live, we use actual behavior to decide what needs refinement. That is where startup teams
              gain their edge: by learning faster than teams that wait too long to launch.
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <section className="section-space pb-20">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="CASE STUDY"
          title="See how this applies to"
          accent="BountyChains"
          subtext="BountyChains is a strong example of a startup-style build where clarity, speed, and product behavior mattered more than generic marketing polish."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <TiltCard className="glass-card p-6">
            <p className="text-sm leading-relaxed text-[#b7b7c6]">
              BountyChains needed a frontend that could explain a Web3 concept without feeling like a crypto-only toy.
              That meant building with startup discipline: launch quickly, make the workflow understandable, and keep the
              system flexible enough to evolve. The case study shows how the project balanced product explanation,
              onboarding clarity, and modern technical execution.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild className="bg-[#b7ff3c] text-[#0a0a0f] hover:bg-[#d8ff73]">
                <Link to="/case-studies/bountychains">
                  View BountyChains Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#b7ff3c] bg-transparent text-[#d7ff71] hover:bg-[#b7ff3c] hover:text-[#0a0a0f]">
                <Link to="/services/custom-web-development">Explore custom web development</Link>
              </Button>
            </div>
          </TiltCard>

          <TiltCard className="glass-card p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-[#b7ff3c]">Related services</p>
            <ul className="mt-5 space-y-3 text-sm text-[#d0d0dc]">
              <li>
                <Link to="/services/custom-web-development" className="text-[#d7ff71] underline underline-offset-4">
                  Custom web development
                </Link>
              </li>
              <li>
                <Link to="/services/web3-development" className="text-[#d7ff71] underline underline-offset-4">
                  Web3 development
                </Link>
              </li>
              <li>
                <a href="/#contact" className="text-[#d7ff71] underline underline-offset-4">
                  Contact the team
                </a>
              </li>
            </ul>
          </TiltCard>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default StartupWebsitePage;
