import React from "react";
import HomepageDivider from "./HomepageDivider";

export const CoreValues = () => {
  const coreValues = [
    {
      title: "Integrity",
      description:
        "Upholding the highest ethical standards in every aspect of our business.",
    },
    {
      title: "Innovation",
      description:
        "Embracing new ideas and technologies to stay ahead in a rapidly changing market.",
    },
    {
      title: "Sustainability",
      description:
        "Investing with a focus on long-term growth and environmental stewardship.",
    },
    {
      title: "Excellence",
      description: "Striving for the highest quality in everything we do.",
    },
    {
      title: "Collaboration",
      description:
        "Building strong, collaborative relationships with our partners and communities.",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <HomepageDivider>
        <h1 className="text-3xl text-white font-bold">Core Values</h1>
      </HomepageDivider>
      <div className="mt-4 mb-6 flex flex-col lg:flex-row lg:flex-wrap justify-center min-h-[300px] lg:min-h-[500px]">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="flex border border-x-blue-50 text-darkblue flex-col items-center  rounded-xl p-6 flex-grow lg:w-[30vw] lg:max-w-[390px] justify-around mt-6 m-4 shadow-lg"
          >
            <h2 className="text-3xl font-extrabold text-darkblue">
              {value.title}
            </h2>
            <p className="text-center text-1xl  mt-2">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
