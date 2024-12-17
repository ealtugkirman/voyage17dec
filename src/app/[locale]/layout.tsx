import "../globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Navbar from "@/components/layout/navbar";
import { ReactNode } from "react";

type LocaleLayoutProps = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

export default function LocaleLayout({ 
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = params;
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="font-blauer">
            <Navbar />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
