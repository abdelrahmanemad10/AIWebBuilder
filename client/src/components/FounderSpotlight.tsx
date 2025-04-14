import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedText from "./AnimatedText";
import ScrollReveal from "./ScrollReveal";
import { fadeInUp, fadeInLeft, fadeInRight, buttonHover } from "@/lib/animations";

export default function FounderSpotlight() {
  const expertise = [
    "Machine Learning", 
    "Natural Language Processing", 
    "Deep Learning", 
    "Computer Vision", 
    "Data Science",
    "AI Strategy"
  ];
  
  const achievements = [
    "IEEE publication",
    "Academic research on corporate governance & IFRS",
    "Multiple AI projects including palmprint classification models",
    "AI Strategy consulting for businesses in Saudi Arabia"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Photo & Visual Element */}
          <ScrollReveal animation="slide-right" className="relative">
            <motion.div 
              className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-xl shadow-primary/10"
              variants={fadeInLeft}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {/* Placeholder for engineer's photo - replace with actual image */}
              <div className="relative aspect-[4/5] bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center">
                <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
                
                {/* Photo placeholder with AI-related design elements */}
                <div className="w-full h-full flex items-center justify-center relative">
                  {/* Animated rings around the engineer */}
                  <motion.div 
                    className="absolute w-[400px] h-[400px] rounded-full border border-primary/30"
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                    }}
                  />
                  
                  <motion.div 
                    className="absolute w-[300px] h-[300px] rounded-full border border-primary/20"
                    animate={{ 
                      rotate: -360
                    }}
                    transition={{ 
                      duration: 25, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  />
                  
                  <div className="bg-gradient-to-br from-primary/80 to-blue-500/80 text-white p-6 text-center rounded-full w-[220px] h-[220px] flex flex-col items-center justify-center shadow-lg">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 mx-auto"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"/><path d="m6 17 3.13-5.78c.53-.97.43-2.21-.26-3.08-.69-.87-1.93-1.11-2.9-.57L2 9.8"/><path d="M12 6.94a6.36 6.36 0 0 1 3.81-6.59 6.44 6.44 0 0 1 7.77 4.46 6.36 6.36 0 0 1-3.81 6.6 6.4 6.4 0 0 1-2.6.55H16"/></svg>
                      <h3 className="font-bold text-lg">Abdelrahman Emad</h3>
                      <p className="text-xs opacity-90">AI Engineer & Founder</p>
                    </motion.div>
                  </div>
                  
                  {/* Floating skill badges */}
                  {expertise.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="absolute rounded-full bg-white/90 text-primary text-xs font-medium px-3 py-1 shadow-md"
                      style={{
                        left: `${30 + Math.sin(index * (Math.PI * 2 / expertise.length)) * 40}%`,
                        top: `${30 + Math.cos(index * (Math.PI * 2 / expertise.length)) * 40}%`,
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        translateX: [0, Math.sin(index) * 10, 0],
                        translateY: [0, Math.cos(index) * 10, 0]
                      }}
                      transition={{
                        opacity: { duration: 0.4, delay: 0.2 + index * 0.1 },
                        translateX: { 
                          duration: 5 + index, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: index * 0.2
                        },
                        translateY: { 
                          duration: 5 + index, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: index * 0.2
                        }
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
          
          {/* Right side - Bio & Information */}
          <ScrollReveal animation="slide-left" className="flex flex-col justify-center">
            <div className="space-y-6">
              <motion.div variants={fadeInUp}>
                <AnimatedText
                  text="Meet the Engineer"
                  className="text-primary font-medium"
                  animationType="character"
                  speed="fast"
                />
                
                <AnimatedText
                  text="Behind the AI"
                  className="text-4xl font-bold mt-2"
                  animationType="word"
                  speed="medium"
                  delay={0.3}
                />
              </motion.div>
              
              <motion.div variants={fadeInUp} className="space-y-4 mt-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Hi, I'm Abdelrahman Emad</span>, a data scientist and AI engineer passionate about building solutions that bridge real-world problems and cutting-edge AI.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  With expertise spanning from machine learning to computer vision, I develop innovative AI systems that transform how businesses operate. My projects combine technical excellence with practical implementation, ensuring AI delivers tangible value.
                </p>
              </motion.div>
              
              <motion.div variants={fadeInRight} className="mt-8">
                <h3 className="text-lg font-semibold mb-3">Key Achievements:</h3>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 mt-1 flex-shrink-0"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="mt-8 flex space-x-4"
                variants={fadeInUp}
              >
                <motion.div
                  variants={buttonHover}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button 
                    className="bg-gradient-to-r from-primary to-blue-500 text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    Connect with me
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
                    View my research
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}