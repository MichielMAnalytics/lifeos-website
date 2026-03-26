"use client";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LogoMark } from "@/components/logo";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-8">
              <LogoMark size={48} className="text-foreground" />
            </div>
            <Badge variant="outline" className="mb-4 text-[10px] uppercase tracking-wider font-medium border-border text-muted-foreground">
              About
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Built for people who
              <br />
              take their life seriously
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              LifeOS started as a personal tool — a way to unify tasks, goals, journals,
              and plans into one system that actually works the way your brain does.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ THE PROBLEM ]
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Productivity tools are fragmented. Your tasks live in one app, your goals in
                  another, your journal somewhere else, and your daily plan on a sticky note.
                  Nothing connects. You spend more time managing your systems than actually
                  doing the work.
                </p>
              </div>

              <div className="h-px bg-border" />

              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ THE SOLUTION ]
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  LifeOS is a single system where everything connects. Your tasks roll up
                  to projects, projects map to goals, goals inform your weekly plan, and your
                  daily journal captures what actually happened. One source of truth.
                  Dashboard for visual people. CLI for terminal people. API for automation people.
                </p>
              </div>

              <div className="h-px bg-border" />

              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ THE PHILOSOPHY ]
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Calm, not loud",
                      body: "Quiet confidence over flashy marketing. The tool fades into the background while your life takes center stage.",
                    },
                    {
                      title: "Precise, not cluttered",
                      body: "Every element earns its place. No decoration for decoration's sake.",
                    },
                    {
                      title: "Personal, not corporate",
                      body: "Built for individuals, not teams. Your data, your system, your rules.",
                    },
                    {
                      title: "Opinionated, not restrictive",
                      body: "Strong defaults with deep customization. 7 personas, 6 themes, 10 fonts — your way.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-lg border border-border p-5">
                      <h3 className="text-sm font-medium mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-border" />

              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ THE TEAM ]
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  LifeOS is built by a small team of people who use it every day.
                  We build what we need, ship what works, and iterate based on real usage —
                  not feature requests from people who won&apos;t use them.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
