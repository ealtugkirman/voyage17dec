"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navbar");
  const [locale, setLocale] = useState("en");

  const handleLanguageChange = () => {
    const newLocale = locale === "en" ? "tr" : "en";
    setLocale(newLocale);
    window.location.href = `/${newLocale}`;
  };

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

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white">
      <Link href="/" className="text-xl font-semibold">
        shakuro
      </Link>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="relative w-10 h-10">
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.svg
                  key="close"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute">
                  <motion.path
                    d="M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                </motion.svg>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}>
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
            <span className="sr-only">{t("menu")}</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:w-[600px] overflow-y-auto">
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
                  className="text-4xl font-medium transition-colors hover:text-muted-foreground">
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
            <Button
              onClick={handleLanguageChange}
              variant="ghost"
              className="mr-2">
              {locale === "en" ? "TR" : "EN"}
            </Button>
            <div className="grid grid-cols-2 gap-6">
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
    </nav>
  );
}

export default Navbar;
