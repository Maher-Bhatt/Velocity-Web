import { useEffect, useState, type FormEvent, type MouseEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Check, Mail, Menu, MessageCircle, Phone, Quote, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const COMPANY = {
  name: "Velocity Web",
  website: "https://velocityweb.online",
  email: "velocitywe6@gmail.com",
  phoneDisplay: "+91 9879529957",
  phoneTel: "+919879529957",
  whatsapp: "919879529957",
  location: "Vadodara, Gujarat, India",
  year: "2026",
};

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Team", href: "#founders" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "🎨 Website Design",
    description:
      "Clean, conversion-focused design that actually represents your brand — not a template with your logo slapped on.",
  },
  {
    title: "🛒 E-Commerce",
    description:
      "Online stores built to sell. Smooth checkout flows, inventory management, and payment integration that just works.",
  },
  {
    title: "🚀 Landing Pages",
    description:
      "High-converting pages for campaigns and launches. Every element is there for a reason — to get people to act.",
  },
  {
    title: "🔄 Website Redesign",
    description:
      "Your site feels outdated? We'll rebuild it into something modern that actually performs and feels right.",
  },
  {
    title: "🔧 Maintenance",
    description:
      "Ongoing care to keep things fast, secure, and running smoothly. You focus on your business, we handle the tech.",
  },
  {
    title: "🌐 SEO & Performance",
    description:
      "We build fast, findable websites from the ground up. Not SEO as an afterthought — baked into every decision.",
  },
];

const projects = [
  {
    name: "Ztees",
    category: "E-Commerce Store",
    url: "https://ztees.store",
    description:
      "A clean, conversion-focused online storefront built for speed and style. Delivered in under 2 days.",
  },
  {
    name: "BountyChain",
    category: "Web3 Platform",
    url: "https://bountychain-three.vercel.app/",
    description:
      "A decentralized bounty platform with a modern, intuitive interface that makes Web3 feel approachable.",
  },
  {
    name: "ITM Notes",
    category: "Education Platform",
    url: "https://itm-notes.vercel.app/",
    description:
      "A student-first note-sharing platform designed for fast access and simplicity. Built as a charity project.",
  },
];

const testimonials = [
  {
    name: "Rudra Pandya",
    role: "Founder of Ztees",
    badge: "Z",
    quote:
      "They delivered our entire store website in roughly 2 working days. It is incredibly polished, and we are already seeing noticeable growth after launching the website. It has been very helpful.",
  },
  {
    name: "Harshal Patel",
    role: "Student, ITM SLS Baroda University",
    badge: "ITM",
    quote:
      "I randomly texted Velocity Web asking them to make a note-sharing website for CETS. Honestly, I was just having fun with them, but they actually did it as a charity project! I am so happy with what they built. That's why these guys are so good.",
  },
];

const whyUs = [
  {
    title: "⚡ 2-Week Delivery",
    description:
      "Most websites go live within 2 working weeks — designed, built, tested, and deployed. We don't drag things out.",
  },
  {
    title: "📈 Built to Convert",
    description:
      "Every design decision serves your bottom line. A pretty website that doesn't perform is just expensive decoration.",
  },
  {
    title: "🛡️ No Middlemen",
    description:
      "You talk directly to the people building your site. No project managers, no hand-offs, no telephone game.",
  },
  {
    title: "👥 Human-First Design",
    description:
      "We design for the people who'll actually use your site — not for design awards or portfolio screenshots.",
  },
];

const founders = [
  {
    name: "Maher Bhatt",
    initials: "MB",
    role: "Web Developer · UX/UI",
    bio: "Maher is the one staring at your website at 2 AM adjusting padding by one pixel. He's deeply passionate about user experience — not in the corporate-buzzword way, but in the 'I genuinely can't sleep if this button feels off' way. He turns messy briefs into interfaces that feel intuitive from the very first tap.",
    link: "https://maherbhatt.me",
  },
  {
    name: "Anurag Pandey",
    initials: "AP",
    role: "Web Developer · QC Lead",
    bio: "Anurag is the person who intentionally tries to break everything before your users ever get the chance. Bugs don't survive him. He combines a developer's eye with a tester's paranoia, so every site we ship is polished, responsive, and rock-solid across every device and browser.",
  },
  {
    name: "Jaydev Singh Gohil",
    initials: "JG",
    role: "Backend Dev · SEO Expert",
    bio: "Jaydev builds the stuff you never see but always feel — fast load times, clean databases, and the kind of SEO structure that makes Google actually pay attention. If your site ranks well and your data flows smoothly, that's Jaydev quietly doing his thing in the background.",
  },
];

const processSteps = [
  {
    number: "1",
    title: "🔍 Discovery",
    description: "We learn about your business, your audience, and what success looks like for you.",
  },
  {
    number: "2",
    title: "✏️ Design",
    description: "We design mockups you'll actually be excited about — not safe, forgettable layouts.",
  },
  {
    number: "3",
    title: "💻 Development",
    description: "Clean, modern code built for speed, security, and long-term maintainability.",
  },
  {
    number: "4",
    title: "🚀 Launch",
    description: "We deploy, test across devices, optimize performance, and hand you the keys.",
  },
];

const pricing = [
  {
    name: "Essential",
    price: "$349",
    badge: "BEST VALUE",
    description:
      "Everything a growing business needs to get online and start converting — no fluff, no upsells.",
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
      "For businesses that need real power — custom backend, data collection, and full-scale features.",
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
      "Custom database connected to your forms — collect, manage, and export client data seamlessly.",
  },
];

const sectionParent = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const sectionChild = {
  hidden: { opacity: 0, y: 60, rotateX: 15 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

type TiltCardProps = { className?: string; children: ReactNode };

const TiltCard = ({ className, children }: TiltCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      className={cn("tilt-card", className)}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ z: 20 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

type SectionHeadingProps = {
  label: string;
  title: string;
  accent: string;
  subtext?: string;
};

const SectionHeading = ({ label, title, accent, subtext }: SectionHeadingProps) => (
  <motion.div variants={sectionChild} className="mb-10 space-y-3">
    <p className="section-label">{label}</p>
    <h2 className="section-title">
      {title} <span className="gold-gradient-text">{accent}</span>
    </h2>
    {subtext ? <p className="max-w-3xl text-[#b7b7c6]">{subtext}</p> : null}
  </motion.div>
);

const sectionShell = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-10";

const Index = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const { scrollY } = useScroll();
  const layerOneY = useTransform(scrollY, [0, 1800], [0, -160]);
  const layerTwoY = useTransform(scrollY, [0, 1800], [0, -240]);
  const layerThreeY = useTransform(scrollY, [0, 1800], [0, -90]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Hello Velocity Web,\n\nName: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`;
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="site-shell relative min-h-screen overflow-x-hidden">
      <motion.div style={{ y: layerOneY }} className="parallax-orb orb-one" />
      <motion.div style={{ y: layerTwoY }} className="parallax-orb orb-two" />
      <motion.div style={{ y: layerThreeY }} className="parallax-orb orb-three" />

      <header className={cn("navbar-shell fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-10", scrolled && "navbar-scrolled")}>
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#home" className="inline-flex items-center">
            <span className="text-base font-extrabold tracking-tight text-white sm:text-lg">VELOCITY</span>
            <span className="ml-2 text-base font-light tracking-[0.3em] text-[#c8a444] sm:text-lg">WEB</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>
          <motion.div whileHover={{ y: -2, z: 14 }} whileTap={{ y: 1, z: 0 }} className="depth-wrap hidden lg:block">
            <Button asChild variant="outline" className="depth-button border-[#c8a444] bg-transparent text-[#c8a444] hover:bg-[#c8a444] hover:text-[#0a0a0f]">
              <a href="#contact">Get Started</a>
            </Button>
          </motion.div>
          <button type="button" onClick={() => setMobileOpen((prev) => !prev)} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#c8a44433] text-[#e8d4a1] lg:hidden" aria-label="Toggle menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.25, ease: "easeOut" }} className="mobile-menu-panel mt-4 rounded-2xl border border-[#c8a4442b] bg-[#0f0f16f0] p-4 backdrop-blur-xl lg:hidden">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </a>
                ))}
                <Button asChild className="mt-1 w-full bg-[#c8a444] text-[#0a0a0f] hover:bg-[#d8b95f]">
                  <a href="#contact" onClick={() => setMobileOpen(false)}>
                    Get Started
                  </a>
                </Button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main id="home" className="relative z-10">
        <section className={`${sectionShell} grid items-center gap-10 pb-16 pt-28 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24`}>
          <motion.div initial={{ opacity: 0, y: 40, rotateX: 12 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-[#c8a4443d] bg-[#13131c] px-4 py-2 text-sm text-[#e6d3a1]">⚡ Average turnaround: 2 working weeks</div>
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Websites That
                <span className="gold-gradient-text block">Convert, Perform</span>
                <span className="block">&amp; Scale Your Business</span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-[#b9b9c8]">We design and build premium websites that drive real results — fast-loading, conversion-optimised, and delivered in 2 weeks, not months.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ y: -2, z: 14 }} whileTap={{ y: 1, z: 0 }} className="depth-wrap">
                <Button asChild className="depth-button bg-[#c8a444] px-7 text-[#0a0a0f] hover:bg-[#d8b95f]">
                  <a href="#contact">Let's Talk →</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -2, z: 14 }} whileTap={{ y: 1, z: 0 }} className="depth-wrap">
                <Button asChild variant="outline" className="depth-button border-[#c8a444] bg-transparent px-7 text-[#e3c97e] hover:bg-[#c8a444] hover:text-[#0a0a0f]">
                  <a href="#portfolio">See Our Work</a>
                </Button>
              </motion.div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: "2 Weeks", label: "Avg. Turnaround" },
                { value: "100%", label: "Founder-Built" },
                { value: "3", label: "Founders" },
              ].map((stat) => (
                <TiltCard key={stat.label} className="glass-card px-4 py-5">
                  <p className="font-display text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-[#a5a5b4]">{stat.label}</p>
                </TiltCard>
              ))}
            </div>
          </motion.div>

          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[#c8a44414] blur-3xl" />
            <TiltCard className="floating-hero-card p-7">
              <div className="hero-card-layer hero-card-layer-one" />
              <div className="hero-card-layer hero-card-layer-two" />
              <div className="relative z-10 space-y-5">
                <p className="text-xs font-semibold tracking-[0.3em] text-[#bfa66a]">LIVE PROJECT</p>
                <h3 className="font-display text-2xl text-white">Ztees — ztees.store</h3>
                <ul className="space-y-3 text-sm text-[#cbcbd6]">
                  <li>✅ E-Commerce + WhatsApp ordering</li>
                  <li>✅ Front/back image flip effects</li>
                  <li>🚀 Delivered in under 2 days</li>
                </ul>
              </div>
            </TiltCard>
          </motion.div>
        </section>

        <section id="services" className="section-space">
          <motion.div variants={sectionParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} className={sectionShell}>
            <SectionHeading label="WHAT WE DO" title="Services That" accent="Actually Matter" />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((item) => (
                <motion.div key={item.title} variants={sectionChild}>
                  <TiltCard className="glass-card h-full p-6">
                    <h3 className="font-display text-xl text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">{item.description}</p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="portfolio" className="section-space">
          <motion.div variants={sectionParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} className={sectionShell}>
            <SectionHeading
              label="OUR WORK"
              title="Projects We're"
              accent="Proud Of"
              subtext="Real websites, for real people. No templates — every project is built from scratch."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <motion.div key={project.name} variants={sectionChild}>
                  <TiltCard className="glass-card group h-full p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#bfa66a]">{project.category}</p>
                    <h3 className="mt-3 font-display text-2xl text-white">{project.name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">{project.description}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#e7d39e]">
                      {project.url.replace("https://", "")}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="testimonials" className="section-space">
          <motion.div variants={sectionParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} className={sectionShell}>
            <SectionHeading label="TESTIMONIALS" title="Loved by" accent="Client Founders" />
            <div className="grid gap-6 lg:grid-cols-2">
              {testimonials.map((item) => (
                <motion.div key={item.name} variants={sectionChild}>
                  <TiltCard className="glass-card h-full p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c8a44455] bg-[#13131a] text-sm font-semibold text-[#e5ce93]">{item.badge}</div>
                      <Quote className="h-6 w-6 text-[#c8a444]" />
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-[#c2c2cf]">{item.quote}</p>
                    <div className="mt-6 flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={`${item.name}-${i}`} className="h-4 w-4 fill-[#c8a444] text-[#c8a444]" />
                      ))}
                    </div>
                    <p className="mt-4 font-display text-lg text-white">{item.name}</p>
                    <p className="text-sm text-[#a9a9b8]">{item.role}</p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="why-us" className="section-space">
          <motion.div variants={sectionParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} className={sectionShell}>
            <SectionHeading label="WHY US" title="Why People" accent="Choose Velocity Web" />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {whyUs.map((item) => (
                <motion.div key={item.title} variants={sectionChild}>
                  <TiltCard className="glass-card h-full p-6">
                    <h3 className="font-display text-xl text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">{item.description}</p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="founders" className="section-space">
          <motion.div variants={sectionParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} className={sectionShell}>
            <SectionHeading
              label="THE TEAM"
              title="Three People."
              accent="That's the Whole Company."
              subtext="No account managers. No outsourcing. No layers of approval. When you hire Velocity Web, you work directly with the people who design, build, and ship your website."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {founders.map((founder) => (
                <motion.div key={founder.name} variants={sectionChild}>
                  <TiltCard className="glass-card h-full p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#c8a44455] bg-[#14141c] font-display text-[#dfc98e]">{founder.initials}</div>
                    <h3 className="font-display text-xl text-white">{founder.name}</h3>
                    <p className="mt-1 text-sm text-[#c8a444]">{founder.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">{founder.bio}</p>
                    {founder.link ? (
                      <a href={founder.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#e6d29b]">
                        maherbhatt.me
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="process" className="section-space">
          <motion.div variants={sectionParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} className={sectionShell}>
            <SectionHeading label="HOW WE WORK" title="From Idea to Launch in" accent="Weeks" />
            <div className="grid gap-6 md:grid-cols-2">
              {processSteps.map((step) => (
                <motion.div key={step.number} variants={sectionChild}>
                  <TiltCard className="step-card h-full p-6">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c8a44466] bg-[#171721] font-display text-lg text-[#e5cf96]">{step.number}</div>
                    <h3 className="font-display text-xl text-white">{step.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#b7b7c6]">{step.description}</p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="pricing" className="section-space">
          <motion.div variants={sectionParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} className={sectionShell}>
            <SectionHeading
              label="PRICING"
              title="Honest Pricing,"
              accent="No Surprises"
              subtext="Two plans. Clear value. Pick what fits and we'll handle the rest."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {pricing.map((plan) => (
                <motion.div key={plan.name} variants={sectionChild}>
                  <TiltCard className="glass-card h-full p-6">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <h3 className="font-display text-2xl text-white">{plan.name}</h3>
                      {plan.badge ? <span className="rounded-full border border-[#c8a44466] bg-[#c8a44422] px-3 py-1 text-xs font-semibold tracking-[0.1em] text-[#e7d4a2]">{plan.badge}</span> : null}
                    </div>
                    <p className="font-display text-4xl text-[#e1cb90]">{plan.price}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#b7b7c6]">{plan.description}</p>
                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-[#d0d0dc]">
                          <Check className="mt-0.5 h-4 w-4 text-[#c8a444]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {plan.highlight ? <div className="mt-6 rounded-xl border border-[#c8a44444] bg-[#161620] p-4 text-sm text-[#d4d4df]">{plan.highlight}</div> : null}
                    <motion.div whileHover={{ y: -2, z: 14 }} whileTap={{ y: 1, z: 0 }} className="depth-wrap">
                      <Button asChild className="mt-7 w-full bg-[#c8a444] text-[#0a0a0f] hover:bg-[#d8b95f]">
                        <a href="#contact">Get Started</a>
                      </Button>
                    </motion.div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="section-space pb-20">
          <motion.div variants={sectionParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} className={sectionShell}>
            <SectionHeading
              label="CONTACT"
              title="Let's Build"
              accent="Something Great"
              subtext="Have a project in mind? Drop us a message and we'll get back to you within a few hours — usually faster."
            />
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div variants={sectionChild}>
                <TiltCard className="glass-card p-6">
                  <form onSubmit={onSubmit} className="space-y-4">
                    <Input required placeholder="Name" value={form.name} onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))} className="contact-field" />
                    <Input required type="email" placeholder="Email" value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} className="contact-field" />
                    <Input required placeholder="Subject" value={form.subject} onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))} className="contact-field" />
                    <Textarea required rows={5} placeholder="Message" value={form.message} onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))} className="contact-field" />
                    <motion.div whileHover={{ y: -2, z: 14 }} whileTap={{ y: 1, z: 0 }} className="depth-wrap">
                      <Button type="submit" className="w-full bg-[#c8a444] text-[#0a0a0f] hover:bg-[#d8b95f]">
                        Send via WhatsApp 💬
                      </Button>
                    </motion.div>
                    <p className="text-xs text-[#9d9dae]">This opens WhatsApp with your message pre-filled.</p>
                  </form>
                </TiltCard>
              </motion.div>

              <motion.div variants={sectionChild} className="space-y-4">
                <TiltCard className="glass-card p-5">
                  <a href={`mailto:${COMPANY.email}`} className="block">
                    <p className="text-sm uppercase tracking-[0.18em] text-[#bfa66a]">Email Us</p>
                    <div className="mt-3 flex items-center gap-2 text-base text-white">
                      <Mail className="h-4 w-4 text-[#c8a444]" />
                      {COMPANY.email}
                    </div>
                  </a>
                </TiltCard>
                <TiltCard className="glass-card p-5">
                  <a href={`tel:${COMPANY.phoneTel}`} className="block">
                    <p className="text-sm uppercase tracking-[0.18em] text-[#bfa66a]">Call Us</p>
                    <div className="mt-3 flex items-center gap-2 text-base text-white">
                      <Phone className="h-4 w-4 text-[#c8a444]" />
                      {COMPANY.phoneDisplay}
                    </div>
                  </a>
                </TiltCard>
                <TiltCard className="glass-card p-5">
                  <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="block">
                    <p className="text-sm uppercase tracking-[0.18em] text-[#bfa66a]">WhatsApp</p>
                    <div className="mt-3 flex items-center gap-2 text-base text-white">
                      <MessageCircle className="h-4 w-4 text-[#c8a444]" />
                      Chat with us instantly
                    </div>
                  </a>
                </TiltCard>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-[#c8a44422] bg-[#09090d]">
        <div className={`${sectionShell} py-12`}>
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <div className="inline-flex items-center">
                <span className="text-lg font-extrabold tracking-tight text-white">VELOCITY</span>
                <span className="ml-2 text-lg font-light tracking-[0.3em] text-[#c8a444]">WEB</span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#a8a8b7]">Three founders building websites that actually help businesses grow — in weeks, not months.</p>
              <a href={COMPANY.website} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-[#dfc98d]">
                velocityweb.online
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-3 text-sm text-[#8f8f9f]">{COMPANY.location}</p>
            </div>

            <div>
              <p className="font-display text-sm uppercase tracking-[0.18em] text-[#bfa66a]">Quick Links</p>
              <div className="mt-4 flex flex-col gap-2 text-sm text-[#c4c4d2]">
                <a href="#services" className="footer-link">Services</a>
                <a href="#portfolio" className="footer-link">Portfolio</a>
                <a href="#founders" className="footer-link">Team</a>
                <a href="#pricing" className="footer-link">Pricing</a>
                <a href="#contact" className="footer-link">Contact</a>
              </div>
            </div>

            <div>
              <p className="font-display text-sm uppercase tracking-[0.18em] text-[#bfa66a]">Get in Touch</p>
              <div className="mt-4 space-y-3 text-sm text-[#c4c4d2]">
                <a href={`mailto:${COMPANY.email}`} className="footer-link flex items-center gap-2"><Mail className="h-4 w-4 text-[#c8a444]" />{COMPANY.email}</a>
                <a href={`tel:${COMPANY.phoneTel}`} className="footer-link flex items-center gap-2"><Phone className="h-4 w-4 text-[#c8a444]" />{COMPANY.phoneDisplay}</a>
                <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="footer-link flex items-center gap-2"><MessageCircle className="h-4 w-4 text-[#c8a444]" />Chat on WhatsApp</a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[#ffffff12] pt-6 text-xs text-[#8f8f9f]">
            <p>© {COMPANY.year} {COMPANY.name}. All rights reserved.</p>
            <p>Built with care by three humans, not a template.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
