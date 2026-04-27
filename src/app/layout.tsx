import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LifeAI — Your Personal Life Operating System",
  description:
    "A personal productivity platform with a configurable Life Coach. Tasks, goals, projects, journals, day plans, and more — with a dashboard, CLI, and API.",
  metadataBase: new URL("https://lifeai.so"),
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml" },
  },
  openGraph: {
    title: "LifeAI — Your Personal Life Operating System",
    description:
      "A personal productivity platform with a configurable Life Coach. Dashboard. CLI. API. Built for the way you think.",
    url: "https://lifeai.so",
    siteName: "LifeAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LifeAI — Your Personal Life Operating System",
    description:
      "A personal productivity platform with a configurable Life Coach. Dashboard. CLI. API.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
