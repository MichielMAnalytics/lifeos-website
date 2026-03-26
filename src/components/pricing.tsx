"use client";

import { useState, useRef, useEffect } from "react";
import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const creditOptions = [
  { credits: 10, total: 40 },
  { credits: 25, total: 55 },
  { credits: 50, total: 80 },
  { credits: 75, total: 105 },
  { credits: 100, total: 130 },
];

function annualPrice(monthly: number) {
  return Math.round(monthly * 0.80 * 100) / 100;
}

function formatPrice(price: number) {
  // Show integer if whole number, otherwise one decimal
  return price % 1 === 0 ? price.toString() : price.toFixed(2);
}

function LearnMore({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
      >
        <span>{open ? "Show less" : "Learn more"}</span>
        <svg
          className={cn("w-3 h-3 transition-transform", open && "rotate-180")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div
        style={{ maxHeight: open ? height : 0 }}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
      >
        <div ref={contentRef} className="pt-3 text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Pricing() {
  const [selectedCredits, setSelectedCredits] = useState(creditOptions[1]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [annual, setAnnual] = useState(false);

  const homePrice = annual ? annualPrice(10) : 10;
  const byokPrice = annual ? annualPrice(30) : 30;
  const fullPrice = annual ? annualPrice(selectedCredits.total) : selectedCredits.total;

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
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Try any plan free for 7 days. No credit card required.
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
          {/* Base */}
          <div className="rounded-lg border border-border bg-card p-8 flex flex-col">
            <h3 className="text-lg font-semibold">Base</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold">&euro;{formatPrice(homePrice)}</span>
              <span className="text-sm text-muted-foreground">/mo</span>
            </div>
            {annual && (
              <div className="text-[11px] text-muted-foreground mt-1">billed annually</div>
            )}
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              LifeOS hosted, no AI LifeCoach. The full dashboard experience.
            </p>

            <ul className="mt-6 space-y-3 flex-1">
              {[
                "Full dashboard access",
                "All 6 themes & 7 personas",
                "10 font options",
                "Cloud sync & backup",
                "CLI & API access",
                "Community support",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <svg className="w-4 h-4 text-success shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>

            <LearnMore>
              Perfect if you want to organize your life without AI. You get the full dashboard — tasks, goals, journals, day plans, and more. Everything syncs to the cloud and you can access it from any device.
            </LearnMore>

            <a
              href="#get-started"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-8 w-full rounded-lg text-xs uppercase tracking-wider font-medium"
              )}
            >
              Get Started
            </a>
          </div>

          {/* Bring Your Own Key */}
          <div className="rounded-lg border border-border bg-card p-8 flex flex-col">
            <h3 className="text-lg font-semibold">Bring Your Own Key</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold">&euro;{formatPrice(byokPrice)}</span>
              <span className="text-sm text-muted-foreground">/mo</span>
            </div>
            <div className="text-[11px] text-muted-foreground mt-1">
              &euro;{formatPrice(annual ? annualPrice(10) : 10)} Base + &euro;{formatPrice(annual ? annualPrice(20) : 20)} AI LifeCoach
            </div>
            {annual && (
              <div className="text-[11px] text-muted-foreground mt-0.5">billed annually</div>
            )}
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Everything in the Base plan, plus your own AI LifeCoach. Connect your own Anthropic or OpenAI API key — you only pay what you use.
            </p>

            <ul className="mt-6 space-y-3 flex-1">
              {[
                "Everything in Base",
                "Personal AI LifeCoach",
                "Use your own API keys",
                "Full AI LifeCoach configuration",
                "Telegram & WhatsApp integration",
                "Priority email support",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <svg className="w-4 h-4 text-success shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>

            <LearnMore>
              For people who already have an API key from Anthropic or OpenAI. You get everything in Base, plus your own AI LifeCoach. Connect your API key once and you&apos;re set — you only pay for what you use directly to the AI provider. The &euro;20/month covers hosting and running your personal AI LifeCoach.
            </LearnMore>

            <a
              href="#get-started"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-8 w-full rounded-lg text-xs uppercase tracking-wider font-medium"
              )}
            >
              Get Started
            </a>
          </div>

          {/* Full Setup */}
          <div className="rounded-lg border border-foreground/20 bg-surface-hover p-8 flex flex-col relative">
            <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider font-medium bg-foreground text-background px-2.5 py-1 rounded-full">
              Recommended
            </span>
            <h3 className="text-lg font-semibold">Full Setup</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold">&euro;{formatPrice(fullPrice)}</span>
              <span className="text-sm text-muted-foreground">/mo</span>
            </div>
            <div className="text-[11px] text-muted-foreground mt-1">
              &euro;{formatPrice(annual ? annualPrice(10) : 10)} Base + &euro;{formatPrice(annual ? annualPrice(20) : 20)} AI LifeCoach + &euro;{formatPrice(annual ? annualPrice(selectedCredits.credits) : selectedCredits.credits)} credits
            </div>
            {annual && (
              <div className="text-[11px] text-muted-foreground mt-0.5">billed annually</div>
            )}
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Dashboard + AI LifeCoach + credits included. No API key setup needed.
            </p>

            {/* Credit selector */}
            <div className="mt-4 relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-border bg-background text-sm hover:border-border-bright transition-colors"
              >
                <span>&euro;{selectedCredits.credits} credits</span>
                <svg className={`w-4 h-4 text-muted-foreground transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 rounded-lg border border-border bg-card z-10 overflow-hidden">
                  {creditOptions.map((option) => (
                    <button
                      key={option.credits}
                      onClick={() => { setSelectedCredits(option); setDropdownOpen(false); }}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2 text-sm transition-colors hover:bg-surface-hover",
                        selectedCredits.credits === option.credits && "bg-surface-hover text-foreground"
                      )}
                    >
                      <span>&euro;{option.credits} credits</span>
                      <span className="text-muted-foreground">&euro;{formatPrice(annual ? annualPrice(option.total) : option.total)}/mo</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <ul className="mt-6 space-y-3 flex-1">
              {[
                "Everything in Bring Your Own Key",
                "AI credits included — no keys needed",
                "Priority support",
                "Early access to new features",
                "Dedicated onboarding",
                "Usage analytics dashboard",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <svg className="w-4 h-4 text-success shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>

            <LearnMore>
              The easiest way to get started. Everything is set up for you — no API keys, no configuration needed. AI credits are included so you can start chatting with your AI LifeCoach right away. Best for people who just want it to work.
            </LearnMore>

            <a
              href="#get-started"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 w-full rounded-lg text-xs uppercase tracking-wider font-medium"
              )}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
