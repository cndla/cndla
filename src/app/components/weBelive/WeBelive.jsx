"use client";
import React, { useEffect, useRef } from "react";
import "./weBelive.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { roboto } from "../fonts/Font";

const WeBelive = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "center center"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const Hr = () => (
    <motion.div
      initial={{ width: 0 }}
      transition={{ duration: 1 }}
      style={{
        height: "6px",
        backgroundColor: "white",
      }}
      whileInView={{ width: "80px" }}
    ></motion.div>
  );

  return (
    <section className="h-screen bg-black text-white flex items-center justify-center" ref={container}>
      <div className={`${roboto.className} md:text-6xl xl:text-8xl text-2xl`}>
        <motion.p style={{ opacity: x }}>we believe in strong</motion.p>
        <motion.div style={{ opacity: x }} className=" ">
          <div className=" overflow-hidden">
            <Hr />
          </div>
          partnerships with
        </motion.div>
        <motion.p style={{ opacity: x }} className="">
          engaging brands
        </motion.p>
      </div>
    </section>
  );
};

export default WeBelive;
