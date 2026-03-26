"use client";

import { Badge } from "./ui/badge";

const commands = [
  {
    input: "lifeos task list --due today",
    output: [
      "[ TODO ]  Ship landing page          due: today",
      "[ TODO ]  Review PR #42              due: today",
      "[ DONE ]  Fix auth callback          due: today",
    ],
  },
  {
    input: "lifeos idea 'Use tree animation on homepage' --actionability high",
    output: ["✓ Idea captured (high actionability)"],
  },
  {
    input: "lifeos journal write --mit 'Ship landing page' --notes 'Good focus day'",
    output: ["✓ Journal entry saved for 2026-03-25"],
  },
  {
    input: "lifeos review daily",
    output: [
      "[ DAILY REVIEW — MAR 25 ]",
      "Tasks completed: 4/6 (67%)",
      "MIT completed: ✓",
      "Wins logged: 2",
      "Journal: written",
      "Score: 7/10",
    ],
  },
  {
    input: "lifeos search 'landing page' --type tasks,ideas",
    output: [
      "TASKS",
      "  Ship landing page for lifeos.zone    [ TODO ]",
      "IDEAS",
      "  Use tree animation on homepage       [ HIGH ]",
    ],
  },
  {
    input: "lifeos undo",
    output: ["✓ Undid: create idea 'Use tree animation on homepage'"],
  },
];

export function CLISection() {
  return (
    <section id="cli" className="relative px-6 py-32">
      {/* Subtle top border */}
      <div className="absolute inset-x-0 top-0">
        <div className="max-w-6xl mx-auto h-px bg-border" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[10px] uppercase tracking-wider font-medium border-border text-muted-foreground">
            Power users
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            A command line for those who want it
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Prefer typing over clicking? LifeOS has a full command line interface.
            Manage tasks, log journals, and run reviews — all from your terminal.
          </p>
        </div>

        {/* CLI showcase */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-lg border border-border overflow-hidden bg-card">
            {/* Terminal chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[11px] text-muted-foreground font-mono ml-2">
                lifeos
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-5 font-mono text-[12.5px] leading-relaxed space-y-5 max-h-[520px] overflow-y-auto">
              {commands.map((cmd, i) => (
                <div key={i} className="space-y-1.5">
                  <div>
                    <span className="text-muted-foreground">$</span>{" "}
                    <span className="text-foreground">{cmd.input}</span>
                  </div>
                  {cmd.output.map((line, j) => (
                    <div
                      key={j}
                      className="text-muted-foreground pl-3"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              ))}

              <div className="flex items-center">
                <span className="text-muted-foreground">$</span>{" "}
                <span className="terminal-cursor ml-1 inline-block w-2 h-4 bg-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* CLI feature callouts */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            {
              title: "JSON output",
              description: "Every command supports --json for scripting and piping",
            },
            {
              title: "API key auth",
              description: "Generate keys, revoke anytime. No password prompts",
            },
            {
              title: "Undo anything",
              description: "Every mutation is logged. One command to reverse it",
            },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="text-sm font-medium mb-1">{item.title}</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
