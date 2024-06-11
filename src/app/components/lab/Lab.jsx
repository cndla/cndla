"use client";
import React from "react";
import LabCreating from "./LabCreating";
import { AnimatePresence } from "framer-motion";
import TextRevealByWord from "./Text-reveal";

export const Logo = ({ text, borderColor, extraClass }) => (
  <div
    className={`${extraClass} lg:border-4  border-2 ${borderColor ? borderColor : "border-black"
      } flex  lg:p-2 p-3  rounded-full lg:max-w-64 max-w-40 font-bold justify-center lg:text-4xl text-lg text-nowrap `}
  >
    <span className="px-3 font-normal text-nowrap ">{text}</span>
  </div>
);

const Lab = () => {
  return (
    // <LabCreating />
    <div
      className="pt-10 text-black bg-scroll bg-center bg-cover sm:bg-fixed sm:bg-white-pattern bg-white-pattern-mobile"
      id="experiences"
    >
      <TextRevealByWord
        text="creating impactful online and offline experiences."
        className=""
      />
      <TextRevealByWord
        text="an innovation lab that builds ideas and projects that reshape culture and entertainment."
        className=""
      />
      <TextRevealByWord
        text="activations, events and strategies on the point-of-sale."
        className=""
      />
    </div>
  );
};

export default Lab;
