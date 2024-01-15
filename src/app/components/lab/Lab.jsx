"use client";
import React from "react";
import "./lab.scss";
import LabCreating from "./LabCreating";

export const Logo = () => (
  <div className="border">
    <p className="border__text">cndla / lab</p>
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
