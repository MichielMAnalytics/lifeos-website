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
    <div className="flex items-center gap-3">
        {/* Language selector */}
        <div className="relative">
          {langOpen && (
            <div className="absolute bottom-full right-0 mb-1 rounded-lg border border-white/10 bg-foreground overflow-hidden min-w-[140px] z-10">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => handleLangSelect(l.code)}
                  className={cn(
                    "w-full px-3 py-2 text-xs text-left transition-colors hover:bg-white/10",
                    lang === l.code ? "text-background" : "text-background/60"
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
          <button
            onClick={() => { setLangOpen(!langOpen); setCurrOpen(false); }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/20 text-sm text-background/60 hover:text-background hover:border-white/40 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <span className="uppercase">{lang}</span>
          </button>
        </div>

        {/* Currency selector */}
        <div className="relative">
          {currOpen && (
            <div className="absolute bottom-full right-0 mb-1 rounded-lg border border-white/10 bg-foreground overflow-hidden min-w-[140px] z-10">
              {currencies.map((c) => (
                <button
                  key={c.code}
                  onClick={() => handleCurrSelect(c.code)}
                  className={cn(
                    "w-full px-3 py-2 text-xs text-left transition-colors hover:bg-white/10 flex justify-between",
                    curr === c.code ? "text-background" : "text-background/60"
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
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/20 text-sm text-background/60 hover:text-background hover:border-white/40 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{currencies.find((c) => c.code === curr)?.symbol} {curr}</span>
          </button>
        </div>
    </div>
  );
}
