'use client'
import React, { useRef } from 'react'
import './horizontal.scss'
import { useScroll, useTransform } from 'framer-motion'
import { data } from '../carousel/data'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HorizontalScroll = () => {
    const targetRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
    })
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-1010%"])
    return (
        <section ref={targetRef} className='horizontal'>
            <div className="horizontal__container">
                <motion.div className="horizontal__container__motion" style={{ x }}>

                    {data.map((item) => (
                        <div className="" key={item.id}><Image src={item.pic} width={1700} height={1080} alt='something' /> </div>

                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default HorizontalScroll