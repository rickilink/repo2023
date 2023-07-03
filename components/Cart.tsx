import React, { useState } from "react";
import { techLogosBig, techLogos } from "./technologiesComponents";
import { motion } from "framer-motion";

interface Project {
  img: string;
  title: string;
  description: string;
  url: string;
  technologies: Array<string>;
}

interface CartProps {
  project: Project;
}

const Cart: React.FC<CartProps> = ({ project }) => {
  const [tooltipText, setTooltipText] = useState("");

  const handleMouseEnter = (value: string) => {
    setTooltipText(value);
  };

  const handleMouseLeave = () => {
    setTooltipText("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center text-black py-3 md:py-0"
    >
      <img
        src={project.img}
        alt={project.title}
        className="object-center rounded-t-md w-[80%]  md:w-[800px] md:h-[380px] "
      />

      <div className="flex flex-col  w-[80%] md:w-[800px] bg-[#ddeaec]  rounded-b-xl min-h-[80px]">
        <div className="md:flex justify-around px-10 items-center min-h-[40px]">
          <h4 className="font-semibold text-lg">{project.title}</h4>
          <p className="text-sm md:max-w-[50%] flex  text-left md:text-center py-2 md:py-0">
            {project.description}
          </p>
          <div className="px-6 py-2 bg-primary-color text-white font-bold flex justify-center  rounded-md md:max-h-[40px]">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              View demo
            </a>
          </div>
        </div>
        <div className="flex justify-center items-end h-full mt-3">
          <ul className="md:px-5 flex md:gap-3 space-x-6 flex-wrap pb-3 md:pb-0   max-w-[80%] ">
            {project.technologies.map((tec, i) => (
              <div
                key={i}
                className={`relative group `}
                onMouseEnter={() => handleMouseEnter(tec)}
                onMouseLeave={handleMouseLeave}
              >
                <span className={`animate-pulse delay-${i + 50}s`}>
                  {techLogos.get(tec)}
                </span>
                {tooltipText === tec && (
                  <div className="absolute bottom-full left-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                    {tec}
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
