import { useState, type CSSProperties, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TiltCard } from "@/components/site/TiltCard";
import { company } from "@/lib/site-data";

const testimonials = [
  {
    name: "Rudra Pandya",
    role: "Founder of Ztees",
    quote:
      "They delivered our entire store website in roughly 2 working days. It is incredibly polished, and we are already seeing noticeable growth after launching the website.",
  },
  {
    name: "Harshal Patel",
    role: "Student, ITM SLS Baroda University",
    quote:
      "I randomly texted Velocity Web asking them to make a note-sharing website for CETS. They actually did it as a charity project, and I am so happy with what they built.",
  },
];

const founders = [
  {
    name: "Maher Bhatt",
    role: "Co-Founder · Lead Developer",
    imageWebp: "/team/maher-bhatt.webp",
    imageFallback: "/team/maher-bhatt.jpg",
    shortBio: "Full-stack developer, cybersecurity enthusiast, and the one who writes the most code. Builds every client project hands-on with React, TypeScript, GSAP, and Web3.",
    fullBio: "Maher is the lead developer and co-founder of Velocity Web. A 2nd-year B.Tech Computer Science student at ITM SLS Baroda University, he builds every client project from scratch — React, TypeScript, GSAP scroll animations, Three.js 3D elements, and Web3 smart contract frontends. Outside of client work, he actively competes in CTF competitions and bug bounty programs, and has run OSINT & cybersecurity awareness seminars at schools.",
    stats: [
      { value: "24", label: "Google Cloud badges" },
      { value: "7–8", label: "CTF competitions" },
      { value: "2+", label: "Paying clients" },
    ],
    achievements: [
      "2nd Place — Bug Bounty, Security BSides Vadodara (Barracks Technologies)",
      "4th Place — CTF, Security BSides Vadodara · Only winners from ITM SLS Baroda University",
      "Top 1,000 of 3,000 teams — Hack AI Thon national AI hackathon (HackWithIndia)",
      "Built & deployed CertChain NFT minter on Ethereum Sepolia in a 4-hour hackathon sprint",
      "OSINT & Cybersecurity Seminar @ Jawahar Navodaya Vidyalaya — live MITM & Burp Suite demo",
      "Outskill Generative AI Mastermind — 16-hour intensive, certified by Vaibhav Sisinty",
      "Python Development Intern — QSkill (Squarcell Resource India Pvt. Ltd), Apr–May 2026",
    ],
    skills: ["React", "TypeScript", "Three.js", "GSAP", "Framer Motion", "Vite", "Solidity", "Ethers.js", "Python", "Node.js", "Tailwind CSS", "Burp Suite", "OSINT", "GCP", "Vertex AI", "Gemini API"],
    links: [
      { label: "maherbhatt.me", href: "https://maherbhatt.me" },
      { label: "GitHub", href: "https://github.com/Maher-Bhatt" },
      { label: "LinkedIn", href: "https://linkedin.com/in/maher-bhatt-206035362" },
    ],
  },
  {
    name: "Anurag Pandey",
    role: "Co-Founder · Web Developer",
    imageWebp: "/team/anurag-pandey.webp",
    imageFallback: "/team/anurag-pandey.jpeg",
    shortBio: "The one who catches what everyone else misses. Anurag owns frontend quality, cross-device behaviour, and the final polish layer before every launch.",
    fullBio: "Anurag is a co-founder and web developer at Velocity Web. He is the team's quality anchor — responsible for making sure every component looks right across devices, every interaction feels smooth, and every launch actually holds up under real users. He co-built the ITM Notes platform that became the go-to study resource for hundreds of B.Tech students at ITM SLS Baroda University, and brings that same thoroughness to every client project.",
    stats: [
      { value: "500+", label: "Students on ITM Notes" },
      { value: "100%", label: "Mobile-first delivery" },
      { value: "3+", label: "Production projects" },
    ],
    achievements: [
      "Co-built ITM Notes — CET exam prep platform used by 500+ ITM B.Tech students",
      "Cross-browser & cross-device QA on all Velocity Web client projects",
      "Frontend component architecture across React + TypeScript codebases",
      "Contributed to Velocity Web agency site — one of the most performance-optimised pages in the stack",
      "Responsive design systems built from scratch without UI kits or templates",
    ],
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Vite", "Framer Motion", "Git", "Responsive Design", "QA Testing", "Cross-browser Testing"],
    links: [],
  },
  {
    name: "Jaydev Singh Gohil",
    role: "Co-Founder · Strategy & SEO",
    initials: "JG",
    shortBio: "The engine behind the scenes. Jaydev handles client acquisition, SEO architecture, ad campaigns, and makes sure the business side actually works.",
    fullBio: "Jaydev is a co-founder and strategist at Velocity Web. While Maher and Anurag are in the code, Jaydev is running the business — scoping client projects, managing expectations, structuring technical SEO, and building the systems that make every site we ship discoverable and trustworthy. He ran the agency's Google Ads campaigns across India, US, UK, Canada, and Australia, and built the analytics infrastructure that tracks real conversions, not just vanity metrics.",
    stats: [
      { value: "5", label: "Markets targeted globally" },
      { value: "SEO", label: "Built into every site" },
      { value: "100%", label: "Client satisfaction" },
    ],
    achievements: [
      "Managed Google Ads campaigns across India, US, UK, Canada, and Australia",
      "Built technical SEO architecture — metadata, sitemaps, structured data — on all client sites",
      "Set up international payment infrastructure via PayPal for global client billing",
      "Conversion tracking pipeline via custom thank-you pages and WhatsApp redirect flows",
      "Handled full client lifecycle: first contact → scoping → delivery → post-launch support",
      "Structured agency pricing tiers (₹15k–25k Basic · ₹30k–45k Standard) and onboarding flow",
    ],
    skills: ["Technical SEO", "Google Ads", "Analytics", "Conversion Tracking", "Client Strategy", "Project Scoping", "International Payments", "PayPal", "WhatsApp Business", "Meta Tags", "Sitemaps"],
    links: [],
  },
];

const processSteps = [
  ["01", "Map the Offer", "We clarify audience, conversion goals, pages, SEO opportunities, and what the site must prove in the first 10 seconds."],
  ["02", "Design the System", "We build the visual direction, reusable sections, content hierarchy, animation rhythm, and mobile behavior."],
  ["03", "Develop for Speed", "React, clean components, lazy-loaded heavy sections, optimized images, metadata, and production-ready routing."],
  ["04", "Launch & Improve", "Deploy, test devices, connect forms, track conversions, and polish the details that protect trust after launch."],
];

const pricingPlans = [
  {
    name: "Essential",
    price: "$249",
    badge: "BEST VALUE",
    description: "Everything a growing business needs to get online and start converting - no fluff, no upsells.",
    features: [
      "Up to 10 Pages",
      "Fully Mobile Responsive",
      "Custom UI/UX Design",
      "Contact Form Integration",
      "Advanced SEO Setup",
      "Speed Optimization",
      "CMS Integration",
      "3 Rounds of Revisions",
      "30-Day Post-Launch Support",
    ],
  },
  {
    name: "Premium",
    price: "$599",
    description: "For businesses that need real power - custom backend, data collection, and full-scale features.",
    features: [
      "Everything in Essential",
      "Unlimited Pages",
      "E-Commerce Ready",
      "Custom Animations & Interactions",
      "Custom Database for Form Data",
      "Analytics Dashboard",
      "Priority Support & Maintenance",
      "Dedicated Project Manager",
    ],
    highlight: "Custom database connected to your forms - collect, manage, and export client data seamlessly.",
  },
];

const faqs = [
  ["Will the new style hurt speed?", "No. The heavy visual feel is built with CSS, lazy-loaded sections, optimized images, and route splitting instead of massive media files."],
  ["Can you make it look custom?", "Yes. The design language is inspired by Webzi, but the content, cards, offer, team, pricing, and project proof are built for Velocity Web."],
  ["Do you handle SEO?", "Yes. We structure metadata, internal links, content hierarchy, performance, sitemap/robots, and page-specific SEO foundations."],
];

const FoundersGrid = () => {
  const [active, setActive] = useState<number | null>(null);
  const selected = active !== null ? founders[active] : null;

  return (
    <>
      {/* ── 3 equal cards ── */}
      <div className="grid gap-6 lg:grid-cols-3">
        {founders.map((founder, index) => (
          <TiltCard
            key={founder.name}
            className="mesh-card reveal-card flex cursor-pointer flex-col overflow-hidden transition-all"
            style={{ "--delay": `${index * 90}ms` } as CSSProperties}
            onClick={() => setActive(index)}
          >
            {/* Photo / Avatar */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-[1.25rem] border-b border-[#6366f110] bg-[#f8f8ff]">
              {"imageWebp" in founder ? (
                <picture>
                  <source srcSet={founder.imageWebp} type="image/webp" />
                  <img
                    src={founder.imageFallback}
                    alt={`${founder.name}`}
                    className="team-photo h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="920"
                    height="690"
                  />
                </picture>
              ) : (
                <div className="dashboard-grid flex h-full items-center justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#6366f133] bg-[#6366f112] font-display text-3xl text-[#6366f1]">
                    {founder.initials}
                  </div>
                </div>
              )}
              {/* View profile badge */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-[#0f0f1a99] to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:opacity-100">
              </div>
              <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-[#6366f133] bg-[#ffffffcc] px-3 py-1 text-[11px] font-semibold text-[#6366f1] backdrop-blur-sm">
                <ArrowUpRight className="h-3 w-3" /> View profile
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div>
                <h3 className="font-display text-xl text-[#0f0f1a]">{founder.name}</h3>
                <p className="mt-0.5 text-xs font-semibold text-[#6366f1]">{founder.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#4b4b6b]">{founder.shortBio}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {founder.skills.slice(0, 5).map((skill) => (
                  <span key={skill} className="rounded-full border border-[#6366f118] bg-[#6366f10a] px-2.5 py-0.5 text-[11px] font-medium text-[#6366f1]">
                    {skill}
                  </span>
                ))}
                {founder.skills.length > 5 && (
                  <span className="rounded-full border border-[#6366f118] bg-[#6366f10a] px-2.5 py-0.5 text-[11px] font-medium text-[#6366f1]">
                    +{founder.skills.length - 5} more
                  </span>
                )}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* ── Modal overlay ── */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(15,15,26,0.55)", backdropFilter: "blur(8px)" }}
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-[#6366f120] bg-white shadow-[0_32px_80px_rgba(99,102,241,0.18)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#6366f120] bg-[#f5f5fd] text-[#6366f1] transition-colors hover:bg-[#6366f1] hover:text-white"
            >
              ✕
            </button>

            <div className="grid sm:grid-cols-[220px_1fr]">
              {/* Photo */}
              <div className="relative min-h-[220px] overflow-hidden rounded-tl-3xl rounded-bl-none rounded-tr-3xl sm:rounded-tr-none sm:rounded-bl-3xl bg-[#f8f8ff]">
                {"imageWebp" in selected ? (
                  <picture>
                    <source srcSet={selected.imageWebp} type="image/webp" />
                    <img
                      src={selected.imageFallback}
                      alt={selected.name}
                      className="h-full w-full object-cover object-top"
                      width="440"
                      height="600"
                    />
                  </picture>
                ) : (
                  <div className="dashboard-grid flex h-full min-h-[220px] items-center justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#6366f133] bg-[#6366f112] font-display text-3xl text-[#6366f1]">
                      {selected.initials}
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-5 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6366f1]">{selected.role}</p>
                  <h2 className="mt-1 font-display text-2xl text-[#0f0f1a]">{selected.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#4b4b6b]">{selected.fullBio}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  {selected.stats.map((s) => (
                    <div key={s.label} className="rounded-2xl border border-[#6366f114] bg-[#f5f5fd] p-3 text-center">
                      <p className="font-display text-xl font-semibold text-[#6366f1]">{s.value}</p>
                      <p className="mt-0.5 text-[11px] text-[#5c5c80]">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#0f0f1a]">Achievements</p>
                  <ul className="space-y-1.5">
                    {selected.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-xs text-[#4b4b6b]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366f1]" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#0f0f1a]">Skills</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-[#6366f118] bg-[#6366f10a] px-2.5 py-0.5 text-[11px] font-medium text-[#6366f1]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {selected.links.length > 0 && (
                  <div className="flex flex-wrap gap-4 border-t border-[#6366f010] pt-4">
                    {selected.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#6366f1] hover:text-[#818cf8]">
                        {link.label} <ArrowUpRight className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const LazyHomeSections = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchParams = new URLSearchParams({
      name: form.name,
      subject: form.subject,
    });

    navigate(`/quote-request-received?${searchParams.toString()}`);
  };

  return (
    <div className="deferred-sections">
      <section id="testimonials" className="section-space">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
          <SectionHeading
            label="CLIENT SIGNAL"
            title="Trust Built"
            accent="After Launch"
            subtext="Polish is good. Real people saying the work helped them is better."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((item, index) => (
              <TiltCard key={item.name} className="mesh-card reveal-card h-full p-6" style={{ "--delay": `${index * 90}ms` } as CSSProperties}>
                <Quote className="h-8 w-8 text-[#6366f1]" />
                <div className="mt-5 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={`${item.name}-${starIndex}`} className="h-4 w-4 fill-[#6366f1] text-[#6366f1]" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-relaxed text-[#4b4b6b]">{item.quote}</p>
                <p className="mt-6 font-display text-xl text-[#0f0f1a]">{item.name}</p>
                <p className="text-sm text-[#9fb197]">{item.role}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="section-space">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
          <SectionHeading
            label="WHY VELOCITY"
            title="Small Team,"
            accent="Sharp Output"
            subtext="You work directly with the people making decisions. No account-manager fog, no generic agency shuffle."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              "1-2 week delivery for most launches",
              "Built to convert, not just impress",
              "No outsourcing or handoff chains",
              "Performance and SEO from day one",
            ].map((point, index) => (
              <TiltCard key={point} className="mesh-card reveal-card h-full p-6" style={{ "--delay": `${index * 70}ms` } as CSSProperties}>
                <Sparkles className="h-6 w-6 text-[#6366f1]" />
                <p className="mt-5 font-display text-xl text-[#0f0f1a]">{point}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section id="founders" className="section-space">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
          <SectionHeading
            label="THE BUILDERS"
            title="Meet the"
            accent="People Shipping It"
            subtext="Three co-founders. No account managers, no middlemen. Click any card to see the full story."
          />

          <FoundersGrid />
        </div>
      </section>

      <section id="process" className="section-space">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
          <SectionHeading
            label="PROCESS"
            title="From Brief"
            accent="To Launch"
            subtext="A clean build needs a clean process. This keeps quality high without slowing everything down."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {processSteps.map(([number, title, description], index) => (
              <TiltCard key={number} className="step-card reveal-card p-6" style={{ "--delay": `${index * 80}ms` } as CSSProperties}>
                <div className="flex items-start gap-5">
                  <p className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#6366f166] bg-[#f8f8ff] font-display text-lg text-[#6366f1]">
                    {number}
                  </p>
                  <div>
                    <h3 className="font-display text-2xl text-[#0f0f1a]">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#4b4b6b]">{description}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section-space">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
          <SectionHeading
            label="PRICING"
            title="Simple Packages,"
            accent="Serious Output"
            subtext="Two plans. Clear value. Pick what fits and we will handle the rest."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {pricingPlans.map((plan, index) => (
              <TiltCard key={plan.name} className="mesh-card reveal-card h-full p-6 sm:p-8" style={{ "--delay": `${index * 110}ms` } as CSSProperties}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-3xl text-[#0f0f1a]">{plan.name}</h3>
                  {"badge" in plan ? (
                    <span className="rounded-full border border-[#6366f166] bg-[#6366f112] px-3 py-1 text-xs font-semibold tracking-[0.1em] text-[#6366f1]">
                      {plan.badge}
                    </span>
                  ) : null}
                </div>
                <p className="mt-5 font-display text-6xl leading-none text-[#6366f1]">{plan.price}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#4b4b6b]">{plan.description}</p>
                <ul className="mt-7 grid gap-3 text-sm text-[#4b4b6b] sm:grid-cols-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#6366f1]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {"highlight" in plan ? (
                  <div className="mt-7 rounded-2xl border border-[#6366f133] bg-[#f8f8ff] p-4 text-sm text-[#4b4b6b]">
                    {plan.highlight}
                  </div>
                ) : null}
                <Button asChild size="lg" className="webzi-button mt-7 w-full font-semibold">
                  <a href="#contact">Get Started</a>
                </Button>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
          <SectionHeading label="FAQ" title="Questions Before" accent="You Start" />
          <div className="grid gap-5 lg:grid-cols-3">
            {faqs.map(([question, answer]) => (
              <TiltCard key={question} className="mesh-card h-full p-6">
                <HelpCircle className="h-6 w-6 text-[#6366f1]" />
                <h3 className="mt-5 font-display text-xl text-[#0f0f1a]">{question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4b4b6b]">{answer}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-space pb-20">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
          <SectionHeading
            label="CONTACT"
            title="Let's Build"
            accent="Something Great"
            subtext="Drop the project idea. You will see a confirmation page, then WhatsApp opens so we can keep the conversation moving."
          />
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <TiltCard className="mesh-card p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  required
                  placeholder="Name"
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  className="contact-field rounded-2xl"
                />
                <Input
                  required
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                  className="contact-field rounded-2xl"
                />
                <Input
                  required
                  placeholder="Project type"
                  value={form.subject}
                  onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))}
                  className="contact-field rounded-2xl"
                />
                <Textarea
                  required
                  rows={5}
                  placeholder="Tell us what you want to build"
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                  className="contact-field rounded-2xl"
                />
                <Button type="submit" size="lg" className="webzi-button w-full font-semibold">
                  Submit Quote Request
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <p className="text-xs text-[#9fb197]">No spam. No template pitch. Just a clear next step.</p>
              </form>
            </TiltCard>

            <div className="grid gap-4">
              {[
                ["Email Us", company.email, `mailto:${company.email}`, Mail],
                ["Call Us", company.phoneDisplay, `tel:${company.phoneTel}`, Phone],
                ["WhatsApp", "Chat with us instantly", `https://wa.me/${company.whatsapp}`, MessageCircle],
              ].map(([label, value, href, Icon]) => (
                <TiltCard key={label as string} className="mesh-card p-5">
                  <a href={href as string} target={(label as string) === "WhatsApp" ? "_blank" : undefined} rel={(label as string) === "WhatsApp" ? "noopener noreferrer" : undefined} className="block">
                    <p className="text-sm uppercase tracking-[0.18em] text-[#6366f1]">{label as string}</p>
                    <div className="mt-3 flex items-center gap-3 text-base text-[#0f0f1a]">
                      <Icon className="h-4 w-4 text-[#6366f1]" />
                      {value as string}
                    </div>
                  </a>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
