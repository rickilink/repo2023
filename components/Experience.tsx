import React from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import { experience } from "./experience_info";

type Props = {};
export const Experience = (props: Props) => {
  return (
    <motion.div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10  justify-evenly  mx-auto items-center    ">
      <h3 className="absolute top-12 uppercase tracking-[10px] md:tracking-[15px] text-gray-500  text-sm md:text-lg md:top-15 xl:text-xl xl:top-10">
        Experience{" "}
      </h3>
      <div className="w-full flex  space-x-2  xl:space-x-5 md:pt-24  overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-primary-color/80 2xl:justify-center md:items-center md:justify-center">
        {experience?.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ y: -20 }}
            transition={{ duration: 0.5, x: 0, delay: 0 + i / 5 }}
            animate={{ y: 0 }}
          >
            <ExperienceCard
              image={exp.image}
              title={exp.title}
              company={exp.company}
              dateStart={exp.dateStart}
              dateEnd={exp.dateEnd}
              technologies={exp.technologies}
              summary={exp.summary}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
