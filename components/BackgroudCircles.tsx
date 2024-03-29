import React from "react";
import { motion } from "framer-motion";

type Props = {};

export const BackgroudCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 1],
        opacity: [0.1, 0.2, 0.4, 1.0],
        borderRadius: ["20%", "20%", "20%"],
      }}
      transition={{
        duration: 1,
      }}
      className="relative flex justify-center items-center"
    >
      {/*     <div className=" absolute border border-[#333333] rounded-full h-[200px] w-[200px]  mt-52  md:mt-64 xl:mt-86 animate-ping" /> */}

      <div className=" absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52  md:mt-64 xl:mt-96" />
      <div className=" absolute  border-4 border-primary-color opacity-20 rounded-full h-[650px] w-[650px] mt-52 md:mt-64 xl:mt-96 animate-pulse" />
      {/*  <div className=" absolute  border border-primary-color  rounded-full h-[550px] w-[550px] mt-52 md:mt-64 xl:mt-96 animate-ping" /> */}

      <div className=" absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 md:mt-64 xl:mt-96 " />
    </motion.div>
  );
};
