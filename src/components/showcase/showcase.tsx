"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    category: "E-LEARNING WEB PLATFORM",
    title:
      "Drawing and painting education platform that makes learning fun again",
    description:
      "Proko, an educational web platform for artists by artists, outgrew its original magnitude and required a major transformation. Together we created a seamless learning experience.",
    image: "https://picsum.photos/seed/proko/800/600",
  },
  {
    id: 2,
    category: "BRANDING, MOBILE APPLICATION",
    title: "Brand identity and mobile app design for a concierge app",
    description:
      "Navi Africa is a pioneering brand in the African travel industry, providing a comprehensive and user-friendly mobile app.",
    image: "https://picsum.photos/seed/navi/800/600",
  },
  {
    id: 3,
    category: "PRIVATE COMMUNITY ECOSYSTEM, MOBILE APPLICATION, WEBSITE",
    title:
      "Private membership community ecosystem for 1.6 million premier partner locations",
    description:
      "SELECT is a private membership community with benefits for business and recreational travelers, nightlife aficionados, restaurant enthusiasts, and more.",
    image: "https://picsum.photos/seed/select/800/600",
  },
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
      damping: 15,
    },
  },
};
function Showcase() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(projects.map((project) => project.category.split(", ")[0]))
  );

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category.includes(selectedCategory))
    : projects;

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-16">
        <div className="space-y-4">
          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-500 uppercase tracking-wider">
            Showcase
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold">
            Proudly presenting a few of our recent works
          </motion.h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory || "all"}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                variants={itemVariants}
                className={`group cursor-pointer ${
                  index % 2 === 1 ? "md:mt-32" : ""
                }`}>
                <div className="space-y-6">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500 uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-semibold group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Showcase;
