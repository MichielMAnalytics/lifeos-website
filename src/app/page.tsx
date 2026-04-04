import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { UseCases } from "@/components/use-cases";
import { Pricing } from "@/components/pricing";
import { FlowInfographic } from "@/components/flow-infographic";
import { ComparisonTable } from "@/components/comparison-table";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ScrollReveal><Features /></ScrollReveal>
        <ScrollReveal><UseCases /></ScrollReveal>
        <ScrollReveal><Pricing /></ScrollReveal>
        <ScrollReveal><FlowInfographic /></ScrollReveal>
        <ScrollReveal><ComparisonTable /></ScrollReveal>
        <ScrollReveal><FAQSection /></ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
