"use client";

import { useState, useEffect, useCallback } from "react";
import { Badge } from "./ui/badge";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Solopreneur",
    quote:
      "I used to juggle Notion, Todoist, and a paper journal. LifeOS replaced all three. The AI LifeCoach actually understands my priorities.",
  },
  {
    name: "Marcus Rivera",
    role: "Software Developer",
    quote:
      "The CLI is what sold me. I can add tasks and check my day plan without leaving the terminal. Finally, a productivity tool built for developers.",
  },
  {
    name: "Priya Sharma",
    role: "Content Creator",
    quote:
      "Voice-to-action through Telegram is a game changer. I capture ideas on the go and they show up organized in my dashboard. No friction at all.",
  },
  {
    name: "David Kim",
    role: "Executive",
    quote:
      "The quarterly reviews and goal tracking keep me focused on what matters. My weekly planning sessions went from 30 minutes to 5.",
  },
  {
    name: "Emma Larsson",
    role: "Graduate Student",
    quote:
      "LifeOS helps me balance coursework, research, and life. The daily journal and smart day plans keep me sane during exam season.",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);

  const advance = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
      setFade(true);
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(advance, 4000);
    return () => clearInterval(interval);
  }, [advance]);

  const t = testimonials[active];

  return (
    <section className="relative px-6 py-32">
      <div className="max-w-3xl mx-auto text-center">
        <Badge
          variant="outline"
          className="mb-4 text-[10px] uppercase tracking-wider font-medium border-border text-muted-foreground"
        >
          Testimonials
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          Loved by people who get things done
        </h2>

        <div className="min-h-[160px] flex flex-col items-center justify-center">
          <div
            className={`transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed max-w-2xl mx-auto mb-6">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setActive(i);
                  setFade(true);
                }, 300);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === active
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
