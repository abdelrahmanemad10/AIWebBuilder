import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedText from "./AnimatedText";
import ScrollReveal from "./ScrollReveal";
import AnimatedCard from "./AnimatedCard";
import { fadeInUp, buttonHover } from "@/lib/animations";

export default function CollaborationSection() {
  return (
    <section id="collaborate" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 right-1/3 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <ScrollReveal animation="scale">
          <AnimatedCard
            className="bg-gradient-to-br from-primary/5 to-primary/20 p-8 sm:p-12 rounded-2xl border border-primary/20"
            glowEffect={true}
            glowColor="rgba(139, 92, 246, 0.2)"
            borderEffect={true}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div variants={fadeInUp}>
                  <AnimatedText
                    text="Let's Collaborate"
                    className="text-primary font-medium"
                    animationType="character"
                    speed="fast"
                  />
                  
                  <AnimatedText
                    text="Innovate with Abdelrahman"
                    className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
                    animationType="word"
                    speed="medium"
                    delay={0.3}
                  />
                </motion.div>
                
                <motion.div 
                  className="space-y-4"
                  variants={fadeInUp}
                >
                  <p className="text-muted-foreground">
                    Want to discuss how AI can transform your business? Interested in collaborating on a research project? 
                    Or simply curious about the work we do at Holoul?
                  </p>
                  <p className="text-muted-foreground">
                    I'm always open to interesting conversations and potential partnerships. 
                    Let's explore how we can work together to create innovative AI solutions.
                  </p>
                </motion.div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <motion.div
                    variants={buttonHover}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button 
                      className="bg-gradient-to-r from-primary to-blue-500 text-white"
                    >
                      Schedule a call
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M10 5H5v14h14v-5"/><path d="M20 5 5 20"/><path d="M16 5h4v4"/></svg>
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
                      className="border-primary/50 hover:border-primary"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
                      Send message
                    </Button>
                  </motion.div>
                </div>
              </div>
              
              <div className="relative">
                <ScrollReveal animation="slide-left">
                  <div className="relative">
                    {/* Connection visualization */}
                    <motion.div 
                      className="absolute w-full h-full rounded-xl"
                      animate={{ 
                        background: [
                          "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0) 70%)",
                          "radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0) 70%)",
                          "radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0) 70%)",
                          "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0) 70%)"
                        ]
                      }}
                      transition={{ 
                        duration: 10, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    />
                  
                    <div className="bg-card p-6 rounded-xl border border-border shadow-xl">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        </div>
                        <div>
                          <h3 className="font-bold">Direct Access</h3>
                          <p className="text-sm text-muted-foreground">Connect directly with Abdelrahman</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-4">
                        <li className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                          </div>
                          <span className="text-muted-foreground">Book a consultation call</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.2A2.2 2.2 0 0 1 7.2 5h9.6A2.2 2.2 0 0 1 19 7.2v9.6a2.2 2.2 0 0 1-2.2 2.2H7.2A2.2 2.2 0 0 1 5 16.8z"/><path d="M15 2v20"/><path d="M2 15h20"/><path d="M2 9h5"/><path d="M9 2h6"/></svg>
                          </div>
                          <span className="text-muted-foreground">Product demo sessions</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                          </div>
                          <span className="text-muted-foreground">Start a new project</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                          </div>
                          <span className="text-muted-foreground">Research collaboration</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </AnimatedCard>
        </ScrollReveal>
      </div>
    </section>
  );
}