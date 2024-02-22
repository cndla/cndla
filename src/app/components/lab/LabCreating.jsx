import React, { useEffect, useRef, useState } from "react";
import { Logo } from "./Lab";
import "./labCreating.scss";
import {
  motion,
  useAnimate,
  useInView,
  usePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const LabCreating = () => {
  const words = ["Primera", "Segunda", "Tercera"];
  const [currentWord, setCurrentWord] = useState(words[0]);

  const spliting = (word, effect) => {
    return word.split("").map((letter, i) => (
      <motion.p
        {...effect}
        exit={{ opacity: 0 }}
        transition={{ delay: i * 0.05, mass: 0.5 }}
        key={i}
      >
        {letter}
      </motion.p>
    ));
  };

  const effect = {
    initial: { y: 80 },
    whileInView: { y: 0 },
  };
  const effect2 = {
    initial: { justifyContent: "space-around" },
    whileInView: { width: "auto" },
  };

  const effect3 = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextWordIndex = (words.indexOf(currentWord) + 1) % words.length;
      setCurrentWord(words[nextWordIndex]);
    }, 3000);

    // Trigger animation on word change
    const animateLetters = () => {
      // Animate them using library-specific methods
    };

    animateLetters(); // Call once initially

    return () => {
      clearInterval(interval);
    };
  }, [currentWord, words]);
  return (
    <div
      className="flex flex-col w-[44%] gap-80 py-96
     "
    >
      <div className=" text-8xl flex flex-col">
        <div className="flex  justify-between items-center ">
          <Logo />
          <div className="flex overflow-hidden leading-tight">
            {spliting(currentWord, effect)}
          </div>
        </div>
        <div className="flex items-end justify-between">
          <motion.div
            className="flex overflow-hidden w-full"
            initial={{ justifyContent: "space-around" }}
            whileInView={{ width: "auto" }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {spliting("impactful", effect2)}
          </motion.div>
          <p className="">✽</p>
        </div>
        <div className="flex items-end justify-end gap-7">
          <div className="text-right flex overflow-hidden">
            {spliting("online", effect)}{" "}
          </div>
          <div className="text-right flex overflow-hidden">
            {spliting("and", effect)}
          </div>
        </div>
        <div className="flex gap-9">
          <div className="flex">{spliting("offline ", effect3)}</div>
          <div className="flex">{spliting("experiences. ", effect3)}</div>
        </div>
      </div>
    </div>
  );
};

export default LabCreating;
