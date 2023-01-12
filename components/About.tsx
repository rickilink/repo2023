import React from "react";
import { about } from "./about_info";
import { motion } from "framer-motion";

type Props = {};

export const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col relative h-screen text-center  md:text-left md:flex-row max-w-7xl px-10  justify-evenly mx-auto  items-center "
    >
      <h3 className="absolute  uppercase tracking-[20px] text-gray-500 top-12  xl:top-10 text-lg md:text-xl md:top-20">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        src={about.image}
        className="-mb-20 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold ">{about.title}</h4>
        <p className="text-base">{about.description}</p>
      </div>
    </motion.div>
  );
};
