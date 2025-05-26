import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Penting untuk animasi saat scroll

gsap.registerPlugin(ScrollTrigger); // Daftarkan ScrollTrigger

interface TextRevealProps {
  children: string; // Diasumsikan children adalah string
  className?: string; // Untuk meneruskan kelas Tailwind
  delay?: number; // Penundaan awal animasi (opsional)
  duration?: number; // Durasi animasi setiap kata (opsional)
  staggerAmount?: number; // Jumlah stagger antar kata (opsional)
  startTrigger?: string; // ScrollTrigger start (opsional)
  endTrigger?: string; // ScrollTrigger end (opsional)
}

const TextReveal2: React.FC<TextRevealProps> = ({
  children,
  className = "",
  delay = 0.5, // Default delay sedikit lebih cepat
  duration = 1.2, // Default duration
  staggerAmount = 0.1, // Default stagger
  startTrigger = "top bottom",
  endTrigger = "bottom top", 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]); // Fungsi untuk membagi teks menjadi span kata
  const getSplitText = (text: string) => {
    let wordIndex = 0;
    return text.split(/(\s+)/).map((word, index) => {
      // Jika itu spasi, kembalikan saja spasi
      if (word.match(/^\s+$/)) {
        return <span key={`space-${index}`}>{word}</span>;
      } // Untuk kata, bungkus dalam span dan simpan ref
      return (
        <span
          key={`word-${index}`}
          className="gsap-word" // Kelas ini akan ditargetkan oleh GSAP
          ref={(el) => {
            if (el) wordsRef.current[wordIndex] = el;
            wordIndex++;
          }}
          style={{ display: "inline-block", overflow: "hidden" }} // Penting untuk efek slide
        >
          <span style={{ display: "inline-block" }}>{word}</span>{" "}
        </span>
      );
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return; // Bersihkan referensi kata dari render sebelumnya
    wordsRef.current = []; 
    const words = Array.from(container.querySelectorAll(".gsap-word > span")); // Target span anak di dalam .gsap-word

    gsap.set(words, {
      yPercent: 100, // Sembunyikan di bawah
      opacity: 0,
      skewY: 7,
      transformOrigin: "left bottom", // Titik asal rotasi untuk skew
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: startTrigger,
        end: endTrigger,
        toggleActions: "play reverse play reverse", // Hanya putar sekali saat masuk
      },
    });

    tl.to(words, {
      yPercent: 0,
      opacity: 1,
      skewY: 0,
      stagger: {
        amount: staggerAmount,
      },
      duration: duration,
      ease: "power4.out",
      delay: delay, // Penundaan awal sebelum animasi dimulai
    }); // Cleanup function

    return () => {
      tl.kill(); // Hentikan dan hapus timeline
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Hapus semua ScrollTrigger terkait
    };
  }, [
    children,
    className,
    delay,
    duration,
    staggerAmount,
    startTrigger,
    endTrigger,
  ]); // Tambahkan semua props sebagai dependensi

  return (
    // Gunakan div untuk membungkus teks, agar bisa menargetkan dengan containerRef
    <div
      ref={containerRef}
      className={className}
      style={{ overflow: "hidden" }}
    >
    {getSplitText(children)}{" "}
    </div>
  );
};

export default TextReveal2;
