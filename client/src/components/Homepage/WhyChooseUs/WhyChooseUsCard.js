import React from "react";

const WhyChooseUsCard = ({ cardTitle, description, Icon, count }) => {
  return (
    <div
      className={`p-10 ${
        (count === 1 && "border-b-2 border-r-2") ||
        (count === 4 && "border-l-2 border-t-2 -m-[2px]")
      } border-gray-400 border-double`}
    >
      <Icon size="70" className="text-primary-500 mx-auto" />
      <p className="text-center my-5 text-2xl text-gray-500">{cardTitle}</p>
      <p className="text-center px-10 text-gray-400 text-lg">{description}</p>
    </div>
  );
};

export default WhyChooseUsCard;
