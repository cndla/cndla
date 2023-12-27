'use client'
import React from 'react'
import './underOneRoof.scss'
import { motion } from 'framer-motion'



export const UnderOneRoof = () => {
    const data = [
        {
            id: 1,
            icon: "",
            text: "engagement strategy"
        }, {
            id: 2,
            icon: "",
            text: "brand identity"
        }, {
            id: 3,
            icon: "",
            text: "performance / paid media"
        }, {
            id: 4,
            icon: "",
            text: "audiovisual content producers"
        }, {
            id: 5,
            icon: "",
            text: "brand experiences & influencers"
        },
    ]
    const Hr = () => (<motion.div
        initial={{ width: "30px" }} // Ancho inicial en 0
        transition={{ duration: 2 }} // Duración de la animación en segundos
        style={{
            height: '1px', // Altura del elemento
            backgroundColor: 'white' // Color de fondo, puedes cambiarlo
        }}
        whileInView={{ width: '100%' }}
    ></motion.div>)
    return (
        <section className='underOneRoof'>
            <div className="underOneRoof__content">
                <div className="underOneRoof__content__left">
                    <p>all under one roof <br />-</p>
                    <p>we put our passion and know-how <br />
                        at the service of your brand.</p>
                </div>
                <div className="underOneRoof__content__right">
                    <Hr />
                    {data.map((item) => (
                        <div key={item.id}>
                            <p >{item.icon}{item.text}</p>

                            <Hr />

                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}
