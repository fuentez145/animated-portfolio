import { H1Reveal } from "@/components/animation/RevealAnimation";
import { SlideAnimation } from "@/components/animation/SlideAnimation";
import Image from "next/image";

const variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const WorkSecond = () => {
  return (
    <>
     <H1Reveal
          variants="LeftVariants"
          className="font-bold  text-4xl md:text-7xl mt-2 whitespace-nowrap text-white"
        >
          Selected Work
        </H1Reveal>

      <div className="w-full h-[1px] bg-white my-1 "> </div>
      {/* min-h-screen  */}
      <div className="text-white  sm:m-10 flex justify-end overflow-hidden ">
        <SlideAnimation
          variants={variants}
          viewport={true}
          className="sm:flex  w-[80%] sm:w-11/12   mb-20 overflow-hidden"
        >
         <div className=" pl-2 py-1 mt-1 border-l border-t border-b border-gray-900 bg-neutral-900 rounded-l-xl sm:flex">
         <Image
            src="/images/profile.jpg"
            width={700}
            height={400}
            className="object-cover  h-60 sm:h-[88%]  rounded-l-xl rounded-b-none"
            alt="MY Profile Picture"
          />
          <div className="sm:m-5 sm:p-5 bg-main-bg px-4 py-2 ">
            <h4 className="border  border-gray-900 text-sm ">
              Project
            </h4>
            <h4 className="border   border-gray-900 text-end text-sm">
              Ecoomerce
            </h4>
            <h4 className="border   border-gray-900 text-sm ">
              Year
            </h4>
            <h4 className="border   border-gray-900 text-end text-sm ">
              2023
            </h4>
            <h4 className="border   border-gray-900 text-sm ">
              Service
            </h4>
            <h4 className="border   border-gray-900 text-end text-sm ">
              Product Design{" "}
            </h4>
            <h4 className="border   border-gray-900 text-sm ">
              Description
            </h4>
            <p className="border   border-gray-900 text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              eum quidem vitae dolorem itaque, perferendis non unde sint dolore
              saepe exercitationem voluptatem amet asperiores cum eligendi alias
              ducimus. Totam, accusantium!
            </p>
          </div>
         </div>
        </SlideAnimation>
      </div>
    </>
  );
};

export default WorkSecond;
