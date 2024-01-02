import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" flex justify-between px-[64px] py-16 max-lg:px-[32px] max-sm:px-[16px]">
      <div className=" flex  items-center  gap-8">
        <Image src="/assets/icons/logo.svg" alt="logo" width={85} height={85} />
        <h2 className="h2-bold  text-center  text-black">
          JANHIT <span className=" text-primary">DAL</span>
        </h2>
      </div>
    </div>
  );
};

export default Footer;
