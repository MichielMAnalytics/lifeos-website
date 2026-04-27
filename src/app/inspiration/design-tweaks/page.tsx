"use client";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

/* ── Shared comparison wrapper ── */

function Comparison({
  number,
  title,
  principle,
  children,
}: {
  number: number;
  title: string;
  principle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-24">
      <div className="flex items-baseline gap-4 mb-6">
        <span
          className="text-[11px] font-semibold rounded-full w-7 h-7 flex items-center justify-center shrink-0"
          style={{ background: "#c45d3e", color: "#fff" }}
        >
          {number}
        </span>
        <h2 className="text-xl font-semibold tracking-tight text-[#2c2420]">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {children}
      </div>

      <p className="text-[13px] text-[#8a7e72] leading-relaxed max-w-2xl">
        {principle}
      </p>
    </section>
  );
}

function Panel({
  label,
  improved,
  children,
}: {
  label: string;
  improved?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span
          className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
          style={{
            background: improved ? "#c45d3e15" : "#e4ddd4",
            color: improved ? "#c45d3e" : "#8a7e72",
          }}
        >
          {label}
        </span>
      </div>
      <div
        className="rounded-xl overflow-hidden"
        style={{
          border: improved
            ? "1.5px solid #c45d3e30"
            : "1px solid #e4ddd4",
          background: "#faf8f5",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ── 1. Typography ── */

function TypographyComparison() {
  return (
    <Comparison
      number={1}
      title="Typography — Display Letter-spacing"
      principle="Linear uses -1.06px, Notion uses -1.5px to -2.1px, and Vercel uses -2.4px on display headings. Tighter tracking creates a more premium, confident feel on large text while remaining perfectly readable."
    >
      <Panel label="Current">
        <div className="p-8 flex flex-col items-center justify-center min-h-[200px]">
          <h3
            className="text-center font-bold text-[#2c2420] leading-[1.1]"
            style={{ fontSize: 32, letterSpacing: "-0.025em" }}
          >
            Your Personal Life
            <br />
            Operating System
          </h3>
          <p className="text-sm text-[#8a7e72] mt-3 text-center">
            Tasks, goals, journals, ideas — all connected.
          </p>
          <code className="mt-4 text-[10px] text-[#b5a99a] bg-[#f0ebe4] px-2 py-1 rounded font-mono">
            letter-spacing: -0.025em
          </code>
        </div>
      </Panel>

      <Panel label="Improved" improved>
        <div className="p-8 flex flex-col items-center justify-center min-h-[200px]">
          <h3
            className="text-center font-semibold text-[#2c2420] leading-[1.05]"
            style={{ fontSize: 32, letterSpacing: "-0.045em" }}
          >
            Your Personal Life
            <br />
            Operating System
          </h3>
          <p className="text-sm text-[#8a7e72] mt-3 text-center" style={{ letterSpacing: "-0.01em" }}>
            Tasks, goals, journals, ideas — all connected.
          </p>
          <code className="mt-4 text-[10px] text-[#c45d3e] bg-[#c45d3e10] px-2 py-1 rounded font-mono">
            letter-spacing: -0.045em
          </code>
        </div>
      </Panel>
    </Comparison>
  );
}

/* ── 2. Borders & Shadows ── */

function BorderShadowComparison() {
  const features = ["Full dashboard & pages", "Life Coach included", "Telegram & Discord"];

  return (
    <Comparison
      number={2}
      title="Borders & Shadows — Card Elevation"
      principle="All three systems avoid opaque borders. Notion uses multi-layer shadows with individual opacity never exceeding 0.05. Vercel uses shadow-as-border (box-shadow: 0 0 0 1px). The result feels lighter and more refined."
    >
      <Panel label="Current">
        <div className="p-8 flex items-center justify-center min-h-[280px]">
          <div
            className="w-full max-w-[260px] rounded-lg p-6"
            style={{ background: "#f5f0ea", border: "1px solid #e4ddd4" }}
          >
            <h4 className="text-base font-semibold text-[#2c2420]">Bring Your Own Key</h4>
            <p className="text-xs text-[#8a7e72] mt-1">Use your own Claude API key</p>
            <div className="mt-4 flex items-baseline gap-1.5">
              <span className="text-3xl font-bold text-[#2c2420]">&euro;20</span>
              <span className="text-sm text-[#8a7e72]">/mo</span>
            </div>
            <ul className="mt-5 space-y-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-[#2c2420]/80">
                  <span className="text-[#6b8f71]">&#10003;</span> {f}
                </li>
              ))}
            </ul>
            <div
              className="mt-6 text-center py-2.5 rounded-lg text-xs font-medium uppercase tracking-wider"
              style={{ background: "#c45d3e", color: "#fff" }}
            >
              Start free trial
            </div>
            <code className="block mt-3 text-[9px] text-[#b5a99a] text-center font-mono">
              border: 1px solid #e4ddd4
            </code>
          </div>
        </div>
      </Panel>

      <Panel label="Improved" improved>
        <div className="p-8 flex items-center justify-center min-h-[280px]">
          <div
            className="w-full max-w-[260px] rounded-xl p-6"
            style={{
              background: "#f5f0ea",
              boxShadow:
                "0 0 0 1px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.03), 0 8px 24px rgba(0,0,0,0.02)",
            }}
          >
            <h4 className="text-base font-semibold text-[#2c2420]" style={{ letterSpacing: "-0.02em" }}>
              Bring Your Own Key
            </h4>
            <p className="text-xs text-[#8a7e72] mt-1">Use your own Claude API key</p>
            <div className="mt-4 flex items-baseline gap-1.5">
              <span className="text-3xl font-bold text-[#2c2420]" style={{ letterSpacing: "-0.03em" }}>&euro;20</span>
              <span className="text-sm text-[#8a7e72]">/mo</span>
            </div>
            <ul className="mt-5 space-y-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-[#2c2420]/80">
                  <span className="text-[#6b8f71]">&#10003;</span> {f}
                </li>
              ))}
            </ul>
            <div
              className="mt-6 text-center py-2.5 rounded-lg text-xs font-medium uppercase tracking-wider"
              style={{
                background: "#c45d3e",
                color: "#fff",
                boxShadow: "0 1px 3px rgba(196,93,62,0.3)",
              }}
            >
              Start free trial
            </div>
            <code className="block mt-3 text-[9px] text-[#c45d3e] text-center font-mono">
              box-shadow: 4-layer stack, no border
            </code>
          </div>
        </div>
      </Panel>
    </Comparison>
  );
}

/* ── 3. Section Rhythm ── */

function SectionRhythmComparison() {
  const sections = [
    { title: "Features", desc: "Everything connects" },
    { title: "Use Cases", desc: "Built for how you actually work" },
    { title: "Pricing", desc: "Try LifeAI free for 7 days" },
  ];

  return (
    <Comparison
      number={3}
      title="Section Rhythm — Alternating Backgrounds"
      principle="Notion alternates between #ffffff and #f6f5f4 between page sections. Vercel uses #fafafa stripes. Alternating subtle tones creates visual rhythm, helps users parse content boundaries, and adds depth without any decorative elements."
    >
      <Panel label="Current">
        <div className="min-h-[220px]">
          {sections.map((s) => (
            <div key={s.title} className="px-6 py-8 text-center" style={{ background: "#faf8f5" }}>
              <h4 className="text-sm font-semibold text-[#2c2420]">{s.title}</h4>
              <p className="text-xs text-[#8a7e72] mt-1">{s.desc}</p>
            </div>
          ))}
          <code className="block text-[9px] text-[#b5a99a] text-center py-2 font-mono">
            all sections: same bg #faf8f5
          </code>
        </div>
      </Panel>

      <Panel label="Improved" improved>
        <div className="min-h-[220px]">
          {sections.map((s, i) => (
            <div
              key={s.title}
              className="px-6 py-8 text-center"
              style={{ background: i % 2 === 0 ? "#faf8f5" : "#f5f0ea" }}
            >
              <h4 className="text-sm font-semibold text-[#2c2420]">{s.title}</h4>
              <p className="text-xs text-[#8a7e72] mt-1">{s.desc}</p>
            </div>
          ))}
          <code className="block text-[9px] text-[#c45d3e] text-center py-2 font-mono">
            alternating: #faf8f5 / #f5f0ea
          </code>
        </div>
      </Panel>
    </Comparison>
  );
}

/* ── 4. Font Weights ── */

function FontWeightComparison() {
  return (
    <Comparison
      number={4}
      title="Font Weights — Refined Hierarchy"
      principle="Linear limits to weights 300, 400, 510, 590 — never reaching 700. Vercel caps at 600. Notion uses 700 only for display. Restraining to 3-4 weights with semibold (600) as the heaviest body weight creates a quieter, more sophisticated hierarchy."
    >
      <Panel label="Current">
        <div className="p-8 min-h-[220px]">
          <div className="text-[10px] uppercase tracking-wider text-[#8a7e72] font-normal mb-2">
            Feature label
          </div>
          <h4 className="text-xl font-bold text-[#2c2420] mb-2">
            Life Coach
          </h4>
          <p className="text-sm text-[#8a7e72] leading-relaxed mb-4">
            Your personal AI coach that knows your goals, tasks, and plans. Available 24/7 via chat.
          </p>
          <div className="text-xs text-[#b5a99a] font-mono space-y-1">
            <div>label: <span className="text-[#2c2420]">font-normal (400)</span></div>
            <div>heading: <span className="text-[#2c2420]">font-bold (700)</span></div>
            <div>body: <span className="text-[#2c2420]">font-normal (400)</span></div>
          </div>
        </div>
      </Panel>

      <Panel label="Improved" improved>
        <div className="p-8 min-h-[220px]">
          <div className="text-[10px] uppercase tracking-wider text-[#8a7e72] font-medium mb-2">
            Feature label
          </div>
          <h4
            className="text-xl font-semibold text-[#2c2420] mb-2"
            style={{ letterSpacing: "-0.02em" }}
          >
            Life Coach
          </h4>
          <p className="text-sm text-[#2c2420]/75 leading-relaxed mb-4">
            Your personal AI coach that knows your goals, tasks, and plans. Available 24/7 via chat.
          </p>
          <div className="text-xs font-mono space-y-1">
            <div className="text-[#c45d3e]">label: <span className="text-[#2c2420]">font-medium (500)</span></div>
            <div className="text-[#c45d3e]">heading: <span className="text-[#2c2420]">font-semibold (600)</span></div>
            <div className="text-[#c45d3e]">body: <span className="text-[#2c2420]">font-normal (400)</span></div>
          </div>
        </div>
      </Panel>
    </Comparison>
  );
}

/* ── Page ── */

export default function DesignTweaksPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-16">
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#c45d3e] font-semibold mb-3">
                Internal Reference
              </div>
              <h1
                className="text-3xl sm:text-4xl font-semibold text-[#2c2420] mb-4"
                style={{ letterSpacing: "-0.035em", lineHeight: 1.1 }}
              >
                Design Tweaks
              </h1>
              <p className="text-base text-[#8a7e72] max-w-xl leading-relaxed">
                Before &amp; after comparisons of design refinements inspired by
                Linear, Notion, and Vercel design systems. Applied to actual LifeAI components.
              </p>

              {/* Quick nav */}
              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  { n: 1, label: "Typography" },
                  { n: 2, label: "Borders & Shadows" },
                  { n: 3, label: "Section Rhythm" },
                  { n: 4, label: "Font Weights" },
                ].map((item) => (
                  <span
                    key={item.n}
                    className="text-[11px] text-[#8a7e72] bg-[#f0ebe4] px-3 py-1.5 rounded-md font-medium"
                  >
                    {item.n}. {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Comparisons */}
            <div className="space-y-20">
              <TypographyComparison />
              <BorderShadowComparison />
              <SectionRhythmComparison />
              <FontWeightComparison />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
