"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./weAreProud.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../helpers/motionAnimations/animations";

const WeAreProud = () => {
  return (
    <motion.section className="weAreProud">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="weAreProud__container"
      >
        <div className="weAreProud__container__title">
          <h2 className="weAreProud__container__title__first">
            {" "}
            our full-service creative
          </h2>
          <div className="weAreProud__container__title__second">
            <motion.div
              className="weAreProud__container__title__second__hr"
              initial={{ maxWidth: 0 }}
              whileInView={{ maxWidth: "300px" }}
              transition={{ delay: 1, duration: 2 }}
            ></motion.div>
            <h2>and strategic studio</h2>
          </div>
        </div>
        <div className="weAreProud__container__subtitle">
          <div className="weAreProud__container__subtitle__first">
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, type: "tween" }}
              className="weAreProud__container__subtitle__first__text"
            >
              With digital and offline impact,
              <motion.span
                style={{}}
                initial={{ x: "6.604vw" }}
                animate={{ opacity: 1, x: "-4.604vw" }}
                transition={{
                  duration: 1,
                  type: "just",
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 3,
                }}
              >
                is{" "}
              </motion.span>
              <motion.span
                style={{}}
                initial={{ x: "4.604vw" }}
                animate={{ opacity: 1, x: "-4.604vw" }}
                transition={{
                  duration: 1,
                  type: "just",
                  delay: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 3,
                }}
              >
                dedicated
              </motion.span>
              and <br />
            </motion.p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <p className="weAreProud__container__subtitle__second">
              committed to empower our clients success and growth
            </p>
            <motion.div
              style={{ width: "8%", height: "10px", backgroundColor: "black" }}
              initial={{ maxWidth: 0 }}
              whileInView={{ maxWidth: "8%" }}
              transition={{ delay: 0.5, duration: 1 }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WeAreProud;
