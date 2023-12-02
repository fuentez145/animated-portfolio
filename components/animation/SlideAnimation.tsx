"use client";

import { easeIn, easeInOut, easeOut, motion } from "framer-motion";



type SlideLeftProps = {
    children: React.ReactNode;
    className?: string;
    variants : any,
    viewport : boolean,
  };

export const SlideAnimation = ({ children ,className  , variants , viewport }: SlideLeftProps) => {
  return (
    <motion.div className={className}  variants={variants} initial="hidden" whileInView="visible"
        transition={{
            duration: 0.7,
            ease : easeOut,
            delay: 0.2,
        }}
    viewport={{ once: viewport }}>
    {children}
  </motion.div>
  )
 
};

const variantsMap = {
  SlideLeftVariants: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  },
  SlideRightVariants: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
   
  },
  SlideTopVariants : {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  },
  SlideBottomVariants : {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  }
};

type H2Props  = {
  children: React.ReactNode;
  className?: string;
  variants: 'SlideLeftVariants' | 'SlideRightVariants' | 'SlideTopVariants' | 'SlideBottomVariants';
  delay : number,
  
};

export const H2Slide = ({ children, className , variants , delay, }: H2Props) => {
  return (
    <motion.h2 className={className}  variants={variantsMap[variants]} initial="hidden" animate="visible"
        transition={{
            duration: 0.7,
            ease : easeOut,
            delay: delay,
        }}
    viewport={{ amount : 0}}>
    {children}
  </motion.h2>
  )
}