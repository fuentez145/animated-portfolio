import { AnimatePres, MotionDiv } from "../MotionDiv"
import { MdOutlineHome } from "react-icons/md";
import { LuMonitor } from "react-icons/lu";
import { RiUser3Line } from "react-icons/ri";

import Link from "next/link"
import { MotionLi, MotionUl } from "@/components/MotionUL";
import { easeIn, easeOut } from "@/components/animation/ease";
import { AnimatePresence } from "framer-motion";

const SlideTopVariants = {
  hidden : { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
}

const HoverVairants = {
  hover: {
    scale: 1.1,
    backgroundColor: "#fff",
    color : "#000",
    margin: '0 0.5rem',
    transition: {
      duration: 0.3,
      ease: easeIn,
    },
  },
}

const NavBar = () => {
  return (
    <MotionDiv className="fixed inset-x-0 bottom-0  text-white flex justify-center">
      <AnimatePres>
      <MotionUl className="flex gap-5  p-2 px-7  mb-2 gap-5 bg-main-bg/80 rounded-lg " variants={SlideTopVariants} 
        initial="hidden" animate="visible" exit="exit"
        transition={{
          duration: 1.2,
          delay: 0.4,
          ease: easeOut,
        }}
      >
        <MotionLi variants={HoverVairants} whileHover="hover"  className="text-2xl p-2 rounded-full font-bold bg-main-bg"><Link href="#"><MdOutlineHome /></Link></MotionLi>
        <MotionLi variants={HoverVairants} whileHover="hover"  className="text-2xl  p-2 rounded-full font-bold bg-main-bg"><Link href="#"><LuMonitor /></Link></MotionLi>
        <MotionLi variants={HoverVairants} whileHover="hover" className="text-2xl  p-2 rounded-full font-bold bg-main-bg"><Link href="#"><RiUser3Line /></Link></MotionLi>
      </MotionUl>
      </AnimatePres>
  </MotionDiv>
  )
}

export default NavBar
