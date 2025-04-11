"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="py-24 bg-gradient-to-t from-secondary/30 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <motion.div 
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <MessageSquare className="mr-1 h-3.5 w-3.5" />
              <span>Get in Touch</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We'd Love to Hear From You
            </motion.h2>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have questions or suggestions? Reach out to us.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold">How We Can Help</h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-border bg-card/50">
                  <h4 className="font-medium mb-2">Feature Requests</h4>
                  <p className="text-muted-foreground text-sm">
                    Have an idea that would make Clipy even better? We&apos;re all ears and always looking to improve.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg border border-border bg-card/50">
                  <h4 className="font-medium mb-2">Technical Support</h4>
                  <p className="text-muted-foreground text-sm">
                    Need help with setup or having technical issues? Our team is ready to assist you.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg border border-border bg-card/50">
                  <h4 className="font-medium mb-2">Feedback & Suggestions</h4>
                  <p className="text-muted-foreground text-sm">
                    Your feedback helps shape the future of Clipy. Let us know what you think!
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 