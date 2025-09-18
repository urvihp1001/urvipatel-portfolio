"use client";

import { motion } from "framer-motion";
import React from "react";

// SVG triangle points (equilateral)
const trianglePoints = "50,0 100,86.6 0,86.6";

const rows = 12;
const cols = 20;

// Generate positions for triangles in staggered rows
const generateTriangles = () => {
  const triangles = [];
  const triangleWidth = 100;
  const triangleHeight = 87;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const offsetX = row % 2 === 0 ? 0 : triangleWidth / 2;
      const x = col * triangleWidth + offsetX;
      const y = row * (triangleHeight * 0.75);
      triangles.push({ x, y, id: `tri-${row}-${col}` });
    }
  }
  return triangles;
};

const triangles = generateTriangles();

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {/* Existing grid lines and scanline */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(0,255,0,0.2)_96%),linear-gradient(90deg,transparent_95%,rgba(0,255,0,0.2)_96%)] bg-[length:40px_40px]" />
      <motion.div
        className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,255,0,0.05)_0px,rgba(0,255,0,0.05)_2px,transparent_2px,transparent_4px)]"
        animate={{ backgroundPositionY: [0, 8] }}
        transition={{ duration: 0.15, repeat: Infinity, ease: "linear" }}
      />

    

      {/* central glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-[500px] h-[500px] rounded-full bg-green-500/10 blur-[200px]"
          animate={{ scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Background;
