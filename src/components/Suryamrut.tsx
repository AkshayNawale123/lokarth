import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sun,
  Droplets,
  Heart,
  Brain,
  Bone,
  Shield,
  CheckCircle2,
  Leaf,
  Baby,
  Briefcase,
  Users,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: Bone,
    title: "Bone Health",
    description: "Enhances Calcium absorption for stronger bones",
  },
  {
    icon: Shield,
    title: "Immunity",
    description: "Modulates immune response naturally",
  },
  {
    icon: Heart,
    title: "Cardiovascular",
    description: "Supports endothelial function and arterial health",
  },
  {
    icon: Brain,
    title: "Cognitive",
    description: "Supports brain development and mental wellness",
  },
];

const targetAudience = [
  {
    icon: Baby,
    label: "Pediatrics",
    description: "Growth & skeletal support",
  },
  {
    icon: Briefcase,
    label: "Adult Professionals",
    description: "Mental wellness & cardiovascular health",
  },
  {
    icon: Users,
    label: "Geriatrics",
    description: "Fall prevention and bone density",
  },
  {
    icon: Leaf,
    label: "Ethical Consumers",
    description: "Vegans looking for non-animal D3 sources",
  },
];

const productFeatures = [
  "Soft Chewable Veg Capsules (Water-Free, Anytime Intake)",
  "Daily Micro-dosing (600 IU) aligned with RDA standards",
  "Zero sugar, zero cholesterol, free from synthetic fats",
  "FSSAI Approved Health Supplement",
  "Safe for all ages (Kids 1+ to Geriatrics)",
  "Diabetic-safe formulation",
];

export const SuryAmrit = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="suryamrit"
      className="section-padding bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-amber-200/40 to-orange-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-yellow-200/30 to-amber-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container-custom mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider inline-flex items-center gap-2">
            <Sun className="w-4 h-4" />
            Vertical D: Nutraceuticals
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mt-3">
            <span className="text-gradient-gold">SuryAmrit</span>™
          </h2>
          <p className="text-xl md:text-2xl font-heading font-medium text-foreground/80 mt-4">
            The Grace of Ghee. The Power of the Sun.
          </p>
          <p className="text-muted-foreground mt-2 text-lg">Next-Gen Bio-Delivery System for Vitamin D3</p>
        </motion.div>

        {/* The Problem & Innovation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Problem Statement */}
          <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">82%</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground">The Critical Challenge</h3>
                <p className="text-muted-foreground">of Indians are Vitamin D deficient</p>
              </div>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              We address this critical statistic by reimagining how the body absorbs sunlight. SuryAmrit™ combines{" "}
              <strong>Lichen-based Vitamin D3</strong> (100% Plant-Based) with a proprietary{" "}
              <strong>Ghee-Based Nutrient Delivery System</strong>.
            </p>
          </div>

          {/* Technology Highlight */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-8 shadow-lg text-white">
            <h3 className="font-heading font-bold text-2xl mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              The Technology
            </h3>
            <div className="space-y-6">
              <div className="bg-white/20 rounded-2xl p-5 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <Droplets className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Matrix Enhancer</h4>
                    <p className="text-white/90 text-sm mt-1">
                      Utilizing 125 mg of pure Ghee to enhance fat-soluble absorption via lymphatic transport.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/20 rounded-2xl p-5 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <Leaf className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Ethical Source</h4>
                    <p className="text-white/90 text-sm mt-1">
                      Unlike traditional lanolin (sheep's wool) derived D3, we use Lichen (fungus + algae), making it
                      bioidentical yet 100% vegetarian and sustainable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Metabolic Pathway Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border/50">
            <h3 className="font-heading font-bold text-2xl text-foreground text-center mb-8">
              Vitamin D3 Metabolic Pathway
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              {[
                { icon: Sun, label: "Sunlight / SuryAmrit™", color: "from-yellow-400 to-amber-500" },
                { icon: "→", label: "", color: "" },
                { label: "Skin Absorption", color: "from-amber-400 to-orange-400" },
                { icon: "→", label: "", color: "" },
                { label: "Liver (25-OH D3)", color: "from-orange-400 to-red-400" },
                { icon: "→", label: "", color: "" },
                { label: "Kidney (Active D3)", color: "from-red-400 to-pink-400" },
              ].map((step, index) =>
                step.icon === "→" ? (
                  <div key={index} className="hidden md:block text-3xl text-accent font-bold">
                    →
                  </div>
                ) : step.icon ? (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80 text-center max-w-[100px]">
                      {step.label}
                    </span>
                  </div>
                ) : (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-xs font-bold text-white text-center px-2">{step.label.split(" ")[0]}</span>
                    </div>
                    <span className="text-sm font-medium text-foreground/80 text-center max-w-[100px]">
                      {step.label}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </motion.div>

        {/* Organ-Wide Impact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground text-center mb-10">
            Organ-Wide <span className="text-gradient-gold">Impact</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-md border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Product Profile & Target Audience */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Product Profile */}
          <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              Product Profile
            </h3>
            <div className="space-y-4">
              {productFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl border border-amber-200">
              <p className="text-sm text-foreground/80 italic">
                <strong>Clean Label Philosophy:</strong> Daily Micro-dosing (600 IU) aligned with RDA standards, proven
                to offer significantly better outcomes than large monthly bolus doses.
              </p>
            </div>
          </div>

          {/* Target Audience */}
          <div className="bg-primary rounded-3xl p-8 shadow-lg text-primary-foreground">
            <h3 className="font-heading font-bold text-2xl mb-6 flex items-center gap-3">
              <Users className="w-8 h-8" />
              Who Benefits?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {targetAudience.map((audience, index) => (
                <motion.div
                  key={audience.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/20 transition-colors"
                >
                  <audience.icon className="w-8 h-8 mb-3 text-accent" />
                  <h4 className="font-semibold text-sm">{audience.label}</h4>
                  <p className="text-xs text-primary-foreground/80 mt-1">{audience.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Ayurvedic Philosophy Callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary via-blue-900 to-primary rounded-3xl p-8 md:p-12 shadow-xl text-primary-foreground text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <Sun className="w-16 h-16 mx-auto mb-6 text-accent animate-pulse-slow" />
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">Rooted in Ayurvedic Wisdom</h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg leading-relaxed">
                SuryAmrit honors the ancient Ayurvedic understanding of <strong>Agni</strong> (digestive fire) and{" "}
                <strong>Ojas</strong> (vital essence). Ghee, revered for millennia as the ultimate carrier of nutrients,
                now delivers the power of the sun directly to your cells.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 bg-accent/20 px-6 py-3 rounded-full">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Innovations for People | Sustainable | Culturally Rooted</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
