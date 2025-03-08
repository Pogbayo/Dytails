import React from "react";
import Image from "next/image";
import heroImage from "../../../public/hero_house.jpg";
import Footer from "@/components/Footer";
import ScheduleButton from "@/components/ScheduleButton";
import commercialBuilding from "../../../public/commercial_building.jpg";
import arial from "../../../public/houses_arial.jpg";
import livingRoom from "../../../public/living_room.jpg";
import pool from "../../../public/pool_2.jpg";
import newBuild from "../../../public/new_build_2.jpg";
import CallButton from "@/components/CallButton";

export default function page() {
  return (
    <div className="flex flex-col items-center lg:text-left">
      <h1 className="z-10 relative hidden lg:block m-4">Our Services</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-4/5 mb-0 lg:mb-6">
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 lg:p-4">
          <div className="relative h-96 lg:h-[500px] lg:rounded-3xl w-full overflow-hidden">
            <h1 className="z-10 relative lg:hidden">Our Services</h1>
            <Image
              src={heroImage}
              alt="Hero House"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className=""
            />
          </div>
        </div>
        <div className="flex-col items-center lg:items-start max-w-[500px] p-4 lg:p-6 lg:w-1/2 lg:min-h-[450px] flex justify-center">
          <h2 className="mb-4">Real Estate Investments</h2>
          <p className="mb-4">
            Strategic acquisitions, development, and management of commercial,
            residential, and mixed-use properties. the home is in good condition
            and identify any potential issues.
          </p>
          {/* <h2 className="font-normal">Homes up to 2500 sq ft</h2>
          <h1>$350</h1>
          <h2 className="font-normal">Homes above 2500 sq ft</h2>
          <h1>$0.10</h1>
          <h2 className="mb-4 font-normal">Per additional sq ft</h2>
          <ScheduleButton size="big" color="royalblue" /> */}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse justify-center items-center w-full lg:w-4/5 mt-0 lg:mt-6 mb-0 lg:mb-6">
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 lg:p-4">
          <div className="relative h-96 lg:h-[500px] lg:rounded-3xl w-full overflow-hidden">
            <Image
              src={arial}
              alt="Arial View"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className=""
            />
          </div>
        </div>
        <div className="flex-col items-center lg:items-start max-w-[500px] p-4 lg:p-6 lg:w-1/2 lg:min-h-[450px] flex justify-center">
          <h2 className="mb-4">Manufacturing Investments</h2>
          <p className="mb-4">
            Supporting innovative manufacturing ventures that drive economic
            growth and technological advancement.
          </p>
          {/* <h2 className="font-normal">With Elite Home Inspection</h2>
          <h1>$50</h1>
          <h2 className="font-normal">Without Elite Home Inpsection </h2>
          <h1 className="mb-4">$149</h1>
          <ScheduleButton size="big" color="royalblue" /> */}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center  w-full lg:w-4/5 mt-0 lg:mt-6 mb-0 lg:mb-6">
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 lg:p-4">
          <div className="relative h-96 lg:h-[500px] lg:rounded-3xl w-full overflow-hidden flex items-center justify-center">
            <Image
              src={pool}
              alt="Swimming Pool"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className=""
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-col items-center lg:items-start max-w-[500px] p-4 lg:p-6 lg:w-1/2 lg:min-h-[450px] flex justify-center">
          <h2 className="mb-4 text-center lg:text-left">
            {" "}
            Production Investments
          </h2>
          <p className="mb-4 text-center lg:text-left">
            Investing in high-potential production companies across various
            sectors to foster industrial growth.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse justify-center items-center w-full lg:w-4/5 mt-0 lg:mt-6 mb-0 lg:mb-6">
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 lg:p-4">
          <div className="relative h-96 lg:h-[500px] lg:rounded-3xl w-full overflow-hidden">
            <Image
              src={livingRoom}
              alt="Living Room"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className=""
            />
          </div>
        </div>
        <div className="flex-col items-center lg:items-start max-w-[500px] p-4 lg:p-6 lg:w-1/2 lg:min-h-[450px] flex justify-center">
          <h2 className="mb-4">Service Investments and Provisions</h2>
          <p className="mb-4">
            Partnering with service-oriented businesses that enhance quality of
            life and contribute to societal well-being. Provision of logistics
            and procurement services and facilitating seamless
            services across sectors.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
