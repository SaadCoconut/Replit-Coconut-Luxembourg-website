import Header from "@/components/header";
import Hero from "@/components/hero";
import TrustIndicators from "@/components/trust-indicators";
import About from "@/components/about";
import Programs from "@/components/programs";
import ImpactMetrics from "@/components/impact-metrics";
import SuccessStories from "@/components/success-stories";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <Hero />

      <About />
      <Programs />
      <ImpactMetrics />
      <SuccessStories />
      <Footer />
    </div>
  );
}
