import { motion } from "framer-motion";
import { Palette, ShoppingCart, Rocket, RefreshCw, Wrench, Globe } from "lucide-react";

const services = [
  { icon: Palette, title: "Website Design", desc: "Clean, conversion-focused design that actually represents your brand — not a template with your logo slapped on." },
  { icon: ShoppingCart, title: "E-Commerce", desc: "Online stores built to sell. Smooth checkout flows, inventory management, and payment integration that just works." },
  { icon: Rocket, title: "Landing Pages", desc: "High-converting pages for campaigns and launches. Every element is there for a reason — to get people to act." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Your site feels outdated? We'll rebuild it into something modern that actually performs and feels right." },
  { icon: Wrench, title: "Maintenance", desc: "Ongoing care to keep things fast, secure, and running smoothly. You focus on your business, we handle the tech." },
  { icon: Globe, title: "SEO & Performance", desc: "We build fast, findable websites from the ground up. Not SEO as an afterthought — baked into every decision." },
];

const Services = () => (
  <section id="services" className="section-padding relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-primary/80 font-medium text-xs uppercase tracking-[0.2em]">What We Do</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 tracking-tight">
          Services That <span className="text-gradient">Actually Matter</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group glass rounded-2xl p-8 hover-glow cursor-default border-primary/5"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
              <s.icon size={22} className="text-primary/80" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3 tracking-tight">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
