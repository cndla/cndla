'use client'
import React from 'react'
import './underOneRoof.scss'
import { motion } from 'framer-motion'
import SvgEngagement from '@/app/svgs/SvgEngagement'
import Performance from '@/app/svgs/Performance'
import BranIdentity from '@/app/svgs/BranIdentity'
import Audiovisual from '@/app/svgs/Audiovisual'
import BrandExperience from '@/app/svgs/BrandExperience'



export const UnderOneRoof = () => {
    const data = [
        {
            id: 1,
            icon: <SvgEngagement />,
            text: "engagement strategy"
        }, {
            id: 2,
            icon: <BranIdentity />,
            text: "brand identity"
        }, {
            id: 3,
            icon: <Performance />,
            text: "performance / paid media"
        }, {
            id: 4,
            icon: <Audiovisual />,
            text: "audiovisual content producers"
        }, {
            id: 5,
            icon: <BrandExperience />,
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
                    <p className='robotoMedium'>all under one roof <br />-</p>
                    <p>we put our passion and know-how <br />
                        at the service of your brand.</p>
                </div>
                <div className="underOneRoof__content__right">
                    <Hr />
                    {data.map((item) => (
                        <div key={item.id} className='underOneRoof__content__right__molecules'>
                            <div className='underOneRoof__content__right__molecules__particles' >{item.icon}{item.text}</div>
                            <Hr />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}
