"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Clipboard, Lightbulb, AlertTriangle, ArrowDown, CheckCircle } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
};

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-20">
          <motion.div 
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Lightbulb className="mr-1 h-3.5 w-3.5" />
            <span>The Problem & Solution</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Why You Need <span className="text-primary">Clipy</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            See how Clipy solves everyday frustrations with copy and paste
          </motion.p>
        </div>

        {/* Visual Comparison */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-stretch">
            {/* Before - Standard Clipboard */}
            <div className="relative h-full flex flex-col">
              <div className="absolute -inset-1 bg-destructive/20 blur-sm rounded-xl"></div>
              <div className="relative bg-card border border-destructive/30 rounded-xl p-4 pt-8 shadow-lg flex-1 flex flex-col">
                <div className="absolute -top-4 left-4 bg-destructive px-3 py-1 rounded-full text-destructive-foreground text-xs font-bold">
                  Before: Standard Clipboard
                </div>
                
                <div className="mb-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span className="font-medium">Copy and paste limitations</span>
                  </div>
                  
                  {/* Single Item Clipboard Visualization */}
                  <div className="rounded-lg border border-border p-4 bg-background/80 h-[250px] flex flex-col">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-sm font-medium">System Clipboard</div>
                      <div className="text-xs text-muted-foreground">1 item max</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="relative overflow-hidden rounded border border-destructive/40 bg-destructive/5 p-3">
                        <div className="text-xs font-mono">Email: contact@example.com</div>
                        <div className="absolute top-0 right-1">
                          <X className="h-4 w-4 text-destructive" />
                        </div>
                      </div>
                      
                      <motion.div
                        className="flex items-center justify-center text-center py-3 text-xs text-muted-foreground"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowDown className="h-4 w-4 mr-1" />
                        <span>New copy replaces old one</span>
                      </motion.div>
                      
                      <div className="relative overflow-hidden rounded border border-border bg-background p-3">
                        <div className="text-xs font-mono">Phone: (555) 123-4567</div>
                        <div className="absolute top-0 right-1">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex justify-end">
                      <div className="text-xs px-2 py-1 rounded bg-destructive/10 text-destructive">
                        Email lost forever!
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Standard Clipboard Problems */}
                <div className="space-y-2">
                  <div className="bg-destructive/10 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <X className="h-4 w-4 text-destructive flex-shrink-0" />
                      <div className="text-sm">Previous copies are permanently lost</div>
                    </div>
            </div>

                  <div className="bg-destructive/10 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <X className="h-4 w-4 text-destructive flex-shrink-0" />
                      <div className="text-sm">No organization or search</div>
                    </div>
            </div>

                  <div className="bg-destructive/10 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <X className="h-4 w-4 text-destructive flex-shrink-0" />
                      <div className="text-sm">Lost on restart or shutdown</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* After - Clipy */}
            <div className="relative h-full flex flex-col">
              <div className="absolute -inset-1 bg-primary/20 blur-sm rounded-xl"></div>
              <div className="relative bg-card border border-primary/30 rounded-xl p-4 pt-8 shadow-lg flex-1 flex flex-col">
                <div className="absolute -top-4 left-4 bg-primary px-3 py-1 rounded-full text-primary-foreground text-xs font-bold">
                  After: Clipy
                </div>
                
                <div className="mb-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="font-medium">Smart clipboard management</span>
                  </div>
                  
                  {/* Clipy Mac Menu Bar Visualization */}
                  <div className="rounded-lg border border-border p-4 bg-background/80 h-[320px] flex flex-col">
                    {/* Mac Menu Bar */}
                    <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 h-8 rounded-t-md flex items-center px-3">
                      <div className="flex items-center space-x-1 ml-auto">
                        <span className="text-xs text-gray-700 dark:text-gray-300">Wed 10:42 AM</span>
                        <Clipboard className="h-4 w-4 ml-3 text-gray-700 dark:text-gray-300" />
                      </div>
                    </div>
                    
                    {/* Clipy Dropdown */}
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-b-md shadow-lg flex-1 flex flex-col overflow-hidden">
                      {/* Search Bar */}
                      <div className="p-1.5 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                          <input
                            type="search"
                            className="block w-full pl-10 pr-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded-md text-sm"
                            placeholder="Search clipboard history..."
                          />
                        </div>
                      </div>
                      
                      {/* Tabs */}
                      <div className="flex border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                        <button className="flex-1 px-3 py-1.5 text-sm font-medium">All</button>
                        <button className="flex-1 px-3 py-1.5 text-sm font-medium text-primary border-b-2 border-primary">Text</button>
                        <button className="flex-1 px-3 py-1.5 text-sm font-medium">Links</button>
                        <button className="flex-1 px-3 py-1.5 text-sm font-medium">Code</button>
                      </div>
                      
                      {/* Clipboard Items */}
                      <div className="p-1.5 space-y-1.5 flex-1">
                        {/* Current Item */}
                        <div className="p-1.5 rounded-md bg-primary/10 border border-primary/30">
                          <div className="flex justify-between items-start mb-0.5">
                            <div className="flex items-center">
                              <svg className="h-3.5 w-3.5 text-primary mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span className="text-xs font-medium">Phone number</span>
                            </div>
                            <span className="text-xs text-muted-foreground">Just now</span>
                          </div>
                          <p className="text-sm font-mono">(555) 123-4567</p>
                        </div>
                        
                        {/* Previous Item 1 */}
                        <div className="p-1.5 rounded-md bg-background border border-border">
                          <div className="flex justify-between items-start mb-0.5">
                            <div className="flex items-center">
                              <svg className="h-3.5 w-3.5 text-muted-foreground mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span className="text-xs font-medium">Email</span>
                            </div>
                            <span className="text-xs text-muted-foreground">2m ago</span>
                          </div>
                          <p className="text-sm font-mono">contact@example.com</p>
                        </div>
                        
                        {/* Previous Item 2 */}
                        <div className="p-1.5 rounded-md bg-background border border-border">
                          <div className="flex justify-between items-start mb-0.5">
                            <div className="flex items-center">
                              <svg className="h-3.5 w-3.5 text-muted-foreground mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span className="text-xs font-medium">Website</span>
                            </div>
                            <span className="text-xs text-muted-foreground">5m ago</span>
                          </div>
                          <p className="text-sm font-mono">www.example.com</p>
                        </div>
                        
                        {/* Previous Item 3 */}
                        <div className="p-1.5 rounded-md bg-background border border-border">
                          <div className="flex justify-between items-start mb-0.5">
                            <div className="flex items-center">
                              <svg className="h-3.5 w-3.5 text-muted-foreground mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span className="text-xs font-medium">Address</span>
                            </div>
                            <span className="text-xs text-muted-foreground">Yesterday</span>
                          </div>
                          <p className="text-sm font-mono">123 Main St, Anytown, USA</p>
                        </div>
                      </div>
                      
                      {/* Bottom Actions */}
                      <div className="p-1.5 border-t border-gray-200 dark:border-gray-700 flex justify-between flex-shrink-0">
                        <button className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                          Settings
                        </button>
                        <button className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                          Paste Selection
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Clipy Advantages */}
                <div className="space-y-2">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <div className="text-sm">All copied items are stored permanently</div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <div className="text-sm">Smart search and AI organization</div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <div className="text-sm">Syncs across all your devices</div>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Problem Column */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-destructive/20 text-destructive">
                <X className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight relative">
                The Standard Clipboard Problem
                <motion.div 
                  className="absolute -bottom-1 left-0 h-1 w-16 bg-destructive/50 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </h3>
            </motion.div>

            <motion.ul
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.li 
                className="relative pl-9"
                variants={itemVariants}
              >
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-destructive text-destructive">
                  <X className="h-3.5 w-3.5" />
                </div>
                <div className="font-medium">Limited to one item</div>
                <div className="text-muted-foreground text-sm">
                  Your system clipboard only stores the last thing you copied, forcing you to go back and forth between windows.
                </div>
              </motion.li>

              <motion.li 
                className="relative pl-9"
                variants={itemVariants}
              >
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-destructive text-destructive">
                  <X className="h-3.5 w-3.5" />
                  </div>
                <div className="font-medium">No way to search old copies</div>
                <div className="text-muted-foreground text-sm">
                  Once you copy something new, your previous copy is gone forever. This leads to wasted time re-finding information.
                </div>
              </motion.li>

              <motion.li 
                className="relative pl-9"
                variants={itemVariants}
              >
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-destructive text-destructive">
                  <X className="h-3.5 w-3.5" />
                  </div>
                <div className="font-medium">Doesn&apos;t persist after restarts</div>
                <div className="text-muted-foreground text-sm">
                  If you restart your computer, everything in your clipboard is lost, even if it was important.
                </div>
              </motion.li>

              <motion.li 
                className="relative pl-9"
                variants={itemVariants}
              >
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-destructive text-destructive">
                  <X className="h-3.5 w-3.5" />
                  </div>
                <div className="font-medium">No organization or categories</div>
                <div className="text-muted-foreground text-sm">
                  Important information gets mixed with temporary copies with no way to organize your content.
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Solution Column */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Clipboard className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight relative">
                The Clipy Solution
                <motion.div 
                  className="absolute -bottom-1 left-0 h-1 w-16 bg-primary/50 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </h3>
            </motion.div>

            <motion.ul
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.li 
                className="relative pl-9"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div className="font-medium">Unlimited clipboard history</div>
                <div className="text-muted-foreground text-sm">
                  Clipy stores everything you copy, creating a searchable history that&apos;s always available.
                </div>
              </motion.li>

              <motion.li 
                className="relative pl-9"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div className="font-medium">Powerful search capabilities</div>
                <div className="text-muted-foreground text-sm">
                  Instantly find what you&apos;re looking for with smart search that works across text, code, and images.
                </div>
              </motion.li>

              <motion.li 
                className="relative pl-9"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div className="font-medium">Persistent across devices</div>
                <div className="text-muted-foreground text-sm">
                  Your clipboard syncs across all your devices and persists through restarts and shutdowns.
                </div>
              </motion.li>

              <motion.li 
                className="relative pl-9"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div className="font-medium">Smart organization</div>
                <div className="text-muted-foreground text-sm">
                  Automatically categorizes your clips and lets you favorite important ones for quick access.
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution; 