import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Shield, Zap, Sparkles, Target, Eye } from "lucide-react";
import heroImage from "@/assets/Convergenace_2.png";

const pillars = [
  {
    icon: Users,
    title: "Client-First Partnership",
    description: "At Vital Insight Labs, we Co-Create We don't operate as a detached vendor; VIL function as an extension of your team. By eliminating conflicts of interest and focusing deeply on client’s specific business KPIs, we ensure every solution is handcrafted to meet the unique commercial or operational needs of our clients",
  },
  {
    icon: Sparkles,
    title: "Digital First Experience",
    description: "We believe technology should be intuitive and flawless. Whether it is an internal AI Copilot or a global consumer platform, we design for the human at the other end of the screen to ensure sustainable transformation",
  },
  {
    icon: Shield,
    title: "Deep Domain Expertise",
    description: "Data is meaningless without context. Our team is a powerhouse of diverse talent—comprising MBAs, Data Scientists, Visualisation Experts, and Domain SMEs with decades of experience in Life Sciences, Pharma, and Retail & Consumer Goods",
  },
  {
    icon: Zap,
    title: "Agile & Value-Driven",
    description: "In a fast-moving market, scale and speed is a metric of success. At VIL, we utilize an agile delivery model that prioritizes high-impact wins first. Our commitment is to deliver actionable discoveries which are timely and future-proof, that are easy to adopt, transparent to audit, and ready to scale as your business grows ensuring a tangible Return on Investment (ROI) for every project we undertake",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 neural-bg opacity-50" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-2xl tracking-wider uppercase">
            About Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Where Data Engineering Meets{" "}
            <span className="text-gradient">Digital Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            In an era where information is abundant but clarity is rare, Vital Insight Labs 
            serves as a premier Analytics, Consulting, and Digital Service partner that builds 
            the "neural pathways" for AI and the "digital storefronts" for your business.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-4xl font-semibold mb-4">Our Story</h3>
              <p className="text-muted-foreground mb-4">
                Our story is one of <span className="italic">convergence</span>.
              </p>
              <p className="text-muted-foreground mb-4">
                We realized that a future-proof data pipeline 
                is only as effective as the digital experience that delivers it.
              </p>
              <p className="text-muted-foreground">
                From designing high-performance data architecture to mastering the hyper-personalized 
                customer journey, our journey is defined by the success of the intelligent, autonomous 
                glass box enterprise solutions that empower our clients to drive impact and business growth.
              </p>
            </div>
            {/* <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-vil-cyan/20 to-vil-purple/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-gradient mb-2">VIL</div>
                  <div className="text-sm text-muted-foreground">Radical Simplification</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 animate-pulse-glow" />
            </div> */}
          <div className="relative">
          {/* <div className="aspect-square rounded-4xl overflow-hidden bg-gradient-to-br from-vil-cyan/20 to-vil-purple/20 flex items-center justify-center">
          <img
            src={heroImage}   // path or URL
            alt="VIL Logo"
            className="w-full h-full object-contain"
          />
          </div> */}
          <div className="rounded-4xl overflow-hidden bg-gradient-to-br from-vil-cyan/20 to-vil-purple/20 flex items-center justify-center">
  <img
    src={heroImage}
    alt="VIL Logo"
    className="w-full object-contain"
  />
</div>
          {/* <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 animate-pulse-glow" /> */}
          </div>
          </div>
        </motion.div>

        {/* Our Approach - 4 Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-center mb-4">
            Our Approach
          </h3>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Built on four core strengths that ensure we don't just solve problems, 
            but drive sustainable transformation.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-vil-cyan/20 to-vil-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">{pillar.title}</h4>
                <p className="text-muted-foreground text-sm">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card rounded-xl p-8 border-l-4 border-l-primary"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-primary" />
              <h4 className="font-heading font-semibold text-xl">Our Mission</h4>
            </div>
            <p className="text-muted-foreground">
              To empower organizations with expert intelligence and automated data and digital 
              operations, simplifying the path from complex data to smarter business outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card rounded-xl p-8 border-l-4 border-l-vil-purple"
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-vil-purple" />
              <h4 className="font-heading font-semibold text-xl">Our Vision</h4>
            </div>
            <p className="text-muted-foreground">
              To be the most-admired strategic partner in the data-driven journey, revolutionizing 
              how industries use analytics and customer experience to improve operational excellence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
