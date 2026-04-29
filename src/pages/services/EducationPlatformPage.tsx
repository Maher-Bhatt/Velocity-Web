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
      name: "Education Platform Development",
      item: "https://velocityweb.online/services/education-platform-development",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Education Platform and EdTech Website Development",
  description: "Education platform development and EdTech website design for student, course, and community-first products.",
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

const EducationPlatformPage = () => (
  <SiteLayout>
    <PageSeo
      title="Education Platform & EdTech Website Development | Velocity Web"
      description="Education platform development for EdTech products, learning portals, and student-first experiences. Mobile-first, fast, and easy to use."
      canonical="https://velocityweb.online/services/education-platform-development"
      keywords="education platform development, edtech website, learning management system, student platform development"
      ogTitle="Education Platform & EdTech Website Development"
      ogDescription="Student-first education platform development with mobile-friendly UX and custom product structure."
      schema={[breadcrumbs, serviceSchema]}
    />

    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <p className="section-label">EDTECH DEVELOPMENT</p>
          <h1 className="section-title">Education Platform &amp; EdTech Website Development</h1>
          <p className="max-w-3xl text-base leading-relaxed text-[#b7b7c6]">
            Education platforms win when they feel simple. Students do not want to fight the interface to get to the
            material they need. Educators do not want to manage a bloated system full of features nobody uses. Velocity
            Web builds education products and EdTech websites that focus on clear access, strong mobile behavior, and
            the exact workflow that helps people learn or share material without friction.
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-[#b7b7c6]">
            The EdTech market keeps growing, but growth alone does not make a product useful. What matters is whether
            learners can log in, find the right content, track what they need, and come back without confusion.
            Education platform development should reduce the time between intent and access. That principle shapes our
            work from user management to navigation, search, content delivery, and mobile layout behavior.
          </p>
        </div>

        <TiltCard className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-[#b7ff3c]">Common requirements</p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#d0d0dc]">
            <li>User management for students, admins, or educators</li>
            <li>Searchable content delivery and fast retrieval</li>
            <li>Progress or status tracking where needed</li>
            <li>Mobile-first reading and navigation experience</li>
            <li>Lightweight UX instead of overbuilt LMS complexity</li>
          </ul>
        </TiltCard>
      </div>
    </section>

    <section className="section-space">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="MARKET FIT"
          title="Why EdTech products need"
          accent="product clarity"
          subtext="The best education products reduce cognitive load instead of increasing it."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Education users care about speed</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              Whether the audience is students, teachers, or communities, they usually arrive with a practical goal:
              find a file, view material, upload content, or continue a task. Slow pages, cluttered dashboards, and
              overcomplicated navigation damage trust quickly because they interrupt that intent.
            </p>
          </TiltCard>
          <TiltCard className="glass-card p-6">
            <h2 className="font-display text-2xl text-white">Mobile-first is non-negotiable</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">
              A large share of education traffic comes through phones, especially when students are checking notes,
              updates, or resources on the go. That means touch targets, readable typography, and lightweight
              interactions are essential parts of the product, not polish added later.
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="PLATFORM FEATURES"
          title="What a strong education"
          accent="platform needs"
          subtext="The right feature set depends on the audience, but the system still needs to feel clean and easy to use."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">User management</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#d7ff71]">Role-aware access and clarity</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              Some education products need student logins, moderator tools, or contributor flows. We design those
              states so the user understands what they can do immediately without being overloaded by administrative
              complexity.
            </p>
          </TiltCard>
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">Content delivery</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#d7ff71]">Find the right material quickly</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              Search, filters, categories, and clear page hierarchy are critical in note-sharing and learning products.
              Students should not need five clicks to locate the thing they came for.
            </p>
          </TiltCard>
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">Progress and status tracking</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#d7ff71]">Only when it serves the product</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              Not every education platform needs a full LMS. But where progress or activity status matters, we build it
              into the workflow in a way that feels supportive instead of bureaucratic.
            </p>
          </TiltCard>
          <TiltCard className="step-card p-6">
            <h2 className="font-display text-2xl text-white">Performance on mobile networks</h2>
            <h3 className="mt-4 text-lg font-semibold text-[#d7ff71]">Fast access is part of usability</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">
              In education, slow performance is not a minor annoyance. It is a barrier. We keep the interface lean so
              the product works well on real devices in real student conditions.
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <section className="section-space pb-20">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          label="CASE STUDY"
          title="See this in action with"
          accent="ITM Notes"
          subtext="ITM Notes shows how a simple, focused education product can beat more complicated tools for the actual audience."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <TiltCard className="glass-card p-6">
            <p className="text-sm leading-relaxed text-[#b7b7c6]">
              ITM Notes was built around a very clear student workflow: search, view, and access notes quickly. Instead
              of copying a bloated learning management model, the product kept the experience lightweight and mobile
              first. The case study explains how that decision shaped the interface, stack, and overall product value.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild className="bg-[#b7ff3c] text-[#0a0a0f] hover:bg-[#d8ff73]">
                <Link to="/case-studies/itm-notes">
                  View ITM Notes Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#b7ff3c] bg-transparent text-[#d7ff71] hover:bg-[#b7ff3c] hover:text-[#0a0a0f]">
                <Link to="/services/custom-web-development">Explore custom web development</Link>
              </Button>
            </div>
          </TiltCard>

          <TiltCard className="glass-card p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-[#b7ff3c]">Related internal links</p>
            <ul className="mt-5 space-y-3 text-sm text-[#d0d0dc]">
              <li>
                <Link to="/services/custom-web-development" className="text-[#d7ff71] underline underline-offset-4">
                  Custom web development
                </Link>
              </li>
              <li>
                <Link to="/services/startup-website-development" className="text-[#d7ff71] underline underline-offset-4">
                  Startup website development
                </Link>
              </li>
              <li>
                <a href="/#contact" className="text-[#d7ff71] underline underline-offset-4">
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

export default EducationPlatformPage;
