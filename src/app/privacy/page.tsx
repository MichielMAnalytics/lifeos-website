import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-16">
        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Privacy Policy
              </h1>
              <p className="mt-4 text-muted-foreground text-sm">
                Last updated: April 5, 2026
              </p>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ INTRODUCTION ]
                </h2>
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                  <p>
                    LifeAI (lifeai.so) is committed to protecting your privacy. This policy
                    explains what data we collect, how we use it, and what rights you have. We
                    process data in accordance with the General Data Protection Regulation (GDPR)
                    and applicable EU/Dutch privacy law.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Data We Collect */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ DATA WE COLLECT ]
                </h2>
                <div className="space-y-6 text-foreground/80 text-sm leading-relaxed">
                  <div>
                    <h3 className="text-foreground font-medium mb-2">Account information</h3>
                    <p>
                      When you create an account, we collect your name, email address, and
                      authentication data (via Google OAuth). We also store your subscription
                      status and billing information (processed by Stripe).
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-2">Content you create</h3>
                    <p>
                      This includes tasks, goals, projects, journal entries, day plans, weekly
                      plans, ideas, notes, and any other data you enter into LifeAI. This data
                      is yours and is stored to provide you with the service.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-2">AI conversations</h3>
                    <p>
                      When you use the Life Coach, your messages and relevant context (such as
                      tasks and goals) are processed to generate responses. Conversation history
                      is stored to maintain context across sessions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-2">Usage data</h3>
                    <p>
                      We collect basic usage analytics such as page views, feature usage, and
                      session duration to improve the service. We do not track you across
                      third-party websites.
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* How We Use Your Data */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ HOW WE USE YOUR DATA ]
                </h2>
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                  <p>We use your data to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-1">
                    <li>Provide and operate the LifeAI service</li>
                    <li>Process your subscription and payments</li>
                    <li>Power the Life Coach with relevant context from your account</li>
                    <li>Send transactional emails (account confirmations, billing receipts)</li>
                    <li>Improve the service based on aggregated, anonymized usage patterns</li>
                    <li>Respond to support requests</li>
                  </ul>
                  <p>
                    We do not sell your personal data. We do not use your data for advertising.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Third-Party Services */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ THIRD-PARTY SERVICES ]
                </h2>
                <div className="space-y-6 text-foreground/80 text-sm leading-relaxed">
                  <p>
                    We use the following third-party services to operate LifeAI. Each has its
                    own privacy policy:
                  </p>
                  <div>
                    <h3 className="text-foreground font-medium mb-2">Anthropic (Claude)</h3>
                    <p>
                      The Life Coach is powered by Claude, developed by Anthropic. When you
                      use AI features, your prompts and relevant context are sent to
                      Anthropic&apos;s API. Anthropic does not use your data to train their
                      models when accessed via the API.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-2">Stripe</h3>
                    <p>
                      Payment processing is handled by Stripe. Your payment details (card number,
                      billing address) are collected and stored by Stripe directly. We do not
                      store your full payment information on our servers.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-2">Telegram & Discord</h3>
                    <p>
                      If you connect your Telegram or Discord account, messages you send through
                      those platforms are processed to interact with your LifeAI account. We
                      only access messages directed to the LifeAI bot.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-2">Convex</h3>
                    <p>
                      LifeAI uses Convex as its real-time backend. Your data is stored on
                      Convex&apos;s infrastructure with encryption at rest and in transit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Data Storage & Security */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ DATA STORAGE & SECURITY ]
                </h2>
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                  <p>
                    Your data is stored securely with encryption at rest and in transit (TLS).
                    We implement industry-standard security measures to protect your information
                    against unauthorized access, alteration, or destruction.
                  </p>
                  <p>
                    While we take reasonable steps to protect your data, no method of electronic
                    storage is 100% secure. We encourage you to use strong, unique passwords
                    for your account.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Your Rights (GDPR) */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ YOUR RIGHTS ]
                </h2>
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                  <p>
                    Under the GDPR and applicable privacy law, you have the following rights:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-1">
                    <li>
                      <span className="font-medium text-foreground">Access</span> — request a
                      copy of the personal data we hold about you
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Rectification</span> —
                      request correction of inaccurate data
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Erasure</span> — request
                      deletion of your data (&quot;right to be forgotten&quot;)
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Portability</span> —
                      request your data in a structured, machine-readable format
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Restriction</span> —
                      request that we limit the processing of your data
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Objection</span> — object
                      to the processing of your data for certain purposes
                    </li>
                  </ul>
                  <p>
                    To exercise any of these rights, contact us at{" "}
                    <a
                      href="mailto:info@lifeos.zone"
                      className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
                    >
                      info@lifeos.zone
                    </a>
                    . We will respond within 30 days.
                  </p>
                  <p>
                    You also have the right to lodge a complaint with the Dutch Data Protection
                    Authority (Autoriteit Persoonsgegevens) or your local supervisory authority.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Cookies */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ COOKIES ]
                </h2>
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                  <p>
                    We use essential cookies to keep you signed in and maintain your session.
                    We may use analytics cookies to understand how the service is used. We do
                    not use advertising or tracking cookies.
                  </p>
                  <p>
                    You can control cookies through your browser settings. Disabling essential
                    cookies may prevent the service from functioning correctly.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Data Retention */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ DATA RETENTION ]
                </h2>
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                  <p>
                    We retain your data for as long as your account is active. If you delete
                    your account, your personal data will be permanently removed within 30 days.
                  </p>
                  <p>
                    Certain data may be retained longer where required by law (such as billing
                    records for tax purposes) or to resolve disputes.
                  </p>
                  <p>
                    Anonymized, aggregated data that cannot identify you may be retained
                    indefinitely for analytics purposes.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Changes to This Policy */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ CHANGES TO THIS POLICY ]
                </h2>
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                  <p>
                    We may update this privacy policy from time to time. When we make significant
                    changes, we will notify you by email or through the service. The &quot;Last
                    updated&quot; date at the top of this page indicates when the policy was
                    last revised.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Contact */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ CONTACT ]
                </h2>
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                  <p>
                    If you have questions about this privacy policy or how we handle your data,
                    contact us at{" "}
                    <a
                      href="mailto:info@lifeos.zone"
                      className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
                    >
                      info@lifeos.zone
                    </a>
                    .
                  </p>
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
