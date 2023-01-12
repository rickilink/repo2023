import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroudCircles } from "./BackgroudCircles";
import { motion } from "framer-motion";

type Props = {};

export default function Hero({}: Props) {
  let mainColor = "#FCA466";
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Cristobal", "Welcome to my Portfolio", "Enjoy 😊  "],
    loop: true,
    deleteSpeed: 40,
    delaySpeed: 500,
  });
  return (
    <div className=" relative h-screen flex flex-col space-y-8  items-center justify-center text-center overflow-hidden">
      <BackgroudCircles />
      <img
        src={"https://avatars.githubusercontent.com/u/94920636?v=4"}
        alt="image"
        className="relative rounded-full h-32 w-32 md:h-52 md:w-52 xl:h-72 xl:w-72 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className=" text-xs mx-2 uppercase  text-gray-500 pb-2 md:text-sm tracking-[15px]">
          Fullstack Developer
        </h2>
        <h1 className=" text-xl md:text-5xl  lg:text-6xl font-semibold px-10 ">
          <span className="mr-3 ">{text}</span>
          <Cursor cursorColor="#0066a3" />
        </h1>
        <div className="pt-5 ">
          <Link href="#About">
            <button className="heroButton">About</button>
          </Link>
          {/* <Link href="#Experience">
            <button className="heroButton">Experience</button>
          </Link> */}
          <Link href="#Skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#Projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: -200,
        }}
        animate={{
          opacity: [0, 0.5, 0.5, 0],
          y: [0, -50, -50, +50],
        }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: 1,
          repeatDelay: 6,
        }}
        className="absolute bottom-0 w-60 h-30  flex flex-row  items-center  justify-center  "
      >
        <ChevronDoubleDownIcon className="text-primary-color/50" />

        <ChevronDoubleDownIcon className="text-primary-color/50" />
        <ChevronDoubleDownIcon className="text-primary-color/50" />
      </motion.div>
    </div>
  );
}
