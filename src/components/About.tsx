import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Who We Are
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mt-3">
            Lokpeeth Foundation
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A Section 8 Non-Profit organization dedicated to creating sustainable innovations
            that empower communities and protect our planet.
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 md:p-10 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mb-6 shadow-glow-gold">
              <Eye size={32} className="text-foreground" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-xl font-semibold text-gradient-gold mb-4">
              Empowering a Greener Future
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We envision a world where humans and nature thrive in harmony, where
              sustainable innovations drive positive change and create a
              regenerative and resilient environment for future generations.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-2xl p-8 md:p-10 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 rounded-2xl gradient-blue flex items-center justify-center mb-6">
              <Target size={32} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-xl font-semibold text-gradient-gold mb-4">
              Sustainable Innovations
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At the core of our mission is a commitment to continuous research and
              development of sustainable innovations. We leverage emerging
              technologies and creative problem-solving to design products,
              services, and processes that minimize ecological impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
