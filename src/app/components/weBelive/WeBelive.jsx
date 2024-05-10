"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { roboto } from "../fonts/Font";
import useIsMobile from "../../customHooks/useIsMobile";

const WeBelive = () => {
  const container = useRef(null);
  const isMobile = useIsMobile()

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
        height: "10px",
        backgroundColor: "white",
      }}
      whileInView={{ width: "100%" }}
    ></motion.div>
  );

  if (isMobile) return (
    <motion.section className={`${roboto.className} flex items-center justify-center px-5 text-white bg-black h-[700px]`}>
      <motion.div className="flex flex-col justify-center text-[8vw] w-11/12 m-auto" style={{ opacity: x }} >
        <p className="flex justify-between w-10/12">we belive in <span>✽</span></p>
        <p>strong partnerships with</p>
        <p className="">_enganging brands.</p>
      </motion.div>

    </motion.section>
  )

  return (
    <section className="flex items-center justify-center h-screen text-white bg-black" ref={container}>
      <div className={`${roboto.className} sm:text-5xl  md:text-6xl lg:text-7xl 2xl:text-8xl`}>
        <motion.p style={{ opacity: x }}>we believe in strong</motion.p>
        <motion.div style={{ opacity: x }} className="flex items-center gap-4 ">
          <div className="w-10 overflow-hidden md:w-11 lg:w-16">
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
