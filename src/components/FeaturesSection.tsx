import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Artistry at Your Fingertips</h2>
          <p className="text-muted-foreground">
            Discover the unparalleled capabilities of our AI solution platform, designed to transform your workflow and elevate your creative potential.
          </p>
          
          {/* Feature filter tabs */}
          <div className="flex flex-wrap justify-center mt-8 gap-3">
            <Button className="rounded-full">
              Features
            </Button>
            <Button variant="outline" className="rounded-full border-border bg-card/70 px-3 min-w-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9h2"/><path d="M20 9h2"/><path d="M17.8 11.8 19 13"/><path d="M15 9h.01"/><path d="M17 17H8a5 5 0 0 1-5-5c0-2.8 2.2-5 5-5h9a5 5 0 0 1 5 5c0 .6-.1 1.2-.3 1.7"/></svg>
            </Button>
            <Button variant="outline" className="rounded-full border-border bg-card/70 px-3 min-w-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m18.5 3-8.3 8.3c-.4.4-.4 1 0 1.4l8.3 8.3"/></svg>
            </Button>
            <Button variant="outline" className="rounded-full border-border bg-card/70 px-3 min-w-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="19" x2="5" y1="12" y2="12"/></svg>
            </Button>
            <Button variant="outline" className="rounded-full border-border bg-card/70 flex items-center gap-1">
              See all
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </Button>
          </div>
          
          <Button variant="outline" className="rounded-full border-border bg-card/70 mt-4 flex items-center gap-1">
            AI Assistant
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </Button>
        </motion.div>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature card 1 */}
          <motion.div 
            className="bg-card/70 rounded-xl p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">AI Powered Collaboration</h3>
                <p className="text-muted-foreground text-sm">Smart workflows that supercharge team productivity with AI-driven collaborative tools</p>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden h-28 group mb-4">
              <svg viewBox="0 0 400 200" className="w-full h-full bg-card/20">
                <defs>
                  <linearGradient id="colabGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(79, 70, 229, 0.6)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.6)" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="50" fill="url(#colabGradient)" opacity="0.7" />
                <circle cx="130" cy="100" r="50" fill="url(#colabGradient)" opacity="0.7" />
                <circle cx="160" cy="100" r="50" fill="url(#colabGradient)" opacity="0.7" />
                <path d="M100,100 L200,100 L250,150" stroke="white" strokeWidth="2" fill="none" />
                <path d="M150,100 L250,100 L300,50" stroke="white" strokeWidth="2" fill="none" />
                <circle cx="250" cy="150" r="10" fill="white" />
                <circle cx="300" cy="50" r="10" fill="white" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-3">
                <div className="flex items-center">
                  <Avatar className="w-7 h-7 border-2 border-white">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-7 h-7 border-2 border-white -ml-2">
                    <AvatarFallback>SL</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-7 h-7 border-2 border-white -ml-2">
                    <AvatarFallback>RK</AvatarFallback>
                  </Avatar>
                  <Badge className="ml-1 bg-primary text-white h-7 w-7 flex items-center justify-center rounded-full text-xs p-0">
                    +5
                  </Badge>
                </div>
              </div>
            </div>
            
            <Button variant="link" className="text-primary text-sm p-0 h-auto hover:text-primary/80 flex items-center gap-2">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Button>
          </motion.div>
          
          {/* Feature card 2 */}
          <motion.div 
            className="bg-card/70 rounded-xl p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <span className="text-6xl font-bold">
                  <span className="text-primary">12</span>
                  <span className="text-muted-foreground mx-2">/</span>
                  <span className="text-foreground">30</span>
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Effortless Scheduling</h3>
              <p className="text-muted-foreground text-sm px-4">AI-optimized scheduling that learns from your patterns to maximize productivity</p>
              
              <div className="mt-6 w-full">
                <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{width: "40%"}}></div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Feature card 3 */}
          <motion.div 
            className="bg-card/70 rounded-xl p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold">Extension</h3>
            </div>
            
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"/></svg>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">AI Extension</h3>
              <p className="text-muted-foreground text-sm mb-6">Expand your capabilities with powerful customizable features</p>
              
              <Button variant="outline" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                Add Extension
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
