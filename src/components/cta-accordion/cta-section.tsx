import Accordion from "./cta-accordion";

function CtaSection() {
  const accordionItems = [
    {
      title: "Brand Strategy",
      content: <></>, // Add content here
    },
    {
      title: "Design",
      content: <></>, // Add content here
    },
    {
      title: "Development",
      content: <></>, // Add content here
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
            <h3 className="text-white">SRE (Site Reliability Engineering)</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Bring the Pillars team in</li>
              <li>Run an evaluation report</li>
              <li>Apply SRE practices</li>
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
          <Accordion items={accordionItems} />
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
