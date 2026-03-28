"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "early users" },
  { value: 4.9, suffix: "", label: "star rating", decimals: 1 },
  { value: 10000, suffix: "+", label: "tasks created" },
  { value: 50, suffix: "+", label: "integrations" },
];

function AnimatedCounter({
  target,
  suffix,
  decimals = 0,
  inView,
}: {
  target: number;
  suffix: string;
  decimals?: number;
  inView: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1600;
    const steps = 60;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // Ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(eased * target);

      if (step >= steps) {
        setCurrent(target);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  const display =
    decimals > 0
      ? current.toFixed(decimals)
      : Math.floor(current).toLocaleString();

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold tracking-tight">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  inView={inView}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
