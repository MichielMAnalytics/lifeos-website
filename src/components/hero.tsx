"use client";

import { LogoMark } from "./logo";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

function TerminalPreview() {
  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-up delay-8">
      <div className="rounded-lg border border-border overflow-hidden bg-card">
        {/* Terminal chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[11px] text-muted-foreground font-mono ml-2">
            ~/projects
          </span>
        </div>

        {/* Terminal content */}
        <div className="p-5 font-mono text-[13px] leading-relaxed space-y-3">
          <div className="animate-line-reveal delay-10">
            <span className="text-muted-foreground">$</span>{" "}
            <span className="text-foreground">lifeos goal health</span>
          </div>

          <div className="animate-line-reveal delay-15 space-y-1 text-muted-foreground">
            <div className="flex justify-between">
              <span className="text-foreground/80">Launch LifeOS</span>
              <span className="text-success">■■■■■■■■░░ 82%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground/80">Read 12 books</span>
              <span className="text-warning">■■■■■░░░░░ 50%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground/80">Daily journaling</span>
              <span className="text-success">■■■■■■■■■░ 91%</span>
            </div>
          </div>

          <div className="animate-line-reveal delay-15 flex items-center">
            <span className="text-muted-foreground">$</span>{" "}
            <span className="terminal-cursor ml-1 inline-block w-2 h-4 bg-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Ambient radial glow */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.015] blur-[100px] animate-breathe pointer-events-none" />

      {/* Floating logo mark */}
      <div className="animate-fade-up delay-1 mb-10">
        <div className="relative">
          <LogoMark size={72} className="text-foreground animate-float" />
          <div className="absolute inset-0 blur-2xl opacity-15 pointer-events-none">
            <LogoMark size={72} className="text-foreground" />
          </div>
        </div>
      </div>

      {/* Headline */}
      <h1 className="animate-fade-up delay-2 text-center text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl">
        Stop juggling.
        <br />
        Start living.
      </h1>

      {/* Subhead */}
      <p className="animate-fade-up delay-4 mt-6 text-center text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
        Finally, one place for your tasks, goals, journals, and plans — with an
        AI LifeCoach that actually knows what&apos;s going on in your life.
      </p>

      {/* CTA buttons */}
      <div className="animate-fade-up delay-5 mt-10 flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#get-started"
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-lg text-xs uppercase tracking-wider font-medium px-8 gap-2"
          )}
        >
          Get Started
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "rounded-lg text-xs uppercase tracking-wider font-medium px-8 gap-2"
          )}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      </div>

      {/* Device availability */}
      <div className="animate-fade-up delay-6 mt-6 flex items-center gap-2 text-xs text-muted-foreground/60">
        {/* Monitor icon */}
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
        </svg>
        {/* Laptop icon */}
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 1 1.5-1.5h16.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H15M9 17.25v1.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-1.5M9 17.25h6" />
        </svg>
        {/* Phone icon */}
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
        <span className="ml-1">Works on web, desktop, and mobile</span>
      </div>

      {/* Terminal preview */}
      <div className="mt-20 w-full max-w-2xl">
        <TerminalPreview />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-15">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-border-bright" />
      </div>
    </section>
  );
}
