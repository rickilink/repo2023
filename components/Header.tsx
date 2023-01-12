import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Mail, social } from "./social_info";
type Props = {};

export const Header = (props: Props) => {
  return (
    <header className="sticky top-0 px-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          x: {
            duration: 1.5,
            type: "spring",
          },
        }}
        className="flex flex-row items-center "
      >
        {social.map((so) =>
          so.network ? (
            <div>
              <SocialIcon
                network={so.network}
                url={so.url}
                fgColor={so.color}
                bgColor={so.bgColor}
              />
            </div>
          ) : (
            <div>
              <SocialIcon
                url={so.url}
                fgColor={so.color}
                bgColor={so.bgColor}
              />
            </div>
          )
        )}
      </motion.div>
      <motion.div
        initial={{
          x: +200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          x: {
            duration: 1.5,
            type: "spring",
          },
        }}
        className="flex flex-row items-center text-gray-300 "
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          url={Mail}
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
};
