import React from "react";
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";

const Footer = () => {
  return (
    <div className="bg-teal-950 flex flex-col shadow-md  ">
      {/* MiddleBar */}
      <div className=" min-h-60 px-10 my-10 flex flex-row">
        <div className=" w-1/3  border-r border-white">
          <Logo />
        </div>
        <div className="  w-1/3 border-r border-white">
          <Menu />
        </div>
      </div>

      {/* BottomBar */}
      <div className="bg-teal-950 border-t-0 border-white flex flex-wrap justify-center px-8 py-4">
        <h2 className=" text-gray-200 font-medium">Copright-2024@Next15</h2>
      </div>
    </div>
  );
};

export default Footer;
