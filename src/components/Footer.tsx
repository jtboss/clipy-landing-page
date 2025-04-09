"use client";

import * as React from "react";
import { Facebook, Github, Instagram, Twitter, /* Linkedin */ } from "lucide-react";
import { cn } from "../lib/utils";

// Button component - simplified version for the footer
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "secondary" | "outline";
    size?: "default" | "sm" | "lg" | "icon";
    asChild?: boolean;
  }
>(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variantClasses = {
    default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
    outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
  };

  const sizeClasses = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

// Form components
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // This interface extends HTML input attributes without adding new properties
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // This interface extends HTML textarea attributes without adding new properties
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

// Footer component
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      // Success
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      setErrorMessage(error instanceof Error 
        ? error.message 
        : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      href: "https://facebook.com/yourpage",
      label: "Facebook",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://instagram.com/yourusername",
      label: "Instagram",
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    // You can add more social icons by importing them from lucide-react
    // Example for LinkedIn:
    // {
    //   icon: <Linkedin className="h-5 w-5" />,
    //   href: "https://linkedin.com/in/yourprofile",
    //   label: "LinkedIn",
    // },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" }, // Update with the correct URL to your privacy policy
    { href: "/terms", label: "Terms of Service" }, // Update with the correct URL to your terms of service
    // You can add more links here, for example:
    // { href: "/cookies", label: "Cookie Policy" },
  ];

  return (
    <footer className={cn("bg-background pb-6 pt-16 lg:pb-8 lg:pt-24", className)}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              We&apos;d Love to Hear From You!
            </h2>
            <p className="text-lg text-muted-foreground">
              Have suggestions or feature requests? Let us know!
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, i) => (
                <Button
                  key={i}
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                  type="button"
                  onClick={() => window.open(link.href, "_blank")}
                  aria-label={link.label}
                >
                  {link.icon}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            {isSuccess ? (
              <div className="rounded-md bg-primary/10 p-6 text-center">
                <h3 className="mb-2 text-lg font-medium">Thank you for your message!</h3>
                <p className="text-muted-foreground">We&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                {errorMessage && (
                  <div className="text-sm text-destructive">{errorMessage}</div>
                )}
                <Button 
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
            <div className="text-sm text-muted-foreground">
              <div>© 2025 Clipy. All rights reserved.</div>
            </div>
            
            <ul className="flex flex-wrap gap-4">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 