"use client";

import Link from "next/link";
import { MenuItem } from "./menuItem";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { HiX, HiMenu } from "react-icons/hi";
import { ResponsiveStyle } from "./responsiveStyle";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Deteksi Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-2 lg:px-20 transition-all duration-300 ${
        navbarBg ? "bg-black/50 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <Link
        href="/"
        className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-widest animate-pulse"
      >
        LOGIX
      </Link>

      <ul className="space-x-6 hidden md:flex">
        {MenuItem.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`font-extralight transition-colors duration-300 border-b-2 ${
                isActive
                  ? "text-red-500 border-red-500"
                  : "border-transparent hover:text-red-500 hover:border-red-500"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </ul>

      <div className="md:hidden z-50">
        <button onClick={toggleMenu}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={menuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -180, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 180, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {menuOpen && (
        <ResponsiveStyle pathname={pathname} setMenuOpen={setMenuOpen} />
      )}
    </nav>
  );
};
