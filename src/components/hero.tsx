import { LogoMark } from "./logo";

function TerminalPreview() {
  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-up delay-8">
      <div className="rounded-lg border border-border overflow-hidden bg-surface">
        {/* Terminal chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[11px] text-muted font-mono ml-2">
            ~/projects
          </span>
        </div>

        {/* Terminal content */}
        <div className="p-5 font-mono text-[13px] leading-relaxed space-y-3">
          <div className="animate-line-reveal delay-10">
            <span className="text-muted">$</span>{" "}
            <span className="text-foreground">lifeos plan today</span>
          </div>

          <div className="animate-line-reveal delay-12 space-y-1 text-muted">
            <div className="text-foreground/60 text-[11px] uppercase tracking-wider mb-2">
              [ TODAY&apos;S PLAN — MAR 25 ]
            </div>
            <div>
              <span className="text-success">MIT</span>{" "}
              <span className="text-foreground/80">
                Ship landing page for lifeos.zone
              </span>
            </div>
            <div>
              <span className="text-warning"> P1</span>{" "}
              <span className="text-foreground/80">
                Review Q1 goal health scores
              </span>
            </div>
            <div>
              <span className="text-danger"> P2</span>{" "}
              <span className="text-foreground/80">
                Write weekly reflection journal
              </span>
            </div>
          </div>

          <div className="animate-line-reveal delay-15">
            <span className="text-muted">$</span>{" "}
            <span className="text-foreground">lifeos goal health</span>
          </div>

          <div className="animate-line-reveal delay-15 space-y-1 text-muted">
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
            <span className="text-muted">$</span>{" "}
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
      {/* Ambient glow behind logo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[120px] animate-breathe pointer-events-none" />

      {/* Floating logo mark */}
      <div className="animate-fade-up delay-1 mb-10">
        <div className="relative">
          <LogoMark size={72} className="text-foreground animate-float" />
          <div className="absolute inset-0 blur-2xl opacity-20">
            <LogoMark size={72} className="text-foreground" />
          </div>
        </div>
      </div>

      {/* Headline */}
      <h1 className="animate-fade-up delay-2 text-center text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl">
        Your personal
        <br />
        life operating system
      </h1>

      {/* Subhead */}
      <p className="animate-fade-up delay-4 mt-6 text-center text-lg sm:text-xl text-muted max-w-2xl leading-relaxed">
        One system for tasks, goals, projects, journals, day plans, ideas, and
        reviews. Dashboard. CLI. API. Built for the way you think.
      </p>

      {/* CTA buttons */}
      <div className="animate-fade-up delay-5 mt-10 flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#get-started"
          className="group flex items-center gap-2 px-7 py-3 rounded-lg bg-foreground text-background text-sm font-medium uppercase tracking-wider transition-all duration-150 active:scale-[0.97] hover:bg-foreground/90"
        >
          Get Started
          <svg
            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
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
          className="flex items-center gap-2 px-7 py-3 rounded-lg border border-border text-sm font-medium uppercase tracking-wider text-muted hover:text-foreground hover:border-border-bright transition-all duration-150 active:scale-[0.97]"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View on GitHub
        </a>
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
