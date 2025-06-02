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
  duration?: number; // New prop for controlling animation duration
  staggerDuration?: number; // New prop for controlling stagger duration
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = false,
  baseOpacity = 0.2,
  baseRotation = 0,
  blurStrength = 2,
  containerClassName = "",
  className = "",
  charAnimationStart = "top bottom-=15%",
  charAnimationEnd = "bottom top+=50%",
  duration = 5, // Default duration in seconds
  staggerDuration = 0.5, // Default stagger duration in seconds
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const allCharsRef = useRef<HTMLSpanElement[]>([]);
  const charIndexCounter = useRef(0);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    charIndexCounter.current = 0;

    return text.split(/(\s+)/).map((word, wordIndex) => {
      if (word.match(/^\s+$/)) {
        return <span key={`space-${wordIndex}`}>{word}</span>;
      } else {
        return (
          <span
            key={`word-${wordIndex}`}
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {word.split("").map((char, charInWordIndex) => {
              const currentCharIndex = charIndexCounter.current++;
              return (
                <span
                  className="inline-block char"
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

    const scroller = scrollContainerRef?.current || window;
    const cleanupTriggers: ScrollTrigger[] = [];

    // Animasi Rotasi Kontainer dengan durasi yang lebih smooth
    const rotationTl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scroller,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
    });

    rotationTl.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        rotate: 0,
        duration,
        ease: "power2.out",
      }
    );
    cleanupTriggers.push(rotationTl.scrollTrigger!);

    const charElements = allCharsRef.current.filter(Boolean);
    if (charElements.length === 0) return;

    // Animasi Opacity dengan durasi dan easing yang lebih smooth
    const opacityTl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scroller,
        start: charAnimationStart,
        end: charAnimationEnd,
        scrub: true,
      },
    });

    opacityTl.fromTo(
      charElements,
      { opacity: baseOpacity, willChange: "opacity" },
      {
        opacity: 1,
        duration,
        ease: "sine.out",
        stagger: {
          each: staggerDuration,
          from: "start", // Membuat animasi lebih organik
        },
      }
    );
    cleanupTriggers.push(opacityTl.scrollTrigger!);

    // Animasi Blur dengan durasi yang disesuaikan
    if (enableBlur) {
      const blurTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scroller,
          start: charAnimationStart,
          end: charAnimationEnd,
          scrub: true,
        },
      });

      blurTl.fromTo(
        charElements,
        { filter: `blur(${blurStrength}px)` },
        {
          filter: "blur(0px)",
          duration: duration * 0.8, // Sedikit lebih cepat dari opacity
          ease: "sine.out",
          stagger: {
            each: staggerDuration * 0.5,
            from: "start", // Membuat animasi lebih organik
          },
        }
      );
      cleanupTriggers.push(blurTl.scrollTrigger!);
    }

    return () => {
      cleanupTriggers.forEach((trigger) => trigger.kill());
      allCharsRef.current = [];
      charIndexCounter.current = 0;
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    charAnimationStart,
    charAnimationEnd,
    blurStrength,
    children,
    duration, // Tambahkan duration sebagai dependency
    staggerDuration, // Tambahkan staggerDuration sebagai dependency
  ]);

  return (
    <div ref={containerRef} className={`${containerClassName}`}>
      <p className={`${className}`}>{splitText}</p>
    </div>
  );
};

export default ScrollReveal;
