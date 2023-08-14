import React from "react";
import { motion } from "framer-motion";

import { techLogos } from "./technologiesComponents";

type Props = {
  title: string;
  company: string;
  technologies: string[];
  dateStart: string;
  dateEnd: string;
  summary: string[];
  image: string;
};

export const ExperienceCard = (props: Props) => {
  return (
    <article className="flex p-3 flex-col bg-[#292929] rounded-lg items-center space-y-1 md:space-y-7 xl:space-y-2 flex-shrink-0  md:max-w-1/2 xl:max-w-1/3 snap-center    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <img
        src={props.image}
        alt="image"
        className="h-24 w-24 md:h-24 md:w-24  rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
      />
      <div className="md:px-4 xl:px-6  ">
        <h4 className="text-base md:text-md xl:text-xl font-light ">
          {props.title}
        </h4>
        <p className="font-bold text-base md:text-md xl:text-xl mt-1">
          {props.company}
        </p>

        <p className=" text-xs py-1 md:py-2 xl:py-1 text-gray-300  ">
          Started: <span>{props.dateStart}</span> <br /> Ended:{" "}
          <span>{props.dateEnd}</span>
        </p>

        <ul className="list-disc space-y-2 ml-2 text-sm max-h-[230px] min-h-[230px] p-5 xl:space-y-1 xl:ml-1 xl:text-ms overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-primamry-color/80 2xl:justify-center  ">
          {props.summary.map((el, i) => (
            <li key={i} className="max-w-[220px] min-w-[220px]">
              {el}
            </li>
          ))}
        </ul>
        <div className="flex space-x-2  justify-center">
          {props.technologies?.map((tec, i) => (
            <div key={i}>{techLogos.get(tec)}</div>
          ))}
        </div>
      </div>
    </article>
  );
};
