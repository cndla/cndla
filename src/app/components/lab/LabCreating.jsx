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
    }, 3000);
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
      className={`${roboto.className} bg-white-pattern h-svh bg-cover flex justify-center items-center`}
    >
      {" "}
      <div
        className="flex flex-col md:w-6/12  gap-80  w-10/12 sm:w-7/12 justify-center self-center
      justify-self-center
     "
      >
        <div className=" text-xl sm:text-3xl flex flex-col text-nowrap lg:text-5xl md:text-4xl xl:text-7xl">
          <div className="flex  justify-between items-center ">
            <Logo text={"cndla / lab"} />
            <div
              className="flex  leading-[1.1] overflow-y-hidden "
              ref={wordRef}
            >
              <p className="myWord ">{currentWord}</p>
            </div>
          </div>
          <div className="flex items-end justify-around">
            <motion.div className="flex w-full  overflow-y-hidden ">
              <p className="myWord  leading-[1.1]">{currentWord2}</p>
            </motion.div>
            <p className="transition-all sm:text-4xl self-center text-xl">✽</p>
          </div>
          <div className="flex items-end justify-end gap-7 overflow-y-hidden">
            <div className="text-right flex ">
              <p className="myWord  leading-[1.1]">{currentWord3}</p>
            </div>
          </div>
          <div className="flex gap-9  w-full overflow-y-hidden ">
            <p className=" myWord leading-[1.1] overflow-x-visible">
              {currentWord4}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabCreating;
