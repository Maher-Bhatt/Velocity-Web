import { motion } from "framer-motion";
import { Check, Database } from "lucide-react";

const plans = [
  {
    name: "Essential",
    price: "$349",
    desc: "Everything a growing business needs to get online and start converting — no fluff, no upsells.",
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
    popular: true,
    highlight: null,
  },
  {
    name: "Premium",
    price: "$999",
    desc: "For businesses that need real power — custom backend, data collection, and full-scale features.",
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
    popular: false,
    highlight: "Custom database connected to your forms — collect, manage, and export client data seamlessly.",
  },
];

const Pricing = () => (
  <section id="pricing" className="section-padding">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-primary/80 font-medium text-xs uppercase tracking-[0.2em]">Pricing</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 tracking-tight">
          Honest Pricing, <span className="text-gradient">No Surprises</span>
        </h2>
        <p className="text-muted-foreground mt-5 max-w-xl mx-auto leading-relaxed">
          Two plans. Clear value. Pick what fits and we'll handle the rest.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative glass rounded-2xl p-8 hover-glow ${plan.popular ? "glow-border" : "border-primary/5"}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                Best Value
              </div>
            )}
            <h3 className="font-display text-xl font-semibold tracking-tight">{plan.name}</h3>
            <div className="mt-4 mb-2">
              <span className="font-display text-4xl font-bold text-primary">{plan.price}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-7">{plan.desc}</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <Check size={15} className="text-primary/70 flex-shrink-0" strokeWidth={2} />
                  <span className="text-foreground/75">{f}</span>
                </li>
              ))}
            </ul>
            {plan.highlight && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10 mb-7">
                <Database size={16} className="text-primary/70 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-sm text-foreground/70 leading-relaxed">{plan.highlight}</p>
              </div>
            )}
            <a
              href="#contact"
              className={`block text-center py-3.5 rounded-xl font-semibold transition-all ${
                plan.popular
                  ? "bg-primary text-primary-foreground glow-primary hover:opacity-90"
                  : "glass hover:text-primary border-primary/10"
              }`}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
