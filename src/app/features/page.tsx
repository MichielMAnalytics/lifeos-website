"use client";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Tasks & Projects",
    badge: "ORGANIZE",
    description:
      "Capture tasks, group them into projects, and track progress with status flows. Bulk actions, due dates, and drag-to-reorder keep everything moving. Link tasks to goals so nothing exists in isolation, and use filters, views, and labels to slice your work any way you need.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Goals & Reviews",
    badge: "MEASURE",
    description:
      "Set quarterly goals, track health scores, and run daily, weekly, monthly, and quarterly reviews. See velocity and progress at a glance with visual charts. Each review cycle connects to the last, building a continuous thread of reflection and improvement across your life.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
      </svg>
    ),
  },
  {
    title: "Journal & Reflection",
    badge: "REFLECT",
    description:
      "Daily journal with MIT, P1, P2 priority slots to keep your focus sharp. Capture wins, write notes, and build a habit of intentional reflection. Over time, your journal becomes a searchable archive of decisions, breakthroughs, and lessons learned.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
      </svg>
    ),
  },
  {
    title: "Day & Weekly Plans",
    badge: "PLAN",
    description:
      "Structure your days with wake times, schedule blocks, and priority tasks. Set weekly themes and track review scores to stay aligned with your bigger picture. Plans auto-populate from your task list, so you spend less time planning and more time doing.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Ideas & Thoughts",
    badge: "CAPTURE",
    description:
      "Quick-capture ideas with actionability ratings so nothing slips through the cracks. Promote high-potential ideas into projects when the time is right. Free-form thought logging gives you a low-friction space to think out loud without worrying about structure.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706 7.998 7.998 0 004.848 0 .75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
        <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "AI LifeCoach",
    badge: "CONFIGURE",
    description:
      "A fully configurable AI that knows your goals, tasks, and context. Powered by OpenClaw, you can bring your own keys or use included credits. Ask it to plan your day, brainstorm ideas, review your progress, or help you think through tough decisions with full awareness of your system.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.452.6.902 1.052 1.052l1.183.394a.75.75 0 010 1.416l-1.183.394c-.452.15-.902.6-1.052 1.052l-.394 1.183a.75.75 0 01-1.424 0l-.394-1.183c-.15-.452-.6-.902-1.052-1.052l-1.183-.394a.75.75 0 010-1.416l1.183-.394c.452-.15.902-.6 1.052-1.052l.394-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Reminders & Nudges",
    badge: "REMEMBER",
    description:
      "Time-based and context-aware reminders that respect your focus. Snooze, dismiss, or let the AI decide when to nudge you based on your schedule and priorities. Smart nudges adapt to your patterns, so you get reminded at the right moment, not just the scheduled one.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 004.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "CLI & API",
    badge: "BUILD",
    description:
      "Full-featured CLI for terminal-native workflows that feels like a natural extension of your shell. RESTful HTTP API for integrations with other tools and automations. API key auth, JSON output, and undo support make it easy to build on top of LifeOS programmatically.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-[10px] uppercase tracking-wider font-medium border-border text-muted-foreground">
              Features
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Everything you need,
              <br />
              nothing you don&apos;t
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Tasks link to projects. Projects roll up to goals. Goals inform your
              daily plan. Every piece of your system talks to every other.
            </p>
          </div>
        </section>

        {/* Feature cards */}
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-lg border border-border bg-background p-8 transition-colors duration-200 hover:bg-surface-hover"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-200">
                      {feature.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-medium text-muted-foreground">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
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
