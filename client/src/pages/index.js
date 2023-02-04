import React from "react";
import {
  AllDoable,
  HeroSection,
  InspiringWork,
  PopularCategory,
  Testimonial,
  TheBestPart,
  YourDreamJob,
  TrustedBy,
  WhyChooseUs
} from "../components/Homepage";

const Index = () => {
  return <div >
    <HeroSection/>
    <TrustedBy/>
    <PopularCategory/>
    <TheBestPart/>
    <YourDreamJob/>
    <WhyChooseUs/>
    <InspiringWork/> 
    <Testimonial/>
    <AllDoable/>
  </div>;
};

export default Index;
