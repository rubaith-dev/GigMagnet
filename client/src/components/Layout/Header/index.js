import React from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    title: "Find Gigs",
    link: "#",
    type: "link",
  },
  {
    title: "Become a Seller",
    link: "#",
    type: "link",
  },
  {
    title: "Sign in",
    type: "button",
  },
  {
    title: "Join",
    type: "button",
  },
];

const Header = () => {
  return (
    <div className="w-full absolute top-0 left-0 z-50">
      <div className="px-10 py-3 flex justify-between">
        <div className="h-16 w-16 relative">
          <Image
            src="/Assets/white-logo.webp"
            fill
            className="h-10 w-10 object-cover"
          />
        </div>

        <ul className="text-white flex items-center gap-5 text-lg">
          {links.map(({ title, type, link }) => {
            return type === "link" ? (
              <li><Link href={link}>{title}</Link></li>
            ) : (
              <button className="h-fit">{title}</button>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
