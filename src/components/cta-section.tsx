"use client";

import { LogoMark } from "./logo";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <section id="get-started" className="relative px-6 py-32">
      {/* Subtle top border */}
      <div className="absolute inset-x-0 top-0">
        <div className="max-w-7xl mx-auto h-px bg-border" />
      </div>

      <div className="max-w-2xl mx-auto text-center">
        {/* Glowing logo */}
        <div className="relative inline-block mb-8">
          <LogoMark size={56} className="text-foreground" />
          <div className="absolute inset-0 blur-3xl opacity-10 pointer-events-none">
            <LogoMark size={56} className="text-foreground" />
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Try it free for 7 days
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Get the full LifeOS experience: dashboard, AI
          assistant, and all features included. Cancel anytime.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.lifeos.zone"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group rounded-lg text-xs font-medium px-8 gap-2 transition-transform duration-200 hover:scale-105"
            )}
          >
            Start Free Trial
            <svg
              className="w-3.5 h-3.5 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200"
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
          <a
            href="#pricing"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-lg text-xs font-medium px-8"
            )}
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
