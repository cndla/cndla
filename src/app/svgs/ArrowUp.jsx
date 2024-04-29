import { motion, useScroll } from "framer-motion";
import React, { useEffect } from "react";
import { useState } from "react";

const ArrowUp = ({ show, color }) => {
  if (!show) return null;
  //onClick function to scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <motion.svg
      onClick={scrollToTop}
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      xmlns="http://www.w3.org/2000/svg"
      className="absolute w-8 cursor-pointer right-5 -top-10"
      viewBox="0 0 32 32"
    >
      <g data-name="17-Arrow Up">
        <path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z" />
        <path d="m15.29 5.29-7 7L9.7 13.7 15 8.41V27h2V8.41l5.29 5.29 1.41-1.41-7-7a1 1 0 0 0-1.41 0z" />
      </g>
    </motion.svg>
  );
};

export default ArrowUp;
