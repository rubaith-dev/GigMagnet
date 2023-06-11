import { useWindowSize } from "@/utils/hooks";
import React from "react";

const WhyChooseUsCard = ({ cardTitle, description, Icon, count }) => {
  const width = useWindowSize();

  return (
    <div
      className={`p-3 md:p-4 lg:p-10 ${
        (count === 1 && "md:border-b-2 md:border-r-2") ||
        (count === 4 && "md:border-l-2 md:border-t-2 md:-m-[2px]")
      } border-gray-400 border-double`}
    >
      <Icon
        size={width < 768 ? "40" : width === 768 ? "50" : "70"}
        className="text-primary-500 mx-auto"
      />
      <p className="text-center my-2 md:my-5 text-lg md:text-2xl text-gray-500">
        {cardTitle}
      </p>
      <p className="text-center lg:px-10 text-gray-400 text-sm md:text-lg">
        {description}
      </p>
    </div>
  );
};

export default WhyChooseUsCard;
