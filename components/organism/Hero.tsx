import React from "react";
import HeroNote from "../molecules/HeroNote";
import Cta from "../molecules/Cta";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import heroDashboard from "@/public/heroDashboard.svg";
import heroDashboardMobile from "@/public/heroDashboardMobile.svg";

const Hero = () => {
  return (
    <div className="bg-hero-gradient w-full h-fit">
      <div className="sectionContainer flex flex-col py-36 items-center gap-8 md:py-48 px-5 md:px-10">
        <div className="flex flex-col gap-6 text-center items-start md:items-center justify-center">
          <HeroNote />
          <h1 className="text-black text-3xl md:text-5xl font-bold max-w-[833px] text-left md:text-center">
            Effortlessly Manage All Your Startup&apos;s Finances in One Place
          </h1>
          <p className="text-black text-2xl max-w-[702px] text-left md:text-center">
            SynFlow helps you streamline payments, automate payroll, and access
            real-time financial insights, so you can focus on growth.
          </p>
          <Cta
            primaryCta="Get Started for Free"
            primaryIcon={<ArrowRight />}
            primaryStyle="hover:shadow-green-300 hover:shadow-md flex-row-reverse items-center text-base font-bold hover:border-orange-500"
            secondaryCta="Book a demo"
            secondaryStyle="border border-primary-400 bg-transparent border-black hover:text-white hover:bg-button-gradient hover:border-primary-400"
            className="flex-col-reverse md:!flex-row-reverse gap-5 flex-wrap items-start md:items-center"
          />
        </div>
        <div className="w-full min-h-[729px] flex relative items-center justify-center">
          <Image
            src={heroDashboard}
            quality={100}
            fill={true}
            alt="synflow-Dashboard"
            className="hidden md:flex w-full !h-fit"
          />
          <Image
            src={heroDashboardMobile}
            quality={100}
            fill={true}
            alt="synflow-Dashboard"
            className="w-full !h-fit md:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <h1 className="bg-gradient-to-t from-red-600 to-indigo-600 bg-clip-text text-transparent text-5xl font-bold">
        Effortlessly Manage All Your Startup&npos;s Finances in One Place
      </h1>
      <p className=" text-moody_blue-700 text-backgroundImage-title-gradient text-2xl">
        SynFlow helps you streamline payments, automate payroll, and access
        real-time financial insights, so you can focus on growth.
      </p> */
}
