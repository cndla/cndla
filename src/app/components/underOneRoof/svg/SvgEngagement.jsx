"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";


export const svgVariants = {
  hidden: {},
  visible: {
    transition: {
      duration: 1,
    },
  },
};

export const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 1, repeat: Infinity, repeatType: "reverse" },
  },
};
export const pathVariants2 = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
  },
};

export const SvgEngagement = () => {


  return (
    <svg
      width="53"
      height="45"
      viewBox="0 0 53 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
      className='w-full h-full'
    >
      <g clipPath="url(#clip0_105_215)">
        <path
          d="M53.1501 44.85V44.7611V44.6111H53.0001C40.8029 44.6111 30.8762 34.6957 30.8762 22.5133C30.8762 10.3308 40.8029 0.415487 53.0001 0.415487H53.1501V0.265487V0V-0.15H53.0001C40.505 -0.15 30.3104 9.97859 30.3104 22.4867C30.3104 34.9946 40.5048 45.15 53.0001 45.15V45.0265H53.1501V45V44.85Z"
          fill="white"
          stroke="white"
          strokeWidth="0.3"
          className="svg-elem-1"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        ></path>
        <path
          d="M15.363 38.5221C14.9112 38.5221 14.5391 38.1504 14.5391 37.6991C14.5391 37.2477 14.9112 36.8761 15.363 36.8761C23.3104 36.8761 29.7958 30.4247 29.7958 22.4601C29.7958 14.4955 23.337 8.04421 15.363 8.04421C14.9112 8.04421 14.5391 7.67253 14.5391 7.2212C14.5391 6.76987 14.9112 6.39819 15.363 6.39819C24.2141 6.39819 31.4172 13.5929 31.4172 22.4336C31.4172 31.2743 24.2141 38.469 15.363 38.469V38.5221Z"
          fill="white"
          className="svg-elem-2"
          variants={pathVariants2}
          initial="hidden"
          animate="visible"
        ></path>
        <path
          d="M15.3631 37.9584H15.4631V37.8584V37.5929V37.4929H15.3631C7.09875 37.4929 0.365797 30.7677 0.365797 22.5133C0.365797 14.2589 7.09876 7.53346 15.3634 7.50709L15.4631 7.50677V7.40709V7.1416V7.0416H15.3631C6.82881 7.0416 -0.1 13.9891 -0.1 22.5133C-0.1 31.0376 6.82903 37.9584 15.3631 37.9584Z"
          fill="white"
          stroke="white"
          strokeWidth="0.2"
          className="svg-elem-3"
          variants={pathVariants2}
          initial="hidden"
          animate="visible"
        ></path>
      </g>
      <defs>
        <clipPath
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <rect width="53" height="45" fill="white" className="svg-elem-4"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

