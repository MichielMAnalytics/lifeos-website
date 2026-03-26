"use client";

import { Badge } from "./ui/badge";

const useCases = [
  {
    title: "Voice to action",
    description:
      "Send a voice message on Telegram and your AI LifeCoach adds it to your dashboard. Tasks, ideas, journal entries — captured instantly without opening an app.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "Smart day plans",
    description:
      "Generate a daily plan that helps you focus on what actually matters. Less busy work, more deep work — and permission to be fully present when you're not working.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Brainstorm with context",
    description:
      "Your AI LifeCoach knows your journals, goals, and projects. Brainstorm ideas, plan projects, and think through decisions with an AI that has the full picture.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: "One system, not ten apps",
    description:
      "Stop copy-pasting context between productivity apps. Tasks, goals, journals, plans — all in one place, all connected, all feeding into your AI LifeCoach.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Proactive accountability",
    description:
      "Get smart reminders and nudges about your goals and tasks. Your AI LifeCoach holds you accountable — not in an annoying way, but in a way that actually helps.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="relative px-6 py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[10px] uppercase tracking-wider font-medium border-border text-muted-foreground">
            Use Cases
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Built for how you actually work
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            LifeOS fits into your life — not the other way around. Here are the
            most common ways people use it every day.
          </p>
        </div>

        {/* Use case grid — 2 columns, 5th card centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
          {useCases.slice(0, 4).map((useCase) => (
            <div
              key={useCase.title}
              className="group bg-background p-8 transition-colors duration-200 hover:bg-surface-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold">{useCase.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
          {/* 5th card spans full width */}
          <div className="group bg-background p-8 transition-colors duration-200 hover:bg-surface-hover md:col-span-2">
            <div className="md:max-w-[50%] md:mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  {useCases[4].icon}
                </div>
                <h3 className="text-lg font-semibold">{useCases[4].title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {useCases[4].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
