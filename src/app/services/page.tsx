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
          <h2 className="mb-4 text-darkblue">Real Estate Investments</h2>
          <p className="mb-4 text-darkblue">
            Our real estate investment strategies are designed to deliver
            long-term value through careful market analysis and strategic asset
            management. With a focus on both commercial and residential
            opportunities, we identify high-potential properties and optimize
            their performance for maximum return. From acquisition and
            development to property management and sales, we approach each
            project with a commitment to sustainability, profitability, and
            market responsiveness. Our extensive experience in real estate
            allows us to navigate complex market conditions, offering our
            clients reliable investment solutions that grow their portfolios and
            secure their financial future. Through smart investments and
            innovative approaches, we continue to redefine what’s possible in
            the real estate sector.
          </p>
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
          <h2 className="mb-4 text-darkblue">Manufacturing </h2>
          <p className="mb-4 text-darkblue">
            Our manufacturing division is dedicated to producing high-quality
            products with precision and efficiency. Leveraging state-of-the-art
            equipment and a skilled workforce, we excel in delivering solutions
            that meet rigorous industry standards. We focus on continuous
            improvement and innovation, ensuring that our processes remain
            flexible and scalable to accommodate both large-scale and
            specialized projects. Whether developing new product lines or
            optimizing existing ones, our commitment to excellence and customer
            satisfaction drives every step of our manufacturing operations. From
            design to delivery, we focus on creating products that stand out in
            terms of durability, functionality, and design.
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
          <h2 className="mb-4 text-darkblue text-center lg:text-left">
            {" "}
            Production
          </h2>
          <p className="mb-4 text-darkblue text-center lg:text-left">
            At the core of our operations, our production capabilities are built
            on a foundation of innovation, precision, and efficiency. With
            extensive experience in manufacturing and real estate development,
            we deliver high-quality, customized solutions that cater to a broad
            range of client needs. Our commitment to utilizing cutting-edge
            technology and sustainable practices ensures that every project
            meets the highest standards of performance and reliability. Whether
            we are optimizing production processes in manufacturing or
            overseeing large-scale real estate investments, our focus is always
            on creating value and fostering long-term growth for our clients. We
            pride ourselves on our ability to adapt to evolving market demands
            and consistently exceed expectations.
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
          <h2 className="mb-4 text-darkblue">
            Service Investments and Provisions
          </h2>
          <p className="mb-4 text-darkblue ">
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
