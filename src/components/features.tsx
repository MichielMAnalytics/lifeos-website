"use client";

import { Badge } from "./ui/badge";

const features = [
  {
    title: "Tasks & Projects",
    badge: "ORGANIZE",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Goals & Reviews",
    badge: "MEASURE",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
      </svg>
    ),
  },
  {
    title: "Journal & Reflection",
    badge: "REFLECT",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
      </svg>
    ),
  },
  {
    title: "AI LifeCoach",
    badge: "CONFIGURE",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.452.6.902 1.052 1.052l1.183.394a.75.75 0 010 1.416l-1.183.394c-.452.15-.902.6-1.052 1.052l-.394 1.183a.75.75 0 01-1.424 0l-.394-1.183c-.15-.452-.6-.902-1.052-1.052l-1.183-.394a.75.75 0 010-1.416l1.183-.394c.452-.15.902-.6 1.052-1.052l.394-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "CLI & API",
    badge: "BUILD",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="relative px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[10px] uppercase tracking-wider font-medium border-border text-muted-foreground">
            Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Everything connects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Tasks link to projects. Projects roll up to goals. Goals inform your
            daily plan. Every piece of your system talks to every other.
          </p>
        </div>

        {/* Compact feature grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-border rounded-lg overflow-hidden">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-background p-6 text-center transition-colors duration-200 hover:bg-surface-hover"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-200">
                {feature.icon}
              </div>
              <span className="text-[10px] uppercase tracking-wider font-medium text-muted-foreground">
                {feature.badge}
              </span>
              <h3 className="text-sm font-semibold mt-1">{feature.title}</h3>
            </div>
          ))}
        </div>

        {/* See all features link */}
        <div className="text-center mt-10">
          <a
            href="/features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1.5"
          >
            See all features
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
