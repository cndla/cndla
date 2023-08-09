"use client";
import React from "react";
import "./lab.scss";
import { motion } from "framer-motion";

const Lab = () => {
  const text1 = "an innovation lab that builds ideas and projects"
  const text2 = "that reshape culture and entertainment."
  const title = '<span>CNDLA</span><span>\</span> <span>LAB</span>'
  return (
    <section className="lab">
      <div className="lab__container">
      <motion.div 
      //i want to animate a line from right to left starting with 0 width 
      initial={{width:0, transformOrigin:'left'}}
      whileInView={{width:'100%'}}
      transition={{duration:1}}
       className="lab__container__hr top"></motion.div>
      <div className="lab__container__content">
        <h2 className="lab__container__content__title">cndla\lab</h2>
        <p className="lab__container__content__subtitle">{text1}</p>
        <p className="lab__container__content__subtitle">{text2}</p>
      </div>
      <motion.div 
      //i want to animate a line from right to left starting with 0 width 
      initial={{width:0, transformOrigin:'left'}}
      whileInView={{width:'100%'}}
      transition={{duration:1, delay:1}}
       className="lab__container__hr bot"></motion.div>      </div>
    </section>
  );
};

export default Lab;
