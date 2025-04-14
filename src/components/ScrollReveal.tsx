import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { scrollReveal } from "@/lib/animations";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale" | "custom";
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  variants?: any;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "slide-up",
  delay = 0,
  duration = 0.8,
  threshold = 0.2,
  once = true,
  variants
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  // Define animation variants based on the animation type
  const getVariants = () => {
    if (variants) return variants;

    switch (animation) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { duration, delay, ease: "easeOut" }
          }
        };
      case "slide-up":
        return {
          hidden: { y: 50, opacity: 0 },
          visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
              type: "spring", 
              bounce: 0.3,
              duration, 
              delay,
            }
          }
        };
      case "slide-down":
        return {
          hidden: { y: -50, opacity: 0 },
          visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
              type: "spring", 
              bounce: 0.3,
              duration, 
              delay 
            }
          }
        };
      case "slide-left":
        return {
          hidden: { x: 50, opacity: 0 },
          visible: { 
            x: 0, 
            opacity: 1,
            transition: { 
              type: "spring", 
              bounce: 0.3,
              duration, 
              delay 
            }
          }
        };
      case "slide-right":
        return {
          hidden: { x: -50, opacity: 0 },
          visible: { 
            x: 0, 
            opacity: 1,
            transition: { 
              type: "spring", 
              bounce: 0.3,
              duration, 
              delay 
            }
          }
        };
      case "scale":
        return {
          hidden: { scale: 0.8, opacity: 0 },
          visible: { 
            scale: 1, 
            opacity: 1,
            transition: { 
              type: "spring", 
              bounce: 0.4,
              duration, 
              delay 
            }
          }
        };
      default:
        return scrollReveal;
    }
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
}