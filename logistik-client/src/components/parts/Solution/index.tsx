"use client";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  containerVariantsY,
  fadeContainerVariants,
} from "../Animation/Animation";
import { SolutionProps } from "@/types/types";

export const Solution: React.FC<SolutionProps> = ({ title, data }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="flex flex-col mt-10">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariantsY}
        className="flex flex-col items-center"
      >
        <div className="flex flex-row items-center gap-4 ">
          <div className="bg-red-500 w-3 h-3 rounded-full" />
          <p className="text-[14px] font-light bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-widest">
            {title}
          </p>
        </div>
        <h1 className="lg:text-[32px] font-light mt-2 text-center lg:w-[600px]">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Expertly Managing
          </span>{" "}
          Every Step From Transit {""}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            to Warehouseing
          </span>
        </h1>
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeContainerVariants}
        className="flex flex-col items-center lg:grid lg:grid-cols-2 gap-10 mt-10"
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="relative w-screen h-[300px] lg:w-[400px] lg:h-[300px] px-4 lg:px-0"
          >
            <div className="absolute w-full h-full bg-gradient-to-r from-indigo-500/50 via-indigo-500/50 to-transparent rounded-2xl" />
            <Image
              src={item.image}
              alt="image"
              priority
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute top-[20px] left-[20px]">
              <span className="bg-white/40 backdrop-blur-lg text-white text-[12px] px-2 py-1 font-light rounded-[20px]">
                {item.title}
              </span>
              <h1 className="lg:text-[20px] font-semibold mt-10 w-[250px] lg:w-fit">
                {item.description}
              </h1>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
