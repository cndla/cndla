"use client";
import React, { useEffect } from "react";
import "./yourMoment.scss";
import { motion, useInView } from "framer-motion";
import { useAnimate } from "framer-motion";
import useIsMobile from "../../customHooks/useIsMobile";
import { roboto } from "../fonts/Font";

const YourMoment = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 }, { duration: 0.5, delay: 0.5 })
    } else {
      animate(scope.current, { opacity: 0 })

    }
  }, [isInView])

  if (isMobile) return (
    <section className="h-dvh bg-white-pattern bg-cover flex items-center">
      <div className="text-5xl p-5">
        <p>______this is your</p>
        <p className="flex justify-between">moment, go <span>✽</span></p>
        <p>beyond the normal</p>
      </div>

    </section>
  )



  return (
    <section className={`${roboto.className} yourMoment `}>
      <div className="yourMoment__container">
        <div className="yourMoment__container__first px-5">
          <motion.div
            initial={{ width: "0px", opacity: 0 }}
            whileInView={{ width: "60px", opacity: 1 }}
            className="spacer"
            transition={{ duration: 1, type: "tween", }}
            style={{ originX: 0 }}
          ></motion.div>
          <p className="yourMoment__container__first__text leading-3  text-xl sm:text-8xl ">
            this is your moment,
          </p>
        </div>
        <p className="yourMoment__container__text text-xl sm:text-8xl">
          go beyond{" "}
          <motion.span
            ref={scope}
            initial={{ opacity: 0 }}
            whileInView={{ x: ["-10px", "40px"] }}
            transition={{ duration: 3, type: "spring", repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}


            className="yourMoment__container__text__animation text-xl sm:text-8xl"
          >
            the normal
          </motion.span>
        </p>
      </div>
    </section>
  );
};

export default YourMoment;
