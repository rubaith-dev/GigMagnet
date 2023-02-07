import React from "react";

const Title = ({ size = "text-xl md:text-3xl", title, className }) => {
  return (
    <div className={`grid justify-center ${className}`}>
      <p className={`${size} text-gray-600`}>{title}</p>
    </div>
  );
};

export default Title;
