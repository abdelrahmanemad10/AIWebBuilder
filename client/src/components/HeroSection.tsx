import { Button } from "@/components/ui/button";
import CirclePattern from "./CirclePattern";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export default function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-background">
      {/* Circular dots pattern */}
      <CirclePattern />
      
      {/* Hero content */}
      <div className="container mx-auto px-4 mt-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left side text content */}
          <motion.div 
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 max-w-lg">
              <p className="text-muted-foreground mb-2">
                Our AI-powered suite of solutions empowers your business with cutting-edge capabilities.
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Building AI solution
              </h1>
              <div className="flex flex-wrap gap-3 mt-8">
                <Button 
                  onClick={onGetStarted}
                  className="bg-gradient-to-r from-primary to-blue-500 text-white hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300"
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-600 hover:border-primary transition-all duration-300"
                >
                  Explore More
                </Button>
              </div>
            </div>
          </motion.div>
          
          {/* Right side content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card/70 rounded-xl p-6 border border-border shadow-lg max-w-lg mx-auto">
              <p className="text-muted-foreground mb-6">
                Training text to images harnessing intelligent AI and generating realistic outputs from textual prompts.
              </p>
              <div className="relative rounded-lg overflow-hidden bg-card p-4 group transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-50"></div>
                <div className="hex-pattern absolute inset-0 opacity-20"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/30 border border-primary/40 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    </div>
                  </div>
                  <div className="text-foreground font-semibold">AI Assistant</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
