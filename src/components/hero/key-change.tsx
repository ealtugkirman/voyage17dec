"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import IconCloud from "../ui/icon-cloud";

interface SectionProps {
  title: string;
  description: string;
}
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const Section: React.FC<SectionProps> = ({ title, description }) => (
  <motion.div
    className="mb-8"
    initial={{ opacity: 0, x: -50, y: 50 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

function KeyChangeLayout() {
  const t = useTranslations("KeyChangeLayout");

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-32"
      initial={{ opacity: 0, x: -50, y: 50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}>
      <motion.h2
        className="text-sm uppercase text-gray-500 mb-2"
        initial={{ opacity: 0, x: -50, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}>
        {t("companiesHireUs")}
      </motion.h2>
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-12"
        initial={{ opacity: 0, x: -50, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}>
        {t("whenItsTimeForKeyChange")}
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-8">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}>
          <Section
            title={t("reinvention.title")}
            description={t("reinvention.description")}
          />
          <Section
            title={t("transformation.title")}
            description={t("transformation.description")}
          />
          <Section
            title={t("breakthrough.title")}
            description={t("breakthrough.description")}
          />
        </motion.div>
        <motion.div
          className="hidden lg:block absolute right-0"
          initial={{ opacity: 0, x: -50, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}>
          <IconCloud iconSlugs={slugs} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default KeyChangeLayout;
