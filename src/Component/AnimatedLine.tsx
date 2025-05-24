import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedLineProps {
  color?: string; // Warna garis (default: putih)
  thickness?: number; // Ketebalan garis dalam pixel (default: 2)
  animationDuration?: number; // Durasi animasi dalam detik (default: 1)
  startTrigger?: string; // Kapan animasi dimulai (default: "top 80%")
  endTrigger?: string; // Kapan animasi berakhir (default: "bottom 20%")
  className?: string; // Kelas tambahan untuk styling
  repeatOnScroll?: boolean; // Apakah animasi harus berulang setiap kali trigger dipicu
}

const AnimatedLine: React.FC<AnimatedLineProps> = ({
  color = "white",
  thickness = 2,
  animationDuration = 1,
  startTrigger = "top 80%",
  endTrigger = "bottom 20%",
  className = "",
  repeatOnScroll = true, // Default: bisa berulang
}) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null); // Ref untuk menyimpan timeline

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    // Bersihkan timeline dan ScrollTrigger yang ada sebelumnya
    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }

    // Inisialisasi timeline baru
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: line,
        start: startTrigger,
        end: endTrigger,
        toggleActions: "play reverse play reverse",
        // markers: true, // Uncomment untuk debugging
      },
    });

    tl.fromTo(
      line,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: animationDuration,
        ease: "power3.out",
      }
    );

    // Simpan timeline agar bisa dibersihkan nanti
    tlRef.current = tl;

    return () => {
      // Cleanup: Bunuh timeline saat komponen di-unmount
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, [
    color,
    thickness,
    animationDuration,
    startTrigger,
    endTrigger,
    repeatOnScroll,
  ]);

  return (
    <div
      ref={lineRef}
      className={className}
      style={{
        height: thickness,
        backgroundColor: color,
        width: "97%",
        transformOrigin: "left center",
        transform: "scaleX(0)", // Mulai dengan panjang 0 secara default CSS
      }}
    />
  );
};

export default AnimatedLine;
