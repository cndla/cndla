"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./weAreProud.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../helpers/motionAnimations/animations";

const WeAreProud = () => {
  return (
    <motion.section className="weAreProud" id="studio">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.65 }}
        className="weAreProud__container"
      >
        <div className="weAreProud__container__pill">dgital studio</div>
        <div className="weAreProud__container__title roboto">
          <h2 className="text-8xl font-semibold"> our full-service creative</h2>
          <div className="weAreProud__container__title__second">
            <motion.div
              className="weAreProud__container__title__second__hr"
              initial={{ width: 0 }}
              whileInView={{ width: "130px" }}
              transition={{ delay: 1, duration: 0.275 }}
            ></motion.div>
            <h2 className="text-8xl">and strategic studio</h2>
          </div>
        </div>
        <div className="weAreProud__container__subtitle">
          <div className="weAreProud__container__subtitle__first">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, type: "tween" }}
              className="weAreProud__container__subtitle__first__text"
            >
              With digital and offline impact,
              <motion.span
                initial={{ marginLeft: "10px" }}
                whileInView={{ marginLeft: "350px" }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 5,
                }}
              >
                is
              </motion.span>
              <motion.span
                initial={{ marginLeft: "10px" }}
                whileInView={{ marginLeft: "auto" }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 5,
                }}
              >
                dedicated
              </motion.span>
              <motion.span initial={{ marginLeft: "auto" }}>and</motion.span>{" "}
              <br />
            </motion.div>
          </div>
          <div className="flex ">
            <p className="weAreProud__container__subtitle__second ">
              committed to empower our clients success and growth
            </p>
            <motion.div
              style={{}}
              initial={{ width: "0%" }}
              whileInView={{ width: "200px" }}
              transition={{ delay: 0.5, duration: 1 }}
            ></motion.div>
            <span>✽</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WeAreProud;
