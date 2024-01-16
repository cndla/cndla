import React, { useRef } from "react";
import { Logo } from "./Lab";
import "./labCreating.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const LabCreating = () => {
    const reference = useRef(null);
    const text = "_creating impactful ✽ online and offline experiences.";
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["start 0.9", "start 0.25"],
    });

    const splitText = text.split(" ");
    return (
        <div className="LabCreating">
            <div className="LabCreating__row">
                <Logo />
                <p className="LabCreating__text" ref={reference}>
                    _creating
                </p>
            </div>
            <div className="LabCreating__row">
                <p className="LabCreating__text">impactful</p>
                <p className="LabCreating__text" style={{ fontSize: "60px" }}>✽</p>
            </div>
            <div className="LabCreating__row">
                <p className="LabCreating__text"></p>
                <p className="LabCreating__text">online and</p>
            </div>
            <div className="LabCreating__row">
                <p className="LabCreating__text">offline experiences.</p>
            </div>
        </div>
    );
};

const Word = ({ value, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <motion.span className="" style={{ opacity }}>
            {value}
        </motion.span>
    );
};

export default LabCreating;
