import { Badge } from "./ui/badge";

export function Infographic() {
  return (
    <section className="relative px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-[10px] uppercase tracking-wider font-medium border-border text-muted-foreground">
            How it works
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Two sides, one system
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            LifeOS has two parts: a personal homepage to organize your life, and
            an AI life coach that helps you stay on track.
          </p>
        </div>

        {/* Placeholder for infographic */}
        <div className="rounded-lg border border-dashed border-border bg-surface-hover/50 flex items-center justify-center min-h-[400px]">
          <div className="text-center space-y-3 max-w-lg px-6">
            <div className="text-4xl opacity-20">🖼</div>
            <p className="text-sm text-muted-foreground">
              Infographic coming soon
            </p>
            <p className="text-xs text-muted-foreground/60 leading-relaxed">
              Infographic showing the two sides of LifeOS: (1) The personal homepage — tasks, goals, journals, day plans, projects, ideas (2) The AI LifeCoach — powered by OpenClaw, knows your full context, available on Telegram/WhatsApp/web
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
