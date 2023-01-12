import React from "react";
import { motion } from "framer-motion";

export const Skill = (props: any) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full border border-primary-color w-10 h-10 md:w-14 md:h-14 hover:text-xl  ">
        {props.icon}
      </div>
      <p className="text-gray-500 text-sm">{props.title || null}</p>
    </div>
  );
};

export const SkillSmall = (props: any) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="rounded-full border border-primary-color w-5 h-5 md:w-5 md:h-5  " />
      <div>
        <h1 className="text-gray-500 ">{props.title}</h1>
      </div>
    </div>
  );
};
