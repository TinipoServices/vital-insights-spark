import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FlaskConical, 
  ShoppingCart, 
  Check,
  Dna,
  LineChart,
  Brain,
  Cpu,
  Package,
  Users,
  TrendingUp,
  Truck
} from "lucide-react";

const industries = [
  {
    icon: FlaskConical,
    title: "Life Sciences & Pharmaceuticals",
    subtitle: "Accelerating the path from Lab to Bedside with Intelligent Data",
    description: "In an industry defined by rigorous regulation and vast R&D timelines, we use AI to compress cycles and optimize commercial impact.",
    features: [
      { icon: Dna, text: "AI-Ready Research Foundations with compliant Data Lakehouses" },
      { icon: LineChart, text: "Cognitive Commercial Excellence with Predictive Prescriber Analytics" },
      { icon: Brain, text: "Strategic Market Intelligence with AI-driven monitoring" },
      { icon: Cpu, text: "Agentic Operations for automated workflows" },
    ],
    gradient: "from-vil-cyan/20 to-vil-teal/20",
  },
  {
    icon: ShoppingCart,
    title: "Retail & Consumer Goods (CPG)",
    subtitle: "Mastering the Hyper-Personalized Customer Journey",
    description: "We help retail organizations move from reactive management to proactive, AI-driven market leadership.",
    features: [
      { icon: Package, text: "Unified Commerce Architecture for a single 'Consumer Truth'" },
      { icon: TrendingUp, text: "Autonomous Demand Forecasting with real-time pricing" },
      { icon: Users, text: "AI-First Consumer Strategy with hyper-segmentation" },
      { icon: Truck, text: "Agentic Supply Chain Ops for last-mile optimization" },
    ],
    gradient: "from-vil-purple/20 to-vil-cyan/20",
  },
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Industries We Serve
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Specialized Solutions for{" "}
            <span className="text-gradient">High-Stakes Industries</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We deliver AI-integrated solutions for industries where data complexity 
            is high and the margin for error is low.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              {/* Header */}
              <div className={`p-8 bg-gradient-to-br ${industry.gradient}`}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-background/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-1">
                      {industry.title}
                    </h3>
                    <p className="text-primary text-sm">{industry.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-muted-foreground mb-6">{industry.description}</p>
                
                <div className="space-y-4">
                  {industry.features.map((feature, fIndex) => (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + fIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <feature.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
