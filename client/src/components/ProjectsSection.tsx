import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import AnimatedCard from "./AnimatedCard";
import ScrollReveal from "./ScrollReveal";
import ParallaxSection from "./ParallaxSection";
import AnimatedCirclePattern from "./AnimatedCirclePattern";
import { buttonHover, staggerContainer, staggerFast } from "@/lib/animations";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Palmprint Classification Project",
      description: "Developed a machine learning model to classify palmprint images for biometric identification. The system accurately distinguishes between individuals based on palmprint features.",
      tech: ["Python", "OpenCV", "Scikit-learn", "TensorFlow/Keras"],
      highlights: [
        "Built a robust image preprocessing pipeline (grayscale conversion, noise reduction, ROI extraction).",
        "Used deep learning (CNN) for high-accuracy classification.",
        "Evaluated model using metrics like accuracy, precision, recall, and confusion matrix.",
        "Potential use cases in security, access control, and identity verification."
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5 17.5 17.5"/><path d="M16 7A4.95 4.95 0 0 0 10 3.05"/><path d="M7.5 10a2.5 2.5 0 0 1 2.5-2.5"/><path d="M10 21v-7"/><path d="M14 14v7"/><path d="M4 21v-2a3 3 0 0 1 3-3h1"/><path d="M20 21v-2a3 3 0 0 0-3-3h-1"/></svg>
      )
    },
    {
      id: 2,
      title: "AI Strategy Recommendation Model (Saudi Arabia)",
      description: "Created an intelligent recommendation system to help businesses in Saudi Arabia identify optimal AI strategies based on industry, company size, and digital maturity.",
      tech: ["Python", "Scikit-learn", "Pandas", "Decision Trees", "NLP", "Streamlit"],
      highlights: [
        "Collected and processed data on company needs, regulations, and tech readiness.",
        "Used decision tree models and expert systems to generate custom AI strategies.",
        "Interface built using Streamlit for ease of access by non-technical users.",
        "Project supports Saudi Arabia's Vision 2030 in digital transformation."
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 21h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"/><path d="M9 10h6"/><path d="M12 7v6"/><path d="M10 16h4"/></svg>
      )
    },
    {
      id: 3,
      title: "Arabic Question-Answering System Using AI",
      description: "Built an NLP-based system that answers user queries based on Arabic documents using advanced language models.",
      tech: ["Python", "FastAPI", "Hugging Face Transformers", "Streamlit"],
      highlights: [
        "Used pre-trained transformer models (AraBERT or similar) for understanding Arabic.",
        "Integrated with FastAPI for backend and Streamlit for frontend.",
        "Supports document upload and real-time Q&A based on user queries.",
        "Designed for academic, governmental, and customer support applications."
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="6" height="14" x="4" y="5" rx="2"/><rect width="6" height="10" x="14" y="7" rx="2"/><path d="M17 22v-5"/><path d="M7 22v-3"/><path d="M17 7V2"/><path d="M7 5V2"/></svg>
      )
    },
    {
      id: 4,
      title: "Deep Learning for Portfolio Optimization",
      description: "Implemented a deep learning model that optimizes portfolio allocation by directly maximizing Sharpe ratio, bypassing traditional return forecasting.",
      tech: ["Python", "TensorFlow/Keras", "NumPy", "Pandas", "Matplotlib"],
      highlights: [
        "Used neural networks to adjust asset weights dynamically based on historical price data.",
        "Trained and evaluated model performance on ETFs and stock indexes.",
        "Compared against traditional portfolio strategies (mean-variance optimization).",
        "Showed promise in adaptive asset allocation and risk-adjusted return improvement."
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m18.5 3-8.3 8.3c-.4.4-.4 1 0 1.4l8.3 8.3"/></svg>
      )
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatedCirclePattern 
          className="left-0 bottom-0 opacity-70" 
          size={400} 
          animationType="both" 
          density="low"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal 
          className="text-center max-w-3xl mx-auto mb-16"
          animation="slide-up"
        >
          <AnimatedText
            text="Our Portfolio"
            className="text-primary text-sm font-medium mb-2"
            animationType="character"
            speed="fast"
          />
          
          <AnimatedText 
            text="Recent AI Projects"
            className="text-4xl font-bold mb-4"
            animationType="word"
            speed="medium"
            delay={0.2}
          />
          
          <p className="text-muted-foreground">
            Explore our diverse portfolio of AI projects led by <span className="text-primary font-medium">Abdelrahman Emad</span>, 
            showcasing our expertise in machine learning, natural language processing, and deep learning.
          </p>
        </ScrollReveal>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              animation={index % 2 === 0 ? "slide-right" : "slide-left"}
              delay={index * 0.1}
              threshold={0.1}
              className="h-full"
            >
              <AnimatedCard
                className="h-full"
                glowEffect={true}
                glowColor="rgba(139, 92, 246, 0.3)"
                tiltEffect={true}
                hoverScale={true}
              >
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-indigo-600/20 flex items-center justify-center mr-4"
                      animate={{ 
                        boxShadow: ["0 0 5px rgba(139, 92, 246, 0.2)", "0 0 15px rgba(139, 92, 246, 0.4)", "0 0 5px rgba(139, 92, 246, 0.2)"] 
                      }}
                      transition={{ 
                        duration: 3, 
                        ease: "easeInOut", 
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      <motion.div 
                        className="text-primary"
                        animate={{ rotate: [0, 360] }}
                        transition={{ 
                          duration: 20, 
                          ease: "linear", 
                          repeat: Infinity 
                        }}
                      >
                        {project.icon}
                      </motion.div>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    variants={staggerFast}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    {project.tech.map((tech, i) => (
                      <motion.div
                        key={i}
                        variants={{
                          initial: { opacity: 0, scale: 0.8 },
                          animate: { 
                            opacity: 1, 
                            scale: 1,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                              delay: i * 0.05
                            }
                          }
                        }}
                      >
                        <Badge variant="outline" className="bg-muted/30">{tech}</Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Key Highlights:</h4>
                    <motion.ul 
                      className="space-y-2"
                      variants={staggerFast}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      {project.highlights.map((highlight, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start"
                          variants={{
                            initial: { opacity: 0, x: -10 },
                            animate: { 
                              opacity: 1, 
                              x: 0,
                              transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                                delay: i * 0.1
                              }
                            }
                          }}
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              delay: 0.3 + (i * 0.1),
                              type: "spring",
                              stiffness: 500,
                              damping: 20
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                          </motion.div>
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  <div className="mt-6">
                    <motion.div
                      variants={buttonHover}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Button variant="link" className="text-primary text-sm p-0 h-auto flex items-center gap-2">
                        View details
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </motion.div>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}