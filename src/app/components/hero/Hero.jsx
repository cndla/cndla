"use client";
import React, { useEffect, useRef } from "react";
import "./hero.scss";
import { Roboto } from "next/font/google";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import video from "./video.gif";
import Image from "next/image";
import { element } from "three/examples/jsm/nodes/shadernode/ShaderNode";
import Word from "./Word";


export const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

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
    offset: ["end end", "start center"],
  })

  const y = useTransform(scrollYProgress3, [0, 1], [0, -300]);
  const x3 = useTransform(scrollYProgress3, [0, 1], [0, 300]);

  useEffect(() => {
    y.on("change", e => console.log(e))
  }, [y])


  return (
    <section className={`${roboto.className} hero lg:h-auto md:p-24 overflow-y-hidden pt-24`} id="about">

      <div ref={container} className="flex justify-center items-center w-full mt-64">

        <div className="w-8/12 relative overflow-hidden">
          <div className="absolute h-full w-full">
            <motion.div style={{ y: y }} className="h-[50%] bg-black w-full"></motion.div>

            <motion.div ref={theElemente} style={{ y: x3 }} className="h-[50%] bg-black  "></motion.div>
          </div>
          <motion.img src={video.src} alt="logo" className="w-full" />
        </div>
        {/* <motion.span style={{ x: x }} className="flex justify-center w-11/12 md:w-auto">
          </motion.span>
          <motion.span style={{ x: x2 }} className=" md:text-[10rem] text-9xl">
            we are
          </motion.span> */}
      </div>
      <div className="">
        <motion.div
          style={{ opacity: scrollYProgress2 }}
          className="hero__subtitle__text flex flex-wrap m-auto w-11/12"
          ref={element}
        >
          <Word value={text} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
