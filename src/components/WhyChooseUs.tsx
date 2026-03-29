import { motion } from "framer-motion";
import { Zap, TrendingUp, Shield, Users } from "lucide-react";

const reasons = [
  { icon: Zap, title: "2-Week Delivery", desc: "Most websites go live within 2 working weeks — designed, built, tested, and deployed. We don't drag things out." },
  { icon: TrendingUp, title: "Built to Convert", desc: "Every design decision serves your bottom line. A pretty website that doesn't perform is just expensive decoration." },
  { icon: Shield, title: "No Middlemen", desc: "You talk directly to the people building your site. No project managers, no hand-offs, no telephone game." },
  { icon: Users, title: "Human-First Design", desc: "We design for the people who'll actually use your site — not for design awards or portfolio screenshots." },
];

const WhyChooseUs = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-primary/80 font-medium text-xs uppercase tracking-[0.2em]">Why Us</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 tracking-tight">
          Why People <span className="text-gradient">Choose Velocity Web</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center glass rounded-2xl p-8 hover-glow border-primary/5"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <r.icon size={24} className="text-primary/80" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3 tracking-tight">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
