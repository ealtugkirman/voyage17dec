// src/components/ui/navbar/LanguageSwitcher.tsx
'use client';

import { Button } from '@/components/ui/button';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

function LanguageSwitcher() {
  const t = useTranslations('Navbar');
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState('en');

  useEffect(() => {
    const locale = pathname.split('/')[1];
    if (['en', 'tr'].includes(locale)) {
      setCurrentLocale(locale);
    } else {
      setCurrentLocale('en'); // Varsayılan dil
    }
  }, [pathname]);

  const handleLanguageChange = () => {
    const newLocale = currentLocale === 'en' ? 'tr' : 'en';
    const segments = pathname.split('/');
    
    if (['en', 'tr'].includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    const newPath = segments.join('/') || '/';
    router.push(newPath);
  };

  return (
    <Button onClick={handleLanguageChange} variant="ghost" className="text-lg font-medium">
      {currentLocale === 'en' ? 'TR' : 'EN'}
    </Button>
  );
}

export default LanguageSwitcher;