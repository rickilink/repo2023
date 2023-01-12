import React from "react";
import { motion } from "framer-motion";
import { projects } from "./projects_info";
import { techLogosBig, techLogos } from "./technologiesComponents";
import { Skill, SkillSmall } from "./Skill";
import Image from "next/image";

export const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      animate={{ opacity: 1 }}
      className="h-screen relative flex overflow-hidden flex-col text-left  md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute  uppercase tracking-[10px] md:tracking-[20px] text-gray-500 top-12 xl:top-10 md:text-lg text-sm  xl:text-xl md:top-20">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-primary-color/80  ">
        {projects?.map((project, i) => (
          <div
            key={i}
            className="w-screen  flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20  md:p-44 h-screen"
          >
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              transition={{ duration: 1.2 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className=" flex  items-center min-w-24 min-h-[200px] md:min-h-[300px] md:mt-32 w-24 h-24 mt-10 md:w-52 md:h-52 "
            >
              <Image
                src={project.img}
                alt="my gif"
                height={100}
                width={100}
                className=" self-center mx-auto w-[230px] h-[200px] md:w-[180px] md:h-[300px]"
              />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
              <h4 className=" text-sm md:text-lg xl:text-4xl  text-center ">
                Case Study {i + 1} of {projects.length}:{" "}
                <span className="underline decoration-[#FCA466]/50 uppercase font-semibold">
                  {project.title}
                </span>
              </h4>
              <p className="text-sm text-center md:text-lg md:text-left">
                {project.description}
              </p>
            </div>
            <div className="">
              <p className="text-sm text-gray-500">
                Technologies used in this project:{" "}
              </p>
              <ul className=" px-5 flex gap-3  my-5 justify-center  ">
                {project.technologies.map((tec, i) => (
                  <div key={i}>{techLogos.get(tec)}</div>
                ))}
              </ul>
              <div>
                <div className=" flex justify-center">
                  <a href={project.url} className="hover:text-primary-color">
                    {project.title}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-primary-color/10 left-0 h-[250px] -skew-y-12" />
    </motion.div>
  );
};
