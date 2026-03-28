"use client";

const useCases = [
  {
    title: "Voice to action",
    description:
      "Send a voice message on Telegram and your AI LifeCoach adds it to your dashboard instantly.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "Smart day plans",
    description:
      "Generate a daily plan that helps you focus on what actually matters, with less busy work.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "One system, not ten apps",
    description:
      "Tasks, goals, journals, and plans all in one place, all connected, all feeding into your AI.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="relative px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Built for how you actually work
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            LifeOS fits into your life, not the other way around.
          </p>
        </div>

        {/* Use case cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group bg-background p-8 transition-colors duration-200 hover:bg-surface-hover"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-200">
                <div className="text-primary">
                  {useCase.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-4">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        {/* See all use cases link */}
        <div className="text-center mt-10">
          <a
            href="/use-cases"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1.5"
          >
            See all use cases
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
