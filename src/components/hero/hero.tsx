"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import ShimmerButton from "../ui/shimmer-button";
import BlurIn from "../ui/blur-in";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Stagger efektini yavaşlatmak için artırıldı
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50, // Animasyonu yavaşlatmak için azaltıldı
      damping: 10, // Daha yavaş bir etki için biraz azaltıldı
      duration: 1.2, // Animasyonu yavaşlatmak için artırıldı
    },
  },
};

function Hero() {
  const t = useTranslations("Hero");

  return (
    <motion.div
      className="flex flex-row items-center text-center justify-center max-w-6xl mx-auto py-24 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <div>
        <motion.div
          className="text-7xl leading-[1.1] tracking-tight font-light mb-8"
          variants={itemVariants}>
          <BlurIn word={t("heroTitle")} />
        </motion.div>

        <motion.p
          className="text-xl leading-relaxed text-muted-foreground text-center mb-10"
          variants={itemVariants}>
          {t("heroSubtitle")}
        </motion.p>
        <motion.div
          className="flex gap-6 items-center justify-center"
          variants={itemVariants}>
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white from-white to-slate-900/10 lg:text-lg">
              {t("contactUs")}
            </span>
          </ShimmerButton>

          <ShimmerButton
            className="shadow-2xl px-10"
            background="#311ed5"
            shimmerColor="#ffffff">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
              {t("projects")}
            </span>
          </ShimmerButton>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
