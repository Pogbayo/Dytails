import Image from "next/image";
import React from "react";
// import aboutPortrait2 from "../../../public/profile_pic.jpg";
import Footer from "@/components/Footer";
import houses_arial from "../../../public/houses_arial.jpg";
export default function page() {
  return (
    <div className="flex flex-col items-center justify-between h-[90vh]">
      <h1 className="z-10 relative hidden sm:block m-4">About Us</h1>
      <div className="flex flex-col lg:flex-row justify-center lg:m-10 mt-0 ">
        <div className="flex flex-col items-center">
          <div className="relative h-96 lg:h-full sm:rounded-3xl w-full sm:w-96 overflow-hidden">
            <h1 className="z-10 relative sm:hidden">About Us</h1>
            <Image
              src={houses_arial}
              alt="About Portrait"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className=""
            />
          </div>
        </div>
        <div className="p-6 lg:bg-royalblue rounded-3xl lg:w-[55%] lg:ml-5 lg:min:h-[450px]">
          <h2>Who we are</h2>
          <p className="mb-4">
            Dytails Investments LLC is a diversified investment company
            committed to transforming opportunities into growth across key
            sectors including real estate, manufacturing, production, and
            services. With our deep market insights, innovative approach, and a
            steadfast focus on sustainable investments, we strive to create
            lasting value for our partners, stakeholders, and the communities we
            serve.
          </p>
          <h2>Our Mission</h2>
          <p className="mb-4">
            To invest in and nurture high-potential ventures within real estate,
            manufacturing, production, and services, ensuring sustainable
            development and exceptional returns. Through strategic partnerships
            and forward-thinking solutions, we aim to create meaningful impact
            and enduring value.
          </p>
          <h2>Why Choose Us</h2>
          <p className="">
            Certified Professionals: Our inspectors are fully certified and
            trained to provide the highest quality inspections. Detailed
            Reports: We provide clear, comprehensive reports to help you
            understand the condition of your property. Customer Focused: We
            prioritize your satisfaction and work diligently to address all your
            inspection needs.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
