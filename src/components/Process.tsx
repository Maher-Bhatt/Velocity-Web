import { motion } from "framer-motion";
import { Search, Pencil, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", desc: "We learn about your business, your audience, and what success looks like for you." },
  { icon: Pencil, title: "Design", desc: "We design mockups you'll actually be excited about — not safe, forgettable layouts." },
  { icon: Code2, title: "Development", desc: "Clean, modern code built for speed, security, and long-term maintainability." },
  { icon: Rocket, title: "Launch", desc: "We deploy, test across devices, optimize performance, and hand you the keys." },
];

const Process = () => (
  <section id="process" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-primary/80 font-medium text-xs uppercase tracking-[0.2em]">How We Work</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 tracking-tight">
          From Idea to Launch in <span className="text-gradient">Weeks</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative glass rounded-2xl p-8 hover-glow text-center border-primary/10"
          >
            <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-primary text-primary-foreground font-display font-bold text-xs flex items-center justify-center">
              {i + 1}
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <s.icon size={24} className="text-primary/80" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3 tracking-tight">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
