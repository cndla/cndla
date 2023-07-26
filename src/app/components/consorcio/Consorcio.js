"use client";
import React, { useEffect, useRef, useState } from "react";
import "./consorcio.scss";
import Image from "next/image";
import vina from "../../images/vina.jpg";
import { motion } from "framer-motion";

const firstSentence = "we mix everything we love and";
const secondSentence = "";
const thirdSentence = "cities we visit.";
const firstSentenceArray = firstSentence.split(" ");
const secondSentenceArray = secondSentence.split(" ");
const thirdSentenceArray = thirdSentence.split(" ");

const Consorcio = () => {
  const divSize = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(divSize.current.offsetWidth);
  }, []);

  return (
    <section className="consorcio">
      <div className="consorcio__container">
        <div className="consorcio__container__text">
          <h2 className="consorcio__container__text__title">
            reunión de consorcio
          </h2>
          <div
            ref={divSize}
            className="consorcio__container__text__animationTop"
          >
            <motion.div className="consorcio__container__text__animationTop__first">
              <motion.p
                whileInView={{ x: ["0%"] }}
                transition={{
                  repeat: Infinity,
                  delay: 1.3,
                  duration: 2.3,
                  repeatDelay: 4,
                  repeatType: "reverse",
                  ease: "anticipate",
                }}
              >
                where
              </motion.p>
              <motion.p
                whileInView={{ x: ["0%", width >= 500 ? "540%" : "90%"] }}
                transition={{
                  repeat: Infinity,
                  delay: 0.5,
                  duration: 2,
                  repeatDelay: 4.3,
                  repeatType: "reverse",
                  ease: "anticipate",
                }}
              >
                we
              </motion.p>
              <motion.p
                whileInView={{ x: ["0%", width >= 500 ? "290%" : "40%"] }}
                transition={{
                  repeat: Infinity,
                  delay: 0.3,
                  duration: 2.3,
                  repeatDelay: 4,
                  repeatType: "reverse",
                  ease: "anticipate",
                }}
              >
                talk
              </motion.p>
              <motion.p
                whileInView={{ x: ["0%", width >= 500 ? "90%" : "10%"] }}
                transition={{
                  repeat: Infinity,
                  delay: 0.1,
                  duration: 2.8,
                  repeatDelay: 3.5,
                  repeatType: "reverse",
                  ease: "anticipate",
                }}
              >
                about
              </motion.p>
              <motion.p>everything</motion.p>
            </motion.div>
            <div className="consorcio__container__text__animationTop__second">
              <motion.p>but </motion.p>
              <motion.p
                whileInView={{ x: width >= 500 ? "-290%" : "-90%" }}
                transition={{
                  repeat: Infinity,
                  delay: 0.8,
                  duration: 2.8,
                  repeatDelay: 3.5,
                  repeatType: "reverse",
                  ease: "anticipate",
                }}
              >
                the{" "}
              </motion.p>
              <motion.p
                whileInView={{ x: width >= 500 ? "-185%" : "-60%" }}
                transition={{
                  repeat: Infinity,
                  delay: 0.8,
                  duration: 2.8,
                  repeatDelay: 3.5,
                  repeatType: "reverse",
                  ease: "anticipate",
                }}
              >
                important{" "}
              </motion.p>
              <motion.p
                whileInView={{ x: width >= 500 ? "-400%" : "-20%" }}
                transition={{
                  repeat: Infinity,
                  delay: 0.8,
                  duration: 2.8,
                  repeatDelay: 3.5,
                  repeatType: "reverse",
                  ease: "anticipate",
                }}
              >
                things.{" "}
              </motion.p>
            </div>
          </div>
          <div className="consorcio__container__text__animationBot">
            <motion.div className="consorcio__container__text__animationBot__text">
              {firstSentenceArray.map((word, index) => (
                <motion.p
                  whileInView={{ x: [0, width >= 500 ? -index * 45 : -index * 10] }}
                  transition={{
                    repeat: Infinity,
                    delay: 0.8,
                    duration: 2.8,
                    repeatDelay: 3.5,
                    repeatType: "reverse",
                    ease: "anticipate",
                  }}
                  key={index}
                >
                  {word}
                </motion.p>
              ))}
            </motion.div>
            <div className="consorcio__container__text__animationBot__text">
              <motion.p>we </motion.p>
              <motion.p
                whileInView={{ x: ["0%", width >= 500 ? "-100%" : "-30%"] }}
                transition={{
                  repeat: Infinity,
                  delay: 0.8,
                  duration: 2.8,
                  repeatDelay: 3.5,
                  repeatType: "reverse",
                  ease: "anticipate",
                }}
              >
                make{" "}
              </motion.p>
              <motion.p
                whileInView={{
                  x: ["0%", width >= 500 ? "100%" : "30%"],
                }}
                transition={{
                  repeat: Infinity,
                  delay: 0.8,
                  duration: 2.8,
                  repeatDelay: 3.5,
                  repeatType: "reverse",
                  ease: "anticipate",
                }}
              >
                experiences{" "}
              </motion.p>
              <motion.p
                whileInView={{
                  x: ["0%", width >= 500 ? "330%" : "110%"],
                }}
                transition={{
                  repeat: Infinity,
                  delay: 0.8,
                  duration: 2.8,
                  repeatDelay: 3.5,
                  repeatType: "reverse",
                  ease: "anticipate",
                }}
              >
                in{" "}
              </motion.p>
              <motion.p>the</motion.p>
            </div>
            <div className="consorcio__container__text__animationBot__text">
              {thirdSentenceArray.map((word, index) =>
                index === 1 ? (
                  <motion.p
                    whileInView={{
                      x: [
                        width >= 500 ? "-650%" : "-350%",
                        width >= 500 ? "650%" : "350%",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      delay: 0.8,
                      duration: 2.8,
                      repeatDelay: 3.5,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                    key={index}
                  >
                    {word}
                  </motion.p>
                ) : (
                  <p key={index}>{word}</p>
                )
              )}
            </div>
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
