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
                initial={{ x: "-40px" }}
                whileInView={{ x: ["80px", "-40px"] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              >
                is
              </motion.span>
              <motion.span
                initial={{ x: "-80px" }}
                whileInView={{ x: ["40px", "-80px"] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", restSpeed: 3 }}

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
              style={{ width: "8%", height: "5px", backgroundColor: "black" }}
              initial={{ maxWidth: 0 }}
              whileInView={{ maxWidth: "7%" }}
              transition={{ delay: 0.5, duration: 1 }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WeAreProud;
