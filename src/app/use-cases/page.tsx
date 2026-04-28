"use client";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

const useCases = [
  {
    title: "Voice to action",
    description:
      "Send a voice message on Telegram and your Life Coach adds it to your dashboard. Tasks, ideas, journal entries -- captured instantly without opening an app. Whether you are walking, driving, or just away from your desk, your voice becomes structured data in seconds. No transcription errors, no lost context.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "Smart day plans",
    description:
      "Generate a daily plan that helps you focus on what actually matters. Less busy work, more deep work, and permission to be fully present when you are not working. Your Life Coach looks at your tasks, deadlines, energy patterns, and goals to suggest a plan that fits your day. Adjust it or accept it with one tap.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Brainstorm with context",
    description:
      "Your Life Coach knows your journals, goals, and projects. Brainstorm ideas, plan projects, and think through decisions with an AI that has the full picture. Unlike generic chatbots, it understands your priorities, your past decisions, and what you are working toward, so every suggestion is grounded in your reality.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: "One system, not ten apps",
    description:
      "Stop copy-pasting context between productivity apps. Tasks, goals, journals, plans -- all in one place, all connected, all feeding into your Life Coach. No more switching tabs, syncing data, or losing information in the gaps between tools. Everything lives together and references everything else.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Proactive accountability",
    description:
      "Get smart reminders and nudges about your goals and tasks. Your Life Coach holds you accountable in a way that actually helps, not in an annoying way. It notices when you are falling behind on a goal, when a deadline is approaching, or when your weekly review is overdue, and it reaches out with a gentle push.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
];

export default function UseCasesPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-[10px] uppercase tracking-wider font-medium border-border text-muted-foreground">
              Use Cases
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Built for how you
              <br />
              actually work
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              LifeAI fits into your life, not the other way around. Here is how
              people use it every day to stay focused, organized, and intentional.
            </p>
          </div>
        </section>

        {/* Use case sections */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto space-y-16">
            {useCases.map((useCase, index) => (
              <div key={useCase.title}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Text content */}
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-primary">
                        {useCase.icon}
                      </div>
                      <h2 className="text-2xl font-semibold">{useCase.title}</h2>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>

                  {/* Visual mockup placeholder */}
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <div className="rounded-lg border border-border bg-surface-hover/50 aspect-[4/3] flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                          {useCase.icon}
                        </div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          Visual preview
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider between sections */}
                {index < useCases.length - 1 && (
                  <div className="h-px bg-border mt-16" />
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
