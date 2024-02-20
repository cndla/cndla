"use client";
import React from "react";
import "./lab.scss";
import LabCreating from "./LabCreating";

export const Logo = () => (
  <div className="border">
    <span className="border__text">cndla / lab</span>
  </div>
);

const Lab = () => {
  return (
    <section className="lab" id="experiences">
      <LabCreating />
    </section>
  );
};

export default Lab;
