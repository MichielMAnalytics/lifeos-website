
function ChatBubbleUser({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 justify-end">
      <div className="rounded-lg bg-primary text-primary-foreground px-3 py-2 text-[12px] leading-relaxed max-w-[85%]">
        {children}
      </div>
    </div>
  );
}

function ChatBubbleAI({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2">
      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <span className="text-[9px] text-primary font-bold">AI</span>
      </div>
      <div className="rounded-lg bg-surface px-3 py-2 text-[12px] text-foreground/80 leading-relaxed max-w-[85%]">
        {children}
      </div>
    </div>
  );
}

function CustomizeBehaviorMockup() {
  return (
    <div className="w-full rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-[11px] font-medium text-foreground">AI LifeCoach</span>
        <span className="text-[10px] text-muted-foreground ml-auto">Customize behavior</span>
      </div>
      <div className="p-4 space-y-3">
        <ChatBubbleUser>
          Be more direct with me, skip the pleasantries
        </ChatBubbleUser>
        <ChatBubbleAI>
          Updated. I&apos;ll keep things straight to the point from now on. Here&apos;s how your morning debrief will look:
        </ChatBubbleAI>
        {/* Mini morning debrief preview */}
        <div className="ml-8">
          <div className="rounded-lg border border-border bg-surface px-4 py-3">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 font-medium">
              Morning Debrief
            </div>
            <div className="space-y-1.5 text-[11px] text-foreground/80">
              <div className="flex items-start gap-2">
                <span className="text-muted-foreground mt-px">-</span>
                <span>3 tasks due. Top priority: <span className="font-medium">Ship landing page</span></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-muted-foreground mt-px">-</span>
                <span>Goal &quot;Launch v1&quot; is at 82%. On track.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-muted-foreground mt-px">-</span>
                <span>No meetings. Full deep work day.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-muted-foreground mt-px">-</span>
                <span>Yesterday&apos;s journal flagged low energy. Consider a lighter afternoon.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMiniMockup({ layout }: { layout: "before" | "after" }) {
  const topPanel = layout === "before" ? "Tasks" : "Goals";
  const bottomLeft = layout === "before" ? "Goals" : "Tasks";
  const topHighlight = layout === "after";

  return (
    <div className="space-y-1.5">
      {/* Large top panel */}
      <div
        className={`rounded-md px-3 py-3 ${
          topHighlight
            ? "bg-primary/10 border border-primary/20"
            : "bg-surface-hover border border-border"
        }`}
      >
        <div
          className={`text-[10px] font-medium ${
            topHighlight ? "text-primary" : "text-foreground/60"
          }`}
        >
          {topPanel}
        </div>
      </div>
      {/* Two smaller panels side by side */}
      <div className="grid grid-cols-2 gap-1.5">
        <div
          className={`rounded-md px-2.5 py-2 ${
            !topHighlight
              ? "bg-primary/10 border border-primary/20"
              : "bg-surface-hover border border-border"
          }`}
        >
          <div
            className={`text-[10px] font-medium ${
              !topHighlight ? "text-primary" : "text-foreground/60"
            }`}
          >
            {bottomLeft}
          </div>
        </div>
        <div className="rounded-md bg-surface-hover border border-border px-2.5 py-2">
          <div className="text-[10px] font-medium text-foreground/60">Journal</div>
        </div>
      </div>
    </div>
  );
}

function CustomizeDashboardMockup() {
  return (
    <div className="w-full rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-[11px] font-medium text-foreground">AI LifeCoach</span>
        <span className="text-[10px] text-muted-foreground ml-auto">Customize dashboard</span>
      </div>
      <div className="p-4 space-y-3">
        {/* Before mockup */}
        <div className="ml-8">
          <div className="text-[9px] uppercase tracking-wider text-muted-foreground/60 font-medium mb-1.5">
            Before
          </div>
          <div className="rounded-lg border border-border bg-surface px-3 py-2.5">
            <DashboardMiniMockup layout="before" />
          </div>
        </div>

        {/* User message */}
        <ChatBubbleUser>
          I want to see my goals front and center when I open the dashboard
        </ChatBubbleUser>

        {/* AI response */}
        <ChatBubbleAI>
          Done. I moved Goals to the top and made it the largest panel.
        </ChatBubbleAI>

        {/* After mockup */}
        <div className="ml-8">
          <div className="text-[9px] uppercase tracking-wider text-muted-foreground/60 font-medium mb-1.5">
            After
          </div>
          <div className="rounded-lg border border-border bg-surface px-3 py-2.5">
            <DashboardMiniMockup layout="after" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ThemesSection() {
  return (
    <section id="themes" className="relative px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Your system, your way
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Tell your AI LifeCoach how you want things. It adjusts your dashboard,
            communication style, and workflow to match.
          </p>
        </div>

        {/* Two conversation mockups side by side */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium mb-3">
              Customize AI behavior
            </p>
            <CustomizeBehaviorMockup />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium mb-3">
              Customize dashboard
            </p>
            <CustomizeDashboardMockup />
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground/60">
            Everything is configurable through conversation or settings.
          </p>
        </div>
      </div>
    </section>
  );
}
