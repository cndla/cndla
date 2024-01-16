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
        transition={{ delay: 0.5, duration: 0.65 }} className="weAreProud__container"
      >
        <div className="weAreProud__container__title">
          <h2 className="weAreProud__container__title__first">
            {" "}
            our full-service creative
          </h2>
          <div className="weAreProud__container__title__second">
            <motion.div
              className="weAreProud__container__title__second__hr"
              initial={{ width: 0 }}
              whileInView={{ width: "130px" }}
              transition={{ delay: 1, duration: 2 }}
            ></motion.div>
            <h2>and strategic studio</h2>
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
                initial={{ x: "220px" }}
                whileInView={{ x: ["220px", "-120px"] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
              >
                is
              </motion.span>
              <motion.span
                initial={{ x: "110px" }}
                whileInView={{ x: ["110px", "-240px"] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}

              >
                dedicated
              </motion.span>
              and <br />
            </motion.div>
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
              style={{ height: "2px", backgroundColor: "black" }}
              initial={{ width: "0%" }}
              whileInView={{ width: "22%" }}
              transition={{ delay: 0.5, duration: 1 }}
            ></motion.div><span >✱</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WeAreProud;
