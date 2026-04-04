"use client";

import { useState } from "react";
import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

function annualPrice(monthly: number) {
  return Math.round(monthly * 0.80 * 100) / 100;
}

function formatPrice(price: number) {
  return price % 1 === 0 ? price.toString() : price.toFixed(2);
}

const plans = [
  {
    name: "Basic",
    planId: "basic",
    monthly: 30,
    features: [
      "Full LifeOS home",
      "Life Coach (24/7)",
      "€10 AI credits/mo",
    ],
    recommended: false,
  },
  {
    name: "Standard",
    planId: "standard",
    monthly: 45,
    features: [
      "Full LifeOS home",
      "Life Coach (24/7)",
      "€25 AI credits/mo",
      "Priority support",
    ],
    recommended: true,
  },
  {
    name: "Premium",
    planId: "premium",
    monthly: 95,
    features: [
      "Full LifeOS home",
      "Life Coach (24/7)",
      "€50 AI credits/mo",
      "Priority support",
      "Early access to features",
    ],
    recommended: false,
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="relative px-6 py-32">
      <div className="absolute inset-x-0 top-0">
        <div className="max-w-6xl mx-auto h-px bg-border" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 text-[10px] uppercase tracking-wider font-medium border-border text-muted-foreground">
            Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Try LifeOS free for 7 days
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We believe everyone deserves to feel in control. Pick what fits — you won&apos;t be charged until your trial ends.
          </p>
        </div>

        {/* Monthly / Annual toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className={cn("text-sm font-medium transition-colors", !annual ? "text-foreground" : "text-muted-foreground")}>
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            onClick={() => setAnnual(!annual)}
            className={cn(
              "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border border-border transition-colors",
              annual ? "bg-foreground" : "bg-muted"
            )}
          >
            <span
              className={cn(
                "pointer-events-none inline-block h-5 w-5 rounded-full bg-background shadow-sm ring-0 transition-transform",
                annual ? "translate-x-5" : "translate-x-0"
              )}
            />
          </button>
          <span className={cn("text-sm font-medium transition-colors", annual ? "text-foreground" : "text-muted-foreground")}>
            Annual
            <span className="ml-1.5 text-[10px] text-success font-medium">20% off</span>
          </span>
        </div>

        {/* 3-tier pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {plans.map((plan) => {
            const price = annual ? annualPrice(plan.monthly) : plan.monthly;
            return (
              <div
                key={plan.planId}
                className={cn(
                  "rounded-lg border p-8 flex flex-col relative",
                  plan.recommended
                    ? "border-foreground/20 bg-surface-hover"
                    : "border-border bg-card"
                )}
              >
                {plan.recommended && (
                  <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider font-medium bg-foreground text-background px-2.5 py-1 rounded-full">
                    Recommended
                  </span>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold">&euro;{formatPrice(price)}</span>
                  <span className="text-sm text-muted-foreground">/mo</span>
                </div>
                {annual && (
                  <div className="text-[11px] text-muted-foreground mt-1">billed annually</div>
                )}

                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-success shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://app.lifeos.zone?plan=${plan.planId}&auth=true`}
                  className={cn(
                    buttonVariants({ variant: plan.recommended ? "default" : "outline", size: "lg" }),
                    "mt-8 w-full rounded-lg text-xs uppercase tracking-wider font-medium"
                  )}
                >
                  Start free trial
                </a>
              </div>
            );
          })}
        </div>

        {/* Alternative plan links */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <a
            href="https://app.lifeos.zone?plan=dashboard&auth=true"
            className="text-sm text-muted-foreground/50 hover:text-muted-foreground transition-colors"
          >
            Already have an AI assistant and only want the LifeOS home?
          </a>
          <a
            href="https://app.lifeos.zone?plan=byok&auth=true"
            className="text-sm text-muted-foreground/50 hover:text-muted-foreground transition-colors"
          >
            Want to bring your own Anthropic API key instead?
          </a>
        </div>
      </div>
    </section>
  );
}
