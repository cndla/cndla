"use client";
import React from "react";
import "./yourMoment.scss";
import { motion } from "framer-motion";

const YourMoment = () => {
  return (
    <section className="yourMoment">
      <div className="yourMoment__container">
        <div className="yourMoment__container__first">
          <motion.div
            initial={{ width: "0px", opacity: 0 }}
            whileInView={{ width: "180px", opacity: 1 }}
            className="spacer"
            transition={{ duration: 1, type: "tween", }}
            style={{ originX:0}}
          ></motion.div>
          <p className="yourMoment__container__first__text">
            this is your moment,
          </p>
        </div>
        <p className="yourMoment__container__text">
          go beyond{" "}
          <motion.span
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: "-130px", opacity: 1 }}
            transition={{ duration: 3, type: "spring", repeat:Infinity, repeatType:'reverse', repeatDelay: 1 }}    


            className="yourMoment__container__text__animation"
          >
            the normal
          </motion.span>
        </p>
      </div>
    </section>
  );
};

export default YourMoment;
