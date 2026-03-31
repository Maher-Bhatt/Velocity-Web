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
      name: "Custom Web Development",
      item: "https://velocityweb.online/services/custom-web-development",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Web Development Services for Startups & Brands",
  description: "Custom web development with React, Node.js, and TypeScript for startups, platforms, e-commerce brands, and education products.",
  provider: {
    "@type": "Organization",
    name: "Velocity Web",
    url: "https://velocityweb.online",
  },
  areaServed: {
    "@type": "Country",
    name: "IN",
  },
  hasOfferingDetails: {
    "@type": "OfferingDetails",
    price: "Custom Quote",
    priceCurrency: "INR",
  },
};

const CustomWebDevPage = () => (
  <SiteLayout>
    <PageSeo
      title="Custom Web Development Services for Startups & Brands | Velocity Web"
      description="Custom web development agency for startups, e-commerce brands, Web3 products, and education platforms. Built with React, Node.js, and TypeScript."
      canonical="https://velocityweb.online/services/custom-web-development"
      keywords="custom web development, web development agency, react development service, custom website development india"
      ogTitle="Custom Web Development Services for Startups & Brands"
      ogDescription="Custom web development for startups, e-commerce brands, Web3 products, and education platforms."
      schema={[breadcrumbs, serviceSchema]}
    />

    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <p className="section-label">CUSTOM WEB DEVELOPMENT</p>
          <h1 className="section-title">Custom Web Development Services for Startups &amp; Brands</h1>
          <p className="max-w-3xl text-base leading-relaxed text-[#b7b7c6]">
            Custom web development means building the website or platform around your business model instead of forcing
            your business into a template. For some teams that means a storefront with product logic that templates
            cannot handle cleanly. For others it means a Web3 platform that needs wallet-aware UX, real-time flows, and
            modern frontend architecture. For education and startup products, it often means getting exactly the
            workflows users need without dragging along a bloated system that slows the team down.
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-[#b7b7c6]">
            Velocity Web builds these systems with React, Node.js, and TypeScript so teams can launch quickly without
            sacrificing long-term flexibility. That stack gives us a strong balance between speed, developer quality,
            interface control, and maintainability. When the product needs a custom flow, a custom CMS layer, a custom
            integration, or simply a cleaner experience than an off-the-shelf template can offer, custom development is
            usually the right answer.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-[#c8a444] text-[#0a0a0f] hover:bg-[#d7b75d]">
              <a href="/#contact">Let&apos;s build your site</a>
            </Button>
            <Button asChild variant="outline" className="border-[#c8a444] bg-transparent text-[#e2cd94] hover:bg-[#c8a444] hover:text-[#0a0a0f]">
              <Link to="/case-studies/ztees">See project proof</Link>
            </Button>
          </div>
        </div>

        <TiltCard className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-[#c8a444]">Why teams hire us</p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#d0d0dc]">
            <li>They need something stronger than a template</li>
            <li>They want React and TypeScript without agency bloat</li>
            <li>They need launch speed without generic design</li>
            <li>They want a site that can scale into a real product</li>
            <li>They need the build to support SEO, speed, and usability together</li>
          </ul>
        </TiltCard>
      </div>
    </section>

    <section className="section-space">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="WHY CUSTOM"
          title="What is custom"
          accent="web development?"
          subtext="It is the difference between adapting your brand to a tool and adapting the tool to your business."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Why not templates?</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              Templates are useful for speed, but they usually break down when the product needs unique workflows,
              platform logic, stronger content architecture, or more deliberate conversion paths. The problem is not
              that templates look bad. The problem is that they flatten strategy. A custom build lets the layout, data,
              navigation, and interactions match the actual business goal instead of the theme marketplace.
            </p>
          </TiltCard>

          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Why custom over off-the-shelf tools?</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              Off-the-shelf tools can be fine when the requirements are simple, but they start to fight the product
              once the site needs product-specific workflows, user dashboards, multi-step flows, custom backend logic,
              or platform behavior that goes beyond a standard setup. Custom development gives you far more room to
              scale and cleaner ownership over how the site evolves.
            </p>
          </TiltCard>

          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Built for future change</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              A startup website often becomes a product marketing site, then a dashboard entry point, then part of a
              much bigger system. Custom development gives you an architecture that can keep growing instead of forcing
              a rebuild every time the business adds new features or audiences.
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="TECH STACK"
          title="React, Node.js, and"
          accent="TypeScript"
          subtext="We use a modern stack that is fast to build with, stable to maintain, and flexible enough for product-grade work."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">React for fast, flexible interfaces</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#e6d29b]">Component-driven UX without layout repetition</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              React gives us the control to design interfaces around the exact product flow the user needs. Whether that
              is a storefront, an MVP landing flow, a dashboard shell, or a content-heavy education experience, we can
              keep the interface modular while still making it feel custom and branded.
            </p>
          </TiltCard>

          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">Node.js for product logic and integrations</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#e6d29b]">APIs, forms, and backend behavior that fits the business</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              When the project needs server-side processing, database access, or custom APIs, Node.js gives us the
              ability to keep the frontend and backend aligned. That matters when forms need to become workflows, or
              when a marketing site needs to evolve into a proper product.
            </p>
          </TiltCard>

          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">TypeScript for cleaner long-term builds</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#e6d29b]">Less guesswork, safer refactors</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              TypeScript helps us keep interfaces, data structures, and integrations more predictable. That means fewer
              hidden breakpoints during iteration, safer growth over time, and a codebase that is easier to maintain
              after launch.
            </p>
          </TiltCard>

          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">SEO and speed are part of the build</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#e6d29b]">Not something bolted on later</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              We treat metadata, heading hierarchy, internal links, page structure, and performance as build-level
              decisions. That is especially important for startups and brands that want the website to help with
              discovery, not just presentation.
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="USE CASES"
          title="Where custom development"
          accent="fits best"
          subtext="Different businesses need different systems. Our job is to choose the right level of custom work for the actual goal."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">E-commerce brands</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              Some stores need more than a standard theme. If the product discovery flow, data model, or future feature
              roadmap goes beyond an off-the-shelf storefront, custom development becomes the better long-term path.
              The
              <Link to="/case-studies/ztees" className="ml-1 text-[#e6d29b] underline underline-offset-4">
                Ztees case study
              </Link>
              shows what that speed-to-market mindset can look like in practice.
            </p>
          </TiltCard>

          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Web3 and platform products</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              Wallet flows, account states, real-time updates, and trust-heavy onboarding are not things most template
              systems handle well. That is why projects like
              <Link to="/case-studies/bountychains" className="ml-1 text-[#e6d29b] underline underline-offset-4">
                BountyChains
              </Link>
              benefit from a product-minded frontend architecture from the start.
            </p>
          </TiltCard>

          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Education and community tools</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              Student or community platforms usually win on clarity, speed, and mobile-first access. For those
              products, custom development is less about novelty and more about making the workflow feel obvious. That
              is exactly what we highlight in the
              <Link to="/case-studies/itm-notes" className="ml-1 text-[#e6d29b] underline underline-offset-4">
                ITM Notes case study
              </Link>
              .
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <section className="section-space pb-20">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="PROCESS"
          title="Discovery, design, build,"
          accent="deploy"
          subtext="We keep the process sharp because most clients need clarity and execution more than ceremony."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <TiltCard className="glass-card p-6">
            <p className="text-sm leading-relaxed text-[#b7b7c6]">
              Discovery focuses on what the business actually needs: what the user must do, what the offer is, what the
              pages need to accomplish, and where the system will likely grow next. Design then turns those goals into a
              conversion-aware interface, not just a pretty mockup. Build turns the chosen direction into a performant
              system using React, Node.js, and TypeScript where appropriate. Deploy covers QA, launch readiness, and the
              foundation for future SEO and performance work.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              If you already know your next project is a startup launch, a Web3 platform, or an education product, you
              can jump directly into the more specific service pages below and choose the path that fits best.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild className="bg-[#c8a444] text-[#0a0a0f] hover:bg-[#d7b75d]">
                <a href="/#contact">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-[#c8a444] bg-transparent text-[#e2cd94] hover:bg-[#c8a444] hover:text-[#0a0a0f]">
                <Link to="/services/startup-website-development">Explore startup websites</Link>
              </Button>
            </div>
          </TiltCard>

          <TiltCard className="glass-card p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-[#c8a444]">Related services</p>
            <ul className="mt-5 space-y-3 text-sm text-[#d0d0dc]">
              <li>
                <Link to="/services/startup-website-development" className="text-[#e6d29b] underline underline-offset-4">
                  Startup website development
                </Link>
              </li>
              <li>
                <Link to="/services/web3-development" className="text-[#e6d29b] underline underline-offset-4">
                  Web3 development
                </Link>
              </li>
              <li>
                <Link to="/services/education-platform-development" className="text-[#e6d29b] underline underline-offset-4">
                  Education platform development
                </Link>
              </li>
            </ul>
          </TiltCard>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default CustomWebDevPage;
