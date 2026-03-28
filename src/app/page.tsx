import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { FlowInfographic } from "@/components/flow-infographic";
import { Features } from "@/components/features";
import { DemoSection } from "@/components/demo-section";
import { AICoach } from "@/components/ai-coach";
import { UseCases } from "@/components/use-cases";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { ThemesSection } from "@/components/themes-section";
import { FAQSection } from "@/components/faq-section";
import { EmailSignup } from "@/components/email-signup";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ScrollReveal><StatsBar /></ScrollReveal>
        <ScrollReveal><FlowInfographic /></ScrollReveal>
        <ScrollReveal><Features /></ScrollReveal>
        <ScrollReveal><DemoSection /></ScrollReveal>
        <ScrollReveal><AICoach /></ScrollReveal>
        <ScrollReveal><UseCases /></ScrollReveal>
        <ScrollReveal><Pricing /></ScrollReveal>
        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><ThemesSection /></ScrollReveal>
        <ScrollReveal><FAQSection /></ScrollReveal>
        <ScrollReveal><EmailSignup /></ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
