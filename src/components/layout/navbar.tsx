"use client";

import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";
import HamburgerMenu from "./hamburger-menu";

function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <nav className="flex items-center justify-between px-12 py-4 ">
      <Link href="/" className="text-xl text-[#311ed9] font-semibold">
        digitalvoyage.agency
      </Link>
      <div className="flex flex-row items-center space-x-4">
        <LanguageSwitcher />

        <HamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;
