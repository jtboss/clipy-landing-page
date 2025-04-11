"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitContactForm } from "../app/actions";
import { Send, User, Mail, Check, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = {
  status: "idle" | "submitting" | "success" | "error";
  errors: {
    name?: string;
    email?: string;
    message?: string;
    general?: string;
  };
};

const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    status: "idle",
    errors: {},
  });

  const validateForm = (): boolean => {
    const errors: FormStatus["errors"] = {};
    let isValid = true;

    if (!formState.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formState.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formState.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormStatus(prev => ({ ...prev, errors }));
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formStatus.errors[name as keyof FormState]) {
      setFormStatus(prev => ({
        ...prev,
        errors: {
          ...prev.errors,
          [name]: undefined,
        },
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus({ status: "submitting", errors: {} });

    const formData = new FormData();
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setFormStatus({
          status: "success",
          errors: {},
        });
        setFormState({ name: "", email: "", message: "" });
        
        // Reset to idle after 5 seconds
        setTimeout(() => {
          setFormStatus({ status: "idle", errors: {} });
        }, 5000);
      } else {
        setFormStatus({
          status: "error",
          errors: { general: result.error || "Something went wrong. Please try again." },
        });
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setFormStatus({
        status: "error",
        errors: { general: "Failed to send message. Please try again later." },
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Card className="backdrop-blur-sm bg-card/95 overflow-hidden">
        <CardHeader>
          <CardTitle className="text-xl">Get in Touch</CardTitle>
          <CardDescription>
            Have a suggestion or feedback? Let us know!
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <AnimatePresence mode="wait">
            {formStatus.status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="py-8 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-4"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="space-y-4">
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    icon={<User className="h-4 w-4" />}
                    value={formState.name}
                    onChange={handleChange}
                    error={formStatus.errors.name}
                    disabled={formStatus.status === "submitting"}
                    required
                    autoComplete="name"
                  />

                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    icon={<Mail className="h-4 w-4" />}
                    value={formState.email}
                    onChange={handleChange}
                    error={formStatus.errors.email}
                    disabled={formStatus.status === "submitting"}
                    required
                    autoComplete="email"
                  />

                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formState.message}
                    onChange={handleChange}
                    error={formStatus.errors.message}
                    disabled={formStatus.status === "submitting"}
                    required
                    rows={4}
                  />
                </div>

                {formStatus.errors.general && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-md bg-destructive/10 text-destructive text-sm flex items-start gap-2"
                  >
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>{formStatus.errors.general}</span>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  className="w-full group transition-all"
                  disabled={formStatus.status === "submitting"}
                >
                  {formStatus.status === "submitting" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 blur-md opacity-50 rounded-lg" />
    </motion.div>
  );
};

export default ContactForm; 