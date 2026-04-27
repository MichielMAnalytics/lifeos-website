"use client";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

const entries = [
  {
    date: "April 5, 2026",
    version: "v1.2",
    title: "New pricing plans and website refresh",
    changes: [
      "Introduced LifeAI Home, BYOK, and Managed pricing tiers",
      "Redesigned landing page with interactive dashboard demo",
      "Added Terms of Service and Privacy Policy pages",
    ],
  },
  {
    date: "March 20, 2026",
    version: "v1.1",
    title: "Telegram and Discord channels",
    changes: [
      "Connect your Life Coach via Telegram or Discord",
      "Voice note capture — send a voice message and it creates tasks, journal entries, and reminders",
      "Improved day plan generation with calendar awareness",
    ],
  },
  {
    date: "February 10, 2026",
    version: "v1.0",
    title: "LifeAI launch",
    changes: [
      "Full dashboard with tasks, goals, journal, and day plans",
      "Life Coach powered by Claude",
      "Quarterly goal tracking and reviews",
      "CLI access for power users",
      "BYOK support — bring your own Claude API key",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-16">
        <section className="px-6 py-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-[10px] uppercase tracking-wider font-medium border-border text-muted-foreground">
                Changelog
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                What&apos;s new
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                The latest updates, improvements, and fixes to LifeAI.
              </p>
            </div>

            <div className="space-y-0">
              {entries.map((entry, i) => (
                <div key={entry.version} className="relative pl-8 pb-12 last:pb-0">
                  {/* Timeline line */}
                  {i < entries.length - 1 && (
                    <div className="absolute left-[7px] top-3 bottom-0 w-px bg-border" />
                  )}
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-border bg-background" />

                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-muted-foreground">{entry.date}</span>
                    <span className="text-[10px] font-medium bg-muted px-2 py-0.5 rounded">{entry.version}</span>
                  </div>
                  <h2 className="text-lg font-semibold mb-3">{entry.title}</h2>
                  <ul className="space-y-2">
                    {entry.changes.map((change) => (
                      <li key={change} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="text-muted-foreground mt-1 shrink-0">-</span>
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
