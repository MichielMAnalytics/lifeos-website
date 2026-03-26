"use client";

import { LogoFull } from "./logo";
import { buttonVariants } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
        <a href="/" className="relative z-10">
          <LogoFull />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="/#features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="/#demo"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Demo
          </a>
          <a
            href="/#pricing"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Pricing
          </a>
          <a
            href="/about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            About
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hidden sm:block"
          >
            Account
          </a>
          <a
            href="#get-started"
            className={cn(
              buttonVariants({ size: "sm" }),
              "rounded-lg text-xs uppercase tracking-wider font-medium"
            )}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
