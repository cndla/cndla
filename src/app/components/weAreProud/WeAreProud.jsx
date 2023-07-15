'use client'
import React from 'react'
import './weAreProud.scss'
import {motion} from 'framer-motion'

const WeAreProud = () => {
    const frase = "we're proud To work with"
  return (
    <motion.section whileInView={{opacity:1}}  className="weAreProud">
        <div className="weAreProud__container">
            <h2>{frase}</h2>
            
        </div>
    </motion.section>
  )
}

export default WeAreProud