import { useState, useRef, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { hoverCard } from "@/lib/animations";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  tiltEffect?: boolean;
  glowEffect?: boolean;
  hoverScale?: boolean;
  borderEffect?: boolean;
}

export default function AnimatedCard({
  children,
  className = "",
  glowColor = "rgba(139, 92, 246, 0.4)", // Default purple glow
  tiltEffect = true,
  glowEffect = true,
  hoverScale = true,
  borderEffect = false
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEffect || !cardRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // Calculate rotation based on mouse position
    const rotateY = ((x - width / 2) / width) * 10; // Max 10 degrees
    const rotateX = -((y - height / 2) / height) * 10; // Max 10 degrees
    
    // For glow effect position
    setMouseX(x / width);
    setMouseY(y / height);
    
    // Update rotation state
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const resetStyles = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  // Variants for different animation behaviors
  const variants = {
    initial: {
      scale: 1,
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)"
    },
    hover: {
      scale: hoverScale ? 1.02 : 1,
      boxShadow: glowEffect 
        ? `0px 10px 25px ${glowColor}`
        : "0px 15px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative rounded-xl overflow-hidden transition-all duration-300",
        borderEffect && "border border-border p-0.5",
        className
      )}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetStyles}
      variants={variants}
      initial="initial"
      whileHover="hover"
    >
      {/* Glow effect that follows mouse */}
      {glowEffect && isHovered && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-70 rounded-xl"
          style={{
            background: `radial-gradient(circle at ${mouseX * 100}% ${mouseY * 100}%, ${glowColor} 0%, transparent 60%)`,
          }}
        />
      )}

      {/* Animated border effect */}
      {borderEffect && isHovered && (
        <motion.div 
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)`,
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 0%', '100% 100%', '0% 100%', '0% 0%'],
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity
          }}
        />
      )}

      {/* Main content */}
      <motion.div className="relative bg-card h-full w-full rounded-xl overflow-hidden">
        {children}
      </motion.div>
    </motion.div>
  );
}