"use client";

import { useState } from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { LogoMark } from "./logo";
import {
  MessageCircle,
  Sun,
  CheckSquare,
  BookOpen,
  Compass,
  Lightbulb,
  Cloud,
  FolderOpen,
  BarChart3,
  Calendar,
  Plus,
  ChevronLeft,
  ChevronRight,
  Paperclip,
  Mic,
  Search,
  Menu,
  Smile,
} from "lucide-react";

/* --- Mini interactive demo for hero --- */

type MiniPageId =
  | "today"
  | "tasks"
  | "journal"
  | "compass"
  | "ideas"
  | "thoughts"
  | "resources"
  | "reviews"
  | "schedules";

const miniSidebar = [
  {
    items: [
      {
        id: "life-coach" as const,
        label: "Life Coach",
        icon: MessageCircle,
        accent: true,
      },
    ],
  },
  {
    label: "DAILY",
    items: [
      { id: "today" as const, label: "Today", icon: Sun },
      { id: "tasks" as const, label: "Tasks", icon: CheckSquare },
      { id: "journal" as const, label: "Journal", icon: BookOpen },
    ],
  },
  {
    label: "WORK",
    items: [{ id: "compass" as const, label: "Compass", icon: Compass }],
  },
  {
    label: "CAPTURE",
    items: [
      { id: "ideas" as const, label: "Ideas", icon: Lightbulb },
      { id: "thoughts" as const, label: "Thoughts", icon: Cloud },
      { id: "resources" as const, label: "Resources", icon: FolderOpen },
    ],
  },
  {
    label: "REFLECT",
    items: [
      { id: "reviews" as const, label: "Reviews", icon: BarChart3 },
      { id: "schedules" as const, label: "Schedules", icon: Calendar },
    ],
  },
];

/* --- Life Coach Page --- */

function MiniLifeCoachPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {/* User voice note — Telegram style */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div
            style={{
              maxWidth: "82%",
              background: "#2c2420",
              borderRadius: "12px 12px 4px 12px",
              padding: "6px 10px 4px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {/* Play button */}
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: "#c45d3e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="8" height="10" viewBox="0 0 8 10" fill="white">
                <polygon points="1,0 8,5 1,10" />
              </svg>
            </div>
            {/* Waveform + duration */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 1, height: 18 }}>
                {[3,6,10,7,12,8,14,10,6,12,9,14,7,11,5,8,13,6,10,4,7,11,6,9,3].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      width: 2,
                      height: h,
                      borderRadius: 1,
                      background: "rgba(255,255,255,0.6)",
                      flexShrink: 0,
                    }}
                  />
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 1 }}>
                <span style={{ fontSize: "7px", color: "rgba(255,255,255,0.5)" }}>0:08</span>
                <span style={{ fontSize: "7px", color: "rgba(255,255,255,0.5)" }}>
                  15:01{" "}
                  <svg style={{ display: "inline", width: 10, height: 7, verticalAlign: "middle" }} viewBox="0 0 16 11" fill="none">
                    <path d="M11.5 0.5L5 7L2.5 4.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.5 0.5L8 7" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bot creates tasks */}
        <div style={{ display: "flex", gap: "6px" }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#c45d3e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: 2,
            }}
          >
            <span
              style={{
                fontSize: "6px",
                color: "#fff",
                fontWeight: 700,
              }}
            >
              AI
            </span>
          </div>
          <div
            style={{
              background: "#f0ebe4",
              borderRadius: "12px 12px 12px 4px",
              padding: "8px 10px",
              fontSize: "10px",
              lineHeight: 1.5,
              color: "#2c2420",
            }}
          >
            Got it! I created 2 tasks from your voice note:
            <div
              style={{
                marginTop: 6,
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 2,
                    border: "1.5px solid #d4ccc2",
                    flexShrink: 0,
                  }}
                />
                <span>
                  Pick up groceries{" "}
                  <span style={{ color: "#8a7e72" }}>(today)</span>
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 2,
                    border: "1.5px solid #d4ccc2",
                    flexShrink: 0,
                  }}
                />
                <span>
                  Call mom{" "}
                  <span style={{ color: "#8a7e72" }}>(this weekend)</span>
                </span>
              </div>
            </div>
            {/* Quick actions */}
            <div
              style={{
                marginTop: 8,
                display: "flex",
                gap: 6,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  padding: "3px 8px",
                  borderRadius: 10,
                  border: "1px solid #c45d3e40",
                  fontSize: "9px",
                  color: "#c45d3e",
                  background: "#c45d3e0a",
                  fontWeight: 500,
                }}
              >
                Add both to today
              </span>
              <span
                style={{
                  padding: "3px 8px",
                  borderRadius: 10,
                  border: "1px solid #e4ddd4",
                  fontSize: "9px",
                  color: "#8a7e72",
                }}
              >
                Schedule for tomorrow
              </span>
            </div>
          </div>
        </div>

        {/* User responds */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div
            style={{
              background: "#2c2420",
              color: "#fff",
              borderRadius: "12px 12px 4px 12px",
              padding: "8px 10px",
              fontSize: "10px",
            }}
          >
            Add both to today
          </div>
        </div>

        {/* Bot gives day plan */}
        <div style={{ display: "flex", gap: "6px" }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#c45d3e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: 2,
            }}
          >
            <span
              style={{ fontSize: "6px", color: "#fff", fontWeight: 700 }}
            >
              AI
            </span>
          </div>
          <div
            style={{
              background: "#f0ebe4",
              borderRadius: "12px 12px 12px 4px",
              padding: "8px 10px",
              fontSize: "10px",
              lineHeight: 1.5,
              color: "#2c2420",
            }}
          >
            Done. Here&apos;s your updated plan:
            <div
              style={{
                marginTop: 6,
                display: "flex",
                flexDirection: "column",
                gap: 3,
                fontSize: "9px",
              }}
            >
              {[
                { time: "9:00", task: "Deep work" },
                { time: "11:00", task: "Team standup" },
                { time: "12:00", task: "Lunch" },
                { time: "13:00", task: "Pick up groceries" },
                { time: "14:00", task: "Review proposal" },
              ].map((e) => (
                <div
                  key={e.time}
                  style={{
                    display: "flex",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      width: 30,
                      flexShrink: 0,
                      fontFamily: "monospace",
                      fontSize: "8px",
                    }}
                  >
                    {e.time}
                  </span>
                  <span>{e.task}</span>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 8,
                fontSize: "9px",
                color: "#8a7e72",
                fontStyle: "italic",
              }}
            >
              Your reading goal is at 50% with 3 months left. Want me to add
              30 min reading time?
            </div>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div
        style={{
          borderTop: "1px solid #e4ddd4",
          padding: "6px 10px",
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "#faf8f5",
        }}
      >
        <Paperclip
          style={{ width: 12, height: 12, color: "#8a7e72", flexShrink: 0 }}
        />
        <Mic
          style={{ width: 12, height: 12, color: "#8a7e72", flexShrink: 0 }}
        />
        <span
          style={{
            flex: 1,
            fontSize: "9px",
            color: "#b5a99a",
            paddingLeft: 4,
          }}
        >
          Ask anything...
        </span>
      </div>
    </div>
  );
}

/* --- Today Page --- */

function MiniTodayPage() {
  return (
    <div style={{ padding: 12, overflowY: "auto", height: "100%" }}>
      {/* Date navigation header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontSize: "9px",
            color: "#8a7e72",
            cursor: "pointer",
          }}
        >
          <ChevronLeft style={{ width: 10, height: 10 }} />
          <span>Yesterday</span>
        </div>
        <h2
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "#2c2420",
          }}
        >
          Saturday, April 4th
        </h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontSize: "9px",
            color: "#8a7e72",
            cursor: "pointer",
          }}
        >
          <span>Tomorrow</span>
          <ChevronRight style={{ width: 10, height: 10 }} />
        </div>
      </div>

      {/* Status counts */}
      <div
        style={{
          display: "flex",
          gap: 8,
          marginBottom: 10,
          fontSize: "8px",
          fontWeight: 600,
        }}
      >
        <span style={{ color: "#ef4444" }}>3 OVERDUE</span>
        <span style={{ color: "#2c2420" }}>2 TODAY</span>
        <span style={{ color: "#d4a04a" }}>4 TOMORROW</span>
        <span style={{ color: "#6b8f71" }}>1 DONE</span>
      </div>

      {/* Priorities */}
      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          border: "1px solid #e4ddd4",
          padding: 10,
          marginBottom: 8,
        }}
      >
        <div
          style={{
            fontSize: "7px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#8a7e72",
            fontWeight: 600,
            marginBottom: 6,
          }}
        >
          Priorities
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          {[
            {
              label: "MIT",
              color: "#c45d3e",
              task: "Finish project proposal",
            },
            {
              label: "P1",
              color: "#d4a04a",
              task: "Review team updates",
            },
            {
              label: "P2",
              color: "#6b8f71",
              task: "Prepare for meeting",
            },
          ].map((p) => (
            <div
              key={p.label}
              style={{ display: "flex", alignItems: "center", gap: 6 }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  border: `1.5px solid ${p.color}`,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "8px",
                  fontWeight: 700,
                  color: p.color,
                  width: 22,
                }}
              >
                {p.label}
              </span>
              <span style={{ fontSize: "9px", color: "#2c2420" }}>
                {p.task}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Day Plan - Google Calendar style */}
      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          border: "1px solid #e4ddd4",
          padding: 10,
          marginBottom: 8,
        }}
      >
        <div
          style={{
            fontSize: "7px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#8a7e72",
            fontWeight: 600,
            marginBottom: 6,
          }}
        >
          Day Plan
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          {[
            { time: "7 AM", event: null },
            { time: "8 AM", event: null },
            {
              time: "9 AM",
              event: { label: "Deep work: Proposal", color: "#c45d3e" },
            },
            { time: "10 AM", event: null },
            {
              time: "11 AM",
              event: { label: "Team standup", color: "#d4a04a" },
            },
            {
              time: "12 PM",
              event: { label: "Lunch break", color: "#6b8f71" },
            },
            {
              time: "1 PM",
              event: { label: "Pick up groceries", color: "#c45d3e" },
            },
            {
              time: "2 PM",
              event: { label: "Review proposal", color: "#8a7e72" },
            },
            { time: "3 PM", event: null },
            { time: "4 PM", event: null },
            {
              time: "5 PM",
              event: { label: "Call mom", color: "#d4a04a" },
            },
          ].map((slot) => (
            <div
              key={slot.time}
              style={{
                display: "flex",
                alignItems: "stretch",
                minHeight: 18,
                borderTop: "1px solid #f0ebe4",
              }}
            >
              <span
                style={{
                  width: 32,
                  flexShrink: 0,
                  fontSize: "7px",
                  color: "#b5a99a",
                  fontFamily: "monospace",
                  paddingTop: 2,
                }}
              >
                {slot.time}
              </span>
              {slot.event ? (
                <div
                  style={{
                    flex: 1,
                    borderLeft: `3px solid ${slot.event.color}`,
                    background: `${slot.event.color}10`,
                    borderRadius: "0 4px 4px 0",
                    padding: "2px 6px",
                    fontSize: "8px",
                    color: "#2c2420",
                    fontWeight: 500,
                  }}
                >
                  {slot.event.label}
                </div>
              ) : (
                <div style={{ flex: 1 }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Daily Quote */}
      <div
        style={{
          background: "#f7f3ed",
          borderRadius: 8,
          border: "1px solid #e4ddd4",
          padding: "8px 10px",
        }}
      >
        <div
          style={{
            fontSize: "7px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#8a7e72",
            fontWeight: 600,
            marginBottom: 4,
          }}
        >
          Daily Quote
        </div>
        <p
          style={{
            fontSize: "9px",
            color: "#2c2420",
            fontStyle: "italic",
            lineHeight: 1.5,
          }}
        >
          &ldquo;The secret of getting ahead is getting started.&rdquo;
        </p>
        <p style={{ fontSize: "7px", color: "#8a7e72", marginTop: 2 }}>
          -- Mark Twain
        </p>
      </div>
    </div>
  );
}

/* --- Tasks Page --- */

function MiniTasksPage() {
  return (
    <div style={{ padding: 12, overflowY: "auto", height: "100%" }}>
      <h2
        style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#2c2420",
          marginBottom: 2,
        }}
      >
        Tasks
      </h2>
      <p
        style={{
          fontSize: "9px",
          color: "#8a7e72",
          marginBottom: 10,
        }}
      >
        Stay on top of what matters
      </p>
      <div
        style={{
          display: "flex",
          gap: 6,
          overflowX: "auto",
        }}
      >
        {[
          {
            title: "Overdue",
            color: "#ef4444",
            tasks: [
              { name: "Update portfolio", days: 3 },
              { name: "Send weekly report", days: 1 },
            ],
          },
          {
            title: "Today",
            color: "#2c2420",
            tasks: [
              { name: "Finish proposal", days: 0 },
              { name: "Call dentist", days: 0 },
              { name: "Pick up groceries", days: 0 },
            ],
          },
          {
            title: "Tomorrow",
            color: "#8a7e72",
            tasks: [
              { name: "Review updates", days: 0 },
              { name: "Grocery shopping", days: 0 },
            ],
          },
          {
            title: "Monday",
            color: "#6b8f71",
            tasks: [
              { name: "Team retro", days: 0 },
              { name: "Plan sprint", days: 0 },
            ],
          },
        ].map((col) => (
          <div key={col.title} style={{ minWidth: 110, flex: 1 }}>
            <div
              style={{
                fontSize: "9px",
                fontWeight: 600,
                color: col.color,
                marginBottom: 6,
              }}
            >
              {col.title}{" "}
              <span style={{ color: "#b5a99a", fontWeight: 400 }}>
                {col.tasks.length}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {col.tasks.map((t) => (
                <div
                  key={t.name}
                  style={{
                    background: "#fff",
                    borderRadius: 6,
                    border: "1px solid #e4ddd4",
                    padding: "6px 8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 5,
                    }}
                  >
                    <div
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        border: "1.5px solid #d4ccc2",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    />
                    <div>
                      <span
                        style={{
                          fontSize: "9px",
                          color: "#2c2420",
                          lineHeight: 1.3,
                          display: "block",
                        }}
                      >
                        {t.name}
                      </span>
                      {col.title === "Overdue" && t.days > 0 && (
                        <span
                          style={{
                            fontSize: "7px",
                            color: "#ef4444",
                            fontWeight: 600,
                            marginTop: 2,
                            display: "inline-block",
                          }}
                        >
                          {t.days}d overdue
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --- Journal Page --- */

function MiniJournalPage() {
  const entries = [
    {
      date: "Friday, April 3",
      preview:
        "Had a great deep work session this morning. Finally cracked the API integration that was blocking me for days.",
    },
    {
      date: "Thursday, April 2",
      preview:
        "Feeling a bit overwhelmed with the project deadline approaching. Need to break things down into smaller steps.",
    },
    {
      date: "Wednesday, April 1",
      preview:
        "Started the morning with a 30-minute run. Energy levels were noticeably better throughout the day.",
    },
  ];

  return (
    <div style={{ padding: 12, overflowY: "auto", height: "100%" }}>
      <h2
        style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#2c2420",
          marginBottom: 2,
        }}
      >
        Journal
      </h2>
      <p style={{ fontSize: "9px", color: "#8a7e72", marginBottom: 10 }}>
        Reflect on your days
      </p>
      <div
        style={{ display: "flex", flexDirection: "column", gap: 8 }}
      >
        {entries.map((entry) => (
          <div
            key={entry.date}
            style={{
              background: "#f7f3ed",
              borderRadius: 8,
              border: "1px solid #e4ddd4",
              padding: "10px 12px",
            }}
          >
            <div
              style={{
                fontSize: "8px",
                fontWeight: 600,
                color: "#c45d3e",
                marginBottom: 4,
              }}
            >
              {entry.date}
            </div>
            <p
              style={{
                fontSize: "9px",
                color: "#2c2420",
                lineHeight: 1.5,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {entry.preview}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --- Compass Page --- */

function MiniCompassPage() {
  return (
    <div style={{ padding: 12, overflowY: "auto", height: "100%" }}>
      {/* Identity card */}
      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          border: "1px solid #e4ddd4",
          padding: "10px 12px",
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "7px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#8a7e72",
            fontWeight: 600,
            marginBottom: 4,
          }}
        >
          Identity
        </div>
        <p
          style={{
            fontSize: "9px",
            color: "#2c2420",
            fontStyle: "italic",
            lineHeight: 1.5,
          }}
        >
          &ldquo;I am a builder, a learner, and someone who shows up
          consistently.&rdquo;
        </p>
      </div>

      {/* Quarterly Goals header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <h2
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "#2c2420",
          }}
        >
          Quarterly Goals
        </h2>
        <span
          style={{
            fontSize: "8px",
            color: "#c45d3e",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Plus style={{ width: 8, height: 8 }} /> New Goal
        </span>
      </div>

      {/* Q1 2026 */}
      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          border: "1px solid #e4ddd4",
          padding: 10,
          marginBottom: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <span
            style={{
              fontSize: "9px",
              fontWeight: 700,
              color: "#2c2420",
            }}
          >
            Q1 2026
          </span>
          <span
            style={{ fontSize: "7px", color: "#8a7e72" }}
          >
            2/4 done &middot; 2 active
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          {[
            { name: "Launch product v1", status: "DONE" },
            { name: "Build personal brand", status: "ACTIVE" },
            { name: "Read 6 books", status: "ACTIVE" },
            { name: "Hit 87kg", status: "DONE" },
          ].map((g) => {
            const isDone = g.status === "DONE";
            const badgeColor = isDone ? "#6b8f71" : "#d4a04a";
            return (
              <div
                key={g.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: 3,
                      background: isDone ? "#6b8f71" : "transparent",
                      border: isDone ? "none" : "1.5px solid #d4ccc2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {isDone && (
                      <span
                        style={{
                          color: "#fff",
                          fontSize: "7px",
                          lineHeight: 1,
                        }}
                      >
                        &#10003;
                      </span>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: "9px",
                      color: "#2c2420",
                      textDecoration: isDone ? "line-through" : "none",
                      opacity: isDone ? 0.6 : 1,
                    }}
                  >
                    {g.name}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "7px",
                    fontWeight: 600,
                    padding: "1px 5px",
                    borderRadius: 4,
                    background: `${badgeColor}18`,
                    color: badgeColor,
                  }}
                >
                  {g.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Q2 2026 */}
      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          border: "1px solid #e4ddd4",
          padding: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <span
            style={{
              fontSize: "9px",
              fontWeight: 700,
              color: "#2c2420",
            }}
          >
            Q2 2026
          </span>
          <span style={{ fontSize: "7px", color: "#8a7e72" }}>
            0/3 done &middot; 3 active
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          {[
            "Scale to 100 users",
            "Run a half marathon",
            "Ship mobile app",
          ].map((name) => (
            <div
              key={name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: 3,
                    border: "1.5px solid #d4ccc2",
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: "9px", color: "#2c2420" }}>
                  {name}
                </span>
              </div>
              <span
                style={{
                  fontSize: "7px",
                  fontWeight: 600,
                  padding: "1px 5px",
                  borderRadius: 4,
                  background: "#d4a04a18",
                  color: "#d4a04a",
                }}
              >
                ACTIVE
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --- Ideas Page --- */

function MiniIdeasPage() {
  const ideas = [
    {
      id: 1,
      content: "AI-powered meal planner based on macros",
      potential: "High",
      date: "Apr 3",
    },
    {
      id: 2,
      content: "Weekend coding bootcamp for beginners",
      potential: "Medium",
      date: "Apr 2",
    },
    {
      id: 3,
      content: "Habit tracker with social accountability",
      potential: "High",
      date: "Apr 1",
    },
    {
      id: 4,
      content: "Podcast about building in public",
      potential: "Medium",
      date: "Mar 30",
    },
    {
      id: 5,
      content: "Newsletter on productivity systems",
      potential: "High",
      date: "Mar 28",
    },
    {
      id: 6,
      content: "Open-source daily planner template",
      potential: "Medium",
      date: "Mar 25",
    },
  ];

  return (
    <div style={{ padding: 12, overflowY: "auto", height: "100%" }}>
      <h2
        style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#2c2420",
          marginBottom: 2,
        }}
      >
        Ideas
      </h2>
      <p style={{ fontSize: "9px", color: "#8a7e72", marginBottom: 10 }}>
        Capture and refine your thinking
      </p>
      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          border: "1px solid #e4ddd4",
          overflow: "hidden",
        }}
      >
        {/* Table header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "20px 1fr 50px 42px",
            padding: "6px 10px",
            fontSize: "7px",
            fontWeight: 600,
            color: "#8a7e72",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            borderBottom: "1px solid #e4ddd4",
            background: "#faf8f5",
          }}
        >
          <span>#</span>
          <span>Content</span>
          <span>Potential</span>
          <span>Date</span>
        </div>
        {/* Table rows */}
        {ideas.map((idea) => (
          <div
            key={idea.id}
            style={{
              display: "grid",
              gridTemplateColumns: "20px 1fr 50px 42px",
              padding: "5px 10px",
              fontSize: "9px",
              color: "#2c2420",
              borderBottom: "1px solid #f0ebe4",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#b5a99a", fontSize: "8px" }}>
              {idea.id}
            </span>
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", paddingRight: 4 }}>{idea.content}</span>
            <span
              style={{
                fontSize: "7px",
                fontWeight: 600,
                padding: "1px 4px",
                borderRadius: 4,
                background:
                  idea.potential === "High" ? "#6b8f7118" : "#d4a04a18",
                color:
                  idea.potential === "High" ? "#6b8f71" : "#d4a04a",
                display: "inline-block",
                width: "fit-content",
              }}
            >
              {idea.potential}
            </span>
            <span style={{ fontSize: "7px", color: "#8a7e72" }}>
              {idea.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --- Thoughts Page --- */

function MiniThoughtsPage() {
  const thoughts = [
    {
      text: "What if I restructured my morning routine to front-load creative work before emails?",
      time: "2h ago",
    },
    {
      text: "The best productivity system is the one you actually use. Stop optimizing, start doing.",
      time: "5h ago",
    },
    {
      text: "Need to revisit the quarterly goals -- some of them feel misaligned with where I'm heading now.",
      time: "Yesterday",
    },
    {
      text: "Interesting idea from the podcast: time-blocking works better when you batch similar tasks together.",
      time: "Yesterday",
    },
  ];

  return (
    <div style={{ padding: 12, overflowY: "auto", height: "100%" }}>
      <h2
        style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#2c2420",
          marginBottom: 2,
        }}
      >
        Thoughts
      </h2>
      <p style={{ fontSize: "9px", color: "#8a7e72", marginBottom: 10 }}>
        Quick capture, process later
      </p>
      <div
        style={{ display: "flex", flexDirection: "column", gap: 8 }}
      >
        {thoughts.map((t, i) => (
          <div
            key={i}
            style={{
              background: "#f7f3ed",
              borderRadius: 8,
              border: "1px solid #e4ddd4",
              padding: "10px 12px",
            }}
          >
            <p
              style={{
                fontSize: "9px",
                color: "#2c2420",
                lineHeight: 1.5,
                marginBottom: 4,
              }}
            >
              {t.text}
            </p>
            <span style={{ fontSize: "7px", color: "#b5a99a" }}>
              {t.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --- Resources Page --- */

function MiniResourcesPage() {
  const resources = [
    {
      title: "Atomic Habits Summary",
      snippet:
        "Key takeaways from James Clear's framework for building better habits through small changes...",
      date: "Apr 2",
    },
    {
      title: "GTD Workflow Cheat Sheet",
      snippet:
        "Capture, clarify, organize, reflect, engage. The five steps to stress-free productivity...",
      date: "Mar 28",
    },
    {
      title: "Deep Work Principles",
      snippet:
        "Cal Newport's rules for focused success in a distracted world. Schedule deep work blocks...",
      date: "Mar 25",
    },
    {
      title: "Weekly Review Template",
      snippet:
        "Step-by-step guide for conducting an effective weekly review. Start with calendar audit...",
      date: "Mar 20",
    },
  ];

  return (
    <div style={{ padding: 12, overflowY: "auto", height: "100%" }}>
      <h2
        style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#2c2420",
          marginBottom: 2,
        }}
      >
        Resources
      </h2>
      <p style={{ fontSize: "9px", color: "#8a7e72", marginBottom: 8 }}>
        Your knowledge database
      </p>
      {/* Search bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "#fff",
          border: "1px solid #e4ddd4",
          borderRadius: 6,
          padding: "4px 8px",
          marginBottom: 10,
        }}
      >
        <Search
          style={{ width: 10, height: 10, color: "#b5a99a", flexShrink: 0 }}
        />
        <span style={{ fontSize: "9px", color: "#b5a99a" }}>
          Search resources...
        </span>
      </div>
      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 6,
        }}
      >
        {resources.map((r) => (
          <div
            key={r.title}
            style={{
              background: "#fff",
              borderRadius: 8,
              border: "1px solid #e4ddd4",
              padding: "8px 10px",
            }}
          >
            <div
              style={{
                fontSize: "9px",
                fontWeight: 600,
                color: "#2c2420",
                marginBottom: 3,
              }}
            >
              {r.title}
            </div>
            <p
              style={{
                fontSize: "8px",
                color: "#8a7e72",
                lineHeight: 1.4,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {r.snippet}
            </p>
            <span
              style={{
                fontSize: "7px",
                color: "#b5a99a",
                marginTop: 4,
                display: "block",
              }}
            >
              {r.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --- Reviews Page --- */

function MiniReviewsPage() {
  return (
    <div style={{ padding: 12, overflowY: "auto", height: "100%" }}>
      <h2
        style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#2c2420",
          marginBottom: 2,
        }}
      >
        Reviews
      </h2>
      <p style={{ fontSize: "9px", color: "#8a7e72", marginBottom: 10 }}>
        Look back to move forward
      </p>

      {/* OVERDUE section */}
      <div
        style={{
          fontSize: "7px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "#ef4444",
          fontWeight: 700,
          marginBottom: 6,
        }}
      >
        Overdue
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          marginBottom: 12,
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            border: "1px solid #e4ddd4",
            padding: "8px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "10px",
                fontWeight: 600,
                color: "#2c2420",
              }}
            >
              Weekly Review
            </div>
            <span
              style={{
                fontSize: "7px",
                color: "#ef4444",
                fontWeight: 600,
              }}
            >
              6 days overdue
            </span>
          </div>
          <span
            style={{
              fontSize: "7px",
              fontWeight: 700,
              padding: "2px 8px",
              borderRadius: 4,
              background: "#ef4444",
              color: "#fff",
              textTransform: "uppercase",
            }}
          >
            Start Now
          </span>
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            border: "1px solid #e4ddd4",
            padding: "8px 10px",
          }}
        >
          <div
            style={{
              fontSize: "10px",
              fontWeight: 600,
              color: "#2c2420",
            }}
          >
            Quarterly Review Q1
          </div>
          <span
            style={{
              fontSize: "7px",
              color: "#ef4444",
              fontWeight: 600,
            }}
          >
            4 days overdue
          </span>
        </div>
      </div>

      {/* UPCOMING section */}
      <div
        style={{
          fontSize: "7px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "#6b8f71",
          fontWeight: 700,
          marginBottom: 6,
        }}
      >
        Upcoming
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", gap: 6 }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            border: "1px solid #e4ddd4",
            padding: "8px 10px",
          }}
        >
          <div
            style={{
              fontSize: "10px",
              fontWeight: 600,
              color: "#2c2420",
            }}
          >
            Weekly Review
          </div>
          <span style={{ fontSize: "7px", color: "#8a7e72" }}>
            Due: Sunday, Apr 5
          </span>
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            border: "1px solid #e4ddd4",
            padding: "8px 10px",
          }}
        >
          <div
            style={{
              fontSize: "10px",
              fontWeight: 600,
              color: "#2c2420",
            }}
          >
            Quarterly Review
          </div>
          <span style={{ fontSize: "7px", color: "#8a7e72" }}>
            Due: Jun 30
          </span>
        </div>
      </div>
    </div>
  );
}

/* --- Schedules Page --- */

function MiniSchedulesPage() {
  const days = [
    { label: "MON", date: 30 },
    { label: "TUE", date: 31 },
    { label: "WED", date: 1 },
    { label: "THU", date: 2 },
    { label: "FRI", date: 3 },
    { label: "SAT", date: 4, today: true },
    { label: "SUN", date: 5 },
  ];
  const hours = [
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
  ];
  // Events placed by day index (0=MON) and hour index (0=7AM)
  const events: Record<string, { label: string; color: string }> = {
    "2-2": { label: "Deep work", color: "#c45d3e" },
    "5-3": { label: "Team sync", color: "#d4a04a" },
    "4-7": { label: "Gym", color: "#6b8f71" },
    "0-2": { label: "Planning", color: "#8a7e72" },
    "3-5": { label: "Lunch w/ Alex", color: "#d4a04a" },
  };

  return (
    <div style={{ padding: 12, overflowY: "auto", height: "100%" }}>
      <h2
        style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#2c2420",
          marginBottom: 2,
        }}
      >
        Schedules
      </h2>
      <p style={{ fontSize: "9px", color: "#8a7e72", marginBottom: 10 }}>
        Your week at a glance
      </p>
      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          border: "1px solid #e4ddd4",
          overflow: "hidden",
        }}
      >
        {/* Day headers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "30px repeat(7, 1fr)",
            borderBottom: "1px solid #e4ddd4",
          }}
        >
          <div />
          {days.map((d) => (
            <div
              key={d.label}
              style={{
                textAlign: "center",
                padding: "4px 0",
                fontSize: "7px",
                fontWeight: 600,
                color: d.today ? "#c45d3e" : "#8a7e72",
                background: d.today ? "#c45d3e08" : "transparent",
              }}
            >
              <div>{d.label}</div>
              <div
                style={{
                  fontSize: "9px",
                  fontWeight: d.today ? 700 : 400,
                  color: d.today ? "#c45d3e" : "#2c2420",
                }}
              >
                {d.date}
              </div>
            </div>
          ))}
        </div>
        {/* Time grid */}
        {hours.map((hour, hi) => (
          <div
            key={hour}
            style={{
              display: "grid",
              gridTemplateColumns: "30px repeat(7, 1fr)",
              borderBottom: "1px solid #f0ebe4",
              minHeight: 20,
            }}
          >
            <span
              style={{
                fontSize: "6px",
                color: "#b5a99a",
                padding: "2px 3px",
                fontFamily: "monospace",
              }}
            >
              {hour}
            </span>
            {days.map((d, di) => {
              const key = `${di}-${hi}`;
              const event = events[key];
              return (
                <div
                  key={key}
                  style={{
                    borderLeft: "1px solid #f0ebe4",
                    padding: 1,
                    background: d.today ? "#c45d3e04" : "transparent",
                  }}
                >
                  {event && (
                    <div
                      style={{
                        background: `${event.color}15`,
                        borderLeft: `2px solid ${event.color}`,
                        borderRadius: "0 3px 3px 0",
                        padding: "1px 3px",
                        fontSize: "6px",
                        color: event.color,
                        fontWeight: 600,
                        lineHeight: 1.4,
                      }}
                    >
                      {event.label}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

/* --- Page registry --- */

type HeroPageId = "life-coach" | MiniPageId;

const heroPageComponents: Record<HeroPageId, () => React.JSX.Element> = {
  "life-coach": MiniLifeCoachPage,
  today: MiniTodayPage,
  tasks: MiniTasksPage,
  journal: MiniJournalPage,
  compass: MiniCompassPage,
  ideas: MiniIdeasPage,
  thoughts: MiniThoughtsPage,
  resources: MiniResourcesPage,
  reviews: MiniReviewsPage,
  schedules: MiniSchedulesPage,
};

/* --- Interactive Demo --- */

export function HeroInteractiveDemo() {
  const [activePage, setActivePage] = useState<HeroPageId>("today");
  const ActiveComponent = heroPageComponents[activePage];

  return (
    <div
      style={{
        width: "100%",
        borderRadius: 12,
        border: "1px solid #d4ccc2",
        boxShadow:
          "0 25px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.03)",
        overflow: "hidden",
        background: "#faf8f5",
      }}
    >
      {/* Window chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 12px",
          background: "#f0ebe4",
          borderBottom: "1px solid #e4ddd4",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#ff5f57",
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#febc2e",
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#28c840",
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "rgba(228,221,212,0.6)",
              borderRadius: 4,
              padding: "2px 8px",
              fontSize: "9px",
              color: "#8a7e72",
            }}
          >
            app.lifeos.zone
          </div>
        </div>
      </div>

      <div style={{ display: "flex", height: 500 }}>
        {/* Sidebar */}
        <div
          style={{
            width: 170,
            flexShrink: 0,
            background: "#1c1917",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Logo */}
          <div
            style={{
              padding: "10px 12px",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <LogoMark size={12} className="text-[#c45d3e]" />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              LifeOS
            </span>
          </div>

          {/* Nav */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "0 6px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {miniSidebar.map((section, si) => (
              <div key={si} style={{ marginTop: si > 0 ? 8 : 0 }}>
                {section.label && (
                  <div
                    style={{
                      fontSize: "7px",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "#6b6560",
                      fontWeight: 500,
                      padding: "0 6px",
                      marginBottom: 2,
                    }}
                  >
                    {section.label}
                  </div>
                )}
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() =>
                        setActivePage(item.id as HeroPageId)
                      }
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "4px 8px",
                        borderRadius: 4,
                        fontSize: "10px",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 150ms",
                        background: isActive
                          ? "rgba(255,255,255,0.1)"
                          : "transparent",
                        color: isActive ? "#fff" : "#a8a29e",
                        borderLeft: isActive
                          ? "2px solid #c45d3e"
                          : "2px solid transparent",
                      }}
                    >
                      {"accent" in item && item.accent ? (
                        <div style={{ position: "relative" }}>
                          <Icon style={{ width: 12, height: 12 }} />
                          <div
                            style={{
                              position: "absolute",
                              top: -2,
                              right: -2,
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              background: "#c45d3e",
                            }}
                          />
                        </div>
                      ) : (
                        <Icon style={{ width: 12, height: 12 }} />
                      )}
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          {/* User */}
          <div
            style={{
              padding: "8px 10px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "rgba(196,93,62,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "7px",
                  color: "#c45d3e",
                  fontWeight: 500,
                }}
              >
                AJ
              </span>
            </div>
            <div>
              <div
                style={{
                  fontSize: "9px",
                  fontWeight: 500,
                  color: "#fff",
                  lineHeight: 1.2,
                }}
              >
                Alex Johnson
              </div>
              <div
                style={{
                  fontSize: "7px",
                  color: "#6b6560",
                }}
              >
                Standard plan
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            flex: 1,
            overflow: "hidden",
            background: "#faf8f5",
          }}
        >
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
}

/* --- Telegram Chat Mockup --- */

function TelegramChatMockup() {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: 12,
        border: "1px solid #d4ccc2",
        boxShadow:
          "0 25px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.03)",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      {/* Telegram header - dark blue */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 14px",
          background: "#2b5278",
          color: "#fff",
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "#c45d3e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <LogoMark size={10} className="text-white" />
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#fff",
              }}
            >
              LifeOS Coach
            </span>
            <span
              style={{
                fontSize: "9px",
                background: "rgba(255,255,255,0.15)",
                padding: "1px 5px",
                borderRadius: 3,
                color: "rgba(255,255,255,0.8)",
              }}
            >
              bot
            </span>
          </div>
          <span
            style={{
              fontSize: "10px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            last seen recently
          </span>
        </div>
        <Search
          style={{
            width: 18,
            height: 18,
            color: "rgba(255,255,255,0.7)",
          }}
        />
      </div>

      {/* Chat area - Telegram blue-tint background */}
      <div
        style={{
          padding: "12px 14px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          maxHeight: 360,
          overflowY: "auto",
          background: "#c8d6e5",
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%)",
        }}
      >
        {/* User voice note */}
        <div
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div
            style={{
              maxWidth: "85%",
              background: "#e1fec6",
              borderRadius: "12px 12px 4px 12px",
              padding: "8px 10px",
              fontSize: "11px",
              color: "#1a1a1a",
              lineHeight: 1.5,
              display: "flex",
              alignItems: "center",
              gap: 6,
              boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
            }}
          >
            <svg
              style={{
                width: 14,
                height: 14,
                color: "#6b8f71",
                flexShrink: 0,
              }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
            </svg>
            <span
              style={{
                color: "#4a4a4a",
                fontStyle: "italic",
                fontSize: "10px",
              }}
            >
              &quot;Pick up groceries after work, and remind me to call mom this
              weekend&quot;
            </span>
            <span
              style={{
                fontSize: "8px",
                color: "#7cb882",
                marginLeft: "auto",
                whiteSpace: "nowrap",
                alignSelf: "flex-end",
              }}
            >
              14:32
            </span>
          </div>
        </div>

        {/* Bot response */}
        <div style={{ display: "flex", gap: 0, maxWidth: "85%" }}>
          <div>
            <div
              style={{
                background: "#fff",
                borderRadius: "12px 12px 12px 4px",
                padding: "8px 10px",
                fontSize: "11px",
                color: "#1a1a1a",
                lineHeight: 1.5,
                boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
              }}
            >
              Got it! I created 2 tasks from your voice note:
              <div
                style={{
                  marginTop: 6,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  fontSize: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 2,
                      border: "1.5px solid #c45d3e50",
                      flexShrink: 0,
                    }}
                  />
                  Pick up groceries after work{" "}
                  <span style={{ color: "#8a7e72" }}>(today)</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 2,
                      border: "1.5px solid #c45d3e50",
                      flexShrink: 0,
                    }}
                  />
                  Call mom{" "}
                  <span style={{ color: "#8a7e72" }}>(Saturday)</span>
                </div>
              </div>
              <span
                style={{
                  fontSize: "8px",
                  color: "#999",
                  float: "right",
                  marginTop: 4,
                }}
              >
                14:32
              </span>
            </div>
            {/* Inline keyboard buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                marginTop: 4,
              }}
            >
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #d4dbe5",
                  borderRadius: 8,
                  padding: "6px 0",
                  textAlign: "center",
                  fontSize: "11px",
                  color: "#3390ec",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Add both to today
              </div>
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #d4dbe5",
                  borderRadius: 8,
                  padding: "6px 0",
                  textAlign: "center",
                  fontSize: "11px",
                  color: "#3390ec",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Schedule for tomorrow
              </div>
            </div>
          </div>
        </div>

        {/* User picks */}
        <div
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div
            style={{
              background: "#e1fec6",
              borderRadius: "12px 12px 4px 12px",
              padding: "8px 10px",
              fontSize: "11px",
              color: "#1a1a1a",
              boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
            }}
          >
            Add both to today
            <span
              style={{
                fontSize: "8px",
                color: "#7cb882",
                marginLeft: 8,
              }}
            >
              14:33
            </span>
          </div>
        </div>

        {/* Bot gives day plan */}
        <div style={{ display: "flex", gap: 0, maxWidth: "85%" }}>
          <div>
            <div
              style={{
                background: "#fff",
                borderRadius: "12px 12px 12px 4px",
                padding: "8px 10px",
                fontSize: "11px",
                color: "#1a1a1a",
                lineHeight: 1.5,
                boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
              }}
            >
              Done. Here&apos;s your updated plan for today:
              <div
                style={{
                  marginTop: 6,
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  fontSize: "10px",
                }}
              >
                {[
                  { time: "9:00", task: "Deep work" },
                  { time: "11:00", task: "Team standup" },
                  { time: "12:00", task: "Lunch" },
                  { time: "13:00", task: "Pick up groceries" },
                  { time: "14:00", task: "Review proposal" },
                ].map((e) => (
                  <div
                    key={e.time}
                    style={{
                      display: "flex",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 600,
                        width: 32,
                        flexShrink: 0,
                        fontFamily: "monospace",
                        fontSize: "9px",
                      }}
                    >
                      {e.time}
                    </span>
                    <span>{e.task}</span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontSize: "10px",
                  color: "#8a7e72",
                  fontStyle: "italic",
                }}
              >
                Your goal &quot;Read 12 books&quot; is at 50% with 3 months
                left. Want me to add 30 min reading time?
              </div>
              <span
                style={{
                  fontSize: "8px",
                  color: "#999",
                  float: "right",
                  marginTop: 4,
                }}
              >
                14:33
              </span>
            </div>
            {/* Inline keyboard buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                marginTop: 4,
              }}
            >
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #d4dbe5",
                  borderRadius: 8,
                  padding: "6px 0",
                  textAlign: "center",
                  fontSize: "11px",
                  color: "#3390ec",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Looks good, lock it in
              </div>
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #d4dbe5",
                  borderRadius: 8,
                  padding: "6px 0",
                  textAlign: "center",
                  fontSize: "11px",
                  color: "#3390ec",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Add reading time
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Telegram input bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 12px",
          background: "#fff",
          borderTop: "1px solid #e4e4e4",
        }}
      >
        <Menu
          style={{
            width: 18,
            height: 18,
            color: "#999",
            flexShrink: 0,
          }}
        />
        <Paperclip
          style={{
            width: 18,
            height: 18,
            color: "#999",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            flex: 1,
            fontSize: "12px",
            color: "#999",
          }}
        >
          Write a message...
        </span>
        <Smile
          style={{
            width: 18,
            height: 18,
            color: "#999",
            flexShrink: 0,
          }}
        />
      </div>
    </div>
  );
}

/* --- Hero --- */

export function Hero() {
  return (
    <section className="w-full px-6 pt-36 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Centered text */}
        <div className="text-center mb-16">
          <h1 className="animate-fade-up delay-2 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.0]">
            Always busy,
            <br />
            but never on top of things?
          </h1>
          <p className="animate-fade-up delay-4 mt-6 text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
            Tasks, goals, journals, ideas. All connected, with an AI LifeCoach
            that sees the full picture.
          </p>
          <div className="animate-fade-up delay-5 mt-8 flex flex-col items-center gap-3">
            <a href="https://app.lifeos.zone?auth=true" className={cn(buttonVariants({ size: "lg" }), "rounded-lg text-sm font-medium px-8")}>
              Try for free
            </a>
          </div>
        </div>

        {/* Telegram + Dashboard visual */}
        <div className="animate-fade-up delay-6 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/4 left-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px]" />
            <div className="absolute bottom-1/4 right-[15%] w-[400px] h-[400px] rounded-full bg-green-500/[0.04] blur-[100px]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.65fr_40px_1.5fr] items-stretch gap-4 lg:gap-0">
            {/* Labels */}
            <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-[0.65fr_40px_1.5fr] gap-4 lg:gap-0 mb-3">
              <p className="text-[11px] text-muted-foreground font-medium flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#3390ec]" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Telegram / WhatsApp LifeCoach
              </p>
              <div />
              <p className="text-[11px] text-muted-foreground font-medium">LifeOS Home Dashboard</p>
            </div>

            {/* Telegram Chat — compact */}
            <div className="rounded-xl border border-[#d4ccc2] shadow-2xl overflow-hidden flex flex-col" style={{ fontFamily: "'Roboto', system-ui, sans-serif" }}>
              <div className="flex items-center gap-2 px-3 py-2 bg-[#2b5278]">
                <div className="w-7 h-7 rounded-full bg-[#c45d3e] flex items-center justify-center shrink-0">
                  <LogoMark size={9} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="text-[11px] font-semibold text-white">LifeOS Coach</span>
                    <span className="text-[8px] bg-white/20 text-white/90 px-1 py-0.5 rounded font-medium">bot</span>
                  </div>
                  <span className="text-[9px] text-white/60">last seen recently</span>
                </div>
              </div>
              <div className="flex-1 p-3 space-y-2.5 overflow-y-auto" style={{ background: "#c8d6e5" }}>
                <div className="flex justify-end">
                  <div className="rounded-xl rounded-br-sm bg-[#e1fec6] px-3 py-1.5 text-[11px] text-[#1a1a1a] shadow-sm max-w-[90%]">
                    Add a task for tomorrow: finish project proposal
                    <div className="text-[9px] text-[#6b8f71] text-right mt-0.5">14:32 <svg className="inline w-[14px] h-[10px] ml-0.5" viewBox="0 0 16 11" fill="none"><path d="M11.5 0.5L5 7L2.5 4.5" stroke="#6b8f71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.5 0.5L8 7" stroke="#6b8f71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                  </div>
                </div>
                <div className="flex">
                  <div className="rounded-xl rounded-bl-sm bg-white px-3 py-1.5 text-[11px] text-[#1a1a1a] shadow-sm max-w-[90%]">
                    Done. <strong>Finish project proposal</strong> — tomorrow, Apr 5.
                    <div className="text-[9px] text-[#8a7e72] text-right mt-0.5">14:32</div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="rounded-xl rounded-br-sm bg-[#e1fec6] px-3 py-1.5 text-[11px] text-[#1a1a1a] shadow-sm max-w-[90%]">
                    Idea: Habit tracker with social accountability
                    <div className="text-[9px] text-[#6b8f71] text-right mt-0.5">14:33 <svg className="inline w-[14px] h-[10px] ml-0.5" viewBox="0 0 16 11" fill="none"><path d="M11.5 0.5L5 7L2.5 4.5" stroke="#6b8f71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.5 0.5L8 7" stroke="#6b8f71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                  </div>
                </div>
                <div className="flex">
                  <div className="rounded-xl rounded-bl-sm bg-white px-3 py-1.5 text-[11px] text-[#1a1a1a] shadow-sm max-w-[90%]">
                    Captured as idea #7 — <strong>High</strong> potential. Connects to Q2 goal.
                    <div className="text-[9px] text-[#8a7e72] text-right mt-0.5">14:33</div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="rounded-xl rounded-br-sm bg-[#e1fec6] px-3 py-1.5 text-[11px] text-[#1a1a1a] shadow-sm flex items-center gap-2 max-w-[90%]">
                    <svg className="w-3.5 h-3.5 text-[#6b8f71] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
                    <div className="flex items-center gap-1">
                      <div className="flex gap-[2px]">{[3,5,2,6,4,7,3,5,8,4,6,3,7,4,5,2,6,8,3,5].map((h,i)=>(<div key={i} className="w-[2px] rounded-full bg-[#6b8f71]" style={{height:`${h*1.5}px`}}/>))}</div>
                      <span className="text-[9px] text-[#6b8f71] ml-1">0:12</span>
                    </div>
                    <div className="text-[9px] text-[#6b8f71]">14:34 <svg className="inline w-[14px] h-[10px] ml-0.5" viewBox="0 0 16 11" fill="none"><path d="M11.5 0.5L5 7L2.5 4.5" stroke="#6b8f71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.5 0.5L8 7" stroke="#6b8f71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                  </div>
                </div>
                <div className="flex">
                  <div className="rounded-xl rounded-bl-sm bg-white px-3 py-1.5 text-[11px] text-[#1a1a1a] shadow-sm max-w-[90%]">
                    Processed your voice note. Here&apos;s what I captured:
                    <div className="mt-1.5 space-y-1">
                      <div>— <strong>Journal entry</strong> added: Reflection on this week&apos;s progress</div>
                      <div>— <strong>Task</strong> created: Call mom this weekend</div>
                      <div>— <strong>Insight:</strong> Your Q1 goal &quot;Read 6 books&quot; is 1 behind pace</div>
                    </div>
                    <div className="text-[9px] text-[#8a7e72] text-right mt-1">14:34</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-[#f5f0ea] border-t border-[#e4ddd4]">
                <svg className="w-4 h-4 text-[#8a7e72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>
                <span className="flex-1 text-[11px] text-[#8a7e72]">Write a message...</span>
                <svg className="w-4 h-4 text-[#8a7e72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>
                <svg className="w-5 h-5 text-[#8a7e72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5"/></svg>
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

            {/* Dashboard — showing synced items with NEW badges */}
            <div className="rounded-xl border border-[#d4ccc2] shadow-2xl overflow-hidden bg-[#faf8f5]">
              <div className="flex items-center gap-2 px-3 py-2 bg-[#f0ebe4] border-b border-[#e4ddd4]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-[#e4ddd4]/60 rounded px-2.5 py-0.5 text-[10px] text-[#8a7e72]">app.lifeos.zone</div>
                </div>
              </div>
              <div className="flex">
                {/* Sidebar */}
                <div className="w-[150px] shrink-0 bg-[#1c1917] text-white flex flex-col">
                  <div className="px-3 py-2.5 flex items-center gap-2">
                    <LogoMark size={12} className="text-[#c45d3e]" />
                    <span className="text-[12px] font-semibold tracking-tight">LifeOS</span>
                  </div>
                  <div className="flex-1 px-2 space-y-0.5">
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded text-[11px] text-[#a8a29e]">
                      <div className="relative"><MessageCircle className="w-3.5 h-3.5" /><div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#c45d3e]" /></div>
                      <span>Life Coach</span>
                    </div>
                    <div className="text-[8px] uppercase tracking-wider text-[#6b6560] font-medium px-2 mt-2.5 mb-0.5">DAILY</div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded text-[11px] text-[#a8a29e]"><Sun className="w-3.5 h-3.5" /><span>Today</span></div>
                    <div className="flex items-center justify-between px-2.5 py-1.5 rounded text-[11px] text-[#a8a29e]">
                      <div className="flex items-center gap-2"><CheckSquare className="w-3.5 h-3.5" /><span>Tasks</span></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c45d3e]" />
                    </div>
                    <div className="flex items-center justify-between px-2.5 py-1.5 rounded text-[11px] text-[#a8a29e]">
                      <div className="flex items-center gap-2"><BookOpen className="w-3.5 h-3.5" /><span>Journal</span></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c45d3e]" />
                    </div>
                    <div className="text-[8px] uppercase tracking-wider text-[#6b6560] font-medium px-2 mt-2.5 mb-0.5">WORK</div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded text-[11px] text-[#a8a29e]"><Compass className="w-3.5 h-3.5" /><span>Compass</span></div>
                    <div className="text-[8px] uppercase tracking-wider text-[#6b6560] font-medium px-2 mt-2.5 mb-0.5">CAPTURE</div>
                    <div className="flex items-center justify-between px-2.5 py-1.5 rounded text-[11px] text-[#a8a29e]">
                      <div className="flex items-center gap-2"><Lightbulb className="w-3.5 h-3.5" /><span>Ideas</span></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c45d3e]" />
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded text-[11px] text-[#a8a29e]"><Cloud className="w-3.5 h-3.5" /><span>Thoughts</span></div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded text-[11px] text-[#a8a29e]"><FolderOpen className="w-3.5 h-3.5" /><span>Resources</span></div>
                    <div className="text-[8px] uppercase tracking-wider text-[#6b6560] font-medium px-2 mt-2.5 mb-0.5">REFLECT</div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded text-[11px] text-[#a8a29e]"><BarChart3 className="w-3.5 h-3.5" /><span>Reviews</span></div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded text-[11px] text-[#a8a29e]"><Calendar className="w-3.5 h-3.5" /><span>Schedules</span></div>
                  </div>
                  <div className="px-3 py-2.5 border-t border-white/10 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#c45d3e]/20 flex items-center justify-center">
                      <span className="text-[7px] text-[#c45d3e] font-medium">AJ</span>
                    </div>
                    <div>
                      <div className="text-[9px] font-medium text-white leading-tight">Alex Johnson</div>
                      <div className="text-[7px] text-[#6b6560]">Standard plan</div>
                    </div>
                  </div>
                </div>
                {/* Content — synced view */}
                <div className="flex-1 p-5 overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-[#2c2420]">Dashboard</h3>
                    <span className="text-[10px] text-[#8a7e72]">Updated just now</span>
                  </div>

                  {/* Tasks section with NEW item */}
                  <div className="mb-5">
                    <div className="text-[10px] uppercase tracking-wider text-[#8a7e72] font-medium mb-2">Tasks</div>
                    <div className="rounded-xl border-2 border-[#c45d3e]/30 bg-[#c45d3e]/5 p-3 mb-2 relative">
                      <div className="absolute -top-2 left-3 bg-[#c45d3e] text-white text-[8px] font-medium px-1.5 py-0.5 rounded">NEW</div>
                      <div className="flex items-center gap-3 mt-1">
                        <div className="w-4 h-4 rounded-full border-2 border-[#c45d3e] shrink-0" />
                        <div>
                          <div className="text-[12px] font-medium text-[#2c2420]">Finish project proposal</div>
                          <div className="text-[10px] text-[#8a7e72]">📅 Tomorrow, Apr 5</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {["Review team updates", "Prepare for meeting", "Pick up groceries"].map((t) => (
                        <div key={t} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white border border-[#e4ddd4]">
                          <div className="w-3.5 h-3.5 rounded-full border-[1.5px] border-[#d4ccc2] shrink-0" />
                          <span className="text-[11px] text-[#2c2420]">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideas section with NEW item */}
                  <div className="mb-5">
                    <div className="text-[10px] uppercase tracking-wider text-[#8a7e72] font-medium mb-2">Ideas</div>
                    <div className="rounded-xl border-2 border-[#6b8f71]/30 bg-[#6b8f71]/5 p-3 relative">
                      <div className="absolute -top-2 left-3 bg-[#6b8f71] text-white text-[8px] font-medium px-1.5 py-0.5 rounded">NEW</div>
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-[#8a7e72]">#7</span>
                          <span className="text-[12px] text-[#2c2420]">Habit tracker with social accountability</span>
                        </div>
                        <span className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-[#6b8f71]/15 text-[#6b8f71]">High</span>
                      </div>
                    </div>
                  </div>

                  {/* Journal section with NEW item */}
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#8a7e72] font-medium mb-2">Journal</div>
                    <div className="rounded-xl border-2 border-[#d4a04a]/30 bg-[#d4a04a]/5 p-3 relative">
                      <div className="absolute -top-2 left-3 bg-[#d4a04a] text-white text-[8px] font-medium px-1.5 py-0.5 rounded">NEW</div>
                      <div className="mt-1">
                        <div className="text-[10px] text-[#c45d3e] font-medium mb-1">Friday, April 4</div>
                        <div className="text-[11px] text-[#2c2420] leading-relaxed">Added from voice note — &ldquo;Feeling good about the progress this week...&rdquo;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Message your AI coach on Telegram, Discord, or WhatsApp — your dashboard updates in real time
          </p>
        </div>
      </div>
    </section>
  );
}
