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

          <Logo />
        </div>
      </div>
    </section>
  );
};

export default Lab;
