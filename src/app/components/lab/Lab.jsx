'use client'
import React from "react";
import "./lab.scss";
import { motion } from 'framer-motion'

const Lab = () => {
  return (
    <section className="lab">
      <div className="lab__container">
        <h2 className="lab__container__title">
          <span>CNDLA</span>
          <span>\</span>
          <span>LAB</span>
        </h2>
        <div className="lab__container__subtitle">
          <div className="lab__container__subtitle__top">
            <motion.div
              initial={{ "width": 0 }}
              whileInView={{ "width": "33%" }}
              transition={{ duration: 0.5 }}
              className="lab__container__subtitle__top__hr"></motion.div>
            an innovation lab that builds ideas and projects
          </div>
          <div className="lab__container__subtitle__bottom">
            that reshape culture and entertainment.
            <motion.div
              initial={{ "width": 0 }}
              whileInView={{ "width": "35%" }}
              transition={{ duration: 0.5 }}
              className="lab__container__subtitle__bottom__hr"></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lab;
