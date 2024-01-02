/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import Image from "next/image";
import React from "react";
import NavMenu from "./NavMenu";
import NavBtn from "./NavBtn";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed z-20 flex h-20 w-full items-center justify-between bg-white px-[64px] max-lg:px-[32px] max-sm:px-[16px]">
      <div className=" flex items-center justify-center gap-10">
        <Image src="/assets/icons/logo.svg" alt="logo" height={75} width={75} />
        <h2 className="h2-bold   text-black">
          JANHIT <span className=" text-primary">DAL</span>
        </h2>
      </div>

      <div className=" flex items-center  gap-2">
        <Link
          href="/"
          className="bg-background  hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
        >
          Home
        </Link>
        <NavMenu />
        <Link
          href="/"
          className="bg-background  hover:text-accent-foreground focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-[#EFD595] focus:bg-[#EFD595] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
        >
          Contact
        </Link>
      </div>

      <div>
        <NavBtn />
      </div>
    </div>
  );
};

export default Navbar;
