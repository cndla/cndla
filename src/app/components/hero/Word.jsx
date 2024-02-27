'use client'
import { useScroll, motion, useTransform, progress } from 'framer-motion';
import React, { useRef } from 'react'


const Word = ({ value }) => {
    const theElemente = useRef(null);
    const { scrollYProgress: scrollYProgress3 } = useScroll({
        target: theElemente,
        offset: ["0.50 end", "start 0.50"],
    })
    const words = value.split(" ");
    return (
        <p ref={theElemente} className='flex flex-wrap w-11/12 m-auto justify-between'>
            <span className='text-cnlda-orange pr-44'>manifst</span>
            {words.map((word, index) => {
                const start = index / words.length;
                const end = start + (1 / words.length);
                return (
                    <TheWord key={index} range={[start, end]} progress={scrollYProgress3} >{word}</TheWord>
                )
            })}
        </p>
    )
}

const TheWord = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1])

    return <span className='p-1 leading-9 relative '>
        <span className='absolute opacity-15 text-3xl'>{children}</span>
        <motion.span style={{ opacity: opacity }} className='text-cnlda-orange text-3xl'>{children}</motion.span>
    </span>

}

export default Word