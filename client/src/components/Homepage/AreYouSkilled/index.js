import React from "react";

const AreYouSkilled = () => {
  return (
    <div className="bg-skill_image h-[450px] w-full bg-cover bg-center bg-no-repeat relative">
      <div className="h-full w-full absolute backdrop-blur-[10px]"></div>
      <div className="w-full h-full absolute grid place-items-center">
        <div className="text-white w-full">
          <h1 className="text-5xl uppercase font-extralight text-center">
            Are you Skilled?
          </h1>
          <p className="text-xl capitalize mt-4 mb-8 text-center">
            Waiting for the best opportunity !!
          </p>
          <div className="w-full grid">
            <button className="bg-primary-500 hover:bg-white hover:text-primary-500 h mx-auto px-10 py-2 rounded-md font-semibold text-lg duration-300">
              Become a Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreYouSkilled;
