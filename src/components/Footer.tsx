import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import heroImage from "@/assets/logo.png";

const footerLinks = {
  services: [
    { name: "Data Engineering", href: "#services" },
    { name: "Cognitive BI", href: "#services" },
    { name: "Digital Excellence", href: "#services" },
    { name: "AI Consulting", href: "#services" },
  ],
  industries: [
    { name: "Life Sciences & Pharmaceuticals", href: "#industries" },
    // { name: "Pharmaceuticals", href: "#industries" },
    { name: "Retail & CPG", href: "#industries" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Approach", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
};

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-vil-cyan to-vil-purple flex items-center justify-center">
                <span className="text-background font-heading font-bold text-lg">V</span>
              </div>
              <span className="font-heading font-semibold text-lg">Vital Insight Labs</span>
            </div> */}
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-20 h-20 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <img
              src={heroImage}   // path or URL
              alt="VIL Logo"
              className="w-full h-full object-cover"
            />
              </div>
              <span className="font-heading font-semibold text-lg text-foreground hidden sm:block">
                Vital Insight Labs
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Empowering organizations with expert intelligence and automated data operations. 
              From complex data to smarter business outcomes.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Vital Insight Labs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
