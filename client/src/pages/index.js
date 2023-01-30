import React from "react";
import {
  AllDoable,
  HeroSection,
  InspiringWork,
  PopularCategory,
  Testimonial,
  TheBestPart,
  YourDreamJob,
} from "../components/Homepage";

const Index = () => {
  return <div >
    <HeroSection/>
    <PopularCategory/>
    <TheBestPart/>
    <YourDreamJob/>
    <InspiringWork/> 
    <Testimonial/>
    <AllDoable/>
  </div>;
};

export default Index;
