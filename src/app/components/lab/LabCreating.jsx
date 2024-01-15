import React, { useRef } from 'react'
import { Logo } from './Lab'
import './labCreating.scss'
import { motion, useScroll, useTransform } from 'framer-motion'


const LabCreating = () => {
    const reference = useRef(null)
    const text = "creating impactful online and offline experiences."
    const { scrollYProgress } = useScroll({

    })

    const splitText = text.split(" ")
    return (
        <div className='LabCreating'><Logo /><p className='LabCreating__text' ref={reference}>{splitText.map((text, i) => {
            const start = i / text.length
            const end = start + (1 / text.length)
            console.log(start, end)

            return <Word key={i} range={[start, end]} progress={scrollYProgress}>{text}</Word>
        })}</p> </div>
    )
}

const Word = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1])
    return (<motion.span className='' style={{ opacity }}>{children}</motion.span>)
}


export default LabCreating