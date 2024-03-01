import React from 'react'
import { motion } from 'framer-motion'

export const svgVariants = {
    hidden: {},
    visible: {
        transition: {
            duration: 1,
        },
    },
};

export const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: { duration: 1, repeat: Infinity, repeatType: "reverse" },
    },
};
export const pathVariants2 = {
    hidden: { pathLength: 0 },
    visible: {

        pathLength: 1,
        transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
    },
};

export const BrandExperience = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="15" viewBox="0 0 60 15" fill="none">
            <g clipPath="url(#clip0_107_241)">
                <path d="M59.6505 6.87725L49.1129 0.108297C48.7634 -0.10831 48.3064 -6.26687e-06 48.0914 0.324903C47.8763 0.649813 47.9839 1.13718 48.3064 1.35378L56.6936 6.74187H0V8.23104H56.7204L48.3333 13.6191C47.9839 13.8357 47.8763 14.296 48.1183 14.648C48.2527 14.8646 48.4946 15 48.7366 15C48.871 15 49.0054 14.9729 49.1398 14.8917L59.6774 8.14981C59.8925 8.01443 60.0269 7.77075 60.0269 7.52707C60.0269 7.28339 59.8925 7.03971 59.6774 6.90433L59.6505 6.87725Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_107_241"  >
                    <rect width="60" height="15" fill="white" />
                </clipPath>
            </defs>
        </svg>)
}

