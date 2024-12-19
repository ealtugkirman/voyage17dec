"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
  hidden: { x: -20, y: 20, opacity: 0 },
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
  return (
    <motion.section className="py-16 px-4 max-w-5xl mx-auto md:py-32 bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="text-md md:text-xl font-light mb-2 max-w-2xl text-gray-600"
          initial={{ opacity: 0, x: -50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          variants={itemVariants}>
          Case Studies
        </motion.h2>
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-16 md:mb-24 max-w-2xl text-gray-900"
          initial={{ opacity: 0, x: -50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          variants={itemVariants}>
          High-performing digital products with great designs.
        </motion.h2>

        <motion.div
          className="grid grid-cols-5  gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          <div className="col-span-3 aspect-[4/3] row-span-3 bg-red-200">
            <motion.div
              variants={itemVariants}
              initial={{ opacity: 0, x: -50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden transition-all duration-300">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="https://picsum.photos/600/400?random=1"
                  alt="103% conversion increase in a Shopify store with menswear apparel"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-gray-500 mb-2 uppercase">
                  E-COMMERCE
                </div>
                <h3 className="text-lg font-medium leading-tight text-gray-900">
                  103% conversion increase in a Shopify store with menswear
                  apparel
                </h3>
              </div>
            </motion.div>
          </div>
          <div className="col-span-1" />
          <div className="col-span-2 row-span-5">
            <motion.div
              variants={itemVariants}
              initial={{ opacity: 0, x: -50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden transition-all duration-300">
              <div className="relative aspect-[3/5] w-full overflow-hidden">
                <Image
                  src="https://picsum.photos/400/600?random=2"
                  alt="Enhanced electric scooter experience with an innovative mobile app"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-gray-500 mb-2 uppercase">
                  MOBILE APP
                </div>
                <h3 className="text-lg font-medium leading-tight text-gray-900">
                  Enhanced electric scooter experience with an innovative mobile
                  app
                </h3>
              </div>
            </motion.div>
          </div>
          <div className="col-span-5">
            <motion.div
              variants={itemVariants}
              initial={{ opacity: 0, x: -50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden transition-all duration-300">
              <div className="relative aspect-[3/1] w-full overflow-hidden">
                <Image
                  src="https://picsum.photos/600/400?random=3"
                  alt="Lightweight and easy-to-read website for a cybersecurity market leader"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-gray-500 mb-2 uppercase">
                  WEB DESIGN
                </div>
                <h3 className="text-lg font-medium leading-tight text-gray-900">
                  Lightweight and easy-to-read website for a cybersecurity
                  market leader
                </h3>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 md:mt-24 flex flex-col md:flex-row items-start md:items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          <motion.p
            className="text-lg text-gray-600 mb-4 md:mb-0"
            variants={itemVariants}>
            Hungry for more examples?
          </motion.p>
          <motion.button
            className="px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300"
            variants={itemVariants}>
            Check Our Case Studies
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Showcase;
