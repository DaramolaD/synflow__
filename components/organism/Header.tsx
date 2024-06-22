"use client";
import React, { useState } from "react";
import Logo from "../atom/Logo";
import { NavigationMenuDemo } from "../molecules/NavLink";
import Cta from "../molecules/Cta";
import { Menu, X } from "lucide-react";
import MobileNav from "../molecules/MobileNav";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="flex z-50 top-0 right-0 left-0 sectionContainer fixed px-5 md:px-8 bg-headerColor/100 rounded-b-3xl">
      <div className="relative w-full flex justify-between items-center px-5 tablet:px-0 lg:px-10 pt-4 pb-7 md:py-7">
        <Logo width={120} height={40} className="w-32 tablet:w-28 lg:w-40" />
        <div className="hidden tablet:flex">
          <NavigationMenuDemo />
        </div>
        <Cta
          className="hidden tablet:flex gap-5"
          primaryCta="Book a demo"
          secondaryCta="Login"
          secondaryStyle="border-transparent hover:border border-primary-400 bg-transparent"
        />
        {!menuToggle ? (
          <Menu
            className="flex tablet:hidden"
            onClick={() => setMenuToggle(!menuToggle)}
          />
        ) : (
          <X
            className="flex tablet:hidden"
            onClick={() => setMenuToggle(!menuToggle)}
          />
        )}
        {menuToggle && (
          <div className="grid tablet:hidden w-full absolute top-40 left-0">
            <MobileNav />
            <Cta
              className="px-5 gap-5 pt-5"
              secondaryStyle="border border-primary-400 bg-transparent"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
