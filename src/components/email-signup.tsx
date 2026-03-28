"use client";

import { useState } from "react";
import { LogoMark } from "./logo";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative px-6 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative inline-block mb-8">
          <LogoMark size={48} className="text-foreground" />
          <div className="absolute inset-0 blur-3xl opacity-10 pointer-events-none">
            <LogoMark size={48} className="text-foreground" />
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Ready to take control?
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md mx-auto">
          Try LifeOS free for 7 days. No credit card required.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-success/10 text-success text-sm font-medium">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            You&apos;re on the list!
          </div>
        ) : (
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary text-primary-foreground text-xs uppercase tracking-wider font-medium hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>

            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <a
              href="#get-started"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-lg text-xs uppercase tracking-wider font-medium px-8 gap-2"
              )}
            >
              Get Started
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
