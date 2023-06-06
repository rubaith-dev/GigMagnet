import React from "react";

const Title = ({ size = "text-3xl", title }) => {
  return (
    <div className="grid justify-center">
      <p className={`${size} text-gray-600`}>{title}</p>
    </div>
  );
};

export default Title;
