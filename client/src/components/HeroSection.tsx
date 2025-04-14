import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedCirclePattern from "./AnimatedCirclePattern";
import AnimatedText from "./AnimatedText";
import AnimatedCard from "./AnimatedCard";
import ParallaxSection from "./ParallaxSection";
import ScrollReveal from "./ScrollReveal";
import { buttonHover, staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export default function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-background">
      {/* Animated circular pattern */}
      <AnimatedCirclePattern 
        className="left-0 top-10" 
        size={400} 
        animationType="both" 
        density="high"
      />
      
      <AnimatedCirclePattern 
        className="right-0 bottom-0" 
        size={300} 
        animationType="rotate" 
        density="medium"
      />
      
      {/* Hero content */}
      <div className="container mx-auto px-4 mt-12 relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row justify-between items-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Left side text content */}
          <ScrollReveal 
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            animation="slide-right"
            delay={0.3}
          >
            <div className="mb-8 max-w-lg">
              <motion.div variants={fadeInUp}>
                <AnimatedText
                  text="Our AI-powered suite of solutions empowers your business with cutting-edge capabilities."
                  className="text-muted-foreground mb-2"
                  animationType="word"
                  speed="medium"
                  delay={0.5}
                />
              </motion.div>
              
              <motion.div variants={fadeInLeft} className="mt-4">
                <AnimatedText 
                  text="Building AI solution"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                  animationType="word"
                  speed="slow"
                  delay={0.8}
                />
                
                <div className="mt-4">
                  <AnimatedText
                    text="Led by AI Engineer Abdelrahman Emad"
                    className="text-xl text-primary/90 font-medium"
                    animationType="character"
                    speed="fast"
                    delay={1.2}
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-3 mt-8"
                variants={fadeInUp}
              >
                <motion.div
                  variants={buttonHover}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button 
                    onClick={onGetStarted}
                    className="bg-gradient-to-r from-primary to-blue-500 text-white"
                  >
                    Get Started
                  </Button>
                </motion.div>
                
                <motion.div
                  variants={buttonHover}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button 
                    variant="outline" 
                    className="border-gray-600 hover:border-primary"
                  >
                    Explore More
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>
          
          {/* Right side content */}
          <ParallaxSection 
            className="w-full lg:w-1/2"
            speed={0.2}
            direction="up"
          >
            <ScrollReveal 
              animation="scale"
              delay={0.5}
            >
              <AnimatedCard 
                className="bg-card/70 rounded-xl p-6 border border-border max-w-lg mx-auto"
                glowEffect={true}
                glowColor="rgba(139, 92, 246, 0.3)"
                tiltEffect={true}
              >
                <p className="text-muted-foreground mb-6">
                  Training text to images harnessing intelligent AI and generating realistic outputs from textual prompts.
                </p>
                
                <motion.div
                  className="relative rounded-lg overflow-hidden bg-card p-4 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-50"></div>
                  <div className="hex-pattern absolute inset-0 opacity-20"></div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-primary/30 border border-primary/40 flex items-center justify-center mb-4"
                      animate={{ 
                        boxShadow: ["0 0 5px rgba(139, 92, 246, 0.3)", "0 0 20px rgba(139, 92, 246, 0.7)", "0 0 5px rgba(139, 92, 246, 0.3)"] 
                      }}
                      transition={{ 
                        duration: 2, 
                        ease: "easeInOut", 
                        repeat: Infinity 
                      }}
                    >
                      <motion.div 
                        className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ 
                          duration: 2, 
                          ease: "easeInOut", 
                          repeat: Infinity 
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                      </motion.div>
                    </motion.div>
                    <div className="text-foreground font-semibold">AI Assistant</div>
                  </div>
                </motion.div>
              </AnimatedCard>
            </ScrollReveal>
          </ParallaxSection>
        </motion.div>
      </div>
    </section>
  );
}
