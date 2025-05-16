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
      heading: "Reduce",
      text: "Kurangi konsumsi berlebihan dengan memilih produk yang benar-benar dibutuhkan. Hindari penggunaan barang sekali pakai dan lebih utamakan barang yang tahan lama agar limbah yang dihasilkan semakin sedikit.",
    },
    {
      heading: "Recycle",
      text: "Lakukan pemilahan sampah mulai dari rumah, seperti memisahkan plastik, kertas, kaca, dan logam. Dengan mendaur ulang, kita bisa mengurangi jumlah sampah yang dibuang ke TPA serta menghemat energi dan sumber daya alam.",
    },
    {
      heading: "Reuse",
      text: "Gunakan kembali barang-barang yang masih layak pakai, seperti botol minum, kantong belanja kain, atau wadah makanan. Dengan membiasakan diri untuk memakai ulang, kita dapat menekan jumlah sampah rumah tangga secara signifikan.",
    },
    {
      heading: "Replace",
      text: "Gantilah kebiasaan menggunakan produk yang merusak lingkungan dengan alternatif yang lebih ramah, seperti menggunakan transportasi umum dibanding kendaraan pribadi, atau memilih produk dengan kemasan yang dapat terurai.",
    },
    {
      heading: "Replant",
      text: "Tanamlah pohon atau tumbuhan di halaman rumah, lingkungan sekolah, atau ruang terbuka hijau. Reboisasi dan penghijauan tidak hanya memperindah lingkungan, tetapi juga membantu mengurangi emisi karbon dan suhu bumi.",
    },
  ];

  const sections = sectionData.map((item, i) => (
    <div className="el " key={`section-${i + 1}`}>
      <div className="el__overflow">
        <div className="el__inner rounded-md">
          <div className="el__bg"></div>
          <div className="el__preview-cont">
            <h2 className="rotate-270 lg:rotate-0 el__heading px-12 bg-[#EDFFEC] mx-4 rounded-sm flex w-full text-[#033009] items-center justify-center font-semibold">
              {item.heading}
            </h2>
          </div>
          <div className="el__content flex flex-col items-center justify-center">
            <div className="el__text capitalize text-3xl lg:text-4xl lg:px-12">{item.text}</div>
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
