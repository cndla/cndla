import React, { useRef } from "react";
import { Logo } from "./Lab";
import "./labCreating.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const LabCreating = () => {
  const reference = useRef(null);
  const text = "_creating impactful * online and offline experiences.";
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start 0.9", "end start"],
  });

  const splitText = text.split(" ");
  return (
    <div className="LabCreating">
      <Logo />
      <p className="LabCreating__text" ref={reference}>
        {splitText.map((text, i) => {
          const start = i / text.length;
          const end = start + 1 / text.length;
          return (
            <Word
              key={i}
              range={[start, end]}
              progress={scrollYProgress}
              value={text}
            ></Word>
          );
        })}
      </p>{" "}
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
