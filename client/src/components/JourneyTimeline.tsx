import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import ScrollReveal from "./ScrollReveal";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function JourneyTimeline() {
  const milestones = [
    {
      year: "2018",
      title: "Academic Foundations",
      description: "Started exploring AI concepts during university and completed first major research projects",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
      ),
      badge: "Academic Journey"
    },
    {
      year: "2019",
      title: "DataCamp Certifications",
      description: "Completed specialized training in machine learning, data science, and deep learning fundamentals",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 12H16c-.7 2.8-3.5 5-7 5a8 8 0 0 1-8-8 8 8 0 0 1 8-8c3.5 0 6.3 2.2 7 5h5.5"/><path d="M18 9l3 3-3 3"/></svg>
      ),
      badge: "Skill Building"
    },
    {
      year: "2020",
      title: "First AI Model Deployed",
      description: "Implemented initial machine learning solutions for real-world business problems",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/><path d="M2 7h20"/><path d="M16 3v4"/><circle cx="12" cy="14" r="4"/><path d="M12 12v4"/></svg>
      ),
      badge: "First Deployment"
    },
    {
      year: "2021",
      title: "Published IEEE Research Papers",
      description: "Research on Arabic Medical Document Classification and Arabic Question-Answering Systems published in IEEE journals",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/><path d="M12 3v12"/><circle cx="12" cy="20" r="1"/></svg>
      ),
      badge: "Research Publication"
    },
    {
      year: "2022",
      title: "Freelance AI Projects",
      description: "Started developing custom AI solutions for clients across various industries",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 7V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2"/><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
      ),
      badge: "Client Work"
    },
    {
      year: "2023",
      title: "Launch of Holoul",
      description: "Founded Holoul to deliver comprehensive AI solutions tailored to business needs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
      ),
      badge: "Launch"
    }
  ];

  return (
    <section id="journey" className="py-24 bg-gray-50 dark:bg-background/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-[20%] w-56 h-56 bg-primary/5 blur-[80px] rounded-full"></div>
        <div className="absolute -right-20 bottom-[10%] w-72 h-72 bg-primary/5 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="slide-up" className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText
            text="My Journey"
            className="text-primary font-medium"
            animationType="character"
            speed="fast"
          />
          
          <AnimatedText
            text="From Concepts to Real-World AI"
            className="text-4xl font-bold mt-2 mb-4"
            animationType="word"
            speed="medium"
            delay={0.3}
          />
          
          <p className="text-muted-foreground">
            My path in AI has been driven by a constant pursuit of knowledge and a passion for creating solutions that make a real impact. Here are the key milestones in my journey.
          </p>
        </ScrollReveal>
        
        {/* Timeline */}
        <motion.div 
          className="max-w-4xl mx-auto mt-16 relative"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Vertical line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/50 to-primary/10"></div>
          
          {milestones.map((milestone, index) => (
            <ScrollReveal
              key={index}
              className="mb-16 last:mb-0 relative"
              animation={index % 2 === 0 ? "slide-right" : "slide-left"}
              delay={index * 0.1}
            >
              <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Content */}
                <motion.div 
                  className="w-[calc(50%-32px)] bg-card rounded-lg p-6 border border-border shadow-lg"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                    <div className="flex-1">
                      <div className="inline-block bg-primary/10 text-primary text-xs font-semibold rounded-full px-3 py-1 mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Center circle with icon */}
                <div className="flex-shrink-0 relative">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-500 text-white flex items-center justify-center shadow-lg z-10 relative"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.2 + (index * 0.1) 
                    }}
                  >
                    {milestone.icon}
                    
                    {/* Badge */}
                    <motion.div 
                      className="absolute -bottom-2 -right-2 bg-white text-primary text-xs font-semibold rounded-full px-2 py-1 shadow-md border border-primary/20"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                    >
                      {milestone.badge}
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Empty div for layout */}
                <div className="w-[calc(50%-32px)]"></div>
              </div>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}