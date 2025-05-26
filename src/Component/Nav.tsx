"use client";

import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search, Globe } from "lucide-react";

const menuItems = [
  { name: "Action", href: "#actions" },
  { name: "News ", href: "#link" },
  { name: "Our Team", href: "#our-team" },
  { name: "About", href: "#about" },
];

export const HeroHeader = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

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

  return (
    <header>
      <nav data-state={isOpen && "active"} className="fixed z-99 w-full px-2">
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-400 lg:px-12",
            isScrolled &&
              "bg-transparent backdrop-blur-[30px] max-w-4xl rounded-2xl border border-black/15 lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-2">
            <div className="flex w-full items-center justify-between lg:w-auto">
              {/* Logo */}
              <a
                href="#"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <img src="./logo.svg" alt="logo" className="h-12" />
              </a>

              {/* Search (Mobile Only) */}
              <div className="flex items-center gap-2 lg:hidden text-[#033009">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSearchOpen(true)}
                  className="text-muted-foreground hover:text-accent-foreground"
                >
                  <Search className="h-5 w-5" />
                </Button>

                <Menu as="div" className="relative inline-block text-left">
                  <MenuButton
                    as={Button}
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <span className="hidden lg:inline">EN</span>
                    <Globe className="h-4 w-4" />
                  </MenuButton>

                  <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right rounded-md border bg-background shadow-lg focus:outline-none z-50">
                    {[
                      "🇺🇸 English",
                      "🇮🇩 Indonesia",
                      "🇯🇵 Japan",
                      "🇫🇷 France",
                    ].map((lang) => (
                      <MenuItem key={lang}>
                        {({ active }) => (
                          <button
                            onClick={() => {
                              // logic ganti bahasa di sini
                            }}
                            className={`${
                              active
                                ? "bg-accent text-accent-foreground"
                                : "text-foreground"
                            } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                          >
                            {lang}
                          </button>
                        )}
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>

                {/* Burger menu */}
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

            {/* Desktop Menu */}
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

            {/* Action Buttons */}
            <div
              className={cn(
                "text-[#033009] bg-background hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
                isOpen && "block lg:flex"
              )}
            >
              <div className="lg:hidden mb-0">
                <ul className="space-y-6 font-normal">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-black text-center hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:flex w-full items-center space-x-4 hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-accent-foreground hidden lg:flex"
                  onClick={() => setSearchOpen(true)}
                >
                  <Search className="h-4 w-4" />
                  <span className="ml-2 hidden lg:inline">Search</span>
                </Button>

                <Menu as="div" className="relative inline-block text-left">
                  <MenuButton
                    as={Button}
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <span className="hidden lg:inline">EN</span>
                    <Globe className="h-4 w-4" />
                  </MenuButton>

                  <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right rounded-md border bg-background shadow-lg focus:outline-none z-50">
                    {["English", "Indonesia", "Japan", "France"].map((lang) => (
                      <MenuItem key={lang}>
                        {({ active }) => (
                          <button
                            onClick={() => {
                              // logic ganti bahasa di sini
                            }}
                            className={`${
                              active
                                ? "bg-accent text-accent-foreground"
                                : "text-foreground"
                            } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                          >
                            {lang}
                          </button>
                        )}
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Dialog */}
      <Dialog
        open={searchOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={setSearchOpen}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Payment successful
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={() => setSearchOpen(false)}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </header>
  );
};
