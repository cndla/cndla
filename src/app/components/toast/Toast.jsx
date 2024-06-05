"use client";
import React from "react";
import { motion } from "framer-motion";

const Toast = ({ message, isVisible }) => {
  return (
    <motion.div
      className={`flex  items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-white border border-white bg-transparent divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow  space-x  transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      role="alert"
      initial={{ opacity: 0, x: 20 }}
      animate={isVisible ? {  opacity: 1, x: 0 } : { opacity: 0, x: 20}}
      transition={{ duration: 0.5 }}
    >
      <svg
        className="w-5 h-5 text-black rotate-45"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
        />
      </svg>
      <div className="text-sm font-normal ps-4">{message}</div>
    </motion.div>
  );
};

export default Toast;
