import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Brain, 
  BarChart3, 
  Rocket, 
  Compass, 
  Cpu,
  ChevronRight,
  Database,
  MessageSquare,
  TrendingUp,
  Globe,
  Smartphone,
  Search,
  PenTool,
  Code
} from "lucide-react";

const services = [
  {
    id: "data-engineering",
    icon: Brain,
    title: "AI-Driven Data Engineering & Architecture",
    subtitle: "Building the 'Neural Pathway' for your Enterprise AI",
    description: "Modern AI is only as good as the data that feeds it. We design 'AI-Ready' architectures that prioritize data quality, speed, and observability.",
    features: [
      { icon: Database, text: "Modern AI Data Architecture with Snowflake, Databricks, AWS" },
      { icon: Cpu, text: "Self-healing ETL/ELT pipelines with AI-powered quality resolution" },
      { icon: Brain, text: "Vector Databases & RAG architectures for Generative AI" },
      { icon: Search, text: "Intelligent Governance & Security monitoring" },
    ],
  },
  {
    id: "cognitive-bi",
    icon: BarChart3,
    title: "Cognitive BI & Decision Analytics",
    subtitle: "From Static Dashboards to Intelligent Copilots",
    description: "We evolve Business Intelligence from reactive reporting to Prescriptive Intelligence with AI 'Copilots' integrated directly into your BI tools.",
    features: [
      { icon: TrendingUp, text: "AI-Augmented Dashboards with automatic anomaly detection" },
      { icon: MessageSquare, text: "Natural Language Querying for non-technical stakeholders" },
      { icon: Brain, text: "Predictive & Prescriptive Modelling" },
      { icon: PenTool, text: "Automated Narrative Generation for executive reports" },
    ],
  },
  {
    id: "digital-excellence",
    icon: Rocket,
    title: "Digital Excellence & Experience Design",
    subtitle: "The Art and Science of Digital Dominance",
    description: "We create immersive digital ecosystems that drive discovery, engagement, and conversion beyond simple web presence.",
    features: [
      { icon: Globe, text: "Website Design & Development with enterprise-grade security" },
      { icon: Smartphone, text: "Mobile App Development for iOS and Android" },
      { icon: Search, text: "SEO & Performance Marketing for digital authority" },
      { icon: Code, text: "Custom Software Development & CRM integrations" },
    ],
  },
  {
    id: "ai-consulting",
    icon: Compass,
    title: "Strategic AI Consulting & Domain Intelligence",
    subtitle: "Machine-Enhanced Foresight",
    description: "We combine deep industry expertise with AI-powered competitive intelligence. We don't just advise on strategy; we provide predictive tools to validate it.",
    features: [
      { icon: TrendingUp, text: "AI Strategy & Roadmap Development" },
      { icon: Search, text: "AI-Enhanced Competitive Intelligence" },
      { icon: BarChart3, text: "Predictive Commercial Strategy" },
      { icon: Brain, text: "Ethical AI & Risk Management consulting" },
    ],
  },
  {
    id: "agentic-ai",
    icon: Cpu,
    title: "Advanced AI Innovation & Agentic Operations",
    subtitle: "Next-gen Autonomous Business Partners",
    description: "We specialize in Agentic AI—autonomous agents that don't just provide information but execute complex workflows to optimize operations.",
    features: [
      { icon: Brain, text: "Generative AI & Agentic Workflows" },
      { icon: Database, text: "MLOps & LLMOps infrastructure" },
      { icon: Cpu, text: "Agentic Data Ops for automated maintenance" },
      { icon: Globe, text: "Edge AI & IoT Analytics" },
    ],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeService, setActiveService] = useState(services[0].id);

  const activeServiceData = services.find((s) => s.id === activeService)!;

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

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
            Our Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Integrated Solutions for{" "}
            <span className="text-gradient">Intelligent Autonomy</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide an integrated lifecycle of services—from foundational engineering 
            to high-performance digital experiences—designed to turn complexity into your 
            primary competitive advantage.
          </p>
        </motion.div>

        {/* Services Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeService === service.id
                  ? "bg-primary text-primary-foreground"
                  : "glass-card hover:border-primary/50"
              }`}
            >
              <service.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{service.title.split(" ")[0]}</span>
              <span className="sm:hidden">{service.title.split(" ")[0].slice(0, 6)}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Service Display */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card rounded-2xl p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-vil-cyan to-vil-purple flex items-center justify-center">
                  <activeServiceData.icon className="w-7 h-7 text-background" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold">
                    {activeServiceData.title}
                  </h3>
                  <p className="text-primary text-sm">{activeServiceData.subtitle}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-lg mb-6">
                {activeServiceData.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Learn More <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {activeServiceData.features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border/50"
                >
                  <feature.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
