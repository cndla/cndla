"use client";
import React from "react";
import "./lab.scss";
import LabCreating from "./LabCreating";
import { AnimatePresence } from "framer-motion";
import ArrowUp from "@/app/svgs/ArrowUp";

export const Logo = ({ text, borderColor }) => (
  <div className={`border-2 ${borderColor ? borderColor : "border-black"} flex  p-2 rounded-full max-w-64 justify-center`}>
    <span className="text-4xl px-3 font-normal">{text}</span>
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
