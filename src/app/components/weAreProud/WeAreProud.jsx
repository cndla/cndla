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
        className={`${roboto.className} weAreProud h-[800px] flex justify-center items-center`}
      >
        <div className="flex flex-col w-10/12 gap-20 p-5 m-auto text-4xl md:text-5xl">
          <div className="m-auto font-bold ">
            <div className="flex px-4 py-1 text-base border border-black rounded-full w-fit">
              dgital studio
            </div>
            <p className="mt-4 ">
              our full-service creative
            </p>
            <p className="flex items-end ">
              - and strategic studio{" "}
              <span className="text-3xl font-normal ">✽</span>
            </p>
          </div>
          <div className="text-xl md:text-2xl">
            <div className="text-justify ">
              with digital and offline impact, is dedicated and committed to
              empower our clients{" "}
              <span className="font-bold -tracking-[0.2rem]">
                ---------------
              </span>
            </div>
            <p className="flex justify-between text-xl">
              ✽<span className="text-xl md:text-2xl">success and growth</span>
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
      <div className="flex flex-col items-center justify-center m-auto overflow-hidden lg:w-10/12">
        <div className="font-bold xl:text-8xl lg:text-7xl">
          <Logo text={"dgital studio"} />
          <p className="">our full-service creative</p>
          <div className="grid grid-cols-12 gap-2 place-content-center place-items-center">
            <div className="w-full col-start-1 col-end-3 ">
              <motion.div
                className="h-2 bg-black "
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
            className="flex justify-between w-full gap-3 text-3xl font-normal mt-9"
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
          <div className="flex items-center justify-between text-3xl font-normal">
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
