"use client";


import { motion } from "framer-motion";
import React from "react";


const blobTransition = {
  duration: 12,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
};


const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0b0b0f] overflow-hidden">
      {/* main radial gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,192,203,0.15)_0%,transparent_70%)]" />


      {/* blob 1 */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-pink-500/30 blur-[100px]"
        animate={{ x: [0, 150, -100, 0], y: [0, -100, 120, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={blobTransition}
        style={{ top: "20%", left: "15%" }}
      />


      {/* blob 2 */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full bg-white/10 blur-[120px]"
        animate={{ x: [0, -120, 100, 0], y: [0, 80, -120, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ ...blobTransition, duration: 16 }}
        style={{ top: "40%", right: "15%" }}
      />


     {/* blob 3 */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-pink-300/20 blur-[90px]"
        animate={{ x: [0, 80, -150, 0], y: [0, -60, 100, 0], scale: [1, 0.85, 1.15, 1] }}
        transition={{ ...blobTransition, duration: 20 }}
        style={{ bottom: "15%", left: "25%" }}
      />
    </div>
  );
};


export default Background; 