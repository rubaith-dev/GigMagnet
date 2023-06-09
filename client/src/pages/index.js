import React from "react";
import {
  AllDoable,
  HeroSection,
  InspiringWork,
  PopularCategory,
  Testimonial,
  TrustedBy,
  AreYouSkilled,
  WhyChooseUs,
} from "../components/Homepage";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <TrustedBy/>
      <PopularCategory />
      <WhyChooseUs />
      <AreYouSkilled />
      <InspiringWork />
      <Testimonial />
      <AllDoable />
    </div>
  );
};

export default Index;
