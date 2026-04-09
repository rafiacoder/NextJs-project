﻿import Button from "./button";
import Image from "next/image";
import herosection from "../../public/herosection.png"
import hero from "../../public/hero.webp"
import LightGray from "../../public/LightGray.png"
import { FaCheckCircle } from "react-icons/fa";
export default function HeroSection() {

  return (
    <div className="relative w-full h-[780px] lg:h-auto overflow-x-hidden" id="hero">

      <Image src={hero} alt="dubaidesign" className="w-full h-full  object-cover absolute inset-0" />

    <div className="absolute inset-0  bg-gradient-to-r from-[#3F2315] via-[#9C5930]/60 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#531F11] via-[#783B1C]/0 to-[#925331]/5" />
      {/* CONTENT */}
     <div className=" p-8  pt-14 md:px-8  lg:pt-0">
     {/* Dubai Design */}
          <div className=" container  relative w-full  max-w-4xl mx-auto lg:m-6  md:mx-0 items-center md:items-start flex flex-col pt-24 pb-48 sm:pb-52 md:pt-24">

            <div className=" flex flex-col gap-4 w-full sm:h-auto md:p-6 md:m-6 max-w-full">

              <Image src={LightGray} alt="Artistry" className="w-28 sm:w-32 md:w-36 h-auto md:mx-0" />
              <div className="flex flex-col gap-4 lg:gap-2">
              <div className="flex flex-col gap-4  ">
                <h2 className="text-white text-[20px] lg:text-[32px] xl:text-[40px] font-bold whitespace-normal text-nowrap leading-tight">A Design-Lead Address in  </h2>
                <h2 className="text-white text-[22px] sm:text-[28px] md:text-[28px] lg:text-[48px] font-bold whitespace-normal tracking-wide leading-tight">Dubai Design District
                </h2>
                <p className=" text-white text-[14px] sm:text-[16px] md:text-lg font-light mb-4 sm:mb-6 max-w-xl mx-auto md:mx-0 text-balance ">
                  Set within Dubai Design District, Artistry One Residences unites creative energy with refined residential calm.
                </p>
              </div>
              <div className="flex flex-row gap-2 sm:gap-6 w-full max-w-md mx-auto justify-center md:max-w-none md:mx-0 md:justify-start">
                <Button text="Register" href="/contact" className="border-0 flex-1 min-w-0 justify-center px-3 md:px-10 text-xs sm:text-[14px] md:flex-initial md:w-auto" />
                <Button text="Find Out More" href="/resources" className="bg-[#4B2417] text-white border-0 flex-1 min-w-0 justify-center px-3 md:px-6 text-xs sm:text-[14px] md:flex-initial md:w-auto py-5" />
              </div>
              </div>
            </div>
          </div>
      {/* Key Features */}
          <div className="absolute bottom-8 lg:bottom-22 left-6 right-6 lg:left-[86px] lg:right-[86px] z-10 lg:px-4 lg:px-6  ">
            <div className="container mx-auto bg-white/10 backdrop-blur-md rounded-lg px-8 py-8  ">
              <h2 className="text-xl md:text-3xl text-white mb-4 sm:mb-6">Key Features</h2>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6 text-white ">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-4 h-4 text-white" />
                  <p className="ltext-sm g:text-md ">1-3 bedroom units & duplex penthouses</p>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-4 h-4 text-white" />
                  <p className="text-sm lg:text-md">Located in Dubai Design District</p>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-4 h-4 text-white" />
                  <p className="text-sm lg:text-md">Burj Khalifa & Downtown Dubai views</p>
                </div>
              </div>
            </div>
          </div>
     </div>
    </div>
  );
}