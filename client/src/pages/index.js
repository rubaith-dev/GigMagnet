import React from "react";
import {
  FindTalent,
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
      <FindTalent />
    </div>
  );
};

export default Index;
