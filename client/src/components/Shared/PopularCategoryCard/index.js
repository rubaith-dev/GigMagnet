import React from "react";
import { Palette } from "lucide-react";

const PopularCategoryCard = () => {
  return (
    <div className="h-52 rounded-md bg-gray-200 grid place-items-center shadow-xl cursor-pointer hover:bg-primary-500 group hover:scale-105 transition-all ease-in-out duration-500">
      <div className="w-full">
        <Palette
          size={44}
          className="text-primary-600 w-full group-hover:text-white transition-all ease-in-out duration-500"
        />
        <p className="my-5 w-full text-center group-hover:text-white transition-all ease-in-out duration-500">
          Graphics & Design
        </p>
        <div className="w-full">
          <p className="bg-gray-300 w-fit px-3 py-1 rounded-md mx-auto group-hover:bg-primary-600 group-hover:text-white transition-all ease-in-out duration-500">
            10,391
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularCategoryCard;
