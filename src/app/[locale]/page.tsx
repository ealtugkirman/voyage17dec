"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import React from "react";
import Hero from "@/components/hero/hero";
import SecondHero from "@/components/hero/secondhero";
import CtaSection from "@/components/cta/cta-section";
import KeyChangeLayout from "@/components/hero/key-change";
import Customers from "@/components/customer/customer";
import Showcase from "@/components/showcase/showcase";
import CtaFooter from "@/components/cta/cta-footer";
import Footer from "@/components/footer/footer";
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
      <Customers />
      <Showcase />
      <CtaFooter />
      <Footer />
    </div>
  );
};

export default page;
