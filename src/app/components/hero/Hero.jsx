"use client";
import React, { useRef } from "react";
import "./hero.scss";
import { Roboto } from "next/font/google";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import video from "./video.gif";
import Image from "next/image";
import { element } from "three/examples/jsm/nodes/shadernode/ShaderNode";
import Word from "./Word";
const roboto = Roboto({ subsets: ["latin"], weight: "500" });

const text = "an impulsive feeling that drives you to do everything you love, to achieve and to take on new challenges_____the passion  of each of the people who are part of the team____ thoughts that are transformed into real strategic actions______the rush of adrenaline of a new project______based in Argentina working globally."

const Hero = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "center center"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-400, 0]);
  const x2 = useTransform(scrollYProgress, [0, 1], [400, 0]);

  const element = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: element,
    offset: ["start end", "start center"],
  });
  const theElemente = useRef(null);
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: theElemente,
    offset: ["start end", "start 0.25"],
  })


  return (
    <section className={`${roboto.className} hero h-auto p-24`} id="about">
      <div className="hero__title">
        <div ref={container} className="hero__title__moment flex flex-col justify-center items-center">
          <motion.span style={{ x: x }} className="flex justify-center">
            <Image src={video} alt="logo" width={"auto"} height={"auto"} className="w-11/12" />
          </motion.span>
          <motion.span style={{ x: x2 }} className="roboto">
            we
            are
          </motion.span>
        </div>
        <div className="hero__title__moment"></div>
      </div>
      <div className="hero__subtitle roboto">
        <motion.div
          style={{ opacity: scrollYProgress2 }}
          className="hero__subtitle__text flex flex-wrap"
          ref={element}
        >
          <Word value={text} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
