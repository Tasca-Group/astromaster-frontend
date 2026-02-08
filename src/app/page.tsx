import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SystemsGrid from "@/components/SystemsGrid";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SystemsGrid />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
