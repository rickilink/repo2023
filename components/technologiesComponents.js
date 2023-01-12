import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoNodejs,
  IoLogoFirebase,
} from "react-icons/io5";

import {
  SiRedux,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiBabel,
  SiJest,
  SiExpo,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";

const logos = {
  javascript: <IoLogoJavascript />,
  typescript: <SiTypescript />,
  jest: <SiJest />,
  tailwind: <SiTailwindcss />,
  babel: <SiBabel />,
  git: <FaGitAlt />,
  bootstrap: <SiBootstrap />,
  react: <IoLogoReact />,
  css: <IoLogoCss3 />,
  html: <IoLogoHtml5 />,
  node: <IoLogoNodejs />,
  firebase: <IoLogoFirebase />,
  redux: <SiRedux />,
  "react native": <TbBrandReactNative />,
  next: <SiNextdotjs />,
  expo: <SiExpo />,
  mongodb: <SiMongodb />,
  postgreSQL: <SiPostgresql />,
};
export const techLogos = new Map(Object.entries(logos));

const logosBig = {
  javascript: <IoLogoJavascript className="iconsBigTechnology" />,
  react: <IoLogoReact className="iconsBigTechnology" />,
  css: <IoLogoCss3 className="iconsBigTechnology" />,
  html: <IoLogoHtml5 className="iconsBigTechnology" />,
  node: <IoLogoNodejs className="iconsBigTechnology" />,
  firebase: <IoLogoFirebase className="iconsBigTechnology" />,
  redux: <SiRedux className="iconsBigTechnology" />,
  "react native": <TbBrandReactNative className="iconsBigTechnology" />,
  next: <SiNextdotjs className="iconsBigTechnology" />,
  typescript: <SiTypescript className="iconsBigTechnology" />,
  tailwind: <SiTailwindcss className="iconsBigTechnology" />,
  bootstrap: <SiBootstrap className="iconsBigTechnology" />,
  git: <FaGitAlt className="iconsBigTechnology" />,
  babel: <SiBabel className="iconsBigTechnology" />,
  jest: <SiJest className="iconsBigTechnology" />,
  expo: <SiExpo className="iconsBigTechnology" />,
  mongodb: <SiMongodb className="iconsBigTechnology" />,
  postgreSQL: <SiPostgresql className="iconsBigTechnology" />,
};

export const techLogosBig = new Map(Object.entries(logosBig));
