"use client";

import { useRef } from "react";
import Image from "next/image";
import InteractiveHoverButton from "../ui/interactive-hover-button";
import { useTranslations } from "next-intl"; // Çeviri hook'unu ekleyin

function DevelopmentProcess() {
  const t = useTranslations("DevelopmentProcess"); // "DevelopmentProcess" namespace'unu kullanın

  return (
    <div className="flex min-h-screen max-w-5xl mx-auto py-32">
      {/* Left side - Fixed */}
      <div className="w-[440px] sticky top-0 h-full p-8 flex flex-col">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-6">{t("sectionTitle")}</h1>
          <p className="text-muted-foreground mb-8">{t("sectionSubtitle")}</p>

          <InteractiveHoverButton
            className="text-black w-64 text-md font-light"
            text={t("startProject")}
          />
        </div>
      </div>

      {/* Right side - Scrollable */}
      <div className="flex-1 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-3 top-3 bottom-3 w-px bg-border" />

            {/* Steps */}
            <div className="space-y-12">
              {[1, 2, 3, 4, 5].map((stepNumber) => (
                <TimelineStep
                  key={stepNumber}
                  number={stepNumber}
                  title={t(`step${stepNumber}.title`)}
                  description={t(`step${stepNumber}.description`)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineStep({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="relative pl-10">
      {/* Step indicator */}
      <div className="absolute left-0 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>

      <div>
        <div className="text-sm text-muted-foreground mb-1">
          {`Step ${number}`}
        </div>
        <h2 className="text-xl font-semibold mb-3">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default DevelopmentProcess;
