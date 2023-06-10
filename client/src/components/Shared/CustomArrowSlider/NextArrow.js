import { ChevronRight } from "lucide-react";
import React from "react";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className={`bg-primary-500  rounded-full w-10 h-10 md:w-12 md:h-12 grid place-items-center absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4  cursor-pointer shadow-xl`}
      onClick={onClick}
    >
      <ChevronRight className="text-white"/>
    </div>
  );
};

export default NextArrow;
