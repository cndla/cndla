"use client";
import React from "react";
import "./lab.scss";
import LabCreating from "./LabCreating";
import { AnimatePresence } from "framer-motion";

export const Logo = () => (
  <div className="border p-1">
    <span className="border__text">cndla / lab</span>
  </div>
);

const Lab = () => {
  return (
    <section className="lab roboto" id="experiences">
      <AnimatePresence>
        <LabCreating />
      </AnimatePresence>
    </section>
  );
};

export default Lab;
