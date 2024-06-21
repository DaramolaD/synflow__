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
    <div className="relative w-full flex justify-between items-center px-5 lg:px-10 pt-4 pb-3 md:py-7 bg-headerColor/50">
      <Logo width={120} height={40} className="w-32 lg:w-40" />
      <div className="hidden tablet:flex">
        <NavigationMenuDemo />
      </div>
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
      <Cta className="hidden tablet:flex" />
      {menuToggle && (
        <div className="grid tablet:hidden w-full absolute top-40 left-0">
          <MobileNav />
          <Cta className="px-5 gap-5 pt-5" />
        </div>
      )}
    </div>
  );
};

export default Header;
