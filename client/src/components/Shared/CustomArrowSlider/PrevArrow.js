import { ChevronLeft } from "lucide-react";
import React from "react";

const PrevArrow = ({onClick}) => {
  return (
    <div
      className={`bg-primary-500 rounded-full h-10 w-10 md:w-12 md:h-12 grid place-items-center absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4  cursor-pointer shadow-xl z-10`}
      onClick={onClick}
    >
      <ChevronLeft className="text-white" />
    </div>
  );
};

export default PrevArrow;