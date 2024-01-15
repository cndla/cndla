"use client";
import React from "react";
import "./lab.scss";
import { motion, useScroll } from "framer-motion";
import LabCreating from "./LabCreating";

export const Logo = () => (
  <div className="border">
    <p className="border__text">cndla / lab</p>
  </div>
)

const Lab = () => {



  const variants = {
    hidden: { y: "100%", overflow: "hidden" },
    visible: { transform: "translateY(0px)" },
  }
  return (
    <section className="lab" id="experiences">
      <LabCreating />
    </section>
  );
};

export default Lab;
