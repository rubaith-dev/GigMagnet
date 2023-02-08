import { Facebook, Instagram, Linkedin, Slack, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-7 bg-black opacity-90 border-b-4 border-gray-500 grid grid-cols-3 items-center px-20">
      <div className="h-14 w-14 relative">
        <Image
          src={`/Assets/white-logo.webp`}
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full">
        <h1 className="text-white capitalize">
          All Rights Reserved @Rubaith - 2023
        </h1>
        {/* <p className="text-white capitalize">
          This is a demo site only For showcase
        </p> */}
      </div>

      <div className="text-white flex justify-end gap-10">
        <Facebook />
        <Instagram />
        <Linkedin />
        <Twitter />
        <Slack />
      </div>
    </div>
  );
};

export default Footer;
