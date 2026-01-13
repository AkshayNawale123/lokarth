import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, User } from "lucide-react";

const leaders = [
  {
    name: "Rajiv ID Mehta",
    role: "President",
    email: "president@lokarth.org",
    phone: "+91 98182 50020",
  },
  {
    name: "Rupesh Chandanshiv",
    role: "Managing Trustee",
    email: "mt@lokarth.org",
    phone: "+91 93732 28844",
  },
  {
    name: "Vinay Kulkarni",
    role: "Ex. Director - Service",
    email: "vkulkarni@lokarth.org",
    phone: "+91 98502 99263",
  },
  {
    name: "Satish Khade",
    role: "Ex. Director - Water",
    email: "smkhade@lokarth.org",
    phone: "+91 98230 30218",
  },
  {
    name: "Dhananjay Agavekar",
    role: "Ex. Director - Agriculture",
    email: "dvagavekar@lokarth.org",
    phone: "+91 90048 53400",
  },
  {
    name: "Prasad Gaikwad",
    role: "Ex. Director - Extension",
    email: "ppgaikwad@lokarth.org",
    phone: "+91 99161 52424",
  },
  {
    name: "Janak Patel",
    role: "Ex. Director - Dairy",
    email: "jnpatel@lokarth.org",
    phone: "+91 97255 43469",
  },
  {
    name: "Vivek Rajguru",
    role: "Ex. Director - Extension",
    email: "vcrajguru@lokarth.org",
    phone: "+91 97255 43469",
  },
];

export const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mt-3">
            Leadership <span className="text-gradient-gold">Board</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Guided by experienced professionals committed to sustainable innovation
            and positive environmental impact.
          </p>
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.email}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <User size={36} className="text-primary-foreground" />
              </div>

              {/* Info */}
              <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                {leader.name}
              </h3>
              <p className="text-accent font-medium text-sm mb-4">{leader.role}</p>

              {/* Contact */}
              <div className="space-y-2">
                <a
                  href={`mailto:${leader.email}`}
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={14} />
                  <span className="truncate">{leader.email}</span>
                </a>
                <a
                  href={`tel:${leader.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone size={14} />
                  <span>{leader.phone}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
