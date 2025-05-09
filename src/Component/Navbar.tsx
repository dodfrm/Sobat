import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

type Language = "EN" | "ID" | "JP" | "CN" | "KR" | "ES";

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Take Action", href: "#action"},
  { label: "News", href: "#news" },
  { label: "Our Team", href: "#our-team" },
  { label: "Socials", href: "#socials" },
];

const languageOptions: { code: Language; name: string; flag: string }[] = [
  { code: "EN", name: "English", flag: "🇬🇧" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩" },
  { code: "JP", name: "日本語", flag: "🇯🇵" },
  { code: "CN", name: "中文", flag: "🇨🇳" },
  { code: "KR", name: "한국어", flag: "🇰🇷" },
  { code: "ES", name: "Español", flag: "🇪🇸" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>("EN");
  const [languageMenuOpen, setLanguageMenuOpen] = useState<boolean>(false);
  const [, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    setIsOpen(false);

    if (element) {
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }, 200);
    }
  };

  // Glassmorphism effects
  const navbarBorder = useTransform(
    scrollY,
    [200, 400],
    ["0 0 0 rgba(255, 255, 255, 0)", "2px solid rgba(255, 255, 255, 0.18)"]
  );
  const navbarBlur = useTransform(
    scrollY,
    [200, 400],
    ["blur(0px)", "blur(16px)"]
  );
  const navbarShadow = useTransform(
    scrollY,
    [200, 400],
    ["0 0 0 transparent", "0 8px 32px rgba(0, 0, 0, 0.1)"]
  );
  const navbarScale = useTransform(
    scrollY,
    [200, 400],
    isMobile ? [1, 0.95] : [1, 0.83]
  );
  const navbarBorderRadius = useTransform(scrollY, [200, 400], ["0px", "16px"]);
  const textScale = useTransform(scrollY, [200, 400], [1, 1 / 0.9]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setScrolled(y > 100);
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    setLanguageMenuOpen(false);
  };

  const currentLanguage = languageOptions.find(
    (lang) => lang.code === language
  );

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50"
      style={{
        backdropFilter: navbarBlur,
        WebkitBackdropFilter: navbarBlur,
        boxShadow: navbarShadow,
        border: navbarBorder,
        scale: navbarScale,
        borderRadius: navbarBorderRadius,
        transformOrigin: "top center",
        margin: "0 16px",
        top: "16px",
      }}
      transition={{ type: "spring", damping: 20 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between md:h-19">
          {/* Logo - Left side */}
          <motion.div
            className="flex flex-shrink-0 items-center"
            style={{ scale: textScale }}
          >
            <a href="#home">
            <img
              src="/logo.svg"
              alt="SOBUM Logo"
              className="color-white ml-2 h-14 w-auto"
            /></a>
          </motion.div>

          {/* Centered Navigation - Desktop */}
          <nav className="hidden flex-1 items-center justify-center md:flex">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="font-bold text-gray-700 transition-colors duration-300 hover:text-indigo-600"
                  whileHover={{ y: -2 }}
                  style={{ scale: textScale }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </nav>

          {/* Right side - Language selector (Desktop) */}
          <div className="hidden md:block">
            <div className="relative">
              <motion.button
                onClick={toggleLanguageMenu}
                className="flex items-center gap-2 rounded-md border border-indigo-600 px-3 py-1 text-indigo-600 transition duration-300 hover:bg-indigo-50"
                style={{ scale: textScale }}
              >
                <span className="text-lg">{currentLanguage?.flag}</span>
                <span>{currentLanguage?.code}</span>
              </motion.button>

              <AnimatePresence>
                {languageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="ring-opacity-5 absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg"
                  >
                    {languageOptions.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => selectLanguage(lang.code)}
                        className={`flex w-full items-center gap-2 rounded-md px-4 py-2 text-left text-sm ${
                          language === lang.code
                            ? "bg-indigo-50 text-indigo-600"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu - Language toggle and burger button */}
          <div className="flex items-center gap-4 md:hidden">
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="flex items-center gap-1 rounded-md border border-indigo-600 px-2 py-1 text-sm"
              >
                <span className="text-lg">{currentLanguage?.flag}</span>
              </button>

              <AnimatePresence>
                {languageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="ring-opacity-5 absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg"
                  >
                    {languageOptions.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => selectLanguage(lang.code)}
                        className={`flex w-full items-center gap-2 rounded-md px-4 py-2 text-left text-sm ${
                          language === lang.code
                            ? "bg-indigo-50 text-indigo-600"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <label className="burger-3 block cursor-pointer">
              <input
                type="checkbox"
                checked={isOpen}
                onChange={toggleMenu}
                className="hidden"
              />
              <svg viewBox="0 0 32 32" className="h-9">
                <path
                  className="line line-top-bottom stroke-indigo-800"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                />
                <path className="line stroke-indigo-800" d="M7 16 27 16" />
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="rounded-md md:hidden mx-4 my-4"
            style={{
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgb(252, 248, 248)",
              border: "2px solid rgba(255, 255, 255, 0.18)",
              borderRadius: "16px",
            }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto space-y-2 rounded-md px-4 py-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="block w-full py-2 text-center font-medium text-gray-700 transition-colors duration-300 hover:text-indigo-600"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
