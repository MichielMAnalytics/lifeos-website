import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-16">
        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Terms of Service
              </h1>
              <p className="mt-4 text-muted-foreground text-sm">
                Last updated: April 5, 2026
              </p>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {/* Acceptance */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ ACCEPTANCE OF TERMS ]
                </h2>
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                  <p>
                    By accessing or using LifeAI (lifeai.so), you agree to be bound by these
                    Terms of Service. If you do not agree to these terms, do not use the service.
                  </p>
                  <p>
                    These terms constitute a legal agreement between you and LifeAI. By creating
                    an account, you confirm that you are at least 16 years of age and capable of
                    entering into a binding agreement.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Description of Service */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ DESCRIPTION OF SERVICE ]
                </h2>
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                  <p>
                    LifeAI is a personal productivity platform that provides task management,
                    goal tracking, journaling, day and weekly planning, project management, and
                    a Life Coach. The service is available through a web dashboard,
                    CLI, API, and messaging integrations (Telegram, Discord).
                  </p>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any part of the
                    service at any time with reasonable notice. We will make reasonable efforts
                    to notify you of significant changes.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Accounts */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ ACCOUNTS ]
                </h2>
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                  <p>
                    You are responsible for maintaining the security of your account credentials.
                    You are fully responsible for all activity that occurs under your account.
                  </p>
                  <p>
                    You must provide accurate and complete information when creating your account.
                    Notify us immediately if you suspect unauthorized access to your account.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Payments & Subscriptions */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ PAYMENTS & SUBSCRIPTIONS ]
                </h2>
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                  <p>
                    LifeAI offers paid subscription plans billed in EUR. All plans include a
                    7-day free trial. You will not be charged until the trial period ends.
                  </p>
                  <p>
                    Subscriptions are available on monthly or annual billing cycles. Annual plans
                    are billed upfront for the full year. Payments are processed securely through
                    Stripe.
                  </p>
                  <p>
                    You may cancel your subscription at any time. Cancellation takes effect at
                    the end of your current billing period. We do not offer prorated refunds for
                    partial billing periods unless required by applicable law.
                  </p>
                  <p>
                    We reserve the right to change pricing with 30 days&apos; notice. Price
                    changes will not affect your current billing period.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* AI Usage */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ AI USAGE ]
                </h2>
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                  <p>
                    The Life Coach feature is powered by Claude, developed by Anthropic. When
                    you interact with the Life Coach, your prompts and relevant context (tasks,
                    goals, journal entries) are sent to Anthropic&apos;s API to generate responses.
                  </p>
                  <p>
                    AI-generated responses are for informational and productivity purposes only.
                    They do not constitute professional advice of any kind (medical, financial,
                    legal, or otherwise). You should exercise your own judgment when acting on
                    AI suggestions.
                  </p>
                  <p>
                    Some plans support BYOK (Bring Your Own Key), where you provide your own
                    Claude API key and pay Anthropic directly for usage. In that case, your usage
                    is also subject to Anthropic&apos;s terms of service.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Acceptable Use */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ ACCEPTABLE USE ]
                </h2>
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                  <p>You agree not to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-1">
                    <li>Use the service for any unlawful purpose</li>
                    <li>Attempt to gain unauthorized access to any part of the service</li>
                    <li>Interfere with or disrupt the service or its infrastructure</li>
                    <li>Reverse engineer, decompile, or disassemble any part of the service</li>
                    <li>Use the service to send spam or abuse messaging integrations</li>
                    <li>Resell or redistribute the service without written permission</li>
                    <li>Use automated systems to scrape or extract data from the service</li>
                  </ul>
                  <p>
                    Violation of these terms may result in immediate suspension or termination
                    of your account.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Intellectual Property */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ INTELLECTUAL PROPERTY ]
                </h2>
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                  <p>
                    The LifeAI name, logo, and branding are the property of LifeAI. The service
                    design, code, and documentation are protected by intellectual property laws.
                  </p>
                  <p>
                    You retain full ownership of all content you create within LifeAI, including
                    tasks, journal entries, goals, and notes. We claim no ownership over your
                    data.
                  </p>
                  <p>
                    Portions of the LifeAI platform are open source and licensed under their
                    respective licenses. These terms apply to the hosted service at lifeai.so.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Termination */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ TERMINATION ]
                </h2>
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                  <p>
                    You may delete your account at any time through your account settings. Upon
                    deletion, your data will be permanently removed within 30 days.
                  </p>
                  <p>
                    We may terminate or suspend your account if you violate these terms, engage
                    in abusive behavior, or fail to pay for your subscription. We will make
                    reasonable efforts to notify you before termination, except in cases of
                    severe or repeated violations.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ LIMITATION OF LIABILITY ]
                </h2>
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                  <p>
                    The service is provided &quot;as is&quot; without warranties of any kind,
                    whether express or implied. We do not guarantee that the service will be
                    uninterrupted, secure, or error-free.
                  </p>
                  <p>
                    To the maximum extent permitted by law, LifeAI shall not be liable for any
                    indirect, incidental, special, consequential, or punitive damages, or any
                    loss of profits or data, arising from your use of the service.
                  </p>
                  <p>
                    Our total liability for any claim arising from these terms or your use of
                    the service shall not exceed the amount you paid to LifeAI in the 12 months
                    preceding the claim.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Governing Law */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ GOVERNING LAW ]
                </h2>
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                  <p>
                    These terms are governed by and construed in accordance with the laws of the
                    Netherlands. Any disputes arising from these terms shall be subject to the
                    exclusive jurisdiction of the courts of the Netherlands.
                  </p>
                  <p>
                    If you are a consumer in the European Union, you also enjoy the protection
                    of mandatory provisions of the law of your country of residence and may
                    bring legal proceedings in the courts of that country.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Changes to Terms */}
              <div>
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  [ CHANGES TO TERMS ]
                </h2>
                <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                  <p>
                    We may update these terms from time to time. When we make significant changes,
                    we will notify you by email or through the service. Continued use of the
                    service after changes become effective constitutes acceptance of the updated
                    terms.
                  </p>
                  <p>
                    For questions about these terms, contact us at{" "}
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
