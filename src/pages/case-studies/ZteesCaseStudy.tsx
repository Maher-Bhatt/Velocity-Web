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
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://velocityweb.online/#portfolio" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Ztees Case Study",
      item: "https://velocityweb.online/case-studies/ztees",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long did it take to build Ztees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We delivered the complete custom-built store in 48 hours.",
      },
    },
    {
      "@type": "Question",
      name: "What was the sales increase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ztees saw a 240% increase in online sales within the first month.",
      },
    },
  ],
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ztees: E-Commerce Platform Built in 48 Hours",
  description: "Custom-built e-commerce platform for D2C growth with conversion-focused product structure and launch speed.",
  author: {
    "@type": "Organization",
    name: "Velocity Web",
  },
  publisher: {
    "@type": "Organization",
    name: "Velocity Web",
    logo: {
      "@type": "ImageObject",
      url: "https://velocityweb.online/logo.png",
    },
  },
  about: ["React", "Node.js", "PostgreSQL", "Stripe API"],
};

const ZteesCaseStudy = () => (
  <SiteLayout>
    <PageSeo
      title="Ztees: E-Commerce Platform Built in 48 Hours | Velocity Web"
      description="Custom-built e-commerce platform case study showing how Ztees launched fast, improved conversion, and supported D2C growth."
      canonical="https://velocityweb.online/case-studies/ztees"
      keywords="e-commerce platform case study, custom ecommerce case study, ztees case study, D2C store development"
      ogTitle="Ztees: E-Commerce Platform Built in 48 Hours"
      ogDescription="A custom-built e-commerce platform case study covering launch speed, conversion thinking, and future scalability."
      schema={[breadcrumbs, faqSchema, caseStudySchema]}
    />

    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <p className="section-label">CASE STUDY</p>
          <h1 className="section-title">Ztees: E-Commerce Platform Built in 48 Hours</h1>
          <p className="max-w-3xl text-base leading-relaxed text-[#b7b7c6]">
            Ztees needed more than a theme installation. The brand needed a custom-built e-commerce platform designed
            for D2C growth, one that could look credible quickly, showcase apparel clearly, and support future
            improvements without being boxed in by a generic template. Velocity Web rebuilt the shopping experience
            around speed, product clarity, and conversion-first structure so the launch could happen fast without
            feeling disposable.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-[#b7ff3c] text-[#0a0a0f] hover:bg-[#d8ff73]">
              <Link to="/services/custom-web-development">Build Your E-Commerce Platform</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#b7ff3c] bg-transparent text-[#d7ff71] hover:bg-[#b7ff3c] hover:text-[#0a0a0f]">
              <a href="/#portfolio">Back to Portfolio</a>
            </Button>
          </div>
        </div>

        <TiltCard className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-[#b7ff3c]">Headline metrics</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-xl border border-[#b7ff3c22] bg-[#111119] p-4">
              <p className="font-display text-3xl text-white">240%</p>
              <p className="mt-1 text-sm text-[#a9a9b8]">Sales increase</p>
            </div>
            <div className="rounded-xl border border-[#b7ff3c22] bg-[#111119] p-4">
              <p className="font-display text-3xl text-white">3.2%</p>
              <p className="mt-1 text-sm text-[#a9a9b8]">Conversion rate</p>
            </div>
            <div className="rounded-xl border border-[#b7ff3c22] bg-[#111119] p-4">
              <p className="font-display text-3xl text-white">48 hours</p>
              <p className="mt-1 text-sm text-[#a9a9b8]">Time to launch</p>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>

    <section className="section-space">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="PROBLEM"
          title="What Ztees"
          accent="was facing"
          subtext="The brand needed to launch quickly, but speed alone would not help if the store still felt generic or hard to shop."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Limited trust on first visit</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              New apparel brands need legitimacy fast. Without a polished storefront, visitors hesitate to trust the
              product quality, checkout flow, or overall seriousness of the business.
            </p>
          </TiltCard>
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Product presentation needed work</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              Clothing products depend heavily on visual confidence. The store needed a cleaner structure and richer
              product interaction so customers could understand what they were buying more quickly.
            </p>
          </TiltCard>
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Fast launch pressure</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              The founder needed the store live quickly to support active promotion. That meant the build had to be
              fast, but the user experience still had to feel intentional and conversion-ready.
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="SOLUTION"
          title="What we"
          accent="built"
          subtext="The solution focused on storefront clarity, responsive shopping UX, and a custom architecture that could grow beyond a template setup."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">A custom-built e-commerce platform</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#d7ff71]">Built for a fast, trust-building first impression</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              We structured the homepage, collection flow, and product detail pages to make the brand feel more
              established from the first second. That meant stronger hierarchy, clearer CTAs, better spacing, and a
              layout that looked premium even on smaller mobile screens. By taking the custom-build mindset, the store
              could be shaped around the exact merchandising and conversion logic the brand needed instead of inheriting
              generic template assumptions.
            </p>
          </TiltCard>

          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">Front and back product image flip effects</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#d7ff71]">A more useful way to browse apparel</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              We introduced front-back image interaction so customers could understand garment details faster without
              needing a heavy or confusing gallery experience. That helped the browsing flow feel more tactile and more
              informative.
            </p>
          </TiltCard>

          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">WhatsApp-friendly commerce flow</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#d7ff71]">Support for direct customer conversations</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              Because the brand needed a practical ordering path, we aligned the store experience with a WhatsApp-aware
              sales flow. That kept the path familiar for the audience and reduced hesitation during the buying process.
            </p>
          </TiltCard>

          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">Responsive QA and launch polish</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#d7ff71]">Ship fast without looking rushed</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              The final stage focused on mobile layout behavior, CTA visibility, visual consistency, and the small
              details that make a storefront feel trustworthy. That polish mattered because the launch speed only had
              value if the store could convert from day one.
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="WHY CUSTOM"
          title="Why custom over"
          accent="a template?"
          subtext="The real advantage was not novelty. It was being able to build the storefront around the brand and its future growth path."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">More control over product experience</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              Ztees needed product presentation that could feel branded immediately while still staying simple to browse.
              A custom build approach allowed us to shape the storefront around apparel browsing behavior instead of
              forcing the brand into a pre-made flow.
            </p>
          </TiltCard>
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Stronger future scalability</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              The store needed a launch now, but it also needed room for future expansion. A custom-first mindset made
              it easier to think about roadmap features, deeper analytics, and broader storefront behavior later without
              treating the launch version as a dead-end setup.
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="RESULTS"
          title="What happened"
          accent="after launch"
          subtext="The store gave the founder a stronger brand presence and a more practical selling tool immediately."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Results summary</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              Within the first month, Ztees saw a 240% increase in online sales, a 3.2% conversion rate, and a store
              launch completed in 48 hours. Those numbers matter because they reflect the practical impact of a better
              shopping experience. The store did not only look stronger. It made it easier for customers to browse,
              understand the product, and move toward purchase with less hesitation.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              From an SEO and conversion perspective, the big lesson is that a fast launch can still be effective when
              the build is structured around buying behavior rather than decoration. Strong product presentation, cleaner
              mobile UX, and a deliberate flow can create outsized impact even before a brand has years of social proof.
            </p>
          </TiltCard>

          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Tech stack used</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#d0d0dc]">
              <li>Frontend: React</li>
              <li>Backend: Node.js</li>
              <li>Database: PostgreSQL</li>
              <li>Payments: Stripe API</li>
              <li>Responsive QA and conversion-focused UX planning</li>
            </ul>
          </TiltCard>
        </div>
      </div>
    </section>

    <section className="section-space pb-20">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="LEARNINGS"
          title="Key"
          accent="learnings"
          subtext="The best case studies translate one project into principles that help the next build perform better."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Lesson 1: Speed works when structure is right</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              A fast launch is only valuable when the product presentation, mobile UX, and core purchase flow are
              handled intentionally. That is why our
              <Link to="/services/custom-web-development" className="ml-1 text-[#d7ff71] underline underline-offset-4">
                custom web development service
              </Link>
              starts with structure before surface.
            </p>
          </TiltCard>

          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Lesson 2: Conversion strategy should be designed in early</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              Once the base storefront is strong, performance improvements become easier to prioritize and implement.
              The Ztees build reinforced how much product hierarchy, trust, and CTA clarity matter before the first
              campaign even goes live. That is why our
              <Link to="/services/custom-web-development" className="ml-1 text-[#d7ff71] underline underline-offset-4">
                custom web development service
              </Link>
              bakes in product hierarchy, trust, and CTA planning early so brands can keep improving without
              rebuilding everything from scratch.
            </p>
          </TiltCard>
        </div>

        <TiltCard className="glass-card p-6">
          <p className="text-sm leading-relaxed text-[#b7b7c6]">
            If you want an e-commerce platform that looks credible, launches fast, and leaves room for future roadmap
            work, the Ztees build is the model to look at. And if you want that same custom approach applied to your
            own product, the next step is simple.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button asChild className="bg-[#b7ff3c] text-[#0a0a0f] hover:bg-[#d8ff73]">
              <Link to="/services/custom-web-development">
                Let&apos;s build your platform
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-[#b7ff3c] bg-transparent text-[#d7ff71] hover:bg-[#b7ff3c] hover:text-[#0a0a0f]">
              <a href="/#portfolio">Back to portfolio</a>
            </Button>
          </div>
        </TiltCard>
      </div>
    </section>
  </SiteLayout>
);

export default ZteesCaseStudy;
