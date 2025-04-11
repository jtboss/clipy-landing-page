"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, Copy, Search, Clock, Code, Link, Text, Settings, X, Clipboard, Star } from "lucide-react";

interface ClipboardItem {
  id: string;
  content: string;
  type: "text" | "link" | "code";
  timestamp: Date;
  starred?: boolean;
}

const ClipboardManager = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [clipboardItems] = useState<ClipboardItem[]>([
    {
      id: "1",
      content: "Meeting with the team at 3pm tomorrow to discuss the new project requirements.",
      type: "text",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
    },
    {
      id: "2",
      content: "https://github.com/clipy/app",
      type: "link",
      timestamp: new Date(Date.now() - 1000 * 60 * 10),
      starred: true,
    },
    {
      id: "3",
      content: "const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(\n  ({ className, variant, size, asChild = false, ...props }, ref) => {\n    const Comp = asChild ? Slot : \"button\";\n    return (\n      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />\n    );\n  },\n);",
      type: "code",
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
    },
    {
      id: "4",
      content: "Remember to pick up groceries on the way home",
      type: "text",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
    },
    {
      id: "5",
      content: "https://clipy.app/docs",
      type: "link",
      timestamp: new Date(Date.now() - 1000 * 60 * 45),
    },
  ]);

  const filteredItems = clipboardItems.filter(item => {
    if (!searchQuery) return true;
    return item.content.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="w-[380px] rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Clipboard className="h-5 w-5 text-blue-500" />
          <h2 className="text-sm font-medium">Clipy</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-7 w-7 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="p-3 border-b border-gray-200 dark:border-gray-800">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="search"
            placeholder="Search clipboard..."
            className="w-full rounded-md border border-gray-200 bg-gray-50 py-2 pl-9 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="w-full">
        <div className="flex border-b border-gray-200 dark:border-gray-800">
          <button className="flex-1 px-3 py-2 text-sm font-medium text-blue-500 border-b-2 border-blue-500">All</button>
          <button className="flex-1 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">Text</button>
          <button className="flex-1 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">Links</button>
          <button className="flex-1 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">Code</button>
        </div>
        
        <div className="h-[400px] overflow-auto">
          <div className="p-3 space-y-2">
            {filteredItems.map((item) => (
              <ClipboardItemCard 
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ClipboardItemCardProps {
  item: ClipboardItem;
}

const ClipboardItemCard = ({ item }: ClipboardItemCardProps) => {
  const getTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + "y ago";
    
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + "mo ago";
    
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + "d ago";
    
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + "h ago";
    
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + "m ago";
    
    return Math.floor(seconds) + "s ago";
  };
  
  const getIcon = () => {
    switch (item.type) {
      case "text":
        return <Text className="h-3.5 w-3.5" />;
      case "link":
        return <Link className="h-3.5 w-3.5" />;
      case "code":
        return <Code className="h-3.5 w-3.5" />;
    }
  };
  
  const getPreviewContent = () => {
    if (item.type === "code") {
      return (
        <div className="font-mono text-xs bg-gray-100 p-2 rounded-md overflow-x-auto dark:bg-gray-800">
          {item.content.length > 150 
            ? item.content.substring(0, 150) + "..." 
            : item.content}
        </div>
      );
    } else if (item.type === "link") {
      return (
        <a 
          href={item.content} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-blue-500 hover:underline"
        >
          {item.content}
        </a>
      );
    } else {
      return (
        <p className="text-sm">
          {item.content.length > 150 
            ? item.content.substring(0, 150) + "..." 
            : item.content}
        </p>
      );
    }
  };
  
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-5 items-center rounded-full border border-gray-300 px-1.5 text-xs dark:border-gray-600">
            {getIcon()}
          </span>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <Clock className="mr-1 h-3 w-3" />
            {getTimeAgo(item.timestamp)}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button 
            className="h-6 w-6 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Star 
              className={cn(
                "h-3.5 w-3.5", 
                item.starred ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
              )} 
            />
          </button>
          
          <button 
            className="h-6 w-6 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Copy className="h-3.5 w-3.5 text-gray-400" />
          </button>
          
          <button 
            className="h-6 w-6 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X className="h-3.5 w-3.5 text-gray-400" />
          </button>
        </div>
      </div>
      
      <div className="mt-2">
        {getPreviewContent()}
      </div>
    </div>
  );
};

const MacOSClipboardMockup = () => {
  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 pt-10 dark:bg-gray-900">
      <div className="relative">
        {/* Menu bar at the top */}
        <div className="absolute -top-8 left-0 right-0 h-8 rounded-t-md bg-gradient-to-b from-gray-200 to-gray-300 px-2 py-1 dark:from-gray-700 dark:to-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
              Clipy
            </div>
            <div className="w-16"></div>
          </div>
        </div>
        
        {/* Menu bar icons */}
        <div className="absolute -top-8 right-3 flex items-center h-8 gap-4">
          <Clipboard className="h-4 w-4 text-gray-700 dark:text-gray-300" />
        </div>
        
        <ClipboardManager />
      </div>
    </div>
  );
};

export default MacOSClipboardMockup; 