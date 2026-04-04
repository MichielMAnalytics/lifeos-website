"use client";

import { use, useRef } from "react";
import { motion, useInView } from "motion/react";
import { LogoMark } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { DemoSection } from "@/components/demo-section";
import { AICoach } from "@/components/ai-coach";
import { UseCases } from "@/components/use-cases";
import { Pricing } from "@/components/pricing";
import { ThemesSection } from "@/components/themes-section";
import { CLISection } from "@/components/cli-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

/* Dashboard mockup */
function DashboardMockup({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  const bg = dark ? "#1a1a2e" : "#ffffff";
  const surface = dark ? "#242440" : "#f5f7fa";
  const border = dark ? "#2e2e4a" : "#e2e5ed";
  const text = dark ? "#e2e8f0" : "#1e293b";
  const muted = dark ? "#7c8ca4" : "#94a3b8";
  const accent = "#3b7dd8";
  const green = "#22c55e";

  return (
    <div className={cn("w-full rounded-xl border shadow-2xl overflow-hidden", className)} style={{ background: bg, borderColor: border }}>
      <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: border }}>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex gap-4 ml-3">
          {["Today", "Tasks", "Goals", "Journal"].map((t, i) => (
            <span key={t} className="text-[10px] uppercase tracking-wider" style={{ color: i === 0 ? text : muted }}>{t}</span>
          ))}
        </div>
      </div>
      <div className="p-5 grid grid-cols-3 gap-4">
        <div className="col-span-2 rounded-lg p-4" style={{ background: surface }}>
          <div className="text-[9px] uppercase tracking-wider mb-3" style={{ color: muted }}>Most Important Task</div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full border-2" style={{ borderColor: accent }} />
            <span className="text-sm font-medium" style={{ color: text }}>Ship landing page for lifeos.zone</span>
          </div>
        </div>
        <div className="rounded-lg p-4 flex flex-col items-center justify-center" style={{ background: surface }}>
          <div className="text-[9px] uppercase tracking-wider mb-1" style={{ color: muted }}>Today</div>
          <div className="text-2xl font-bold" style={{ color: text }}>7<span className="text-sm font-normal" style={{ color: muted }}>/10</span></div>
        </div>
        <div className="rounded-lg p-4" style={{ background: surface }}>
          <div className="text-[9px] uppercase tracking-wider mb-3" style={{ color: muted }}>Tasks</div>
          <div className="space-y-2">
            {["Review PR #42", "Update API docs", "Fix auth flow"].map((task) => (
              <div key={task} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-sm border" style={{ borderColor: muted }} />
                <span className="text-[11px]" style={{ color: text }}>{task}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg p-4" style={{ background: surface }}>
          <div className="text-[9px] uppercase tracking-wider mb-3" style={{ color: muted }}>Goals</div>
          <div className="space-y-3">
            {[{ n: "Launch v1", p: 82 }, { n: "Read 12 books", p: 50 }].map((g) => (
              <div key={g.n}>
                <div className="flex justify-between mb-1">
                  <span className="text-[11px]" style={{ color: text }}>{g.n}</span>
                  <span className="text-[10px]" style={{ color: muted }}>{g.p}%</span>
                </div>
                <div className="h-1 rounded-full" style={{ background: border }}>
                  <div className="h-1 rounded-full" style={{ width: `${g.p}%`, background: g.p > 70 ? green : accent }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg p-4" style={{ background: surface }}>
          <div className="text-[9px] uppercase tracking-wider mb-3" style={{ color: muted }}>AI LifeCoach</div>
          <div className="space-y-2">
            <div className="rounded-md px-3 py-2 text-[11px]" style={{ background: bg, color: muted }}>
              You have 3 tasks due today. Start with the landing page?
            </div>
            <div className="rounded-md px-3 py-2 text-[11px]" style={{ background: accent, color: "#fff" }}>
              Yes, let&apos;s go
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Chat mockup for AI LifeCoach side */
function ChatMockup({ className = "" }: { className?: string }) {
  return (
    <div className={cn("w-full rounded-xl border border-border bg-card shadow-2xl overflow-hidden", className)}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-[11px] font-medium text-foreground">AI LifeCoach</span>
        <span className="text-[10px] text-muted-foreground ml-1">powered by OpenClaw</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <span className="text-[9px] text-primary font-bold">AI</span>
          </div>
          <div className="rounded-lg bg-surface px-3 py-2 text-[12px] text-foreground/80 leading-relaxed max-w-[80%]">
            Good morning! Based on your goals, I&apos;d focus on the landing page today. You&apos;re at 82% on &quot;Launch v1&quot; and this is the last big task.
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <div className="rounded-lg bg-primary text-primary-foreground px-3 py-2 text-[12px] leading-relaxed max-w-[70%]">
            Good call. Block 2 hours for it?
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <span className="text-[9px] text-primary font-bold">AI</span>
          </div>
          <div className="rounded-lg bg-surface px-3 py-2 text-[12px] text-foreground/80 leading-relaxed max-w-[80%]">
            Done. Blocked 9:00-11:00. I&apos;ll hold your other tasks until after. Want me to draft a plan for the page?
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <div className="rounded-lg bg-primary text-primary-foreground px-3 py-2 text-[12px] leading-relaxed">
            Yes please
          </div>
        </div>
      </div>
    </div>
  );
}

/* 1: Morgen-style — text left, dashboard right, tight and clean */
function Hero1() {
  return (
    <section className="w-full px-6 pt-36 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="mb-6">
            <LogoMark size={40} className="text-foreground" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
            Always busy,
            <br />
            but never on top
            <br />
            of things?
          </h1>
          <p className="mt-6 text-base text-muted-foreground max-w-sm leading-relaxed">
            Tasks, goals, journals, ideas. All connected, with an AI LifeCoach that sees the full picture.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="https://app.lifeos.zone?auth=true" className={cn(buttonVariants({ size: "lg" }), "rounded-lg text-xs uppercase tracking-wider font-medium px-8")}>
              Try free for 7 days
            </a>
            <a href="#demo" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-lg text-xs uppercase tracking-wider font-medium px-8")}>
              See demo
            </a>
          </div>
          <p className="mt-3 text-xs text-muted-foreground/50">No credit card required</p>
        </div>
        <div>
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

/* 2: Two mockups side by side — dashboard left, AI chat right, text centered above */
function Hero2() {
  return (
    <section className="w-full px-6 pt-36 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.0]">
            Always busy,
            <br />
            but never on top of things?
          </h1>
          <p className="mt-6 text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
            Tasks, goals, journals, ideas. All connected, with an AI LifeCoach that sees the full picture.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a href="https://app.lifeos.zone?auth=true" className={cn(buttonVariants({ size: "lg" }), "rounded-lg text-xs uppercase tracking-wider font-medium px-8")}>
              Try free for 7 days
            </a>
          </div>
        </div>
        {/* Two products side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium mb-3">Your dashboard</p>
            <DashboardMockup />
          </div>
          <div className="lg:col-span-2">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium mb-3">Your AI LifeCoach</p>
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/* 3: Todoist-style — compact left text, large mockup right, colored accent background */
function Hero3() {
  return (
    <section className="w-full overflow-hidden">
      <div className="bg-primary/[0.03] px-6 pt-36 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="inline-block text-[11px] uppercase tracking-[0.15em] text-primary font-medium mb-4 px-3 py-1 rounded-full bg-primary/10">
              Your life, organized
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Always busy,
              <br />
              but never on top of things?
            </h1>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              Tasks, goals, journals, ideas. All connected, with an AI LifeCoach that sees the full picture.
            </p>
            <a href="https://app.lifeos.zone?auth=true" className={cn(buttonVariants({ size: "lg" }), "mt-8 rounded-lg text-xs uppercase tracking-wider font-medium px-8")}>
              Start for free
            </a>
          </div>
          <div className="lg:col-span-7">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/* 4: Notion-style — centered text, then full-bleed mockup with perspective tilt */
function Hero4() {
  return (
    <section className="w-full px-6 pt-36 pb-0 overflow-hidden">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.0] max-w-4xl">
          Always busy,
          <br />
          but never on top of things?
        </h1>
        <p className="mt-6 text-center text-base text-muted-foreground max-w-md leading-relaxed">
          Tasks, goals, journals, ideas. All connected, with an AI LifeCoach that sees the full picture.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="https://app.lifeos.zone?auth=true" className={cn(buttonVariants({ size: "lg" }), "rounded-lg text-xs uppercase tracking-wider font-medium px-8")}>
            Try free for 7 days
          </a>
          <a href="#pricing" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-lg text-xs uppercase tracking-wider font-medium px-8")}>
            View pricing
          </a>
        </div>
      </div>
      {/* Perspective mockup */}
      <div className="mt-20 max-w-6xl mx-auto" style={{ perspective: "1200px" }}>
        <div style={{ transform: "rotateX(4deg)", transformOrigin: "center top" }}>
          <DashboardMockup />
        </div>
        <div className="h-20 bg-gradient-to-b from-transparent to-background -mt-20 relative z-10" />
      </div>
    </section>
  );
}

/* 5: Split with AI chat — text top-left, dashboard + chat side by side below */
function Hero5() {
  return (
    <section className="w-full px-6 pt-36 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-lg mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
            Always busy,
            <br />
            but never on top of things?
          </h1>
          <p className="mt-6 text-base text-muted-foreground max-w-sm leading-relaxed">
            Tasks, goals, journals, ideas. All connected, with an AI LifeCoach that sees the full picture.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="https://app.lifeos.zone?auth=true" className={cn(buttonVariants({ size: "lg" }), "rounded-lg text-xs uppercase tracking-wider font-medium px-8 gap-2")}>
              Get Started
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
          <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground/50">
            <span>Free for 7 days</span>
            <span>·</span>
            <span>No credit card</span>
            <span>·</span>
            <span>Web, desktop, mobile</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium mb-3">Your dashboard</p>
            <DashboardMockup />
          </div>
          <div className="lg:col-span-2">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium mb-3">Your AI LifeCoach</p>
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Flow Infographic — visualizes data flow: Inputs → AI LifeCoach → Outputs */
function FlowInfographic() {
  const inputs = ["Tasks", "Thoughts", "Ideas", "Journals", "Voice messages"];
  const outputs = ["Smart day plans", "Proactive reminders", "Goal tracking", "Weekly reviews", "Brainstorm sessions"];

  return (
    <section className="w-full px-6 py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-bold tracking-tight mb-4">How LifeOS works</h2>
        <p className="text-center text-sm text-muted-foreground mb-16 max-w-md mx-auto">
          Everything you capture flows through your AI LifeCoach and comes back as actionable insight.
        </p>

        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-0">
          {/* Inputs column */}
          <div className="flex flex-col gap-3">
            {inputs.map((item, i) => (
              <div
                key={item}
                className="animate-fade-up rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Arrow left → center */}
          <div className="flex items-center justify-center px-2 sm:px-4">
            <svg width="60" height="200" viewBox="0 0 60 200" fill="none" className="shrink-0">
              <path
                d="M5 20 Q30 100 55 100 Q30 100 5 180"
                stroke="currentColor"
                className="text-border"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6 4"
              >
                <animate attributeName="stroke-dashoffset" from="40" to="0" dur="2s" repeatCount="indefinite" />
              </path>
              <path
                d="M5 100 L55 100"
                stroke="currentColor"
                className="text-primary/40"
                strokeWidth="2"
                strokeDasharray="6 4"
              >
                <animate attributeName="stroke-dashoffset" from="40" to="0" dur="1.5s" repeatCount="indefinite" />
              </path>
              {/* Arrowhead */}
              <polygon points="50,95 58,100 50,105" className="fill-primary/40" />
            </svg>
          </div>

          {/* AI LifeCoach center box */}
          <div className="flex items-center justify-center">
            <div
              className="relative rounded-xl bg-primary px-6 py-8 text-center shadow-lg"
              style={{
                animation: "aiGlow 3s ease-in-out infinite",
              }}
            >
              <div className="text-lg font-bold text-primary-foreground mb-1">AI LifeCoach</div>
              <div className="text-xs text-primary-foreground/70 mb-4">Powered by OpenClaw</div>
              <div className="text-[11px] text-primary-foreground/50 leading-relaxed max-w-[160px] mx-auto">
                Parses &amp; understands your full context to generate personalized output
              </div>
            </div>
          </div>

          {/* Arrow center → right */}
          <div className="flex items-center justify-center px-2 sm:px-4">
            <svg width="60" height="200" viewBox="0 0 60 200" fill="none" className="shrink-0">
              <path
                d="M5 100 L55 100"
                stroke="currentColor"
                className="text-primary/40"
                strokeWidth="2"
                strokeDasharray="6 4"
              >
                <animate attributeName="stroke-dashoffset" from="40" to="0" dur="1.5s" repeatCount="indefinite" />
              </path>
              <path
                d="M55 20 Q30 100 5 100 Q30 100 55 180"
                stroke="currentColor"
                className="text-border"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6 4"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="2s" repeatCount="indefinite" />
              </path>
              {/* Arrowhead */}
              <polygon points="50,95 58,100 50,105" className="fill-primary/40" />
            </svg>
          </div>

          {/* Outputs column */}
          <div className="flex flex-col gap-3">
            {outputs.map((item, i) => (
              <div
                key={item}
                className="animate-fade-up rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground"
                style={{ animationDelay: `${1.0 + i * 0.12}s` }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile-friendly stacked layout */}
        <style>{`
          @keyframes aiGlow {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 125, 216, 0.15); }
            50% { box-shadow: 0 0 40px rgba(59, 125, 216, 0.35); }
          }
          @media (max-width: 768px) {
            .grid-cols-\\[1fr_auto_1fr_auto_1fr\\] {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
            .grid-cols-\\[1fr_auto_1fr_auto_1fr\\] svg {
              transform: rotate(90deg);
              width: 40px;
              height: 60px;
              margin: 0 auto;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const colorThemes: Record<string, { name: string; description: string; vars: Record<string, string> }> = {
  "1": {
    name: "Rounded corners",
    description: "Softer, rounder corners everywhere for a friendlier feel",
    vars: {
      "--background": "#ffffff",
      "--foreground": "#1e293b",
      "--card": "#f8f9fb",
      "--card-foreground": "#1e293b",
      "--primary": "#5a7dba",
      "--primary-foreground": "#ffffff",
      "--muted-foreground": "#64748b",
      "--border": "#e2e5ed",
      "--surface": "#f8f9fb",
      "--surface-hover": "#f1f3f8",
      "--border-bright": "rgba(90, 125, 186, 0.2)",
      "--success": "#22c55e",
      "--warning": "#f59e0b",
      "--ring": "#5a7dba",
      "--radius": "1rem",
    },
  },
  "2": {
    name: "Warm Cream",
    description: "Off-white warm background, terracotta accents",
    vars: {
      "--background": "#faf8f5",
      "--foreground": "#2c2420",
      "--card": "#f5f0ea",
      "--card-foreground": "#2c2420",
      "--primary": "#c45d3e",
      "--primary-foreground": "#ffffff",
      "--muted-foreground": "#8a7e72",
      "--border": "#e4ddd4",
      "--surface": "#f5f0ea",
      "--surface-hover": "#ede6dc",
      "--border-bright": "rgba(196, 93, 62, 0.2)",
      "--success": "#6b8f71",
      "--warning": "#d4a04a",
      "--ring": "#c45d3e",
    },
  },
  "3": {
    name: "Trusted by logos",
    description: "Integration partner logos for social proof",
    vars: {
      "--background": "#f5f7fa",
      "--foreground": "#1e293b",
      "--card": "#eef1f6",
      "--card-foreground": "#1e293b",
      "--primary": "#3b7dd8",
      "--primary-foreground": "#ffffff",
      "--muted-foreground": "#64748b",
      "--border": "#d8dee8",
      "--surface": "#eef1f6",
      "--surface-hover": "#e4e9f1",
      "--border-bright": "rgba(59, 125, 216, 0.2)",
      "--success": "#22c55e",
      "--warning": "#f59e0b",
      "--ring": "#3b7dd8",
    },
  },
  "4": {
    name: "Alternating backgrounds",
    description: "Sections alternate between cream and darker warm tone",
    vars: {
      "--background": "#faf8f5",
      "--foreground": "#2c2420",
      "--card": "#f5f0ea",
      "--card-foreground": "#2c2420",
      "--primary": "#c45d3e",
      "--primary-foreground": "#ffffff",
      "--muted-foreground": "#8a7e72",
      "--border": "#e4ddd4",
      "--surface": "#f5f0ea",
      "--surface-hover": "#ede6dc",
      "--border-bright": "rgba(196, 93, 62, 0.2)",
      "--success": "#6b8f71",
      "--warning": "#d4a04a",
      "--ring": "#c45d3e",
    },
  },
  "5": {
    name: "Scroll animations",
    description: "Sections fade in and slide up as you scroll",
    vars: {
      "--background": "#f5f7fa",
      "--foreground": "#1e293b",
      "--card": "#eef1f6",
      "--card-foreground": "#1e293b",
      "--primary": "#3b7dd8",
      "--primary-foreground": "#ffffff",
      "--muted-foreground": "#64748b",
      "--border": "#d8dee8",
      "--surface": "#eef1f6",
      "--surface-hover": "#e4e9f1",
      "--border-bright": "rgba(59, 125, 216, 0.2)",
      "--success": "#22c55e",
      "--warning": "#f59e0b",
      "--ring": "#3b7dd8",
    },
  },
};

export default function ThemePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const theme = colorThemes[id];

  if (!theme) {
    return <div className="p-20 text-center">Try /theme/1, /theme/2, /theme/3, /theme/4, or /theme/5</div>;
  }

  return (
    <>
      <style>{`
        :root {
          ${Object.entries(theme.vars)
            .map(([key, value]) => `${key}: ${value} !important;`)
            .join("\n          ")}
        }
        ${id === "1" ? `
        /* Rounded corners override */
        button, a, .rounded-lg { border-radius: 1rem !important; }
        .rounded-xl { border-radius: 1.5rem !important; }
        .rounded-full { border-radius: 9999px !important; }
        ` : ""}
        ${id === "4" ? `
        /* Alternating section backgrounds */
        main > section:nth-child(odd) {
          background-color: #faf8f5 !important;
        }
        main > section:nth-child(even) {
          background-color: #ede6dc !important;
          border-radius: 2rem;
          margin: 0 1rem;
        }
        ` : ""}
      `}</style>

      <div className="fixed bottom-4 left-4 z-[200] bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
        Theme {id}: {theme.name}
        <div className="text-xs opacity-70 mt-0.5">{theme.description}</div>
      </div>

      <Nav />
      <main>
        <Hero />
        {id === "3" && (
          <section className="w-full px-6 py-12">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-medium mb-6">
                Integrates with
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {["Telegram", "WhatsApp", "Anthropic", "OpenAI", "Google Calendar"].map((name) => (
                  <span
                    key={name}
                    className="text-sm font-medium text-muted-foreground/50 grayscale select-none"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}
        {id === "5" ? (
          <>
            <ScrollReveal><FlowInfographic /></ScrollReveal>
            <ScrollReveal><Features /></ScrollReveal>
            <ScrollReveal><DemoSection /></ScrollReveal>
            <ScrollReveal><AICoach /></ScrollReveal>
            <ScrollReveal><UseCases /></ScrollReveal>
            <ScrollReveal><Pricing /></ScrollReveal>
            <ScrollReveal><ThemesSection /></ScrollReveal>
            <ScrollReveal><CLISection /></ScrollReveal>
            <ScrollReveal><CTASection /></ScrollReveal>
          </>
        ) : (
          <>
            <FlowInfographic />
            <Features />
            <DemoSection />
            <AICoach />
            <UseCases />
            <Pricing />
            <ThemesSection />
            <CLISection />
            <CTASection />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
