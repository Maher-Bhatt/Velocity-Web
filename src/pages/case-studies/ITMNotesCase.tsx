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
      name: "ITM Notes Case Study",
      item: "https://velocityweb.online/case-studies/itm-notes",
    },
  ],
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ITM Notes - student-first education platform case study",
  description: "Case study for a note-sharing platform designed around simple mobile-first access for university students.",
  sameAs: "https://itm-notes-new.vercel.app/",
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

const ITMNotesCase = () => (
  <SiteLayout>
    <PageSeo
      title="ITM Notes Case Study | Education Platform Development | Velocity Web"
      description="ITM Notes case study covering mobile-first education product design, note-sharing UX, and custom platform development for students."
      canonical="https://velocityweb.online/case-studies/itm-notes"
      keywords="education platform case study, edtech case study, note sharing platform, itm notes"
      ogTitle="ITM Notes Case Study | Education Platform Development"
      ogDescription="How Velocity Web built a student-first education platform focused on speed, simplicity, and mobile usability."
      schema={[breadcrumbs, caseStudySchema]}
    />

    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <p className="section-label">CASE STUDY</p>
          <h1 className="section-title">ITM Notes - Student-First Learning Platform</h1>
          <p className="max-w-3xl text-base leading-relaxed text-[#b7b7c6]">
            ITM Notes was built as a charity project around a very specific student problem: getting to useful notes
            quickly without fighting through clutter, unnecessary features, or heavyweight tools that were never made
            for the actual workflow. The project was not trying to become a giant learning management system. It was
            trying to become the simplest, fastest path between students and the material they needed.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-[#c8a444] text-[#0a0a0f] hover:bg-[#d7b75d]">
              <Link to="/services/education-platform-development">Build an Education Platform</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#c8a444] bg-transparent text-[#e2cd94] hover:bg-[#c8a444] hover:text-[#0a0a0f]">
              <a href="https://itm-notes-new.vercel.app/" target="_blank" rel="noopener noreferrer">
                View Live Project
              </a>
            </Button>
            <Button asChild variant="outline" className="border-[#c8a444] bg-transparent text-[#e2cd94] hover:bg-[#c8a444] hover:text-[#0a0a0f]">
              <a href="/#portfolio">Back to Portfolio</a>
            </Button>
          </div>
        </div>

        <TiltCard className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-[#c8a444]">Project overview</p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#d0d0dc]">
            <li>Project type: Student-focused education platform</li>
            <li>Primary need: Fast, simple note access</li>
            <li>Built as: Charity project</li>
            <li>Product mindset: Simplicity over feature overload</li>
          </ul>
        </TiltCard>
      </div>
    </section>

    <section className="section-space">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="CHALLENGE"
          title="What made this"
          accent="worth building"
          subtext="Students needed a tool that matched their actual workflow instead of forcing them into overbuilt general-purpose apps."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Fast note access mattered most</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              The core job was simple: help students find notes quickly. That made speed, searchability, and interface
              clarity more important than feature count.
            </p>
          </TiltCard>
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Existing tools were overkill</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              Students could already use Google Drive or Notion, but those tools were not purpose-built for a focused
              note-sharing workflow. The product needed to feel lighter and more direct.
            </p>
          </TiltCard>
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Mobile-first use was expected</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              Many students reach platforms from their phones. That made mobile navigation, fast loading, and a clear
              search-to-view path non-negotiable from the start.
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="SOLUTION"
          title="What the platform"
          accent="prioritized"
          subtext="Instead of chasing more features, the product focused on getting the core flow right."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">Lightweight React frontend</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#e6d29b]">A clear path from search to content</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              The frontend was designed to keep the note-discovery journey clean and fast. The platform did not need
              feature-heavy UI patterns. It needed fast understanding and low-friction browsing.
            </p>
          </TiltCard>
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">Simple UI choices</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#e6d29b]">Less interface, more usefulness</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              Search, view, and access were treated as the product. That focus helped the platform avoid visual clutter
              and gave students a workflow that felt easier than repurposing general tools.
            </p>
          </TiltCard>
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">Mobile-first layout behavior</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#e6d29b]">Critical for real student use</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              The platform was built to feel workable on smaller screens because that is how many students would access
              it most often. Fast load behavior and simple navigation were key parts of the product, not optional polish.
            </p>
          </TiltCard>
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">Custom product scope</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#e6d29b]">Only the functionality students needed</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              Because it was a custom build, the product could stay focused on the exact workflow instead of inheriting
              the complexity of a larger LMS or content platform.
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="RESULTS"
          title="What the build"
          accent="proved"
          subtext="The strongest result was showing that focused simplicity can outperform feature-heavy systems for a narrow audience."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <TiltCard className="glass-card p-6">
            <p className="text-sm leading-relaxed text-[#b7b7c6]">
              ITM Notes showed that a student-first product does not need a massive feature list to be useful. By
              narrowing the workflow to what students actually wanted, the platform became easier to adopt, easier to
              understand, and more appropriate for mobile use. The project reinforced a broader lesson: the cleanest
              product often wins when the audience has a very specific job to complete.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              It also proved the value of building around the real community. Community feedback matters more than
              theoretical feature roadmaps when the users are already telling you what the fastest path should look like.
            </p>
          </TiltCard>
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Tech stack</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#d0d0dc]">
              <li>Frontend: React, TypeScript</li>
              <li>Backend: Node.js, Express</li>
              <li>Database: MongoDB</li>
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
          subtext="The more practical the user need, the more valuable simple product thinking becomes."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Simplicity beats feature overload</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              The best education products do not always win by adding more tools. They win by making the core workflow
              more obvious and more dependable.
            </p>
          </TiltCard>
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Mobile-first cannot be an afterthought</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              For student products especially, mobile performance and usability are part of the product promise, not
              extra polish at the end.
            </p>
          </TiltCard>
        </div>

        <TiltCard className="glass-card p-6">
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-[#c8a444] text-[#0a0a0f] hover:bg-[#d7b75d]">
              <Link to="/services/education-platform-development">
                Explore Education Platform Development
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

export default ITMNotesCase;
