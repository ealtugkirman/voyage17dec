"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import InteractiveHoverButton from "../ui/interactive-hover-button";
import { useTranslations } from "next-intl"; // Çeviri hook'unu ekleyin

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { x: -50, y: 50, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

function Showcase() {
  const t = useTranslations("Showcase"); // "Showcase" namespace'unu kullanın
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    }
  };

  const handleMouseLeave = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Videoyu başa sarın
    }
  };

  return (
    <motion.section
      className="py-16 px-4 max-w-5xl mx-auto md:py-32 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}>
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="text-md md:text-xl font-light mb-2 max-w-2xl text-gray-600"
          variants={itemVariants}>
          {t("sectionTitle")}
        </motion.h2>
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-16 md:mb-24 max-w-2xl text-gray-900"
          variants={itemVariants}>
          {t("sectionSubtitle")}
        </motion.h2>

        <motion.div
          className="grid grid-cols-5 gap-8 md:gap-12"
          variants={containerVariants}>
          <div className="col-span-3 aspect-[4/3] row-span-3 ">
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden transition-all duration-300">
              <div
                className="relative aspect-[4/3] w-full overflow-hidden group"
                onMouseEnter={() => handleMouseEnter(videoRef1)}
                onMouseLeave={() => handleMouseLeave(videoRef1)}>
                <video
                  ref={videoRef1}
                  src="/movies/bilkent.mp4"
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  aria-label={t("categoryEcommerce")}
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-gray-500 mb-2 uppercase">
                  {t("categoryEcommerce")}
                </div>
                <h3 className="text-lg font-medium leading-tight text-gray-900">
                  {t("ecommerceDescription")}
                </h3>
              </div>
            </motion.div>
          </div>
          <div className="col-span-1" />
          <div className="col-span-2 row-span-5">
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden transition-all duration-300">
              <div
                className="relative aspect-[3/5] w-full overflow-hidden group"
                onMouseEnter={() => handleMouseEnter(videoRef2)}
                onMouseLeave={() => handleMouseLeave(videoRef2)}>
                <video
                  ref={videoRef2}
                  src="/movies/bento.mov"
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  aria-label={t("categoryMobileApp")}
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-gray-500 mb-2 uppercase">
                  {t("categoryMobileApp")}
                </div>
                <h3 className="text-lg font-medium leading-tight text-gray-900">
                  {t("mobileAppDescription")}
                </h3>
              </div>
            </motion.div>
          </div>
          <div className="col-span-5">
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden transition-all duration-300">
              <div
                className="relative aspect-[5/3] w-full overflow-hidden group"
                onMouseEnter={() => handleMouseEnter(videoRef3)}
                onMouseLeave={() => handleMouseLeave(videoRef3)}>
                <video
                  ref={videoRef3}
                  src="/movies/ati.mov"
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  aria-label={t("categoryWebDesign")}
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-gray-500 mb-2 uppercase">
                  {t("categoryWebDesign")}
                </div>
                <h3 className="text-lg font-medium leading-tight text-gray-900">
                  {t("webDesignDescription")}
                </h3>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 md:mt-24 flex flex-col md:flex-row items-start md:items-center justify-between"
          variants={containerVariants}>
          <motion.p
            className="text-lg text-gray-600 mb-4 md:mb-0"
            variants={itemVariants}>
            {t("ctaPrompt")}
          </motion.p>
          <motion.div
            className=" text-gray-900 font-light rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300"
            variants={itemVariants}>
            <InteractiveHoverButton
              className="text-black w-96"
              text={t("ctaText")}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Showcase;
