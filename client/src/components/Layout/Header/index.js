import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScrollPosition } from "@/utils/hooks";
import { links } from "./links";

const Header = () => {
  const headerRef = useRef(null);
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={`${
        scrollPosition > 10
          ? "bg-gray-100 shadow-xl"
          : "bg-transparent "
      } w-full fixed top-0 left-0 z-50 transition-all duration-500`}
      ref={headerRef}
    >
      <div className="px-20 py-3 flex justify-between">
        <div className="h-12 w-12 relative">
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
              <button className={`h-fit ${title === "Join" ? "px-5 py-1 bg-primary-700 rounded-md text-white":""}`} key={index}>
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
