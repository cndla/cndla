"use client";
import React, { useRef } from "react";
import "./hero.scss";
import { Roboto } from "next/font/google";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import video from "./video.gif";
import Image from "next/image";
import { element } from "three/examples/jsm/nodes/shadernode/ShaderNode";
const roboto = Roboto({ subsets: ["latin"], weight: "500" });

const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "0.3 0.6"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-400, 0]);
  const x2 = useTransform(scrollYProgress, [0, 1], [400, 0]);

  const element = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: element,
    offset: ["start end", "start center"],
  });

  return (
    <section className={`${roboto.className} hero `} id="about">
      <div className="hero__title">
        <Image src={video} alt="logo" width={605} height={301} />
        <div ref={container} className="hero__title__moment">
          <motion.span style={{ x: x }} className="roboto">
            we
          </motion.span>
          <motion.span style={{ x: x2 }} className="roboto">
            are
          </motion.span>
        </div>
        <div className="hero__title__moment"></div>
      </div>
      <div className="hero__subtitle roboto">
        <motion.p
          style={{ opacity: scrollYProgress2 }}
          className="hero__subtitle__text"
          ref={element}
        >
          <span className="hero__subtitle__text__span">manifist</span> an
          impulsive feeling that drives you to do{" "}
          <strong>everything you love</strong>, to achieve and to take on new{" "}
          <strong>challenges_____</strong>the passion of each of the people who
          are part of the team____ thoughts that are transformed into real{" "}
          <strong>strategic actions______</strong>the rush of{" "}
          <strong>adrenaline </strong> of a new project______based in Argentina{" "}
          <strong>working globally.</strong>{" "}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
