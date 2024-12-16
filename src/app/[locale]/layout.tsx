import "../globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Script from "next/script";
import Navbar from "@/components/ui/layout/navbar";

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: "Bilkent Human Rights Center",
    description:
      "Bilkent University Human Rights Studies Application and Research Center (the Center/the BHRC) was established in 2021...",
    keywords: ["human rights", "Bilkent University", "research center", "BHRC"],
    authors: [
      {
        name: "Bilkent Human Rights Center",
        url: "https://bihm.bilkent.edu.tr",
      },
    ],
    openGraph: {
      title: "Bilkent Human Rights Center",
      description:
        "Bilkent University Human Rights Studies Application and Research Center...",
      url: "https://bihm.bilkent.edu.tr",
      site_name: "Bilkent Human Rights Center",
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Bilkent Human Rights Center",
      description:
        "Bilkent University Human Rights Studies Application and Research Center...",
      site: "@BilkentHumanRights",
      creator: "@BilkentHumanRights",
    },
  };
}

export default function LocaleLayout({ children, params }) {
  const { locale } = params;
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="">
            <Navbar />
            <div className="" />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
