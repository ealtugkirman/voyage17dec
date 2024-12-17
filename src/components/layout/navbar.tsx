"use client";

import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import logo from "@/public/dvaLogo.png";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";
import HamburgerMenu from "./hamburger-menu";

function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <nav className="sticky top-0 flex items-center justify-between lg:px-20 lg:py-5 px-10 py-2 ">
      <Link href="/" className="text-xl text-[#311ed9] font-semibold">
        <Image src={logo} alt="Digital Voyage" width={50} height={50} />
      </Link>
      <div className="flex flex-row items-center space-x-4">
        <LanguageSwitcher />

        <HamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;
