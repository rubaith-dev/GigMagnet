import React from "react";
import { PopularCategoryCard, Title } from "@/components/Shared";
import { motion } from "framer-motion";
import categories  from "./popularCategory";

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
    <div className="mt-12 container">
      <Title title={"Popular Categories"} />

      <motion.div
        className="grid grid-cols-4 gap-5 mt-10"
        variants={parentAnimation}
        initial="hidden"
        animate="show"
      >
        {categories.map(({ name, Icon, gigCount }) => {
          return (
            <motion.div variants={itemAnimation}>
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
