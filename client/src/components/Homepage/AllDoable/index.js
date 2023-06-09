import Image from "next/image";
import React from "react";

const AllDoable = () => {
  return (
    <div className="my-10 h-96 grid grid-cols-2 container rouned-md">
      <div className="h-full relative">
        <div className="absolute w-full h-full bg-black z-10 opacity-50"></div>
        <Image
          className="object-cover absolute"
          src="/Assets/homepage/itsDoable.webp"
          fill
          alt="doable image"
          // sizes="100%"
        />
        <div className="text-white w-full absolute z-20 top-1/2 -translate-y-1/2 text-center">
          <p className="text-3xl">Your Hardwork, Your Success</p>
          <p className="text-white mt-1 capitalize text-lg">
            Empower your skills. Shape your success.
          </p>
          <button className="bg-primary-500 px-4 py-2 rounded-md mt-7">I am Talent</button>
        </div>
      </div>
      <div className="h-full relative">
        <div className="absolute w-full h-full bg-black z-10 opacity-50"></div>
        <Image
          className="object-cover absolute"
          src="/Assets/homepage/findExpert.webp"
          fill
        />
        <div className="text-white w-full absolute z-20 top-1/2 -translate-y-1/2 text-center">
          <p className="text-3xl text-center">Find Expertise, Fuel Success</p>
          <p className="text-white z-20 text-lg mt-1">
            Expert talent. Successful Business.
          </p>
          <button className="bg-primary-500 px-4 py-2 rounded-md mt-8" >Find Talent</button>
        </div>
      </div>
    </div>
  );
};

export default AllDoable;
