import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AIPowerSection from "@/components/AIPowerSection";
import FeaturesSection from "@/components/FeaturesSection";
import BusinessGrowthSection from "@/components/BusinessGrowthSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Home() {
  const { toast } = useToast();
  const [showContactForm, setShowContactForm] = useState(false);
  
  const handleGetStarted = () => {
    setShowContactForm(true);
  };
  
  const handleFormClose = () => {
    setShowContactForm(false);
  };
  
  const handleFormSuccess = () => {
    setShowContactForm(false);
    toast({
      title: "Success!",
      description: "Your inquiry has been submitted successfully. We'll get back to you soon.",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onGetStarted={handleGetStarted} />
      <main>
        <HeroSection onGetStarted={handleGetStarted} />
        <AIPowerSection />
        <FeaturesSection />
        <ProjectsSection />
        <BusinessGrowthSection />
      </main>
      <Footer />
      {showContactForm && (
        <ContactForm 
          onClose={handleFormClose} 
          onSuccess={handleFormSuccess}
        />
      )}
    </div>
  );
}
