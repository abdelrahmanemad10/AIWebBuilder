import { Variants } from "framer-motion";

// Fade in animation from bottom
export const fadeInUp: Variants = {
  initial: {
    y: 20,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Fade in animation from left
export const fadeInLeft: Variants = {
  initial: {
    x: -20,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Staggered children animation
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// Glow pulse animation
export const glowPulse: Variants = {
  initial: {
    boxShadow: "0 0 5px rgba(139, 92, 246, 0.2)"
  },
  animate: {
    boxShadow: ["0 0 5px rgba(139, 92, 246, 0.2)", "0 0 20px rgba(139, 92, 246, 0.6)", "0 0 5px rgba(139, 92, 246, 0.2)"],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};

// Float animation for hovering elements
export const float: Variants = {
  initial: {
    y: 0
  },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};
