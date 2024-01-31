import React from "react";
import IMG from "../assets/desktop.svg";
import MobileImg from "../assets/mobile.svg";

const BackGroundImg = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-auto">
        <img
          src={IMG}
          alt=""
          className="hidden object-cover w-full h-full md:block"
        />

        <img
          src={MobileImg}
          alt=""
          className="object-cover w-full h-full md:hidden "
        />
      </div>
    </>
  );
};

export default BackGroundImg;
