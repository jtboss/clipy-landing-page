"use client";

import React, { useState, useId } from "react";
import { ArrowRight, CheckCircle, Mail, User, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface FormState {
  name: string;
  email: string;
}

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

interface SignUpCTAProps {
  className?: string;
}

const SignUpCTA: React.FC<SignUpCTAProps> = ({ className }) => {
  const id = useId();
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
  });
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  
  const scrollToFeatures = () => {
    // Find KeyFeatures component by ID
    const featuresSection = document.getElementById("key-features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    if (!isValid) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "email" && emailError) {
      validateEmail(value);
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email before submission
    if (!validateEmail(formData.email)) {
      return;
    }
    
    setStatus("submitting");
    setErrorMessage("");
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }
      
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error 
        ? error.message 
        : "There was an issue sending the confirmation email. Please try again later.");
    }
  };

  return (
    <section id="signup-cta" className={cn("w-full bg-gradient-to-b from-background via-primary/5 to-background py-24", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side with realistic Mac app */}
          <motion.div
            className="hidden md:block relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              {/* Mac App Window */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden">
                {/* MacOS Window Header */}
                <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 flex items-center px-4 rounded-t-xl">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="ml-4 text-xs font-medium text-gray-700 dark:text-gray-300 flex-1 text-center">
                    Clipy - Your Smart Clipboard Manager
                  </div>
                  <div className="w-16"></div>
                </div>
                
                {/* Mac Menu Bar */}
                <div className="h-8 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center px-4">
                  <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">File</span>
                  <span className="text-xs text-gray-700 dark:text-gray-300 font-medium ml-4">Edit</span>
                  <span className="text-xs text-gray-700 dark:text-gray-300 font-medium ml-4">View</span>
                  <span className="text-xs text-gray-700 dark:text-gray-300 font-medium ml-4">History</span>
                </div>
                
                {/* App Content */}
                <div className="p-4 bg-white dark:bg-gray-900">
                  {/* Search Bar */}
                  <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="search"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300"
                      placeholder="Search clipboard history..."
                    />
                  </div>
                  
                  {/* Clipboard History */}
                  <div className="space-y-3 mb-4">
                    {/* Copy Item 1 */}
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md border border-blue-100 dark:border-blue-800">
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center space-x-2">
                          <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Text Snippet</span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Just now</span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                        Clipy is a beautifully simple Mac clipboard manager that lives in your menu bar.
                      </p>
                    </div>
                    
                    {/* Copy Item 2 */}
                    <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-md border border-purple-100 dark:border-purple-800">
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center space-x-2">
                          <svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          <span className="text-xs font-medium text-purple-700 dark:text-purple-300">URL</span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">10m ago</span>
                      </div>
                      <p className="text-sm text-purple-600 dark:text-purple-300 line-clamp-1">
                        https://clipy.app/docs
                      </p>
                    </div>
                    
                    {/* Copy Item 3 */}
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-md border border-green-100 dark:border-green-800">
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center space-x-2">
                          <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                          <span className="text-xs font-medium text-green-700 dark:text-green-300">Code</span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">25m ago</span>
                      </div>
                      <div className="text-xs font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded text-gray-800 dark:text-gray-200 overflow-hidden">
                        const clipboard = new Clipboard();
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col space-y-4 mb-8">
              <div className="inline-flex items-center rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-sm font-medium text-primary self-start">
                <Clock className="mr-2 h-4 w-4" />
                <span>Limited spots available</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Join <span className="text-primary">VIP Access</span>
              </h2>
              <p className="text-muted-foreground">
                Be among the first to experience Clipy and unlock special perks!
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl bg-card border border-primary/20 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
              
              {status === "success" ? (
                <motion.div 
                  className="p-8 flex flex-col items-center justify-center space-y-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium text-center">You&apos;re on the VIP list!</h3>
                  <p className="text-center text-muted-foreground">
                    Thanks for signing up! You&apos;ll be among the first to try Clipy.
                  </p>
                  <motion.button
                    type="button"
                    onClick={scrollToFeatures}
                    whileHover={{ scale: 1.02 }}
                    className="inline-flex items-center justify-center text-sm font-medium text-primary hover:text-primary/80 mt-2"
                  >
                    See what Clipy can do for you
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </motion.button>
                </motion.div>
              ) : (
                <div className="p-6">
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label 
                        htmlFor={`${id}-name`} 
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                      >
                        <User className="mr-2 h-4 w-4 text-muted-foreground" />
                        Your name
                      </label>
                      <input 
                        id={`${id}-name`} 
                        name="name"
                        placeholder="John Smith" 
                        type="text" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label 
                        htmlFor={`${id}-email`} 
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                      >
                        <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                        Your email
                      </label>
                      <input 
                        id={`${id}-email`} 
                        name="email"
                        placeholder="you@example.com" 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                        className={cn(
                          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                          emailError && "border-destructive focus-visible:ring-destructive"
                        )}
                      />
                      {emailError && (
                        <p className="text-sm text-destructive">{emailError}</p>
                      )}
                    </div>

                    {status === "error" && (
                      <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                        {errorMessage}
                      </div>
                    )}
                    
                    <motion.button 
                      type="submit"
                      disabled={status === "submitting"}
                      className="relative w-full h-12 px-6 py-3 bg-primary rounded-lg text-primary-foreground shadow-lg font-medium flex items-center justify-center hover:bg-primary-hover transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {status === "submitting" ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Join VIP Waitlist
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SignUpCTA; 