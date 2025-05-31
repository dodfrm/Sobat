import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  className?: string;
  rotationEnd?: string;
  charAnimationStart?: string;
  charAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = false,
  baseOpacity = 0.2,
  baseRotation = 0,
  blurStrength = 0,
  containerClassName = "",
  className = "",
  charAnimationStart = "top bottom-=15%",
  charAnimationEnd = "bottom top+=50%",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Now we'll store references to *all* individual character spans
  const allCharsRef = useRef<HTMLSpanElement[]>([]);
  // We need a way to reset the index for character refs when re-rendering
  const charIndexCounter = useRef(0);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    // Reset the character index counter for each render cycle
    charIndexCounter.current = 0;

    // Split the text into words (and spaces)
    return text.split(/(\s+)/).map((word, wordIndex) => {
      if (word.match(/^\s+$/)) {
        // If it's a space, just return a span for the space
        return <span key={`space-${wordIndex}`}>{word}</span>;
      } else {
        // For each word, split it into characters
        return (
          <span
            key={`word-${wordIndex}`}
            style={{ display: "inline-block", whiteSpace: "nowrap" }} // Ensure words stay together
          >
            {word.split("").map((char, charInWordIndex) => {
              const currentCharIndex = charIndexCounter.current++;
              return (
                <span
                  className="inline-block char" // Apply class to individual character spans
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
        );
      }
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const cleanupTriggers: ScrollTrigger[] = [];

    // Animasi Rotasi Kontainer (unchanged)
    const rotationTl = gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        ease: "none",
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
        },
      }
    );
    cleanupTriggers.push(rotationTl.scrollTrigger!);

    // Filter out any null/undefined elements from the `allCharsRef`
    const charElements = allCharsRef.current.filter(Boolean);

    if (charElements.length === 0) {
      return;
    }

    // Animasi Opacity Karakter per Karakter
    const opacityTl = gsap.fromTo(
      charElements,
      { opacity: baseOpacity, willChange: "opacity" },
      {
        ease: "none",
        opacity: 1,
        stagger: 1, // Adjusted stagger for character animation
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

    // Animasi Blur Karakter per Karakter (jika diaktifkan)
    if (enableBlur) {
      const blurTl = gsap.fromTo(
        charElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: "none",
          filter: "blur(0px)",
          stagger: 0.01, // Adjusted stagger for character animation
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

    // Cleanup function for ScrollTrigger
    return () => {
      cleanupTriggers.forEach((trigger) => trigger.kill());
      // Clear the ref array to prevent issues on re-renders
      allCharsRef.current = [];
      charIndexCounter.current = 0; // Reset counter for next render
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    charAnimationStart,
    charAnimationEnd,
    blurStrength,
    children, // Crucial dependency for `useMemo` and `useEffect`
  ]);

  return (
    <div ref={containerRef} className={`${containerClassName}`}>
      <p className={`${className}`}>
        {splitText}{" "}
        {/* Now renders spans for words, containing spans for chars */}
      </p>
    </div>
  );
};

export default ScrollReveal;
