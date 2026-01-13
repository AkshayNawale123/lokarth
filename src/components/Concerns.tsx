import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mountain, Droplets, TreeDeciduous, Wind, Bug } from "lucide-react";

const concerns = [
  {
    icon: Mountain,
    title: "Soil Degradation",
    stat: "1 acre / second",
    description: "We are losing an acre of soil every second globally.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: TreeDeciduous,
    title: "Carbon Stress",
    stat: "63%",
    description: "of soils in India are under severe stress with less than 0.5% organic carbon.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Droplets,
    title: "Water Crisis",
    stat: "33%",
    description: "of land biodiversity loss due to degradation of freshwater ecosystems.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Bug,
    title: "Species at Risk",
    stat: "86%",
    description: "of microbial species are threatened by agricultural practices.",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: Wind,
    title: "Carbon Emissions",
    stat: "250 years",
    description: "More emissions from agriculture & deforestation than all industries combined.",
    color: "bg-purple-500/10 text-purple-600",
  },
];

export const Concerns = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-primary text-primary-foreground" ref={ref}>
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            The Urgency
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl mt-3">
            Why We <span className="text-gradient-gold">Exist</span>
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
            Global environmental challenges demand immediate action. These numbers
            highlight the critical need for sustainable innovation.
          </p>
        </motion.div>

        {/* Concerns Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {concerns.map((concern, index) => (
            <motion.div
              key={concern.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${concern.color} flex items-center justify-center mb-4`}>
                <concern.icon size={24} />
              </div>
              <p className="text-3xl font-heading font-bold text-accent mb-2">
                {concern.stat}
              </p>
              <h3 className="font-semibold text-lg mb-2">{concern.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {concern.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
