"use client";
import Image from "next/image";
import React from "react";
import "./onFire.scss";
import hongo from "public/images/hongo.gif";
import onfire from "public/images/onfire.png";
import { motion } from "framer-motion";

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
        <Image
          src={hongo}
          alt="aca va un gif"
          width="auto"
          height="auto"
          className="onFire__images__hongo"
        ></Image>
        <Image
          src={onfire}
          alt="aca va un gif"
          width="auto"
          height="auto"
          className="onFire__images__onfire"
        ></Image>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={animation}
        className="onFire__workshops"
      >
        <motion.p>workshops that inspire</motion.p>
        <motion.p className="onFire__workshops__subtitle">
          for all around the galaxy
        </motion.p>
      </motion.div>
      <div className="onFire__texts">
        <p className="onFire__texts__animation">
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
        <p className="onFire__texts__animation">
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
        <p className="onFire__texts__animation">
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
      <p className="onFire__newEdition">new edition coming soon</p>
    </section>
  );
};

export default OnFire;
