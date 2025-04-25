"use client";

import Link from "next/link";
import { MenuItem } from "./menuItem";
import { motion } from "framer-motion";

type MenuMobileProps = {
  pathname: string;
  setMenuOpen: (value: boolean) => void;
};

export const ResponsiveStyle: React.FC<MenuMobileProps> = ({
  pathname,
  setMenuOpen,
}) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "0%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 w-[250px] h-full bg-white/10 backdrop-blur-xs flex flex-col items-start pt-[80px] pl-[20px] gap-6 z-10 shadow-lg rounded-l-lg"
    >
      <h1 className="font-semibold text-white">Menu</h1>
      <ul className="flex flex-col space-y-5">
        {MenuItem.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className={`font-extralight transition-colors duration-300 ${
                isActive
                  ? "text-red-500"
                  : "border-transparent hover:text-red-500"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </ul>
    </motion.div>
  );
};
