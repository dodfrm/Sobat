import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin sekali saja (bisa dipindah ke file utama)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
}

const AnimatedContent = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
}: AnimatedContentProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const axis = direction === "vertical" ? "y" : "x";
    const startPosition = reverse ? -distance : distance;

    // Bersihkan animasi sebelumnya
    animationRef.current?.kill();

    // Setup animation timeline
    animationRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top bottom-=10%",
        end: "bottom center",
        toggleActions: "play none none none",
        markers: false, // Untuk debugging
      },
      defaults: { duration, ease },
    });

    // Initial state
    gsap.set(element, {
      [axis]: startPosition,
      opacity: animateOpacity ? initialOpacity : 1,
      scale,
      overwrite: "auto",
    });

    // Animation
    animationRef.current.to(element, {
      [axis]: 0,
      opacity: 1,
      scale: 1,
      delay,
      ease,
    });

    return () => {
      animationRef.current?.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
  ]);

  return (
    <div ref={elementRef} style={{ willChange: "transform, opacity" }}>
      {children}
    </div>
  );
};

export default AnimatedContent;
