import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  animationType?: "character" | "word" | "line" | "fade";
  speed?: "slow" | "medium" | "fast";
}

export default function AnimatedText({
  text,
  className = "",
  once = true,
  delay = 0,
  animationType = "word",
  speed = "medium"
}: AnimatedTextProps) {
  // Split text based on the animation type
  const items = splitText(text, animationType);
  
  // Calculate delays based on speed
  const staggerDuration = {
    slow: 0.07,
    medium: 0.04,
    fast: 0.02
  }[speed];
  
  // Animation variants based on the type
  const container = {
    hidden: { opacity: animationType === "fade" ? 0 : 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: staggerDuration,
        delayChildren: delay,
        when: "beforeChildren"
      }
    })
  };

  // Animation for each individual element (character, word, line)
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: animationType === "line" ? 20 : 10,
      x: animationType === "character" ? 5 : 0
    }
  };

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial="hidden"
      variants={container}
      animate="visible"
      viewport={once ? { once: true } : undefined}
    >
      {/* Render animation based on the split text */}
      {items.map((item, i) => (
        <motion.span
          key={i}
          variants={child}
          className={cn(
            animationType === "character" && "inline-block",
            animationType === "word" && "inline-block mr-[0.25em]",
            animationType === "line" && "block"
          )}
        >
          {item}
        </motion.span>
      ))}
    </motion.div>
  );
}

function splitText(text: string, type: "character" | "word" | "line" | "fade"): string[] {
  if (type === "fade") return [text];
  if (type === "character") return text.split("");
  if (type === "word") return text.split(" ");
  if (type === "line") return text.split(/\r?\n|\r|\n/g);
  return [text];
}