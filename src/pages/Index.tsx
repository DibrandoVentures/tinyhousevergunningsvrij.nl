import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import QuickLinks from "@/components/QuickLinks";
import InsuranceCards from "@/components/InsuranceCards";
import ComparisonSection from "@/components/ComparisonSection";
import SafetySection from "@/components/SafetySection";
import StepPlan from "@/components/StepPlan";
import FAQ from "@/components/FAQ";
import AdditionalSections from "@/components/AdditionalSections";
import Footer from "@/components/Footer";
import ImageTextSection from "@/components/ImageTextSection";
import WheelsImageSection from "@/components/WheelsImageSection";
import DeckImageSection from "@/components/DeckImageSection";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <QuickLinks />
      <ImageTextSection />
      <AdditionalSections />
      <InsuranceCards />
      <WheelsImageSection />
      <ComparisonSection />
      <SafetySection />
      <DeckImageSection />
      <StepPlan />
      <FAQ />
      <Footer className="bg-slate-50" />
    </div>;
};
export default Index;