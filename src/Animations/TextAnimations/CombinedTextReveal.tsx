import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CombinedTextRevealProps {
  children: string; // We'll assume children is always string for this combined component
  className?: string;
  // TextReveal2 props
  delay?: number;
  duration?: number;
  staggerAmount?: number;
  startTrigger?: string;
  endTrigger?: string;
  // ScrollReveal props
  scrollContainerRef?: React.RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  charAnimationStart?: string;
  charAnimationEnd?: string;
}

const CombinedTextReveal: React.FC<CombinedTextRevealProps> = ({
  children,
  className = "",
  // TextReveal2 defaults
  delay = 0.5,
  duration = 1,
  staggerAmount = 0.1,
  startTrigger = "top bottom",
  endTrigger = "bottom top",
  // ScrollReveal defaults
  scrollContainerRef,
  enableBlur = false,
  baseOpacity = 0.15,
  baseRotation = 0,
  blurStrength = 0,
  containerClassName = "",
  textClassName = "",
  charAnimationStart = "top bottom-=15%",
  charAnimationEnd = "bottom top+=50%",
}) => {
  // Refs for both animation systems
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const allCharsRef = useRef<HTMLSpanElement[]>([]);
  const charIndexCounter = useRef(0);

  // Split text into words and characters
  const splitText = useMemo(() => {
    // Reset the character index counter for each render cycle
    charIndexCounter.current = 0;
    wordsRef.current = []; // Clear word refs on each memoization

    // Split the text into words (and spaces)
    return children.split(/(\s+)/).map((word, wordIndex) => {
      if (word.match(/^\s+$/)) {
        // If it's a space, just return a span for the space
        return <span key={`space-${wordIndex}`}>{word}</span>;
      } else {
        // For each word, split it into characters
        return (
          <span
            key={`word-${wordIndex}`}
            className="gsap-word" // For TextReveal2 animation
            ref={(el) => {
              if (el) wordsRef.current[wordIndex] = el;
            }}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              overflow: "hidden", // Ensures that only the visible part of the text is shown
            }}
          >
            <span style={{ display: "inline-block" }}>
              {word.split("").map((char, charInWordIndex) => {
                const currentCharIndex = charIndexCounter.current++;
                return (
                  <span
                    className="inline-block char" // For ScrollReveal animation
                    key={`char-${wordIndex}-${charInWordIndex}`}
                    ref={(el) => {
                      if (el) allCharsRef.current[currentCharIndex] = el;
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                );
              })}
            </span>
          </span>
        );
      }
    });
  }, [children]);

  // TextReveal2 animation (word-level)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Wait for DOM to update and query current words
    const words = Array.from(container.querySelectorAll(".gsap-word > span"));

    if (words.length === 0) {
      console.warn(
        "GSAP: No '.gsap-word > span' elements found for word animation."
      );
      return;
    }

    // Set initial state for words
    gsap.set(words, {
      yPercent: 100,
      opacity: 0,
      skewY: 7,
      transformOrigin: "left bottom",
      willChange: "transform, opacity", // Add willChange
    });

    // Create word animation timeline
    const wordTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: startTrigger,
        end: endTrigger,
        toggleActions: "play reverse play reverse",
      },
    });

    wordTl.to(words, {
      yPercent: 0,
      opacity: 1,
      skewY: 0,
      stagger: {
        amount: staggerAmount,
      },
      duration: duration,
      ease: "power4.out", // You can experiment with 'power3.out' or 'expo.out'
      delay: delay,
    });

    return () => {
      wordTl.kill();
      // Only kill ScrollTriggers related to this specific animation's trigger
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container && trigger.animation === wordTl)
          trigger.kill();
      });
    };
  }, [children, delay, duration, staggerAmount, startTrigger, endTrigger]);

  // ScrollReveal animation (character-level)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;
    const cleanupTriggers: ScrollTrigger[] = [];

    // Container rotation animation
    // Removed rotationEnd as it wasn't defined in props. If you need it, add it to the interface.
    const rotationTl = gsap.fromTo(
      el,
      {
        transformOrigin: "0% 50%",
        rotate: baseRotation,
        willChange: "transform",
      }, // Add willChange
      {
        ease: "none", // Linear is often best for scrubbed animations
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: "bottom center", // Made rotation end slightly later
          scrub: true,
        },
      }
    );
    cleanupTriggers.push(rotationTl.scrollTrigger!);

    // Filter out any null/undefined character elements and ensure they are current
    const charElements = Array.from(el.querySelectorAll(".char"));

    if (charElements.length === 0) {
      console.warn("GSAP: No '.char' elements found for character animations.");
      return;
    }

    // Character opacity animation
    const opacityTl = gsap.fromTo(
      charElements,
      { opacity: baseOpacity, willChange: "opacity" },
      {
        ease: "none", // Linear for scrubbed effect
        opacity: 1,
        stagger: 1, // **Reduced stagger for smoother reveal**
        scrollTrigger: {
          trigger: el,
          scroller,
          start: charAnimationStart,
          end: charAnimationEnd,
          scrub: true,
        },
      }
    );
    cleanupTriggers.push(opacityTl.scrollTrigger!);

    // Character blur animation (if enabled)
    if (enableBlur) {
      const blurTl = gsap.fromTo(
        charElements,
        { filter: `blur(${blurStrength}px)`, willChange: "filter" }, // Add willChange
        {
          ease: "none", // Linear for scrubbed effect
          filter: "blur(0px)",
          stagger: 0.01,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: charAnimationStart,
            end: charAnimationEnd,
            scrub: true,
          },
        }
      );
      cleanupTriggers.push(blurTl.scrollTrigger!);
    }

    return () => {
      cleanupTriggers.forEach((trigger) => trigger.kill());
      // No need to clear allCharsRef and charIndexCounter here directly as useMemo
      // and new queries in useEffect handle fresh elements on re-renders.
      // However, if you explicitly want to ensure refs are empty when component unmounts,
      // you can keep allCharsRef.current = []; and charIndexCounter.current = 0;
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    charAnimationStart,
    charAnimationEnd,
    blurStrength,
    children, // Dependency to re-run effect if children change
  ]);

  return (
    <div
      ref={containerRef}
      className={`${containerClassName} ${className}`}
      style={{ overflow: "hidden" }} // Keep overflow hidden to hide initial text
    >
      <p className={`${textClassName}`}>{splitText}</p>
    </div>
  );
};

export default CombinedTextReveal;
