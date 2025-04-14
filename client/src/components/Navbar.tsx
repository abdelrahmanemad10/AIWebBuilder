import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onGetStarted: () => void;
}

export default function Navbar({ onGetStarted }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 
      ${isScrolled ? "bg-background/90 shadow-md backdrop-blur-md" : "bg-transparent"}`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="ml-2 text-white font-bold text-xl">Altus</span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex ml-10 space-x-8">
              <a href="#" className="text-white hover:text-primary/90 font-medium transition-all">About</a>
              <a href="#features" className="text-white hover:text-primary/90 font-medium transition-all">Features</a>
              <a href="#pricing" className="text-white hover:text-primary/90 font-medium transition-all">Pricing</a>
              <a href="#" className="text-white hover:text-primary/90 font-medium transition-all">Blog</a>
            </div>
          </div>
          
          <div className="flex items-center">
            <Button 
              onClick={onGetStarted}
              className="bg-gradient-to-r from-primary to-blue-500 text-white hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300"
            >
              Try for free
            </Button>
            <button 
              className="md:hidden ml-4 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-background/95 backdrop-blur-md rounded-lg p-4 animate-in fade-in">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-white hover:text-primary font-medium py-2 transition-all">About</a>
              <a href="#features" className="text-white hover:text-primary font-medium py-2 transition-all">Features</a>
              <a href="#pricing" className="text-white hover:text-primary font-medium py-2 transition-all">Pricing</a>
              <a href="#" className="text-white hover:text-primary font-medium py-2 transition-all">Blog</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
