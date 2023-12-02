import { H1Reveal } from "@/components/animation/RevealAnimation";
import { SlideAnimation } from "@/components/animation/SlideAnimation";
import Image from "next/image";

const variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const WorkTemplate = () => {
  return (
    <>
    
      {/* min-h-screen  */}
      <div className="text-white  sm:my-5 flex justify-end  overflow-hidden  ">
        <SlideAnimation
          variants={variants}
          viewport={true}
          className="sm:flex  w-[80%] md:w-[95%]  mb-20  "
        >
         <div className="m-1 pl-2 py-1 mt-1  h-[75%]   rounded-l-xl md:flex md:bg-neutral-900">
         <Image
            src="/images/profile.jpg"
            width={700}
            height={400}
            className="object-cover  h-60 sm:h-full md:w-[89%]  rounded-l-xl rounded-b-none"
            alt="MY Profile Picture"
          />
          <div className=" sm:p-5  px-4 py-2  md:m-10 border bg-neutral-900 border-neutral-800 rounded-l-lg ">
            <h4 className="border  border-gray-800 p-2 text-sm md:text-xl ">
              Project
            </h4>
            <h4 className="border   border-gray-800 p-2 text-end text-sm  md:text-xl ">
              Ecoomerce
            </h4>
            <h4 className="border   border-gray-800 p-2 text-sm  md:text-xl ">
              Year
            </h4>
            <h4 className="border   border-gray-800 p-2 text-end text-sm  md:text-xl ">
              2023
            </h4>
            <h4 className="border   border-gray-800 p-2 text-sm md:text-xl  ">
              Service
            </h4>
            <h4 className="border   border-gray-800 p-2 text-end text-sm  md:text-xl ">
              Product Design{" "}
            </h4>
            <h4 className="border   border-gray-800 p-2 text-sm  md:text-xl ">
              Description
            </h4>
            <p className="border   border-gray-800 p-2 text-sm md:text-lg">
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

export default WorkTemplate;
