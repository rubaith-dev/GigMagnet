import Image from "next/image";

const InspiringWorkSlide = ({image,name,title}) => {
  return (
    <div className="h-96 col-span-1 p-5">
      <div className="h-full relative shadow-lg rounded-md overflow-hidden">
        <Image
          src={`/Assets/homepage/InspiringWork/${image}`}
          className="object-cover"
          fill
          sizes="100%"
          priority={true}
          alt=""
        />
        <div className="absolute z-10 w-full bottom-0 bg-gray-100 py-3 px-8">
          <p className="text-gray-600 text-lg">{title}</p>
          <p className="text-gray-400">By {name}</p>
        </div>
      </div>
    </div>
  );
};

export default InspiringWorkSlide;
