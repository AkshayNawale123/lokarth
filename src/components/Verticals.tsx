import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Leaf, ArrowRight, CheckCircle2 } from "lucide-react";

const verticals = [
  {
    id: "positronics",
    icon: Zap,
    name: "Positronics",
    category: "Energy",
    headline: "Transforming Waste into Energy via Plasma Innovation",
    description:
      "Utilizing Plasma—the Fourth State of Matter. Our high-temperature plasma torches convert Municipal, Hazardous, and Biomedical waste into clean Synthesis Gas (Syngas) and inert vitrified slag.",
    features: [
      "Zero emissions of carcinogenic gases (dioxins, furans)",
      "Produces Electricity via Syngas",
      "Green Fuels: Hydrogen, Methanol, and SNG",
      "Reduction of landfill dependency",
    ],
    credibility: "Founded by IIT Kharagpur alumnus, with collaborations including IIT Delhi, Tata Steel, and DRDO.",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
  },
  {
    id: "raypure",
    icon: Shield,
    name: "Raypure",
    category: "Healthcare",
    headline: "Revolutionizing Indoor Sterility with Visible Light",
    description:
      "The world's first validated Visible Light-Based Disinfection System (Non-UV). It uses high-energy visible wavelengths (405-420 nm) to disrupt microbial membranes.",
    features: [
      "100% human-safe for continuous 24/7 operation",
      "95% reduction of SARS-CoV-2 (Validated by CSIR-CCMB)",
      "70% reduction of airborne microbials (Validated by Oliva Clinics)",
      "No heating, no glare, no harmful UV rays",
    ],
    credibility: "ISO 9001:2015, GreenPro compliant, and tested by UNSW Australia.",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
  },
  {
    id: "innovations",
    icon: Leaf,
    name: "Lokarth Innovations",
    category: "Agriculture",
    headline: "Nourish Naturally",
    description:
      'Philosophy: "If we fix THE SOIL, We have the best chance of fixing the whole." Complete product portfolio for sustainable soil and crop nutrition.',
    features: [
      "SOIL-EX™ & MAX-YEILD™: Complete Nutrition Solutions",
      "BIO-NOX™: Pest, Insect, Fungus & Virus Protection",
      "ROOT-GAURD™: Harmful Nematode Antagonist",
      "BOVI-GREEN™: Tonic for Bovine Rejuvenation",
    ],
    credibility: "Proven results across thousands of acres with organic certification.",
    gradient: "from-emerald-500 via-green-500 to-lime-500",
    bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
  },
];

export const Verticals = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="verticals" className="section-padding bg-background" ref={ref}>
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Innovations
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mt-3">
            Four Pillars of <span className="text-gradient-gold">Change</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We focus on four critical verticals where sustainable innovation can
            create the most significant positive impact on humanity and the planet.
          </p>
        </motion.div>

        {/* Verticals Cards */}
        <div className="space-y-8">
          {verticals.map((vertical, index) => (
            <motion.div
              key={vertical.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${vertical.bgColor} rounded-3xl p-8 md:p-12 hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${vertical.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <vertical.icon size={28} className="text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground font-medium">
                        {vertical.category}
                      </span>
                      <h3 className="font-heading font-bold text-2xl text-foreground">
                        {vertical.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-4">
                    {vertical.headline}
                  </p>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {vertical.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {vertical.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground italic border-l-4 border-accent pl-4">
                    {vertical.credibility}
                  </p>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} flex justify-center`}>
                  <div className="relative">
                    <div
                      className={`w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r ${vertical.gradient} opacity-20 blur-3xl absolute inset-0`}
                    />
                    <div
                      className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r ${vertical.gradient} flex items-center justify-center shadow-2xl`}
                    >
                      <vertical.icon size={80} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
