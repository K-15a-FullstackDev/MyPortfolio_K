import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRocket, FaBars, FaTimes } from "react-icons/fa";

const navigationItems = [
  { id: "hero", label: "Home" },
  { id: "tools", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "border-white/10 bg-black/80 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-white sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="group flex items-center gap-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Go to the top of the portfolio"
        >
          <FaRocket
            className="text-xl text-yellow-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            aria-hidden="true"
          />

          <span className="font-heading text-lg font-extrabold tracking-wide sm:text-xl">
            Kushal's
            <span className="text-yellow-400"> Portfolio</span>
          </span>
        </button>

        <nav
          className="hidden items-center gap-7 md:flex lg:gap-9"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="group relative rounded-sm py-2 text-sm font-medium uppercase tracking-[0.12em] text-gray-300 transition-colors duration-300 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              {item.label}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </motion.button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white transition duration-300 hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 md:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? (
            <FaTimes aria-hidden="true" />
          ) : (
            <FaBars aria-hidden="true" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-6">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: index * 0.04,
                  }}
                  className="border-b border-white/5 px-2 py-4 text-left text-sm font-semibold uppercase tracking-[0.14em] text-gray-300 transition-colors duration-300 last:border-b-0 hover:text-yellow-400 focus:outline-none focus:text-yellow-400"
                >
                  <span className="mr-3 text-xs text-yellow-400/70">
                    0{index + 1}
                  </span>

                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
