"use client";
import React, { useEffect } from "react";
import "./consorcio.scss";
import Image from "next/image";
import vina from "../../images/vina.jpg";
import { motion } from "framer-motion";
import { useWindowSize } from "@/app/customHooks/useWindowSize";

const firstSentence = "where we talk about everything";
const secondSentence = "but the important things.";
const firstSentenceArray = firstSentence.split(" ");
const secondSentenceArray = secondSentence.split(" ");

const Consorcio = () => {
  const size = useWindowSize();
  const times = 3;
  useEffect(() => {
    console.log(size.width);
  }, [size.width]);
  return (
    <section className="consorcio">
      <div className="consorcio__container">
        <div className="consorcio__container__text">
          <h2 className="consorcio__container__text__title">
            reunión de consorcio
          </h2>
          <div className="consorcio__container__text__animationTop">
            <motion.div className="consorcio__container__text__animationTop__first">
              <motion.p
                animate={{ x: [0, (size.width * 2.5) / 100] }}
                transition={{
                  repeat: Infinity,
                  delay: 1.3,
                  duration: 2,
                  repeatDelay: 5,
                  repeatType: "reverse",
                }}
              >
                where
              </motion.p>
              <motion.p
                animate={{ x: [0, (size.width * 2) / 100] }}
                transition={{
                  repeat: Infinity,
                  delay: 1.2,
                  duration: 2,
                  repeatDelay: 5,
                  repeatType: "reverse",
                }}
              >
                we
              </motion.p>
              <motion.p
                animate={{ x: [0, (size.width * 1.5) / 100] }}
                transition={{
                  repeat: Infinity,
                  delay: 1.1,
                  duration: 2,
                  repeatDelay: 5,
                  repeatType: "reverse",
                }}
              >
                talk
              </motion.p>
              <motion.p
                animate={{ x: [0, (size.width * 1) / 100] }}
                transition={{
                  repeat: Infinity,
                  delay: 1,
                  duration: 2,
                  repeatDelay: 5,
                  repeatType: "reverse",
                }}
              >
                about
              </motion.p>
              <motion.p>everything</motion.p>
            </motion.div>
            <div className="consorcio__container__text__animationTop__second">
              {secondSentenceArray.map((word, index) => (
                <span key={index}>{word}</span>
              ))}
            </div>
          </div>
          <div className="consorcio__container__text__animationBot">
            <div>we mix everything we love and </div>
            <div>we make experiences in the </div>
            <div>cities we visit.</div>
          </div>
          <div className="consorcio__container__text__last">
            <div className="consorcio__container__text__last__gastro">
              <p>gastro</p>
              <p>+</p>
              <p>culture</p>
            </div>
            <div className="consorcio__container__text__last__music">
              <p>music</p>
              <p>+</p>
              <p>people</p>
            </div>
          </div>
        </div>
        <div className="consorcio__container__img">
          <Image src={vina} alt="vina" width={"auto"} />
        </div>
      </div>
    </section>
  );
};

export default Consorcio;
