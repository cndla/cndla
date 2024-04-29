"use client";
import React, { useEffect } from "react";
import "./yourMoment.scss";
import { motion, useInView } from "framer-motion";
import { useAnimate } from "framer-motion";
import useIsMobile from "../../customHooks/useIsMobile";
import { roboto } from "../fonts/Font";

const YourMoment = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 }, { duration: 0.5, delay: 0.5 });
    } else {
      animate(scope.current, { opacity: 0 });
    }
  }, [isInView]);

  if (isMobile)
    return (
      <section className="flex items-center bg-cover h-dvh bg-white-pattern">
        <div className="p-5 text-5xl">
          <p className="flex">
            <span className="bg-black"></span>this is your
          </p>
          <p className="flex justify-between">
            moment, go <span>✽</span>
          </p>
          <p>beyond the normal</p>
        </div>
      </section>
    );

  return (
    <section className={`${roboto.className} yourMoment `}>
      <div className="yourMoment__container">
        <div className="px-5 yourMoment__container__first">
          <motion.div
            initial={{ width: "0px", opacity: 0 }}
            whileInView={{ width: "60px", opacity: 1 }}
            className="spacer"
            transition={{ duration: 1, type: "tween" }}
            style={{ originX: 0 }}
          ></motion.div>
          <p className="text-xl leading-3 yourMoment__container__first__text sm:text-8xl ">
            this is your moment,
          </p>
        </div>
        <p className="text-xl yourMoment__container__text sm:text-8xl">
          go beyond{" "}
          <motion.span
            ref={scope}
            initial={{ opacity: 0 }}
            whileInView={{ x: ["-10px", "40px"] }}
            transition={{
              duration: 3,
              type: "spring",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
            }}
            className="text-xl yourMoment__container__text__animation sm:text-8xl"
          >
            the normal
          </motion.span>
        </p>
      </div>
    </section>
  );
};

export default YourMoment;
