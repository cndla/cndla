"use client";
import React, { useEffect } from "react";
import "./yourMoment.scss";
import { motion, useInView } from "framer-motion";
import { useAnimate } from "framer-motion";
import useIsMobile from "../../customHooks/useIsMobile";
import { roboto } from "../fonts/Font";

const YourMoment = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const isMobile = useIsMobile();

  /*  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 }, { duration: 0.5, delay: 0.5 });
    } else {
      animate(scope.current, { opacity: 0 });
    }
  }, [isInView]); */

  if (isMobile)
    return (
      <section
        className={`${roboto.className} flex items-center bg-cover h-[700px] bg-white-pattern p-7`}
      >
        <div className="w-full text-[8vw]">
          <p className="flex items-end">
            <motion.span
              className="w-1/2 h-0.5 bg-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{duration:3}}
            >
              {" "}
            </motion.span>
            this is your
          </p>
          <p className="flex justify-between">
            moment, go <span>✽</span>
          </p>
          <p>beyond the normal</p>
        </div>
      </section>
    );

  return (
    <section
      className={`${roboto.className} yourMoment h-screen bg-white-pattern bg-cover bg-center`}
    >
      <div className="flex flex-col items-center justify-center h-full sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
        <div className="flex items-baseline">
          <motion.div
            initial={{ width: "0px", opacity: 0 }}
            whileInView={{ width: "60px", opacity: 1 }}
            className="w-10 h-px bg-black spacer"
            transition={{ duration: 1, type: "tween" }}
            style={{ originX: 0 }}
          ></motion.div>
          <p className="">this is your moment,</p>
        </div>
        <p className="">
          go beyond{" "}
          <motion.span
            ref={scope}
            initial={{ opacity: 0 }}
            whileInView={{opacity:1 }}
            transition={{
              duration: 3,
              type: "spring",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
            }}
            className=""
          >
            the normal
          </motion.span>
        </p>
      </div>
    </section>
  );
};

export default YourMoment;
