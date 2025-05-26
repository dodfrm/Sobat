import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"; // Import SplitText

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerAmount?: number;
  startTrigger?: string;
  endTrigger?: string;
}

const TextReveal: React.FC<TextRevealProps> = ({
  children,
  className = "",
  delay = 0.5,
  duration = 0.6, 
  staggerAmount = 0.02, 
  startTrigger = "top 80%", 
  endTrigger = "bottom 0%",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const splitTextRef = useRef<SplitText | null>(null); // To store the SplitText instance

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Kill existing animation and revert SplitText if present
    if (splitTextRef.current) {
      splitTextRef.current.revert();
    }

    // Create a new SplitText instance
    // Note: You might want to wrap `children` in a span/div within the component's return
    // to give SplitText a direct element to work on, or ensure `container` directly holds the text.
    // For this example, we assume `container` directly holds the text.
    splitTextRef.current = new SplitText(container, {
      type: "words,chars",
      linesClass: "split-line",
    });

    const chars = splitTextRef.current.chars; // Get the characters array

    if (!chars || chars.length === 0) {
      console.warn("GSAP: No characters found to animate after SplitText.");
      return;
    }

    // Initial state (hidden)
    gsap.set(chars, {
      y: 80, // Similar to yPercent: 100 but using absolute pixels
      opacity: 0, // Ensure opacity is set for a fade-in effect
      ease: "circ.out", // Set ease for consistency
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: startTrigger,
        end: endTrigger, // This might need adjustment based on desired scroll behavior
        toggleActions: "restart pause resume reverse", 
        // markers: true, // Uncomment for debugging
        onLeaveBack: () => {
          // Optional: Revert animation when scrolling back up
          if (splitTextRef.current) {
            gsap.set(chars, {
              y: 80,
              opacity: 0,
            });
          }
        },
      },
    });

    tl.to(chars, {
      duration: duration,
      ease: "circ.out", // Matches the example
      y: 0,
      opacity: 1,
      stagger: staggerAmount,
      delay: delay,
    });

    // Cleanup function
    return () => {
      tl.kill(); // Kill the timeline
      if (splitTextRef.current) {
        splitTextRef.current.revert(); // Revert SplitText changes
        splitTextRef.current = null;
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill all ScrollTriggers (be cautious with this in a larger app)
    };
  }, [
    children,
    className,
    delay,
    duration,
    staggerAmount,
    startTrigger,
    endTrigger,
  ]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ overflow: "hidden" }}
    >
      {children}
    </div>
  );
};

export default TextReveal;
