"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Search, Cloud, Layout, ArrowRight, Keyboard, TextCursor, Bookmark, Shield, ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

interface KeyFeaturesProps {
  className?: string;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div 
      className="flex flex-col p-6 rounded-lg bg-background border border-border shadow-sm hover:shadow-md transition-shadow"
      variants={itemVariants}
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className="mb-4 p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-primary"
        whileHover={{ 
          scale: 1.1, 
          backgroundColor: "var(--primary)", 
          color: "var(--primary-foreground)" 
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const KeyFeatures: React.FC<KeyFeaturesProps> = ({ className }) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const toggleAllFeatures = () => {
    setShowAllFeatures(!showAllFeatures);
  };

  const additionalFeatures = [
    {
      title: "Keyboard Shortcuts",
      description: "Access and manage your clipboard with quick keyboard shortcuts to save time and boost productivity.",
      icon: <Keyboard className="w-6 h-6" />
    },
    {
      title: "Text Formatting",
      description: "Automatically format and clean pasted text, removing unwanted formatting and making content consistent.",
      icon: <TextCursor className="w-6 h-6" />
    },
    {
      title: "Snippets Library",
      description: "Save commonly used text snippets for quick access, improving your workflow efficiency.",
      icon: <Bookmark className="w-6 h-6" />
    },
    {
      title: "Data Protection",
      description: "End-to-end encryption ensures your clipboard data stays secure and private at all times.",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <section className={cn("py-20 w-full relative overflow-hidden", className)} id="key-features">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-dot-pattern opacity-5" />
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent z-10" />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Clipy Features That Will Change How You Work
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover how Clipy's powerful features help you stay organized, save time, and increase your productivity.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <FeatureCard
            title="AI-Powered Organization"
            description="Clipy automatically organizes everything you copy, making it easy to find anything from your clipboard in seconds."
            icon={<Brain className="w-6 h-6" />}
          />

          <FeatureCard
            title="Searchable History"
            description="Search through your clipboard history with ease, so you never lose a valuable piece of information again."
            icon={<Search className="w-6 h-6" />}
          />

          <FeatureCard
            title="Smart Sync Across Devices"
            description="Seamlessly sync your clipboard across multiple devices for effortless copying and pasting wherever you go."
            icon={<Cloud className="w-6 h-6" />}
          />

          <FeatureCard
            title="Clean & Simple Design"
            description="Enjoy a sleek and simple interface that makes your clipboard experience fast, intuitive, and visually pleasing."
            icon={<Layout className="w-6 h-6" />}
          />
        </motion.div>

        {showAllFeatures && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            {additionalFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </motion.div>
        )}

        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={toggleAllFeatures}
            className="inline-flex items-center justify-center gap-2 rounded-md font-medium bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAllFeatures ? (
              <>
                Hide Additional Features
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                See All Features
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeatures; 