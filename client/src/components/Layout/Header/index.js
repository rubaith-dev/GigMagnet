import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScrollPosition } from "@/utils/hooks";

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
  const headerRef = useRef(null);
  const scrollPosition = useScrollPosition();

  console.log(scrollPosition);

  return (
    <div
      className={`${
        scrollPosition > 10
          ? "bg-gray-100 shadow-2xl"
          : "bg-transparent "
      } w-full fixed top-0 left-0 z-50 transition-all duration-500`}
      ref={headerRef}
    >
      <div className="px-20 py-3 flex justify-between">
        <div className="h-14 w-14 relative">
          <Image
            src={`/Assets/${
              scrollPosition > 10 ? "color-logo.webp" : "white-logo.webp"
            }`}
            fill
            className="h-10 w-10 object-cover"
          />
        </div>

        <ul
          className={`flex items-center gap-5 text-lg ${
            scrollPosition > 10 ? "text-gray-600" : "text-white"
          }`}
        >
          {links.map(({ title, type, link }, index) => {
            return type === "link" ? (
              <li key={index}>
                <Link href={link}>{title}</Link>
              </li>
            ) : (
              <button className="h-fit" key={index}>
                {title}
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
