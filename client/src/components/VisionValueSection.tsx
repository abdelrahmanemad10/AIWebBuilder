import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import ScrollReveal from "./ScrollReveal";
import AnimatedCard from "./AnimatedCard";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function VisionValueSection() {
  const values = [
    {
      title: "Local Innovation",
      description: "AI should be accessible and solve local problems within the Gulf region, not just imported from global markets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
      )
    },
    {
      title: "Custom Solutions",
      description: "Holoul aims to empower Gulf businesses with custom-built AI tools — not just copy global models.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5c0-4-3-8-8-8-3 0-6 1-8 3-2-2-5-3-8-3-5 0-8 4-8 8Z"/><path d="M18 17c-4-3-6 0-9-2"/><path d="M6 17c3-4 7-2 10-2"/><path d="M12 19c0-2 2-2 2-4"/></svg>
      )
    },
    {
      title: "Ethical AI",
      description: "I believe in developing AI systems that are transparent, explainable, and respect user privacy and rights.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13a5 5 0 0 0 5 5h4a5 5 0 0 0 0-10H5"/><path d="M5.13 5.1A5 5 0 0 1 10 9h4a5 5 0 0 1 0 10H5"/></svg>
      )
    },
    {
      title: "Human-Centered Design",
      description: "Every AI solution we build places humans at the center, ensuring technology serves people, not the other way around.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
      )
    },
    {
      title: "Continuous Learning",
      description: "I'm committed to staying at the cutting edge of AI research and applying new advances to solve real-world problems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="17" cy="17" r="3"/><path d="M10.7 20.7 17 17l-2.3-6.3"/><circle cx="7" cy="7" r="3"/><path d="M13.3 3.3 7 7l2.3 6.3"/></svg>
      )
    },
    {
      title: "Collaborative Innovation",
      description: "The best AI solutions emerge when we work closely with clients to understand their unique challenges and goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      )
    }
  ];

  const quote = {
    text: "At Holoul, we're not just building AI for the sake of it. We're creating solutions that bridge the gap between cutting-edge technology and the specific needs of businesses in our region.",
    author: "Abdelrahman Emad",
    role: "Founder & AI Engineer"
  };

  return (
    <section id="vision" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="slide-up" className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText
            text="Why Holoul Exists"
            className="text-primary font-medium"
            animationType="character"
            speed="fast"
          />
          
          <AnimatedText
            text="Our Vision & Values"
            className="text-4xl font-bold mt-2 mb-4"
            animationType="word"
            speed="medium"
            delay={0.3}
          />
          
          <p className="text-muted-foreground">
            Holoul was founded on a set of core principles that guide everything we do. 
            These values shape our approach to AI development and our relationships with clients.
          </p>
        </ScrollReveal>
        
        {/* Quote Card */}
        <ScrollReveal 
          animation="scale"
          className="max-w-4xl mx-auto mb-20"
        >
          <AnimatedCard
            className="bg-primary text-white p-8 rounded-xl"
            glowEffect={true}
            glowColor="rgba(139, 92, 246, 0.4)"
            borderEffect={true}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
              </div>
              <div>
                <p className="text-xl md:text-2xl italic font-light leading-relaxed">
                  {quote.text}
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-8 h-0.5 bg-white/60 mr-3"></div>
                  <div>
                    <p className="font-semibold">{quote.author}</p>
                    <p className="text-sm opacity-80">{quote.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </ScrollReveal>
        
        {/* Values Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value, index) => (
            <ScrollReveal
              key={index}
              animation="slide-up"
              delay={index * 0.1}
              className="h-full"
            >
              <AnimatedCard
                className="h-full p-6 border border-border"
                glowEffect={true}
                glowColor="rgba(139, 92, 246, 0.2)"
                hoverScale={true}
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
                  variants={fadeInUp}
                >
                  {value.icon}
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold mb-2"
                  variants={fadeInUp}
                >
                  {value.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground"
                  variants={fadeInUp}
                >
                  {value.description}
                </motion.p>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}