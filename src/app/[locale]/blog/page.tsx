"use client";
import Lottie from "lottie-react";
import macbook from "@/public/macbook.json";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("Blog");

  return (
    <div className="flex flex-col items-center justify-center py-24">
      <h1 className="text-4xl font-bold  text-center">{t("title")}</h1>
      <p className="text-xl text-muted-foreground mt-4 text-center">
        {t("description")}
      </p>
      <div className="max-w-md w-full">
        <Lottie animationData={macbook} />
      </div>
    </div>
  );
};

export default page;
