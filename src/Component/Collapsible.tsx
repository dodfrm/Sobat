// Collapsible.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"; // Pastikan ikon ini tersedia

interface CollapsibleProps {
  title: React.ReactNode; // Bisa string atau elemen JSX
  children: React.ReactNode; // Konten yang akan dilipat
  className?: string; // Kelas tambahan untuk container utama
  titleClassName?: string; // Kelas tambahan untuk judul
  contentClassName?: string; // Kelas tambahan untuk konten
  initialOpen?: boolean; // Apakah dibuka secara default
}

const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  children,
  className = "",
  titleClassName = "",
  contentClassName = "",
  initialOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  // Efek untuk mengatur tinggi max-height saat perubahan `isOpen`
  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.maxHeight = "0px";
      }
    }
  }, [isOpen]);

  // Opsional: Untuk menangani resize window jika konten dinamis
  useEffect(() => {
    const handleResize = () => {
      if (isOpen && contentRef.current) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <div className={`overflow-hidden ${className}`}>
      {/* Tombol/Area Judul */}
      <button
        className={`flex justify-between items-center w-full focus:outline-none transition-colors duration-200 ${titleClassName}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-left">{title}</span>
        {isOpen ? (
          <IconChevronUp className="h-5 w-5 flex-shrink-0 transition-transform duration-300" />
        ) : (
          <IconChevronDown className="h-5 w-5 flex-shrink-0 transition-transform duration-300" />
        )}
      </button>

      {/* Konten yang bisa dilipat */}
      <div
        ref={contentRef}
        className={`transition-all duration-500 ease-in-out overflow-hidden ${contentClassName}`}
        style={{
          maxHeight: initialOpen
            ? `${contentRef.current?.scrollHeight || 0}px`
            : "0px",
        }}
      >
        <div> {children}</div>
      </div>
    </div>
  );
};

export default Collapsible;
