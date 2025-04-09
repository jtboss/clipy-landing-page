"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../components/ui/badge";
import { Clipboard, Check } from "lucide-react";
import { cn } from "../lib/utils";

interface ProblemSolutionProps {
  className?: string;
}

const ProblemSolution: React.FC<ProblemSolutionProps> = ({ className }) => {
  return (
    <div className={cn("w-full py-20 lg:py-32", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <Badge variant="outline">AI-Powered</Badge>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
                Tired of Losing Important Information? Let AI Help.
              </h2>
              <p className="text-lg text-muted-foreground">
                Managing your clipboard shouldn't be a hassle. We've built a smart solution to organize and store everything you copy—automatically.
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold mb-3">The Problem</h3>
              <p className="text-muted-foreground">
                You copy and paste throughout the day, but important bits of information are lost, overwritten, or hard to find when you need them most. Traditional clipboard managers just don't cut it.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-5 h-5 mt-1 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Smart Organization</p>
                  <p className="text-muted-foreground text-sm">
                    AI automatically categorizes your clips for easy retrieval
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-5 h-5 mt-1 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Unlimited History</p>
                  <p className="text-muted-foreground text-sm">
                    Never worry about losing important information again
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-5 h-5 mt-1 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Instant Search</p>
                  <p className="text-muted-foreground text-sm">
                    Find exactly what you need when you need it
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-dot-pattern opacity-5" />
            </div>
            <motion.div 
              className="bg-background rounded-xl border border-border p-8 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Clipboard className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">The Solution</h3>
                </div>
                <Badge>Clipy</Badge>
              </div>
              
              <p className="text-muted-foreground mb-6">
                With Clipy, our AI-powered clipboard manager, you never have to worry about losing your clips again. It automatically saves and organizes everything you copy, making retrieval fast and easy.
              </p>
              
              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Meeting notes</span>
                    <span className="text-xs text-muted-foreground">2m ago</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 truncate">
                    The project deadline has been extended to October 15th...
                  </p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Email address</span>
                    <span className="text-xs text-muted-foreground">15m ago</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 truncate">
                    contact@example.com
                  </p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Code snippet</span>
                    <span className="text-xs text-muted-foreground">1h ago</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 truncate">
                    {`const handleSubmit = (e) => { e.preventDefault(); }`}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution; 