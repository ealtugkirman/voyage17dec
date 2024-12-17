"use client";

import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface SectionProps {
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({ title, description }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

function KeyChangeLayout() {
  const t = useTranslations("KeyChangeLayout");

  return (
    <div className="max-w-6xl mx-auto px-4 py-32">
      <h2 className="text-sm uppercase text-gray-500 mb-2">{t('companiesHireUs')}</h2>
      <h1 className="text-4xl md:text-5xl font-bold mb-12">{t('whenItsTimeForKeyChange')}</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Section
            title={t('reinvention.title')}
            description={t('reinvention.description')}
          />
          <Section
            title={t('transformation.title')}
            description={t('transformation.description')}
          />
          <Section
            title={t('breakthrough.title')}
            description={t('breakthrough.description')}
          />
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt={t('abstractGraphicAlt')}
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default KeyChangeLayout;