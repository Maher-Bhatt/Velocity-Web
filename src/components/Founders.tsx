import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const founders = [
  {
    name: "Maher Bhatt",
    initials: "MB",
    role: "Web Developer · UX/UI",
    bio: "Maher is the one staring at your website at 2 AM adjusting padding by one pixel. He's deeply passionate about user experience — not in the corporate-buzzword way, but in the \"I genuinely can't sleep if this button feels off\" way. He turns messy briefs into interfaces that feel intuitive from the very first tap.",
    link: "https://maherbhatt.me",
    linkLabel: "maherbhatt.me",
  },
  {
    name: "Anurag Pandey",
    initials: "AP",
    role: "Web Developer · QC Lead",
    bio: "Anurag is the person who intentionally tries to break everything before your users ever get the chance. Bugs don't survive him. He combines a developer's eye with a tester's paranoia, so every site we ship is polished, responsive, and rock-solid across every device and browser.",
    link: null,
    linkLabel: null,
  },
  {
    name: "Jaydev Singh Gohil",
    initials: "JG",
    role: "Backend Dev · SEO Expert",
    bio: "Jaydev builds the stuff you never see but always feel — fast load times, clean databases, and the kind of SEO structure that makes Google actually pay attention. If your site ranks well and your data flows smoothly, that's Jaydev quietly doing his thing in the background.",
    link: null,
    linkLabel: null,
  },
];

const Founders = () => (
  <section id="founders" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-primary/80 font-medium text-xs uppercase tracking-[0.2em]">The Team</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 tracking-tight">
          Three People. <span className="text-gradient">That's the Whole Company.</span>
        </h2>
        <p className="text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed">
          No account managers. No outsourcing. No layers of approval. When you hire Velocity Web, you work
          directly with the people who design, build, and ship your website.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {founders.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass rounded-2xl p-8 hover-glow flex flex-col items-center text-center border-primary/5"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 ring-1 ring-primary/20">
              <Avatar className="w-full h-full">
                <AvatarFallback className="bg-transparent text-primary font-display font-bold text-xl">
                  {f.initials}
                </AvatarFallback>
              </Avatar>
            </div>
            <h3 className="font-display text-xl font-semibold tracking-tight">{f.name}</h3>
            <p className="text-primary/80 text-sm font-medium mt-1.5 mb-5">{f.role}</p>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{f.bio}</p>
            {f.link && (
              <a
                href={f.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary/80 hover:text-primary transition-colors mt-5"
              >
                {f.linkLabel} <ExternalLink size={12} />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Founders;
