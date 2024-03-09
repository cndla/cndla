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

const Consorcio = () => {
  const axisY = "189px";

  return (
    <section className="consorcio w-11/12 m-auto py-64">
      <div className="consorcio__text scale-75 2xl:scale-100">
        <Image
          src={reunion}
          alt="imagen que dice reunion de consorcio"
          width={0}
          height={0}
        />
        <p className="text-2xl 2xl:text-4xl">an own project made with love.</p>
        <p className="text-2xl 2xl:text-4xl">
          where we talk about everything but <br /> the import things.
        </p>
        <p className="text-2xl 2xl:text-4xl">
          we mix everything we love and we <br /> make experiences in the cities
          we visit.
        </p>
      </div>
      <div className="consorcio__images">
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
        />
        <motion.img
          src={consorcio4.src}
          alt="imagen que dice reunion de consorcio"
          width={0}
          height={0}
          initial={{ y: axisY, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 3,
            delay: 1.5,
            type: "spring",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
        />
        <motion.img
          src={consorcio2.src}
          alt="imagen que dice reunion de consorcio"
          width={0}
          height={0}
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
        />
        <div className="">
          <motion.img
            src={consorcio3.src}
            alt="imagen que dice reunion de consorcio"
            width={205}
            height={205}
            initial={{ x: "-205px" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.img
            src={consorcio5.src}
            alt="imagen que dice reunion de consorcio"
            width={205}
            height={205}
          />
        </div>
      </div>
      <div className="consorcio__bottom">
        <div className="consorcio__bottom__images">
          <Image
            src={people}
            alt="imagen que dice reunion de consorcio"
            width={0}
            height={0}
          />
          <Image
            src={culture}
            alt="imagen que dice reunion de consorcio"
            width={0}
            height={0}
          />
          <Image
            src={gastro}
            alt="imagen que dice reunion de consorcio"
            width={0}
            height={0}
          />
          <Image
            src={music}
            alt="imagen que dice reunion de consorcio"
            width={0}
            height={0}
          />
          <Image
            src={gozadera}
            alt="imagen que dice reunion de consorcio"
            width={0}
            height={0}
          />
        </div>
        <p className="consorcio__bottom__upcoming">upcoming dates here</p>
      </div>
    </section>
  );
};

export default Consorcio;
