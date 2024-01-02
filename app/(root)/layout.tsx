import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <Navbar />
      <div className=" px-[64px] py-36  max-lg:px-[32px] max-sm:px-[16px]">
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default layout;
