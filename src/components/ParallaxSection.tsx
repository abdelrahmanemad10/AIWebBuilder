import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  offset?: [number, number]; // [start, end] in viewport percentage (0-1)
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.3,
  direction = "up",
  offset = [0, 1]
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Get scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${offset[0] * 100}%`, `end ${offset[1] * 100}%`]
  });

  // Map the scroll progress to the transformation values
  const getMotionValue = (): MotionValue<number> => {
    const distance = 100 * speed; // The distance to travel
    
    switch (direction) {
      case "up":
        return useTransform(scrollYProgress, [0, 1], [distance, -distance]);
      case "down":
        return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
      case "left":
        return useTransform(scrollYProgress, [0, 1], [distance, -distance]);
      case "right":
        return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
      default:
        return useTransform(scrollYProgress, [0, 1], [0, 0]);
    }
  };

  // Y translation for vertical directions
  const y = direction === "up" || direction === "down" ? getMotionValue() : 0;
  
  // X translation for horizontal directions
  const x = direction === "left" || direction === "right" ? getMotionValue() : 0;

  return (
    <div ref={ref} className={`${className} overflow-hidden`}>
      <motion.div
        style={{ y, x }}
        transition={{ type: "spring", stiffness: 400, damping: 90 }}
      >
        {children}
      </motion.div>
    </div>
  );
}