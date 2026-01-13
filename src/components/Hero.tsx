import { motion } from "framer-motion";
import { ArrowDown, Zap, Heart, Leaf } from "lucide-react";
import lokarthLogo from "@/assets/lokarth-logo.jpeg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/30 rounded-full blur-2xl animate-pulse-slow" />
              <img
                src={lokarthLogo}
                alt="Lokarth Sun Logo"
                className="relative w-28 h-28 md:w-36 md:h-36 object-contain rounded-full shadow-glow-gold-lg animate-float"
              />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6"
          >
            Innovations{" "}
            <span className="text-gradient-gold">for People</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
          >
            Bridging the gap between stagnation and regeneration. We identify
            critical challenges in Energy, Health, and Agriculture to deliver
            futuristic, sustainable technologies.
          </motion.p>

          {/* Vertical Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-8 mb-12"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full gradient-blue flex items-center justify-center text-primary-foreground">
                <Zap size={24} />
              </div>
              <span className="text-sm text-muted-foreground font-medium">Energy</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full gradient-blue flex items-center justify-center text-primary-foreground">
                <Heart size={24} />
              </div>
              <span className="text-sm text-muted-foreground font-medium">Healthcare</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full gradient-blue flex items-center justify-center text-primary-foreground">
                <Leaf size={24} />
              </div>
              <span className="text-sm text-muted-foreground font-medium">Agriculture</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="gradient-gold text-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-glow-gold hover:shadow-glow-gold-lg transition-all duration-300 hover:scale-105"
          >
            Discover Our Mission
          </motion.a>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-muted-foreground"
            >
              <ArrowDown size={28} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
