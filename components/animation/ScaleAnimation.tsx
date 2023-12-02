'use client'


import { easeInOut, motion } from "framer-motion"

import React from 'react'


type ScaleAnimationProps = {
  children: React.ReactNode;
  className?: string;
  variants : any,
}

 const ScaleAnimation = ({ children , className, variants} : ScaleAnimationProps) => {
  return (
    <motion.div variants={variants} className={className} transition={{
      duration: 0.7,
      ease : easeInOut,
      delay: 0.2,
    }} >

      {children}
        
    </motion.div>

  )
}

export default ScaleAnimation
