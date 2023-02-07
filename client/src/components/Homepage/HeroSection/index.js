import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="h-[60vh] md:h-[70vh] lg:h-[90vh] relative">
      <div className="h-full w-full bg-hero_image bg-fixed bg-cover bg-no-repeat ">
        <div className="h-full w-full relative grid place-items-center">
          <div className="h-full w-full bg-black opacity-60 absolute"></div>
          <div className="w-[90%] md:w-[80%] lg:w-[70%] absolute">
            <p className="text-white text-4xl md:text-5xl lg:text-6xl font-light">
              Find the best freelance service
            </p>
            <div className="lg:grid grid-cols-8 gap-5 mt-7">
              <input
                className="focus:outline-none col-span-3 py-3 px-5 rounded-md md:text-lg text-gray-500 font-semibold placeholder:font-normal w-full"
                placeholder="gig title, keywords or skill name"
              />
              <input
                className="focus:outline-none col-span-3 py-3 px-5 rounded-md md:text-lg text-gray-500 font-semibold placeholder:font-normal w-full my-2 lg:my-0"
                placeholder="city, province or region"
              />
              <button className="text-white bg-primary-600 col-span-2 p-3 rounded-md md:text-lg w-full">
                search
              </button>
            </div>
            <p className="text-gray-300 md:text-xl font-light mt-2">
              or, browse by category: category1 category2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
