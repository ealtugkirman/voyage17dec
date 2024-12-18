"use client";

import InteractiveHoverButton from "../ui/interactive-hover-button";
import ShimmerButton from "../ui/shimmer-button";
import Accordion from "./cta-accordion";
import { useTranslations } from "next-intl";

function CtaSection() {
  const t = useTranslations("CtaSection");

  const accordionItems = [
    {
      title: t("accordion.webdevelopment.title"),
      content: t("accordion.webdevelopment.content"),
    },
    {
      title: t("accordion.ui.title"),
      content: t("accordion.ui.content"),
    },
    {
      title: t("accordion.ux.title"),
      content: t("accordion.ux.content"),
    },
    {
      title: t("accordion.frontenddevelopment.title"),
      content: t("accordion.frontenddevelopment.content"),
    },
    {
      title: t("accordion.nextjsdevelopment.title"),
      content: t("accordion.nextjsdevelopment.content"),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 md:py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 py-12 md:gap-24">
        {/* Left Column */}
        <div className="space-y-7">
          <h1 className="text-3xl md:text-5xl font-thin leading-tight">
            {t("heroTitle")}
          </h1>
          <div className="space-y-6 text-lg text-gray-300">
            <p>{t("heroSubtitle")}</p>
            <p className="whitespace-pre-wrap">{t("heroSubtitleAdditional")}</p>
          </div>
          <InteractiveHoverButton  className="text-black" text={t("getInTouch")} />
        </div>

        {/* Right Column */}
        <div>
          <Accordion items={accordionItems} />
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
