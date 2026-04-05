"use client";

import { Suspense } from "react";
import { LogoFull } from "./logo";
import { FooterExtras } from "./floating-buttons";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer>
      {/* Upper footer */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-10">
            {/* Brand + Login */}
            <div className="col-span-2 sm:col-span-1">
              <LogoFull />
              <div className="mt-6">
                <a
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "rounded-lg text-xs font-medium"
                  )}
                >
                  Login
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-xs font-medium text-foreground mb-4">Product</h4>
              <div className="flex flex-col gap-3">
                <a href="/features" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Features</a>
                <a href="/use-cases" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Use Cases</a>
                <a href="/#demo" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Demo</a>
                <a href="/#pricing" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
                <a href="/#faq" className="text-xs text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-medium text-foreground mb-4">Company</h4>
              <div className="flex flex-col gap-3">
                <a href="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">About</a>
                <a href="/partners" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Partner Program</a>
                <a href="mailto:info@lifeos.zone" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs font-medium text-foreground mb-4">Resources</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Documentation</a>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">API Reference</a>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Changelog</a>
              </div>
            </div>

            {/* My LifeOS */}
            <div>
              <h4 className="text-xs font-medium text-foreground mb-4">My LifeOS</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Dashboard</a>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Account Settings</a>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">AI LifeCoach</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Bottom bar */}
      <div className="bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs opacity-60">
              <span>&copy; {new Date().getFullYear()} lifeos.zone</span>
              <a href="/terms" className="hover:opacity-100 transition-opacity">Terms</a>
              <a href="/privacy" className="hover:opacity-100 transition-opacity">Privacy</a>
            </div>

            <div className="flex items-center gap-5">
              {/* Social icons */}
              <div className="flex items-center gap-3">
                <a href="https://instagram.com/getlifeos" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>

              <div className="w-px h-4 bg-background/20" />

              <Suspense>
                <FooterExtras />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
