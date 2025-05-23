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
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationStart?: string; // Ubah ini untuk kontrol start animasi kata
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.15,
  baseRotation = 0,
  blurStrength = 0,
  containerClassName = "",
  textClassName = "",
  // rotationEnd = "bottom bottom", // Ini bisa tetap atau disesuaikan
  wordAnimationStart = "top bottom-=20%", // Default start
  wordAnimationEnd = "center center", // Ubah ke "center center" atau sesuaikan untuk lebih banyak efek
}) => {
  const containerRef = useRef<HTMLDivElement>(null); // Ubah ke Div agar lebih fleksibel
  const wordsRef = useRef<HTMLSpanElement[]>([]); // Untuk menyimpan referensi ke setiap span kata

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    let wordIndex = 0; // Untuk indeks referensi

    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) {
        return <span key={index}>{word}</span>; // Spasi tidak perlu kelas word
      }
      // Tambahkan kelas "word" dan set ref
      return (
        <span
          className="inline-block word" // <<< PENTING: TAMBAHKAN KELAS "word" DI SINI
          key={index}
          ref={(el) => {
            if (el) wordsRef.current[wordIndex] = el;
            wordIndex++;
          }}
        >
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    // Pastikan ScrollTriggers dibersihkan setiap kali efek dijalankan
    // Ini penting jika prop berubah dan efek dijalankan ulang
    // atau jika komponen unmount.
    const cleanupTriggers: ScrollTrigger[] = [];

    // Animasi Rotasi Kontainer (opsional, jika ingin container berputar)
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
          end: "bottom center", // Mengubah rotationEnd menjadi fix ke "bottom center" agar lebih konsisten
          scrub: true,
        },
      }
    );
    cleanupTriggers.push(rotationTl.scrollTrigger!);

    // Pastikan `wordsRef.current` berisi elemen yang valid
    const wordElements = wordsRef.current.filter(Boolean); // Filter elemen yang null/undefined

    if (wordElements.length === 0) {
      // console.warn("No word elements found for animation.");
      return; // Hentikan jika tidak ada kata yang ditemukan
    }

    // Animasi Opacity Kata per Kata
    const opacityTl = gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: "opacity" },
      {
        ease: "none",
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: wordAnimationStart, // Menggunakan prop baru
          end: wordAnimationEnd, // Menggunakan prop baru
          scrub: true,
        },
      }
    );
    cleanupTriggers.push(opacityTl.scrollTrigger!);

    // Animasi Blur Kata per Kata (jika diaktifkan)
    if (enableBlur) {
      const blurTl = gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: "none",
          filter: "blur(0px)",
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: wordAnimationStart, // Menggunakan prop baru
            end: wordAnimationEnd, // Menggunakan prop baru
            scrub: true,
          },
        }
      );
      cleanupTriggers.push(blurTl.scrollTrigger!);
    }

    // Fungsi cleanup untuk ScrollTrigger
    return () => {
      cleanupTriggers.forEach((trigger) => trigger.kill());
      wordsRef.current = []; // Bersihkan referensi kata
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    // rotationEnd, // Tidak digunakan lagi jika di-hardcode
    wordAnimationStart,
    wordAnimationEnd,
    blurStrength,
    children, // Tambahkan children sebagai dependensi agar `useMemo` dan efek di-rerun jika teks berubah
  ]);

  return (
    <div ref={containerRef} className={`${containerClassName}`}>
      <p
        className={`${textClassName}`}
      >
        {splitText} {/* splitText akan merender span dengan kelas "word" */}
      </p>
    </div>
  );
};

export default ScrollReveal;
