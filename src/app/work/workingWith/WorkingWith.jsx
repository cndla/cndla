import React from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import "./workingWith.scss";

const WorkingWith = ({ className, logo, background, id, y }) => {

  return (
     <motion.div
       id="work"
       className={`workingWith`}
     >
       <div className="workingWith__container">
         <div className="workingWith__container__background">
           <Image
             src={background}
             alt="background"
             className="workingWith__container__background__img"
             fill
           />
         </div>
         <motion.div className="workingWith__container__logo">
           <Image
             src={logo}
             alt="logo"
             width={466}
             className={`${className} image`}
           />
         </motion.div>
       </div>
     </motion.div>
  );
};


export default WorkingWith;