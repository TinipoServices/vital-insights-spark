import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import heroImage from "@/assets/Digital-First.jpeg";
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
    subtitle: "Building the Neural Pathway for your Enterprise AI",
    description: "Modern AI is only as good as the data that feeds it. We design AI-Ready architectures that prioritize data quality, speed, and observability, ensuring your foundation can support the most demanding Large Language Models (LLMs) and autonomous agents.",
    features: [
      
      { icon: Database, text: "Modern AI Data Architecture: Designing scalable and high performing Data Lakes and Data Mesh frameworks (Snowflake, Databricks, AWS) tailored for high-velocity AI training and inference." },
      { icon: Cpu, text: "Autonomous Data Engineering and Data Application: Implementing self-healing ETL/ELT pipelines that use AI to automatically detect schema changes and resolve data quality issues.  Through a variety of software development and engineering platforms, we build and support data products and applications to meet your unique business needs." },
      { icon: Brain, text: "Data Ops Service: With focus on automation, orchestration, and quality of data pipelines, our primary goal is to shorten the cycle time between a data request and a delivered insight that drives decision making." },
      { icon: Search, text: "Intelligent Governance & Security: AI-powered monitoring for data lineage, privacy compliance (GDPR/HIPAA), and security threat detection." },
    ],
  },
  {
    id: "cognitive-bi",
    icon: BarChart3,
    title: "Cognitive BI & Decision Analytics",
    subtitle: "From Static Dashboards to Intelligent Copilots",
    description: "We are evolving Business Intelligence from reactive reporting to Prescriptive Intelligence. Vital Insight Labs helps to integrate AI Copilots directly into your BI tools (PBI, Tableau, GLooker, ThoughtSpot, Qlik etc.), allowing users to converse with their data in natural language and receive automated strategic narratives.",
    features: [
      { icon: TrendingUp, text: "AI-Augmented Dashboards and Reporting: Moving beyond charts to Insight Engines that automatically highlight anomalies and suggest the Why behind the data to support the commercial decision making" },
      { icon: MessageSquare, text: "Natural Language Querying (NLQ): Enabling non-technical stakeholders to ask, Why did sales dip in Europe? and receive a generated visual and text explanation instantly" },
      { icon: Brain, text: "Predictive & Prescriptive Modelling: Utilizing ML algorithms to move from What happened? to What will happen? and What should we do?" },
      { icon: Brain, text: "Commercial Intelligence: Expertise built on three strategic pillars: clinical, commercial, and promotional. With decades of experience, we utilize proven frameworks to uncover critical blind spots, empowering business leaders to make proactive, informed decisions." },
      { icon: PenTool, text: "Automated Narrative Generation: AI-driven executive summaries that translate complex data visualizations into clear, business-ready reports" },
      // { icon: MessageSquare, text: "Competitive Intelligence: Expertise built on three strategic pillars: clinical, commercial, and promotional. With decades of experience, we utilize proven frameworks to uncover critical blind spots, empowering business leaders to make proactive, informed decisions" },
    ],
  },
  {
    id: "digital-excellence",
    icon: Rocket,
    title: "Digital Excellence & Experience Design",
    subtitle: "The Art and Science of Digital Dominance",
    description: "At Vital Insight Labs, we believe that high-performance data architecture deserves an equally powerful digital presence. We move beyond simple web presence to create immersive digital ecosystems that drive discovery, engagement, and conversion.",
    features: [
      { icon: Globe, text: "UI/UX Design: Our designers create intuitive, high-fidelity interfaces that prioritize user journey and accessibility, turning complex data interactions into seamless digital experience" },
      { icon: Smartphone, text: "Website Design & Development: We build fast, responsive, and secure enterprise websites that serve as the primary engine for your brand’s digital authority" },
      { icon: Search, text: (
        <>
          <div>Digital Marketing</div>
          <div>Mobile App Development</div>
          <div>Search Engine Optimization</div>
        </>
      )},
      { icon: Code, text: "Discovery & Brand Audit: We conduct deep-dive technical and brand assessments to uncover hidden opportunities and align your digital strategy with core business KPIs" },
    ],
  },
  {
    id: "ai-consulting",
    icon: Compass,
    title: "Strategic Consulting & Domain Intelligence",
    subtitle: "Navigating the Market with Machine-Enhanced Foresight",
    description: "We combine deep industry expertise (Life Sciences, CPG & Retail) with AI-powered competitive intelligence. We don't just advise on strategy; we provide the tools and platforms to validate it.",
    features: [
      { icon: TrendingUp, text: "AI Strategy & Roadmap Development: Assessing your AI Maturity and identifying high-impact use cases that deliver immediate ROI" },
      { icon: Search, text: "Competitive Intelligence: Real-time, AI-driven tracking of competitor moves, clinical trials, and regulatory shifts using automated web-scale scraping and sentiment analysis" },
      { icon: BarChart3, text: "Commercial Analytics and Market Intelligence: Using advanced patient-flow and market-demand models to optimize product launches, pricing, and market access" },
      { icon: Brain, text: "Ethical AI & Risk Management: Consulting on responsible AI adoption, ensuring your models are unbiased, transparent, and compliant with global standards" },
    ],
  },
  {
    id: "agentic-ai",
    icon: Cpu,
    title: "Advanced AI Innovation & Agentic Operations",
    subtitle: "Deploying the next generation of autonomous business partners",
    description: "We specialize in the cutting edge of Agentic AI—autonomous agents that don't just provide information but execute complex workflows to optimize your operations.",
    features: [
      { icon: Brain, text: "Generative AI & Agentic Workflows: Developing custom AI agents for automated medical writing, legal review, and customer support orchestration" },
      { icon: Database, text: "MLOps & LLMOps: Building the infrastructure to deploy, monitor, and retrain your AI models at scale, preventing Model Drift and ensuring long-term accuracy" },
      { icon: Cpu, text: "Agentic Data Ops: Deploying autonomous AI workers to manage routine data maintenance, cleansing, and system-to-system integrations" },
      { icon: Globe, text: "Edge AI & IoT Analytics: Processing data at the source to enable real-time decision-making in manufacturing, logistics, and digital health" },
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
          className="flex text-center mb-16 flex-row gap-20 items-center"
        >
          <div className="bg-white w-[50%]">
            <img
              src={heroImage}   // path or URL
              alt="VIL Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
          <span className="text-primary font-medium text-2xl tracking-wider uppercase">
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
          </div>
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
              <span className="hidden sm:inline">{service.title}</span>
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
