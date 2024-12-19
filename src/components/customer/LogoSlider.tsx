"use client";

import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Import logo images
import altcoinvoyage from "../../public/logos/altcoinvoyage.png";
import arsTanitim from "../../public/logos/arsTanıtım.png";
import atilogo from "../../public/logos/atilogo.png";
import bihmlogo from "../../public/logos/bihmlogo.png";
import bilkentLogo from "../../public/logos/bilkent-logo.png";
import cognizerlogo from "../../public/logos/cognizerlogo.png";
import hakemportalLogo from "../../public/logos/hakemportalLogo.png";
import psykri from "../../public/logos/psykri.png";
import tecvityLogo from "../../public/logos/tecvity-logo.png";

const logos = [
  {
    name: "Altcoin Voyage",
    img: altcoinvoyage,
  },
  {
    name: "Ars Tanıtım",
    img: arsTanitim,
  },
  {
    name: "ATI",
    img: atilogo,
  },
  {
    name: "BIHM",
    img: bihmlogo,
  },
  {
    name: "Bilkent",
    img: bilkentLogo,
  },
  {
    name: "Cognizer",
    img: cognizerlogo,
  },
  {
    name: "Hakem Portal",
    img: hakemportalLogo,
  },
  {
    name: "Psykri",
    img: psykri,
  },
  {
    name: "Tecvity",
    img: tecvityLogo,
  },
];

const firstRow = logos.slice(0, logos.length / 2);
const secondRow = logos.slice(logos.length / 2);

const LogoCard = ({ img, name }: { img: any; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
      )}>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={img}
          alt={name}
          width={200}
          height={80}
          className="object-contain w-full h-20"
        />
      </div>
    </figure>
  );
};

function LogoSlider() {
  const t = useTranslations("LogoSlider");

  return (
    <div className="relative flex h-auto max-w-7xl mx-auto flex-col items-center justify-center overflow-hidden bg-background ">
      <div className="max-w-5xl mx-auto py-12 text-center">
        <h3 className="text-2xl font-thin">{t("heading")}</h3>
        <h1 className="text-7xl  leading-[1.1] tracking-tight font-light mb-8">
          {t("subheading")}
        </h1>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((logo) => (
          <LogoCard key={logo.name} {...logo} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((logo) => (
          <LogoCard key={logo.name} {...logo} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r  from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default LogoSlider;