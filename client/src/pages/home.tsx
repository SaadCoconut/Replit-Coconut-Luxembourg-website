import Hero from "@/components/hero";
import TrustIndicators from "@/components/trust-indicators";
import Programs from "@/components/programs";
import ImpactMetrics from "@/components/impact-metrics";
import SuccessStories from "@/components/success-stories";

export default function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <ImpactMetrics />
      <SuccessStories />
    </>
  );
}
