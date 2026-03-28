"use client";

const inputs = ["Tasks", "Thoughts", "Ideas", "Journals", "Voice messages"];
const outputs = ["Smart day plans", "Proactive reminders", "Goal tracking", "Weekly reviews", "Brainstorm sessions"];

export function FlowInfographic() {
  return (
    <section className="w-full px-6 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-bold tracking-tight mb-4">How LifeOS works</h2>
        <p className="text-center text-sm text-muted-foreground mb-16 max-w-md mx-auto">
          Everything you capture flows through your AI LifeCoach and comes back as actionable insight. Less mental noise, more room to create and be present.
        </p>

        <div className="flow-grid grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-0">
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

          {/* Arrow left to center */}
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
              <polygon points="50,95 58,100 50,105" className="fill-primary/40" />
            </svg>
          </div>

          {/* AI LifeCoach center box */}
          <div className="flex items-center justify-center">
            <div
              className="relative rounded-xl bg-primary px-6 py-8 text-center shadow-lg"
              style={{ animation: "aiGlow 3s ease-in-out infinite" }}
            >
              <div className="text-lg font-bold text-primary-foreground mb-1">AI LifeCoach</div>
              <div className="text-xs text-primary-foreground/70 mb-4">Powered by OpenClaw</div>
              <div className="text-[11px] text-primary-foreground/50 leading-relaxed max-w-[160px] mx-auto">
                Parses and understands your full context to generate personalized output
              </div>
            </div>
          </div>

          {/* Arrow center to right */}
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

        <style>{`
          @keyframes aiGlow {
            0%, 100% { box-shadow: 0 0 20px rgba(196, 93, 62, 0.15); }
            50% { box-shadow: 0 0 40px rgba(196, 93, 62, 0.35); }
          }
          @media (max-width: 768px) {
            .flow-grid {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
            .flow-grid svg {
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
