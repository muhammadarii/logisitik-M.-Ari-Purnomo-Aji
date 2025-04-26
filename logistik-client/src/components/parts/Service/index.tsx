"use client";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { containerVariantsY, containerVariantsX } from "../Animation/Animation";
import { ServiceProps } from "@/types/types";

export const Service: React.FC<ServiceProps> = ({
  title,
  vision,
  mision,
  image,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="relative lg:grid lg:grid-cols-2 items-start gap-5 mt-10 lg:mt-20 px-4 lg:px-0">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariantsY}
        className="flex flex-col"
      >
        <div className="flex flex-row gap-2 items-center">
          <div className="bg-red-500 w-3 h-3 rounded-full" />
          <p className="text-[14px] font-light bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-widest">
            {title}
          </p>
        </div>

        <h1 className="lg:text-[22px] font-light mt-4">
          Minimalkan{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            kehilangan dan kesalahan stok.
          </span>{" "}
          Dapatkan kendali penuh atas data barang masuk dan keluar dengan{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            sistem berbasis teknologi
          </span>{" "}
          terkini
        </h1>

        <div className="flex flex-col gap-5 mt-10">
          <div className="flex flex-row lg:gap-[100px]">
            <div className="flex flex-col text-red-500 w-[100px]">
              <p>01</p>
              <span>Vision</span>
            </div>
            <h1 className="text-[14px] font-light w-[280px] lg:w-[300px]">
              {vision}
            </h1>
          </div>
          <div className="flex flex-row lg:gap-[100px]">
            <div className="flex flex-col text-red-500 w-[100px]">
              <p>02</p>
              <span>Mission</span>
            </div>
            <h1 className="text-[14px] font-light w-[280px] lg:w-[300px]">
              {mision}
            </h1>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariantsX}
        className="w-full h-full pt-10 lg:mt-0"
      >
        <Image
          src={image}
          priority
          alt="Service Image"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};
