import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Mail, MessageCircle, Phone, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageSeo } from "@/components/seo/PageSeo";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteLayout } from "@/components/site/SiteLayout";
import { TiltCard } from "@/components/site/TiltCard";
import { company } from "@/lib/site-data";

const services = [
  {
    title: "🛠️ Custom Website Development",
    description:
      "Built from scratch for your brand. E-commerce stores, landing pages, web apps. Modern, fast, conversion-focused.",
    path: "/services/custom-web-development",
  },
  {
    title: "⚡ Startup MVP Development",
    description:
      "Launch your product fast. Clean, modern websites & apps. Built for startups. Days, not months.",
    path: "/services/startup-website-development",
  },
  {
    title: "🌐 Web3 & Crypto Platforms",
    description:
      "Build on blockchain. Wallet integration, smart contract frontends, decentralized apps. Web3-native design.",
    path: "/services/web3-development",
  },
  {
    title: "📚 Education Platforms",
    description:
      "Learning platforms, student apps, course websites. Custom built for education. Mobile-first.",
    path: "/services/education-platform-development",
  },
  {
    title: "🌍 Hosting & Domains",
    description:
      "We handle deployment, hosting, SSL, domain management. Monthly or yearly. You focus on your business.",
  },
];

const projects = [
  {
    name: "Ztees",
    category: "E-Commerce Platform",
    url: "https://ztees.store",
    description: "Custom-built online store. 240% sales increase. Launched in 48 hours.",
    caseStudyUrl: "/case-studies/ztees",
    servicePath: "/services/custom-web-development",
    metrics: {
      salesIncrease: "240%",
      conversionRate: "3.2%",
      timeToLaunch: "48 hours",
    },
  },
  {
    name: "BountyChain",
    category: "Web3 Platform",
    url: "https://bountychain-three.vercel.app/",
    description: "Decentralized bounty platform. Wallet integration. Real-time updates.",
    caseStudyUrl: "/case-studies/bountychains",
    servicePath: "/services/web3-development",
  },
  {
    name: "ITM Notes",
    category: "Education Platform",
    url: "https://itm-notes.vercel.app/",
    description: "Student-first note platform. Mobile-first. Built as charity project.",
    caseStudyUrl: "/case-studies/itm-notes",
    servicePath: "/services/education-platform-development",
  },
];

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

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Velocity Web",
    url: "https://velocityweb.online",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Velocity Web",
    url: "https://velocityweb.online",
    logo: "https://velocityweb.online/logo.png",
    description: "Custom web development agency for startups, brands, Web3 platforms, and education products.",
  },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Hello Velocity Web,\n\nName: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`;
    window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <SiteLayout>
      <PageSeo
        title="Custom Web Development Agency India | Fast, High-Converting Websites | Velocity Web"
        description="Custom web development for startups, e-commerce brands, Web3 platforms, and education products. Built fast with React and Node.js."
        canonical="https://velocityweb.online"
        keywords="custom web development, web development agency india, react development service, startup website development, web3 development"
        ogTitle="Custom Web Development Agency | Velocity Web"
        ogDescription="Fast, modern web development for startups, brands, and platforms. E-commerce, Web3, SaaS, education."
        schema={pageSchema}
      />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-[#c8a4443d] bg-[#13131c] px-4 py-2 text-sm text-[#e6d3a1]">
              Average turnaround: 1-2 weeks
            </div>
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                <span className="gold-gradient-text">Custom Websites &amp; Web Apps</span> Built Fast
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-[#b9b9c8] sm:text-lg">
                E-commerce sites, web applications, startup MVPs. Built with React &amp; Node.js. Hosting &amp; domain
                included.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-[#c8a444] text-[#0a0a0f] hover:bg-[#d7b75d]">
                <Link to="/services/custom-web-development">Build My Website</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#c8a444] bg-transparent text-[#e2cd94] hover:bg-[#c8a444] hover:text-[#0a0a0f]">
                <a href="#portfolio">See Our Work</a>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: "React", label: "Primary frontend stack" },
                { value: "Node.js", label: "Backend-ready builds" },
                { value: "Days", label: "Fast launch mindset" },
              ].map((item) => (
                <TiltCard key={item.label} className="glass-card px-4 py-5">
                  <p className="font-display text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-[#a5a5b4]">{item.label}</p>
                </TiltCard>
              ))}
            </div>
          </div>

          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <TiltCard className="floating-hero-card glass-card p-7">
              <div className="hero-card-layer hero-card-layer-one" />
              <div className="hero-card-layer hero-card-layer-two" />
              <div className="relative z-10 space-y-5">
                <p className="text-xs font-semibold tracking-[0.3em] text-[#bfa66a]">LIVE PROJECT</p>
                <h2 className="font-display text-2xl text-white">Ztees - ztees.store</h2>
                <ul className="space-y-3 text-sm text-[#cbcbd6]">
                  <li>E-Commerce + WhatsApp ordering</li>
                  <li>Front/back image flip effects</li>
                  <li>Delivered in under 2 days</li>
                </ul>
                <Link to="/case-studies/ztees" className="inline-flex items-center gap-2 text-sm font-medium text-[#e6d29b]">
                  Read the full case study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      <section id="services" className="section-space">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
          <SectionHeading
            label="WHAT WE DO"
            title="Services That"
            accent="Actually Matter"
            subtext="We focus on the services that help startups and brands launch faster, explain products clearly, and scale beyond template limitations."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <TiltCard key={service.title} className="glass-card h-full p-6">
                <h3 className="font-display text-xl text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">{service.description}</p>
                {service.path ? (
                  <Link to={service.path} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#e6d29b]">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <a href="/#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#e6d29b]">
                    Ask About Hosting
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-space">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
          <SectionHeading
            label="OUR WORK"
            title="Projects We're"
            accent="Proud Of"
            subtext="Real websites, for real people. No templates - every project is built from scratch."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <TiltCard key={project.name} className="glass-card h-full p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[#bfa66a]">{project.category}</p>
                <h3 className="mt-3 font-display text-2xl text-white">{project.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">{project.description}</p>
                {"metrics" in project ? (
                  <div className="mt-5 grid gap-3">
                    <div className="rounded-xl border border-[#c8a44422] bg-[#111119] p-3 text-sm text-[#d0d0dc]">
                      Sales increase: {project.metrics.salesIncrease}
                    </div>
                    <div className="rounded-xl border border-[#c8a44422] bg-[#111119] p-3 text-sm text-[#d0d0dc]">
                      Conversion rate: {project.metrics.conversionRate}
                    </div>
                    <div className="rounded-xl border border-[#c8a44422] bg-[#111119] p-3 text-sm text-[#d0d0dc]">
                      Time to launch: {project.metrics.timeToLaunch}
                    </div>
                  </div>
                ) : null}
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  {"caseStudyUrl" in project ? (
                    <Link to={project.caseStudyUrl} className="inline-flex items-center gap-2 text-[#e6d29b]">
                      Read Full Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                  {"servicePath" in project ? (
                    <Link to={project.servicePath} className="inline-flex items-center gap-2 text-[#e6d29b]">
                      Explore Related Service
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#d0d0dc]">
                    Visit Live Site
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

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
              "2-week delivery for most launches",
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
            {[
              {
                name: "Essential",
                price: "$349",
                badge: "BEST VALUE",
                description:
                  "Everything a growing business needs to get online and start converting - no fluff, no upsells.",
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
                price: "$999",
                description:
                  "For businesses that need real power - custom backend, data collection, and full-scale features.",
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
                highlight:
                  "Custom database connected to your forms - collect, manage, and export client data seamlessly.",
              },
            ].map((plan) => (
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
                  Send via WhatsApp
                </Button>
                <p className="text-xs text-[#9d9dae]">This opens WhatsApp with your message pre-filled.</p>
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
    </SiteLayout>
  );
};

export default Index;
