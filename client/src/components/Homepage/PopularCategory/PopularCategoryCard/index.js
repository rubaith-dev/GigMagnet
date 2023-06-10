import React from "react";
import { useWindowSize } from "@/utils/hooks";

const PopularCategoryCard = ({ Icon, name, gigCount }) => {
  const width = useWindowSize();

  return (
    <div className="py-3 md:py-0 md:h-52 rounded-md bg-gray-200 grid place-items-center shadow-xl cursor-pointer hover:bg-primary-500 group hover:scale-105 transition-all ease-in-out duration-500">
      <div className="w-full">
        <Icon
          size={width >= 768 ? 44 : 30}
          className="text-primary-600 w-full group-hover:text-white transition-all ease-in-out duration-500"
        />
        <p className="my-5 w-full text-sm text-center group-hover:text-white transition-all ease-in-out duration-500">
          {name}
        </p>
        <div className="w-full">
          <p className="bg-gray-300 w-fit px-3 py-1 rounded-md mx-auto group-hover:bg-primary-600 group-hover:text-white transition-all ease-in-out duration-500">
            {gigCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularCategoryCard;
