import React from "react";
import { BsMeta, BsGoogle, BsApple } from "react-icons/bs";
import { SiAdobeacrobatreader } from "react-icons/si";
import { FaStaylinked } from "react-icons/fa";

const TrustedBy = () => {
  return (
    <div className="flex justify-center items-center h-[8vh] md:h-[10vh] bg-gray-100">
      <div className="flex w-[90%] md:w-[70%] gap-5">
        <span className="inline md:text-2xl -mt-1 md:mt-1 text-gray-400">Trusted by</span>
        <div className="flex text-gray-400 text-xl md:text-4xl justify-around flex-grow">
          <BsMeta />
          <BsGoogle />
          <SiAdobeacrobatreader />
          <FaStaylinked />
          <BsApple />
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
