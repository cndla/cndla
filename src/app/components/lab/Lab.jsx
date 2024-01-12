"use client";
import React from "react";
import "./lab.scss";
import { motion } from "framer-motion";

const Lab = () => {

  const Logo = () => (
    <div className="border">
      <p className="border__text">cndla / lab</p>
    </div>
  )

  const variants = {
    hidden: { y: "100%", overflow: "hidden" },
    visible: { transform: "translateY(0px)" },
  }
  return (
    <section className="lab" id="experiences">
      <div className="lab__container">
        <div className="lab__container__firstText">

          <Logo /><div className="spacer"></div><motion.p className="lab__container__firstText__creating"
            initial="hidden"
            whileInView="visible"
            variants={variants}> creating</motion.p>
        </div>
        <motion.p initial="hidden"
          whileInView="visible"
          variants={variants} className="lab__container__secondText">impactful <span>*</span></motion.p>
        <div className="lab__container__thirdText">
          <div className="lab__container__thirdText__spacer"></div> <motion.p
            initial="hidden"
            whileInView="visible"
            variants={variants}>online and</motion.p>
        </div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={variants} className="lab__container__offline">offline experiences.</motion.p>
      </div>
    </section>
  );
};

export default Lab;
