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

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["1%", isMobile ? "-1150%" : "-1100%"]
  );
  const { width, height } = useWindowSize();
  useEffect(() => {
    setDimensions({
      width: width,
      height: height,
    });
  }, [width, height]);
  if (!width) return;

  return (
    <section
      ref={targetRef}
      className={`${roboto.className} horizontal`}
      id="work"
    >
      <div className="horizontal__container">
        <motion.div
          className="horizontal__container__motion snap-x"
          style={{ x, transition: "all 200ms ease" }}
        >
          {data.map((item) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full px-3 horizontal__container__motion__molecule snap-center"
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
                className="horizontal__container__motion__molecule__particles"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  backdropFilter: "opacity(10px)",
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7))",
                }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                <div className="horizontal__container__motion__molecule__particles__item md:w-8/12 ">
                  <Image
                    src={item.icon}
                    alt=""
                    width={0}
                    height={0}
                    className={`${item.id == 11 ? "w-3/12" : "w-6/12 md:w-6/12"
                      } `}
                  ></Image>
                  <div className="horizontal__container__motion__molecule__particles__item__text  w-full  xl:w-[70vw] 2xl:text-4xl xl:text-3xl sm:text-lg text-xs  px-12 p-2 sm:p-10 md:p-12">
                    <div className="w-full horizontal__container__motion__molecule__particles__item__text__first">
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
