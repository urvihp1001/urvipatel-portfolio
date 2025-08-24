import React from 'react'
import { motion } from 'framer-motion'

// variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
};

const reverseIndex = (index) => {
    const totalStep = 6;
    return totalStep - index - 1;
}

const Stairs = () => {
    return (
        <>
            {/* Render 6 motion divs, each a step of stairs */}
{[...Array(6)].map((_, i) => (
    <motion.div
        key={i}
        variants={stairAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
            duration: 0.4,
            delay: reverseIndex(i) * 0.1,
            ease: "easeInOut"
        }}
        className='h-full w-full bg-white relative'
    />
))}
        </>
    )
}

export default Stairs
