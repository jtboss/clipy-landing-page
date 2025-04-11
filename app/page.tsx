"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ProblemSolution from "../src/components/ProblemSolution";
import KeyFeatures from "../src/components/KeyFeatures";
import SignUpCTA from "../src/components/SignUpCTA";
import ContactSection from "../src/components/ContactSection";
import Footer from "../src/components/Footer";
import { ArrowRight, Clipboard, Sparkles, CheckCircle, Clock } from "lucide-react";

export default function Home() {
  const signUpRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, 50]);

  const scrollToSignUp = () => {
    signUpRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section with Enhanced Visuals */}
      <section ref={heroRef} className="relative bg-gradient-to-b from-background to-secondary/30 text-foreground overflow-hidden py-24 md:py-32 w-full">
        <motion.div 
          className="container mx-auto px-4 md:px-6 relative z-10"
          style={{ 
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY
          }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0 justify-between">
            <div className="flex flex-col items-start text-left max-w-xl space-y-6 md:w-[55%]">
              <motion.div 
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>Coming Soon</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Clipy: The Smart <span className="text-primary">Clipboard Manager</span> That Saves You Time
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Organize and store everything you copy—automatically. Boost your productivity with smart search and retrieval.
              </motion.p>
              
              {/* Key Benefits */}
              <motion.ul
                className="space-y-2 text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Never lose important copied text or images again</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Find what you need with instant search</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Access your clipboard history across all devices</span>
                </li>
              </motion.ul>
              
              {/* Enhanced Waitlist CTA with Urgency */}
              <motion.div
                className="flex flex-col space-y-4 w-full sm:max-w-md pt-4 mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center text-sm text-foreground font-medium bg-primary/5 rounded-md px-3 py-2 border border-primary/10">
                  <Clock className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                  <span>Limited spots available — Join now for exclusive access!</span>
                </div>
                
                <div className="mt-2 relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60 rounded-lg blur-sm opacity-75 animate-pulse"></div>
                  <motion.button
                    onClick={scrollToSignUp}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="group relative w-full h-16 px-10 py-4 bg-primary rounded-lg text-primary-foreground shadow-lg font-bold text-lg flex items-center justify-center hover:bg-primary-hover transition-all duration-300"
                  >
                    <span className="absolute inset-0 overflow-hidden rounded-lg">
                      <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out"></span>
                    </span>
                    <span className="relative flex items-center">
                      Join the Waitlist for Early Access
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </motion.button>
                </div>
                
                <p className="text-xs text-center text-muted-foreground px-2">
                  Be among the first to try Clipy and get exclusive features before anyone else!
                </p>
              </motion.div>
              
              <motion.div
                className="flex items-center mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "var(--secondary-hover)" }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
            
            {/* Hero Image/Illustration - Enhanced with animation */}
            <motion.div 
              className="relative w-full md:w-[45%] md:-mt-6"
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                type: "spring",
                stiffness: 100
              }}
            >
              <div className="aspect-square relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-1 shadow-xl">
                <motion.div 
                  className="absolute inset-0 bg-white/80 dark:bg-black/80 rounded-2xl backdrop-blur-sm p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {/* Mac Desktop Mockup */}
                  <div className="relative h-full w-full overflow-hidden rounded-lg border border-border shadow-xl">
                    {/* Mac Desktop Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    </div>
                    
                    {/* Mac Menu Bar */}
                    <div className="relative h-8 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 flex items-center px-4 border-b border-gray-300 dark:border-gray-600">
                      <div className="mr-4 text-gray-800 dark:text-gray-200 font-medium text-sm">Finder</div>
                      <div className="mr-4 text-gray-800 dark:text-gray-200 text-sm">File</div>
                      <div className="mr-4 text-gray-800 dark:text-gray-200 text-sm">Edit</div>
                      <div className="mr-4 text-gray-800 dark:text-gray-200 text-sm">View</div>
                      <div className="flex-1"></div>
                      <div className="flex items-center space-x-3">
                        <span className="text-xs text-gray-700 dark:text-gray-300">Wed 10:42 AM</span>
                        <Clipboard className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                      </div>
                    </div>
                    
                    {/* Clipy Dropdown from Menu Bar */}
                    <div className="absolute right-4 top-8 w-[280px] bg-white dark:bg-gray-900 rounded-md shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                      {/* Clipy Header */}
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                        <div className="flex items-center">
                          <Clipboard className="h-5 w-5 text-primary mr-2" />
                          <span className="font-medium text-sm">Clipy</span>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">v1.0</div>
                      </div>
                      
                      {/* Search */}
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
                      
                      {/* Clipboard Items */}
                      <div className="max-h-[280px] overflow-y-auto p-2 space-y-2">
                        {/* Current Item */}
                        <motion.div 
                          className="p-2 rounded-md bg-primary/10 border border-primary/30"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.8, duration: 0.4 }}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <div className="flex items-center">
                              <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span className="text-xs font-medium">Email</span>
                            </div>
                            <span className="text-xs text-muted-foreground">Just now</span>
                          </div>
                          <p className="text-sm font-mono">contact@clipy.app</p>
                        </motion.div>
                        
                        {/* Item 2 */}
                        <motion.div 
                          className="p-2 rounded-md bg-background border border-border"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1.0, duration: 0.4 }}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <div className="flex items-center">
                              <svg className="h-4 w-4 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                              </svg>
                              <span className="text-xs font-medium">Website URL</span>
                            </div>
                            <span className="text-xs text-muted-foreground">2m ago</span>
                          </div>
                          <p className="text-sm text-purple-600 dark:text-purple-400">https://clipy.app</p>
                        </motion.div>
                        
                        {/* Item 3 */}
                        <motion.div 
                          className="p-2 rounded-md bg-background border border-border"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1.2, duration: 0.4 }}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <div className="flex items-center">
                              <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                              <span className="text-xs font-medium">Code Snippet</span>
                            </div>
                            <span className="text-xs text-muted-foreground">5m ago</span>
                          </div>
                          <div className="text-xs font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            const clipy = new ClipboardManager();
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Bottom Bar */}
                      <div className="p-2 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                        <button className="text-xs px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                          Settings
                        </button>
                        <button className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                          Paste Current
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Animated glowing orbs */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/30 blur-xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div 
                  className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-secondary/30 blur-xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                />
              </div>
            </motion.div>
          </div>
          
          {/* Floating Trust Badges */}
          <motion.div 
            className="mt-16 flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div 
              className="flex items-center space-x-2 rounded-full bg-background/80 backdrop-blur-sm px-4 py-2 text-sm shadow-sm border border-border"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Easy to Use</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 rounded-full bg-background/80 backdrop-blur-sm px-4 py-2 text-sm shadow-sm border border-border"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Works Everywhere</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 rounded-full bg-background/80 backdrop-blur-sm px-4 py-2 text-sm shadow-sm border border-border"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Smart Organization</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 rounded-full bg-background/80 backdrop-blur-sm px-4 py-2 text-sm shadow-sm border border-border"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Privacy Focused</span>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="absolute right-0 top-0 -z-10 transform translate-x-1/2 -translate-y-1/4"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="h-[800px] w-[800px] rounded-full bg-primary/5 blur-3xl" />
          </motion.div>
          <motion.div 
            className="absolute left-0 bottom-0 -z-10 transform -translate-x-1/2 translate-y-1/4"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: 4
            }}
          >
            <div className="h-[600px] w-[600px] rounded-full bg-secondary/5 blur-3xl" />
          </motion.div>
        </div>
      </section>
      
      {/* Problem/Solution Section */}
      <ProblemSolution />
      
      {/* Key Features Section */}
      <KeyFeatures />
      
      {/* Sign Up CTA Section */}
      <div ref={signUpRef}>
        <SignUpCTA />
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
