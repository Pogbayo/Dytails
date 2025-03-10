// import Navbar from "@/components/Navbar";
import Image from "next/image";
import heroHouse from "../../public/hero_house.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import ScheduleButton from "@/components/ScheduleButton";
import CallButton from "@/components/CallButton";
// import HomepageDivider from "@/components/HomepageDivider";
import TopServices from "@/components/TopServices";
import { CoreValues } from "@/components/CoreValues";
import { Faqs } from "@/components/Faqs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-hero-house relative lg:bg-white bg-center min-h-[640px] h-[82vh] sm:h-[60vh] text-white lg:overflow-hidden">
        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between pt-8 pb-8 bg-darkblue bg-opacity-80 lg:bg-opacity-0 p-4">
          <div className="w-full lg:ml-12 lg:m-8 flex flex-col justify-between lg:justify-around h-[100vh] lg:h-96 lg:items-start">
            <div className="lg:text-left lg:p-4">
              <h1 className="text-3xl lg:text-darkblue md:text-4xl lg:text-5xl sm:text-white">
                Dytails Investments LLC
              </h1>

              <p className="mt-2 lg:text-darkblue text-sm md:text-base lg:text-xl sm:text-white">
                Dytails Investments LLC is a diversified investment company
                committed to transforming opportunities into growth across key
                sectors including real estate, manufacturing, production, and
                services. With our deep market insights, innovative approach,
                and a steadfast focus on sustainable investments, we strive to
                create lasting value for our partners, stakeholders, and the
                communities we serve.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center pb-16 lg:justify-start  h-44 space-y-4 lg:space-y-0  lg:space-x-6">
              {/* <ScheduleButton size={"big"} color={"gold"} /> */}
              <CallButton size="big" />
            </div>
          </div>
          <Image
            src={heroHouse}
            width={1000}
            height={1000}
            alt=""
            className="hidden lg:block rounded-3xl -mr-32 max-h-[400px] 2xl:max-h-[600px]"
            // objectFit="cover"
          />
        </div>
      </div>
      <TopServices />
      <CoreValues />
      <Faqs />
      <Footer />
    </>
  );
}
