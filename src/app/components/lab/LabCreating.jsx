import React, { useEffect, useRef, useState } from "react";
import { Logo } from "./Lab";
import {
  animate,
  motion,
  useAnimate,
  useInView,
  usePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { roboto } from "../fonts/Font";

const LabCreating = () => {
  const words = ["_creating", "an innovation", "activations,"];
  const words2 = ["impactful", "lab that builds ideas", "events and "];
  const words3 = ["online and", "and projects", "strategies  on the"];
  const words4 = [
    "offline experiences.",
    "that reshape culture.",
    "___point-of-sale.",
  ];

  const [currentWord, setCurrentWord] = useState(words[0]);
  const [currentWord2, setCurrentWord2] = useState(words2[0]);
  const [currentWord3, setCurrentWord3] = useState(words3[0]);
  const [currentWord4, setCurrentWord4] = useState(words4[0]);

  const wordRef = useRef(null); // Ref to hold the word container

  const enterAnimation = async () => {
    await animate(
      ".myWord",
      { y: [80, 0], opacity: [0, 1] },
      { duration: 0.275, delay: 0.5 }
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextWordIndex = (words.indexOf(currentWord) + 1) % words.length;
      const nextWordIndex2 = (words2.indexOf(currentWord2) + 1) % words2.length;
      const nextWordIndex3 = (words3.indexOf(currentWord3) + 1) % words3.length;
      const nextWordIndex4 = (words4.indexOf(currentWord4) + 1) % words4.length;
      setCurrentWord(words[nextWordIndex]);
      setCurrentWord2(words2[nextWordIndex2]);
      setCurrentWord3(words3[nextWordIndex3]);
      setCurrentWord4(words4[nextWordIndex4]);
    }, 5000);
    enterAnimation();
    return () => {
      clearInterval(interval);
    };
  }, [currentWord, words]);

  const spliting = (word, effect, className) => {
    return word.split("").map((letter, i) => (
      <motion.p
        {...effect}
        transition={{
          delay: i * 0.05,
          mass: 0.5,
          repeat: Infinity,
          repeatDelay: 4,
        }}
        key={i}
        className={className}
      >
        {letter}
      </motion.p>
    ));
  };
  return (
    <section
      className={`${roboto.className} bg-white-pattern h-[800px] sm:h-screen bg-cover flex justify-center items-center`} id="experiences"
    >
      {" "}
      <div
        className="flex flex-col self-center justify-center w-8/12 md:w-6/12 gap-80 sm:w-7/12 justify-self-center xl:w-6/12 2xl:w-5/12"
      >
        <div className="flex flex-col text-[6vw] sm:text-3xl text-nowrap lg:text-5xl md:text-4xl xl:text-6xl">
          <div className="flex items-center justify-between ">
            <div className="px-2 text-sm border-2 border-black rounded-full sm:text-base md:text-lg lg:text-3xl xl:text-3xl xl:px-2 ">
              cndla / lab
            </div>
            <div
              className="flex  leading-[1.1] overflow-y-hidden "
              ref={wordRef}
            >
              <p className="myWord min-w-fit">{currentWord}</p>
            </div>
          </div>
          <div className="flex items-end justify-around">
            <motion.div className="flex w-full overflow-y-hidden ">
              <p className="myWord  leading-[1.1] min-w-fit">{currentWord2}</p>
            </motion.div>
            <p className="self-center text-xl transition-all sm:text-4xl">✽</p>
          </div>
          <div className="flex items-end justify-end overflow-y-hidden gap-7">
            <div className="flex text-right ">
              <p className="myWord  leading-[1.1] min-w-fit">{currentWord3}</p>
            </div>
          </div>
          <div className="flex w-full overflow-y-hidden gap-9 ">
            <p className=" myWord leading-[1.1] overflow-x-visible min-w-fit">
              {currentWord4}
            </p>
          </div>
            <motion.div className="w-full h-px mt-10 bg-black" animate={{ width: 0 }} transition={{ duration: 5, repeat: Infinity }} ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default LabCreating;
