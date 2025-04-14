import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedText from "./AnimatedText";
import ScrollReveal from "./ScrollReveal";
import AnimatedCard from "./AnimatedCard";
import { fadeInUp, staggerContainer, buttonHover } from "@/lib/animations";

export default function InsightsSection() {
  const insights = [
    {
      title: "Enhancing Arabic Medical Document Classification Using Hybrid Deep Learning Approach",
      description: "My IEEE published research on a hybrid CNN-LSTM model that significantly improves the classification accuracy of Arabic medical documents.",
      date: "April 2024",
      category: "IEEE Publication",
      link: "https://ieeexplore.ieee.org/document/10620532",
      image: "bg-gradient-to-br from-indigo-500/10 to-blue-600/10",
      readTime: "Research Paper"
    },
    {
      title: "Deep Learning for Arabic Question Answering: Challenges and Opportunities",
      description: "My IEEE research exploring innovative approaches to developing Arabic language question-answering systems using deep learning.",
      date: "March 2024", 
      category: "IEEE Publication",
      link: "https://ieeexplore.ieee.org/document/10580486",
      image: "bg-gradient-to-br from-purple-500/10 to-indigo-600/10",
      readTime: "Research Paper"
    },
    {
      title: "Participation in International Conference of Arab Academy for Science and Maritime Transport",
      description: "My contribution to advancing research in AI and data science at the international academic conference, representing Damanhour University.",
      date: "2023",
      category: "Conference",
      link: "https://rosaelyoussef.com/1185695/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%AF%D9%85%D9%86%D9%87%D9%88%D8%B1-%D8%AA%D8%B4%D8%A7%D8%B1%D9%83-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D8%A4%D8%AA%D9%85%D8%B1-%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A-%D9%84%D9%84%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D9%84%D9%84%D8%B9%D9%84%D9%88%D9%85-%D9%88%D8%A7%D9%84%D9%86%D9%82%D9%84-%D8%A7%D9%84%D8%A8%D8%AD%D8%B1%D9%8A",
      image: "bg-gradient-to-br from-blue-500/10 to-cyan-600/10",
      readTime: "Conference Paper"
    }
  ];

  return (
    <section id="insights" className="py-24 bg-gray-50 dark:bg-background/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-[80px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="slide-up" className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText
            text="From Abdelrahman's Desk"
            className="text-primary font-medium"
            animationType="character"
            speed="fast"
          />
          
          <AnimatedText
            text="Insights & Perspectives"
            className="text-4xl font-bold mt-2 mb-4"
            animationType="word"
            speed="medium"
            delay={0.3}
          />
          
          <p className="text-muted-foreground">
            Sharing my thoughts on AI development, research findings, and the future of technology. 
            These articles reflect my perspectives and experiences in the field.
          </p>
        </ScrollReveal>
        
        {/* Insights Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {insights.map((insight, index) => (
            <ScrollReveal
              key={index}
              animation="slide-up"
              delay={index * 0.1}
              className="h-full"
            >
              <AnimatedCard
                className="h-full flex flex-col"
                glowEffect={true}
                glowColor="rgba(139, 92, 246, 0.2)"
                hoverScale={true}
              >
                {/* Image placeholder */}
                <div className={`w-full aspect-video rounded-t-xl ${insight.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-primary/90 text-white text-xs font-semibold rounded-full px-3 py-1">
                      {insight.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <span>{insight.date}</span>
                    <span className="mx-2">•</span>
                    <span>{insight.readTime}</span>
                  </div>
                  
                  <motion.h3 
                    className="text-xl font-bold mb-3"
                    variants={fadeInUp}
                  >
                    {insight.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-muted-foreground mb-6 flex-grow"
                    variants={fadeInUp}
                  >
                    {insight.description}
                  </motion.p>
                  
                  <motion.div
                    variants={buttonHover}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    className="mt-auto"
                  >
                    <a 
                      href={insight.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="no-underline"
                    >
                      <Button variant="link" className="p-0 h-auto text-primary flex items-center gap-2">
                        View publication
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
                    </a>
                  </motion.div>
                </div>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </motion.div>
        
        {/* View All Button */}
        <motion.div 
          className="mt-12 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            variants={buttonHover}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="inline-block"
          >
            <Button 
              className="bg-gradient-to-r from-primary to-blue-500 text-white"
            >
              View all insights
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}