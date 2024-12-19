"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useSelectedBadge, Industry } from "@/hooks/useSelectedBadge";
import { useTranslations } from "next-intl";
import RotatingCube from "../threed/rotatingcube";

const itemVariants = {
  hidden: { x: -30, y: 20, opacity: 0 },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

function SecondHero() {
  const t = useTranslations("SecondHero");
  const { selectedBadge, setSelectedBadge } = useSelectedBadge();
  const controls = useAnimation();
  const [counters, setCounters] = useState({ team: 0, projects: 0, years: 0 });

  const industries: Industry[][] = [
    ["Web Development", "UI", "UX", "Web3"],
    ["Frontend Development", "ReactJs Development", "Nextjs Development"],
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const badgeVariants = {
    initial: { scale: 1 },
    selected: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  useEffect(() => {
    controls.start("visible");
    const interval = setInterval(() => {
      setCounters((prev) => ({
        team: Math.min(prev.team + 1, 150),
        projects: Math.min(prev.projects + 5, 500),
        years: Math.min(prev.years + 1, 17),
      }));
    }, 30);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 pb-32">
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-12"
        initial="hidden"
        animate={controls}
        variants={containerVariants}>
        <motion.div className="flex-1 space-y-8" variants={itemVariants}>
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight max-w-2xl"
            variants={itemVariants}>
            {t("heroTitle")}
          </motion.h2>

          <motion.div className="space-y-4" variants={itemVariants}>
            {industries.map((row, idx) => (
              <div key={idx} className="flex flex-wrap gap-2">
                {row.map((industry) => (
                  <motion.div
                    key={industry}
                    variants={badgeVariants}
                    initial="initial"
                    animate={
                      selectedBadge === industry ? "selected" : "initial"
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <button
                      className={`px-6 py-2 rounded-2xl text-md cursor-pointer transition-all duration-200 ${
                        selectedBadge === industry
                          ? "bg-black text-white"
                          : "border border-gray-300 text-gray-700"
                      }`}
                      onClick={() => setSelectedBadge(industry)}>
                      {t(industry.toLowerCase().replace(/ /g, ""))}
                    </button>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          variants={itemVariants}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedBadge || "default"}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={itemVariants}>
              <Canvas
                className="w-64 md:w-80 lg:w-96 h-auto"
                camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <RotatingCube
                  color={
                    selectedBadge === "Web Development"
                      ? "#FF5733"
                      : selectedBadge === "UI"
                      ? "#33FF57"
                      : "#3357FF"
                  }
                  geometryType={
                    selectedBadge === "Web Development"
                      ? "box"
                      : selectedBadge === "UI"
                      ? "sphere"
                      : "cone"
                  }
                />
                <OrbitControls enableZoom={false} />
              </Canvas>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SecondHero;



