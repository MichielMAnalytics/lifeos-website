"use client";

export function DemoSection() {
  return (
    <section id="demo" className="relative px-6 py-32">
      <div className="absolute inset-x-0 top-0">
        <div className="max-w-7xl mx-auto h-px bg-border" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            See it in action
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Message your Life Coach on Telegram or WhatsApp — it captures tasks, updates
            goals, and syncs everything to your dashboard in real time.
          </p>
        </div>

        {/* Video placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg border border-border bg-card overflow-hidden group cursor-pointer">
            {/* Placeholder content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Play button */}
              <div className="w-20 h-20 rounded-full border-2 border-foreground/20 flex items-center justify-center transition-all duration-300 group-hover:border-foreground/40 group-hover:scale-105">
                <svg
                  className="w-8 h-8 text-foreground/60 ml-1 transition-colors group-hover:text-foreground/80"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Demo video coming soon
              </p>
              <p className="mt-2 text-[11px] text-muted-foreground/50 italic">
                Demo: Interactive preview of the LifeAI dashboard + Life Coach conversation
              </p>
            </div>

            {/* Grid pattern background */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Caption */}
          <p className="text-center text-xs text-muted-foreground mt-4">
            Talk to your assistant on Telegram or WhatsApp — tasks, goals, and plans sync to the dashboard instantly.
          </p>
        </div>
      </div>
    </section>
  );
}
