"use client";

import React, { useId, useState, useRef } from "react";
import { ArrowRight, Info, CheckCircle, AlertCircle, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

interface SignUpCTAProps {
  className?: string;
}

type FormState = {
  name: string;
  email: string;
};

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

const SignUpCTA: React.FC<SignUpCTAProps> = ({ className }) => {
  const id = useId();
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
  });
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  
  // Create a ref to scroll to the features section
  const featuresRef = useRef<HTMLDivElement | null>(null);

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
    <div className={cn("w-full max-w-4xl mx-auto px-4 py-12 md:py-16", className)}>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Sign up for early access to Clipy, launching soon!
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Be the first to try Clipy when we launch. Sign up now and stay updated on progress!
        </p>
      </div>

      <div className="w-full max-w-md mx-auto border rounded-lg shadow-sm bg-card text-card-foreground">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-xl font-semibold leading-none tracking-tight">Early Access Sign-up</h3>
          <p className="text-sm text-muted-foreground">
            Join our waitlist to be notified when Clipy launches.
          </p>
        </div>

        {status === "success" ? (
          <div className="p-6 flex flex-col items-center justify-center space-y-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium">Thanks for signing up!</h3>
            <p className="text-center text-muted-foreground">
              You're on the list! You'll be notified when Clipy is available.
            </p>
          </div>
        ) : (
          <>
            <div className="p-6 pt-0">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label 
                    htmlFor={`${id}-name`} 
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Full name
                  </label>
                  <input 
                    id={`${id}-name`} 
                    name="name"
                    placeholder="John Doe" 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label 
                    htmlFor={`${id}-email`} 
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input 
                    id={`${id}-email`} 
                    name="email"
                    placeholder="you@example.com" 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={(e) => validateEmail(e.target.value)}
                    disabled={status === "submitting"}
                    className={cn(
                      "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                      emailError && "border-destructive focus-visible:ring-destructive"
                    )}
                  />
                  {emailError && (
                    <p className="text-sm font-medium text-destructive">{emailError}</p>
                  )}
                </div>

                {status === "error" && (
                  <div className="bg-destructive/10 p-3 rounded-md flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-destructive mt-0.5" />
                    <p className="text-sm text-destructive">{errorMessage}</p>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
                >
                  {status === "submitting" ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="flex flex-col space-y-3 p-6 pt-0 border-t">
              <button 
                onClick={scrollToFeatures}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full"
              >
                <ChevronDown className="mr-2 h-4 w-4" />
                See All Features
              </button>
              <p className="text-center text-xs text-muted-foreground pt-2">
                By signing up you agree to our{" "}
                <a className="underline hover:no-underline" href="#">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a className="underline hover:no-underline" href="#">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUpCTA; 