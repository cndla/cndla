"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./weAreProud.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../helpers/motionAnimations/animations";
import { Logo } from "../lab/Lab";
import { roboto } from "../fonts/Font";

const WeAreProud = () => {
  return (
    <motion.section className={`${roboto.className} weAreProud text-black h-screen`} id="studio">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.65 }}
        className="flex flex-col justify-center items-center h-full w-7/12 m-auto"
      >

        <div className={`${roboto.className} text-black font-semibold`}>
          <Logo text={"dgital studio"} />
          <h2 className="text-8xl  text-black"> our full-service creative</h2>
          <div className="flex justify-center items-center">
            <motion.div
              className="bg-black h-1 min-w-32"
              initial={{ minWidth: 0 }}
              whileInView={{ width: "10rem" }}
              transition={{ delay: 1, duration: 0.275 }}
            ></motion.div>
            <h2 className="text-8xl">and strategic studio</h2>
          </div>
        </div>
        <div className=" mx-auto w-11/12 text-3xl">
          <div className=" ">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, type: "tween" }}
              className=" grid grid-cols-2 w-full"
            >
              with digital and offline impact,
              <motion.div className=" flex justify-between gap-2 justify-self-end w-full"

                whileInView={{ width: "16rem" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2,
                }}
              >

                <span
                  className=""
                >
                  is
                </span>
                <span
                >
                  dedicated
                </span>
                <span >and</span>
              </motion.div>
            </motion.div>
          </div>
          <div className="flex  ">
            <p className=" ">
              committed to empower our clients success and growth
            </p>
            <motion.span whileInView={{ marginLeft: "auto" }}
            >✽</motion.span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WeAreProud;
