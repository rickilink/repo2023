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
      className="flex flex-col items-center justify-center text-black"
    >
      <img
        src={project.img}
        alt={project.title}
        className="object-cover rounded-t-md "
        style={{ width: "800px", height: "380px" }}
      />

      <div className="flex flex-col w-[800px] bg-[#ddeaec]  rounded-b-xl min-h-[80px]">
        <div className="flex justify-around px-10 items-center min-h-[40px]">
          <h4 className="font-semibold text-lg">{project.title}</h4>
          <p className="text-sm max-w-[50%] flex text-center">
            {project.description}
          </p>
          <div className="px-6 py-2 bg-primary-color text-white font-bold flex rounded-md max-h-[40px]">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              View Details
            </a>
          </div>
        </div>
        <div className="flex justify-center items-end h-full mt-3">
          <ul className="px-5 flex gap-3">
            {project.technologies.map((tec, i) => (
              <div
                key={i}
                className="relative group animate-pulse"
                onMouseEnter={() => handleMouseEnter(tec)}
                onMouseLeave={handleMouseLeave}
              >
                {techLogos.get(tec)}
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
