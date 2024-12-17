"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Increased from 0.2 to slow down the stagger effect
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50, // Reduced from 100 to make the animation slower
      damping: 10, // Slightly reduced for a slower effect
      duration: 1.2, // Increased from 0.8 to make the animation slower
    },
  },
};

function Hero() {
  return (
    <motion.div
      className="flex flex-row items-center text-center justify-center max-w-6xl mx-auto py-24 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <div>
        <motion.h1
          className="text-7xl leading-[1.1] tracking-tight font-base mb-8"
          variants={itemVariants}>
          Fikirlerinizi Güçlü Web Çözümlerine Dönüştürüyoruz
        </motion.h1>
        <motion.p
          className="text-xl leading-relaxed text-muted-foreground text-center  mb-10"
          variants={itemVariants}>
          Kullanıcı dostu, görsel açıdan çekici ve stratejik hedeflerinizi
          destekleyen web siteleri tasarlıyoruz.
        </motion.p>
        <motion.div
          className="flex gap-6 items-center justify-center"
          variants={itemVariants}>
          <Button
            size="lg"
            variant="default"
            className="rounded-full px-12 py-4 bg-primary text-primary-foreground">
            Bize Ulaşın
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-12 py-4 bg-background text-foreground border border-input">
            Projeler
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
