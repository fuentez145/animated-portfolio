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
  

  

const Intro = () => {
  return (
    <MotionDiv className="w-full min-h-screen">
      <div className="text-white h-screen w-11/12 mx-auto py-10 ">
        <div className=" grid grid-cols-1 lg:grid-cols-3 rounded-md bg-neutral-900 h-full pt-20 border border-neutral-800 ">
          <div className="hidden sm:grid grid-rows-3 ">
            <div className="">
              <H2Slide variants="SlideLeftVariants" delay={0.6} className="text-center bg-main-bg mr-20 p-6 text-xl">Design</H2Slide>
            </div>
            <div className=" mr-8">
              <H2Slide variants="SlideLeftVariants" delay={0.3} className="flex justify-end bg-main-bg py-5 pr-4 text-xl">
                Digital Design
              </H2Slide>
            </div>
            <div className=" mr-8 flex flex-col justify-start ">
              <H2Slide variants="SlideLeftVariants" delay={1} className="flex justify-end bg-main-bg py-5 pr-4 mt-20 text-md">
                Available for Work
              </H2Slide>
            </div>
          </div>
          <div className="col-span-1  flex flex-col justify-center  items-center  space-y-10">
            <H2Slide variants="SlideTopVariants" delay={0.1} className="text-6xl font-extrabold pb-5">Hey, I&apos;m Gilbert</H2Slide >
           <MotionDiv variants={Imagevariants} initial="hidden" animate="visible" transition={{
            duration: 0.7,
            ease: "easeInOut",
            delay: 0.2,
           }} viewport={{ once : true }} >
           <Image
              src="/images/profile.jpg"
              width={700}
              height={400}
              className="object-cover h-72 rounded-lg"
              alt="MY Profile Picture"
            />
           </MotionDiv>
           <H2Slide variants="SlideBottomVariants" delay={0.6} className="hidden sm:block bg-main-bg pb-20 p-2 m-1 px-10  rounded-t-lg">
           <span  className="sm:text-md md:text-lg lg:text-4xl">I Design the Future!</span>
           </H2Slide>
          </div>
          <div className="sm:grid grid-rows-3 ">
            <div className="">
             <H2Slide  variants="SlideRightVariants" delay={0.6} className="text-center bg-main-bg ml-20 p-6 rounded-l-lg  text-xl">
              Development
             </H2Slide>
            </div>
            <div className=" ml-8">
              <H2Slide  variants="SlideRightVariants" delay={0.3} className="flex justify-start bg-main-bg py-5 pl-4 text-xl">
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
