"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Download", href: "#download" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "Tutorial", href: "#tutorial" },
      { label: "FAQs", href: "#faqs" },
      { label: "Support", href: "#support" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
      { label: "Licenses", href: "#licenses" },
    ],
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-secondary/10 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo and Company Info */}
          <motion.div 
            className="col-span-2 md:col-span-1 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block">
              <div className="text-xl font-bold text-primary flex items-center">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground mr-2">C</span>
                Clipy
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Smart clipboard management for modern productivity. Never lose what you copy again.
            </p>
            <div className="flex space-x-4 text-muted-foreground">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="mailto:info@clipy.app" 
                className="hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </motion.div>
          
          {/* Footer Links */}
          {footerLinks.map((section, i) => (
            <motion.div 
              key={section.title}
              className="flex flex-col space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            >
              <h3 className="font-medium">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Clipy. All rights reserved.
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-colors duration-200"
          >
            <ArrowUp className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors duration-200" />
            <span className="sr-only">Scroll to top</span>
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 