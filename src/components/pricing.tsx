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

const creditTiers = [
  { label: "€10 credits", credits: 10, total: 30 },
  { label: "€25 credits", credits: 25, total: 45 },
  { label: "€100 credits", credits: 100, total: 120 },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function DashIcon() {
  return (
    <span className="w-4 h-4 shrink-0 flex items-center justify-center text-muted-foreground/40 text-xs">&mdash;</span>
  );
}

export function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [selectedCredit, setSelectedCredit] = useState(0);

  const currentTier = creditTiers[selectedCredit];
  const platformFee = 20;

  return (
    <section id="pricing" className="relative px-6 py-16 sm:py-20">
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
            Full access, no charge today. Pick what fits &mdash; you won&apos;t be charged until your trial ends.
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

          {/* ── LifeOS Home ── */}
          <div className="rounded-lg border border-border bg-card p-8 flex flex-col">
            <h3 className="text-lg font-semibold">LifeOS Home</h3>
            <p className="text-sm text-muted-foreground mt-1">Dashboard only</p>

            <div className="mt-5 flex items-baseline gap-2">
              <span className="text-4xl font-bold">&euro;{formatPrice(annual ? annualPrice(10) : 10)}</span>
              <span className="text-sm text-muted-foreground">/mo</span>
            </div>
            {annual && (
              <div className="text-[11px] text-muted-foreground mt-1">billed annually</div>
            )}

            {/* Breakdown */}
            <div className="mt-6 rounded-md border border-border bg-background/50 p-3 space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Platform</span>
                <span className="font-medium">&euro;{formatPrice(annual ? annualPrice(10) : 10)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">LifeCoach</span>
                <span className="text-muted-foreground/50 text-xs">&mdash;</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">AI credits</span>
                <span className="text-muted-foreground/50 text-xs">&mdash;</span>
              </div>
            </div>

            {/* Features */}
            <ul className="mt-5 space-y-2.5 flex-1 text-sm">
              <li className="flex items-center gap-2"><CheckIcon /><span className="text-foreground/80">Full dashboard & pages</span></li>
              <li className="flex items-center gap-2"><CheckIcon /><span className="text-foreground/80">CLI access</span></li>
              <li className="flex items-center gap-2"><CheckIcon /><span className="text-foreground/80">Connect your own AI</span></li>
              <li className="flex items-center gap-2"><DashIcon /><span className="text-muted-foreground/50">LifeCoach (AI assistant)</span></li>
              <li className="flex items-center gap-2"><DashIcon /><span className="text-muted-foreground/50">Telegram & Discord</span></li>
            </ul>

            <a
              href="https://app.lifeos.zone/sign-up?plan=dashboard"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-8 w-full rounded-lg text-xs uppercase tracking-wider font-medium"
              )}
            >
              Start free trial
            </a>
          </div>

          {/* ── BYOK (recommended) ── */}
          <div className="rounded-lg border border-foreground/20 bg-surface-hover p-8 flex flex-col relative">
            <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider font-medium bg-foreground text-background px-2.5 py-1 rounded-full">
              Recommended
            </span>

            <h3 className="text-lg font-semibold">Bring Your Own Key</h3>
            <p className="text-sm text-muted-foreground mt-1">Use your own Claude API key</p>

            <div className="mt-5 flex items-baseline gap-2">
              <span className="text-4xl font-bold">&euro;{formatPrice(annual ? annualPrice(20) : 20)}</span>
              <span className="text-sm text-muted-foreground">/mo</span>
            </div>
            {annual && (
              <div className="text-[11px] text-muted-foreground mt-1">billed annually</div>
            )}

            {/* Breakdown */}
            <div className="mt-6 rounded-md border border-border bg-background/50 p-3 space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Platform</span>
                <span className="font-medium">included</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">LifeCoach</span>
                <span className="font-medium">&euro;{formatPrice(annual ? annualPrice(20) : 20)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">AI credits</span>
                <span className="text-muted-foreground text-xs">pay Claude directly</span>
              </div>
            </div>

            {/* Features */}
            <ul className="mt-5 space-y-2.5 flex-1 text-sm">
              <li className="flex items-center gap-2"><CheckIcon /><span className="text-foreground/80">Full dashboard & pages</span></li>
              <li className="flex items-center gap-2"><CheckIcon /><span className="text-foreground/80">LifeCoach (AI assistant)</span></li>
              <li className="flex items-center gap-2"><CheckIcon /><span className="text-foreground/80">Telegram & Discord</span></li>
              <li className="flex items-center gap-2"><CheckIcon /><span className="text-foreground/80">No AI markup on usage</span></li>
              <li className="flex items-center gap-2"><DashIcon /><span className="text-muted-foreground/50">AI credits included</span></li>
            </ul>

            <a
              href="https://app.lifeos.zone/sign-up?plan=byok"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "mt-8 w-full rounded-lg text-xs uppercase tracking-wider font-medium"
              )}
            >
              Start free trial
            </a>
          </div>

          {/* ── Managed ── */}
          <div className="rounded-lg border border-border bg-card p-8 flex flex-col">
            <h3 className="text-lg font-semibold">Managed</h3>
            <p className="text-sm text-muted-foreground mt-1">We handle everything for you</p>

            <div className="mt-5 flex items-baseline gap-2">
              <span className="text-4xl font-bold">
                &euro;{formatPrice(annual ? annualPrice(currentTier.total) : currentTier.total)}
              </span>
              <span className="text-sm text-muted-foreground">/mo</span>
            </div>
            {annual && (
              <div className="text-[11px] text-muted-foreground mt-1">billed annually</div>
            )}

            {/* Breakdown with credit dropdown */}
            <div className="mt-6 rounded-md border border-border bg-background/50 p-3 space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Platform</span>
                <span className="font-medium">included</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">LifeCoach</span>
                <span className="font-medium">&euro;{formatPrice(annual ? annualPrice(platformFee) : platformFee)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  AI credits
                  <select
                    value={selectedCredit}
                    onChange={(e) => setSelectedCredit(Number(e.target.value))}
                    className="text-xs bg-muted/50 border border-border rounded px-1.5 py-0.5 text-foreground font-medium cursor-pointer focus:outline-none focus:ring-1 focus:ring-foreground/20"
                  >
                    {creditTiers.map((tier, i) => (
                      <option key={tier.credits} value={i}>
                        {tier.label}
                      </option>
                    ))}
                  </select>
                </span>
                <span className="font-medium">
                  &euro;{formatPrice(annual ? annualPrice(currentTier.credits) : currentTier.credits)}
                </span>
              </div>
            </div>
            <p className="text-[11px] text-muted-foreground mt-2">Unused credits roll over monthly</p>

            {/* Features */}
            <ul className="mt-4 space-y-2.5 flex-1 text-sm">
              <li className="flex items-center gap-2"><CheckIcon /><span className="text-foreground/80">Full dashboard & pages</span></li>
              <li className="flex items-center gap-2"><CheckIcon /><span className="text-foreground/80">LifeCoach (AI assistant)</span></li>
              <li className="flex items-center gap-2"><CheckIcon /><span className="text-foreground/80">Telegram & Discord</span></li>
              <li className="flex items-center gap-2"><CheckIcon /><span className="text-foreground/80">AI credits included</span></li>
              <li className="flex items-center gap-2"><CheckIcon /><span className="text-foreground/80">Nothing to configure</span></li>
            </ul>

            <a
              href="https://app.lifeos.zone/sign-up?plan=managed"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-8 w-full rounded-lg text-xs uppercase tracking-wider font-medium"
              )}
            >
              Start free trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
