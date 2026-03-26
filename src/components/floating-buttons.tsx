"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const languages = [
  { code: "en", label: "English" },
  { code: "nl", label: "Nederlands" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
];

const currencies = [
  { code: "EUR", symbol: "€", label: "Euro" },
  { code: "USD", symbol: "$", label: "US Dollar" },
  { code: "GBP", symbol: "£", label: "British Pound" },
];

export function FooterExtras() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [langOpen, setLangOpen] = useState(false);
  const [currOpen, setCurrOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const [curr, setCurr] = useState("EUR");

  // Read initial values from URL query params on mount
  useEffect(() => {
    const langParam = searchParams.get("lang");
    const currParam = searchParams.get("currency");

    if (langParam && languages.some((l) => l.code === langParam)) {
      setLang(langParam);
    }
    if (currParam && currencies.some((c) => c.code === currParam)) {
      setCurr(currParam);
    }
  }, [searchParams]);

  // Build a new URL with updated query params and reload the page
  const navigateWithParams = useCallback(
    (newLang: string, newCurrency: string) => {
      const params = new URLSearchParams(searchParams.toString());

      // Only set non-default values to keep the URL clean
      if (newLang !== "en") {
        params.set("lang", newLang);
      } else {
        params.delete("lang");
      }

      if (newCurrency !== "EUR") {
        params.set("currency", newCurrency);
      } else {
        params.delete("currency");
      }

      const qs = params.toString();
      const newUrl = qs ? `${pathname}?${qs}` : pathname;
      window.location.href = newUrl;
    },
    [searchParams, pathname]
  );

  const handleLangSelect = (code: string) => {
    setLangOpen(false);
    if (code === lang) return;
    navigateWithParams(code, curr);
  };

  const handleCurrSelect = (code: string) => {
    setCurrOpen(false);
    if (code === curr) return;
    navigateWithParams(lang, code);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
      {/* Partner program */}
      <a
        href="/partners"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        Partner Program
      </a>

      {/* Language + Currency */}
      <div className="flex items-center gap-3">
        {/* Language selector */}
        <div className="relative">
          {langOpen && (
            <div className="absolute bottom-full right-0 mb-1 rounded-lg border border-border bg-card overflow-hidden min-w-[140px] z-10">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => handleLangSelect(l.code)}
                  className={cn(
                    "w-full px-3 py-2 text-xs text-left transition-colors hover:bg-surface-hover",
                    lang === l.code ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
          <button
            onClick={() => { setLangOpen(!langOpen); setCurrOpen(false); }}
            className="px-3 py-1.5 rounded-lg border border-border text-xs text-muted-foreground hover:text-foreground hover:border-border-bright transition-all duration-200 uppercase"
          >
            {lang}
          </button>
        </div>

        {/* Currency selector */}
        <div className="relative">
          {currOpen && (
            <div className="absolute bottom-full right-0 mb-1 rounded-lg border border-border bg-card overflow-hidden min-w-[140px] z-10">
              {currencies.map((c) => (
                <button
                  key={c.code}
                  onClick={() => handleCurrSelect(c.code)}
                  className={cn(
                    "w-full px-3 py-2 text-xs text-left transition-colors hover:bg-surface-hover flex justify-between",
                    curr === c.code ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  <span>{c.label}</span>
                  <span>{c.symbol}</span>
                </button>
              ))}
            </div>
          )}
          <button
            onClick={() => { setCurrOpen(!currOpen); setLangOpen(false); }}
            className="px-3 py-1.5 rounded-lg border border-border text-xs text-muted-foreground hover:text-foreground hover:border-border-bright transition-all duration-200"
          >
            {currencies.find((c) => c.code === curr)?.symbol} {curr}
          </button>
        </div>
      </div>
    </div>
  );
}
