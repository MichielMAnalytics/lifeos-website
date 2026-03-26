"use client";

import { Badge } from "./ui/badge";

const coachFeatures = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Proactive, not reactive",
    description: "Your assistant doesn't wait to be asked. It nudges you about overdue tasks, reminds you of goals slipping, and suggests what to focus on next.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Full context, always",
    description: "It knows your goals, your tasks, your journal, your weekly plan. Every conversation builds on everything that came before.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    title: "Smart reminders",
    description: "Not just time-based alerts. Context-aware nudges that know when you're likely to forget, procrastinate, or need a push.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "A coach in your corner",
    description: "Morning briefings, daily reviews, weekly reflections. It helps you stay honest about what matters and where your time goes.",
  },
];

export function AICoach() {
  return (
    <section className="relative px-6 py-32">
      <div className="absolute inset-x-0 top-0">
        <div className="max-w-6xl mx-auto h-px bg-border" />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[10px] uppercase tracking-wider font-medium border-border text-muted-foreground">
            AI LifeCoach
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            More than a chatbot
          </h2>
          <p className="text-xs text-muted-foreground/60 font-medium tracking-wide uppercase mt-2">Powered by OpenClaw</p>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            An AI that knows your life context, acts proactively, and works as a personal
            coach — not just a question-answering machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coachFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-border bg-card p-6 hover:border-border-bright transition-colors duration-200 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0 mt-0.5">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
