import { useEffect, useRef } from "react";
import "./../style.scss";

export default function ExpandableSections() {
  const contRef = useRef<HTMLDivElement>(null);
  const elsRef = useRef<NodeListOf<Element> | null>(null);
  const closeBtnsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    // Initialize after component mounts
    const $cont = contRef.current;
    if (!$cont) return;

    const $elsArr = $cont.querySelectorAll(".el");
    const $closeBtnsArr = $cont.querySelectorAll(".el__close-btn");

    elsRef.current = $elsArr;
    closeBtnsRef.current = $closeBtnsArr;

    // Remove inactive class after delay
    const timer = setTimeout(() => {
      $cont.classList.remove("s--inactive");
    }, 200);

    // Add event listeners
    $elsArr.forEach(($el) => {
      $el.addEventListener("click", handleElClick);
    });

    $closeBtnsArr.forEach(($btn) => {
      $btn.addEventListener("click", handleCloseClick);
    });

    // Cleanup
    return () => {
      clearTimeout(timer);
      $elsArr.forEach(($el) => {
        $el.removeEventListener("click", handleElClick);
      });
      $closeBtnsArr.forEach(($btn) => {
        $btn.removeEventListener("click", handleCloseClick);
      });
    };
  }, []);

  const handleElClick = (e: Event) => {
    const target = e.currentTarget as HTMLElement;
    if (target.classList.contains("s--active")) return;

    const $cont = contRef.current;
    if (!$cont) return;

    $cont.classList.add("s--el-active");
    target.classList.add("s--active");
  };

  const handleCloseClick = (e: Event) => {
    e.stopPropagation();

    const $cont = contRef.current;
    if (!$cont) return;

    $cont.classList.remove("s--el-active");
    const activeEl = $cont.querySelector(".el.s--active");
    if (activeEl) {
      activeEl.classList.remove("s--active");
    }
  };

  const sectionData = [
    {
      heading: "Lingkungan",
      text: "Jaga kebersihan alam mulai dari langkah kecil seperti membuang sampah pada tempatnya.",
    },
    {
      heading: "Energi",
      text: "Hemat energi di rumahmu, matikan listrik saat tidak digunakan.",
    },
    {
      heading: "Air",
      text: "Gunakan air secukupnya, jangan biarkan keran menyala terus-menerus.",
    },
    {
      heading: "Transportasi",
      text: "Kurangi penggunaan kendaraan bermotor pribadi, pilih transportasi umum atau bersepeda.",
    },
    {
      heading: "Pohon",
      text: "Menanam pohon adalah salah satu cara terbaik menyelamatkan bumi dari pemanasan global.",
    },
  ];
  

  const sections = sectionData.map((item, i) => (
    <div className="el" key={`section-${i + 1}`}>
      <div className="el__overflow">
        <div className="el__inner">
          <div className="el__bg"></div>
          <div className="el__preview-cont">
            <h2 className="el__heading">{item.heading}</h2>
          </div>
          <div className="el__content">
            <div className="el__text">{item.text}</div>
            <div className="el__close-btn"></div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="cont s--inactive" ref={contRef}>
      <div className="cont__inner">{sections}</div>
    </div>
  );
}
