"use client";

import React, { useState } from "react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { X, Menu } from "lucide-react";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navbar");

  const menuItems = [
    { href: "/works", label: t("works") },
    { href: "/blog", label: t("blog") },
    { href: "/about", label: t("about") },
    { href: "/conceptzilla", label: "Conceptzilla" },
  ];

  const services = [
    t("identityBranding"),
    t("webDevelopment"),
    t("uiDesign"),
    t("uxDesign"),
    t("frontendDevelopment"),
  ];

  const AnimatedHamburgerButton = () => (
    <motion.button
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      onClick={() => setIsOpen((prev) => !prev)}
      className="relative h-12 w-12 flex items-center justify-center">
      {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
    </motion.button>
  );

  return (
    <Sheet  open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Menu className="h-8 w-8" />
          <span className="sr-only">{t("menu")}</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left text-lg font-normal text-muted-foreground">
            {t("menu")}
          </SheetTitle>
        </SheetHeader>
        <motion.div
          className="mt-8 flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}>
              <Link
                href={item.href}
                className="text-2xl sm:text-3xl font-medium transition-colors hover:text-muted-foreground">
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: menuItems.length * 0.1 }}>
            <Button className="mt-4 w-fit text-lg">{t("getInTouch")}</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          <h3 className="text-xl text-muted-foreground mb-4">
            {t("services")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}>
                <Link
                  href={`/services/${service
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(/ /g, "-")}`}
                  className="text-lg transition-colors hover:text-muted-foreground">
                  {service}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}

export default HamburgerMenu;
