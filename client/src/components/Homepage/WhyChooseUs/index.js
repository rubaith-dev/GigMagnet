import { Title } from "@/components/Shared";
import WhyChooseUsCard from "./WhyChooseUsCard";
import chooseUsCardContent from "./content";

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100">
      <div className="container py-8 md:py-14">
        <Title title={"Why Choose Us"} />
        <div className=" grid md:grid-cols-2 mt-2 md:mt-10 ">
          {chooseUsCardContent.map(
            ({ Icon, cardTitle, description }, index) => {
              return (
                <WhyChooseUsCard
                  Icon={Icon}
                  cardTitle={cardTitle}
                  key={index}
                  description={description}
                  count={index+1}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
