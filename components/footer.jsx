"use client";

import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  programs: [
    "Full Stack Development",
    "Data Science",
    "Cloud Computing",
    "Cybersecurity",
    "Mobile Development",
    "AI & Machine Learning",
  ],
  company: [
    "About Us",
    "Our Team",
    "Careers",
    "Blog",
    "Press",
    "Partners",
  ],
  support: [
    "Help Center",
    "FAQs",
    "Contact Us",
    "Student Portal",
    "Placement Cell",
    "Alumni Network",
  ],
  legal: [
    "Privacy Policy",
    "Terms of Service",
    "Refund Policy",
    "Cookie Policy",
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background pt-20 pb-8 px-6 relative">
      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full w-12 h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                V
              </div>
              <span className="text-2xl font-bold">Velsinfo Zone</span>
            </div>
            <p className="text-background/70 mb-6 max-w-xs leading-relaxed">
              Empowering professionals with cutting-edge skills for success in the
              digital age. Your career transformation starts here.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-background/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-1">
                Subscribe to our Newsletter
              </h4>
              <p className="text-background/70 text-sm">
                Get the latest updates on new courses and industry insights.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-full bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary w-full md:w-64"
              />
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>&copy; 2026 Velinfo. All rights reserved.</p>
          <p>Made with passion for education and technology.</p>
        </div>
      </div>
    </footer>
  );
}
