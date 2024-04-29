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

  const isMobile = useIsMobile()


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
    window.addEventListener('resize', updateDimensions);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []); // Empty dependency array ensures this effect only runs once

  console.log(dimensions)
  return (


    <section className="bg-black text-white py-32 ">
      <div className="">
        <div className="">
          <div className="w-full  flex justify-between ">

            <div className="w-24 aspect-square">
              <motion.img src={consorcio1.src} alt="" className="w-full object-cover" initial={{ opacity: 0, }} whileInView={{ opacity: 1, y: dimensions.height }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, repeatType: "mirror" }} ref={ref} />
            </div>
            <div className="w-24">
            </div>
            <div className="w-24">
              <motion.img src={consorcio2.src} alt="" className="w-full object-cover" initial={{ opacity: 0, }} whileInView={{ opacity: 1, y: dimensions.height }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, repeatType: "mirror" }} />
            </div>
            <div className="w-24 aspect-square object-cover">
              <motion.img src={consorcio3.src} alt="" className="w-full object-cover aspect-square" />
            </div>
          </div>
          <div className="w-full flex justify-between">

            <div className="w-24">
            </div>
            <div className="w-24">
              <motion.img src={consorcio4.src} alt="" className="w-full" initial={{ opacity: 0, }} whileInView={{ opacity: 1, y: -dimensions.height }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, repeatType: "mirror" }} />
            </div>
            <div className="w-24">
            </div>
            <div className="w-24">
              <motion.img src={consorcio5.src} alt="" className="w-full aspect-square" />
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className=""></div>
    </section>
  );
};

export default Consorcio;
