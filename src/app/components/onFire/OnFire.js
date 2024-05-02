"use client";
import Image from "next/image";
import React from "react";
import "./onFire.scss";
import hongo from "public/images/hongo.gif";
import onfire from "public/images/onfire.png";
import { motion } from "framer-motion";
import { Logo } from "../lab/Lab";

const animation = {
  hidden: {
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  visible: {
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.5,
      type: "spring",
    },
  },
};

const OnFire = () => {
  return (
    <section className="onFire" id="workshops">
      <div className="onFire__images">
        <Logo
          text={"/wrkshop"}
          borderColor={"border-white"}
          extraClass={"mb-8 text-3xl"}
        />

        <Image
          src={hongo}
          alt="aca va un gif"
          width="auto"
          height="auto"
          className="sm:w-80 xl:w-8/12 aspect-square "
        ></Image>
        <Image
          src={onfire}
          alt="aca va un gif"
          width="auto"
          height="auto"
          className="onFire__images__onfire w-60 sm:w-80 xl:w-8/12"
        ></Image>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={animation}
        className="onFire__workshops"
      >
        <p className="text-xl sm:text-4xl xl:text-6xl">
          workshops that inspire
        </p>
        <motion.p className="text-lg sm:text-2xl xl:text-4xl">
          for all around the galaxy
        </motion.p>
      </motion.div>
      <div className="flex gap-4 text-xs sm:text-2xl">
        <p className="onFire__texts__animation robotoMedium ">
          <motion.span
            initial={{ x: 0 }}
            whileInView={{
              x: ["-40px", "0px"],
              opacity: [0, 1],
            }}
            transition={{
              duration: 0.99,
              delay: 1.2,
              repeat: Infinity,
              repeatDelay: 2,
              repeatType: "reverse",
              type: "spring",
            }}
          >
            creati
          </motion.span>
          vity✽
        </p>
        /
        <p className="gap-1 onFire__texts__animation robotoMedium">
          <motion.span>digital</motion.span> world✽
        </p>
        /
        <p className="onFire__texts__animation robotoMedium">
          en
          <motion.span
            layout
            initial={{}}
            whileInView={{
              x: ["40px", "0px"],
              opacity: [0, 1],
            }}
            transition={{
              duration: 0.99,
              delay: 0.9,
              repeat: Infinity,
              repeatDelay: 2,
              repeatType: "reverse",
              type: "spring",
            }}
          >
            trepeneurs✽
          </motion.span>
        </p>
      </div>
      <p className="text-base onFire__newEdition sm:text-3xl">
        new edition coming soon
      </p>
    </section>
  );
};

export default OnFire;
