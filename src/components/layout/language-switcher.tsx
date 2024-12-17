"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Check, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const languages = [
  { code: "en", name: "English" },
  { code: "tr", name: "Türkçe" },
];

function LanguageSwitcher() {
  const t = useTranslations("Navbar");
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2" aria-label={t('selectLanguage')}>
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline-block">{currentLanguage.name}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-0" align="end">
        <div className="grid gap-1 p-1">
          {languages.map((language) => (
            <Button
              key={language.code}
              variant="ghost"
              className="flex items-center justify-between w-full px-2 py-1.5 text-sm"
              onClick={() => handleLanguageChange(language.code)}
            >
              <span>{language.name}</span>
              {currentLocale === language.code && <Check className="h-4 w-4 ml-2" />}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default LanguageSwitcher;

