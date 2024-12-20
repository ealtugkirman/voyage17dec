"use client";

import { useTranslations } from "next-intl"; // Çeviri hook'unu ekleyin
import Link from "next/link";
import InteractiveHoverButton from "../ui/interactive-hover-button";
import {
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  Clock,
  MapPin,
} from "lucide-react";

function CtaFooter() {
  const t = useTranslations("CtaFooter"); // "CtaFooter" namespace'unu kullanın

  const servicesList = t.raw("servicesList") as string[];

  return (
    <section className="bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-6xl font-base leading-tight">
                {t("sectionTitle.main")}
                <br />
                <span className="text-white">{t("sectionTitle.sub")}</span>
              </h2>
              <p className="text-lg text-gray-300">{t("sectionSubtitle")}</p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">{t("connectWithUs")}</h3>
              <nav className="flex gap-6">
                <Link
                  href="https://twitter.com/ealtugk"
                  target="_blank"
                  className="hover:text-white transition-colors">
                  <Twitter className="w-8 h-8" />
                  <span className="sr-only">{t("socialMedia.twitter")}</span>
                </Link>
                <Link
                  href="https://instagram.com/digitalvoyage.agency"
                  target="_blank"
                  className="hover:text-white transition-colors">
                  <Instagram className="w-8 h-8" />
                  <span className="sr-only">{t("socialMedia.instagram")}</span>
                </Link>
              </nav>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-4xl font-base">{t("ourServices")}</h3>
              <ul className="grid grid-cols-2 gap-2 text-gray-300">
                {servicesList.map((service: string) => (
                  <li
                    key={service}
                    className="relative hover:text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-yellow-200 before:origin-center before:h-[1px] before:w-0 hover:before:w-[20%] before:bottom-0 before:left-[20%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-yellow-200 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-light">{t("contactInformation")}</h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <Phone className="w-3 h-3 mr-2 text-white" />
                  <span>+90 530 971 1962</span>
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-3 h-3 text-white" />
                <a
                  href={`mailto:${t("contactEmail")}`}
                  className="text-lg hover:text-white text-gray-300 transition-colors">
                  {t("contactEmail")}
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <InteractiveHoverButton
                className="text-black w-72 text-md font-semibold"
                text={t("startYourProject")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaFooter;
