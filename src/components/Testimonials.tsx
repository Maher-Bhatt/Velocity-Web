import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Rudra Pandya",
    role: "Founder of Ztees",
    initials: "RP",
    badge: "Z",
    text: "They delivered our entire store website in roughly 2 working days. It is incredibly polished, and we are already seeing noticeable growth after launching the website. It has been very helpful.",
  },
  {
    name: "Harshal Patel",
    role: "Student, ITM SLS Baroda University",
    initials: "HP",
    badge: "ITM",
    text: "I randomly texted Velocity Web asking them to make a note-sharing website for CETS. Honestly, I was just having fun with them, but they actually did it as a charity project! I am so happy with what they built. That's why these guys are so good.",
  },
];

const Testimonials = () => (
  <section className="section-padding relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-primary/80 font-medium text-xs uppercase tracking-[0.2em]">Testimonials</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 tracking-tight">
          Loved by <span className="text-gradient">Client Founders</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass rounded-2xl p-8 hover-glow flex flex-col border-primary/10"
          >
            <div className="flex items-center justify-between mb-6">
              <Quote size={24} className="text-primary/25" />
              <div className="px-3 py-1 rounded-md border border-primary/20 bg-primary/5 text-primary font-display font-bold text-xs tracking-wider">
                {t.badge}
              </div>
            </div>
            <p className="text-foreground/85 leading-relaxed text-[0.95rem] flex-1">{t.text}</p>
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-border/30">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-primary/10 text-primary text-xs font-display font-semibold">
                  {t.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-display font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
              <div className="flex gap-0.5 ml-auto">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={13} className="text-primary fill-primary" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
