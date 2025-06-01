"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const HeroHeader = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [currentLang, setCurrentLang] = React.useState("en");

  const menuItems = [
    { name: currentLang === "en" ? "Our Journey" : "Perjalanan Kami", href: "#journey" },
    { name: currentLang === "en" ? "Actions" : "Aksi", href: "#actions" },
    { name: currentLang === "en" ? "News" : "Berita", href: "#news" },
    { name: currentLang === "en" ? "FAQ" : "FAQ", href: "#faq" },
    { name: currentLang === "en" ? "Our Team" : "Tim Kami", href: "#our-team" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLangToggle = () => {
    setCurrentLang((prevLang) => (prevLang === "en" ? "id" : "en"));
  };

  const handleMobileNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header>
      <nav data-state={isOpen && "active"} className="fixed z-50 w-full px-2">
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-400 lg:px-12",
            isScrolled &&
              "bg-white max-w-4xl rounded-2xl border border-black/15 lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-2">
            <div className="flex w-full items-center justify-between lg:w-auto relative z-[51]">
              <a
                href="#"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <img src="./logo.svg" alt="logo" className="h-12" />
              </a>
              <div className="flex items-center gap-4 lg:hidden text-[#033009]">
                <div
                  className="relative w-16 h-8 rounded-full bg-gray-200 p-0.5 cursor-pointer transition-colors duration-300 flex items-center justify-between"
                  onClick={handleLangToggle}
                >
                  <img
                    src="https://flagcdn.com/w160/us.png"
                    alt="English"
                    className={cn(
                      "h-6 w-6 rounded-full object-cover transition-all duration-300",
                      currentLang === "id" ? "opacity-50" : ""
                    )}
                  />
                  <img
                    src="https://flagcdn.com/w160/id.png"
                    alt="Indonesia"
                    className={cn(
                      "h-6 w-6 rounded-full object-cover transition-all duration-300",
                      currentLang === "en" ? "opacity-50" : ""
                    )}
                  />
                  <div
                    className={cn(
                      "absolute top-0.5 h-7 w-7 rounded-full bg-white shadow-md transition-transform duration-300",
                      currentLang === "en" ? "left-0.5" : "left-auto right-0.5"
                    )}
                  />
                </div>

                <label className="burger-3 block cursor-pointer lg:hidden">
                  <input
                    type="checkbox"
                    checked={isOpen}
                    onChange={toggleMenu}
                    className="hidden"
                  />
                  <svg viewBox="0 0 32 32" className="h-9">
                    <path
                      className="line line-top-bottom stroke-current text-muted-foreground"
                      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    />
                    <path
                      className="line stroke-current text-muted-foreground"
                      d="M7 16 27 16"
                    />
                  </svg>
                </label>
              </div>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-6 text-md font-normal">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-black hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={cn(
                "fixed inset-0 z-40 w-full bg-white text-[#033009] overflow-y-auto transition-all duration-300 lg:relative lg:inset-auto lg:top-auto lg:z-auto lg:h-auto lg:w-fit lg:bg-transparent lg:flex lg:items-center lg:justify-end lg:space-y-0 lg:rounded-none lg:border-0 lg:p-0 lg:shadow-none",
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0 pointer-events-none lg:translate-x-0 lg:opacity-100 lg:pointer-events-auto"
              )}
            >
              <div className="lg:hidden mt-20 mb-8 pt-8">
                <ul className="space-y-8 font-normal text-center">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleMobileNavClick(item.href);
                        }}
                        className="font-semibold text-black text-2xl hover:text-accent-foreground block duration-150 py-2"
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:flex items-center space-x-4 hidden">
                <div className="lg:flex w-full items-center space-x-4 hidden">
                  <div
                    className="relative w-20 h-10 rounded-full bg-gray-200 p-1 cursor-pointer transition-colors duration-300 flex items-center justify-between"
                    onClick={handleLangToggle}
                  >
                    <img
                      src="https://flagcdn.com/w160/us.png"
                      alt="English"
                      className={cn(
                        "h-8 w-8 rounded-full object-cover transition-all duration-300",
                        currentLang === "id" ? "opacity-50" : ""
                      )}
                    />
                    <img
                      src="https://flagcdn.com/w160/id.png"
                      alt="Indonesia"
                      className={cn(
                        "h-8 w-8 rounded-full object-cover transition-all duration-300",
                        currentLang === "en" ? "opacity-50" : ""
                      )}
                    />
                    <div
                      className={cn(
                        "absolute top-1 h-8 w-8 rounded-full bg-white shadow-md transition-transform duration-300",
                        currentLang === "en" ? "left-1" : "left-auto right-1"
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
