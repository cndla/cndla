import React, { useEffect, useRef } from "react";
import { Logo } from "./Lab";
import "./labCreating.scss";
import { motion, useAnimate, useInView, usePresence, useScroll, useTransform } from "framer-motion";

const LabCreating = () => {
    const [isPresent, safeToRemove] = usePresence()
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)

    useEffect(() => {


        if (isPresent) {
            const enterAnimation = async () => {
                await animate("p", { y: 100 })
                await animate(scope.current, { opacity: 1 })
                await animate("p", { opacity: 1, y: 0 })
            }
            enterAnimation()

        } else {
            const exitAnimation = async () => {
                await animate("p", { y: 100 })
                await animate("p", { opacity: 0, y: -100 })
                await animate(scope.current, { opacity: 0 })
                safeToRemove()
            }

            exitAnimation()
        }
    }, [isPresent])

    return (
        <div className="LabCreating" ref={scope}>
            <div className="LabCreating__row" >
                <Logo />
                <p className="LabCreating__row__text" >
                    _creating
                </p>
            </div>
            <div className="LabCreating__row"  >
                <motion.p initial={{ y: 100 }} className="LabCreating__row__text">impactful</motion.p>
                <motion.p initial={{ y: 100 }} className="LabCreating__row__text" style={{ fontSize: "60px" }}>✽</motion.p>
            </div>
            <div className="LabCreating__row" >
                <motion.p initial={{ y: 100 }} className="LabCreating__row__text"></motion.p>
                <motion.p initial={{ y: 100 }} className="LabCreating__row__text">online and</motion.p>
            </div>
            <div className="LabCreating__row" >
                <motion.p initial={{ y: 100 }} className="LabCreating__row__text">offline experiences.</motion.p>
            </div>
        </div>
    );
};



export default LabCreating;
