import { Title, NextArrow, PrevArrow } from "@/components/Shared";
import Slider from "react-slick";
import InspiringWorkSlide from "./InspiringWorkSlide";
import InspiringWorkData from "./content";

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const InspiringWork = () => {
  return (
    <div className="my-2 lg:my-20 p-5 md:p-10">
      <Title title={"Inspiring work"} className="md:mb-5"/>
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
