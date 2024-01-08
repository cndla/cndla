'use client'
import React, { useEffect, useRef } from 'react'
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
                <motion.div className="horizontal__container__motion" style={{ x, transition: "all 200ms ease" }}>

                    {data.map((item) => (
                        <motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1, }} transition={{ duration: .8 }} className="horizontal__container__motion__molecule" key={item.id}>
                            <Image src={item.pic} width={1700} height={1080} alt='something' className='pic' />
                            <div className="horizontal__container__motion__molecule__particles">
                                <div className="horizontal__container__motion__molecule__particles__item">
                                    <Image src={item.icon} alt='' width={0} height={0}></Image>
                                    <div className="horizontal__container__motion__molecule__particles__item__text">
                                        <div className='horizontal__container__motion__molecule__particles__item__text__first'> {item.text.map((text, i) => (
                                            <p key={i}>| {text} |</p>
                                        ))}
                                        </div>
                                        <div className='horizontal__container__motion__molecule__particles__item__text__second'> {item.text2?.map((text, i) => (
                                            <p key={i}>| {text} |</p>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                            </div> </motion.div>

                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default HorizontalScroll