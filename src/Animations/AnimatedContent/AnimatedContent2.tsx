import { useRef, ReactNode } from "react";
import {
  motion,
  useInView,
} from "framer-motion";
import type { Variants } from "framer-motion";

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  transition?: {
    type?: string;
    stiffness?: number;
    damping?: number;
    mass?: number;
    duration?: number;
  };
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  once?: boolean;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  transition = { type: "spring", stiffness: 50, damping: 25 },
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    amount: threshold,
    once,
  });

  // Get transform values based on direction and reverse props
  const getTransformValue = () => {
    const axis = direction === "vertical" ? "y" : "x";
    const value = reverse ? -distance : distance;
    return { [axis]: value };
  };

  // Create variants for animation
  const variants: Variants = {
    hidden: {
      ...getTransformValue(),
      opacity: animateOpacity ? initialOpacity : 1,
      scale,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        ...transition,
        delay: delay / 1000, // Convert ms to seconds for framer-motion
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
