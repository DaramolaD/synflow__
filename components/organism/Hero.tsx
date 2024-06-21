import React from "react";
import HeroNote from "../molecules/HeroNote";

const Hero = () => {
  return (
    <div className="w-full mx-auto flex flex-col text-center items-center justify-center">
        <HeroNote />
      <h1>Effortlessly Manage All Your Startup&npos;s Finances in One Place</h1>
      <p>
        SynFlow helps you streamline payments, automate payroll, and access
        real-time financial insights, so you can focus on growth.
      </p>
    </div>
  );
};

export default Hero;
