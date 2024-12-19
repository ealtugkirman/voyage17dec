"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import React from "react";
import Hero from "@/components/hero/hero";
import SecondHero from "@/components/hero/secondhero";
import CtaSection from "@/components/cta/cta-section";
import KeyChangeLayout from "@/components/hero/key-change";
import Showcase from "@/components/showcase/showcase";
import CtaFooter from "@/components/cta/cta-footer";
import Footer from "@/components/footer/footer";
import LogoSlider from "@/components/customer/LogoSlider";
const page = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <Hero />
      <SecondHero />
      <CtaSection />
      <KeyChangeLayout />
      <LogoSlider />
      <Showcase />
      <CtaFooter />
      <Footer />
    </div>
  );
};

export default page;
