"use client";
import React, { useEffect, useRef, useState } from "react";
import "./horizontal.scss";
import { useScroll, useTransform } from "framer-motion";
import { data } from "../carousel/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { roboto } from "../fonts/Font";
import { useGetDivDimensions } from "../../customHooks/useGetDivDimensions";
import { useSize, useWindowSize } from "react-use";
import useIsMobile from "../../customHooks/useIsMobile";
import { useHorizontalScroll } from "../../customHooks/useHorizontalScroll";

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-93%"]);
  return (
    <section
      ref={targetRef}
      className={`${roboto.className} relative h-[1000vh] bg-black`}
      id="work"
    >
      <div className="sticky top-0 flex items-center h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-screen">
          {data.map((item) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center w-full snap-center "
              key={item.id}
            >
              <Image
                src={item.pic}
                width="auto"
                height="auto"
                alt="something"
                className="hidden object-cover h-full sm:block"
              />
              <Image
                src={item.picMobile}
                width="auto"
                height="auto"
                alt="something"
                className="object-cover h-full sm:hidden"
              />
              <motion.div
                className="absolute z-30 flex items-center justify-center w-full h-full"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  backdropFilter: "opacity(10px)",
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7))",
                }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                <div className="flex flex-col items-center justify-center h-full text-white md:w-8/12 ">
                  <Image
                    src={item.icon}
                    alt=""
                    width={0}
                    height={0}
                    className={`${item.id == 11 ? "w-3/12" : item.id == 2 ? "w-8/12" : "w-6/12 md:w-6/12"
                      } `}
                  ></Image>
                  <div className="flex flex-col justify-around gap-2.5   xl:w-[70vw] 2xl:text-4xl xl:text-3xl sm:text-lg text-xs  px-12 p-2 sm:p-10 md:p-12 w-full">
                    <div className="w-full flex gap-2.5 ">
                      {" "}
                      {item.text.map((text, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -200 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                          className="flex justify-between w-full m-auto sm:text-2xl sm:w-8/12"
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
                    <div className="flex gap-2.5 ">
                      {" "}
                      {item.text2?.map((text, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 200 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                          className="flex justify-between w-full m-auto sm:text-2xl sm:w-8/12"
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
                    <motion.a  
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5}} href={item.ig} target="_blank" rel="noreferrer" className="text-base text-center text-white underline underline-offset-4 under ">ver más</motion.a>
                      
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
