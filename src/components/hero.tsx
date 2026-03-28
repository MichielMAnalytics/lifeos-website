"use client";

import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

function DashboardMockup() {
  const bg = "#ffffff";
  const surface = "#f5f7fa";
  const border = "#e2e5ed";
  const text = "#1e293b";
  const muted = "#94a3b8";
  const accent = "#c45d3e";
  const green = "#6b8f71";

  return (
    <div className="w-full rounded-xl border shadow-2xl overflow-hidden" style={{ background: bg, borderColor: border }}>
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

function ChatMockup() {
  return (
    <div className="w-full rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-[11px] font-medium text-foreground">AI LifeCoach</span>
        <span className="text-[10px] text-muted-foreground ml-1">powered by OpenClaw</span>
      </div>
      <div className="p-4 space-y-3 max-h-[420px] overflow-y-auto">
        {/* Voice message capture */}
        <div className="flex gap-2 justify-end">
          <div className="rounded-lg bg-surface border border-border px-3 py-2 text-[12px] text-foreground/80 leading-relaxed flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
            <span className="text-muted-foreground italic">Voice note: &quot;Pick up groceries after work, and remind me to call mom this weekend&quot;</span>
          </div>
        </div>
        {/* AI processes voice note */}
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <span className="text-[9px] text-primary font-bold">AI</span>
          </div>
          <div>
            <div className="rounded-lg bg-surface px-3 py-2 text-[12px] text-foreground/80 leading-relaxed">
              Got it! I created 2 tasks from your voice note:
              <div className="mt-1.5 space-y-1 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-sm border border-primary/50" />
                  Pick up groceries after work <span className="text-muted-foreground">(today)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-sm border border-primary/50" />
                  Call mom <span className="text-muted-foreground">(Saturday)</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              <span className="px-2.5 py-1 rounded-full border border-primary/30 text-[11px] text-primary bg-primary/5">
                Add both to today
              </span>
              <span className="px-2.5 py-1 rounded-full border border-border text-[11px] text-muted-foreground">
                Schedule for tomorrow
              </span>
            </div>
          </div>
        </div>
        {/* User picks */}
        <div className="flex gap-2 justify-end">
          <div className="rounded-lg bg-primary text-primary-foreground px-3 py-2 text-[12px]">
            Add both to today
          </div>
        </div>
        {/* AI gives day plan */}
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <span className="text-[9px] text-primary font-bold">AI</span>
          </div>
          <div>
            <div className="rounded-lg bg-surface px-3 py-2 text-[12px] text-foreground/80 leading-relaxed">
              Done. Here&apos;s your updated plan for today:
              <div className="mt-2 space-y-1.5 text-[11px]">
                <div className="flex justify-between"><span className="font-medium">9:00</span><span>Deep work: Landing page</span></div>
                <div className="flex justify-between"><span className="font-medium">11:00</span><span>Team standup</span></div>
                <div className="flex justify-between"><span className="font-medium">12:00</span><span>Lunch</span></div>
                <div className="flex justify-between"><span className="font-medium">13:00</span><span>Pick up groceries</span></div>
                <div className="flex justify-between"><span className="font-medium">14:00</span><span>Review project proposal</span></div>
              </div>
              <div className="mt-2 text-[10px] text-muted-foreground">
                Your goal &quot;Read 12 books&quot; is at 50% with 3 months left. Want me to add 30 min reading time?
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              <span className="px-2.5 py-1 rounded-full border border-primary/30 text-[11px] text-primary bg-primary/5">
                Looks good, lock it in
              </span>
              <span className="px-2.5 py-1 rounded-full border border-border text-[11px] text-muted-foreground">
                Add reading time
              </span>
              <span className="px-2.5 py-1 rounded-full border border-border text-[11px] text-muted-foreground">
                Adjust something
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="w-full px-6 pt-36 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Centered text */}
        <div className="text-center mb-16">
          <h1 className="animate-fade-up delay-2 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.0]">
            Always busy,
            <br />
            but never on top of things?
          </h1>
          <p className="animate-fade-up delay-4 mt-6 text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
            Tasks, goals, journals, ideas. All connected, with an AI LifeCoach that sees the full picture.
          </p>
          <div className="animate-fade-up delay-5 mt-8 flex flex-col items-center gap-3">
            <a href="#get-started" className={cn(buttonVariants({ size: "lg" }), "rounded-lg text-sm font-medium px-8")}>
              Try for free
            </a>
          </div>
        </div>
        {/* Two products side by side */}
        <div className="animate-fade-up delay-6 relative">
          {/* Decorative background blobs */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/4 left-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px]" />
            <div className="absolute bottom-1/4 right-[15%] w-[400px] h-[400px] rounded-full bg-green-500/[0.04] blur-[100px]" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
              <p className="text-[11px] text-muted-foreground font-medium mb-3">Your dashboard</p>
              <DashboardMockup />
            </div>
            <div className="lg:col-span-2">
              <p className="text-[11px] text-muted-foreground font-medium mb-3">Your AI LifeCoach</p>
              <ChatMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
