import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-20" />

    <div className="container relative z-10 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-primary/20 bg-secondary/50 mb-10"
        >
          <Clock size={14} className="text-primary" />
          <span className="text-sm font-medium text-muted-foreground">Average turnaround: 2 working weeks</span>
        </motion.div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.08] tracking-tight mb-7">
          Websites That{" "}
          <br className="hidden sm:block" />
          <span className="text-gradient">Convert, Perform</span>
          <br className="hidden sm:block" />
          & Scale Your Business
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          We design and build premium websites that drive real results — fast-loading, conversion-optimised, and delivered in <strong className="text-foreground">2 weeks</strong>, not months.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-all flex items-center gap-2.5 glow-primary"
          >
            Let's Talk
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 rounded-xl border border-primary/30 font-semibold text-primary hover:bg-primary/10 transition-colors"
          >
            See Our Work
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-20"
        >
          {[
            { value: "2 Weeks", label: "Avg. Turnaround" },
            { value: "100%", label: "Founder-Built" },
            { value: "3", label: "Founders" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
