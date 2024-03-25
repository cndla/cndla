"use client";
import React from "react";
import LabCreating from "./LabCreating";
import { AnimatePresence } from "framer-motion";

export const Logo = ({ text, borderColor, extraClass }) => (
  <div className={`${extraClass} lg:border-4  border-2 ${borderColor ? borderColor : "border-black"} flex  lg:p-2 p-3  rounded-full lg:max-w-64 max-w-40 font-bold justify-center lg:text-4xl text-lg text-nowrap `}>
    <span className="px-3 font-normal text-nowrap ">{text}</span>
  </div>
);

const Lab = () => {
  return (
    <LabCreating />
  );
};

export default Lab;
