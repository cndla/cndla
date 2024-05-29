"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { delay, motion } from "framer-motion";

const Presentation = () => {
  const variantsTop = {
    hidden: { opacity: 0, y: -150 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const variantsBottom = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className="bg-presentationMobile  sm:bg-presentation bg-cover flex justify-center items-center h-[900px] sm:h-screen max-w-screen " id="home">
      <div className="flex items-baseline scale-50 presentation__group lg:scale-100">
        <motion.svg
          className="presentation__group__letter c "
          width="140"
          height="132"
          viewBox="0 0 140 132"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate='visible'
          variants={variantsTop}

        >
          <path
            d="M132.7 17.2L116.5 43.3C116.2 18.2 102.7 4.89999 82.8999 4.89999C49.2999 4.89999 36.8 40.7 36.5 73.3C36.2 103.4 52.3002 126.5 83.2002 126.6C104.1 126.6 124.3 116.9 137.4 94C137.7 94.3 139.4 95.4 139.4 95.4C124 121.2 105.1 131.2 78 131.2C33.1 131.2 0.799805 104.1 0.799805 66C0.799805 27.9 32.4 0.799988 78.5 0.799988C99.2 1.19999 120.7 6.70001 132.7 17.2Z"
            fill="black"
          />
        </motion.svg>
        <motion.svg
          className="presentation__group__letter n "
          width="171"
          height="128"
          viewBox="0 0 171 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
          variants={variantsBottom}
        >
          <path
            d="M2.7998 124.7C15.0998 124.7 18.9 116.2 20 110.4V5.89999H3.5L0.5 2.70001H69.6001L72.6001 5.89999C55.1001 5.89999 55.1001 24 55.1001 24V42.5C67.9001 19.5 81.6001 0.200012 107.6 0.200012C133.4 0.200012 148.9 19.2 150.5 40.8V124.8H167.3L170.3 128H101.2L98.2002 124.8C111.2 124.8 114.7 115.2 115.4 109.3V44.2C115.4 32.5 113.4 10.3 96.3999 10.3C81.8999 10.3 67.2998 26.4 55.2998 50.9V124.6H72.1001L75.1001 127.8H6L2.7998 124.7Z"
            fill="black"
          />
        </motion.svg>
        <motion.svg
          className="presentation__group__letter d "
          width="152"
          height="179"
          viewBox="0 0 152 179"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
          variants={variantsTop}
        >
          <path
            d="M79.2004 172.7C91.5004 172.7 95.3001 164.2 96.4001 158.4V113.5C89.9001 142.3 71.3002 178.4 37.0002 178.4C5.80022 178.4 -5.59958 149.1 2.70042 114.8L96.4001 54.1V3.5H79.9001L76.9001 0.299988H146L149 3.5C131.5 3.5 131.5 21.6 131.5 21.6V172.7H148.3L151.3 175.9H82.2004L79.2004 172.7ZM96.4001 59.2L42.8 96.3C34.5 136.9 41.8004 161.8 58.2004 161.8C81.2004 161.5 96.6003 112.1 96.6003 88.1V59.3H96.4001V59.2Z"
            fill="black"
          />
        </motion.svg>
        <motion.svg
          className="presentation__group__letter l "
          width="73"
          height="176"
          viewBox="0 0 73 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
          variants={variantsBottom}
        >
          <path
            d="M0.299805 172.7C12.5998 172.7 16.4 164.2 17.5 158.4V0.399994H67.2998L70.1001 3.60001C52.6001 3.60001 52.6001 21.7 52.6001 21.7V172.5H69.3999L72.3999 175.7H3.2998L0.299805 172.7Z"
            fill="black"
          />
        </motion.svg>

        <motion.svg
          className="presentation__group__letter a "
          width="148"
          height="131"
          viewBox="0 0 148 131"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
          variants={variantsTop}
        >
          <path
            d="M75.3997 124.7C89.6997 124.7 92.1999 113.4 92.5999 108.2V65.6C85.5999 94.4 66.7997 130.5 37.3997 130.5C18.0997 130.5 0.299975 115 0.699975 91.4L92.3997 37.1V32.3C92.3997 10.4 76.9999 4.49999 64.5999 4.79999C46.4999 5.19999 22.7 24.8 7.19998 52.5L4.69998 52.1L16.9998 9.5L64.7 0.5C85.6 0.5 126.9 9.49999 127.6 31.8V125H144.4L147.4 128.2H78.2996L75.3997 124.7ZM41.3997 73.8C36.2997 88.6 41 113.6 55.2 113.6C73.7 113.3 90.6 70.7 92.7 45.2V41L41.3997 73.8Z"
            fill="black"
          />
        </motion.svg>
      </div>
    </section>
  );
};

export default Presentation;
