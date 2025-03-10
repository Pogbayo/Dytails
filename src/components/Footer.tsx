import Image from "next/image";
import React from "react";
import plainLogo from "../../public/plainlogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="bg-[#e5d8a8] w-full flex flex-col lg:flex-row items-center lg:items-center h-80 lg:h-24 p-2 justify-around lg:justify-between">
      <div className="flex flex-col lg:flex-row items-start lg:items-center h-full justify-around lg:justify-between lg:w-full">
        <div className="flex justify-around items-center lg:order-3 lg:mr-12">
          <div className="w-[55px] h-[55px] rounded-[50px] bg-[#3d612c] p-3 flex items-center justify-center">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className="flex flex-col items-start ml-4">
            <h3 className="lg:text-sm font-bold text-darkblue">Contact Us</h3>
            <p className="text-xs lg:text-sm  text-darkblue">
              info@dytails.com{" "}
            </p>
            <p className="lg:text-xs  text-darkblue"> (925) 577 7069 </p>
          </div>
        </div>
        <div className="flex items-center lg:order-1 lg:ml-12">
          <Image src={plainLogo} alt="" />
          <div className="flex flex-col text-left w-56 ml-4">
            <p className="lg:text-xs  text-darkblue">Licenced with:</p>
            <p className="lg:text-xs  text-darkblue">
              State of Florida Department of Business and Professional
              Regulation
            </p>
            <p className="lg:text-xs  text-darkblue">LN: HI17145</p>
          </div>
        </div>
        <p className="lg:order-2 lg:text-sm  text-darkblue">
          2025 © | Dytails Investments LLC{" "}
        </p>
      </div>
    </div>
  );
}
