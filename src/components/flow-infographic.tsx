"use client";

import { HeroInteractiveDemo } from "./hero";
import { LogoMark } from "./logo";

export function FlowInfographic() {
  return (
    <section className="w-full px-6 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Configure everything through chat
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Tell your AI LifeCoach how you want things. It adjusts your dashboard, workflow, and communication style to match.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.65fr_40px_1.5fr] items-stretch gap-4 lg:gap-0">
          {/* Telegram Chat — compact config conversation */}
          <div
            className="rounded-xl border border-[#d4ccc2] shadow-2xl overflow-hidden flex flex-col"
            style={{ fontFamily: "'Roboto', system-ui, sans-serif" }}
          >
            {/* Header */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#2b5278]">
              <svg className="w-4 h-4 text-white/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              <div className="w-9 h-9 rounded-full bg-[#c45d3e] flex items-center justify-center shrink-0">
                <LogoMark size={14} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className="text-[11px] font-semibold text-white">LifeOS Coach</span>
                  <span className="text-[8px] bg-white/20 text-white/90 px-1 py-0.5 rounded font-medium">bot</span>
                </div>
                <span className="text-[9px] text-white/60">last seen recently</span>
              </div>
              <svg className="w-3.5 h-3.5 text-white/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <svg className="w-3.5 h-3.5 text-white/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01" /></svg>
            </div>

            {/* Chat area */}
            <div className="flex-1 p-3 space-y-2.5 overflow-y-auto" style={{ background: "#c8d6e5", backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%)" }}>
              {/* User: wants goals front and centre */}
              <div className="flex justify-end">
                <div className="rounded-xl rounded-br-sm bg-[#e1fec6] px-3 py-1.5 text-[11px] text-[#1a1a1a] shadow-sm max-w-[90%]">
                  I want to see my goals front and centre when I open the dashboard
                  <div className="text-[9px] text-[#6b8f71] text-right mt-0.5">15:01 <svg className="inline w-[14px] h-[10px] ml-0.5" viewBox="0 0 16 11" fill="none"><path d="M11.5 0.5L5 7L2.5 4.5" stroke="#6b8f71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.5 0.5L8 7" stroke="#6b8f71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                </div>
              </div>

              {/* Bot: confirms layout change */}
              <div className="flex">
                <div className="rounded-xl rounded-bl-sm bg-white px-3 py-1.5 text-[11px] text-[#1a1a1a] shadow-sm max-w-[90%]">
                  Done. I moved Goals to the top and made it the largest panel. Your new layout:
                  <div className="mt-2 flex gap-2 text-[9px]">
                    {/* BEFORE */}
                    <div className="flex-1 rounded border border-[#d4ccc2] bg-[#f7f3ed] p-1.5">
                      <div className="text-[7px] text-[#8a7e72] font-semibold uppercase tracking-wider mb-1">Before</div>
                      <div className="space-y-0.5">
                        <div className="h-2 rounded bg-[#e4ddd4]" />
                        <div className="h-2 rounded bg-[#e4ddd4]" />
                        <div className="h-2 rounded bg-[#e4ddd4]" />
                        <div className="h-1.5 rounded bg-[#c45d3e]/30 text-[6px] text-[#c45d3e] font-medium flex items-center px-1">Goals</div>
                      </div>
                    </div>
                    {/* AFTER */}
                    <div className="flex-1 rounded border border-[#c45d3e]/40 bg-[#c45d3e]/5 p-1.5">
                      <div className="text-[7px] text-[#c45d3e] font-semibold uppercase tracking-wider mb-1">After</div>
                      <div className="space-y-0.5">
                        <div className="h-3 rounded bg-[#c45d3e]/30 text-[6px] text-[#c45d3e] font-medium flex items-center px-1">Goals</div>
                        <div className="h-1.5 rounded bg-[#e4ddd4]" />
                        <div className="h-1.5 rounded bg-[#e4ddd4]" />
                        <div className="h-1.5 rounded bg-[#e4ddd4]" />
                      </div>
                    </div>
                  </div>
                  <div className="text-[9px] text-[#8a7e72] text-right mt-1">15:01</div>
                </div>
              </div>

              {/* User: be more direct */}
              <div className="flex justify-end">
                <div className="rounded-xl rounded-br-sm bg-[#e1fec6] px-3 py-1.5 text-[11px] text-[#1a1a1a] shadow-sm max-w-[90%]">
                  Be more direct with me, skip the pleasantries
                  <div className="text-[9px] text-[#6b8f71] text-right mt-0.5">15:02 <svg className="inline w-[14px] h-[10px] ml-0.5" viewBox="0 0 16 11" fill="none"><path d="M11.5 0.5L5 7L2.5 4.5" stroke="#6b8f71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.5 0.5L8 7" stroke="#6b8f71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                </div>
              </div>

              {/* Bot: confirms communication style */}
              <div className="flex">
                <div className="rounded-xl rounded-bl-sm bg-white px-3 py-1.5 text-[11px] text-[#1a1a1a] shadow-sm max-w-[90%]">
                  Updated. Morning debriefs will be straight to the point from now on.
                  <div className="text-[9px] text-[#8a7e72] text-right mt-0.5">15:02</div>
                </div>
              </div>
            </div>

            {/* Input bar */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#f5f0ea] border-t border-[#e4ddd4]">
              <svg className="w-4 h-4 text-[#8a7e72] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>
              <span className="flex-1 text-[11px] text-[#8a7e72]">Write a message...</span>
              <svg className="w-4 h-4 text-[#8a7e72] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>
              <svg className="w-5 h-5 text-[#8a7e72] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5"/></svg>
            </div>
          </div>

          {/* Arrow — syncs instantly */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-1.5">
            <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
              <path d="M6 30 L34 30" stroke="#c45d3e" strokeWidth="2" strokeDasharray="4 3">
                <animate attributeName="stroke-dashoffset" from="28" to="0" dur="1.5s" repeatCount="indefinite" />
              </path>
              <polygon points="30,24 38,30 30,36" fill="#c45d3e" />
            </svg>
            <span className="text-[8px] text-[#c45d3e] font-medium tracking-wide text-center leading-tight">syncs<br/>instantly</span>
          </div>
          <div className="flex lg:hidden flex-col items-center justify-center py-2 gap-1">
            <svg width="100" height="24" viewBox="0 0 100 24" fill="none">
              <path d="M16 12 L84 12" stroke="#c45d3e" strokeWidth="2" strokeDasharray="4 3">
                <animate attributeName="stroke-dashoffset" from="28" to="0" dur="1.5s" repeatCount="indefinite" />
              </path>
              <polygon points="80,6 88,12 80,18" fill="#c45d3e" />
            </svg>
            <span className="text-[8px] text-[#c45d3e] font-medium tracking-wide">syncs instantly</span>
          </div>

          {/* Dashboard — interactive demo */}
          <HeroInteractiveDemo />
        </div>

        <p className="text-center text-xs text-muted-foreground mt-5">
          Interactive preview — click the sidebar to explore each section
        </p>
      </div>
    </section>
  );
}
