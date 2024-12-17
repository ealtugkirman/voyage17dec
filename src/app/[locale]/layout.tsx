import "../globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Navbar from "@/components/ui/layout/navbar";


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
