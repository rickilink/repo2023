import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "./projects_info";

import { techLogosBig, techLogos } from "./technologiesComponents";
import { Skill, SkillSmall } from "./Skill";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

import Image from "next/image";
import Cart from "./Cart";

interface Project {
  img: string;
  title: string;
  description: string;
  url: string;
}

export const Projects: React.FC = () => {
  const totalProjects = projects.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalProjects - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalProjects - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen relative flex flex-col text-left max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute uppercase tracking-[10px] md:tracking-[20px] text-gray-500 top-12 xl:top-10 md:text-lg text-sm xl:text-xl md:top-20">
        Projects
      </h3>

      <div className="w-full flex flex-wrap items-center justify-center space-x-3 pt-10">
        <button
          className="z-10 px-3 py-1 rounded-xl font-extralight animate-pulse border-2 border-primary-color"
          onClick={handlePrevClick}
        >
          Prev
        </button>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full md:w-auto"
        >
          <Cart project={projects[currentIndex]} />
        </motion.div>
        <button
          onClick={handleNextClick}
          className="px-3 py-1 rounded-xl font-extralight animate-pulse border-2 border-primary-color"
        >
          Next
        </button>
      </div>

      <div className="w-full absolute top-0 bg-primary-color/10 left-0 h-[250px] -skew-y-12" />
    </div>
  );
};

{
  /* <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-primary-color/80  ">
        {projects?.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -200 }}
            transition={{ duration: 1.2 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`w-[33%] flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20  md:p-44 h-screen ${
              i === currentIndex ? "active" : ""
            }`}
          >
            {project.type === "wide" ? (
              <div className="flex items-center md:mt-32 mt-10">
                <Image src={project.img} width={550} height={150} alt="image" />
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                transition={{ duration: 1.2 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center min-w-24 min-h-[200px] md:min-h-[300px] md:mt-32 w-24 h-24 mt-10 md:w-52 md:h-52"
              >
                <Image
                  src={project.img}
                  alt="my gif"
                  height={100}
                  width={100}
                  className="self-center mx-auto w-[230px] h-[200px] md:w-[180px] md:h-[300px]"
                />
              </motion.div>
            )}

            <div className="space-y-10 px-0 md:px-10">
              <h4 className="text-sm text-center">
                {i + 1} of {projects.length}:{" "}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#FCA466]/50 uppercase font-semibold hover:text-primary-color"
                >
                  {project.title}
                </a>
              </h4>
              <p className="text-sm text-center md:text-lg md:text-left">
                {project.description}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                Technologies used in this project:
              </p>
              <ul className="px-5 flex gap-3 my-5 justify-center">
                {project.technologies.map((tec, i) => (
                  <div key={i}>{techLogos.get(tec)}</div>
                ))}
              </ul>
              <div className="flex justify-center">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-color"
                >
                  {project.title}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div> */
}
