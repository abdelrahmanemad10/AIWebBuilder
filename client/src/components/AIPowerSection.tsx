import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AIPowerSection() {
  return (
    <section className="py-16 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.div 
            className="w-full lg:w-1/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-card/70 rounded-xl p-4 border border-border">
              <div className="flex items-center py-2 px-4 rounded-md bg-primary text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9h2"/><path d="M20 9h2"/><path d="M17.8 11.8 19 13"/><path d="M15 9h.01"/><path d="M17 17H8a5 5 0 0 1-5-5c0-2.8 2.2-5 5-5h9a5 5 0 0 1 5 5c0 .6-.1 1.2-.3 1.7"/></svg>
                <span>AI Generate</span>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-center py-2 px-4 rounded-md hover:bg-muted transition-all cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-muted-foreground"><path d="M3 3v18h18"/><path d="m18.5 3-8.3 8.3c-.4.4-.4 1 0 1.4l8.3 8.3"/></svg>
                  <span>Dashboard</span>
                </li>
                <li className="flex items-center py-2 px-4 rounded-md hover:bg-muted transition-all cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-muted-foreground"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                  <span>AI Networks</span>
                </li>
                <li className="flex items-center py-2 px-4 rounded-md hover:bg-muted transition-all cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-muted-foreground"><circle cx="12" cy="12" r="10"/><path d="M9.17 14.83a4 4 0 1 0 0-5.66"/><line x1="12" x2="12" y1="7" y2="17"/></svg>
                  <span>Prompts</span>
                </li>
                <li className="flex items-center py-2 px-4 rounded-md hover:bg-muted transition-all cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-muted-foreground"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="19" x2="5" y1="12" y2="12"/></svg>
                  <span>Workflows</span>
                </li>
                <li className="flex items-center py-2 px-4 rounded-md hover:bg-muted transition-all cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-muted-foreground"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/><path d="M2 7h20"/><path d="M5 17a3 3 0 0 0 4-3V7"/><path d="M19 17a3 3 0 0 1-4-3V7"/><path d="M12 15a3 3 0 0 1-3-3V7"/><path d="M15 7v5"/></svg>
                  <span>Analytics</span>
                </li>
                <li className="flex items-center py-2 px-4 rounded-md hover:bg-muted transition-all cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-muted-foreground"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                  <span>Settings</span>
                </li>
              </ul>
              
              <div className="mt-8 p-4 border border-dashed border-border rounded-lg text-center">
                <div className="w-8 h-8 rounded-full bg-card mx-auto flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </div>
                <p className="text-sm text-muted-foreground">Create new workspace</p>
              </div>
            </div>
          </motion.div>
          
          {/* Main content */}
          <motion.div 
            className="w-full lg:w-4/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-border bg-card/70">
              {/* Tabs */}
              <Tabs defaultValue="active">
                <div className="flex border-b border-border px-4">
                  <TabsList className="h-auto bg-transparent border-b-0">
                    <TabsTrigger value="active" className="px-5 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none">
                      Active
                    </TabsTrigger>
                    <TabsTrigger value="design" className="px-5 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none">
                      Design
                    </TabsTrigger>
                    <TabsTrigger value="code" className="px-5 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none">
                      Code
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                {/* Content area */}
                <TabsContent value="active" className="p-6 mt-0">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Main article */}
                    <div className="w-full md:w-2/3">
                      <h2 className="text-2xl font-bold mb-2">The Potential of AI Power</h2>
                      <p className="text-muted-foreground mb-6">
                        Unlocking the next generation of AI capabilities with our innovative platform. Our solution combines 
                        advanced neural networks and reinforcement learning to create powerful, adaptive AI tools that evolve to meet your needs.
                      </p>
                      
                      {/* AI Visualization */}
                      <div className="rounded-xl overflow-hidden relative h-72 mb-8 group">
                        <svg viewBox="0 0 800 400" className="w-full h-full bg-card/30">
                          <defs>
                            <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.7)" />
                              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.7)" />
                            </linearGradient>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                              <feGaussianBlur stdDeviation="8" result="blur" />
                              <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                          </defs>
                          <g filter="url(#glow)">
                            <path d="M400,100 C500,50 600,150 550,250 C500,350 300,350 250,250 C200,150 300,50 400,100" fill="url(#brainGradient)" />
                            <circle cx="400" cy="200" r="100" fill="none" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2" />
                            <circle cx="350" cy="150" r="20" fill="rgba(139, 92, 246, 0.8)" />
                            <circle cx="450" cy="250" r="15" fill="rgba(59, 130, 246, 0.8)" />
                            <path d="M350,150 L450,250" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2" />
                            <path d="M400,100 L400,300" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" strokeDasharray="5,5" />
                            <path d="M250,200 L550,200" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" strokeDasharray="5,5" />
                          </g>
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                          <h3 className="text-white text-xl font-bold">Neural Network Architecture</h3>
                          <p className="text-gray-300">Advanced deep learning algorithms working together</p>
                        </div>
                        <div className="absolute inset-0 border border-primary/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      
                      {/* Feature tags */}
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-muted/30 flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m18.5 3-8.3 8.3c-.4.4-.4 1 0 1.4l8.3 8.3"/></svg>
                          Visual Hierarchy
                        </Badge>
                        <Badge variant="outline" className="bg-muted/30 flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.17 14.83a4 4 0 1 0 0-5.66"/><line x1="12" x2="12" y1="7" y2="17"/></svg>
                          AI Powered Insights
                        </Badge>
                        <Badge variant="outline" className="bg-muted/30 flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                          Realtime Synergy
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Sidebar features */}
                    <div className="w-full md:w-1/3">
                      {/* Prompt section */}
                      <Card className="mb-4 bg-muted">
                        <CardContent className="p-4">
                          <h4 className="text-foreground font-medium flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
                            Prompt
                          </h4>
                          <p className="text-muted-foreground text-sm mb-3">
                            Create an abstract visualization of neural networks with futuristic interface showing complex data relationships.
                          </p>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-primary text-white">Generate</Button>
                            <Button variant="outline" size="sm">Modify</Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      {/* Parameters */}
                      <div className="space-y-3">
                        <Card className="bg-muted">
                          <CardContent className="p-3">
                            <div className="flex justify-between">
                              <span className="text-sm text-foreground">Complexity</span>
                              <span className="text-sm text-primary">67%</span>
                            </div>
                            <Progress value={67} className="mt-1 h-1.5 bg-card" />
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-muted">
                          <CardContent className="p-3">
                            <div className="flex justify-between">
                              <span className="text-sm text-foreground">Creativity</span>
                              <span className="text-sm text-primary">82%</span>
                            </div>
                            <Progress value={82} className="mt-1 h-1.5 bg-card" />
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-muted">
                          <CardContent className="p-3">
                            <div className="flex justify-between">
                              <span className="text-sm text-foreground">Precision</span>
                              <span className="text-sm text-primary">91%</span>
                            </div>
                            <Progress value={91} className="mt-1 h-1.5 bg-card" />
                          </CardContent>
                        </Card>
                      </div>
                      
                      {/* Stats */}
                      <div className="mt-6">
                        <h4 className="text-foreground font-medium mb-3">Predicted Results</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          <Card className="bg-muted">
                            <CardContent className="p-3">
                              <div className="h-16 flex flex-col items-center justify-center">
                                <div className="text-lg font-bold text-foreground">76%</div>
                                <div className="text-xs text-muted-foreground">Accuracy</div>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card className="bg-muted">
                            <CardContent className="p-3">
                              <div className="h-16 flex flex-col items-center justify-center">
                                <div className="text-lg font-bold text-foreground">92%</div>
                                <div className="text-xs text-muted-foreground">Speed</div>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card className="bg-muted">
                            <CardContent className="p-3">
                              <div className="h-16 flex flex-col items-center justify-center">
                                <div className="text-lg font-bold text-foreground">85%</div>
                                <div className="text-xs text-muted-foreground">Quality</div>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card className="bg-muted">
                            <CardContent className="p-3">
                              <div className="h-16 flex flex-col items-center justify-center">
                                <div className="text-lg font-bold text-foreground">69%</div>
                                <div className="text-xs text-muted-foreground">Recall</div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="design" className="p-6 mt-0">
                  <div className="h-64 flex items-center justify-center">
                    <p className="text-muted-foreground">Design tools and options will appear here</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="code" className="p-6 mt-0">
                  <div className="h-64 flex items-center justify-center">
                    <p className="text-muted-foreground">Code editor and options will appear here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
            
            {/* Feature tags */}
            <div className="flex flex-wrap gap-3 mt-4">
              <Button variant="outline" className="rounded-full border-border bg-card/70 text-sm flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 17h8"/><path d="M12 12V7"/><circle cx="12" cy="12" r="1"/></svg>
                Visual Hierarchy
              </Button>
              <Button variant="outline" className="rounded-full border-border bg-card/70 text-sm flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.17 14.83a4 4 0 1 0 0-5.66"/><line x1="12" x2="12" y1="7" y2="17"/></svg>
                AI Powered Insights
              </Button>
              <Button variant="outline" className="rounded-full border-border bg-card/70 text-sm flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                Adaptive Strategy
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
