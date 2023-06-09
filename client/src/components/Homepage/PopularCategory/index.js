import React from "react";
import { Title } from "@/components/Shared";
import PopularCategoryCard from "./PopularCategoryCard";
import { motion } from "framer-motion";
import categories from "./popularCategory";

const parentAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const PopularCategory = () => {
  return (
    <div className="my-6 md:my-12 container">
      <Title title={"Popular Categories"} />

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 md:mt-10"
        variants={parentAnimation}
        initial="hidden"
        animate="show"
      >
        {categories.map(({ name, Icon, gigCount }, index) => {
          return (
            <motion.div variants={itemAnimation} key={index}>
              <PopularCategoryCard
                name={name}
                Icon={Icon}
                gigCount={gigCount}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default PopularCategory;
