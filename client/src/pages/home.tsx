import Header from "@/components/header";
import Hero from "@/components/hero";
import TrustIndicators from "@/components/trust-indicators";
import About from "@/components/about";
import Programs from "@/components/programs";
import ImpactMetrics from "@/components/impact-metrics";
import SuccessStories from "@/components/success-stories";
import Team from "@/components/team";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <Hero />
      <TrustIndicators />
      <About />
      <Programs />
      <ImpactMetrics />
      <SuccessStories />
      <Team />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}
