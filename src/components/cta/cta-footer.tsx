"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  Clock,
  MapPin,
} from "lucide-react";
import InteractiveHoverButton from "../ui/interactive-hover-button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

function CtaFooter() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Left Column */}
          <motion.div variants={containerVariants} className="space-y-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl md:text-6xl font-base leading-tight">
                Have an idea?
                <br />
                <span className="text-white">Let's bring it to life.</span>
              </h2>
              <p className="text-lg text-gray-300">
                Transform your vision into reality with our expert team of
                designers and developers.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <InteractiveHoverButton
                className="text-black  w-72 text-md font-semibold"
                text="Start your project"
              />
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-white" />
                <a
                  href="mailto:contact@digitalvoyage.agency"
                  className="text-lg hover:text-white transition-colors">
                  contact@digitalvoyage.agency
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={containerVariants} className="space-y-12">
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-4xl font-base">Our Services</h3>
              <ul className="grid grid-cols-2 gap-2 text-gray-300">
                {[
                  "Web Development",
                  "Mobile Apps",
                  "UI/UX Design",
                  "Branding",
                  "Digital Marketing",
                  "SEO Optimization",
                ].map((service) => (
                  <span
                    key={service}
                    className="relative hover:text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-yellow-200 before:origin-center before:h-[1px] before:w-0 hover:before:w-[20%] before:bottom-0 before:left-[20%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-yellow-200 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                  >
                    {service}
                  </span>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light">Contact Information</h3>
                <div className="space-y-2 text-gray-300">
                  <p className="flex items-center">
                    <Phone className="w-3 h-3 mr-2 text-white" />
                    <span>+90 530 971 1962</span>
                  </p>
                  <p className="flex items-center">
                    <Clock className="w-3 h-3 mr-2 text-white" />
                    <span>Mon - Fri: 10:00 - 18:00</span>
                  </p>
                  <p className="flex items-center">
                    <Clock className="w-3 h-3 mr-2 text-white" />
                    <span>Sat: 10:00 - 15:00</span>
                  </p>
                </div>
              </div>
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-light mb-4">Connect with us</h3>
                <nav className="flex gap-6">
                  <Link
                    href="https://twitter.com/ealtugk"
                    target="_blank"
                    className="hover:text-white transition-colors">
                    <Twitter className="w-8 h-8" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="https://instagram.com/digitalvoyage.agency"
                    target="_blank"
                    className="hover:text-white transition-colors">
                    <Instagram className="w-8 h-8" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </nav>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CtaFooter;
