import { motion } from "framer-motion";
import { rotateAnimation, breathe } from "@/lib/animations";

interface AnimatedCirclePatternProps {
  className?: string;
  color?: string;
  size?: number;
  density?: 'low' | 'medium' | 'high';
  animationType?: 'rotate' | 'breathe' | 'both' | 'none';
}

export default function AnimatedCirclePattern({ 
  className = "", 
  color = "primary", 
  size = 300,
  density = 'medium',
  animationType = 'both'
}: AnimatedCirclePatternProps) {
  // Determine how many circles to render based on density
  const circleCount = {
    low: 12,
    medium: 20,
    high: 30
  }[density];
  
  // Setup different positions and sizes for the circles
  const circles = Array.from({ length: circleCount }, (_, i) => {
    const circleSize = Math.random() * (size * 0.3) + (size * 0.1);
    const angle = (i / circleCount) * Math.PI * 2;
    const radius = (Math.random() * 0.4 + 0.3) * size; // Varies between 30% and 70% of size
    
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    // Use different opacities for visual interest
    const opacity = Math.random() * 0.5 + 0.1; // Between 0.1 and 0.6
    
    return { x, y, size: circleSize, opacity };
  });

  return (
    <div className={`absolute -z-10 pointer-events-none overflow-hidden ${className}`}
         style={{ width: size, height: size }}>
      {/* Outer container that can rotate */}
      <motion.div
        className="relative w-full h-full"
        initial="initial"
        animate="animate"
        variants={animationType === 'rotate' || animationType === 'both' ? rotateAnimation : undefined}
      >
        {/* Render all the circles */}
        {circles.map((circle, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full backdrop-blur-md"
            style={{
              left: '50%',
              top: '50%',
              width: circle.size,
              height: circle.size,
              marginLeft: -circle.size / 2,
              marginTop: -circle.size / 2,
              transform: `translate(${circle.x}px, ${circle.y}px)`,
              opacity: circle.opacity,
              backgroundColor: `rgba(139, 92, 246, 0.2)`, // Use primary color (indigo) with opacity
            }}
            initial="initial"
            animate="animate"
            variants={animationType === 'breathe' || animationType === 'both' ? breathe : undefined}
            // Add a random delay for each circle to create a wave effect
            transition={{ 
              delay: Math.random() * 4, 
              duration: 4 + Math.random() * 4, 
              repeat: Infinity 
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}