import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MessageCircle, Phone, Star } from "lucide-react";
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
      "They delivered our entire store website in roughly 2 working days. It is incredibly polished, and we are already seeing noticeable growth after launching the website. It has been very helpful.",
  },
  {
    name: "Harshal Patel",
    role: "Student, ITM SLS Baroda University",
    quote:
      "I randomly texted Velocity Web asking them to make a note-sharing website for CETS. Honestly, I was just having fun with them, but they actually did it as a charity project! I am so happy with what they built. That's why these guys are so good.",
  },
];

const founders = [
  {
    name: "Maher Bhatt",
    role: "Web Developer | UX/UI",
    bio: "Maher turns messy briefs into storefronts that feel intuitive on the very first tap. He obsesses over spacing, product hierarchy, and the small interactions that make buying feel easy.",
    link: "https://maherbhatt.me",
  },
  {
    name: "Anurag Pandey",
    role: "Web Developer | QC Lead",
    bio: "Anurag stress-tests everything before users ever get the chance. He approaches launches with a tester's paranoia, which helps every site feel sharper and more dependable across devices.",
  },
  {
    name: "Jaydev Singh Gohil",
    role: "Backend Dev | SEO Expert",
    bio: "Jaydev handles the structure under the surface: speed, clean data, and SEO foundations that help stores perform well and scale without turning into a maintenance problem.",
  },
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
          <SectionHeading label="TESTIMONIALS" title="Loved by" accent="Client Founders" />
          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
              <TiltCard key={item.name} className="glass-card h-full p-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={`${item.name}-${index}`} className="h-4 w-4 fill-[#c8a444] text-[#c8a444]" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#c2c2cf]">{item.quote}</p>
                <p className="mt-5 font-display text-lg text-white">{item.name}</p>
                <p className="text-sm text-[#a9a9b8]">{item.role}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="section-space">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
          <SectionHeading
            label="WHY US"
            title="Why People"
            accent="Choose Velocity Web"
            subtext="We stay close to the work, keep the process founder-friendly, and build around business outcomes instead of generic agency process."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              "1-2 week delivery for most launches",
              "Built to convert, not just impress",
              "No middlemen or project handoff chains",
              "Human-first design for real shoppers",
            ].map((point) => (
              <TiltCard key={point} className="glass-card h-full p-6">
                <p className="font-display text-xl text-white">{point}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section id="founders" className="section-space">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
          <SectionHeading
            label="THE TEAM"
            title="Three People."
            accent="That's the Whole Company."
            subtext="No account managers. No outsourcing. No layers of approval. You work directly with the people designing, building, and shipping your store."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {founders.map((founder) => (
              <TiltCard key={founder.name} className="glass-card h-full p-6">
                <h3 className="font-display text-xl text-white">{founder.name}</h3>
                <p className="mt-1 text-sm text-[#c8a444]">{founder.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">{founder.bio}</p>
                {founder.link ? (
                  <a href={founder.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm text-[#e6d29b]">
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
          <SectionHeading label="HOW WE WORK" title="From Idea to Launch in" accent="Weeks" />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              ["01", "Discovery", "We learn about your business, your audience, and what success looks like for you."],
              ["02", "Design", "We design storefronts and landing flows that feel premium and support conversion."],
              ["03", "Development", "Clean, modern code built for speed, security, and maintainability."],
              ["04", "Launch", "We deploy, test across devices, optimize performance, and hand you the keys."],
            ].map(([number, title, description]) => (
              <TiltCard key={number} className="step-card p-6">
                <p className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c8a44466] bg-[#171721] font-display text-lg text-[#e5cf96]">
                  {number}
                </p>
                <h3 className="mt-4 font-display text-xl text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">{description}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section-space">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
          <SectionHeading
            label="PRICING"
            title="Honest Pricing,"
            accent="No Surprises"
            subtext="Two plans. Clear value. Pick what fits and we will handle the rest."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {pricingPlans.map((plan) => (
              <TiltCard key={plan.name} className="glass-card h-full p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-2xl text-white">{plan.name}</h3>
                  {"badge" in plan ? (
                    <span className="rounded-full border border-[#c8a44466] bg-[#c8a44422] px-3 py-1 text-xs font-semibold tracking-[0.1em] text-[#e7d4a2]">
                      {plan.badge}
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 font-display text-4xl text-[#e1cb90]">{plan.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">{plan.description}</p>
                <ul className="mt-5 space-y-3 text-sm text-[#d0d0dc]">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                {"highlight" in plan ? (
                  <div className="mt-5 rounded-xl border border-[#c8a44444] bg-[#161620] p-4 text-sm text-[#d4d4df]">
                    {plan.highlight}
                  </div>
                ) : null}
                <Button asChild className="mt-6 w-full bg-[#c8a444] text-[#0a0a0f] hover:bg-[#d7b75d]">
                  <a href="#contact">Get Started</a>
                </Button>
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
            subtext="Have a project in mind? Drop us a message and we will get back to you within a few hours - usually faster."
          />
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <TiltCard className="glass-card p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  required
                  placeholder="Name"
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  className="contact-field"
                />
                <Input
                  required
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                  className="contact-field"
                />
                <Input
                  required
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))}
                  className="contact-field"
                />
                <Textarea
                  required
                  rows={5}
                  placeholder="Message"
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                  className="contact-field"
                />
                <Button type="submit" className="w-full bg-[#c8a444] text-[#0a0a0f] hover:bg-[#d7b75d]">
                  Submit Quote Request
                </Button>
                <p className="text-xs text-[#9d9dae]">You&apos;ll see a confirmation page, then we&apos;ll redirect you to WhatsApp.</p>
              </form>
            </TiltCard>

            <div className="space-y-4">
              <TiltCard className="glass-card p-5">
                <a href={`mailto:${company.email}`} className="block">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#bfa66a]">Email Us</p>
                  <div className="mt-3 flex items-center gap-2 text-base text-white">
                    <Mail className="h-4 w-4 text-[#c8a444]" />
                    {company.email}
                  </div>
                </a>
              </TiltCard>
              <TiltCard className="glass-card p-5">
                <a href={`tel:${company.phoneTel}`} className="block">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#bfa66a]">Call Us</p>
                  <div className="mt-3 flex items-center gap-2 text-base text-white">
                    <Phone className="h-4 w-4 text-[#c8a444]" />
                    {company.phoneDisplay}
                  </div>
                </a>
              </TiltCard>
              <TiltCard className="glass-card p-5">
                <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="block">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#bfa66a]">WhatsApp</p>
                  <div className="mt-3 flex items-center gap-2 text-base text-white">
                    <MessageCircle className="h-4 w-4 text-[#c8a444]" />
                    Chat with us instantly
                  </div>
                </a>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
