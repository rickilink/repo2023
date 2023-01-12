import React from "react";
import { motion } from "framer-motion";
import { skill } from "./skill_info";
import { Skill } from "./Skill";
import { techLogosBig } from "./technologiesComponents";
type Props = {};
export const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center  "
    >
      <h3 className="absolute  uppercase tracking-[10px] md:tracking-[20px] text-gray-500 top-12 xl:top-10 text-sm md:text-lg xl:text-xl md:top-20">
        Skills
      </h3>
      {/* <h3 className="absolute top-24 md:top-32 xl:top-16 uppercase tracking-[3px] text-gray-500 text-sm ">
        Hover over a skill for currency profieciency
      </h3> */}

      <motion.div className="grid grid-cols-3  md:grid-cols-5  max-h-[400px] px-5    gap-5  overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-primary-color/80">
        {skill.map((sk, i) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, x: 0, delay: 0 + i / 9 }}
            animate={{ opacity: 1 }}
          >
            <Skill title={sk.title} icon={techLogosBig.get(sk.title)} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
