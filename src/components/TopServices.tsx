import React from "react";
import HomepageDivider from "./HomepageDivider";
import Image from "next/image";
import kitchen from "../../public/kitchen.jpg";
import arial from "../../public/houses_arial.jpg";
import livingRoom from "../../public/living_room.jpg";
// import { faHourglass3 } from "@fortawesome/free-solid-svg-icons";
// import SeePricingButton from "./SeePricingButton";

export default function TopServices() {
  const services = [
    {
      photo: kitchen,
      name: "Vision Statement:",
      description:
        "To be a global leader in innovative investment solutions, driving sustainable growth and development across industries and communities.",
    },
    {
      photo: arial,
      name: "Mission Statement:",
      description:
        "To invest in and nurture high-potential ventures within real estate, manufacturing, production, and services, ensuring sustainable development and exceptional returns. Through strategic partnerships and forward-thinking solutions, we aim to create meaningful impact and enduring value.",
    },
    {
      photo: livingRoom,
      name: "Elite 4-Point Inspection",
      description:
        "A 4-point inspections covers roofing, electrical, plumbing, and HVAC. We provide detailed reports with recommendations to ensure your home’s safety and meet insurance requirements.",
    },
  ];
  return (
    <div>
      <HomepageDivider>
        <h1 className=" text-white">Top Services</h1>
      </HomepageDivider>
      <div className="lg:mt-12 text-darkblue flex flex-col items-center">
        {services.map((service, index) => (
          <div
            className={`flex flex-col justify-around lg:justify-center items-center pb-8 lg:p-12 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row "
            }`}
            key={index}
          >
            <Image
              src={service.photo}
              alt=""
              width={1000}
              height={1000}
              className="w-full lg:w-[45%] lg:rounded-2xl"
            />
            <div
              className={` flex flex-col items-center lg:items-start lg:text-start lg:w-[400px]  ${
                index % 2 === 0 ? "lg:ml-32" : "lg:mr-32"
              }`}
            >
              <div className="flex flex-col items-center lg:items-start lg:text-start justify-around p-6 lg:p-0 min-h-[300px] h-64 mt-2 mb-4 ">
                <h2>{service.name}</h2>
                <h3>{service.description}</h3>
              </div>
              {/* <SeePricingButton /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
