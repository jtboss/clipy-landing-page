"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Monitor, Smartphone, Search, Clock, History, Share2, Key, ArrowRight, Check, MessageSquare, Clipboard } from "lucide-react";

const features = [
  {
    id: "search",
    icon: <Search className="h-6 w-6" />,
    title: "Smart Search",
    description: "Find any copied text quickly with our powerful search capabilities. Never lose important information again.",
    image: "/images/screenshots/search-feature.png",
  },
  {
    id: "history",
    icon: <History className="h-6 w-6" />,
    title: "Permanent History",
    description: "Keep your important clips forever. Clipy maintains your history even after system restarts.",
    image: "/images/screenshots/history-view.png",
  },
  {
    id: "organize",
    icon: <MessageSquare className="h-6 w-6" />,
    title: "AI Organization",
    description: "Clipy automatically categorizes your clips by content type and suggests tags for easy retrieval.",
    image: "/images/screenshots/ai-organization.png",
  },
  {
    id: "sync",
    icon: <Smartphone className="h-6 w-6" />,
    title: "Cross-device Sync",
    description: "Access your clipboard history from your smartphone, tablet, or desktop. Copy on one device, paste on another.",
    image: "/images/screenshots/sync-devices.png",
  },
];

const additionalFeatures = [
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "Universal Compatibility",
    description: "Works on Mac, Windows, Linux, iOS, and Android. Your clipboard everywhere you need it."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Time-based Organization",
    description: "Clips are organized chronologically, making it easy to find recent or past information."
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: "Easy Sharing",
    description: "Share any clip directly to other apps or people with just a click or tap."
  },
];

const KeyFeatures = () => {
  const [activeFeature, setActiveFeature] = useState("search");
  
  const activeFeatureData = features.find(f => f.id === activeFeature);

  return (
    <section id="key-features" className="py-24 bg-gradient-to-b from-background via-background/50 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <motion.div 
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Key className="mr-1 h-3.5 w-3.5" />
            <span>Key Features</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Clipboard Management <span className="text-primary">Reimagined</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A beautifully simple clipboard manager that lives in your Mac menu bar
          </motion.p>
        </div>

        {/* Clean UI Feature Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 items-center">
          {/* Visual Side */}
          <motion.div
            className="relative rounded-xl overflow-hidden shadow-lg border border-border"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Mac Menu Bar */}
            <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 h-8 flex items-center px-3">
              <div className="flex-1"></div>
              <div className="flex items-center space-x-3">
                <span className="text-xs text-gray-700 dark:text-gray-300">Wed 3:42 PM</span>
                <Clipboard className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              </div>
            </div>
            
            {/* Clipboard Dropdown */}
            <div className="bg-white dark:bg-gray-900 p-3">
              <div className="w-full bg-white dark:bg-gray-900 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Search Bar */}
                <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="relative">
                    <svg className="absolute left-3 top-[9px] h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="search"
                      placeholder="Search clipboard..."
                      className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-sm"
                    />
                  </div>
                </div>
                
                {/* Category Tabs */}
                <div className="flex border-b border-gray-200 dark:border-gray-700">
                  <button className="flex-1 px-3 py-2 text-sm font-medium">All</button>
                  <button className="flex-1 px-3 py-2 text-sm font-medium text-primary border-b-2 border-primary">Text</button>
                  <button className="flex-1 px-3 py-2 text-sm font-medium">Links</button>
                  <button className="flex-1 px-3 py-2 text-sm font-medium">Code</button>
                </div>
                
                {/* Clipboard Items */}
                <div className="p-2 space-y-2">
                  {/* Current Item */}
                  <div className="p-2 rounded-md bg-primary/10 border border-primary/30 mb-2">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex items-center">
                        <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-xs font-medium">Text</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Just now</span>
                    </div>
                    <p className="text-sm">Clipy is a beautifully simple Mac clipboard manager.</p>
                  </div>
                  
                  {/* Link Item */}
                  <div className="p-2 rounded-md bg-background border border-border">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex items-center">
                        <svg className="h-4 w-4 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        <span className="text-xs font-medium">Link</span>
                      </div>
                      <span className="text-xs text-muted-foreground">2m ago</span>
                    </div>
                    <p className="text-sm text-purple-600 dark:text-purple-400">https://clipy.app</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Feature List Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Additional Features - 3 Column Clean Layout */}
        <motion.div 
          className="mt-20 pb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold tracking-tight text-center mb-12">
            More Powerful Features
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex flex-col space-y-3 bg-card rounded-xl p-6 shadow-sm border border-border h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  borderColor: "hsl(var(--primary) / 0.2)" 
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Join Waitlist CTA */}
          <div className="mt-16 text-center">
            <motion.button
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground hover:bg-primary-hover transition-all"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                // Scroll to waitlist section
                const signUpSection = document.getElementById("signup-cta");
                if (signUpSection) {
                  signUpSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeatures; 