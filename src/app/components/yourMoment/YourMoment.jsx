"use client";
import React, { useEffect } from "react";
import "./yourMoment.scss";
import { motion, useInView } from "framer-motion";
import { useAnimate } from "framer-motion";

const YourMoment = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 }, { duration: 0.5, delay: 0.5 })
    } else {
      animate(scope.current, { opacity: 0 })

    }
  }, [isInView])

  return (
    <section className="yourMoment">
      <div className="yourMoment__container">
        <div className="yourMoment__container__first">
          <motion.div
            initial={{ width: "0px", opacity: 0 }}
            whileInView={{ width: "100px", opacity: 1 }}
            className="spacer"
            transition={{ duration: 1, type: "tween", }}
            style={{ originX: 0 }}
          ></motion.div>
          <p className="yourMoment__container__first__text">
            this is your moment,
          </p>
        </div>
        <p className="yourMoment__container__text">
          go beyond{" "}
          <motion.span
            ref={scope}
            initial={{ opacity: 0 }}
            whileInView={{ x: ["0px", "50px"] }}
            transition={{ duration: 3, type: "spring", repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}


            className="yourMoment__container__text__animation"
          >
            the normal
          </motion.span>
        </p>
      </div>
    </section>
  );
};

export default YourMoment;
