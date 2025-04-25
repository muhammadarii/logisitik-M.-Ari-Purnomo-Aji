"use client";
import Link from "next/link";
import { MenuItem } from "./menuItem";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";
import { ResponsiveStyle } from "./responsiveStyle";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between py-4 text-white">
      <Link href="/" className="text-lg font-semibold">
        Logistik-M. Ari Purnomo Aji
      </Link>
      <ul className="space-x-6 hidden lg:flex">
        {MenuItem.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`font-extralight transition-colors duration-300 border-b-2 ${
                isActive
                  ? "text-yellow-600 border-yellow-600"
                  : "border-transparent hover:text-yellow-600 hover:border-yellow-600"
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
