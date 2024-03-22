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


  const axisY = isMobile ? "120px" : "200px";
  //use effect para detectar el tamaño de la pantalla y cambiar el estado de isMobile


  return (
    // <section className="consorcio w-11/12 m-auto py-64">

    //   <div className="consorcio__images">
    //    
    //     <div className="">
    //   <div className="md:col-span-3 md:row-span-4 md:col-start-4 grid grid-cols-4 grid-rows-2 gap-4">


    //   <div >

    //   </div>
    //   <div className="col-start-2 row-start-2">
    //     <motion.img
    //       src={consorcio4.src}
    //       alt="imagen que dice reunion de consorcio"
    //       width={0}
    //       height={0}
    //       initial={{ y: axisY, opacity: 0 }}
    //       whileInView={{ y: 0, opacity: 1 }}
    //       transition={{
    //         duration: 3,
    //         delay: 1.5,
    //         type: "spring",
    //         repeat: Infinity,
    //         repeatType: "reverse",
    //         repeatDelay: 1,
    //       }}
    //     /></div>
    //   <div className="col-start-3 row-start-1">
    //     <motion.img
    //       src={consorcio2.src}
    //       alt="imagen que dice reunion de consorcio"
    //       width={0}
    //       height={0}
    //       initial={{ opacity: 0 }}
    //       whileInView={{ y: axisY, opacity: 1 }}
    //       transition={{
    //         duration: 3,
    //         delay: 1.3,
    //         type: "spring",
    //         repeat: Infinity,
    //         repeatType: "reverse",
    //         repeatDelay: 1,
    //       }}
    //     />
    //   </div>
    //   <div className="col-start-4 row-start-1">
    //   </div>
    //   <div className="col-start-4 row-start-2">
    // </div>

    //     </div>
    //   </div>
    // </section>

    <section className="grid grid-cols-6 grid-rows-6 gap-4 bg-black text-white pt-48 ">
      <div className="col-span-6 row-span-2 md:col-span-3 md:row-span-4 md:col-start-4 md:row-start-1">

        <div className="grid grid-cols-8 grid-rows-6 gap-1 p-4 ">
          <div className="col-span-2 row-span-3  ">
            <motion.img
              src={consorcio1.src}
              alt="imagen que dice reunion de consorcio"
              initial={{ opacity: 0 }}
              whileInView={{ y: axisY, opacity: 1 }}
              transition={{
                duration: 3,
                delay: 1,
                type: "spring",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              }}
              className="md:w-full 2xl:w-fit  w-full"
            /></div>
          <div className="col-span-2 row-span-3 col-start-3">
            <motion.img
              src={consorcio4.src}
              alt="imagen que dice reunion de consorcio"
              initial={{ y: -axisY, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="md:w-full 2xl:w-fit w-full"
              transition={{
                duration: 3,
                delay: 1.5,
                type: "spring",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              }}
            />
          </div>
          <div className="col-span-2 row-span-3 col-start-5 row-start-1">
            <motion.img
              src={consorcio2.src}
              alt="imagen que dice reunion de consorcio"
              initial={{ opacity: 0 }}
              whileInView={{ y: axisY, opacity: 1 }}
              transition={{
                duration: 3,
                delay: 1.3,
                type: "spring",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              }}
              className="md:w-full 2xl:w-fit w-full"
            />

          </div>
          <div className="col-span-2 row-span-3 col-start-7 row-start-1  items-center">
            <motion.img
              src={consorcio3.src}
              alt="imagen que dice reunion de consorcio"
              initial={{ x: "-205px" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="md:w-full 2xl:w-fit w-full"
            />

          </div>
          <div className="col-span-2 row-span-3 col-start-7 row-start-4  ">
            <motion.img
              src={consorcio5.src}
              alt="imagen que dice reunion de consorcio"
              className="md:w-full 2xl:w-fit w-full"
            />
          </div>
        </div>

      </div>
      <div className="col-span-6 row-span-2 row-start-3 md:col-span-2 md:row-span-4 md:col-start-2">
        <div className="flex flex-col justify-center items-center text-lg  text-center text-wrap gap-4 md:col-span-3 md:row-span-4 md:col-start-2 md:text-2xl md:text-right xl:text-3xl 2xl:text-3xl md:items-end">
          <Image
            src={reunion}
            alt="imagen que dice reunion de consorcio"
            className="w-80"
          />
          <div className="flex flex-col gap-2 px-8 md:gap-4 ">

            <p className="">an own project made with love.</p>
            <p className="">
              where we talk about everything but the import things.
            </p>
            <p className="">
              we mix everything we love and we make experiences in the cities
              we visit.
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-6 row-start-5 md:col-span-4 md:col-start-2 md:row-start-5">
        <div className="w-11/12 m-auto">
          <div className="flex justify-between p-4 sm:pt-8">
            <Image
              src={people}
              alt="imagen que dice reunion de consorcio"
              className="w-12 md:w-32"
            />
            <Image
              src={culture}
              alt="imagen que dice reunion de consorcio"
              className="w-12 md:w-32"
            />
            <Image
              src={gastro}
              alt="imagen que dice reunion de consorcio"
              className="w-12 md:w-32"
            />
            <Image
              src={music}
              alt="imagen que dice reunion de consorcio"
              className="w-12 md:w-32"
            />
            <Image
              src={gozadera}
              alt="imagen que dice reunion de consorcio"
              className="w-12 md:w-32"
            />
          </div>
          <p className="text-center md:text-3xl">upcoming dates here</p>
        </div>
      </div>
    </section>
  );
};

export default Consorcio;
