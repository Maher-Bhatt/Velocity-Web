import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Ztees",
    category: "E-Commerce Store",
    url: "https://ztees.store",
    desc: "A clean, conversion-focused online storefront built for speed and style. Delivered in under 2 days.",
  },
  {
    title: "BountyChain",
    category: "Web3 Platform",
    url: "https://bountychain-three.vercel.app/",
    desc: "A decentralized bounty platform with a modern, intuitive interface that makes Web3 feel approachable.",
  },
  {
    title: "ITM Notes",
    category: "Education Platform",
    url: "https://itm-notes-new.vercel.app/",
    desc: "A student-first note-sharing platform designed for fast access and simplicity. Built as a charity project.",
  },
];

const Portfolio = () => (
  <section id="portfolio" className="section-padding relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-primary/80 font-medium text-xs uppercase tracking-[0.2em]">Our Work</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 tracking-tight">
          Projects We're <span className="text-gradient">Proud Of</span>
        </h2>
        <p className="text-muted-foreground mt-5 max-w-xl mx-auto leading-relaxed">
          Real websites, for real people. No templates — every project is built from scratch.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group glass rounded-2xl overflow-hidden hover-glow block border-primary/5"
          >
            <div className="aspect-video bg-secondary/50 flex items-center justify-center relative">
              <div className="text-center px-4">
                <div className="font-display text-2xl font-bold text-foreground/50">{p.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{p.category}</div>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={14} className="text-primary" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold tracking-tight flex items-center gap-2">
                {p.title}
                <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </h3>
              <span className="text-xs text-primary/70 font-medium">{p.category}</span>
              <p className="text-sm text-muted-foreground mt-2.5 leading-relaxed">{p.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
