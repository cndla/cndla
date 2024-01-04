"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { pathVariants, pathVariants2, svgVariants } from "./SvgEngagement";



export const Performance = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let end = 50; // Initial ending point of the line
    const targetEnd = 150; // Final ending point of the line
    const animationSpeed = 2; // Speed of the drawing animation

    const drawLine = () => {
      ctx.clearRect(0, 10, canvas.width, canvas.height);

      // Set line properties
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;

      // Draw the line
      ctx.beginPath();
      ctx.moveTo(50, 50); // Starting point coordinates
      ctx.quadraticCurveTo(100, 25, 150, 50)
      ctx.lineTo(end, 50); // Current ending point coordinates
      ctx.stroke();

      // Increment the line's endpoint until reaching the target
      if (end < targetEnd) {
        end += animationSpeed;
        requestAnimationFrame(drawLine);
      }
    };

    drawLine();
  }, []);

  return <canvas ref={canvasRef} width={200} height={100} />;

};

export default Performance;
