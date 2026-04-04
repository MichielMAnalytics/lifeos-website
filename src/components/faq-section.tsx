"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What is LifeOS?",
    a: "A personal productivity platform that brings your tasks, goals, journals, day plans, and ideas into one place. With an AI LifeCoach that has full context on everything.",
  },
  {
    q: "What is the AI LifeCoach?",
    a: "Your personal AI coach powered by OpenClaw. It knows your goals, tasks, and plans. It can proactively remind you, help you brainstorm, run reviews, and keep you on track.",
  },
  {
    q: "How do I talk to the AI LifeCoach?",
    a: "Via Telegram, WhatsApp, the dashboard, or the CLI. Send a voice message, type a task, or have a full conversation. Everything syncs to your dashboard instantly.",
  },
  {
    q: "What does Bring Your Own Key mean?",
    a: "You connect your own API key from Anthropic or OpenAI. You only pay for what you use directly to the AI provider. The subscription covers hosting your personal AI LifeCoach.",
  },
  {
    q: "Can I try it for free?",
    a: "Yes. Every plan comes with a free trial.",
  },
  {
    q: "Is LifeOS open source?",
    a: "The core platform is open source. You can self-host it and customize it. The hosted version on lifeos.zone includes managed infrastructure and the AI LifeCoach.",
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

export function FAQSection() {
  return (
    <section id="faq" className="relative px-6 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="rounded-xl border border-border bg-card px-6">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
