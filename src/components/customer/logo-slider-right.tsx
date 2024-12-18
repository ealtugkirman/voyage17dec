"use client";
const logos = [
  {
    name: "Vercel",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg",
  },
  {
    name: "Nextjs",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg",
  },
  {
    name: "Firebase",
    url: "https://res.cloudinary.com/dknydkolo/image/upload/v1732330008/lvyfry3aylrsoqppodtb.svg",
  },
  {
    name: "MongoDb",
    url: "https://res.cloudinary.com/dknydkolo/image/upload/v1732330127/hifim7cwispw3xpx38nw.svg",
  },
  {
    name: "Prisma",
    url: "https://res.cloudinary.com/dknydkolo/image/upload/v1732330181/pdezittm7e6jgj8jln31.svg",
  },
  {
    name: "Solidity",
    url: "https://res.cloudinary.com/dknydkolo/image/upload/v1732330383/dhnzcglryr2apxhbb9ti.svg",
  },
  {
    name: "Stripe",
    url: "https://res.cloudinary.com/dknydkolo/image/upload/v1732330250/q6tigbk3tnefs3qftfbf.svg",
  },
  {
    name: "Tailwind",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Tina",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg",
  },
  {
    name: "Prisma",
    url: "https://res.cloudinary.com/dknydkolo/image/upload/v1732330324/yh37hepdlldl3brrt9vg.svg",
  },
  {
    name: "Clerk",
    url: "https://res.cloudinary.com/dknydkolo/image/upload/v1732330592/agilxede7nw1twnzo5gz.svg",
  },
  {
    name: "Nest.js",
    url: "  https://res.cloudinary.com/dknydkolo/image/upload/v1732330454/mbbwgjgizpv3pyraoyvg.svg",
  },
];

const LogoSliderRight = () => {
  return (
    <div className="w-full  bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}>
          {Array(5)
            .fill(null)
            .map((_, outerIndex) => (
              <div
                key={`logo-row-${outerIndex}`}
                className="flex shrink-0 animate-logo-cloud-right flex-row p-4 justify-around gap-6">
                {logos.map((logo, innerIndex) => (
                  <img
                    key={`logo-${outerIndex}-${innerIndex}`}
                    src={logo.url}
                    className="h-auto w-32 px-4 brightness-0 dark:invert"
                    alt={`${logo.name}`}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSliderRight;
