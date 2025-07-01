import Hero from "@/components/hero";
import TrustIndicators from "@/components/trust-indicators";
import About from "@/components/about";
import Programs from "@/components/programs";
import ImpactMetrics from "@/components/impact-metrics";
import SuccessStories from "@/components/success-stories";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <ImpactMetrics />
      <SuccessStories />
    </>
  );
}
