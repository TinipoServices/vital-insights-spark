import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, X, Sparkles } from "lucide-react";

const comparisonData = [
  {
    traditional: "Manual Data Cleaning",
    aifirst: "Self-Healing Data Pipelines",
  },
  {
    traditional: "Static Reports (What happened)",
    aifirst: "Prescriptive Insights (What to do)",
  },
  {
    traditional: "Human-led Data Discovery",
    aifirst: "AI-Powered 'Copilots' for all users",
  },
  {
    traditional: "Periodic Strategy Reviews",
    aifirst: "Real-time Competitive Monitoring",
  },
];

const sliderStages = [
  { label: "Foundational", description: "Data Engineering & Basic BI" },
  { label: "Advanced", description: "Predictive Modeling & Cloud Migration" },
  { label: "Transformative", description: "Agentic AI & Autonomous Data Ops" },
];

const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sliderValue, setSliderValue] = useState(1);

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 neural-bg opacity-30" />

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
            Why AI-First
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            The <span className="text-gradient">AI-First</span> Advantage
          </h2>
          <p className="text-muted-foreground text-lg">
            See how our approach transforms traditional analytics into 
            intelligent, autonomous operations.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl overflow-hidden mb-16"
        >
          <div className="grid grid-cols-2">
            <div className="p-6 border-b border-r border-border bg-muted/30">
              <h4 className="font-heading font-semibold text-muted-foreground">
                Traditional Analytics
              </h4>
            </div>
            <div className="p-6 border-b border-border bg-gradient-to-r from-vil-cyan/10 to-vil-purple/10">
              <h4 className="font-heading font-semibold text-primary flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Our AI-First Approach
              </h4>
            </div>
          </div>

          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="grid grid-cols-2"
            >
              <div className="p-6 border-b border-r border-border flex items-center gap-3">
                <X className="w-5 h-5 text-muted-foreground shrink-0" />
                <span className="text-muted-foreground">{row.traditional}</span>
              </div>
              <div className="p-6 border-b border-border flex items-center gap-3 bg-gradient-to-r from-vil-cyan/5 to-transparent">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground font-medium">{row.aifirst}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Value Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card rounded-2xl p-8 md:p-12"
        >
          <h3 className="font-heading text-2xl font-semibold text-center mb-8">
            AI Value Slider
          </h3>

          {/* Slider */}
          <div className="max-w-2xl mx-auto mb-8">
            <input
              type="range"
              min="0"
              max="2"
              value={sliderValue}
              onChange={(e) => setSliderValue(parseInt(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              style={{
                background: `linear-gradient(to right, hsl(192, 95%, 55%) 0%, hsl(192, 95%, 55%) ${sliderValue * 50}%, hsl(var(--muted)) ${sliderValue * 50}%, hsl(var(--muted)) 100%)`,
              }}
            />
            <div className="flex justify-between mt-2">
              {sliderStages.map((stage, index) => (
                <span
                  key={stage.label}
                  className={`text-xs sm:text-sm transition-colors ${
                    sliderValue === index ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {stage.label}
                </span>
              ))}
            </div>
          </div>

          {/* Active Stage Display */}
          <motion.div
            key={sliderValue}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center p-6 rounded-xl bg-gradient-to-r from-vil-cyan/10 to-vil-purple/10 border border-primary/20"
          >
            <h4 className="font-heading text-xl font-semibold text-primary mb-2">
              {sliderStages[sliderValue].label}
            </h4>
            <p className="text-muted-foreground">
              {sliderStages[sliderValue].description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
