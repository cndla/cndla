"use client";
import React from "react";
import "./lab.scss";
import LabCreating from "./LabCreating";
import { AnimatePresence } from "framer-motion";

export const Logo = ({ text, borderColor, extraClass }) => (
  <div className={`${extraClass} lg:border-4  border-2 ${borderColor ? borderColor : "border-black"} flex  lg:p-2 p-3  rounded-full lg:max-w-64 max-w-32 font-bold justify-center lg:text-4xl text-xl text-nowrap w-12/12 `}>
    <span className="px-3 font-normal text-nowrap ">{text}</span>
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
