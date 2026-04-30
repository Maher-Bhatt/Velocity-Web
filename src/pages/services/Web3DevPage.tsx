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
      name: "Web3 Development",
      item: "https://velocityweb.online/services/web3-development",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web3 and Blockchain Development",
  description: "Frontend-heavy Web3 and blockchain product development with modern UX and React-based delivery.",
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

const Web3DevPage = () => (
  <SiteLayout>
    <PageSeo
      title="Web3 & Blockchain Development: Building Tomorrow's Internet | Velocity Web"
      description="Web3 development for blockchain products, dApp frontends, wallet flows, and crypto platforms. Built with React and product-grade UX."
      canonical="https://velocityweb.online/services/web3-development"
      keywords="web3 development, blockchain website, dapp frontend development, crypto platform development"
      ogTitle="Web3 & Blockchain Development: Building Tomorrow's Internet"
      ogDescription="Modern Web3 product development with better UX, clearer onboarding, and production-ready frontend execution."
      schema={[breadcrumbs, serviceSchema]}
    />

    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <p className="section-label">WEB3 DEVELOPMENT</p>
          <h1 className="section-title">Web3 &amp; Blockchain Development: Building Tomorrow&apos;s Internet</h1>
          <p className="max-w-3xl text-base leading-relaxed text-[#b7b7c6]">
            Web3 products often lose users before the product has a fair chance because the interface feels confusing,
            over-engineered, or written only for people who already know the ecosystem. Velocity Web helps teams build
            blockchain-facing websites and product frontends that feel modern, usable, and easier to understand. That
            means translating technical functionality into a smoother human experience.
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-[#b7b7c6]">
            For founders, Web3 development is not only about wallet connections or token logic. It is about trust,
            clarity, onboarding, and reducing the intimidation factor that turns mainstream users away. We focus heavily
            on frontend experience because a technically strong protocol still fails commercially if the product feels
            like a developer-only demo instead of a real platform.
          </p>
        </div>

        <TiltCard className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-[#6366f1]">What we help with</p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#4b4b6b]">
            <li>Web3 landing sites and product-facing websites</li>
            <li>dApp frontends with wallet-aware states</li>
            <li>Crypto platform UI and UX simplification</li>
            <li>Frontend structure for blockchain workflows</li>
            <li>Modern React interfaces for technical products</li>
          </ul>
        </TiltCard>
      </div>
    </section>

    <section className="section-space">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="WHAT IS WEB3"
          title="Explaining Web3 to"
          accent="non-technical founders"
          subtext="A founder does not need to be deep in protocol mechanics to understand whether the product needs Web3-specific UX."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-[#0f0f1a]">Web3 is still a product experience problem</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              At a high level, Web3 products often involve blockchain-backed ownership, wallet-based identity, token or
              crypto transactions, and decentralized participation. But users do not experience that as architecture.
              They experience it as screens, buttons, wait states, approvals, and uncertainty. Good Web3 development
              turns those moving parts into something understandable enough for real usage.
            </p>
          </TiltCard>
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-[#0f0f1a]">UX matters more here, not less</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              Technical teams sometimes assume users will tolerate confusing UX because the product is advanced. In
              practice, the opposite is true. The more novel the product is, the more deliberate the interface must be.
              That is why we treat Web3 frontend development as a trust and education challenge, not only an interface
              implementation task.
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="DELIVERY"
          title="How we approach Web3"
          accent="product builds"
          subtext="The frontend has to make blockchain complexity feel calmer, safer, and easier to act on."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-[#0f0f1a]">Frontend development for blockchain products</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#818cf8]">React interfaces around state-heavy flows</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              Wallet state, transaction state, pending actions, and chain-specific behavior all shape how the user
              experiences the product. We use modern frontend patterns to make those states feel visible and manageable
              instead of confusing or unpredictable.
            </p>
          </TiltCard>
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-[#0f0f1a]">UI and UX for crypto platforms</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#818cf8]">Reduce fear and unnecessary jargon</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              We simplify terminology, explain actions at the moment they matter, and structure the interface so users
              are not guessing what a wallet prompt means or what happens next. Better copy and hierarchy reduce drop
              off before users even try the product.
            </p>
          </TiltCard>
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-[#0f0f1a]">Smart contract and wallet integration readiness</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#818cf8]">Frontend prepared for real product behavior</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              When the product needs to integrate with wallet flows or contract-driven states, the UI must be designed
              for that from the start. We plan the screen states, success and failure handling, and progressive trust
              cues so the experience feels product-ready rather than patched together.
            </p>
          </TiltCard>
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-[#0f0f1a]">SEO and speed still matter</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#818cf8]">Web3 products still need discoverability</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              Even highly technical products need marketing pages, page speed discipline, and strong content structure
              so users can find and understand the offer. That is why our Web3 work still connects back to broader
              custom web development principles.
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <section className="section-space pb-20">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="CASE STUDY"
          title="See this approach in"
          accent="BountyChains"
          subtext="BountyChains needed a Web3-specific interface without the usual product complexity overload."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <TiltCard className="glass-card p-6">
            <p className="text-sm leading-relaxed text-[#b7b7c6]">
              BountyChains is our clearest example of Web3 frontend thinking applied to a real platform concept. The
              build had to support a blockchain-oriented workflow while still staying readable for users who were not
              living on technical documentation every day. The case study explains how the interface, wallet-aware
              experience, and real-time states were structured around usability instead of noise.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild className="bg-[#6366f1] text-[#0a0a0f] hover:bg-[#d8ff73]">
                <Link to="/case-studies/bountychains">
                  View BountyChains Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#6366f1] bg-transparent text-[#818cf8] hover:bg-[#6366f1] hover:text-[#0a0a0f]">
                <Link to="/services/custom-web-development">Back to custom web development</Link>
              </Button>
            </div>
          </TiltCard>

          <TiltCard className="glass-card p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-[#6366f1]">Related internal links</p>
            <ul className="mt-5 space-y-3 text-sm text-[#4b4b6b]">
              <li>
                <Link to="/services/custom-web-development" className="text-[#818cf8] underline underline-offset-4">
                  Custom web development
                </Link>
              </li>
              <li>
                <Link to="/services/startup-website-development" className="text-[#818cf8] underline underline-offset-4">
                  Startup website development
                </Link>
              </li>
              <li>
                <a href="/#contact" className="text-[#818cf8] underline underline-offset-4">
                  Contact Velocity Web
                </a>
              </li>
            </ul>
          </TiltCard>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default Web3DevPage;
