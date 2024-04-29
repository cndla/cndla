/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef, useState } from "react";
import "./consorcio.scss";
import Image from "next/image";
import {
  consorcio1,
  consorcio2,
  consorcio3,
  consorcio4,
  consorcio5,
  culture,
  gastro,
  gozadera,
  music,
  people,
} from "./data";
import reunion from "public/images/reuniondeconsorcio.png";
import { motion } from "framer-motion";
import useIsMobile from "../../customHooks/useIsMobile";

const Consorcio = () => {
  const isMobile = useIsMobile();

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const ref = useRef(null);

  useEffect(() => {
    // Function to update dimensions
    const updateDimensions = () => {
      if (ref.current) {
        const { clientWidth, clientHeight } = ref.current;
        setDimensions({ width: clientWidth, height: clientHeight });
      }
    };

    // Call updateDimensions initially
    updateDimensions();

    // Add event listener to window for resize events
    window.addEventListener("resize", updateDimensions);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []); // Empty dependency array ensures this effect only runs once

  return (
    <section className="pt-32 text-white bg-black ">
      <div className="space-y-10">
        <div className="">
          <div className="flex justify-between w-full ">
            <motion.img
              src={consorcio1.src}
              alt=""
              className="object-cover w-1/4 p-1 "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: dimensions.height }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2,
                repeatType: "mirror",
              }}
              ref={ref}
            />
            <div className="w-1/4"></div>
            <motion.img
              src={consorcio2.src}
              alt=""
              className="object-cover w-1/4 p-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: dimensions.height }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2,
                repeatType: "mirror",
              }}
            />
            <motion.img
              src={consorcio3.src}
              alt=""
              className="object-cover w-1/4 p-1 aspect-square"
            />
          </div>
          <div className="flex justify-between w-full">
            <div className="w-1/4"></div>
            <motion.img
              src={consorcio4.src}
              alt=""
              className="object-cover w-1/4 p-1 aspect-square"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: -dimensions.height }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2,
                repeatType: "mirror",
              }}
            />
            <div className="w-1/4"></div>
            <motion.img
              src={consorcio5.src}
              alt=""
              className="object-cover w-1/4 p-1 aspect-square"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 ">
          <Image src={reunion} alt="" className="w-36" />
          <div className="px-12 space-y-5 text-center text-balance">
            <p>an own project made with love.</p>
            <p>where we talk about everything but the important things.</p>
            <p>
              we mix everything we love and we make experiences in the cities we
              visit.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between p-5 pt-8">
          <img src={gastro.src} alt="" className="w-12" />
          <img src={music.src} alt="" className="w-12" />
          <img src={culture.src} alt="" className="w-12" />
          <img src={people.src} alt="" className="w-12" />
          <img src={gozadera.src} alt="" className="w-12" />
        </div>
        <p className="text-sm text-center underline underline-offset-4">
          upcoming dates here
        </p>
      </div>
    </section>
  );
};

export default Consorcio;
