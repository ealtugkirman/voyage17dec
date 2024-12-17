import { useState } from "react";

const images = {
  "Web Development": "/images/gaming.svg",
  UI: "/images/e-learning.svg",
  UX: "/images/social-platforms.svg",
  "Frontend Development": "/images/fintech.svg",
  "ReactJs Development": "/images/healthcare.svg",
  "Nextjs Development": "/images/web3.svg",
  Web3: "/images/real-estate.svg",
  SaaS: "/images/saas.svg",
};

export type Industry = keyof typeof images;

export function useSelectedBadge() {
  const [selectedBadge, setSelectedBadge] = useState<Industry | null>(null);

  const getImageSrc = () => {
    return selectedBadge ? images[selectedBadge] : "/images/default.svg";
  };

  return { selectedBadge, setSelectedBadge, getImageSrc };
}
