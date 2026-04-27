"use client";

import { useState } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is LifeAI?",
        a: "LifeAI is a personal productivity platform that unifies tasks, goals, projects, journals, day plans, weekly plans, ideas, thoughts, wins, resources, reminders, and reviews into one system. It comes with a visual dashboard, a CLI, and an API.",
      },
      {
        q: "Who is LifeAI for?",
        a: "LifeAI is built for individuals — solopreneurs, developers, content creators, executives, or anyone who wants a single system to manage their personal productivity. It's not a team collaboration tool.",
      },
      {
        q: "Is LifeAI open source?",
        a: "The core platform is open source. You can self-host it, extend it, and customize it. The hosted version on lifeai.so includes managed infrastructure and the Life Coach.",
      },
    ],
  },
  {
    category: "Life Coach",
    questions: [
      {
        q: "What is the Life Coach?",
        a: "The Life Coach is powered by OpenClaw and has full context of your goals, tasks, journal, and plans. It can proactively remind you, suggest priorities, run reviews, and act as a personal productivity coach.",
      },
      {
        q: "What does BYOK mean?",
        a: "BYOK stands for 'Bring Your Own Key'. You provide your own Claude API key and pay for AI usage directly. This gives you full control over costs.",
      },
      {
        q: "How do I talk to the AI?",
        a: "You can chat with your Life Coach via Telegram, WhatsApp, the dashboard, or the CLI. Tasks and updates sync to your dashboard in real time.",
      },
      {
        q: "Can I configure how the AI behaves?",
        a: "Yes — everything is configurable. Set the tone, proactivity level, when it sends morning briefings, how it handles reviews, what it reminds you about, and more.",
      },
    ],
  },
  {
    category: "Pricing & Credits",
    questions: [
      {
        q: "What are credits?",
        a: "Credits cover AI usage costs (model inference, embeddings, etc.). The Full Setup plan includes credits so you don't need to manage API keys yourself.",
      },
      {
        q: "Can I top up credits?",
        a: "Yes. You can top up with any amount starting from €10. Credits don't expire and roll over month to month.",
      },
      {
        q: "What's included in the Dashboard Only plan?",
        a: "The full dashboard experience — all themes, personas, fonts, cloud sync, CLI, and API access. No Life Coach. Perfect if you want the organizational system without the AI.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        q: "What tech stack does LifeAI use?",
        a: "Next.js 15 dashboard, Convex real-time backend, Commander.js CLI. TypeScript throughout. Bun as the package manager.",
      },
      {
        q: "Can I self-host LifeAI?",
        a: "Yes. Clone the repo, set up a Convex deployment, configure Google OAuth, and you're running. The full self-hosting guide is in the docs.",
      },
      {
        q: "Does LifeAI work offline?",
        a: "The dashboard requires a connection for real-time sync. The CLI can queue commands for later sync. Offline-first mode is on the roadmap.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-sm font-medium pr-4 group-hover:text-foreground transition-colors">
          {q}
        </span>
        <svg
          className={cn(
            "w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200",
            open && "rotate-45"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-16">
        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-[10px] uppercase tracking-wider font-medium border-border text-muted-foreground">
                FAQ
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Frequently asked questions
              </h1>
              <p className="mt-4 text-muted-foreground text-lg">
                Everything you need to know about LifeAI.
              </p>
            </div>

            <div className="space-y-12">
              {faqs.map((section) => (
                <div key={section.category}>
                  <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                    [ {section.category.toUpperCase()} ]
                  </h2>
                  <div className="rounded-lg border border-border bg-card px-6">
                    {section.questions.map((faq) => (
                      <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                    ))}
                  </div>
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
