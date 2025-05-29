// Updated ExpandableSections.tsx
import { useEffect, useRef } from "react";
import "./../style.scss";

export default function ExpandableSections() {
  const contRef = useRef<HTMLDivElement>(null);
  const elsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    const $cont = contRef.current;
    if (!$cont) return;

    const $elsArr = $cont.querySelectorAll(".el");
    elsRef.current = $elsArr;

    const timer = setTimeout(() => {
      $cont.classList.remove("s--inactive");
    }, 200);

    // Add click event to each element
    $elsArr.forEach(($el) => {
      $el.addEventListener("click", handleElClick);
    });

    // Add click event to document to handle close when clicking anywhere
    document.addEventListener("click", handleDocumentClick);

    return () => {
      clearTimeout(timer);
      $elsArr.forEach(($el) => {
        $el.removeEventListener("click", handleElClick);
      });
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleElClick = (e: Event) => {
    const target = e.currentTarget as HTMLElement;
    if (target.classList.contains("s--active")) return;

    const $cont = contRef.current;
    if (!$cont) return;

    $cont.classList.add("s--el-active");
    target.classList.add("s--active");

    // Stop propagation to prevent immediate closing
    e.stopPropagation();
  };

  const handleDocumentClick = (_e: Event) => {
    const $cont = contRef.current;
    if (!$cont) return;

    // Check if we're clicking outside an active element
    if ($cont.classList.contains("s--el-active")) {
      $cont.classList.remove("s--el-active");
      const activeEl = $cont.querySelector(".el.s--active");
      if (activeEl) {
        activeEl.classList.remove("s--active");
      }
    }
  };

  const sectionData = [
    {
      heading: "Reduce",
      text: "Conscious consumption starts with asking: do I really need this? By cutting back on unnecessary purchases and avoiding disposable products, we can dramatically lower our environmental footprint and help conserve finite resources.",
    },
    {
      heading: "Recycle",
      text: "Recycling isn't just about waste—it's about transforming what's discarded into something useful. By properly sorting materials like plastic, glass, metal, and paper, we help reduce landfill overflow and lessen the need for raw resource extraction.",
    },
    {
      heading: "Reuse",
      text: "Before throwing something away, consider how it can be used again. Reusable bottles, cloth bags, and food containers are simple swaps that reduce waste and promote a circular economy—one where materials live longer, and landfills shrink.",
    },
    {
      heading: "Replace",
      text: "Every choice matters. Replacing harmful habits—like driving short distances or buying overly packaged goods—with eco-friendly alternatives helps shift demand toward a more sustainable future. Choose better, act wiser.",
    },
    {
      heading: "Replant",
      text: "Nature is our greatest ally in the fight against climate change. Planting trees and restoring green spaces not only captures carbon but revitalizes ecosystems, supports biodiversity, and cools urban environments naturally.",
    },
  ];
  const sections = sectionData.map((item, i) => (
    <div className="el" key={`section-${i + 1}`}>
      <div className="el__overflow">
        <div className="el__inner rounded-md">
          <div className="el__bg"></div>
          <div className="el__preview-cont">
            <h2 className="rotate-270 lg:rotate-0 el__heading px-12 mx-4 flex w-full text-white items-center justify-center font-semibold">
              {item.heading}
            </h2>
          </div>
          <div className="el__content flex flex-col items-center justify-center">
            <div className="el__text capitalize text-2xl lg:text-4xl lg:px-12">
                {item.text}
            </div>
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
