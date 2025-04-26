"use client";
import RoadImage from "@/assets/images/RoadImage.jpg";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { containerVariantsX, containerVariantsY } from "../Animation/Animation";

export const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariantsY}
      className="flex flex-col w-full mt-20"
    >
      <div className="relative flex flex-col items-center justify-center w-full h-[650px] overflow-hidden">
        <Image
          src={RoadImage}
          alt="Road Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#011E62]/70 to-[#011E62]" />
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariantsX}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-medium mb-4">
            We are revolutionizing logistics to meet a growing market
          </h1>
          <p className="max-w-2xl font-light text-base md:text-lg mb-6">
            Transforming logistics with innovative solutions, by using advanced
            technologies and data-driven strategies to improve efficiency,
            reduce costs, and meet the growing demands of the market.
          </p>
          <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-[#011E62] transition">
            Learn More
          </button>
        </motion.div>
      </div>
      <div className="w-full bg-[#011E62] h-auto lg:h-[450px]">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariantsY}
          className="flex flex-col lg:grid lg:grid-cols-2"
        >
          <div className="flex flex-col pl-4 lg:pl-20">
            <h1 className="text-white text-[100px]">LOGIX</h1>
            <div className="flex flex-col mt-6">
              <p className="text-white text-[16px]">Stay Connected</p>
              <p className="text-white text-[10px] w-[300px] mt-2">
                Join our community to unclok exclusive insights and innovative
                solutions for all logistics needs
              </p>
              <div className="flex flex-row items-center mt-4 gap-4">
                <SlSocialInstagram size={20} />
                <SlSocialLinkedin size={20} />
              </div>
            </div>
          </div>
          <div className="flex flex-col pr-4 mt-5 lg:mt-0 lg:pr-20 items-end">
            <h1 className="text-white text-[40px] text-end">
              The Future of Urban Delivery Starts Here
            </h1>
            <div className="grid grid-cols-3 mt-6 gap-10 pl-4 lg:pl-0">
              <div className="flex flex-col">
                <p className="text-white text-[20px] lg:text-[30px]">Company</p>
                <p className="text-white lg:text-[20px] mt-2 font-extralight">
                  About
                </p>
                <p className="text-white lg:text-[20px] mt-2 font-extralight">
                  Blog
                </p>
                <p className="text-white lg:text-[20px] mt-2 font-extralight">
                  Contact
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-white text-[20px] lg:text-[30px]">Support</p>
                <p className="text-white lg:text-[20px] mt-2 font-extralight">
                  FAQ
                </p>
                <p className="text-white lg:text-[20px] mt-2 font-extralight">
                  Customer Support
                </p>
                <p className="text-white lg:text-[20px] mt-2 font-extralight">
                  Tracking
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-white text-[20px] lg:text-[30px]">Service</p>
                <p className="text-white lg:text-[20px] mt-2 font-extralight">
                  Road Freight
                </p>
                <p className="text-white lg:text-[20px] mt-2 font-extralight">
                  Air Freight
                </p>
                <p className="text-white lg:text-[20px] mt-2 font-extralight">
                  Sea Freight
                </p>
                <p className="text-white lg:text-[20px] mt-2 font-extralight">
                  Rail Freight
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-row items-start lg:items-center justify-between border-t border-white w-full mt-16 px-4 lg:px-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 mt-2">
            <p className="font-extralight text-[10px]">Privacy Policy</p>
            <p className="font-extralight text-[10px]">Sitemap</p>
            <p className="font-extralight text-[10px]">Terms of Use</p>
          </div>
          <span className="font-extralight text-[10px] mt-2">
            © 2025 LOGIX. All rights reserved | Powered by Muhammad Ari
          </span>
        </div>
      </div>
    </motion.div>
  );
};
