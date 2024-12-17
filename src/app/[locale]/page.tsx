import React from "react";
import Hero from "@/components/hero/hero";
import SecondHero from "@/components/hero/secondhero";
import CtaSection from "@/components/cta-accordion/cta-section";
import KeyChangeLayout from "@/components/hero/key-change";
import Customers from "@/components/customer/customer";
import Showcase from "@/components/showcase/showcase";
const page = () => {
  return (
    <div>
      <Hero />
      <SecondHero />
      <CtaSection />
      <KeyChangeLayout />
          <Customers /> 
          <Showcase /> 
    </div>
  );
};

export default page;
