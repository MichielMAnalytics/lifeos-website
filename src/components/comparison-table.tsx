"use client";

type Support = "yes" | "no" | "partial";

interface FeatureRow {
  feature: string;
  lifeos: Support;
  notion: Support;
  todoist: Support;
  akiflow: Support;
  obsidian: Support;
}

const features: FeatureRow[] = [
  {
    feature: "AI Life Coach (24/7)",
    lifeos: "yes",
    notion: "partial",
    todoist: "no",
    akiflow: "no",
    obsidian: "no",
  },
  {
    feature: "Smart day plans",
    lifeos: "yes",
    notion: "no",
    todoist: "partial",
    akiflow: "yes",
    obsidian: "no",
  },
  {
    feature: "Task management",
    lifeos: "yes",
    notion: "yes",
    todoist: "yes",
    akiflow: "yes",
    obsidian: "partial",
  },
  {
    feature: "Journal with AI insights",
    lifeos: "yes",
    notion: "partial",
    todoist: "no",
    akiflow: "no",
    obsidian: "yes",
  },
  {
    feature: "Telegram / WhatsApp integration",
    lifeos: "yes",
    notion: "no",
    todoist: "no",
    akiflow: "no",
    obsidian: "no",
  },
  {
    feature: "Customisable dashboard",
    lifeos: "yes",
    notion: "yes",
    todoist: "partial",
    akiflow: "partial",
    obsidian: "yes",
  },
  {
    feature: "Calendar & scheduling",
    lifeos: "yes",
    notion: "partial",
    todoist: "partial",
    akiflow: "yes",
    obsidian: "no",
  },
];

const competitors = ["LifeOS", "Notion", "Todoist", "Akiflow", "Obsidian"] as const;

function Cell({ value }: { value: Support }) {
  if (value === "yes") {
    return (
      <span className="text-success font-medium text-base" aria-label="Supported">
        ✓
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="text-warning font-medium text-sm" aria-label="Partial support">
        ~
      </span>
    );
  }
  return (
    <span className="text-muted-foreground/50 text-base" aria-label="Not supported">
      —
    </span>
  );
}

export function ComparisonTable() {
  return (
    <section id="comparison" className="relative px-6 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            How LifeOS compares
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Other tools do parts of the job. LifeOS brings everything together
            with an AI coach that actually knows your life.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-5 font-medium text-muted-foreground">
                    Feature
                  </th>
                  {competitors.map((name) => (
                    <th
                      key={name}
                      className={`py-4 px-4 text-center whitespace-nowrap ${
                        name === "LifeOS"
                          ? "text-primary bg-primary/5 font-semibold"
                          : "text-muted-foreground font-medium"
                      }`}
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border last:border-0 ${
                      i % 2 === 0 ? "bg-card" : "bg-background"
                    }`}
                  >
                    <td className="py-3.5 px-5 text-foreground">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 text-center bg-primary/5">
                      <Cell value={row.lifeos} />
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <Cell value={row.notion} />
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <Cell value={row.todoist} />
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <Cell value={row.akiflow} />
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <Cell value={row.obsidian} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
