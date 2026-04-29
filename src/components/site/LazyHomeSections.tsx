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
    role: "Web Developer | UX/UI",
    imageWebp: "/team/maher-bhatt.webp",
    imageFallback: "/team/maher-bhatt.jpg",
    bio: "Maher shapes the product experience: offer clarity, UI direction, page flow, and the small details that make a website feel premium instead of assembled.",
    link: "https://maherbhatt.me",
  },
  {
    name: "Anurag Pandey",
    role: "Web Developer | QC Lead",
    imageWebp: "/team/anurag-pandey.webp",
    imageFallback: "/team/anurag-pandey.jpeg",
    bio: "Anurag brings the tester's eye: responsive checks, interaction quality, browser behavior, and the final polish that keeps a launch from feeling rushed.",
  },
  {
    name: "Jaydev Singh Gohil",
    role: "Backend Dev | SEO Expert",
    initials: "JS",
    bio: "Jaydev prefers shipping over posing for the camera. He handles backend structure, technical SEO, clean data, and the performance foundations under the interface.",
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
                <Quote className="h-8 w-8 text-[#b7ff3c]" />
                <div className="mt-5 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={`${item.name}-${starIndex}`} className="h-4 w-4 fill-[#b7ff3c] text-[#b7ff3c]" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-relaxed text-[#d9e7d4]">{item.quote}</p>
                <p className="mt-6 font-display text-xl text-white">{item.name}</p>
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
                <Sparkles className="h-6 w-6 text-[#b7ff3c]" />
                <p className="mt-5 font-display text-xl text-white">{point}</p>
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
            subtext="Real people behind the work builds trust. Maher and Anurag are here; Jaydev is currently winning the camera-shy championship."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {founders.map((founder, index) => (
              <TiltCard key={founder.name} className="mesh-card reveal-card overflow-hidden p-4" style={{ "--delay": `${index * 90}ms` } as CSSProperties}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-[#b7ff3c22] bg-[#071008]">
                  {"imageWebp" in founder ? (
                    <picture>
                      <source srcSet={founder.imageWebp} type="image/webp" />
                      <img
                        src={founder.imageFallback}
                        alt={`${founder.name}, ${founder.role} at Velocity Web`}
                        className="team-photo h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                        width="920"
                        height="1150"
                      />
                    </picture>
                  ) : (
                    <div className="dashboard-grid flex h-full items-center justify-center">
                      <div className="flex h-32 w-32 items-center justify-center rounded-full border border-[#b7ff3c33] bg-[#b7ff3c12] font-display text-4xl text-[#d7ff71] shadow-[0_0_70px_rgba(183,255,60,0.16)]">
                        {founder.initials}
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-[#b7ff3c22] bg-[#031006d9] p-4 backdrop-blur-md">
                    <h3 className="font-display text-xl text-white">{founder.name}</h3>
                    <p className="mt-1 text-sm text-[#b7ff3c]">{founder.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-[#b7c8b0]">{founder.bio}</p>
                {"link" in founder ? (
                  <a href={founder.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm text-[#d7ff71]">
                    maherbhatt.me
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </TiltCard>
            ))}
          </div>
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
                  <p className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#b7ff3c66] bg-[#071008] font-display text-lg text-[#d7ff71]">
                    {number}
                  </p>
                  <div>
                    <h3 className="font-display text-2xl text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#b7c8b0]">{description}</p>
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
                  <h3 className="font-display text-3xl text-white">{plan.name}</h3>
                  {"badge" in plan ? (
                    <span className="rounded-full border border-[#b7ff3c66] bg-[#b7ff3c22] px-3 py-1 text-xs font-semibold tracking-[0.1em] text-[#d7ff71]">
                      {plan.badge}
                    </span>
                  ) : null}
                </div>
                <p className="mt-5 font-display text-6xl leading-none text-[#d7ff71]">{plan.price}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#b7c8b0]">{plan.description}</p>
                <ul className="mt-7 grid gap-3 text-sm text-[#dbe8d7] sm:grid-cols-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#b7ff3c]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {"highlight" in plan ? (
                  <div className="mt-7 rounded-2xl border border-[#b7ff3c44] bg-[#071008] p-4 text-sm text-[#d4e4cf]">
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
                <HelpCircle className="h-6 w-6 text-[#b7ff3c]" />
                <h3 className="mt-5 font-display text-xl text-white">{question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#b7c8b0]">{answer}</p>
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
                    <p className="text-sm uppercase tracking-[0.18em] text-[#b7ff3c]">{label as string}</p>
                    <div className="mt-3 flex items-center gap-3 text-base text-white">
                      <Icon className="h-4 w-4 text-[#b7ff3c]" />
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
