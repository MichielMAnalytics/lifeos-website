import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { FlowInfographic } from "@/components/flow-infographic";
import { Features } from "@/components/features";
import { DemoSection } from "@/components/demo-section";
import { AICoach } from "@/components/ai-coach";
import { UseCases } from "@/components/use-cases";
import { Pricing } from "@/components/pricing";
import { ThemesSection } from "@/components/themes-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="flex justify-center py-8">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        <ScrollReveal><FlowInfographic /></ScrollReveal>
        <div className="flex justify-center py-8">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        <ScrollReveal><Features /></ScrollReveal>
        <div className="flex justify-center py-8">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        <ScrollReveal><DemoSection /></ScrollReveal>
        <ScrollReveal><AICoach /></ScrollReveal>
        <ScrollReveal><UseCases /></ScrollReveal>
        <ScrollReveal><Pricing /></ScrollReveal>
        <ScrollReveal><ThemesSection /></ScrollReveal>
        <ScrollReveal><FAQSection /></ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
