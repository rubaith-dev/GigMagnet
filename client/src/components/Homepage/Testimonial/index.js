import React, { useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="h-[500px] md:h-96 relative w-full flex flex-col-reverse md:grid grid-cols-2 container gap-10">
        <div className="grid place-items-center">
          <div className="h-fit">
            <p className="text-3xl ">Testimonies</p>
            <p className="italic text-sm md:text-xl my-3">
              "This freelancing platform is a game-changer! It connects
              freelancers with diverse clients, offers a user-friendly
              interface, reliable communication, secure payments, and a
              supportive community. Highly recommended!"
            </p>
            <p className="font-bold ">
              - Sherlock Holmes,
              <span className="font-light"> Private Detective</span>
            </p>
          </div>
        </div>

        <ReactPlayer
          className="border bg-videoThumbnail bg-no-repeat relative rounded-xl"
          url="https://res.cloudinary.com/dj75yn9h8/video/upload/v1686324913/Studio_Project_V1_ydstx5.mp4"
          muted={true}
          width="100%"
          height="100%"
          light={true}
          controls={true}
        />
      </div>
    </div>
  );
};

export default Testimonial;
