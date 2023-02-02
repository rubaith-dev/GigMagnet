import React from "react";
import {
  AllDoable,
  HeroSection,
  InspiringWork,
  PopularCategory,
  Testimonial,
  TheBestPart,
  YourDreamJob,
  TrustedBy
} from "../components/Homepage";

const Index = () => {
  return <div >
    <HeroSection/>
    <TrustedBy/>
    <PopularCategory/>
    <TheBestPart/>
    <YourDreamJob/>
    <InspiringWork/> 
    <Testimonial/>
    <AllDoable/>
  </div>;
};

export default Index;
