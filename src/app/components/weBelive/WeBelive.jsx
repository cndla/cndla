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
      whileInView={{ width: "80px" }}
    ></motion.div>
  );

  if (isMobile) return (
    <motion.section className="h-dvh bg-black text-white flex items-center">
      <motion.div className="text-5xl" style={{ opacity: x }} >
        <p className="flex justify-between w-11/12">we belive in <span>*</span></p>
        <p>strong partnerships with</p>
        <p className="">_enganging brands.</p>
      </motion.div>

    </motion.section>
  )

  return (
    <section className="h-screen bg-black text-white flex items-center justify-center" ref={container}>
      <div className={`${roboto.className} md:text-7xl 2xl:text-8xl text-2xl`}>
        <motion.p style={{ opacity: x }}>we believe in strong</motion.p>
        <motion.div style={{ opacity: x }} className=" flex items-center gap-4">
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
