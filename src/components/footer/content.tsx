import React from "react";

export default function Content() {
  return (
    <div className="bg-white py-8 px-12 h-full w-full flex flex-col justify-between">
      <Section2 />
    </div>
  );
}

const Section2 = () => {
  return (
    <div className="flex justify-between text-first items-end">
      <h1 className="text-[12vw] leading-[0.8] mt-10">Digital Voyage</h1>
      <p>All rights reserved</p>
    </div>
  );
};
