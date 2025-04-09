"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import ProblemSolution from "../src/components/ProblemSolution";
import KeyFeatures from "../src/components/KeyFeatures";
import SignUpCTA from "../src/components/SignUpCTA";
import Footer from "../src/components/Footer";

export default function Home() {
  const signUpRef = useRef<HTMLDivElement>(null);

  const scrollToSignUp = () => {
    signUpRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="relative bg-background text-foreground overflow-hidden py-20 md:py-32 w-full">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Revolutionize Your Clipboard with AI
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Boost your productivity with AI-powered clipboard
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.button
                onClick={scrollToSignUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 bg-foreground text-background transition-colors hover:bg-foreground/90"
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </div>
        
        {/* Background glow effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-foreground/20 blur-3xl opacity-50" />
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

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
