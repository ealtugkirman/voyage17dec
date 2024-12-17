import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

function CtaSection() {
  const accordionItems = [
    {
      title: "Brand Strategy",
      content: (
        <div className="space-y-6 max-w-7xl mx-auto">
          <p>
            Strategic brand development and positioning to help you stand out in
            the market
          </p>
          <div className="space-y-4">
            <h3 className="text-white">Web Development</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Custom web application development</li>
              <li>Responsive design implementation</li>
              <li>Performance optimization</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Design",
      content: (
        <div className="space-y-6 max-w-7xl mx-auto">
          <p>
            Creating visually stunning and functional designs that elevate your
            brand
          </p>
          <div className="space-y-4">
            <h3 className="text-white">UI Design</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Interface design systems</li>
              <li>Visual design and branding</li>
              <li>Interactive prototypes</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Development",
      content: (
        <div className="space-y-6 max-w-7xl mx-auto">
          <p>
            Building robust and scalable solutions with cutting-edge
            technologies
          </p>
          <div className="space-y-4">
            <h3 className="text-white">Next.js Development</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Server-side rendering</li>
              <li>Static site generation</li>
              <li>API integration</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Maintenance",
      content: (
        <div className="space-y-6 max-w-7xl mx-auto">
          <p>
            A set of post-launch activities to ensure stability, security, and
            reliability of the custom products we've built
          </p>
          <div className="space-y-4">
            <h3 className="text-white">UX Design</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>User research and testing</li>
              <li>Information architecture</li>
              <li>Usability optimization</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 md:py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 py-12 md:gap-24">
        {/* Left Column */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-normal leading-tight">
            Helping clients embrace the change
          </h1>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              We rely on imagination and technical prowess to help brands
              transform, shine, and reinvent themselves commercially and
              culturally.
            </p>
            <p>
              Our biggest value is the client's trust.
              <br />
              Our only achievement is their success.
            </p>
          </div>
          <button className="px-6 py-3 rounded-full text-white border border-white hover:bg-white hover:text-black transition-colors">
            Get in touch
          </button>
        </div>

        {/* Right Column */}
        <div>
          <Accordion type="single" collapsible>
            {accordionItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
