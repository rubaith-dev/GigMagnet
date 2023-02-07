import Image from "next/image";
import React from "react";

const FindTalent = () => {
  return (
    <div className="my-10 h-[450px] md:h-96 grid md:grid-cols-2 rouned-md">
      <FindTalentGrid
        title="Your Hardwork, Your Success"
        subTitle="Empower your skills. Shape your success."
        btnTitle="I am Talent"
        imageSrc="/Assets/homepage/itsDoable.webp"
  
      />

      <FindTalentGrid
        title="Find Expertise, Fuel Success"
        subTitle="Expert talent. Successful Business."
        btnTitle="Find Talent"
        imageSrc="/Assets/homepage/findExpert.webp"
       
      />
    </div>
  );
};

const FindTalentGrid = ({ title, subTitle, btnTitle,imageSrc }) => {
  return (
    <div className="h-full relative">
      <div className="absolute w-full h-full bg-black z-10 opacity-50"></div>
      <Image
        className="object-cover absolute"
        src={imageSrc}
        fill
        alt="doable image"
        // sizes="100%"
        priority={true}
      />
      <div className="text-white w-full absolute z-20 top-1/2 -translate-y-1/2 text-center">
        <p className="text-xl lg:text-3xl">{title}</p>
        <p className="text-white mt-1 capitalize text-sm md:text-base lg:text-lg">
          {subTitle}
        </p>
        <button className="bg-primary-500 p-2 md:px-4 md:py-2 rounded-md mt-3 md:mt-7">
          {btnTitle}
        </button>
      </div>
    </div>
  );
};

export default FindTalent;
