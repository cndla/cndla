"use client";
import React, { useEffect, useRef, useState } from "react";
import "./hero.scss";
import { Roboto } from "next/font/google";
import {
  AnimatePresence,
  transform,
  useAnimation,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["center end", "end center"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-400, 0]);
  const x2 = useTransform(scrollYProgress, [0, 1], [400, 0]);

  return (
    <section className={`${roboto.className} hero `} id="about">
      <div className="hero__title">
        <div ref={container} className="hero__title__moment">
          <motion.span style={{ x: x }} className="roboto">we</motion.span>
          <motion.span style={{ x: x2 }} className="roboto">are</motion.span>
        </div>
        <div className="hero__title__moment"></div>
      </div>
      <div className="hero__subtitle">
        <motion.p
          initial={{ opacity: 0, y: 100, }}
          whileInView={{ opacity: 1, y: 0, }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className={roboto.className}
        >
          an impulsive feeling that drives you to do everything you love, <br /> to
          achieve and to take on new challenges.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100, }}
          whileInView={{ opacity: 1, y: 0, }}
          transition={{ delay: 0.5, duration: 0.65 }}
          className={roboto.className}

        >
          the passion of each of the people who are part of the team
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100, }}
          whileInView={{ opacity: 1, y: 0, }}
          transition={{ delay: 0.5, duration: 0.60 }}
        >
          thoughts that are transformed into real strategic actions.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100, }}
          whileInView={{ opacity: 1, y: 0, }}
          transition={{ delay: 0.5, duration: 0.55 }}
        >
          the rush of adrenaline of a new project.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100, }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0, originX: "100px" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          based in Argentina working globally.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
