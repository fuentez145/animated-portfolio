'use client'
import { motion } from "framer-motion"


type H1RevealProps = {
    children : React.ReactNode,
    className : string,
    variants : 'LeftVariants',
}

const RevealMap = {
    LeftVariants: {
        hidden: { width : 0 , overflow: 'hidden'},
        visible: {
        width : '100%',
          transition: {
            duration: 1, // Adjust as needed
            ease: 'linear',
          },
        },
        exit: { width: 0 },
      },
}


export const H1Reveal = ({ children, className, variants }: H1RevealProps) => {
    return (
        <motion.h1   variants={RevealMap[variants]} initial="hidden" whileInView="visible" exit="exit" className={className}  >
                {children}
        </motion.h1>
    )
}