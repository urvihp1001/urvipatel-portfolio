"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
        className="relative flex items-center justify-center"
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeInOut" } }}
          className="relative w-[180px] h-[180px] xl:w-[280px] xl:h-[280px] 
                     rounded-full overflow-hidden shadow-lg z-10"
        >
          <Image
            src="/photo.jpg"
            priority
            quality={100}
            fill
            alt=""
            className="object-cover rounded-full"
          />
        </motion.div>

        {/* static faint outer glow ring */}
        <svg
          className="absolute w-[220px] xl:w-[320px] h-[220px] xl:h-[320px] z-0"
          fill="transparent"
          viewBox="0 0 320 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="160"
            cy="160"
            r="155"
            stroke="#fe37af"
            strokeWidth="6"
            className="opacity-30 blur-2xl"
          />
        </svg>

        {/* glowing rotating border with pulsing neon */}
        <motion.svg
          className="absolute w-[200px] xl:w-[300px] h-[200px] xl:h-[300px] z-20"
          fill="transparent"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="150"
            cy="150"
            r="145"
            stroke="#fe37af"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_0_12px_#fe37af]"
            animate={{
              rotate: 360,
              strokeWidth: [1, 3, 1],
              filter: [
                "drop-shadow(0 0 3px #fe37af)",
                "drop-shadow(0 0 15px #fe37af)",
                "drop-shadow(0 0 3px #fe37af)",
              ],
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              strokeWidth: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              filter: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
