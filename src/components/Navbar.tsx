"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import ScheduleButton from "./ScheduleButton";
import CallButton from "./CallButton";
import Image from "next/image";
import plainLogo from "../../public/plainlogo.svg";
import logo from "../../public/logo.webp";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsOpened(false);
  }, [pathName]);

  return (
    <div className="sticky top-0 z-40">
      <div
        className={`sticky top-0 bg-royalblue w-full z-50 h-24 flex justify-between items-center p-6 lg:pl-16 lg:pr-16 ${
          !isOpened && "shadow-lg"
        }`}
      >
        <Link href={"/"} className="xl:hidden">
          <Image src={plainLogo} alt="Logo" />
        </Link>
        <Link href="/">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-teal to-royalblue text-transparent bg-clip-text tracking-widest uppercase drop-shadow-md transition-all duration-300 hover:drop-shadow-xl hover:scale-105">
            Dytails Investments
          </h1>
        </Link>

        <div className="items-center justify-around w-[500px] hidden lg:flex">
          <div className="flex justify-around w-[500px] font-bold">
            <Link href="/">
              <div className="group">
                <h3
                  className={`border-b-2  pb-1 transition-all duration-300 ${
                    pathName === "/"
                      ? "border-b-2 border-teal text-teal"
                      : "border-transparent"
                  } group-hover:border-teal`}
                >
                  Home
                </h3>
              </div>
            </Link>
            <Link href="/services">
              <div className="group">
                <h3
                  className={`border-b-2  pb-1 transition-all duration-300 ${
                    pathName === "/services"
                      ? " border-teal text-teal"
                      : "border-transparent"
                  } group-hover:border-teal`}
                >
                  Services
                </h3>
              </div>
            </Link>
            <Link href="/about">
              <div className="group">
                <h3
                  className={`border-b-2  pb-1 transition-all duration-300 ${
                    pathName === "/about"
                      ? "border-b-2 border-teal text-teal"
                      : "border-transparent"
                  } group-hover:border-teal `}
                >
                  About
                </h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center w-[370px] h-4 space-x-2">
          <ScheduleButton size={"small"} color={"darkblue"} />
          <CallButton size="small" />
        </div>
        <FontAwesomeIcon
          icon={!isOpened ? faBars : faX}
          className="h-full lg:hidden"
          onClick={() => setIsOpened(!isOpened)}
        />
      </div>
      {isOpened && (
        <div className="absolute top-0 z-0 h-screen bg-royalblue w-full flex flex-col items-center justify-center">
          <div className="flex flex-col w-96 items-center justify-around">
            <Link
              href="/"
              onClick={() => {
                if (pathName === "/") {
                  setIsOpened(false);
                }
              }}
            >
              <h1>Home</h1>
            </Link>
            <Link
              href="/services"
              onClick={() => {
                if (pathName === "/services") {
                  setIsOpened(false);
                }
              }}
            >
              <h1>Services</h1>
            </Link>
            <Link
              href="/about"
              onClick={() => {
                if (pathName === "/about") {
                  setIsOpened(false);
                }
              }}
            >
              <h1>About</h1>
            </Link>
          </div>
          <div className="flex flex-col justify-around items-center h-28">
            <ScheduleButton size={"big"} color={"darkblue"} />
          </div>
        </div>
      )}
    </div>
  );
}
