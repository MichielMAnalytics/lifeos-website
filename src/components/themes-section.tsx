"use client";

import { useState } from "react";
import { Badge } from "./ui/badge";

const configExamples = [
  {
    title: "AI Behavior",
    description: "Configure exactly how your AI LifeCoach works",
    items: [
      { label: "Proactivity", value: "High", description: "Agent suggests tasks & reminds you" },
      { label: "Tone", value: "Direct", description: "No fluff, just actionable responses" },
      { label: "Morning briefing", value: "7:00 AM", description: "Daily summary of your plan" },
      { label: "Review trigger", value: "Auto", description: "Prompts daily & weekly reviews" },
    ],
  },
  {
    title: "Dashboard Layout",
    description: "Choose your persona and customize every panel",
    items: [
      { label: "Persona", value: "Solopreneur", description: "Execution-focused layout" },
      { label: "Theme", value: "Midnight", description: "Near-black, high contrast" },
      { label: "Font", value: "Satoshi", description: "Geometric, modern sans-serif" },
      { label: "Nav mode", value: "Sidebar", description: "Collapsed icon navigation" },
    ],
  },
  {
    title: "Integrations",
    description: "Connect your messaging apps and tools",
    items: [
      { label: "Telegram", value: "Connected", description: "Chat with your AI LifeCoach" },
      { label: "WhatsApp", value: "Connected", description: "Quick capture on the go" },
      { label: "Calendar", value: "Google Cal", description: "Sync events to day plans" },
      { label: "Reminders", value: "Push + Chat", description: "Get nudged where you are" },
    ],
  },
];

export function ThemesSection() {
  const [activeConfigTab, setActiveConfigTab] = useState(0);

  return (
    <section id="themes" className="relative px-6 py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[10px] uppercase tracking-wider font-medium border-border text-muted-foreground">
            Customization
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Your system, your way
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Everything in LifeOS is configurable — themes, dashboard layout, AI
            behavior, and integrations — so it works exactly the way you do.
          </p>
        </div>

        {/* Configuration tabs */}
        <div className="max-w-5xl mx-auto">
          {/* Tab selector */}
          <div className="flex justify-center gap-2 mb-8">
            {configExamples.map((example, i) => (
              <button
                key={example.title}
                onClick={() => setActiveConfigTab(i)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                  activeConfigTab === i
                    ? "border-foreground/20 bg-surface-hover text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {example.title}
              </button>
            ))}
          </div>

          {/* Config panel */}
          <div className="max-w-2xl mx-auto">
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 border-b border-border">
                <h4 className="text-sm font-medium">{configExamples[activeConfigTab].title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {configExamples[activeConfigTab].description}
                </p>
              </div>

              {/* Config items */}
              <div className="divide-y divide-border">
                {configExamples[activeConfigTab].items.map((item) => (
                  <div
                    key={item.label}
                    className="px-6 py-4 flex items-center justify-between group hover:bg-surface-hover transition-colors"
                  >
                    <div>
                      <div className="text-sm font-medium">{item.label}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {item.description}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-foreground/70 font-mono">
                        {item.value}
                      </span>
                      <svg
                        className="w-4 h-4 text-muted-foreground/30 group-hover:text-muted-foreground transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard layout preview placeholder */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-lg border-2 border-dashed border-border flex items-center justify-center py-24 px-8">
            <p className="text-sm text-muted-foreground text-center">
              Dashboard layout preview — coming soon
            </p>
          </div>
        </div>

        {/* Demo video placeholder */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="rounded-lg border-2 border-dashed border-border flex items-center justify-center py-24 px-8">
            <p className="text-sm text-muted-foreground text-center max-w-lg">
              Demo: See how you can personalize your AI LifeCoach and adjust your
              dashboard in real time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
