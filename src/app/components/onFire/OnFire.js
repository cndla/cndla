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


        <Logo text={"/wrkshop"} borderColor={"border-white"} extraClass={'mb-8 text-3xl'} />

        <Image
          src={hongo}
          alt="aca va un gif"
          width="auto"
          height="auto"
          className="w-80 xl:w-[625px] aspect-square "
        ></Image>
        <Image
          src={onfire}
          alt="aca va un gif"
          width="auto"
          height="auto"
          className="onFire__images__onfire w-80 xl:w-[625px]"
        ></Image>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={animation}
        className="onFire__workshops"
      >
        <p className="text-4xl xl:text-6xl">workshops that inspire</p>
        <motion.p className=" text-2xl xl:text-4xl">
          for all around the galaxy
        </motion.p>
      </motion.div>
      <div className="onFire__texts scale-[.35] sm:scale-100">
        <p className="onFire__texts__animation robotoMedium ">
          <motion.span
            initial={{ x: 0 }}
            whileInView={{
              x: ["-40px", "0px"]

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
        <p className="onFire__texts__animation robotoMedium">
          <motion.span
            initial={{ x: 0, }}
            whileInView={{
              x: ["-40px", "-10px"]

            }}
            transition={{
              duration: 0.99,
              delay: 0.5,
              repeat: Infinity,
              repeatDelay: 2,
              repeatType: "reverse",
              type: "spring",
            }}
          >
            digital
          </motion.span>{" "}
          world✽
        </p>
        /
        <p className="onFire__texts__animation robotoMedium">
          en
          <motion.span
            layout
            initial={{}}
            whileInView={{
              x: ["40px", "0px"],
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
      <p className="onFire__newEdition sm:text-3xl text-base">new edition coming soon</p>
    </section>
  );
};

export default OnFire;
