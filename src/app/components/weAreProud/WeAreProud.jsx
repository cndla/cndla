"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import "./weAreProud.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../helpers/motionAnimations/animations";
import { Logo } from "../lab/Lab";
import { roboto } from "../fonts/Font";

const Line = () => {
  return (
    <svg
      width="60"
      height="2"
      viewBox="0 0 60 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1.25" x2="60" y2="1.25" stroke="black" stroke-width="1.5" />
    </svg>
  );
};

const WeAreProud = () => {
  //if its mobile return
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  if (isMobile) {
    return (
      <section
        className={`${roboto.className} weAreProud h-screen flex justify-center items-center`}
      >
        <div className="max-w-[24rem] m-auto flex flex-col gap-20 w-8/12">
          <div className="font-bold">
            <Logo text={"dgital studio"} />
            <p className="md:text-5xl mt-4 text-3xl  ">
              our full-service creative
            </p>
            <p className="md:text-5xl flex items-end text-3xl">
              - and strategic studio{" "}
              <span className="text-3xl font-normal">✽</span>
            </p>
          </div>
          <div className="md:text-2xl text-xl">
            <div className="text-justify ">
              with digital and offline impact, is dedicated and committed to
              empower our clients{" "}
              <span className="font-bold -tracking-[0.2rem]">
                ---------------
              </span>
            </div>
            <p className="flex justify-between text-xl">
              ✽<span className="md:text-2xl text-xl">success and growth</span>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      className={`${roboto.className} weAreProud text-black h-screen flex justify-center items-center`}
      id="studio"
    >
      <div className=" lg:w-10/12 m-auto flex flex-col justify-center items-center overflow-hidden">
        <div className="xl:text-8xl lg:text-7xl font-bold">
          <Logo text={"dgital studio"} />
          <p className="">our full-service creative</p>
          <div className="grid grid-cols-12 gap-2 place-content-center place-items-center">
            <div className="col-start-1 col-end-3 w-full ">
              <motion.div
                className=" h-2 bg-black "
                initial={{ width: 0 }}
                whileInView={{ width: "auto" }}
                style={{ originY: 0.1 }}
                transition={{ duration: 1 }}
              ></motion.div>
            </div>
            <div className="col-start-3 col-end-13">and strategic studio</div>
          </div>
          <motion.div
            layout
            className="text-3xl w-full font-normal flex justify-between gap-3 mt-9"
          >
            <motion.p layout className="text-nowrap">
              with online and offline impact,
            </motion.p>
            <motion.div
              className=""
              animate={{ width: 0 }}
              whileInView={{ width: "36%" }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                restSpeed: 1,
                repeatDelay: 1,
              }}
            ></motion.div>
            <p>is</p>
            <p>dedicated</p>
            <p>and</p>
          </motion.div>
          <div className="text-3xl font-normal flex items-center justify-between">
            <p>commited to empower our clients success and growth</p>
            <div className="w-10 xl:w-64">
              <motion.div
                className="text-right "
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
              >✽</motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WeAreProud;
