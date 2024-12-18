"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LogoSliderLeft from "./logo-slider-left";
import LogoSliderRight from "./logo-slider-right";

const companies = [
  { name: "Select", logo: "https://picsum.photos/seed/select/120/40" },
  { name: "CGMA", logo: "https://picsum.photos/seed/cgma/120/40" },
  { name: "Proko", logo: "https://picsum.photos/seed/proko/120/40" },
  { name: "Cubebrush", logo: "https://picsum.photos/seed/cubebrush/120/40" },
  { name: "Swyft", logo: "https://picsum.photos/seed/swyft/120/40" },
  { name: "ZAD", logo: "https://picsum.photos/seed/zad/120/40" },
  { name: "Soliq", logo: "https://picsum.photos/seed/soliq/120/40" },
  { name: "Void", logo: "https://picsum.photos/seed/void/120/40" },
  { name: "RTB", logo: "https://picsum.photos/seed/rtb/120/40" },
  { name: "OMG Omnicom", logo: "https://picsum.photos/seed/omnicom/120/40" },
  { name: "Google", logo: "https://picsum.photos/seed/google/120/40" },
  { name: "Symbolik", logo: "https://picsum.photos/seed/symbolik/120/40" },
  {
    name: "Universal Music Group",
    logo: "https://picsum.photos/seed/universal/120/40",
  },
  { name: "Metro", logo: "https://picsum.photos/seed/metro/120/40" },
  {
    name: "Imperial College London",
    logo: "https://picsum.photos/seed/imperial/120/40",
  },
  { name: "AAX", logo: "https://picsum.photos/seed/aax/120/40" },
  { name: "TBWA", logo: "https://picsum.photos/seed/tbwa/120/40" },
  { name: "Aurox", logo: "https://picsum.photos/seed/aurox/120/40" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

function Customers() {
  return (
    <section className="mx-auto px-4 py-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center mb-16">
        <motion.h2
          variants={itemVariants}
          className="text-sm uppercase text-gray-500 mb-4">
          Our friends
        </motion.h2>
        <motion.h3
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto">
          Join this group of outstanding brands we're happy to call our clients
        </motion.h3>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full">
        <LogoSliderLeft />
      </motion.div>
         <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full">
        <LogoSliderRight />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto">
        <motion.blockquote
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-700 mb-6">
          "Everybody who's seen the app tells me how much they like it. I'm very
          pleased with the app."
        </motion.blockquote>

        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <Image
            src="https://picsum.photos/seed/steven/48/48"
            alt="Steven Lee"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <div className="font-semibold">Steven Lee</div>
            <div className="text-sm text-gray-500">
              VP Marketing, Fit For Bucks
            </div>
          </div>
        </motion.div>

        <motion.button
          variants={itemVariants}
          className="mt-4 text-sm text-gray-500 hover:text-gray-700">
          Show review
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Customers;
