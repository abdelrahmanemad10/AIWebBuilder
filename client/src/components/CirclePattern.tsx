import { useEffect, useRef } from "react";

interface CirclePatternProps {
  className?: string;
}

export default function CirclePattern({ className = "" }: CirclePatternProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Clear any existing dots
    container.innerHTML = "";
    
    const radius = 200;
    const numberOfDots = 36;
    const angleIncrement = (2 * Math.PI) / numberOfDots;
    
    for (let ring = 0; ring < 5; ring++) {
      const currentRadius = radius - (ring * 35);
      
      for (let i = 0; i < numberOfDots; i++) {
        const angle = i * angleIncrement;
        const x = currentRadius * Math.cos(angle);
        const y = currentRadius * Math.sin(angle);
        
        const dot = document.createElement('div');
        dot.className = 'circle-dot';
        dot.style.left = `calc(50% + ${x}px)`;
        dot.style.top = `calc(50% + ${y}px)`;
        
        // Vary the sizes slightly
        const size = 6 + (Math.random() * 4);
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        
        // Add a delay based on the position
        const animationDelay = (i / numberOfDots) * 2;
        dot.style.animation = `pulse 3s ${animationDelay}s infinite`;
        
        // Vary the colors slightly
        const hue = 180 + (Math.random() * 40);
        const lightness = 50 + (Math.random() * 20);
        dot.style.backgroundColor = `hsl(${hue}, 80%, ${lightness}%)`;
        
        // Add opacity variation
        dot.style.opacity = (0.3 + (Math.random() * 0.7)).toString();
        
        container.appendChild(dot);
      }
    }
  }, []);
  
  return (
    <div ref={containerRef} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] z-0 ${className}`}>
      <style jsx>{`
        .circle-dot {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: hsl(187, 100%, 42%);
          transform-origin: center;
          opacity: 0.6;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
