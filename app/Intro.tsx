import { MotionDiv } from "@/components/MotionDiv";
import { H2Slide } from "@/components/animation/SlideAnimation";
import Image from "next/image";

const Imagevariants = {
  hidden: { scale: 0.5 , opacity : 0  },
  visible: {
    opacity  : 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}
  
const titleVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },

}
  

const Intro = () => {
  return (
    <MotionDiv className="p-5 sm:p-10 ">
      <div className="text-white min-h-screen mx-auto ">
        <div className=" grid grid-cols-1 lg:grid-cols-3 rounded-md bg-neutral-900  sm:pt-20 border border-neutral-800   overflow-hidden h-screen sm:h-[88vh]  ">
          <div className="hidden sm:grid grid-rows-3  ">
            <div className="">
              <H2Slide variants="SlideLeftVariants" delay={0.6} className="text-center bg-main-bg mr-20 p-6 text-xl">Design</H2Slide>
            </div>
            <div className=" mr-8">
              <H2Slide variants="SlideLeftVariants" delay={0.3} className="flex justify-end bg-main-bg py-5 pr-4 text-xl">
                Digital Design
              </H2Slide>
            </div>
            <div className=" mr-8 flex flex-col justify-start ">
              <H2Slide variants="SlideLeftVariants" delay={1} className="flex justify-end bg-main-bg py-5 pr-4 mt-20 text-md ">
                Available for Work
              </H2Slide>
            </div>
          </div>
          <div className="col-span-1  flex flex-col sm:justify-center  items-center   sm:space-y-10 ">
            <H2Slide variants="SlideTopVariants" delay={0.1} className="text-5xl md:text-6xl font-bold  bg-main-bg rounded-b-lg md:rounded-lg border border-neutral-900 text-center p-14  mx-5 sm:p-0 sm:m-0 sm:mb-6 sm:bg-none sm:border-none ">Hey, I&apos;m Gilbert</H2Slide >
           <MotionDiv whileHover={{
            scale: 1.03,
            transition: {
              duration: 0.3,
              ease: "easeIn",
            },
           }} variants={Imagevariants} className="p-5" initial="hidden" animate="visible" transition={{
            duration: 0.7,
            ease: "easeInOut",
            delay: 0.2,
           }} viewport={{ once : true }} >
           <Image
              src="/images/profile.jpg"
              width={700}
              height={400}
              className="object-cover h-48 md:h-72 rounded-xl "
              alt="MY Profile Picture"
            />
           </MotionDiv>

           <MotionDiv variants={titleVariants} initial="hidden" animate="visible" transition={{
               duration : 0.5,
               ease : "easeOut",
           }}  className="md:hidden p-10 rounded-lg bg-main-bg border border-neutral-900 text-center">
           <H2Slide className=" text-lg " variants="SlideLeftVariants" delay={0.5} >
            <span className="text-white">I&apos;m a </span>
            <span className="text-white">Front-End Developer</span>
          </H2Slide>
           </MotionDiv>
          
       
           
     
          </div>
          <div className="sm:grid grid-rows-3 ">
            <div className="">
             <H2Slide  variants="SlideRightVariants" delay={0.6} className="hidden sm:block text-center bg-main-bg ml-20 p-6 rounded-l-lg  text-xl">
              Development
             </H2Slide>
            </div>
            <div className=" ml-8">
              <H2Slide  variants="SlideRightVariants" delay={0.3} className="hidden sm:block flex justify-start bg-main-bg py-5 pl-4 text-xl">
                Product Designer
              </H2Slide>
            </div>
            <div className="hidden sm:block ml-8 flex flex-col justify-start ">
              <H2Slide variants="SlideRightVariants" delay={1} className="flex justify-start bg-main-bg py-5 pl-4 mt-20 text-md">
                Lets Create Together
              </H2Slide>
              
            </div>

      
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Intro;
