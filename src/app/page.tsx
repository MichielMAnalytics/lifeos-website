import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Infographic } from "@/components/infographic";
import { Features } from "@/components/features";
import { DemoSection } from "@/components/demo-section";
import { AICoach } from "@/components/ai-coach";
import { UseCases } from "@/components/use-cases";
import { Pricing } from "@/components/pricing";
import { ThemesSection } from "@/components/themes-section";
import { CLISection } from "@/components/cli-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Infographic />
        <Features />
        <DemoSection />
        <AICoach />
        <UseCases />
        <Pricing />
        <ThemesSection />
        <CLISection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
