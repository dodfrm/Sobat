"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const HeroHeader = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const menuItems = [
    { name: "Our Journey", href: "#journey" },
    { name: "Actions", href: "#actions" },
    { name: "News", href: "#news" },
    { name: "FAQ", href: "#faq" },
    { name: "Our Team", href: "#our-team" },
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

  const handleMobileNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const CustomJoinUsButton = () => (
    <button
      type="button"
      // Apply transition for all properties that change on hover
      className="flex justify-center gap-2 items-center mx-auto text-md bg-white text-black border-black border px-4 py-2 rounded-full group
                 transition-colors duration-1000 ease-in-out hover:bg-black hover:text-white"
    >
      Join Us
      <svg
        className="w-8 h-8 justify-end ease-linear duration-300 rounded-full border border-black p-2 rotate-45
                   group-hover:rotate-90 group-hover:bg-white group-hover:border-none" // Smoother SVG background change
        viewBox="0 0 16 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          className="fill-black transition-colors duration-1000 ease-in-out group-hover:fill-black" // Path fill color transitions
        />
      </svg>
    </button>
  );

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
                  <li className="mt-8 flex justify-center">
                    <a href="#join-us" onClick={() => setIsOpen(false)}>
                      <CustomJoinUsButton />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="lg:flex items-center space-x-4 hidden">
                <div className="lg:flex w-full items-center space-x-4 hidden">
                  <a href="#join-us">
                    <CustomJoinUsButton />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
