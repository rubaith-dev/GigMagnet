import { Title, NextArrow, PrevArrow } from "@/components/Shared";
import Slider from "react-slick";
import InspiringWorkSlide from "./InspiringWorkSlide";
import InspiringWorkData from "./content";

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const InspiringWork = () => {
  return (
    <div className="my-20 p-10">
      <Title title={"Inspiring work"} className="mb-5"/>
      <Slider {...settings} >
        {InspiringWorkData.map(({ name, image, title }, index) => {
          return (
            <InspiringWorkSlide
              name={name}
              image={image}
              title={title}
              key={index}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default InspiringWork;
