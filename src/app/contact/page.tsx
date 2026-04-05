"use client";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-16">
        <section className="px-6 py-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-[10px] uppercase tracking-wider font-medium border-border text-muted-foreground">
                Contact
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Get in touch
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                Have a question, want to partner up, or just want to say hi? We&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-8">
              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="text-lg font-semibold mb-2">General inquiries</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  For questions about LifeOS, pricing, or anything else.
                </p>
                <a href="mailto:info@lifeos.zone" className="text-sm text-primary hover:underline font-medium">
                  info@lifeos.zone
                </a>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="text-lg font-semibold mb-2">Support</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Need help with your account or running into an issue?
                </p>
                <a href="mailto:support@lifeos.zone" className="text-sm text-primary hover:underline font-medium">
                  support@lifeos.zone
                </a>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="text-lg font-semibold mb-2">Partnerships</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Interested in integrating with LifeOS or joining the partner program?
                </p>
                <a href="/partners" className="text-sm text-primary hover:underline font-medium">
                  View partner program
                </a>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="text-lg font-semibold mb-2">Social</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Follow us for updates, tips, and behind-the-scenes.
                </p>
                <div className="flex gap-4">
                  <a href="https://instagram.com/getlifeos" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline font-medium">
                    Instagram
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline font-medium">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
