import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "919879529957";
const EMAIL = "velocitywe6@gmail.com";
const PHONE = "+91 9879529957";

const inputClasses =
  "w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all text-sm";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Velocity Web! 👋\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Subject:* ${form.subject}\n*Message:* ${form.message}`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary/80 font-medium text-xs uppercase tracking-[0.2em]">Contact</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 tracking-tight">
            Let's Build <span className="text-gradient">Something Great</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto leading-relaxed">
            Have a project in mind? Drop us a message and we'll get back to you within a few hours — usually faster.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 space-y-5 border-primary/5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input type="text" name="name" placeholder="Your Name" required value={form.name} onChange={handleChange} className={inputClasses} />
              <input type="email" name="email" placeholder="Your Email" required value={form.email} onChange={handleChange} className={inputClasses} />
            </div>
            <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} className={inputClasses} />
            <textarea name="message" placeholder="Tell us about your project..." rows={5} required value={form.message} onChange={handleChange} className={`${inputClasses} resize-none`} />
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold glow-primary hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Send via WhatsApp <MessageCircle size={16} />
            </button>
            <p className="text-xs text-muted-foreground/50 text-center">
              This opens WhatsApp with your message pre-filled.
            </p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 justify-center"
          >
            <a href={`mailto:${EMAIL}`} className="glass rounded-2xl p-6 hover-glow flex items-center gap-4 group border-primary/5">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail size={20} className="text-primary/70" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-semibold text-sm group-hover:text-primary transition-colors">Email Us</div>
                <div className="text-sm text-muted-foreground">{EMAIL}</div>
              </div>
            </a>
            <a href={`tel:${PHONE}`} className="glass rounded-2xl p-6 hover-glow flex items-center gap-4 group border-primary/5">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone size={20} className="text-primary/70" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-semibold text-sm group-hover:text-primary transition-colors">Call Us</div>
                <div className="text-sm text-muted-foreground">{PHONE}</div>
              </div>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-6 hover-glow flex items-center gap-4 group border-primary/5">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageCircle size={20} className="text-primary/70" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-semibold text-sm group-hover:text-primary transition-colors">WhatsApp</div>
                <div className="text-sm text-muted-foreground">Chat with us instantly</div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
