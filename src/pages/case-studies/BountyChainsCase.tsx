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
      name: "BountyChains Case Study",
      item: "https://velocityweb.online/case-studies/bountychains",
    },
  ],
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "BountyChains - Web3 bounty platform case study",
  description: "Case study for a decentralized bounty platform built with modern frontend structure and clearer Web3 UX.",
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
};

const BountyChainsCase = () => (
  <SiteLayout>
    <PageSeo
      title="BountyChains Case Study | Web3 Platform Development | Velocity Web"
      description="BountyChains case study covering Web3 UX, wallet-aware frontend development, real-time product needs, and modern React delivery."
      canonical="https://velocityweb.online/case-studies/bountychains"
      keywords="web3 case study, blockchain platform case study, dapp frontend case study, bountychains"
      ogTitle="BountyChains Case Study | Web3 Platform Development"
      ogDescription="How Velocity Web approached Web3 UX, modern frontend delivery, and real-time platform behavior for BountyChains."
      schema={[breadcrumbs, caseStudySchema]}
    />

    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <p className="section-label">CASE STUDY</p>
          <h1 className="section-title">BountyChains - Web3 Bounty Platform</h1>
          <p className="max-w-3xl text-base leading-relaxed text-[#b7b7c6]">
            BountyChains was designed as a decentralized bounty platform for blockchain developers and contributors. The
            challenge was not just technical. It was experience design. Web3 platforms often assume the user already
            understands wallets, transactions, and platform logic. BountyChains needed a product that could support
            crypto-native behavior without feeling like it was only for insiders.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-[#c8a444] text-[#0a0a0f] hover:bg-[#d7b75d]">
              <Link to="/services/web3-development">Build a Web3 Platform</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#c8a444] bg-transparent text-[#e2cd94] hover:bg-[#c8a444] hover:text-[#0a0a0f]">
              <a href="/#portfolio">Back to Portfolio</a>
            </Button>
          </div>
        </div>

        <TiltCard className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-[#c8a444]">Project overview</p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#d0d0dc]">
            <li>Project type: Web3 platform</li>
            <li>Primary need: A custom platform for bounty posting and claiming</li>
            <li>Why custom: Wallet-aware UX and real-time states are not template-friendly</li>
            <li>Frontend focus: React, TypeScript, modern interaction design</li>
          </ul>
        </TiltCard>
      </div>
    </section>

    <section className="section-space">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="CHALLENGE"
          title="What made"
          accent="the build hard"
          subtext="The team needed Web3-specific functionality without the usual onboarding confusion and visual noise."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Web3 UX complexity</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              Crypto products often carry too much technical jargon and too little user guidance. That raises the cost of
              entry even for interested users.
            </p>
          </TiltCard>
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Accessibility for non-technical users</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              The platform needed to make blockchain behavior feel understandable enough for people who were not deep in
              Web3 product conventions.
            </p>
          </TiltCard>
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Real-time and trust-heavy interactions</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              Bounty posting, claiming, and state updates needed to feel dependable. In Web3, trust is part of the UX,
              not only part of the protocol.
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="SOLUTION"
          title="How the product was"
          accent="structured"
          subtext="The platform had to balance technical capability with calmer, more product-grade user flow."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">Modern React frontend</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#e6d29b]">Component-based product clarity</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              We focused on a modern React structure that could communicate platform actions clearly, support changing
              states cleanly, and keep the user interface feeling intentional rather than experimental.
            </p>
          </TiltCard>
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">Wallet-aware interaction flow</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#e6d29b]">Platform behavior designed around trust</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              Wallet connection, action states, and transaction-aware messaging were treated as first-class parts of the
              product experience instead of afterthoughts. That helped reduce ambiguity at key moments.
            </p>
          </TiltCard>
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">Real-time updates</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#e6d29b]">A community product needs live feedback</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              For bounty platforms, state freshness matters. Real-time behavior helps users trust the platform and makes
              the product feel active instead of static.
            </p>
          </TiltCard>
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">More approachable Web3 UX</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#e6d29b]">Fewer tech-demo vibes</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              Visual hierarchy, copy, and interface states were all shaped to make the product feel more like a usable
              platform and less like a proof-of-concept for insiders.
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="RESULTS"
          title="Why the product"
          accent="worked"
          subtext="The strongest outcome was not a vanity metric. It was a product flow that felt more usable and credible."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <TiltCard className="glass-card p-6">
            <p className="text-sm leading-relaxed text-[#b7b7c6]">
              BountyChains ended up with a clearer foundation for posting and claiming bounties, a more usable
              transaction-aware interface, and a stronger frontend system for future iteration. The product moved closer
              to what Web3 founders actually need: a platform that supports a new model without overwhelming the user at
              the same time.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              One of the most important lessons from the build was that Web3 community products still rise or fall on
              normal product quality. Real-time behavior matters. Clear flows matter. Better copy matters. Strong UI
              hierarchy matters. Web3 UX does not have to feel complex just because the backend model is new.
            </p>
          </TiltCard>
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Tech stack</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#d0d0dc]">
              <li>Frontend: React, TypeScript, Tailwind CSS</li>
              <li>Backend: Node.js, Firebase</li>
              <li>Web3 layer: Ethers.js or Web3.js style integration paths</li>
              <li>Hosting: Vercel</li>
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
          accent="takeaways"
          subtext="The best technical platform is still a product clarity challenge in disguise."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Web3 UX does not have to be intimidating</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              The more complex the underlying model, the more valuable interface clarity becomes. Good Web3 products
              teach through the interaction instead of assuming the user already knows the rules.
            </p>
          </TiltCard>
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Real-time behavior changes perception</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              Community platforms feel more trustworthy when the system responds visibly and consistently. Real-time is
              not only a feature. It is part of the product's credibility.
            </p>
          </TiltCard>
        </div>

        <TiltCard className="glass-card p-6">
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-[#c8a444] text-[#0a0a0f] hover:bg-[#d7b75d]">
              <Link to="/services/web3-development">
                Explore Web3 Development
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-[#c8a444] bg-transparent text-[#e2cd94] hover:bg-[#c8a444] hover:text-[#0a0a0f]">
              <Link to="/services/custom-web-development">Back to custom web development</Link>
            </Button>
          </div>
        </TiltCard>
      </div>
    </section>
  </SiteLayout>
);

export default BountyChainsCase;
