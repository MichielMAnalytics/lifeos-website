"use client";

import { LogoFull } from "./logo";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-slide-down ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="relative z-10">
          <LogoFull />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-muted hover:text-foreground transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#cli"
            className="text-sm text-muted hover:text-foreground transition-colors duration-300"
          >
            CLI
          </a>
          <a
            href="#themes"
            className="text-sm text-muted hover:text-foreground transition-colors duration-300"
          >
            Themes
          </a>
        </div>

        <a
          href="#get-started"
          className="text-sm font-medium px-5 py-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
