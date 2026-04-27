"use client";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LogoMark } from "@/components/logo";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PartnersPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-16">
        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-8">
              <LogoMark size={48} className="text-foreground" />
            </div>
            <Badge variant="outline" className="mb-4 text-[10px] uppercase tracking-wider font-medium border-border text-muted-foreground">
              Partnership Program
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Grow with LifeAI
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Earn recurring commissions by referring users to LifeAI.
              Whether you&apos;re a content creator, coach, or community leader — we&apos;d love to work with you.
            </p>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              {[
                { value: "20%", label: "Recurring commission", description: "On every referred subscription, every month" },
                { value: "90d", label: "Cookie duration", description: "Referral tracked for 90 days after click" },
                { value: "€0", label: "To join", description: "Free to join, no minimum payout" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg border border-border bg-card p-6 text-center">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm font-medium mt-1">{stat.label}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ HOW IT WORKS ]
                </h2>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Apply", description: "Fill out a quick form telling us about your audience" },
                    { step: "2", title: "Get your link", description: "Receive a unique referral link and tracking dashboard" },
                    { step: "3", title: "Share", description: "Share LifeAI with your audience through content, coaching, or community" },
                    { step: "4", title: "Earn", description: "Get 20% recurring commission on every subscription from your referrals" },
                  ].map((step) => (
                    <div key={step.step} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
                      <div className="w-8 h-8 rounded-lg bg-surface-hover flex items-center justify-center text-sm font-mono font-medium shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">{step.title}</h3>
                        <p className="text-sm text-muted-foreground mt-0.5">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="mailto:info@lifeos.zone?subject=Partner Program Application"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-lg text-xs uppercase tracking-wider font-medium px-8"
                )}
              >
                Apply Now
              </a>
              <p className="text-xs text-muted-foreground mt-3">
                Questions? Reach out at info@lifeos.zone
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
