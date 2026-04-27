"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export default function InspirationPage() {
  return (
    <div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl font-bold mb-2">Design Pattern Showcase</h1>
          <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
            Interactive examples of design patterns from top product websites.
            Internal reference for the LifeAI team.
          </p>
        </header>

        <div className="space-y-24">
          <ExpandOnHoverButton />
          <GradientTextHeadline />
          <TestimonialCarousel />
          <FloatingFeatureCards />
          <AnimatedCounter />
          <ComparisonToggle />
          <StickySectionHeaders />
          <PillNavigation />
          <TrustBarLogos />
          <SocialProofToast />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared wrapper for each pattern                                    */
/* ------------------------------------------------------------------ */

function PatternSection({
  number,
  title,
  seenOn,
  recommendation,
  children,
}: {
  number: number;
  title: string;
  seenOn: string;
  recommendation: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <span
          className="text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0"
          style={{
            background: "var(--primary)",
            color: "var(--primary-foreground)",
          }}
        >
          {number}
        </span>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>

      <div
        className="rounded-xl p-8 mb-4"
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        {children}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 text-sm" style={{ color: "var(--muted-foreground)" }}>
        <p>
          <span className="font-medium" style={{ color: "var(--foreground)" }}>Seen on:</span>{" "}
          {seenOn}
        </p>
        <span className="hidden sm:inline">|</span>
        <p>
          <span className="font-medium" style={{ color: "var(--foreground)" }}>Recommendation:</span>{" "}
          {recommendation}
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  1. Expand-on-hover button                                          */
/* ------------------------------------------------------------------ */

function ExpandOnHoverButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <PatternSection
      number={1}
      title="Expand-on-Hover Button"
      seenOn="Notion, Linear, Vercel"
      recommendation="Yes, use for the primary CTA. Adds subtle delight without being distracting."
    >
      <div className="flex flex-col items-center gap-6">
        <p className="text-center" style={{ color: "var(--muted-foreground)" }}>
          Hover the button to see it expand and reveal additional text.
        </p>
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative overflow-hidden font-medium rounded-lg text-base"
          style={{
            background: "var(--primary)",
            color: "var(--primary-foreground)",
            padding: hovered ? "14px 36px" : "14px 28px",
            transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
            boxShadow: hovered
              ? "0 8px 24px rgba(196, 93, 62, 0.35)"
              : "0 2px 8px rgba(196, 93, 62, 0.15)",
            transform: hovered ? "translateY(-1px)" : "translateY(0)",
          }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Get started free
            <span
              style={{
                display: "inline-block",
                width: hovered ? "auto" : "0",
                opacity: hovered ? 1 : 0,
                overflow: "hidden",
                whiteSpace: "nowrap",
                transition: "opacity 0.3s ease, width 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              &rarr; it takes 30 seconds
            </span>
          </span>
        </button>

        <div className="flex gap-4 flex-wrap justify-center">
          {/* Variation 2: Scale approach */}
          <button
            className="font-medium rounded-lg text-base px-7 py-3.5 hover:scale-105 active:scale-95"
            style={{
              background: "var(--foreground)",
              color: "var(--background)",
              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            Try LifeAI
          </button>

          {/* Variation 3: Border reveal */}
          <button
            className="font-medium rounded-lg text-base px-7 py-3.5 group"
            style={{
              background: "transparent",
              color: "var(--foreground)",
              border: "2px solid var(--border)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--primary)";
              e.currentTarget.style.color = "var(--primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--foreground)";
            }}
          >
            Learn more
          </button>
        </div>
      </div>
    </PatternSection>
  );
}

/* ------------------------------------------------------------------ */
/*  2. Gradient text headline                                          */
/* ------------------------------------------------------------------ */

function GradientTextHeadline() {
  return (
    <PatternSection
      number={2}
      title="Gradient Text Headline"
      seenOn="Linear, Raycast, Vercel, Stripe"
      recommendation="Yes, use sparingly on the hero headline. One gradient phrase per page max."
    >
      <div className="space-y-8">
        <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-center leading-tight">
          Your life,{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #c45d3e 0%, #d4a04a 50%, #6b8f71 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            beautifully organized
          </span>
        </h3>

        <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-center leading-tight">
          Build habits that{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #c45d3e, #8B5CF6, #3B82F6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            actually stick
          </span>
        </h3>

        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-center leading-tight">
          <span
            style={{
              background: "linear-gradient(90deg, #c45d3e 0%, #d4a04a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            One system
          </span>{" "}
          for everything you care about
        </h3>
      </div>
    </PatternSection>
  );
}

/* ------------------------------------------------------------------ */
/*  3. Testimonial carousel                                            */
/* ------------------------------------------------------------------ */

const testimonials = [
  {
    quote: "LifeAI replaced five apps for me. I finally have one place for my goals, habits, and daily plans.",
    name: "Sarah Chen",
    role: "Product Designer at Figma",
  },
  {
    quote: "The CLI is a game-changer. I can add tasks and journal entries without leaving my terminal.",
    name: "Marcus Johnson",
    role: "Senior Engineer at Stripe",
  },
  {
    quote: "I have tried every productivity app out there. LifeAI is the first one that actually fits how I think.",
    name: "Priya Sharma",
    role: "Freelance Writer",
  },
];

function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PatternSection
      number={3}
      title="Testimonial Carousel"
      seenOn="Notion, Superhuman, Headspace, Calm"
      recommendation="Yes, add once we have real testimonials. Auto-rotation with manual controls is the sweet spot."
    >
      <div className="flex flex-col items-center">
        <div className="relative w-full min-h-[180px] flex items-center justify-center">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
              style={{
                opacity: i === activeIndex ? 1 : 0,
                transform: i === activeIndex ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                pointerEvents: i === activeIndex ? "auto" : "none",
              }}
            >
              <p className="text-xl sm:text-2xl font-medium leading-relaxed mb-6 max-w-2xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                {t.role}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              style={{
                background: i === activeIndex ? "var(--primary)" : "var(--border)",
                transform: i === activeIndex ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </PatternSection>
  );
}

/* ------------------------------------------------------------------ */
/*  4. Floating feature cards                                          */
/* ------------------------------------------------------------------ */

const featureCards = [
  { title: "Daily Planning", desc: "AI-powered day plans that adapt to your energy and priorities.", icon: "📋" },
  { title: "Goal Tracking", desc: "Set quarterly goals and track progress with visual milestones.", icon: "🎯" },
  { title: "Journal", desc: "Structured reflections with prompts that grow with you.", icon: "📝" },
  { title: "CLI Access", desc: "Full-featured command line for power users who live in the terminal.", icon: "⌨️" },
];

function FloatingFeatureCards() {
  return (
    <PatternSection
      number={4}
      title="Floating Feature Cards"
      seenOn="Linear, Morgen, Craft, Pitch"
      recommendation="Yes, use for the features section. The hover lift is subtle and effective."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {featureCards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl p-6 cursor-default"
            style={{
              background: "var(--background)",
              border: "1px solid var(--border)",
              transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)";
              e.currentTarget.style.borderColor = "var(--primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            <span className="text-2xl mb-3 block">{card.icon}</span>
            <h4 className="font-semibold text-lg mb-1">{card.title}</h4>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </PatternSection>
  );
}

/* ------------------------------------------------------------------ */
/*  5. Animated counter                                                */
/* ------------------------------------------------------------------ */

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, ref };
}

const stats = [
  { target: 10000, label: "Users", suffix: "+" },
  { target: 4.9, label: "App Store Rating", suffix: " stars", decimals: 1 },
  { target: 500000, label: "Tasks Completed", suffix: "+" },
  { target: 99.9, label: "Uptime", suffix: "%", decimals: 1 },
];

function AnimatedCounter() {
  return (
    <PatternSection
      number={5}
      title="Animated Counter"
      seenOn="Reclaim.ai, ClickUp, WHOOP, Todoist"
      recommendation="Yes, add to the social proof section once we have real numbers. Very effective for credibility."
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <CounterCell key={stat.label} stat={stat} />
        ))}
      </div>
    </PatternSection>
  );
}

function CounterCell({ stat }: { stat: (typeof stats)[number] }) {
  const isDecimal = (stat.decimals ?? 0) > 0;
  const displayTarget = isDecimal ? Math.floor(stat.target * 10) : stat.target;
  const { count, ref } = useCountUp(displayTarget);
  const displayValue = isDecimal ? (count / 10).toFixed(stat.decimals) : count.toLocaleString();

  return (
    <div ref={ref} className="py-4">
      <p className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--primary)" }}>
        {displayValue}
        {stat.suffix}
      </p>
      <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>
        {stat.label}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  6. Comparison toggle                                               */
/* ------------------------------------------------------------------ */

function ComparisonToggle() {
  const [showAfter, setShowAfter] = useState(false);

  const before = {
    title: "Before LifeAI",
    items: [
      "Tasks scattered across 5 apps",
      "No clear daily plan",
      "Goals forgotten by February",
      "Journaling feels like a chore",
    ],
  };

  const after = {
    title: "After LifeAI",
    items: [
      "Everything in one system",
      "AI-generated daily plans",
      "Goals tracked with weekly reviews",
      "Guided journaling in 3 minutes",
    ],
  };

  const current = showAfter ? after : before;

  return (
    <PatternSection
      number={6}
      title="Comparison Toggle"
      seenOn="Superhuman, HEY, Basecamp, ClickUp"
      recommendation="Yes, great for the landing page. Before/after framing is one of the most persuasive patterns."
    >
      <div className="flex flex-col items-center gap-6">
        {/* Toggle */}
        <div
          className="relative flex rounded-full p-1"
          style={{ background: "var(--secondary)" }}
        >
          <button
            onClick={() => setShowAfter(false)}
            className="relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200"
            style={{
              color: !showAfter ? "var(--primary-foreground)" : "var(--muted-foreground)",
              background: !showAfter ? "var(--primary)" : "transparent",
            }}
          >
            Before
          </button>
          <button
            onClick={() => setShowAfter(true)}
            className="relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200"
            style={{
              color: showAfter ? "var(--primary-foreground)" : "var(--muted-foreground)",
              background: showAfter ? "var(--primary)" : "transparent",
            }}
          >
            After
          </button>
        </div>

        {/* Content */}
        <div
          className="w-full rounded-xl p-6"
          style={{
            background: showAfter ? "rgba(107, 143, 113, 0.08)" : "rgba(239, 68, 68, 0.05)",
            border: `1px solid ${showAfter ? "var(--success)" : "var(--danger)"}`,
            transition: "all 0.4s ease",
          }}
        >
          <h4 className="font-semibold text-lg mb-4">{current.title}</h4>
          <ul className="space-y-3">
            {current.items.map((item, i) => (
              <li
                key={`${showAfter}-${i}`}
                className="flex items-start gap-3 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span
                  className="mt-0.5 text-sm"
                  style={{ color: showAfter ? "var(--success)" : "var(--danger)" }}
                >
                  {showAfter ? "+" : "-"}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PatternSection>
  );
}

/* ------------------------------------------------------------------ */
/*  7. Sticky section headers                                          */
/* ------------------------------------------------------------------ */

const stickyContent = [
  {
    heading: "Plan Your Day",
    paragraphs: [
      "Start each morning with a structured daily plan generated by AI. The plan considers your calendar, priorities, energy levels, and deadlines to create a realistic schedule.",
      "Drag and drop to reorder. Mark items as complete. Carry unfinished tasks to tomorrow automatically.",
    ],
  },
  {
    heading: "Track Your Goals",
    paragraphs: [
      "Set goals at the quarterly, monthly, and weekly level. Link tasks and habits to goals so every action moves you forward.",
      "Weekly review prompts help you reflect on progress and adjust course. Visual progress bars show how far you have come.",
    ],
  },
  {
    heading: "Reflect and Grow",
    paragraphs: [
      "Structured journaling with customizable prompts. Morning intentions, evening reflections, and gratitude logs.",
      "Your AI coach reads your journal entries (with permission) and offers gentle nudges, pattern observations, and encouragement.",
    ],
  },
];

function StickySectionHeaders() {
  return (
    <PatternSection
      number={7}
      title="Sticky Section Headers"
      seenOn="Apple, Linear, Stripe documentation"
      recommendation="Yes, consider for long-form content like the features page or docs. Helps orientation."
    >
      <div className="space-y-0">
        {stickyContent.map((section) => (
          <div key={section.heading} className="relative">
            <h4
              className="font-semibold text-lg py-3 sticky top-0 z-10"
              style={{
                background: "var(--card)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {section.heading}
            </h4>
            <div className="py-4 space-y-3">
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PatternSection>
  );
}

/* ------------------------------------------------------------------ */
/*  8. Pill navigation                                                 */
/* ------------------------------------------------------------------ */

const pillCategories = ["All", "Productivity", "Health", "Mindfulness", "Journaling", "Goals", "Habits", "Social", "Finance"];

const pillItems: Record<string, string[]> = {
  All: ["Daily Planner", "Habit Tracker", "Mood Logger", "Goal Board", "Gratitude Journal", "Budget Tracker"],
  Productivity: ["Daily Planner", "Task Manager", "Focus Timer"],
  Health: ["Habit Tracker", "Sleep Log", "Exercise Tracker"],
  Mindfulness: ["Mood Logger", "Meditation Timer", "Breathing Exercise"],
  Journaling: ["Gratitude Journal", "Evening Reflection", "Morning Pages"],
  Goals: ["Goal Board", "Quarterly Review", "Vision Board"],
  Habits: ["Habit Tracker", "Streak Counter", "Habit Stacker"],
  Social: ["Relationship Tracker", "Gift Planner", "Contact Notes"],
  Finance: ["Budget Tracker", "Savings Goal", "Expense Log"],
};

function PillNavigation() {
  const [activePill, setActivePill] = useState("All");

  return (
    <PatternSection
      number={8}
      title="Pill Navigation"
      seenOn="Headspace, Calm, App Store, Spotify"
      recommendation="Yes, great for a modules/templates browsing page. Familiar pattern for filtering content."
    >
      <div>
        {/* Scrollable pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 -mx-2 px-2" style={{ scrollbarWidth: "none" }}>
          {pillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActivePill(cat)}
              className="shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: activePill === cat ? "var(--primary)" : "var(--secondary)",
                color: activePill === cat ? "var(--primary-foreground)" : "var(--secondary-foreground)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filtered content */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
          {(pillItems[activePill] || []).map((item) => (
            <div
              key={item}
              className="rounded-lg px-4 py-3 text-sm font-medium animate-fade-up"
              style={{
                background: "var(--background)",
                border: "1px solid var(--border)",
                animationDuration: "0.3s",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </PatternSection>
  );
}

/* ------------------------------------------------------------------ */
/*  9. Trust bar with logos                                             */
/* ------------------------------------------------------------------ */

const companies = [
  "Google",
  "Stripe",
  "Shopify",
  "Vercel",
  "Figma",
  "Notion",
  "Linear",
  "Raycast",
];

function TrustBarLogos() {
  return (
    <PatternSection
      number={9}
      title="Trust Bar with Logos"
      seenOn="Notion, ClickUp, Todoist, Reclaim.ai"
      recommendation="Yes, add once we have real company users. Even 4-5 logos add significant credibility."
    >
      <div className="text-center">
        <p className="text-sm font-medium mb-6" style={{ color: "var(--muted-foreground)" }}>
          Trusted by teams at
        </p>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {companies.map((company) => (
            <span
              key={company}
              className="text-lg font-semibold tracking-tight cursor-default transition-all duration-300"
              style={{
                color: "var(--border)",
                filter: "grayscale(100%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--foreground)";
                e.currentTarget.style.filter = "grayscale(0%)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--border)";
                e.currentTarget.style.filter = "grayscale(100%)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </PatternSection>
  );
}

/* ------------------------------------------------------------------ */
/*  10. Social proof toast                                             */
/* ------------------------------------------------------------------ */

const toastMessages = [
  { name: "Alex from Berlin", action: "just started a morning routine" },
  { name: "Jordan from NYC", action: "completed 30-day journaling streak" },
  { name: "Sam from Tokyo", action: "just signed up" },
  { name: "Riley from London", action: "hit their Q1 goal" },
  { name: "Taylor from SF", action: "just created their first day plan" },
];

function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [manualDismiss, setManualDismiss] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const showNext = useCallback(() => {
    setManualDismiss(false);
    setMessageIndex((prev) => (prev + 1) % toastMessages.length);
    setVisible(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setVisible(false), 3500);
  }, []);

  const dismiss = useCallback(() => {
    setVisible(false);
    setManualDismiss(true);
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const msg = toastMessages[messageIndex];

  return (
    <PatternSection
      number={10}
      title="Social Proof Toast"
      seenOn="Many SaaS landing pages, Fomo, Proof"
      recommendation="Maybe. Can feel spammy if overused. Consider showing only on first visit, and only real data."
    >
      <div className="flex flex-col items-center gap-6">
        <p className="text-center" style={{ color: "var(--muted-foreground)" }}>
          Click the button to trigger a social proof notification in the bottom-left corner of this card.
        </p>

        <button
          onClick={showNext}
          className="px-5 py-2.5 rounded-lg text-sm font-medium"
          style={{
            background: "var(--primary)",
            color: "var(--primary-foreground)",
          }}
        >
          Show notification
        </button>

        {/* Toast container (relative to this section) */}
        <div className="relative w-full h-20">
          <div
            className="absolute bottom-0 left-0 flex items-center gap-3 rounded-lg px-4 py-3 shadow-lg max-w-sm"
            style={{
              background: "var(--background)",
              border: "1px solid var(--border)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              pointerEvents: visible ? "auto" : "none",
            }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
            >
              {msg.name.charAt(0)}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">{msg.name}</p>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                {msg.action}
              </p>
            </div>
            <button
              onClick={dismiss}
              className="ml-2 text-xs shrink-0"
              style={{ color: "var(--muted-foreground)" }}
            >
              x
            </button>
          </div>
        </div>
      </div>
    </PatternSection>
  );
}
