'use client'
import React, { useEffect, useRef } from 'react'
import './weBelive.scss'
import { motion, useScroll, useTransform } from 'framer-motion'



const WeBelive = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "center center"],
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const Hr = () => (<motion.div
        initial={{ width: 0 }}
        transition={{ duration: 1 }}
        style={{
            height: '6px',
            backgroundColor: 'white',
        }}
        whileInView={{ width: '125px' }}
    ></motion.div>)

    return (
        <section className='weBelive' ref={container}><div className="weBelive__content">
            <motion.p style={{ opacity: x }}>we believe in strong</motion.p>
            <motion.div style={{ opacity: x }} className='weBelive__content__withLine'><Hr />partnerships with</motion.div>
            <motion.p style={{ opacity: x }}>engaging brands.</motion.p>
        </div></section>
    )
}

export default WeBelive