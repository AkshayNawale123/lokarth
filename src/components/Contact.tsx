import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Globe, Send } from "lucide-react";
import lokarthLogo from "@/assets/lokarth-logo.jpeg";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground" ref={ref}>
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl mt-3 mb-6">
              Let's Build a <span className="text-gradient-gold">Greener Future</span>
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-lg">
              Interested in our innovations or want to collaborate? Reach out to us
              and let's explore how we can work together for a sustainable tomorrow.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Headquarters</h3>
                  <p className="text-primary-foreground/70">
                    1774, Block B1, Vasant Kunj,<br />
                    New Delhi, 110070, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a
                    href="mailto:lokarthinnovations@gmail.com"
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    lokarthinnovations@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Globe size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Website</h3>
                  <a
                    href="https://www.lokarth.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    www.lokarth.org
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-3xl p-8 md:p-10"
          >
            <h3 className="font-heading font-bold text-2xl mb-6">Send us a Message</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can we help?"
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your inquiry..."
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full gradient-gold text-foreground py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-glow-gold transition-shadow duration-300"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
