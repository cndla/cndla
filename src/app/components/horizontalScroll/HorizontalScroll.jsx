"use client";
import React, { useEffect, useRef } from "react";
import "./horizontal.scss";
import { useScroll, useTransform } from "framer-motion";
import { data } from "../carousel/data";
import Image from "next/image";
import { motion } from "framer-motion";

const HorizontalScroll = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-1100%"]);

  return (
    <section ref={targetRef} className="horizontal" id="work">
      <div className="horizontal__container">
        <motion.div
          className="horizontal__container__motion"
          style={{ x, transition: "all 200ms ease" }}
        >
          {data.map((item) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="horizontal__container__motion__molecule w-[100vw]"
              key={item.id}
            >
              <Image
                src={item.pic}
                width="auto"
                height="auto"
                alt="something"
                className="pic"
              />
              <motion.div
                className="horizontal__container__motion__molecule__particles"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  backdropFilter: "opacity(10px)",
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7))",
                }}
                transition={{ duration: 2, delay: 1 }}
              >
                <div className="horizontal__container__motion__molecule__particles__item">
                  <Image src={item.icon} alt="" width={0} height={0}></Image>
                  <div className="horizontal__container__motion__molecule__particles__item__text">
                    <div className="horizontal__container__motion__molecule__particles__item__text__first">
                      {" "}
                      {item.text.map((text, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -200 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                        >
                          <motion.p
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                          >
                            | {text} |
                          </motion.p>
                          <motion.p
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                          >
                            ✽
                          </motion.p>
                        </motion.div>
                      ))}
                    </div>
                    <div className="horizontal__container__motion__molecule__particles__item__text__second">
                      {" "}
                      {item.text2?.map((text, i) => (
                        <motion.div
                          className=""
                          key={i}
                          initial={{ opacity: 0, x: 200 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                        >
                          <motion.p
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                          >
                            ✽
                          </motion.p>
                          <motion.p
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                          >
                            | {text} |
                          </motion.p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>{" "}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
