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
  title: "LifeOS — Your Personal Life Operating System",
  description:
    "A personal productivity platform with a configurable AI LifeCoach. Tasks, goals, projects, journals, day plans, and more — with a dashboard, CLI, and API.",
  metadataBase: new URL("https://lifeos.zone"),
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml" },
  },
  openGraph: {
    title: "LifeOS — Your Personal Life Operating System",
    description:
      "A personal productivity platform with a configurable AI LifeCoach. Dashboard. CLI. API. Built for the way you think.",
    url: "https://lifeos.zone",
    siteName: "LifeOS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LifeOS — Your Personal Life Operating System",
    description:
      "A personal productivity platform with a configurable AI LifeCoach. Dashboard. CLI. API.",
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
