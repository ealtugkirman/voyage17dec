"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Check, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", name: "En" },
  { code: "tr", name: "Tr" },
];

function LanguageSwitcher() {
  const t = useTranslations("Navbar");
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState("en");

  useEffect(() => {
    const locale = pathname.split("/")[1];
    if (languages.some((lang) => lang.code === locale)) {
      setCurrentLocale(locale);
    } else {
      setCurrentLocale("en"); // Default language
    }
  }, [pathname]);

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split("/");

    if (languages.some((lang) => lang.code === segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    const newPath = segments.join("/") || "/";
    router.push(newPath);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2">
          <span className="hidden sm:inline-block">{currentLanguage.name}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span>{language.name}</span>
            </span>
            {currentLocale === language.code && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSwitcher;
